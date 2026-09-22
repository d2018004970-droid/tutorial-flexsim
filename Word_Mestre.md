<!-- Word-Mestre (Markdown) — Tutorial FlexSim. Edite este arquivo no VS Code. -->
<!-- Guia completo de marcadores e regras: docs/Guia_Word_Mestre.html -->

<b>IMPORTANTE: </b>É nesta seção que você irá inserir as etapas reais. A seção 5 é apenas consulta.
## 1) Aula 01
### 1.1) Modelo 01
[ETAPA] Etapa 01 - Chegada de placas virgens ao modelo.
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO1_ETAPA1_1.png

[ROTEIRO]
NESTE PRIMEIRO MODELO,
PLACAS VIRGENS CHEGAM PELO SOURCE.


[OBJETO]
Source

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Source.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando chegada das placas ao modelo

[PRINT]
AULA1_MODELO1_ETAPA1_2.png

[ROTEIRO]
“SOURCE: CHEGADA_PLACAS_VIRGENS”:
POSICIONADO EM:
X = 0.00 ; Y = 0.00 ; Z = 0.00
ESSAS CHEGADAS OCORREM EM INTERVALOS DE 10 s A PARTIR DE t = 0

[OBJETO]
Source – “CHEGADA_PLACAS_VIRGENS”

[ACAO_MOUSE]
Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[PROPERTIES]
[NOME]
CHEGADA_PLACAS_VIRGENS

[VISUALS]
[Mid6_small.png] X = 0.00 ; Y = 0.00 ; Z = 0.00

[SOURCE]
Arrival Style: Inter-Arrival Time
[CHECK] Arrival at time 0
Inter-Arrival Time: 10 s

[FIM_COLUNA]


[ETAPA] Etapa 02 – Fila/Estoque das Placas Virgens
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO1_ETAPA2_1.png

[ROTEIRO]
APÓS ENTRAREM NO SISTEMA,
AS PLACAS VÃO PARA UMA QUEUE.

[OBJETO]
Queue

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Queue.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando estoque de placas virgens

[PRINT]
AULA1_MODELO1_ETAPA2_2.png

[ROTEIRO]
“QUEUE: PLACAS_VIRGENS”:
CAPACIDADE INFINITA.
POSICIONADO EM:
X = 10.00 ; Y = 0.00 ; Z = 0.00
ESSAS CHEGADAS OCORREM EM INTERVALOS DE 10 s A PARTIR DE t = 0

[OBJETO]
Queue – “PLACAS_VIRGENS”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Em seguida, clique primeiro no Source e depois na Queue.

[PROPERTIES]
[NOME]
PLACAS_VIRGENS

[VISUALS]
[Mid6_small.png] X = 10.00 ; Y = 0.00 ; Z = 0.00

[QUEUE]
Max Content = 1000000

[FIM_COLUNA]


[ETAPA] Etapa 03 – Diferentes modelos de Placas Virgens
[COLUNA]
[TITULO]
Configurando modelos de placas virgens

[PRINT]
AULA1_MODELO1_ETAPA3_1.png
[PRINT]
AULA1_MODELO1_ETAPA3_2.png

[ROTEIRO]
CHEGAM DOIS MODELOS DIFERENTES,
ALEATORIAMENTE NA MESMA PROPORÇÃO
MODELOS E COLOCAÇÕES:
1 – GREEN; 2 - YELLOW

[OBJETO]
Source – CHEGADAS_PLACAS_VIRGENS

[TRIGGERS]
Criar Modelos:
On Creation → Data → Set Label by Percentage:
Object: <b>item</b>
Label: <b>“MODELO”</b>
Percent:<b>50</b>
Value:<b>1</b>
Clique no [PLUS] abaixo de Label para criar um novo “MODELO” e liberar o campo para preencher o Modelo 2 abaixo.
Percent:<b>50</b>
Value:<b>2</b>

[TRIGGERS]
Criar Coloração por Modelos:
On Creation → Visual → Set Color By Case:
Value: <b>item.MODELO</b>
Object: <b>item</b>
Clique no [PLUS] abaixo de Object para adicionar os campos necessários ao preenchimento dos dois modelos.

Preencha Value na primeira coluna e Color na segunda coluna, associando cada valor do campo MODELO à respectiva cor.
1 : <b>[down_arrow.bmp] </b>Color.green
2 : <b>[down_arrow.bmp] </b>Color.yellow

[OBSERVACAO]
Ao adicionar novos modelos em Set Label by Percentage, distribua as porcentagens entre todos os modelos de forma que a soma dos valores seja sempre igual a 100%.

[FIM_COLUNA]


[ETAPA] Etapa 04 – Impressoras das Placas Virgens
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO1_ETAPA4_1.png

[ROTEIRO]
DESSE ESTOQUE, AS PLACAS VÃO PARA OS
“PROCESSOR: IMPRESSORAS 1;2”
Idênticas e paralelas

[OBJETO]
Processor

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Processor.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.

Adicione um Processor e configure-o conforme as orientações da coluna “Configurando impressoras”. Depois, selecione o Processor “IMPRESSORA_1”, utilize CTRL+C para copiá-lo e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações do Processor original.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando impressoras

[PRINT]
AULA1_MODELO1_ETAPA4_2.png
[PRINT]
AULA1_MODELO1_ETAPA4_3.png

[ROTEIRO]
“PROCESSOR: IMPRESSORAS 1;2”
TC = 20 [s/u]
POSICIONADAS EM:
IMPRESSORA_1, [Mid6_small.png] X=20.00 ; Y=3.50 ; Z=0.00
IMPRESSORA_2, [Mid6_small.png] X=20.00 ; Y=-3.50 ; Z=0.00

[OBJETO]
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”

[ACAO_MOUSE]
Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado.

Neste caso, recomenda-se realizar as conexões nesta ordem:

1. “PLACAS_VIRGENS” → “IMPRESSORA_1”
2. “PLACAS_VIRGENS” → “IMPRESSORA_2”

[PROPERTIES]
[NOME]
IMPRESSORA_1
IMPRESSORA_2

[VISUALS]
IMPRESSORA_1:[Mid6_small.png] X = 20.00 ; Y = 3.50 ; Z = 0.00
IMPRESSORA_2:[Mid6_small.png] X = 20.00 ; Y = -3.50 ; Z = 0.00

[PROCESSOR]
Process Time: <b>20</b> (s)
[FIM_COLUNA]


[ETAPA] Etapa 05 – Saída das Placas para os clientes
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO1_ETAPA5_1.png

[ROTEIRO]
APÓS SEREM IMPRESSAS, AS PLACAS DEIXARÃO O SISTEMA PELO
“SINK: SAIDA_CLIENTES”

[OBJETO]
Sink

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Sink.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando saída do modelo

[PRINT]
AULA1_MODELO1_ETAPA5_2.png

[ROTEIRO]
“SINK: SAIDA_CLIENTES”
POSICIONADO EM:
[Mid6_small.png] X=30.00 ; Y=0.00 ; Z=0.00

[OBJETO]
Sink – “SAIDA_CLIENTES”

[ACAO_MOUSE]
Conectar objetos (Atalho: Letra “A” do teclado - clicar primeiro na Impressora e depois no Sink.)

[OBSERVACAO]
Assim como se fez a ligação da Queue “PLACAS_VIRGENS” aos Processors “IMPRESSORA_1” e “IMPRESSORA_2”, priorize conectar na ordem, objeto 1 na porta 1 e objeto 2 na porta 2, tanto input quanto output.

[PROPERTIES]
[NOME]
SAIDA_CLIENTES

[VISUALS]
[Mid6_small.png] X = 30.00 ; Y = 0.00 ; Z = 0.00
[FIM_COLUNA]


[ETAPA] Etapa 06 – Filtrar qual impressora processa cada modelo de placa
[COLUNA]
[TITULO]
Configurando saídas da Queue
[PRINT]
AULA1_MODELO1_ETAPA6_1.png

[ROTEIRO]
CADA MODELO DEVERÁ ENTRAR EM UMA IMPRESSORA ESPECÍFICA:
O MODELO 1 NA IMPRESSORA 1 E O MODELO 2 NA IMPRESSORA 2

[OBJETO]
Queue - PLACAS_VIRGENS

[PROPERTIES]
[OUTPUT]
Send to Port → Port By Case
Case Function: item.MODELO
Clique no [PLUS] abaixo de Case Function para adicionar os campos necessários aos dois modelos.

Preencha Case na primeira coluna e Port na segunda coluna, associando cada modelo à respectiva porta de saída.
Case: 1  Port: 1
Case: 2  Port: 2
[FIM_COLUNA]


[ETAPA] Etapa 07 – Ajustar turno de trabalho de 08:00 até 16:00 horas.
[COLUNA]
[TITULO]
Configurando Run Time

[PRINT]
AULA1_MODELO1_ETAPA7_1.png

[ROTEIRO]
AJUSTE O RUN TIME PARA 1 TURNO DAS 08h00 ÀS 16h00,
SE NECESSÁRIO, COM O AUXÍLIO DO EDIT MODEL SETTINGS

[CAMINHO]
Barra da Superior → Run Time [IMG:image2.png]

[Run Time]
Start Time: 08:00:00
[CHECK] Stop Times: 16:00:00
[FIM_COLUNA]


[ETAPA] Etapa Final – Elaborar dados de output e gráficos de estados (Dashboard)
[COLUNA]
[TITULO]
Inserindo gráficos

[ROTEIRO]
Quantidade expedida
2.829 unidades

[PRINT]
AULA1_MODELO1_ETAPAFINAL1_1.png
[PRINT]
AULA1_MODELO1_ETAPAFINAL1_2.png
[PRINT]
AULA1_MODELO1_ETAPAFINAL1_3.png
[PRINT]
AULA1_MODELO1_ETAPAFINAL1_4.png

[CAMINHO]
Imagem 1 - Barra Superior → Dashboards → Add Blank Dashboard
Imagem 2 – Output → Bar Chart**

[ACAO_MOUSE]
**: Da Imagem 2, deve-se arrastar com o mouse “Bar Chart” até a área vazia de Dashboard.

[PROPERTIES]
[NOME]
QUANTIDADE EXPEDIDA

[OPTIONS]
Throughput Display: PLACAS IMPRESSAS

[OBSERVACAO]
É possível alterar a cor da barra que irá representa a quantidade expedida na aba Colors em Properties.

[FIM_COLUNA]

[COLUNA]
[TITULO]
Gráficos de Estados

[PRINT]
AULA1_MODELO1_ETAPAFINAL2_1.png
[PRINT]
AULA1_MODELO1_ETAPAFINAL2_2.png
[PRINT]
AULA1_MODELO1_ETAPAFINAL2_3.png

[ROTEIRO]
Elaborar e interpretar os gráficos de estados
PROCESSING
IMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%

[CAMINHO]
Imagem 1 - State → Pie Chart**
Imagem 2 – [PLUS] → Select Objects → +Processor → IMPRESSORA_1 + IMPRESSORA_2 → Select*

[ACAO_MOUSE]
**: Da Imagem 1, deve-se arrastar com o mouse “Bar Chart” até a área vazia de Dashboard.

*: O caminho da Imagem 2 é uma forma alternativa de selecionar os elementos que serão visualizados no gráfico, alternativo ao que fizemos no gráfico de quantidade expedida ao lado, usando o pincel.
[FIM_COLUNA]

[ETAPA] Resultados
[COLUNA]
[TITULO]
Checando performance do modelo simulado.

[PRINT]
AULA1_MODELO1_RESULTADOS_1.png
[PRINT]
AULA1_MODELO1_RESULTADOS_2.png

[ROTEIRO]
Quantidade expedida: 2.829 unidades
PROCESSING
IMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%
[FIM_COLUNA]


### 1.2) Modelo 02
[ETAPA] Etapa 01 – Operadores dedicados para as impressoras
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO2_ETAPA1_1.png

[ROTEIRO]
NESTE MODELO, VAMOS ACRESCENTAR:
UM OPERADOR DEDICADO PARA CADA IMPRESSORA

[OBJETO]
Operator

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Task Executers (Executores de Tarefas) → Operator.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local próximo do desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando posição dos operadores

[PRINT]
AULA1_MODELO2_ETAPA1_2.png

[ROTEIRO]
POSICIONADOS EM:
OPERADOR_IMPRESSORA_1, X = 20.00 ; Y = 6.00 ; Z = 0.00
OPERADOR_IMPRESSORA_2, X = 20.00 ; Y = -1.00 ; Z = 0.00
( ambos com rotação de 270º no eixo Z )

[OBJETO]
Operator – “OPERADOR_IMPRESSORA_1”
Operator – “OPERADOR_IMPRESSORA_2”

[ACAO_MOUSE]
Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[PROPERTIES]
[NOME]
OPERADOR_IMPRESSORA_1
OPERADOR_IMPRESSORA_2

[VISUALS]
OPERADOR_IMPRESSORA_1 – 
[Mid6_small.png] X = 20.00 ; Y = 6.00 ; Z = 0.00
[rotate_arrow.png] Z = 270.00
OPERADOR_IMPRESSORA_2 – 
[Mid6_small.png] X = 20.00 ; Y = -1.00 ; Z = 0.00
[rotate_arrow.png] Z = 270.00

[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Operador ao Processo (Método 1)

[PRINT]
AULA1_MODELO2_ETAPA1_3.png
[PRINT]
AULA1_MODELO2_ETAPA1_4.png

[ROTEIRO]
o OPERADOR_IMPRESSORA_1 realizará o processamento na IMPRESSORA_1,
enquanto o OPERADOR_IMPRESSORA_2 realizará o processamento na IMPRESSORA_2

[ACAO_MOUSE]
1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)

2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[OBSERVACAO]
Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam.


[PROPERTIES]
[NOME]
IMPRESSORA_1
IMPRESSORA_2

[PROCESSOR]
[CHECK] Use Operator(s) : 1
Operator: current.centerObjects[1] 
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Operador ao Processo (Método 2)

[PRINT]
AULA1_MODELO2_ETAPA1_3.png
[PRINT]
AULA1_MODELO2_ETAPA1_5.png

[ROTEIRO]
o OPERADOR_IMPRESSORA_1 realizará o processamento na IMPRESSORA_1,
enquanto o OPERADOR_IMPRESSORA_2 realizará o processamento na IMPRESSORA_2

[ACAO_MOUSE]
1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)

2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

3°: Dentro de |+|Processor, após habilitar ([CHECK] Use Operator(s)), selecione o Operator com [eyedropper.png] e depois clicando em cima do “OPERADOR_IMPRESSORA_X” para a “IMPRESSORA_X”.

[OBSERVACAO]
Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam.
[FIM_COLUNA]


[ETAPA] Etapa 02 – Movimentadores das Placas Virgens entre a fila e as impressoras.
[COLUNA]
[TITULO]
Adicionando objeto

[PRINT]
AULA1_MODELO2_ETAPA1_1.png

[ROTEIRO]
E DOIS MOVIMENTADORES DE MATERIAIS,
QUE LEVARÃO AS PLACAS VIRGENS

[OBJETO]
Operator

[CAMINHO]
Barra da Esquerda → Library (Biblioteca) → Task Executers (Executores de Tarefas) → Operator.

[ACAO_MOUSE]
Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local próximo do desejado no Mapa 3D.

Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo.

[OBSERVACAO]
Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.

Adicione um Operator e configure-o conforme as orientações da coluna “Configurando posição dos movimentadores”. Depois, selecione o Operator “MOVIMENTADOR_1”, utilize CTRL+C para copiá-lo e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações do Operator original.
[FIM_COLUNA]


[COLUNA]
[TITULO]
Configurando posição dos movimentadores

[PRINT]
AULA1_MODELO2_ETAPA2_2.png

[ROTEIRO]
DO “ QUEUE: PLACAS_VIRGENS ” PARA OS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”
POSICIONADOS EM:
MOVIMENTADOR_1, X = 15.00 ; Y =  3.50 ; Z = 0.00
MOVIMENTADOR_2, X = 15.00 ; Y = -3.50 ; Z = 0.00
( ambos com rotação de 180º no eixo Z )

[OBJETO]
Operator – “MOVIMENTADOR_1”
Operator – “MOVIMENTADOR_2”

[ACAO_MOUSE]
Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[PROPERTIES]
[NOME]
MOVIMENTADOR_1
MOVIMENTADOR_2

[VISUALS]
MOVIMENTADOR_1 – 
[Mid6_small.png] X = 15.00 ; Y = 3.50 ; Z = 0.00
[rotate_arrow.png] Z = 180.00
MOVIMENTADOR_2 – 
[Mid6_small.png] X = 15.00 ; Y = -3.50 ; Z = 0.00
[rotate_arrow.png] Z = 180.00
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Movimentador ao Processo

[PRINT]
AULA1_MODELO2_ETAPA2_3.png
[PRINT]
AULA1_MODELO2_ETAPA2_4.png

[ROTEIRO]
SENDO QUE:
o MOVIMENTADOR_1 deverá abastecer somente a IMPRESSORA_1,
enquanto que o MOVIMENTADOR_2 deverá abastecer somente a IMPRESSORA_2;

[OBJETO]
Queue – “PLACAS_VIRGENS”

[ACAO_MOUSE]
1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)

2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[OBSERVACAO]
Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam.


[PROPERTIES]
[NOME]
PLACAS_VIRGENS

[OUTPUT]
[CHECK] Use Transport:
[down_arrow.bmp] → Center Port By Case:
Case Function: item.MODELO
Clique duas vezes no [PLUS] abaixo de Case Function para criar um novo Case e liberar os campos para preencher os valores de Setup Cases abaixo.

Case: 1 Port: 1
Case: 2 Port: 2
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando retorno dos movimentadores à posição inicial

[PRINT]
AULA1_MODELO2_ETAPA2_5.png

[ROTEIRO]
PARA FINALIZAR:
o MOVIMENTADOR_1, após descarregar, deverá retornar à posição X = 15.00 ; Y = 3.50 ; Z = 0.00,
enquanto o MOVIMENTADOR_2, após descarregar, deverá retornar à posição X = 15.00 ; Y = -3.50 ; Z = 0.00

[OBJETO]
Operator – “MOVIMENTADOR_1”
Operator – “MOVIMENTADOR_2”

[ACAO_MOUSE]
Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[PROPERTIES]
[TRIGGERS]
MOVIMENTADOR_1:
On Unload → Travel to a Specific Location:
X: <b>15</b>
Y: <b>3.5</b>
Z: <b>0</b>

MOVIMENTADOR_1:
On Unload → Travel to a Specific Location:
X: <b>15</b>
Y: -<b>3.5</b>
Z: <b>0</b>
[FIM_COLUNA]


[ETAPA] Resultados
[COLUNA]
[TITULO]
Checando performance do modelo simulado.

[PRINT]
AULA1_MODELO2_RESULTADOS_1.png

[ROTEIRO]
Quantidade expedida: 2.009 unidades
PROCESSING
IMPRESSORA_1: 70,31% ; IMPRESSORA_2: 69,24%
[FIM_COLUNA]

## 2) Aula 02
### 2.1) Modelo 03
[ETAPA] Etapa 01 – Estoque de placas impressas
[COLUNA]
[TITULO]
Desconectando objetos

[PRINT]
AULA2_MODELO3_ETAPA1_1.png

[OBJETO]
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”
Sink – “SAIDA_CLIENTES”

[ACAO_MOUSE]
Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado.

[OBSERVACAO]
Após realizar a desconexão dos objetos, coloque o Sink – “SAIDA_CLIENTES” em X = 50.00, mantendo Y e Z em 0.00.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO3_ETAPA1_2.png
[PRINT]
AULA2_MODELO3_ETAPA1_3.png


[ROTEIRO]
NESTE MODELO, AO SAÍREM DOS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”,
AS PLACAS IRÃO DIRETO PARA O “ QUEUE: PLACAS_IMPRESSAS ”,
( com capacidade infinita )
POSICIONADO EM X = 30.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Queue – “PLACAS_IMPRESSAS”

[PROPERTIES]
[NOME]
PLACAS_IMPRESSAS

[VISUALS]
PLACAS_IMPRESSAS - [Mid6_small.png] X = 30.00 ; Y = 0.00 ; Z = 0.00
SAIDA_CLIENTES - [Mid6_small.png] X = 50.00 ; Y = 0.00 ; Z = 0.00

[QUEUE]
Max Content – 1000000
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando transporte na saída das impressoras

[PRINT]
AULA2_MODELO3_ETAPA1_4.png
[PRINT]
AULA2_MODELO3_ETAPA1_5.png

[ROTEIRO]
SENDO LEVADAS PELOS PRÓPRIOS OPERADORES DESSES PROCESSOS,

[OBJETO]
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”

[OBSERVACAO]
As imagens presentes nesta parte são os dois métodos de selecionar o responsável pelo transporte do produto.
A primeira imagem é como o primeiro Task Executer na Porta Central do Objeto.
A segunda imagem é utilizando o [eyedropper] para selecionar Task Executer desejado para transporter o produto.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando retorno dos operadores à posição inicial

[PRINT]
AULA2_MODELO3_ETAPA1_6.png

[ROTEIRO]
QUE APÓS DESCARREGAREM, DEVERÃO RETORNAR ÀS SUAS RESPECTIVAS IMPRESSORAS;

[OBJETO]
Operator – “OPERADOR_IMPRESSORA_1”
Operator – “OPERADOR_IMPRESSORA_2”

[PROPERTIES]
[TRIGGERS]
OPERADOR_IMPRESSORA_1:
On Unload → Travel to an Object:
Destination: current.centerObjects[1] 
Priority: 0
Condition: current.taskSequences.length == 0

OPERADOR_IMPRESSORA_2:
On Unload → Travel to an Object:
Destination: current.centerObjects[1]
Priority: 0
Condition: current.taskSequences.length == 0
[FIM_COLUNA]


[ETAPA] Etapa 02 – Teste das placas impressas
[COLUNA]
[TITULO]
Adicionando e Configurando objetos

[PRINT]
AULA2_MODELO3_ETAPA2_1.png
[PRINT]
AULA2_MODELO3_ETAPA2_2.png

[ROTEIRO]
DESTE ESTOQUE, AS PLACAS IRÃO PARA O “ PROCESSOR: TESTE ”,
POSICIONADO EM X = 40.00 ; Y = 0.00 ; Z = 0.00 
QUE POSSUI TEMPOS DE CICLO VARIÁVEIS DE ACORDO COM O MODELO:
MODELO 1: 11 [ s / u ] ; MODELO 2: 12 [ s / u ]

[OBJETO]
Processor – “TESTE”

[PROPERTIES]
[NOME]
TESTE

[VISUALS]
[Mid6_small.png] X= 40.00; Y= 0.00; Z= 0.00

[PROCESSOR]
Process Time [down_arrow.bmp] → Values by Case:
Case Function: <b>item.MODELO</b>
Case: <b>1</b>  Time: <b>11</b>
Case: <b>2</b>  Time: <b>12</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Extra – Indicador de tempo de Process Time do Teste no Mapa 3D

[PRINT]
AULA2_MODELO3_ETAPA2_3.png

[OBSERVACAO]
Apenas um método de verificação da lógica de diferentes Process Times para diferentes Modelos. Se o produto dentro do processor for da cor verde, deve aparecer “TC_TESTE: 11”, se for da cor amarela, deve aparecer “TC_TESTE: 12”.
[FIM_COLUNA]


[ETAPA] Etapa 03 – Operador responsável pelo Teste
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO3_ETAPA3_1.png

[ROTEIRO]
TAMBÉM VAMOS ACRESCENTAR O OPERADOR_TESTE,
POSICIONADO EM X = 40,00 ; Y = 2,50 ; Z = 0,00
( com 270º de rotação no eixo Z )

[OBJETO]
Operator

[PROPERTIES]
[NOME]
OPERADOR_TESTE

[VISUALS]
[Mid6_small.png] X= 40.00 ; Y= 2.50 ; Z= 0.00
[rotate_arrow.png] Z = 270.00
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Atividade 1 do Operador do Teste

[PRINT]
AULA2_MODELO3_ETAPA3_2.png
[PRINT]
AULA2_MODELO3_ETAPA3_3.png

[ROTEIRO]
QUE FICARÁ RESPONSÁVEL POR TRÊS ATIVIDADES:
LEVAR AS PLACAS DO “ QUEUE: ESTOQUE_PLACAS_IMPRESSAS ” PARA O “ PROCESSOR: TESTE ”

[OBJETO]
Queue – “PLACAS_IMPRESSAS”

[ACAO_MOUSE]
Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)

[PROPERTIES]
[OUTPUT]
[CHECK] Use Transport: current.centerObjects[1]
OU
[CHECK] Use Transport: /OPERADOR_TESTE (USANDO eyedropper.png PARA SELECIONAR O TRANSPORTER)
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Atividade 2 do Operador do Teste

[PRINT]
AULA2_MODELO3_ETAPA3_4.png
[PRINT]
AULA2_MODELO3_ETAPA3_5.png
[PRINT]
AULA2_MODELO3_ETAPA3_6.png
[PRINT]
AULA2_MODELO3_ETAPA3_7.png

[ROTEIRO]
FAZER O SETUP DE 2 [ s/u ] SEMPRE QUE HOUVER MUDANÇA DE MODELO

[OBJETO]
Processor – “TESTE”

[ACAO_MOUSE]
Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)

[PROPERTIES]
[PROCESSOR]
Setup Time → [down_arrow.bmp] If Item Label Changes:
Label: <b>“MODELO”</b>
If Item’s Label Changed: <b>2</b>
Otherwise: <b>0</b>
[CHECK] Use Operator(s): 1

Operator:
Current.centerObjects[1]  OU  /OPERADOR_TESTE
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Atividade 3 do Operador do Teste

[PRINT]
AULA2_MODELO3_ETAPA3_8.png

[ROTEIRO]
E REALIZAR O TESTE EM CADA UMA DAS PLACAS

[OBJETO]
Processor – “TESTE”

[OBSERVACAO]
A conexão da porta central do Operator já foi feita com o Processor no passo anterior, para que ele pudesse fazer o Setup do Processor. Logo, aqui não será necessário realizar a conexão de porta central.

[PROPERTIES]
[PROCESSOR]
Process Time:
[CHECK] Use Operator(s)  +  [CHECK] Same as Setup
[FIM_COLUNA]


[ETAPA] Etapa 04 – Qualidade das Placas determinadas pelo teste
[COLUNA]
[TITULO]
Configurando rótulo para produto

[PRINT]
AULA2_MODELO3_ETAPA4_1.png

[ROTEIRO]
MAS AO SAIR DO “ PROCESSOR: TESTE ”,
CADA PLACA DEVERÁ RECEBER O RÓTULO DE APROVADA OU REPROVADA,
POR MEIO DE UMA LABEL QUE DEVERÁ SER CRIADA E DENOMINADA DE QUALIDADE
E 80% DAS PLACAS TESTADAS DEVERÃO RECEBER O RÓTULO DE APROVADAS E 20% DE REPROVADAS

[OBJETO]
Processor – “TESTE”

[PROPERTIES]
[TRIGGERS]
[PLUS] On Exit → Data → Set Label by Percentage:
Label: <b>“QUALIDADE”</b>

Percent: <b>80</b>
Value: <b>“APROVADA”</b>

[PLUS] Para adicionar um novo “Percent + Value”:

Percent: <b>20</b>
Value: <b>“REPROVADA”</b>
[FIM_COLUNA]


[ETAPA] Etapa 05 – Utilizar esteiras
[COLUNA]
[TITULO]
Adicionando e configurando objeto (Esteira aprovados)

[PRINT]
AULA2_MODELO3_ETAPA5_1.png
[PRINT]
AULA2_MODELO3_ETAPA5_2.png
[PRINT]
AULA2_MODELO3_ETAPA5_3.png


[ROTEIRO]
DEIXANDO O “ PROCESSOR: TESTE ”, AS PLACAS DEVERÃO ENTRAR EM UMA ESTEIRA RETA HORIZONTAL
POSICIONADA EM Xa = 42.00 e Xb = 48.00 ; Ya = 0.00 e Yb = 0.00 ; Za = 1.00 e Zb = 1.00,
QUE LEVARÁ AS PLACAS APROVADAS PARA O “ SINK: SAIDA_CLIENTES ”,
QUE AGORA ESTARÁ POSICIONADO EM X = 50.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Conveyor

[ACAO_MOUSE]
1°: Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado. Conforme orientado a seguir:
Processor “TESTE” → Sink “SAIDA_CLIENTES”

2°: Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Conforme orientado a seguir:
Processor “TESTE” → Conveyor (ESTEIRA) → Sink “SAIDA_CLIENTES”

[PROPERTIES]
[CONVEYOR]
Start: <b>X= 42.00 ; Y= 0.00 ; Z= 1.00</b>
End: <b>X= 48.00 ; Y= 0.00 ; Z= 1.00</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto (Esteira reprovados)

[PRINT]
AULA2_MODELO3_ETAPA5_4.png

[ROTEIRO]
E AS PLACAS REPROVADAS PARA UMA ESTEIRA RETA VERTICAL
POSICIONADA EM Xa = 45.00 e Xb = 45.00 ; Ya = -0.50 e Yb = -16.50 ; Za = 1.00 e Zb = 1.00 

[OBJETO]
Conveyor

[PROPERTIES]
[CONVEYOR]
Start: <b>X= 45.00 ; Y= -0.50 ; Z= 1.00</b>
End: <b>X= 45.00 ; Y= -16.50 ; Z= 1.00</b>

[OBSERVACAO]
Repita o processo de arrastar o Conveyor para o Mapa 3D, como mostrado no passo anterior realizado para o Conveyor de aprovadas. Posteriormente a isso, configure a posição conforme mostra em [CONVEYOR].
[FIM_COLUNA]

[ETAPA] Etapa 06 – Utilizando Decision Point para determinar o fluxo dos produtos
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO3_ETAPA6_1.png
[PRINT]
AULA2_MODELO3_ETAPA6_2.png
[PRINT]
AULA2_MODELO3_ETAPA6_3.png
[PRINT]
AULA2_MODELO3_ETAPA6_4.png

[ROTEIRO]
PARA DIRECIONAR CADA PLACA, UTILIZE OS SEGUINTES DECISION POINTS:
DP_0, POSICIONADO EM X = 42.50 ; Y = 0.00 ; Z = 0.00
DP_1, POSICIONADO EM X = 45.00 ; Y = -1.50 ; Z = 0.00

[OBJETO]
Decision Point – “DP_0”
Decision Point – “DP_1”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
Decision Point “DP_0” → Decision Point “DP_1”

[PROPERTIES]
[NOME]
DP_0
DP_1

[DECISION_POINT]
DP_0:
[_resize.png] <b>X= 42.50 ; Y= 0.20 ; Z= 0.00</b>

DP_1:
[_resize.png] <b>X= 45.00 ; Y= -1.5 ; Z= 0.00</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando lógica do objeto

[PRINT]
AULA2_MODELO3_ETAPA6_5.png

[OBJETO]
Decision Point – “DP_0”

[PROPERTIES]
[TRIGGERS]
[PLUS] → On arrival → Send Item By Case:
Case Function: <b>item.QUALIDADE</b>

[PLUS] Para adicionar um novo “Case + Destination”:
Case: <b>“REPROVADA”</b>
Destination: <b>current.outObjects[1]</b>
[FIM_COLUNA]


[ETAPA] Etapa 07 – Destino Placas Reprovadas
[COLUNA]
[TITULO]
Adicionando e configurando objetos (Esteira horizontal)

[PRINT]
AULA2_MODELO3_ETAPA7_1.png

[ROTEIRO]
JÁ ESSA ESTEIRA VERTICAL LEVARÁ AS PLACAS PARA UMA ESTEIRA RETA HORIZONTAL,
POSICIONADA EM Xa = 43.00 e Xb = 12.00 ; Ya = -20.00 e Yb = -20.00 ; Za = 1.00 e Zb = 1.00
( AS ESTEIRAS VERTICAL E HORIZONTAL DEVERÃO SER UNIDAS POR UM JOIN )

[OBJETO]
Conveyor

[PROPERTIES]
[CONVEYOR]
Start: <b>X= 43.00 ; Y= -20.00 ; Z= 1.00</b>
End: <b>X= 12.00 ; Y= -20.00 ; Z= 1.00</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Conectando esteiras (Join Conveyors)

[PRINT]
AULA2_MODELO3_ETAPA7_2.png

[ROTEIRO]
( AS ESTEIRAS VERTICAL E HORIZONTAL DEVERÃO SER UNIDAS POR UM JOIN )

[OBJETO]
Conveyor – “StraightConveyor2”
Conveyor – “StraightConveyor3”

[ACAO_MOUSE]
Selecione a opção Join Conveyors na Barra Esquerda, em seguida, selecione o final da “StraightConveyor2” com o início da “StraightConveyor3”.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO3_ETAPA7_3.png

[ROTEIRO]
QUE LEVARÁ AS PLACAS PARA O “ QUEUE: PLACAS_IMPRESSAS_REPROVADAS ”,
( com capacidade infinita )
POSICIONADO EM X = 10.00 ; Y = -20.00 ; Z = 0.00
AO ENTRAREM NESSE ESTOQUE, AS PLACAS DEVERÃO FICAR NA COR VERMELHA
( POR SEGURANÇA, PLACAS APROVADAS DEVERÃO FICAR NA COR AZUL)

[OBJETO]
Queue – “PLACAS_IMPRESSAS_REPROVADAS”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Conforme orientado a seguir:
Conveyor “StraightConveyor3” → Queue “PLACAS_IMPRESSAS_REPROVADAS”

[PROPERTIES]
[NOME]
PLACAS_IMPRESSAS_REPROVADAS

[VISUALS]
[Mid6_small.png] X= 10.00 ; Y= -20.00 ; Z= 0.00

[QUEUE]
Max Content: <b>1000000</b>

[TRIGGERS]
[PLUS] → On Entry → Visuals → Set Color By Case:
Value: <b>item.QUALIDADE</b>
2x [PLUS] Para adicionar “Case Value + Color”:
“APROVADA” – [down_arrow.bmp] Color.blue
“REPROVADA” - [down_arrow.bmp] Color.red
[FIM_COLUNA]

[ETAPA] Resultados
[COLUNA]
[TITULO]
Checando performance do modelo simulado.

[PRINT]
AULA2_MODELO3_RESULTADOS_1.png

[ROTEIRO]
Quantidade expedida
1.021 unidades
PROCESSING
IMPRESSORA_1: 63,91% ; IMPRESSORA_2: 63,85% ; TESTE: 51,41% 
[FIM_COLUNA]

### 2.2) Modelo 04
[ETAPA] Etapa 01 – Retrabalhar placas impressas reprovadas
[COLUNA]
[TITULO]
Conectando e configurando objetos

[PRINT]
AULA2_MODELO4_ETAPA1_1.png
[PRINT]
AULA2_MODELO4_ETAPA1_2.png

[ROTEIRO]
NESTE NOVO MODELO, DO “QUEUE: PLACAS_IMPRESSAS_REPROVADAS”,
AS PLACAS SERÃO LEVADAS PELOS MOVIMENTADORES PARA SEREM
RETRABALHADAS NAS IMPRESSORAS NAS QUAIS FORAM IMPRESSAS:

[OBJETO]
Queue – “PLACAS_IMPRESSAS_REPROVADAS”
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”
Sink – “SAIDA_CLIENTES”

[ACAO_MOUSE]
1°: Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
Queue “PLACAS_IMPRESSAS_REPROVADAS” → Processor “IMPRESSORA_1”
Queue “PLACAS_IMPRESSAS_REPROVADAS” → Processor “IMPRESSORA_2”

2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.

[OBSERVACAO]
É possível visualizar se está as conexões estão corretas ao abrir as propriedades e ver se Outputs e Inputs estão compatíveis.

[PROPERTIES]
[OUTPUT]
Send To Port:
[down_arrow.bmp] Port By Case:
Case Function: <b>item.MODELO</b>
2x [PLUS] Para adicionar “Case + Port”:
Case: <b>1</b>  Port: <b>1</b>
Case: <b>2  </b>Port: <b>2</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA1_3.png
[PRINT]
AULA2_MODELO4_ETAPA1_4.png


[ROTEIRO]
SENDO QUE:
O MOVIMENTADOR_1 LEVARÁ AS PLACAS MODELO 1 PARA O “ PROCESSOR: IMPRESSORA_1 ”
E O MOVIMENTADOR_2 LEVARÁ AS PLACAS MODELO 2 PARA O “ PROCESSOR: IMPRESSORA_2 ”

[OBJETO]
Queue – “PLACAS_IMPRESSAS_REPROVADAS”
Operator – “MOVIMENTADOR_1”
Operator - "MOVIMENTADOR_2”
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”

[ACAO_MOUSE]
Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)
Conforme orientado a seguir:
Operator “MOVIMENTADOR_1” → Queue “PLACAS_IMPRESSAS_REPROVADAS”
Operator “MOVIMENTADOR_2” → Queue “PLACAS_IMPRESSAS_REPROVADAS”

[OBSERVACAO]
É possível visualizar se está as conexões estão corretas ao abrir as propriedades e ver se Central Ports está compatível.

A prioridade sempre é a Porta 1 em qualquer situação, portanto, como os retrabalhos são prioridades para as impressoras, deve-se mudar a posição do input das impressoras de forma a alterar a prioridade de input delas.

Observe o passo a seguir “Alterando prioridade de input”.

[PROPERTIES]
[OUTPUT]
[CHECK] Use Transport:
[down_arrow.bmp] Center Port By Case:
Case Function: <b>item.MODELO</b>
2x [PLUS] Para adicionar “Case + Port”:
Case: <b>1</b>  Port: <b>1</b>
Case: <b>2  </b>Port: <b>2</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Alterando prioridade de input

[PRINT]
AULA2_MODELO4_ETAPA1_5.png

[ROTEIRO]
MAS ATENÇÃO:
AS PLACAS PARA RETRABALHO TERÃO PRIORIDADE NAS IMPRESSORAS,

[OBJETO]
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”

[ACAO_MOUSE]
Dentro de Input Ports, selecione uma das duas portas disponíveis na impressora para move-las.
Conforme orientação a seguir:
Selecione “2: PLACAS_IMPRESSAS_REPROVADAS” e clique no botão [uparrow_blue.png] para colocá-la na posição 1 e automaticamente “PLACAS_VIRGENS” descer para a posição 2.

Outra opção é realizar o oposto, selecionar “1: PLACAS_VIRGENS” e clicar no botão [downarrow_blue.png] para realizar o movimento de colocá-la na posição 2 e automaticamente subir “PLACAS_IMPRESSAS_REPROVADAS” para a posição 1.

[CAMINHO]
Barra da Direita → Properties (Propriedades) → Ports (Portas) → [down_arrow.bmp]Input Ports (Portas de entrada).

[OBSERVACAO]
Repita para o processor da “IMPRESSORA_2”, ficando igual imagem.

[PROPERTIES]
[PORTS]
Antes:
1: PLACAS_VIRGENS
2: PLACAS_IMPRESSAS_REPROVADAS

Depois:
1:PLACAS_IMPRESSAS_REPROVADAS
2:PLACAS_VIRGENS
[FIM_COLUNA]


[ETAPA] Etapa 02 – Tempo de processo diferente para retrabalho
[COLUNA]
[TITULO]
Configurando rótulo do produto

[PRINT]
AULA2_MODELO4_ETAPA2_1.png

[ROTEIRO]
UMA SUGESTÃO:
QUANDO AS PLACAS ENTRAREM NO “ QUEUE: PLACAS_VIRGENS ”,
ATRIBUA O RÓTULO DE ORIGINAL À LABEL QUALIDADE,

[OBJETO]
Queue – “PLACAS_VIRGENS”

[PROPERTIES]
[TRIGGERS]
[PLUS] On Entry → [PLUS] Data → Set Label:
Label: <b>“QUALIDADE”</b>
Value: <b>“ORIGINAL”</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA2_2.png

[ROTEIRO]
O TEMPO DE CICLO PARA RETRABALHO SERÁ DE 10 [ s / u ] /
E QUANDO ESSAS PLACAS ENTRAREM NOS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”,
DEFINA TEMPOS DE CICLO DE 20 [ s / u ] PARA AS ORIGINAIS E DE 10 [ s / u ] PARA AS REPROVADAS

[OBJETO]
Processor – “IMPRESSORA_1”
Processor – “IMPRESSORA_2”

[OBSERVACAO]
Repita no processor “IMPRESSORA_2” igualmente para a “IMPRESSORA_1”.

É possível fazer uma forma de verificar se a lógica está funcionando, basta procurar na barra de pesquisa do site como foi Feito o “TC_TESTE”, mas agora você reproduz um Text para a “IMPRESSORA_1” e outro para a “IMPRESSORA_2”.

[PROPERTIES]
[PROCESSOR]
Process Time → [down_arrow.bmp] Values By Case:
Case Function: <b>item.QUALIDADE</b>
2x [PLUS] Para adicionar “Case + Time”:
Case: <b>“ORIGINAL”</b>  Time: <b>20</b>
Case: <b>“REPROVADA”</b>  Time: <b>10</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA2_3.png

[ROTEIRO]
E,
APÓS RETRABALHADAS, AS PLACAS RETORNARÃO ÀS COLORAÇÕES ORIGINAIS

[OBJETO]
Processor - “IMPRESSORA_1”
Processor - “IMPRESSORA_2”

[ACAO_MOUSE]
Segure a Tecla CTRL e clique nas duas impressoras, até que elas fiquem com o paralelepípedo Vermelho ao redor. Após isso, configure de forma idêntica as duas.
Ao finalizar, segure a Tecla Shift e clique em algum local vazio no Mapa 3D para remover a seleção das duas impressoras.

[OBSERVACAO]
Com as duas impressoras selecionadas, qualquer comando que fizer, altera nas duas igualmente.

[PROPERTIES]
[TRIGGERS]
[PLUS] → On Exit → [PLUS] Visual → Set Color By Case:
Value: <b>item.MODELO</b>
2x [PLUS] Para adicionar “Case Value + Color”:
1<b>:  [down_arrow.bmp] Color.green</b>
2<b>:  [down_arrow.bmp] Color.yellow</b>
[FIM_COLUNA]


[ETAPA] Etapa 03 – Controle de quantidade de reprovações.
[COLUNA]
[TITULO]
Adicionando rótulo ao produto

[PRINT]
AULA2_MODELO4_ETAPA3_1.png
[PRINT]
AULA2_MODELO4_ETAPA3_2.png

[ROTEIRO]
ANTES DE FINALIZAR:
VAMOS CRIAR NA ENTRADA DO “ QUEUE: PLACAS_VIRGENS ”,
UMA LABEL CHAMADA REPROVACOES PARA CONTAR QUANTAS VEZES UMA PLACA FOI REPROVADA,
PARA QUE CADA PLACA RECEBA O VALOR DE 0 REPROVAÇÕES

[OBJETO]
Queue – “PLACAS_VIRGENS”

[PROPERTIES]
[TRIGGERS]
On Entry [properties.png] → [PLUS] Data → Set Label:
Label: <b>“REPROVACOES”</b>
Value: <b>0</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Incrementando valor a um rótulo

[PRINT]
AULA2_MODELO4_ETAPA3_3.png

[ROTEIRO]
E QUANDO PLACAS REPROVADAS ENTRAREM NA ESTEIRA VERTICAL APÓS O “PROCESSOR: TESTE”,
ESSA LABEL DEVERÁ SER ACRESCIDA EM UMA UNIDADE

[OBJETO]
Conveyor – “StraightConveyor2”

[PROPERTIES]
[TRIGGERS]
[PLUS] → On Entry → Data → Increment Value:
Increment: <b>item.labels[“REPROVACOES”]</b>
by: <b>1</b>
[FIM_COLUNA]

[ETAPA] Etapa 04 – Peças com mais de uma reprovação se tornam refuge
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA4_1.png

[ROTEIRO]
AS PLACAS REPROVADAS MAIS DE UMA VEZ DEVERÃO SER
DESVIADAS PARA UMA ESTEIRA RETA VERTICAL POSICIONADA EM:
Xa = 20.00 e Xb = 20.00 ; Ya = -19.50 e Yb = -12.00 ; Za = 1.00 e Zb = 1.00

[OBJETO]
Conveyor

[PROPERTIES]
[CONVEYOR]
Start: <b>X= 20.00 ; Y= -19.50 ; Z= 1.00</b>
End: <b>X= 20.00 ; Y= -12.00 ; Z= 1.00</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA4_2.png

[ROTEIRO]
QUE LEVARÁ AS PLACAS PARA O “ QUEUE: PLACAS_IMPRESSAS_REFUGADAS ”
( com capacidade infinita )
POSICIONADO EM X = 20.00 ; Y = -10.00 ; Z = 0.00
( MAS AO ENTRAREM NESSE ESTOQUE, AS PLACAS DEVERÃO FICAR NA COR CINZA )

[OBJETO]
Queue – “PLACAS_IMPRESSAS_REFUGADAS”

[PROPERTIES]
[NOME]
PLACAS_IMPRESSAS_REFUGADAS

[VISUALS]
[Mid6_small.png] X= 20.00 ; Y= -10.00 ; Z= 0.00

[QUEUE]
Max Content: <b>1000000</b>

[TRIGGERS]
[PLUS] → On Entry → [PLUS] Visual → Set Color By Case:
Value: <b>item.REPROVACOES</b>
2x [PLUS] Para adicionar “Case Value + Color”:
1<b>: [down_arrow.bmp] Color.blue</b>
2<b>: [down_arrow.bmp] Color.gray</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA2_MODELO4_ETAPA4_3.png
[PRINT]
AULA2_MODELO4_ETAPA4_4.png

[ROTEIRO]
SENDO QUE SOMENTE AS PLACAS REPROVADAS UMA ÚNICA VEZ PODERÃO SER RETRABALHADAS.
PARA DIRECIONAR CADA PLACA, UTILIZE OS SEGUINTES DECISION POINTS:
DP_2, POSICIONADO EM X = 22.00 ; Y = -20.00 ; Z = 0.00
DP_3, POSICIONADO EM X = 20.00 ; Y = -17.50 ; Z = 0.00

[OBJETO]
Decision Point – “DP_2”
Decision Point – “DP_3”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
Decision Point “DP_2” → Decision Point “DP_3”

[OBSERVACAO]
Para verificar se as conexões foram feitas corretamente, selecione o Decision Point que deseja verificar, e veja se seu Output Port/Input Port está corretamente conectado.
Conforme segue nas imagens 1 e 2 deste passo, destacado dentro de retângulos amarelos.

[PROPERTIES]
[NOME]
DP_2
DP_3

[DECISION_POINT]
DP_2:
[_resize.png] <b>X= 22.00 ; Y= -20.00 ; Z= 0.00</b>

DP_3:
[_resize.png] <b>X= 20.00 ; Y= -17.50 ; Z= 0.00</b>
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando lógica do objeto

[PRINT]
AULA2_MODELO4_ETAPA4_5.png
[OBJETO]
Decision Point – “DP_2”

[PROPERTIES]
[TRIGGERS]
[PLUS] → On arrival → Send Item By Case:
Case Function: <b>item.REPROVACOES</b>

[PLUS] Para adicionar um novo “Case + Destination”:
Case: <b>“2”</b>
Destination: <b>current.outObjects[1]</b>
[FIM_COLUNA]


[ETAPA] Resultados
[COLUNA]
[TITULO]
Checando performance do modelo simulado.

[PRINT]
AULA2_MODELO4_RESULTADOS_1.png

[ROTEIRO]
Quantidade expedida
1.021 unidades
Elaborar e interpretar os gráficos de estados
PROCESSING
IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36%
[FIM_COLUNA]


## 3) Aula 03
### 3.1) Modelo 05
[ETAPA] Etapa 01 – Estoque de placas aprovadas
[COLUNA]
[TITULO]
Desconectando objetos

[PRINT]
AULA3_MODELO5_ETAPA1_1.png

[OBJETO]
Conveyor – “StraightConveyor1”
Sink – “SAIDA_CLIENTES”

[ACAO_MOUSE]
Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado.

[OBSERVACAO]
Após realizar a desconexão dos objetos, coloque o Sink – “SAIDA_CLIENTES” em X = 80.00, mantendo Y e Z em 0.00.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA1_2.png

[ROTEIRO]
NESTE MODELO, AO SAÍREM DO “ PROCESSOR: TESTE ”,
AS PLACAS APROVADAS IRÃO PARA O “ QUEUE: PLACAS_IMPRESSAS_APROVADAS ”,
( com capacidade infinita )
POSICIONADO EM X = 50.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Queue – “PLACAS_IMPRESSAS_APROVADAS”

[PROPERTIES]
[NOME]
PLACAS_IMPRESSAS_APROVADAS

[VISUALS]
[Mid6_small.png] X = 50.00 ; Y = 0.00 ; Z = 0.00

[QUEUE]
Max Content – 1000000
[FIM_COLUNA]


[ETAPA] Etapa 02 – Combinando produtos
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA2_1.png
[ROTEIRO]
DESSE ESTOQUE, AS PLACAS IRÃO PARA O “ COMBINER: MONTAGEM ”,
( habilitar animação nesse processo )
POSICIONADO EM X = 60.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Combiner – “MONTAGEM”

[PROPERTIES]
[NOME]
“MONTAGEM”

[VISUALS]
[Mid6_small.png] X = 60.00 ; Y = 0.00 ; Z = 0.00

[PROCESSOR]
[CHECK] Animate Items

Process Time: 10 [s]
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA2_2.png

[ROTEIRO]
E RECEBERÃO OS COMPONENTES DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS ”,
( com capacidade infinita )
POSICIONADO EM X = 60.00 ; Y = -10.00 ; Z = 0.00

[OBJETO]
Queue – “COMPONENTES_CILINDROS_CHEIOS”

[PROPERTIES]
[NOME]
“COMPONENTES_CILINDROS_CHEIOS”

[VISUALS]
[Mid6_small.png] X = 60.00 ; Y = -10.00 ; Z = 0.00

[QUEUE]
Max Content = 1000000
[FIM_COLUNA]

[COLUNA]
[TITULO]
Conectando objetos no Combiner

[PRINT]
AULA3_MODELO5_ETAPA2_3.png

[OBJETO]
Conveyor – “StraightConveyor1”
Combiner – “MONTAGEM”
Queue – “COMPONENTES_CILINDROS_CHEIOS”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
1°: Conveyor – “StraightConveyor1” → Combiner – “MONTAGEM”
2°: Queue – “COMPONENTES_CILINDROS_CHEIOS” → Combiner – “MONTAGEM”

[OBSERVACAO]
A ordem das conexões deve ser respeitada para que as portas de entrada do Combiner mantenham a sequência indicada na imagem.

Isso ocorre porque é a Placa impressa aprovada que chama a operação de montagem para ser realizada, enquanto os componentes funcionam como matéria-prima utilizada nessa operação.

[PROPERTIES]
[PORTS]
[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do combiner: [FIM_LETRA_VERMELHA]

[down_arrow.bmp] - Input Ports:
1: PLACAS_IMPRESSAS_APROVADAS
2: COMPONENTES_CILINDROS_CHEIOS
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA2_4.png
[PRINT]
AULA3_MODELO5_ETAPA2_5.png
[PRINT]
AULA3_MODELO5_ETAPA2_6.png

[ROTEIRO]
SERÃO CRIADOS 2880 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR CINZA,
QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO,
( utilize as funções send message + on message ) 

[OBJETO]
Queue – “COMPONENTES_CILINDROS_CHEIOS”

[PROPERTIES]
[TRIGGERS]
[PLUS] On Reset → [PLUS] Send Message:
To: Current
Delay Time: 60
Parameter 1: 2880
Parameter 2: 2

[TRIGGERS]
On Message → Create Flowitems
Não é necessário alterar nada nesta seção.

[TRIGGERS]
[PLUS] On Entry → [PLUS] Visual → Set Location, Rotation or Size:
Set: [down_arrow.bmp] → Size
X Size: 0.25
Y Size: 0.25
Z Size: 0.25

[TRIGGERS]
[PLUS] On Entry [properties.png] → [PLUS] Visual → Set Object color:
Color: Color.gray
[FIM_COLUNA]


[ETAPA] Etapa 3 – Processo de Acabamento
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA3_1.png

[ROTEIRO]
LOGO NA SEQUÊNCIA, AS PLACAS IRÃO PARA O “ SEPARATOR: ACABAMENTO ”,
POSICIONADO EM X = 70.00 ; Y = 0.00 ; Z = 0.00
O TEMPO DE CICLO DO ACABAMENTO SERÁ DE 10 [ s / u ]

[OBJETO]
Separator – “ACABAMENTO”

[PROPERTIES]
[NOME]
“ACABAMENTO”

[VISUALS]
[Mid6_small.png] X = 70.00 ; Y = 0.00 ; Z = 0.00

[PROCESSOR]
Process Time: 10 [s / u]
[FIM_COLUNA]

[COLUNA]
[TITULO]
Conectando objetos no Separator

[PRINT]
AULA3_MODELO5_ETAPA3_2.png

[ROTEIRO]
ESSE PROCESSO, ALÉM DE FAZER O ACABAMENTO, REALIZARÁ A SEPARAÇÃO ENTRE
AS PLACAS IMPRESSAS MONTADAS E OS CILINDROS DE COMPONENTES VAZIOS,
SENDO AS PLACAS ENVIADAS PARA O “ SINK: SAIDA_CLIENTES ”,
POSICIONADO EM X = 80.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Separator – “ACABAMENTO”
Sink – “SAIDA_CLIENTES”

[PROPERTIES]
[VISUALS]
SAIDA_CLIENTES: [Mid6_small.png] X = 80.00 ; Y = 0.00 ; Z = 0.00
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA3_3.png

[ROTEIRO]
E OS CILINDROS PARA O “ QUEUE: COMPONENTES_CILINDROS_VAZIOS ”,
( com capacidade infinita )
POSICIONADO EM X = 70.00 ; Y = -10.00 ; Z = 0.00

[OBJETO]
Separator – “ACABAMENTO”
Queue – “COMPONENTES_CILINDROS_VAZIOS”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
1°: Separator – “ACABAMENTO” → Queue – “COMPONENTES_CILINDROS_VAZIOS”
2°: Queue – “COMPONENTES_CILINDROS_VAZIOS” → Sink – “SAIDA_CLIENTES”

[OBSERVACAO]
No Combiner, deve-se manter a opção Combine Mode = Pack. Da mesma forma, no Separator, deve estar selecionada a opção Separate Mode = Unpack.

Essa configuração faz com que o cilindro de componentes e a placa impressa sejam mantidos como duas entidades distintas durante o processo. Dessa forma, a operação de montagem utiliza os componentes disponíveis no cilindro como matéria-prima.

Ao final da montagem, o cilindro de componentes vazio é separado da placa impressa, e esta segue para o Sink – “SAIDA_CLIENTES”.

[OBSERVACAO]
A ordem das conexões no Separator devem ser respeitadas assim como foi realizado no Combiner.

Para o Combiner:
1°: Separator – “ACABAMENTO” → Sink – “SAIDA_CLIENTES” (Carrega a entidade das Placas Impressas)
2°: Separator – “ACABAMENTO” → Queue – “COMPONENTES_CILINDROS_VAZIOS” (Carrega a entidade dos Cilíndros de Componentes Vazios)

[PROPERTIES]
[NOME]
“COMPONENTES_CILINDROS_VAZIOS”

[VISUALS]
[Mid6_small.png] X = 70.00 ; Y = -10.00 ; Z = 0.00

[QUEUE]
Max Content = 1000000
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando Operador

[PRINT] AULA3_MODELO5_ETAPA3_4.png

[ROTEIRO]
TAMBÉM VAMOS ACRESCENTAR O OPERADOR_MONTAGEM_ACABAMENTO,
POSICIONADO EM X = 60,00 ; Y = 2.50 ; Z = 0,00
( com 270º de rotação no eixo Z )

[OBJETO]
Operator – “OPERADOR_MONTAGEM_ACABAMENTO”

[PROPERTIES]
[NOME]
“OPERADOR_MONTAGEM_ACABAMENTO”

[VISUALS]
[Mid6_small.png] X = 60.00 ; Y = 2.50 ; Z = 0.00
[rotate_arrow.png] Z = 270.00

[FIM_COLUNA]

[COLUNA]
[TITULO]
Conectando Operador nos objetos

[PRINT]
AULA3_MODELO5_ETAPA3_5.png
[PRINT]
AULA3_MODELO5_ETAPA3_6.png
[PRINT]
AULA3_MODELO5_ETAPA3_7.png
[PRINT]
AULA3_MODELO5_ETAPA3_8.png
[PRINT]
AULA3_MODELO5_ETAPA3_9.png


[ROTEIRO]
QUE FICARÁ RESPONSÁVEL POR QUATRO ATIVIDADES:
LEVAR AS PLACAS IMPRESSAS APROVADAS PARA O “ COMBINER: MONTAGEM ”;
REALIZAR A MONTAGEM DE CADA UMA DAS PLACAS;
LEVAR AS PLACAS DO “ COMBINER: MONTAGEM ” PARA O “ SEPARATOR: ACABAMENTO ”;
E REALIZAR O ACABAMENTO DE CADA UMA DAS PLACAS
( aqui, utilize o conceito de preempção, para garantir a ida e acabamento de cada placa logo após ela ser montada )

[OBJETO]
Operator – “OPERADOR_MONTAGEM_ACABAMENTO”
Queue – “PLACAS_IMPRESSAS_APROVADAS”
Combiner – “MONTAGEM”
Separator – “ACABAMENTO”

[ACAO_MOUSE]
Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)
Conforme orientado a seguir:
1°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Queue: PLACAS_IMPRESSAS_APROVADAS
2°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Combiner – “MONTAGEM”
3°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Separator – “ACABAMENTO”

[OBSERVACAO]
Obrigatoriamente, para correta sequência de execução do operador, deve-se utilizar a Preempção.
Conforme a Imagem 5 deste passo e presente na configuração do Separator - "ACABAMENTO"..

[PROPERTIES]
[PORTS]
[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do combiner: [FIM_LETRA_VERMELHA]

[down_arrow.bmp] - Central Ports:
1: OPERADOR_MONTAGEM_ACABAMENTO

Para Queue – “PLACAS_IMPRESSAS_APROVADAS” + Combiner – “MONTAGEM”:
[OUTPUT]
[CHECK] Use Transport:
current.centerObjects[1]

Para Combiner – “MONTAGEM”
[PROCESSOR]
[CHECK] Use Operator
Operator:
current.centerObjects[1]

Para Separator – “ACABAMENTO”:
[PROCESSOR]
[CHECK] Use Operator
Operator:
current.centerObjects[1]
Preemption: Preempt Only
[FIM_COLUNA]


[ETAPA] Etapa 4 - Correção do deslocamento dos operadores
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA3_MODELO5_ETAPA4_1.png
[PRINT]
AULA3_MODELO5_ETAPA4_2.png
[PRINT]
AULA3_MODELO5_ETAPA4_3.png

[ROTEIRO]
IMPORTANTE:
OS OPERADORES NÃO PODERÃO PASSAR ATRAVÉS DAS MÁQUINAS, DAS ESTEIRAS, ETC.,
OU SEJA, OS OPERADORES DEVERÃO CONTORNAR OS OBJETOS QUE ESTARÃO EM SEU CAMINHO
( utilize o recurso AStar
e não esqueça de desabilitar a visualização de Grid Bounds e Members )

[OBJETO]
A* Navigation - Grid

[ACAO_MOUSE]
Arraste o Grid para a posição desejada, e configure sua dimensão para cobrir a área pela qual o operador poderá percorrer.

Depois abra a aba [view_tools.ico]Toolbox,
em seguida, dê um duplo clique em [astarnavigator.png] para abrir o AStar Navigator.

[OBSERVACAO]
O Grid pode cobrir uma área grande, mas o operador não irá percorrer a área inteira.

[A*_NAVIGATOR]
*SETUP*:
Members:
Selecione o(s) operador(es) que deseja que não atravessem objetos através do [eyedropper.png]
Depois selecione o(s) objeto(s) que deseja que o operador não atravesse, também através do [eyedropper.png]

OPERADOR_MONTAGEM_ACABAMENTO
MONTAGEM
ACABAMENTO
PLACAS_IMPRESSAS_APROVADAS

*VISUAL*
[UNCHECK] Show Grid Bounds
[UNCHECK] Show Members

[FIM_COLUNA]


[ETAPA] Resultados
[COLUNA]
[TITULO]
Checando performance do modelo simulado.

[PRINT]
AULA3_MODELO5_RESULTADOS_1.png

[ROTEIRO]
Quantidade expedida
642 unidades

Elaborar e interpretar os gráficos de estados
PROCESSING
IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;
MONTAGEM: 22,33% ; ACABAMENTO: 22,30%

[OBSERVACAO]
Adicionar no Dashboard, no gráfico de estados, os objetos (Combiner e Separator) que foram criados e que estão em execução nesta aula (MONTAGEM + ACABAMENTO).

[FIM_COLUNA]

### 3.2) Modelo 06
[ETAPA] Etapa 01 – Componentes específicos para cada modelo
[COLUNA]
[TITULO]
Reconfigurando objeto

[PRINT]
AULA3_MODELO6_ETAPA1_1.png
[PRINT]
AULA3_MODELO6_ETAPA1_2.png

[ROTEIRO]
PLACAS DO MODELO 1 RECEBERÃO COMPONENTES ESPECÍFICOS PARA O MODELO 1,
VINDOS DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS_MOD_1 ”,
( com capacidade infinita )
POSICIONADO EM X = 57.00 ; Y = -10.00 ; Z = 0.00
SERÃO CRIADOS 1.440 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR VERDE,
QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO
( mais uma vez, você deverá utilizar as funções send message + on message )

[OBJETO]
Antes: Queue – “COMPONENTES_CILINDROS_CHEIOS”
Depois: Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_1”

[PROPERTIES]
[TRIGGERS]
On Reset [properties.png] → Send Message:
parameter 1: 1.440

[TRIGGERS]
On Entry [properties.png] → Set Object color:
Color: Color.green
[FIM_COLUNA]

[COLUNA]
[TITULO]
Copiando objeto

[PRINT]
AULA3_MODELO6_ETAPA1_3.png
[PRINT]
AULA3_MODELO6_ETAPA1_4.png


[ROTEIRO]
PLACAS DO MODELO 2 RECEBERÃO COMPONENTES ESPECÍFICOS PARA O MODELO 2,
VINDOS DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS_MOD_2 ”,
( com capacidade infinita )
POSICIONADO EM X = 63.00 ; Y = -10.00 ; Z = 0.00
SERÃO CRIADOS 1.440 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR AMARELA,
QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO
( mais uma vez, você deverá utilizar as funções send message + on message )

[OBJETO]
Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_2”

[ACAO_MOUSE]
Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. 
Conforme orientado a seguir:
Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_2” → Combiner – “MONTAGEM”

[OBSERVACAO]
Utilize CTRL+C para copiar a Queue - "COMPONENTES_CILINDROS_CHEIOS_MOD_1" e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações da Queue original.

Deve-se então reposicionar e configurar a nova cópia com as suas singularidades.

Após realizar a conexão, observa-se que no Combiner - "MONTAGEM" surge em Components List uma nova opção "From Inpurt Port 3".

[PROPERTIES]
[VISUALS]
[ Mid6_small.png] X = 63.00 ; Y = -10.00 ; Z = 0.00

[TRIGGERS]
On Entry [properties.png] → Set Object color:
Color: Color.yellow
[FIM_COLUNA]

[ETAPA] Etapa 02 – Regra de puxar utilizando Global Table
[COLUNA]
[TITULO]
Criando Global Table
[PRINT]
AULA3_MODELO6_ETAPA2_1.png
[PRINT]
AULA3_MODELO6_ETAPA2_2.png

[ROTEIRO]
NESTE MODELO,
AS PLACAS APROVADAS RECEBERÃO COMPONENTES
DE “QUEUES: COMPONENTES_CILINDROS_CHEIOS” ESPECÍFICOS POR MODELO
( para isso, crie a “ GLOBAL TABLE: REGRA_PUXADA_COMPONENTES )

[OBJETO]
Combiner – “MONTAGEM”
Global Table – “REGRA_PUXADA_COMPONENTES”

[ACAO_MOUSE]
Abra a aba [view_tools.ico]Toolbox, clique em [PLUS] e selecione Global Table.

[OBSERVACAO]
Nomes das linhas e colunas são mostrados na Imagem 2 deste passo. Assim como os valores que devem ser inseridos.

Cuidado principal é com os valores nas posições corretas dentro da Global Table, pois eles determinam qual e quantos cilindros de cada tipo serão enviados para cada placa impressa na montagem.

[GLOBAL_TABLE]
[view_table.ico] GlobalTable1
[PROPERTIES]
[TABLE]
REGRA_PUXADA_COMPONENTES
ROWS: 2     COLUMNS: 2
[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA3_MODELO6_ETAPA2_3.png

[OBJETO]
Combiner – “MONTAGEM”

[PROPERTIES]
[TRIGGERS]
[PLUS] On Entry → [PLUS] Update Combiner Component List With Labels:
Table: [down_arrow.bmp] REGRA_PUXADA_COMPONENTES
Label: "MODELO"
[FIM_COLUNA]


[ETAPA] Resultados
[COLUNA]
[TITULO]
Validando o modelo simulado.

[ROTEIRO]
Quantidade expedida
642 unidades

Elaborar e interpretar os gráficos de estados
PROCESSING
IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;
MONTAGEM: 22,33% ; ACABAMENTO: 22,30%

[OBSERVACAO]
Este modelo possui os mesmos resultados do modelo anterior, dado que só alterou o estoque de cilíndros de componentes,
porém a dinâmica de montagem permaneceu a mesma.
[FIM_COLUNA]

## 4) Aula 04
### 4.1) Modelo 07
[ETAPA] Etapa 01 – Estoque de placas acabadas
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA4_MODELO7_ETAPA1_1.png
[PRINT]
AULA4_MODELO7_ETAPA1_2.png
[PRINT]
AULA4_MODELO7_ETAPA1_3.png

[ROTEIRO]
NESTE MODELO, AS PLACAS ACABADAS AO SAÍREM DO “ SEPARATOR: ACABAMENTO ” IRÃO
PARA O “ QUEUE: PLACAS_ACABADAS ”,
( com capacidade infinita )
POSICIONADO EM X = 75.00 ; Y = 0.00 ; Z = 1.00

“ SINK: SAIDAS_CLIENTES ” 
POSICIONADO EM X = 100.00 ; Y = 0.00 ; Z = 0.00

[OBJETO]
Queue – “PLACAS_ACABADAS”
Sink – “SAIDAS_CLIENTES”

[PROPERTIES]
[NOME]
PLACAS_ACABADAS
SAIDAS_CLIENTES

[VISUALS]
PLACAS_ACABADAS - [Mid6_small.png] X = 75.00 ; Y = 0.00 ; Z = 1.00
SAIDAS_CLIENTES - [Mid6_small.png] X = 100.00 ; Y = 0.00 ; Z = 0.00

[QUEUE]
Max Content – 1000000

[PORTS]
[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de saída do Separator: [FIM_LETRA_VERMELHA]

[down_arrow.bmp] - Output Ports:
1: PLACAS_ACABADAS
2: SAIDAS_CLIENTES

[FIM_COLUNA]

[ETAPA] Etapa 02 – Inspeção de embalagem
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA4_MODELO7_ETAPA2_1.png
[PRINT]
AULA4_MODELO7_ETAPA2_2.png

[ROTEIRO]
EM SEGUIDA, IRÃO PARA O “ MULTIPROCESSOR: INSPECAO_EMBALAGEM ”,
POSICIONADO EM X = 80.00 ; Y = 0.00 ; Z = 0.00
COM TEMPO DE INSPEÇÃO DE 4 [ s / u ] E TEMPO DE EMBALAGEM DE 4 [ s / u ] 

[OBJETO]
MultiProcessor – “INSPECAO_EMBALAGEM”

[PROPERTIES]
[NOME]
INSPECAO_EMBALAGEM

[VISUALS]
[Mid6_small.png] X = 80.00 ; Y = 0.00 ; Z = 0.00

[MULTIPROCESSOR]
1- INSPECAO
Process Time – 4 (s)
Clique no [PLUS] ao lado de INSPECAO para adicionar um novo Processo.
2- EMBALAGEM
Process Time – 4 (s)

[FIM_COLUNA]

[COLUNA]
[TITULO]
Extra – Indicador de tempo de StayTime no MultiProcessor no Mapa 3D

[PRINT]
AULA4_MODELO7_ETAPA2_3.png

[OBSERVACAO]
O procedimento para adicionar este Text foi feito dando um CTRL+C no TC_TESTE e um CTRL+V, editando então as configurações para exibir o valor de StayTime do MultiProcessor.

Apenas um método de verificação da lógica de tempo de permanência para múltiplos processos. Se o tempo de permanência de cada processo é 4 segundos, deve aparecer "TC_INSPECAO_EMBALAGEM: 8".
[FIM_COLUNA]

[ETAPA] Etapa 03 – Inserindo Robô na linha de produção
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA4_MODELO7_ETAPA3_1.png

[ROTEIRO]
VAMOS TAMBÉM ACRESCENTAR O “ ROBOT: ROBO_INSPECAO_EMBALAGEM ”,
POSICIONADO EM X = 80.00 ; Y = 2.50 ; Z = 0.00
( ajuste o Move Time para 2 m / s )

[OBJETO]
Robot – “ROBO_INSPECAO_EMBALAGEM”   

[PROPERTIES]
[NOME]
ROBO_INSPECAO_EMBALAGEM

[VISUALS]
[Mid6_small.png] X = 80.00 ; Y = 2.50 ; Z = 0.00

[ROBOT]
Move Time: 2 (s)

[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Atividade 1 do Robô

[PRINT]
AULA4_MODELO7_ETAPA3_2.png

[ROTEIRO]
QUE TRANSPORTARÁ AS PLACAS ACABADAS
DO “ QUEUE: PLACAS_ACABADAS ” PARA O “ MULTIPROCESSOR: INSPECAO_EMBALAGEM ”;

[OBJETO]
Queue – “PLACAS_ACABADAS”

[ACAO_MOUSE]
Fazer a ligação de portas central (Atalho: Letra “S” do teclado - clicar no Robot e no Processor.)

[PROPERTIES]
[OUTPUT]
[CHECK] Use Transport:
current.centerObjects[1]
[FIM_COLUNA]    

[COLUNA]
[TITULO]
Configurando Atividade 2, 3 e 4 do Robô

[PRINT]
AULA4_MODELO7_ETAPA3_3.png
[PRINT]
AULA4_MODELO7_ETAPA3_4.png
[PRINT]
AULA4_MODELO7_ETAPA3_5.png

[ROTEIRO]
QUE EXECUTARÁ A INSPEÇÃO E A EMBALAGEM DAS PLACAS;

[OBJETO]
MultiProcessor – “INSPECAO_EMBALAGEM”

[ACAO_MOUSE]
Fazer a ligação de portas central (Atalho: Letra “S” do teclado - clicar no Robot e no MultiProcessor.)

[PROPERTIES]
[MULTIPROCESSOR]
1 - INSPECAO
Number of Operators: <b>1</b>

2 - EMBALAGEM
Number of Operators: <b>1</b>

Operator: current.centerObjects[1]

[OUTPUT]
[CHECK] Use Operator(s): 1

Operator:
current.centerObjects[1]   

[PORTS]
Para o MultiProcessor “INSPECAO_EMBALAGEM”:
[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do MultiProcessor: [FIM_LETRA_VERMELHA]

[down_arrow.bmp] - Central Ports:
1: ROBO_INSPECAO_EMBALAGEM

Para o Robot “ROBO_INSPECAO_EMBALAGEM”:
1: PLACAS_ACABADAS
2: INSPECAO_EMBALAGEM

[OBSERVACAO]
Após todas as configurações, note que o TC_INSPECAO_EMBALAGEM é de 10 segundos, o que significa que a inspeção e a embalagem serão realizadas em 8 segundos + 2 segundos de espera do movimento do robô configurado com o Move Time = 2 segundos.
[FIM_COLUNA]

[COLUNA]
[TITULO]
Adicionando objetos

[PRINT]
AULA4_MODELO7_ETAPA3_6.png
[PRINT]
AULA4_MODELO7_ETAPA3_7.png

[ROTEIRO]
E QUE TRANSPORTARÁ:
AS PLACAS EMBALADAS MODELO 1 PARA O “ QUEUE: PLACAS_EMBALADAS_MOD_1 ”,
( com capacidade infinita )
POSICIONADO EM X = 85.00 ; Y = 1.00 ; Z = 0.00
E AS PLACAS EMBALADAS MODELO 2 PARA O “ QUEUE: PLACAS_EMBALADAS_MOD_2 ”,
( com capacidade infinita )
POSICIONADO EM X = 85.00 ; Y = -1.00 ; Z = 0.00

[OBJETO]
Queue – “PLACAS_EMBALADAS_MOD_1”
Queue – “PLACAS_EMBALADAS_MOD_2”

[PROPERTIES]
[NOME]
PLACAS_EMBALADAS_MOD_1
PLACAS_EMBALADAS_MOD_2

[VISUALS]
PLACAS_EMBALADAS_MOD_1 - [Mid6_small.png] X = 85.00 ; Y = 1.00 ; Z = 0.00
PLACAS_EMBALADAS_MOD_2 - [Mid6_small.png] X = 85.00 ; Y = -1.00 ; Z = 0.00

[QUEUE]
Max Content – 1000000
[FIM_COLUNA]

[COLUNA]
[TITULO]
Reconfigurando Atividade 4 do Robô

[PRINT]
AULA4_MODELO7_ETAPA3_8.png

[ROTEIRO]
COMPLEMENTANDO O ROTEIRO DO PASSO ANTERIOR, EM QUE O “ ROBOT: ROBO_INSPECAO_EMBALAGEM ” TRANSPORTARÁ AS PLACAS EMBALADAS DO MODELO 1 PARA O “ QUEUE: PLACAS_EMBALADAS_MOD_1 ”,
E AS PLACAS EMBALADAS DO MODELO 2 PARA O “ QUEUE: PLACAS_EMBALADAS_MOD_2 ”

[OBJETO]
MultiProcessor – “INSPECAO_EMBALAGEM”

[PROPERTIES]
[OUTPUT]
Send To Port → [down_arrow.bmp] Port By Case:
Case Function: <b>item.MODELO</b>
2x [PLUS] Para adicionar “Case Value + Port”:
Case: <b>1</b>  Port: <b>1</b>
Case: <b>2</b>Port: <b>2</b>

[PORTS]
Para o MultiProcessor “INSPECAO_EMBALAGEM”:

[down_arrow.bmp] - Output Ports:
1: PLACAS_EMBALADAS_MOD_1
2: PLACAS_EMBALADAS_MOD_2

[FIM_COLUNA]

[ETAPA] Etapa 04 – Formação de lotes de produção
[COLUNA]
[TITULO]
Configurando objeto

[PRINT]
AULA4_MODELO7_ETAPA4_1.png
[PRINT]
AULA4_MODELO7_ETAPA4_2.png

[ROTEIRO]
NOS ESTOQUES DE PLACAS EMBALADAS DEVERÃO SER FORMADOS LOTES DE 20 UNIDADES,
QUE SERÃO ENVIADOS PARA O “ SINK: SAIDAS_CLIENTES ”

[OBJETO]
Queue – “PLACAS_EMBALADAS_MOD_1”
Queue – “PLACAS_EMBALADAS_MOD_2”

[PROPERTIES]
[QUEUE]
[CHECK] Perform Batching
Target Batch Size: <b>20</b>

[FIM_COLUNA]

[ETAPA] Etapa 05 – Utilizando Empilhadeira para transportar lotes
[COLUNA]
[TITULO]
Adicionando e configurando objeto

[PRINT]
AULA4_MODELO7_ETAPA5_1.png

[ROTEIRO]
AGORA, VAMOS INSERIR A EMPILHADEIRA EMP_PLACAS_EMBALADAS,
POSICIONADA EM X = 90.00 ; Y = 0.00 ; Z = 0.00
( com rotação de 180º no eixo Z )
PARA LEVAR OS LOTES DE PLACAS EMBALADAS PARA O SINK
( ajustar a capacidade da empilhadeira )

[OBJETO]
Transporter – “EMP_PLACAS_EMBALADAS”

[PROPERTIES]
[NOME]
EMP_PLACAS_EMBALADAS

[VISUALS]
[Mid6_small.png] X = 90.00 ; Y = 0.00 ; Z = 0.00
[rotate_arrow.png] Z = 180.00

[TASKEXECUTER]
Capacity: <b>20</b>

[PORTS]
Para o Transporter “EMP_PLACAS_EMBALADAS”:
[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do Transporter: [FIM_LETRA_VERMELHA]

[down_arrow.bmp] - Central Ports:
1: PLACAS_EMBALADAS_MOD_1
2: PLACAS_EMBALADAS_MOD_2

[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando Atividade 1 do Transporter

[PRINT]
AULA4_MODELO7_ETAPA5_2.png

[ROTEIRO]
COMPLEMENTANDO O ROTEIRO DO PASSO ANTERIOR, EM QUE A EMPILHADEIRA SERÁ USADA PARA TRANSPORTAR OS LOTES DE PLACAS EMBALADAS PARA O “ SINK: SAIDAS_CLIENTES ”

[OBJETO]
Queue – “PLACAS_EMBALADAS_MOD_1”
Queue – “PLACAS_EMBALADAS_MOD_2”

[PROPERTIES]
[OUTPUT]
[CHECK] Use Transport:
current.centerObjects[1]

[PORTS]
Para Queue “PLACAS_EMBALADAS_MOD_1” + “PLACAS_EMBALADAS_MOD_2”:
[down_arrow.bmp] Central Ports:
1: EMP_PLACAS_EMBALADAS

[FIM_COLUNA]

[COLUNA]
[TITULO]
Configurando retorno da empilhadeira

[PRINT]
AULA4_MODELO7_ETAPA5_3.png

[ROTEIRO]
E VOLTAR À POSIÇÃO ORIGINAL QUANDO DESCARREGAR

[OBJETO]
Transporter – “EMP_PLACAS_EMBALADAS”

[PROPERTIES]
[TRIGGERS]
[PLUS] → On Unload → Travel to a Specific Location:
X: <b>90</b>
Y: <b>0</b>
Z: <b>0</b>

[FIM_COLUNA]

[ETAPA] Resultados
[COLUNA]
[TITULO]
Validando o modelo simulado.

[PRINT]
AULA4_MODELO7_RESULTADOS_1.png

[ROTEIRO]
Quantidade expedida
640 unidades

Elaborar e interpretar os gráficos de estados
PROCESSING
IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;
MONTAGEM: 22,33% ; ACABAMENTO: 22,30%; INSPECAO_EMBALAGEM: 17,83%

[FIM_COLUNA]



