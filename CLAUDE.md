# Tutorial FlexSim — contexto do projeto

Site-tutorial de modelagem/simulação com FlexSim Education v2027-0 (Aulas → Modelos → Etapas),
publicado no GitHub Pages a partir deste repositório. Gerado de forma **determinística** (sem IA
no meio) a partir de um arquivo de texto editado pelo usuário.

## Arquitetura (pipeline)

```
Word_Mestre.md (usuário edita no VS Code)
        │  build\Gerar_Site.bat  →  powershell build\build.ps1
        ├──→ assets/js/content.js            (dados; index.html + app.js leem isso)
        ├──→ Word_Mestre_Visualizacao.docx   (gerado, SÓ LEITURA, pra visualizar bonito)
        ├──→ images/web/*.jpg                (prints otimizados, incremental)
        └──→ build/relatorio-build.txt       (contagens + avisos)
```

- `index.html`, `assets/css/style.css`, `assets/js/app.js` — o site em si (design "Soft Tech",
  claro/escuro). **Nunca mudam** por causa de conteúdo — só quando se pede uma mudança de visual/ferramenta.
- `assets/js/content.js` — único arquivo de dados; nunca editar à mão, é sempre gerado.
- `Word_Mestre.md` — **fonte de verdade do conteúdo**. Sintaxe: marcadores entre colchetes
  (`[ETAPA]`, `[COLUNA]`, `[PRINT]`, `[ROTEIRO]`, `[OBJETO]`, `[PROPERTIES]`, `[VISUALS]`, etc.),
  `##` para Aula, `###` para Modelo, `<b>texto</b>` para negrito. Regra de quebra de linha: uma
  linha em branco = novo parágrafo; sem linha em branco = mesma caixa com `<br>`; quantidade de
  linhas em branco nunca importa (1 ou 5 dão o mesmo resultado; excesso é sempre aparado).
- `build/build.ps1` — o conversor. PowerShell 5.1 puro (sem Node/Python/pandoc no ambiente do
  usuário). Lê `Word_Mestre.md` linha a linha, monta a hierarquia Aula→Modelo→Etapa→Coluna, resolve
  posições/tipos de objeto para o mini-mapa, KPIs de resultados, glossário e atalhos.
- `build/modelo_estilos.docx` — "molde" de estilos (Título 1/2/3, tema, fontes) copiado do Word
  original já formatado; usado só para gerar `Word_Mestre_Visualizacao.docx`. Não editar/apagar.
- `build/docx_para_md.ps1` — utilitário usado uma vez para migrar o Word antigo para `.md`; útil de
  novo só se alguém mandar conteúdo pronto em `.docx`.
- `docs/Guia_Word_Mestre.html` — guia completo pro usuário (tabela de marcadores, convenções,
  como ler o relatório, histórico de inconsistências já corrigidas no conteúdo). **Sempre consultar
  antes de responder dúvidas sobre marcadores/sintaxe** — é a fonte oficial, mantida atualizada.
- `.vscode/tutorial-flexsim.code-snippets` — snippets de VS Code (`etapa1`, `etapa2`, `coluna`,
  `modelo`, `aula`, `triggers`, `resultados`). O usuário prefere digitar direto com autocomplete
  próprio a usar os snippets de bloco inteiro — não insistir nisso, só mencionar que existem.

## Fluxo de trabalho do usuário (já treinado, não precisa reexplicar do zero)

1. Edita `Word_Mestre.md` no VS Code (abre a **pasta**, não o arquivo avulso, senão os snippets somem).
2. Salva.
3. Roda `build\Gerar_Site.bat` (duplo clique, ou `.\build\Gerar_Site.bat` no terminal do VS Code).
4. Confere `build\relatorio-build.txt`.
5. Publica pelo **GitHub Desktop**: Commit to main → **Push origin** (usuário já esqueceu o Push
   uma vez — se o site não atualizar depois de um commit, é o primeiro suspeito).

Novos prints sempre vão em `images/` (nunca em `images/web/` ou `images/word-media/`, que são geradas).

## ⚠️ Diretório correto do projeto

Este repositório (`flexsim-site-repo\tutorial-flexsim`) é o **único** que deve ser editado/buildado.
Existe uma pasta antiga de protótipo em `Desktop\Mestrado\Estágio Docência\Protótipo\flexsim_tutorial_visual_v3`
que **parece o mesmo projeto** (mesmos nomes de arquivo: `build.ps1`, `content.js`, `app.js`) mas é uma
versão desatualizada/abandonada — o `build.ps1` de lá inclusive lê direto um `.docx` como fonte
(`Word_Mestre_Tutorial_FlexSim_ongoing.docx`), enquanto aqui a fonte é `Word_Mestre.md`. Já aconteceu
de uma edição ser feita e testada na pasta errada (Protótipo) sem efeito nenhum no site real, gerando
confusão. Antes de editar `build.ps1` ou rodar qualquer build:
1. Confirmar que o diretório de trabalho atual é este (`flexsim-site-repo\tutorial-flexsim`) — rodar
   `pwd`/checar o caminho se houver qualquer dúvida.
2. Nunca assumir o diretório de trabalho corrente do terminal; sempre usar caminho absoluto ou `cd`
   explícito antes de rodar `build.ps1`, pois o shell pode ter ficado em outra pasta de uma tarefa
   anterior.
3. Se o usuário mencionar um caminho diferente deste (ex. `Protótipo\...`), perguntar antes de agir —
   não editar essa pasta.

## Convenções e armadilhas conhecidas

- **PowerShell 5.1 + acentos**: qualquer `.ps1` com texto não-ASCII em comentários/strings precisa
  de BOM UTF-8, senão o parser lê como CP1252 e corrompe strings, com erros de sintaxe apontando pra
  linha errada. Sempre forçar BOM depois de escrever/editar um `.ps1`:
  `[IO.File]::WriteAllText($path, [IO.File]::ReadAllText($path,[Text.Encoding]::UTF8), (New-Object Text.UTF8Encoding($true)))`.
  Regex .NET não aceita `\x{XXXX}`; usar `\uXXXX` (4 dígitos) ou o caractere literal direto.
- **Marcador desconhecido não quebra nada** — vira propriedade genérica automaticamente (mas o
  título fica menos bonito). Ainda assim, ao surgir um marcador de propriedade novo (como aconteceu
  com `[MULTIPROCESSOR]`), vale adicionar ao `$PropertyTitleMap` do `build.ps1` (título bonito) e,
  se for um tipo de objeto do FlexSim, também ao `$typeRegex` (pra não ser confundido com um tipo
  parecido, ex. "MultiProcessor" contém "Processor" como substring) — testar antes com um trecho
  isolado antes de aplicar no `Word_Mestre.md` real.
- **Nomes de objeto inconsistentes** (ex.: "SAIDA_CLIENTES" vs "SAIDAS_CLIENTES") criam um objeto
  fantasma duplicado no mini-mapa, já que o layout é indexado por nome normalizado. Se o mini-mapa
  mostrar um objeto na posição errada/antiga, checar grafia do nome primeiro.
- **Reposicionar um objeto** exige um bloco `[VISUALS]` (ou `[DECISION_POINT]`) com a nova
  coordenada — mencionar a nova posição só em `[ROTEIRO]`/`[OBSERVACAO]` (texto livre) não é lido
  pelo mini-mapa.
- Antes de aplicar qualquer mudança no `build.ps1`, testar contra uma cópia isolada (copiar
  `build/` + `images/` pra uma pasta temp com um `Word_Mestre.md` de teste) e comparar contagens
  (Aulas/Modelos/Etapas/Colunas/Prints) com a execução anterior — não deve mudar por acidente.

## Estado atual

Site publicado e funcionando no GitHub Pages. Migração de `.docx` para `.md` concluída e validada
(Word original removido do repo). Todas as inconsistências de conteúdo do Word original foram
corrigidas, exceto um item cosmético documentado em `docs/Guia_Word_Mestre.html` (seção 7): um
`[OBJETO] Conveyor` duplicado no Modelo 03 · Etapa 05 (não afeta o site).
