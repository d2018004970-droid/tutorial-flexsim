<#
  build.ps1 — Conversor Word-Mestre -> assets/js/content.js
  Le o Word_Mestre_Tutorial_FlexSim_ongoing.docx (secao "AREA DE TRABALHO"),
  monta a hierarquia Aula -> Modelo -> Etapa -> Coluna -> Campos/Propriedades
  de forma deterministica (sem IA) e gera:
    - assets/js/content.js   (window.TUTORIAL_CONTENT = {...})
    - build/relatorio-build.txt (contagens + avisos)
    - images/web/*.jpg        (copias otimizadas para o site)
  Uso: duplo clique em build/Gerar_Site.bat, ou:
    powershell -NoProfile -ExecutionPolicy Bypass -File build\build.ps1
#>

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression.FileSystem

# ------------------------------------------------------------------
# Caminhos
# ------------------------------------------------------------------
$RootDir       = Split-Path -Parent $PSScriptRoot
$DocxPath      = Join-Path $RootDir 'Word_Mestre_Tutorial_FlexSim_ongoing.docx'
$ImagesDir     = Join-Path $RootDir 'images'
$WebImagesDir  = Join-Path $ImagesDir 'web'
$WordMediaDir  = Join-Path $ImagesDir 'word-media'
$AssetsJsDir   = Join-Path $RootDir 'assets\js'
$ContentJsPath = Join-Path $AssetsJsDir 'content.js'
$ReportPath    = Join-Path $PSScriptRoot 'relatorio-build.txt'
$TempDir       = Join-Path $env:TEMP ('flexsim_build_' + [guid]::NewGuid().ToString('N'))

foreach ($d in @($WebImagesDir, $WordMediaDir, $AssetsJsDir)) {
  if (-not (Test-Path $d)) { New-Item -ItemType Directory -Path $d -Force | Out-Null }
}

if (-not (Test-Path $DocxPath)) {
  Write-Host "ERRO: nao encontrei $DocxPath" -ForegroundColor Red
  exit 1
}

# ------------------------------------------------------------------
# Avisos / relatorio
# ------------------------------------------------------------------
$Warnings = New-Object System.Collections.Generic.List[string]
function Add-Warning([string]$msg) { [void]$Warnings.Add($msg) }

function Escape-Html([string]$s) {
  if ($null -eq $s) { return '' }
  $s = $s -replace '&', '&amp;'
  $s = $s -replace '<', '&lt;'
  $s = $s -replace '>', '&gt;'
  return $s
}

# ------------------------------------------------------------------
# 1) Extrair o .docx (copia antes: o Word pode manter o arquivo aberto)
# ------------------------------------------------------------------
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
if ($RelMap.Count -gt 0) {
  $mediaSrcDir = Join-Path $ExtractDir 'word\media'
  foreach ($fname in $RelMap.Values) {
    $src = Join-Path $mediaSrcDir $fname
    if (Test-Path $src) { Copy-Item $src (Join-Path $WordMediaDir $fname) -Force }
  }
}

# ------------------------------------------------------------------
# 2) Numeracao automatica (numbering.xml) — usada para valores tipo "1 :", "2 :"
# ------------------------------------------------------------------
$NumCounters = @{}
function Get-NextNumber([string]$numId, [string]$ilvl) {
  $key = "$numId|$ilvl"
  if (-not $NumCounters.ContainsKey($key)) {
    $start = 1
    $numNode = $NumXml.SelectSingleNode("//w:num[@w:numId='$numId']", $Ns)
    if ($numNode) {
      $absId = $numNode.SelectSingleNode('w:abstractNumId/@w:val', $Ns).Value
      $lvl = $NumXml.SelectSingleNode("//w:abstractNum[@w:abstractNumId='$absId']/w:lvl[@w:ilvl='$ilvl']", $Ns)
      if ($lvl) {
        $s = $lvl.SelectSingleNode('w:start/@w:val', $Ns)
        if ($s) { $start = [int]$s.Value }
      }
    }
    $NumCounters[$key] = $start
  } else {
    $NumCounters[$key] = $NumCounters[$key] + 1
  }
  return $NumCounters[$key]
}

# ------------------------------------------------------------------
# 3) Achatar document.xml em uma lista de "linhas" (quebra em w:br)
# ------------------------------------------------------------------
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
  # O Word costuma fragmentar runs em negrito adjacentes (mesma formatacao,
  # varios <w:r>). Envolver cada run isoladamente em <b> quebraria numeros e
  # palavras no meio (ex.: "X= " + "42.50" -> "X= </b><b>42.50"). Por isso o
  # <b>/</b> so abre/fecha nas TRANSICOES de estado, nunca por run.
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
        't' {
          Set-BoldState $bold
          [void]$curLine.Append((Escape-Html $child.InnerText))
        }
        'tab' { [void]$curLine.Append(' ') }
        'br' {
          Set-BoldState $false
          [void]$paraLines.Add($curLine.ToString())
          [void]$curLine.Clear()
        }
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
    $lineNumId = $null
    if ($i -eq 0 -and $numId) {
      $n = Get-NextNumber $numId $ilvl
      $lineText = "$n$lineText"
    }
    $Lines.Add([PSCustomObject]@{
      text  = $lineText
      style = $style
    })
  }
}

# ------------------------------------------------------------------
# 4) Recortar a secao "AREA DE TRABALHO" ... "Checklist"
# ------------------------------------------------------------------
$startIdx = -1
$endIdx = $Lines.Count
for ($i = 0; $i -lt $Lines.Count; $i++) {
  if ($Lines[$i].style -eq 'Ttulo1') {
    if ($Lines[$i].text -match 'REA DE TRABALHO') { $startIdx = $i + 1 }
    elseif ($startIdx -ge 0 -and $Lines[$i].text -match '(?i)checklist') { $endIdx = $i; break }
  }
}
if ($startIdx -lt 0) {
  Write-Host 'ERRO: nao encontrei o marcador "AREA DE TRABALHO" (Ttulo1) no Word-Mestre.' -ForegroundColor Red
  exit 1
}
$WorkLines = $Lines.GetRange($startIdx, $endIdx - $startIdx)

# ------------------------------------------------------------------
# 5) Tabelas de marcadores
# ------------------------------------------------------------------
$PropertyTitleMap = @{
  'NOME'            = 'Nome'
  'VISUALS'         = 'Visuals'
  'SOURCE'          = 'Source'
  'QUEUE'           = 'Queue'
  'PROCESSOR'       = 'Processor'
  'CONVEYOR'        = 'Conveyor'
  'DECISION_POINT'  = 'Decision Point'
  'OPTIONS'         = 'Options'
  'A*NAVIGATION'    = 'A* Navigator Properties'
  'A*_NAVIGATOR'    = 'A* Navigator Properties'
  'GLOBAL_TABLE'    = 'Global Table'
  'TABLE'           = 'Table'
  'PORTS'           = 'Ports'
  'TRIGGERS'        = 'Triggers'
  'OUTPUT'          = 'Output'
  'RUN TIME'        = 'Run Time'
  'RUN_TIME'        = 'Run Time'
}
$InlineOnlyTokens = @('CHECK', 'UNCHECK', 'PLUS', 'LETRA_VERMELHA', 'FIM_LETRA_VERMELHA')
$KnownSimpleMarkers = @('TITULO','PRINT','ROTEIRO','OBJETO','CAMINHO','ACAO_MOUSE','OBSERVACAO','PROPERTIES','ETAPA','COLUNA','FIM_COLUNA')

# ------------------------------------------------------------------
# 6) Maquina de estados
# ------------------------------------------------------------------
$Courses = New-Object System.Collections.Generic.List[object]
$curCourse = $null
$curModel = $null
$curStage = $null
$curColumn = $null
$currentTarget = $null   # scriptblock: recebe uma linha de texto e acumula no campo aberto

function New-Column {
  return [PSCustomObject]@{
    title       = $null
    prints      = (New-Object System.Collections.Generic.List[object])
    roteiro     = (New-Object System.Collections.Generic.List[string])
    objeto      = (New-Object System.Collections.Generic.List[string])
    caminho     = (New-Object System.Collections.Generic.List[string])
    acao        = (New-Object System.Collections.Generic.List[string])
    properties  = (New-Object System.Collections.Generic.List[object])
    observacoes = (New-Object System.Collections.Generic.List[object])
  }
}

function Ensure-Column([string]$markerName) {
  if (-not $script:curStage) {
    Add-Warning "[$markerName] fora de uma Etapa — ignorado."
    return $false
  }
  if (-not $script:curColumn) {
    $loc = "Modelo $($script:curModel.number), Etapa $($script:curStage.number)"
    Add-Warning "[$markerName] fora de [COLUNA] — coluna implicita criada ($loc)."
    $script:curColumn = New-Column
    $script:curStage.columns.Add($script:curColumn)
  }
  return $true
}

$reCourse = '^\s*\d+\)\s*Aula\s*0*(\d+)\s*[-\u2013\u2014]?\s*(.*)$'
$reModel  = '^\s*(\d+)\.(\d+)\)\s*Modelo\s*0*(\d+)\b\s*(.*)$'
$reMarker = '^\[([^\]]+)\]\s*(.*)$'

foreach ($ln in $WorkLines) {
  $text = $ln.text
  $style = $ln.style

  if ($style -eq 'Ttulo2') {
    if (-not $text.Trim()) { continue }
    if ($text -match $reCourse) {
      $num = [int]$Matches[1]
      $title = $Matches[2].Trim()
      $curCourse = [PSCustomObject]@{
        id     = ('aula-{0:D2}' -f $num)
        number = $num
        title  = $title
        models = (New-Object System.Collections.Generic.List[object])
      }
      if (-not $title) { Add-Warning "Aula $num sem titulo apos o traco." }
      $Courses.Add($curCourse)
      $curModel = $null; $curStage = $null; $curColumn = $null; $currentTarget = $null
    } else {
      Add-Warning "Linha Ttulo2 nao reconhecida como Aula: '$text'"
    }
    continue
  }

  if ($style -eq 'Ttulo3') {
    if (-not $text.Trim()) { continue }
    if ($text -match $reModel) {
      if (-not $curCourse) {
        Add-Warning "Modelo '$text' encontrado sem Aula corrente — ignorado."
        continue
      }
      $modelNum = [int]$Matches[3]
      $curModel = [PSCustomObject]@{
        id     = ('modelo-{0:D2}' -f $modelNum)
        number = $modelNum
        label  = $text.Trim()
        stages = (New-Object System.Collections.Generic.List[object])
        layout = $null
      }
      $curCourse.models.Add($curModel)
      $curStage = $null; $curColumn = $null; $currentTarget = $null
    } else {
      Add-Warning "Linha Ttulo3 nao reconhecida como Modelo: '$text'"
    }
    continue
  }

  $marker = $null; $rest = $text
  if ($text -match $reMarker) { $marker = $Matches[1]; $rest = $Matches[2] }

  $isImageFile = $marker -and ($marker -match '\.(png|bmp|ico|jpg|jpeg|svg)$')
  $isInlineOnly = $marker -and ($InlineOnlyTokens -contains $marker.ToUpper())

  if (-not $marker -or $isImageFile -or $isInlineOnly) {
    if ($currentTarget) { & $currentTarget $text }
    elseif ($text.Trim()) { Add-Warning "Texto fora de qualquer campo ignorado: '$text'" }
    continue
  }

  $M = $marker.ToUpper()

  switch ($M) {
    'ETAPA' {
      if (-not $curModel) {
        Add-Warning "[ETAPA] '$rest' encontrada sem Modelo corrente — ignorada."
        $curStage = $null; continue
      }
      $stageType = 'normal'
      if ($rest -match '(?i)resultado') { $stageType = 'results' }
      elseif ($rest -match '(?i)final') { $stageType = 'final' }
      $numMatch = [regex]::Match($rest, '(?i)Etapa\s*0*(\d+)')
      $stageNumber = if ($numMatch.Success) { '{0:D2}' -f [int]$numMatch.Groups[1].Value } else { '{0:D2}' -f ($curModel.stages.Count + 1) }
      $curStage = [PSCustomObject]@{
        id      = "$($curModel.id)-etapa-$stageNumber"
        number  = $stageNumber
        type    = $stageType
        title   = $rest.Trim()
        columns = (New-Object System.Collections.Generic.List[object])
      }
      $curModel.stages.Add($curStage)
      $curColumn = $null; $currentTarget = $null
    }
    'COLUNA' {
      if (-not $curStage) { Add-Warning "[COLUNA] fora de uma Etapa — ignorada."; continue }
      $curColumn = New-Column
      $curStage.columns.Add($curColumn)
      $currentTarget = $null
      if ($rest.Trim()) { if ($currentTarget) { & $currentTarget $rest } }
    }
    'FIM_COLUNA' {
      $curColumn = $null; $currentTarget = $null
    }
    'TITULO' {
      if (-not (Ensure-Column $M)) { continue }
      $col = $curColumn
      if ($rest.Trim()) { $col.title = $rest.Trim() }
      $currentTarget = { param($t) if ($t.Trim()) { $col.title = (($col.title, $t.Trim()) -join ' ').Trim() } }.GetNewClosure()
    }
    'PRINT' {
      if (-not (Ensure-Column $M)) { continue }
      $pr = [PSCustomObject]@{ file = $rest.Trim(); w = $null; h = $null }
      $curColumn.prints.Add($pr)
      $currentTarget = { param($t) if ($t.Trim()) { $pr.file = ($pr.file + $t).Trim() } }.GetNewClosure()
    }
    'ROTEIRO' {
      if (-not (Ensure-Column $M)) { continue }
      $lst = $curColumn.roteiro
      if ($rest.Trim() -or $rest -eq '') { $lst.Add($rest) }
      $currentTarget = { param($t) $lst.Add($t) }.GetNewClosure()
    }
    'OBJETO' {
      if (-not (Ensure-Column $M)) { continue }
      $lst = $curColumn.objeto
      $lst.Add($rest)
      $currentTarget = { param($t) $lst.Add($t) }.GetNewClosure()
    }
    'CAMINHO' {
      if (-not (Ensure-Column $M)) { continue }
      $lst = $curColumn.caminho
      $lst.Add($rest)
      $currentTarget = { param($t) $lst.Add($t) }.GetNewClosure()
    }
    'ACAO_MOUSE' {
      if (-not (Ensure-Column $M)) { continue }
      $lst = $curColumn.acao
      $lst.Add($rest)
      $currentTarget = { param($t) $lst.Add($t) }.GetNewClosure()
    }
    'OBSERVACAO' {
      if (-not (Ensure-Column $M)) { continue }
      $block = New-Object System.Collections.Generic.List[string]
      $block.Add($rest)
      $curColumn.observacoes.Add($block)
      $currentTarget = { param($t) $block.Add($t) }.GetNewClosure()
    }
    'PROPERTIES' {
      if (-not (Ensure-Column $M)) { continue }
      $currentTarget = $null
    }
    default {
      if (-not (Ensure-Column $M)) { continue }
      $title = $PropertyTitleMap[$M]
      if (-not $title) {
        $title = $marker
        $loc = "Modelo $($curModel.number), Etapa $($curStage.number)"
        Add-Warning "Marcador desconhecido '[$marker]' tratado como propriedade generica ($loc)."
      }
      $keyNorm = if ($M -eq 'A*_NAVIGATOR') { 'A*NAVIGATION' } else { $M }
      $propObj = [PSCustomObject]@{ key = $keyNorm; title = $title; lines = (New-Object System.Collections.Generic.List[string]) }
      $propObj.lines.Add($rest)
      $curColumn.properties.Add($propObj)
      $currentTarget = { param($t) $propObj.lines.Add($t) }.GetNewClosure()
    }
  }
}

# ------------------------------------------------------------------
# 7) Limpeza: remover linhas totalmente vazias nas bordas de cada campo,
#    checar prints (existencia + dimensao), montar contagens.
# ------------------------------------------------------------------
function Trim-EdgeBlank([System.Collections.Generic.List[string]]$list) {
  while ($list.Count -gt 0 -and $list[0].Trim() -eq '') { $list.RemoveAt(0) }
  while ($list.Count -gt 0 -and $list[$list.Count - 1].Trim() -eq '') { $list.RemoveAt($list.Count - 1) }
}

$countColumns = 0
$countPrints = 0
$countStages = 0
$countModels = 0

foreach ($course in $Courses) {
  foreach ($model in $course.models) {
    $countModels++
    foreach ($stage in $model.stages) {
      $countStages++
      foreach ($col in $stage.columns) {
        $countColumns++
        Trim-EdgeBlank $col.roteiro
        Trim-EdgeBlank $col.objeto
        Trim-EdgeBlank $col.caminho
        Trim-EdgeBlank $col.acao
        foreach ($block in $col.observacoes) { Trim-EdgeBlank $block }
        foreach ($p in $col.properties) { Trim-EdgeBlank $p.lines }
        if (-not $col.title) {
          Add-Warning "Coluna sem [TITULO] em Modelo $($model.number), Etapa $($stage.number)."
        }
        foreach ($pr in $col.prints) {
          $countPrints++
          $imgPath = Join-Path $ImagesDir $pr.file
          if (-not (Test-Path $imgPath)) {
            Add-Warning "Print ausente: '$($pr.file)' (Modelo $($model.number), Etapa $($stage.number))."
          } else {
            try {
              $img = [System.Drawing.Image]::FromFile($imgPath)
              $pr.w = $img.Width; $pr.h = $img.Height
              $img.Dispose()
            } catch { Add-Warning "Nao consegui ler dimensoes de '$($pr.file)'." }
          }
        }
      }
    }
  }
}

# ------------------------------------------------------------------
# 8) Dados derivados: resultados (KPIs) por etapa final/resultados
# ------------------------------------------------------------------
function Get-JoinedText($col) {
  $parts = @()
  $parts += $col.roteiro
  foreach ($b in $col.observacoes) { $parts += $b }
  return ($parts -join "`n")
}

foreach ($course in $Courses) {
  foreach ($model in $course.models) {
    foreach ($stage in $model.stages) {
      if ($stage.type -ne 'results' -and $stage.type -ne 'final') { continue }
      $allText = ($stage.columns | ForEach-Object { Get-JoinedText $_ }) -join "`n"
      $throughput = $null
      $tpMatch = [regex]::Match($allText, '([\d\.]{2,})\s*unidades')
      if ($tpMatch.Success) { $throughput = $tpMatch.Groups[1].Value }
      $processing = New-Object System.Collections.Generic.List[object]
      foreach ($m in [regex]::Matches($allText, '([A-ZÁÉÍÓÚÇ_][A-ZÁÉÍÓÚÇ0-9_]{2,}?)\s*:\s*(\d+,\d+)\s*%')) {
        $processing.Add([PSCustomObject]@{ name = $m.Groups[1].Value; pct = [double]($m.Groups[2].Value -replace ',', '.') })
      }
      if ($throughput -or $processing.Count -gt 0) {
        $stage | Add-Member -NotePropertyName results -NotePropertyValue ([PSCustomObject]@{
          throughput = $throughput
          processing = $processing
          raw        = $allText
        })
      }
    }
  }
}

# ------------------------------------------------------------------
# 9) Layout (mini-mapa): objetos e coordenadas por modelo, acumulado
# ------------------------------------------------------------------
function Normalize-ObjName([string]$n) {
  if (-not $n) { return $n }
  $n = $n.ToUpper().Trim()
  $n = $n -replace '[ÁÀÂÃ]', 'A' -replace '[ÉÊ]', 'E' -replace '[ÍÎ]', 'I' -replace '[ÓÔÕ]', 'O' -replace '[ÚÛ]', 'U' -replace 'Ç', 'C'
  $n = $n -replace '["“”]', ''
  $n = $n.Trim()
  return $n
}

$typeRegex = '(Source|Queue|Processor|Sink|Operator|Conveyor|Decision Point|Combiner|Separator|Global Table|A\*? ?Navigation)'
$globalLayout = @{}   # nome normalizado -> objeto layout (persistente entre modelos)

foreach ($course in $Courses) {
  foreach ($model in $course.models) {
    $newNamesThisModel = New-Object System.Collections.Generic.HashSet[string]

    foreach ($stage in $model.stages) {
      foreach ($col in $stage.columns) {
        # nomes citados em [OBJETO]
        $namesInObjeto = New-Object System.Collections.Generic.List[string]
        $typeInObjeto = $null
        foreach ($ln2 in $col.objeto) {
          $namePattern = $typeRegex + '\s*[-\u2013\u2014]?\s*["\u201c]?([A-Za-z\u00c0-\u00ff0-9_]+)'
          $mm = [regex]::Match($ln2, $namePattern)
          if ($mm.Success) {
            $typeInObjeto = $mm.Groups[1].Value.Trim()
            $nm = Normalize-ObjName $mm.Groups[2].Value
            if ($nm) { $namesInObjeto.Add($nm) }
          }
        }

        # posicoes em properties (VISUALS / NOME+coords / DECISION_POINT)
        foreach ($p in $col.properties) {
          if ($p.key -notin @('VISUALS', 'DECISION_POINT')) { continue }
          $lines2 = $p.lines -join "`n"
          $coordMatches = @([regex]::Matches($lines2, '(?:([A-Za-zÀ-ÿ0-9_]+)\s*[:–-]\s*(?:\[[^\]]*\]\s*)?)?X\s*=\s*(-?[\d.,]+)\s*;\s*Y\s*=\s*(-?[\d.,]+)'))
          $rotMatches = @([regex]::Matches($lines2, '(?:\[[^\]]*\]\s*)?Z\s*=\s*(-?[\d.,]+)\s*$', 'Multiline'))
          for ($ci = 0; $ci -lt $coordMatches.Count; $ci++) {
            $coordM = $coordMatches[$ci]
            $nmPrefix = $coordM.Groups[1].Value
            $x = [double]($coordM.Groups[2].Value -replace ',', '.')
            $y = [double]($coordM.Groups[3].Value -replace ',', '.')
            $targetName = $null
            if ($nmPrefix) { $targetName = Normalize-ObjName $nmPrefix }
            elseif ($namesInObjeto.Count -eq 1) { $targetName = $namesInObjeto[0] }
            elseif ($namesInObjeto.Count -eq $coordMatches.Count -and $namesInObjeto.Count -gt 1) {
              $targetName = $namesInObjeto[$ci]
            } elseif ($namesInObjeto.Count -gt 1) {
              # varios objetos citados mas so uma coordenada sem prefixo: prioriza o(s) nome(s)
              # que ainda NAO tem posicao conhecida (objetos ja posicionados em modelos
              # anteriores nao precisam de uma nova coordenada aqui).
              $unresolved = @($namesInObjeto | Where-Object { -not $globalLayout.ContainsKey($_) })
              if ($unresolved.Count -eq 1) {
                $targetName = $unresolved[0]
              } else {
                $targetName = $namesInObjeto[$namesInObjeto.Count - 1]
                Add-Warning "Posicao ambigua (varios objetos, sem prefixo de nome) em Modelo $($model.number), Etapa $($stage.number) — associada a '$targetName'."
              }
            }
            if ($targetName) {
              $rotVal = 0
              if ($rotMatches.Count -eq $coordMatches.Count) { $rotVal = [double]($rotMatches[$ci].Groups[1].Value -replace ',', '.') }
              elseif ($rotMatches.Count -eq 1) { $rotVal = [double]($rotMatches[0].Groups[1].Value -replace ',', '.') }
              $obj = [PSCustomObject]@{ name = $targetName; type = $typeInObjeto; x = $x; y = $y; rot = $rotVal; stageId = $stage.id }
              $globalLayout[$targetName] = $obj
              [void]$newNamesThisModel.Add($targetName)
            }
          }
        }

        # esteiras (CONVEYOR: Start/End)
        foreach ($p in $col.properties) {
          if ($p.key -ne 'CONVEYOR') { continue }
          $lines2 = $p.lines -join "`n"
          $noise = '(?:<[^>]+>|\[[^\]]*\]|\s)*'
          $s1 = [regex]::Match($lines2, "Start:?$noise" + 'X\s*=\s*(-?[\d.,]+)\s*;' + "$noise" + 'Y\s*=\s*(-?[\d.,]+)')
          $e1 = [regex]::Match($lines2, "End:?$noise" + 'X\s*=\s*(-?[\d.,]+)\s*;' + "$noise" + 'Y\s*=\s*(-?[\d.,]+)')
          if ($s1.Success -and $e1.Success) {
            $convName = "CONVEYOR_$($stage.id)_$($col.title -replace '\s','_')"
            $conv = [PSCustomObject]@{
              name = $convName; type = 'Conveyor'
              x1 = [double]($s1.Groups[1].Value -replace ',', '.'); y1 = [double]($s1.Groups[2].Value -replace ',', '.')
              x2 = [double]($e1.Groups[1].Value -replace ',', '.'); y2 = [double]($e1.Groups[2].Value -replace ',', '.')
              stageId = $stage.id
            }
            $globalLayout[$convName] = $conv
            [void]$newNamesThisModel.Add($convName)
          }
        }
      }
    }

    $objectsSnapshot = @()
    foreach ($k in $globalLayout.Keys) {
      $o = $globalLayout[$k]
      $isNew = $newNamesThisModel.Contains($k)
      if ($o.PSObject.Properties.Match('x1').Count -gt 0) {
        $objectsSnapshot += [PSCustomObject]@{ name = $o.name; type = 'Conveyor'; x1 = $o.x1; y1 = $o.y1; x2 = $o.x2; y2 = $o.y2; stageId = $o.stageId; isNew = $isNew }
      } else {
        $objectsSnapshot += [PSCustomObject]@{ name = $o.name; type = $o.type; x = $o.x; y = $o.y; rot = $o.rot; stageId = $o.stageId; isNew = $isNew }
      }
    }
    $model.layout = [PSCustomObject]@{ objects = $objectsSnapshot }
  }
}

# ------------------------------------------------------------------
# 10) Glossario e atalhos
# ------------------------------------------------------------------
$glossaryMap = @{}
foreach ($course in $Courses) {
  foreach ($model in $course.models) {
    foreach ($obj in $model.layout.objects) {
      if (-not $obj.type) { continue }
      $t = $obj.type
      if (-not $glossaryMap.ContainsKey($t)) { $glossaryMap[$t] = New-Object System.Collections.Generic.HashSet[string] }
      [void]$glossaryMap[$t].Add($obj.stageId)
    }
  }
}
$Glossary = @()
foreach ($k in ($glossaryMap.Keys | Sort-Object)) {
  $Glossary += [PSCustomObject]@{ type = $k; count = $glossaryMap[$k].Count; stages = @($glossaryMap[$k]) }
}

$shortcutPatterns = @(
  @{ key = 'A'; re = '(?i)tecla\s*[“"]?A[”"]?' },
  @{ key = 'S'; re = '(?i)tecla\s*[“"]?S[”"]?' },
  @{ key = 'Q'; re = '(?i)tecla\s*[“"]?Q[”"]?' },
  @{ key = 'Ctrl+C / Ctrl+V'; re = '(?i)CTRL\s*\+\s*C.*CTRL\s*\+\s*V|CTRL\s*\+\s*C|CTRL\s*\+\s*V' },
  @{ key = 'Ctrl + clique'; re = '(?i)CTRL.*clique|segure a tecla ctrl' },
  @{ key = 'Shift + clique'; re = '(?i)shift.*clique' }
)
$shortcutMap = @{}
foreach ($course in $Courses) {
  foreach ($model in $course.models) {
    foreach ($stage in $model.stages) {
      foreach ($col in $stage.columns) {
        $txt = (($col.acao + $col.objeto + $col.roteiro) -join "`n")
        foreach ($sp in $shortcutPatterns) {
          if ($txt -match $sp.re) {
            if (-not $shortcutMap.ContainsKey($sp.key)) { $shortcutMap[$sp.key] = New-Object System.Collections.Generic.HashSet[string] }
            [void]$shortcutMap[$sp.key].Add($stage.id)
          }
        }
      }
    }
  }
}
$Shortcuts = @()
foreach ($k in $shortcutMap.Keys) { $Shortcuts += [PSCustomObject]@{ key = $k; contexts = @($shortcutMap[$k]) } }

# ------------------------------------------------------------------
# 11) Imagens otimizadas para a web (build incremental)
# ------------------------------------------------------------------
$MaxWebWidth = 1400
$JpegQuality = 88
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$JpegQuality)

$optimizedCount = 0
Get-ChildItem $ImagesDir -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|bmp)$' } | ForEach-Object {
  $srcFile = $_
  $destName = [System.IO.Path]::GetFileNameWithoutExtension($srcFile.Name) + '.jpg'
  $destFile = Join-Path $WebImagesDir $destName
  if ((Test-Path $destFile) -and ((Get-Item $destFile).LastWriteTimeUtc -ge $srcFile.LastWriteTimeUtc)) { return }
  try {
    $imgOrig = [System.Drawing.Image]::FromFile($srcFile.FullName)
    $targetW = [Math]::Min($MaxWebWidth, $imgOrig.Width)
    $targetH = [int]([double]$imgOrig.Height * $targetW / $imgOrig.Width)
    $bmp = New-Object System.Drawing.Bitmap($targetW, $targetH)
    $gfx = [System.Drawing.Graphics]::FromImage($bmp)
    $gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gfx.DrawImage($imgOrig, 0, 0, $targetW, $targetH)
    $bmp.Save($destFile, $jpegCodec, $encParams)
    $gfx.Dispose(); $bmp.Dispose(); $imgOrig.Dispose()
    $optimizedCount++
  } catch {
    Add-Warning "Falha ao otimizar imagem '$($srcFile.Name)': $($_.Exception.Message)"
  }
}

# ------------------------------------------------------------------
# 12) Montar objeto final e serializar
# ------------------------------------------------------------------
$Content = [PSCustomObject]@{
  meta = [PSCustomObject]@{
    title = 'Tutorial de Modelagem utilizando FlexSim Education v2027-0'
    generatedAt = (Get-Date -Format 'o')
    source = 'Word_Mestre_Tutorial_FlexSim_ongoing.docx'
    counts = [PSCustomObject]@{ courses = $Courses.Count; models = $countModels; stages = $countStages; columns = $countColumns; prints = $countPrints }
  }
  courses   = $Courses
  glossary  = $Glossary
  shortcuts = $Shortcuts
  warnings  = @($Warnings)
}

$json = $Content | ConvertTo-Json -Depth 30
Set-Content -Path $ContentJsPath -Value "window.TUTORIAL_CONTENT = $json;" -Encoding UTF8

# ------------------------------------------------------------------
# 13) Relatorio
# ------------------------------------------------------------------
$report = New-Object System.Collections.Generic.List[string]
[void]$report.Add('=== RELATORIO DE GERACAO DO SITE — Tutorial FlexSim ===')
[void]$report.Add("Gerado em: $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')")
[void]$report.Add('')
[void]$report.Add("Aulas: $($Courses.Count)")
[void]$report.Add("Modelos: $countModels")
[void]$report.Add("Etapas: $countStages")
[void]$report.Add("Colunas: $countColumns")
[void]$report.Add("Prints referenciados: $countPrints")
[void]$report.Add("Imagens otimizadas nesta execucao: $optimizedCount")
[void]$report.Add('')
[void]$report.Add("=== AVISOS ($($Warnings.Count)) ===")
if ($Warnings.Count -eq 0) {
  [void]$report.Add('Nenhum aviso. Tudo certo!')
} else {
  foreach ($w in $Warnings) { [void]$report.Add("- $w") }
}
Set-Content -Path $ReportPath -Value $report -Encoding UTF8

Remove-Item $TempDir -Recurse -Force -ErrorAction SilentlyContinue

Write-Host ''
Write-Host '=== Site gerado com sucesso ===' -ForegroundColor Green
Write-Host "Aulas: $($Courses.Count)  Modelos: $countModels  Etapas: $countStages  Colunas: $countColumns  Prints: $countPrints"
Write-Host "Avisos: $($Warnings.Count)  (veja build\relatorio-build.txt)"
Write-Host "content.js gerado em: $ContentJsPath"

