<#
  docx_para_md.ps1 — Converte um Word-Mestre (.docx) no formato antigo para o
  novo formato .md (usado a partir de agora como fonte de edicao).
  Uso (uma vez, para migrar; ou sempre que alguem te mandar conteudo em .docx):
    powershell -NoProfile -ExecutionPolicy Bypass -File build\docx_para_md.ps1 -DocxPath "caminho\para\arquivo.docx" -OutMdPath "Word_Mestre.md"
  So converte a secao "AREA DE TRABALHO" (o resto do Word era so instrucao,
  que agora vive em docs/Guia_Word_Mestre.html).
#>
param(
  [Parameter(Mandatory=$true)][string]$DocxPath,
  [Parameter(Mandatory=$true)][string]$OutMdPath
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$TempDir = Join-Path $env:TEMP ('docx2md_' + [guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
$CopyPath = Join-Path $TempDir 'source.docx'
$fsIn = [System.IO.File]::Open($DocxPath, 'Open', 'Read', 'ReadWrite')
$fsOut = [System.IO.File]::Create($CopyPath)
$fsIn.CopyTo($fsOut)
$fsOut.Close(); $fsIn.Close()
$ExtractDir = Join-Path $TempDir 'extract'
[System.IO.Compression.ZipFile]::ExtractToDirectory($CopyPath, $ExtractDir)

[xml]$DocXml = Get-Content -Raw -Encoding UTF8 (Join-Path $ExtractDir 'word\document.xml')
[xml]$NumXml = Get-Content -Raw -Encoding UTF8 (Join-Path $ExtractDir 'word\numbering.xml')
[xml]$RelsXml = Get-Content -Raw -Encoding UTF8 (Join-Path $ExtractDir 'word\_rels\document.xml.rels')
$Ns = New-Object System.Xml.XmlNamespaceManager($DocXml.NameTable)
$Ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$Ns.AddNamespace('a', 'http://schemas.openxmlformats.org/drawingml/2006/main')
$Ns.AddNamespace('r', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')

$RelMap = @{}
foreach ($rel in $RelsXml.Relationships.Relationship) {
  if ($rel.Type -like '*/image') { $RelMap[$rel.Id] = Split-Path $rel.Target -Leaf }
}
$WordMediaOutDir = Join-Path (Split-Path -Parent $OutMdPath) 'images\word-media'
if ($RelMap.Count -gt 0) {
  if (-not (Test-Path $WordMediaOutDir)) { New-Item -ItemType Directory -Path $WordMediaOutDir -Force | Out-Null }
  $mediaSrcDir = Join-Path $ExtractDir 'word\media'
  foreach ($fname in $RelMap.Values) {
    $src = Join-Path $mediaSrcDir $fname
    if (Test-Path $src) { Copy-Item $src (Join-Path $WordMediaOutDir $fname) -Force }
  }
}

$NumCounters = @{}
function Get-NextNumber([string]$numId, [string]$ilvl) {
  $key = "$numId|$ilvl"
  if (-not $NumCounters.ContainsKey($key)) {
    $start = 1
    $numNode = $NumXml.SelectSingleNode("//w:num[@w:numId='$numId']", $Ns)
    if ($numNode) {
      $absId = $numNode.SelectSingleNode('w:abstractNumId/@w:val', $Ns).Value
      $lvl = $NumXml.SelectSingleNode("//w:abstractNum[@w:abstractNumId='$absId']/w:lvl[@w:ilvl='$ilvl']", $Ns)
      if ($lvl) { $s = $lvl.SelectSingleNode('w:start/@w:val', $Ns); if ($s) { $start = [int]$s.Value } }
    }
    $NumCounters[$key] = $start
  } else { $NumCounters[$key] = $NumCounters[$key] + 1 }
  return $NumCounters[$key]
}

$Lines = New-Object System.Collections.Generic.List[object]
$Body = $DocXml.SelectSingleNode('//w:body', $Ns)

foreach ($p in $Body.ChildNodes) {
  if ($p.LocalName -ne 'p') { continue }
  $styleNode = $p.SelectSingleNode('w:pPr/w:pStyle/@w:val', $Ns)
  $style = if ($styleNode) { $styleNode.Value } else { $null }
  $numIdNode = $p.SelectSingleNode('w:pPr/w:numPr/w:numId/@w:val', $Ns)
  $ilvlNode  = $p.SelectSingleNode('w:pPr/w:numPr/w:ilvl/@w:val', $Ns)
  $numId = if ($numIdNode) { $numIdNode.Value } else { $null }
  $ilvl  = if ($ilvlNode) { $ilvlNode.Value } else { '0' }

  $curLine = New-Object System.Text.StringBuilder
  $paraLines = New-Object System.Collections.Generic.List[string]
  $boldOpen = $false
  function Set-BoldState([bool]$want) {
    if ($want -and -not $script:boldOpen) { [void]$script:curLine.Append('<b>'); $script:boldOpen = $true }
    elseif (-not $want -and $script:boldOpen) { [void]$script:curLine.Append('</b>'); $script:boldOpen = $false }
  }

  foreach ($run in $p.SelectNodes('.//w:r', $Ns)) {
    $bold = $false
    $bNode = $run.SelectSingleNode('w:rPr/w:b', $Ns)
    if ($bNode) {
      $bVal = $bNode.GetAttribute('val', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
      $bold = ($bVal -ne '0' -and $bVal -ne 'false')
    }
    foreach ($child in $run.ChildNodes) {
      switch ($child.LocalName) {
        't' { Set-BoldState $bold; [void]$curLine.Append($child.InnerText) }
        'tab' { [void]$curLine.Append(' ') }
        'br' { Set-BoldState $false; [void]$paraLines.Add($curLine.ToString()); [void]$curLine.Clear() }
        'drawing' {
          $blip = $child.SelectSingleNode('.//a:blip/@r:embed', $Ns)
          if ($blip -and $RelMap.ContainsKey($blip.Value)) {
            Set-BoldState $bold
            [void]$curLine.Append("[IMG:$($RelMap[$blip.Value])]")
          }
        }
        'pict' { Set-BoldState $bold; [void]$curLine.Append('[IMG:?]') }
        default { }
      }
    }
  }
  Set-BoldState $false
  [void]$paraLines.Add($curLine.ToString())

  for ($i = 0; $i -lt $paraLines.Count; $i++) {
    $lineText = $paraLines[$i]
    if ($i -eq 0 -and $numId) {
      $n = Get-NextNumber $numId $ilvl
      $lineText = "$n$lineText"
    }
    $Lines.Add([PSCustomObject]@{ text = $lineText; style = $style })
  }
}

$startIdx = -1
$endIdx = $Lines.Count
for ($i = 0; $i -lt $Lines.Count; $i++) {
  if ($Lines[$i].style -eq 'Ttulo1') {
    if ($Lines[$i].text -match 'REA DE TRABALHO') { $startIdx = $i + 1 }
    elseif ($startIdx -ge 0 -and $Lines[$i].text -match '(?i)checklist') { $endIdx = $i; break }
  }
}
if ($startIdx -lt 0) { Write-Host 'ERRO: nao encontrei "AREA DE TRABALHO" no documento.' -ForegroundColor Red; exit 1 }
$WorkLines = $Lines.GetRange($startIdx, $endIdx - $startIdx)

$out = New-Object System.Collections.Generic.List[string]
$out.Add('<!-- Word-Mestre (Markdown) — Tutorial FlexSim. Edite este arquivo no VS Code. -->')
$out.Add('<!-- Guia completo de marcadores e regras: docs/Guia_Word_Mestre.html -->')
$out.Add('')
foreach ($ln in $WorkLines) {
  if ($ln.style -eq 'Ttulo2') { $out.Add('## ' + $ln.text.Trim()) }
  elseif ($ln.style -eq 'Ttulo3') { $out.Add('### ' + $ln.text.Trim()) }
  else { $out.Add($ln.text) }
}

$utf8bom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText($OutMdPath, ($out -join "`r`n"), $utf8bom)
Remove-Item $TempDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Gerado: $OutMdPath ($($out.Count) linhas)" -ForegroundColor Green
