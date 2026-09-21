window.TUTORIAL_CONTENT = {
    "meta":  {
                 "title":  "Tutorial de Modelagem utilizando FlexSim Education v2027-0",
                 "generatedAt":  "2026-09-21T19:06:44.9546630-03:00",
                 "source":  "Word_Mestre_Tutorial_FlexSim_ongoing.docx",
                 "counts":  {
                                "courses":  3,
                                "models":  6,
                                "stages":  33,
                                "columns":  73,
                                "prints":  110
                            }
             },
    "courses":  [
                    {
                        "id":  "aula-01",
                        "number":  1,
                        "title":  "",
                        "models":  [
                                       {
                                           "id":  "modelo-01",
                                           "number":  1,
                                           "label":  "1.1) Modelo 01",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-01-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 - Chegada de placas virgens ao modelo.",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA1_1.png",
                                                                                                     "w":  331,
                                                                                                     "h":  288
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE PRIMEIRO MODELO,",
                                                                                                  "PLACAS VIRGENS CHEGAM PELO SOURCE."
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Source"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Source."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando chegada das placas ao modelo",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA1_2.png",
                                                                                                     "w":  1176,
                                                                                                     "h":  629
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "“SOURCE: CHEGADA_PLACAS_VIRGENS”:",
                                                                                                  "POSICIONADO EM:",
                                                                                                  "X = 0.00 ; Y = 0.00 ; Z = 0.00",
                                                                                                  "ESSAS CHEGADAS OCORREM EM INTERVALOS DE 10 s A PARTIR DE t = 0"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Source – “CHEGADA_PLACAS_VIRGENS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "CHEGADA_PLACAS_VIRGENS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 0.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "SOURCE",
                                                                                                         "title":  "Source",
                                                                                                         "lines":  [
                                                                                                                       "Arrival Style: Inter-Arrival Time",
                                                                                                                       "[CHECK] Arrival at time 0",
                                                                                                                       "Inter-Arrival Time: 10 s"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Fila/Estoque das Placas Virgens",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA2_1.png",
                                                                                                     "w":  334,
                                                                                                     "h":  290
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "APÓS ENTRAREM NO SISTEMA,",
                                                                                                  "AS PLACAS VÃO PARA UMA QUEUE."
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Queue."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando estoque de placas virgens",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA2_2.png",
                                                                                                     "w":  1381,
                                                                                                     "h":  647
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "“QUEUE: PLACAS_VIRGENS”:",
                                                                                                  "CAPACIDADE INFINITA.",
                                                                                                  "POSICIONADO EM:",
                                                                                                  "X = 10.00 ; Y = 0.00 ; Z = 0.00",
                                                                                                  "ESSAS CHEGADAS OCORREM EM INTERVALOS DE 10 s A PARTIR DE t = 0"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_VIRGENS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Em seguida, clique primeiro no Source e depois na Queue."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_VIRGENS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 10.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content = 1000000"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-03",
                                                              "number":  "03",
                                                              "type":  "normal",
                                                              "title":  "Etapa 03 – Diferentes modelos de Placas Virgens",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Configurando modelos de placas virgens",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA3_1.png",
                                                                                                     "w":  1505,
                                                                                                     "h":  865
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA3_2.png",
                                                                                                     "w":  1549,
                                                                                                     "h":  896
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "CHEGAM DOIS MODELOS DIFERENTES,",
                                                                                                  "ALEATORIAMENTE NA MESMA PROPORÇÃO",
                                                                                                  "MODELOS E COLOCAÇÕES:",
                                                                                                  "1 – GREEN; 2 - YELLOW"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Source – CHEGADAS_PLACAS_VIRGENS"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "Criar Modelos:",
                                                                                                                       "On Creation → Data → Set Label by Percentage:",
                                                                                                                       "Object: \u003cb\u003eitem\u003c/b\u003e",
                                                                                                                       "Label: \u003cb\u003e“MODELO”\u003c/b\u003e",
                                                                                                                       "Percent:\u003cb\u003e50\u003c/b\u003e",
                                                                                                                       "Value:\u003cb\u003e1\u003c/b\u003e",
                                                                                                                       "Clique no [PLUS] abaixo de Label para criar um novo “MODELO” e liberar o campo para preencher o Modelo 2 abaixo.",
                                                                                                                       "Percent:\u003cb\u003e50\u003c/b\u003e",
                                                                                                                       "Value:\u003cb\u003e2\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "Criar Coloração por Modelos:",
                                                                                                                       "On Creation → Visual → Set Color By Case:",
                                                                                                                       "Value: \u003cb\u003eitem.MODELO\u003c/b\u003e",
                                                                                                                       "Object: \u003cb\u003eitem\u003c/b\u003e",
                                                                                                                       "Clique no [PLUS] abaixo de Object para adicionar os campos necessários ao preenchimento dos dois modelos.",
                                                                                                                       "",
                                                                                                                       "Preencha Value na primeira coluna e Color na segunda coluna, associando cada valor do campo MODELO à respectiva cor.",
                                                                                                                       "1 : \u003cb\u003e[down_arrow.bmp] \u003c/b\u003eColor.green",
                                                                                                                       "2 : \u003cb\u003e[down_arrow.bmp] \u003c/b\u003eColor.yellow"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao adicionar novos modelos em Set Label by Percentage, distribua as porcentagens entre todos os modelos de forma que a soma dos valores seja sempre igual a 100%."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-04",
                                                              "number":  "04",
                                                              "type":  "normal",
                                                              "title":  "Etapa 04 – Impressoras das Placas Virgens",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA4_1.png",
                                                                                                     "w":  331,
                                                                                                     "h":  288
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "DESSE ESTOQUE, AS PLACAS VÃO PARA OS",
                                                                                                  "“PROCESSOR: IMPRESSORAS 1;2”",
                                                                                                  "Idênticas e paralelas"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Processor."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.",
                                                                                                          "",
                                                                                                          "Adicione um Processor e configure-o conforme as orientações da coluna “Configurando impressoras”. Depois, selecione o Processor “IMPRESSORA_1”, utilize CTRL+C para copiá-lo e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações do Processor original."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando impressoras",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA4_2.png",
                                                                                                     "w":  1487,
                                                                                                     "h":  667
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA4_3.png",
                                                                                                     "w":  1490,
                                                                                                     "h":  695
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "“PROCESSOR: IMPRESSORAS 1;2”",
                                                                                                  "TC = 20 [s/u]",
                                                                                                  "POSICIONADAS EM:",
                                                                                                  "IMPRESSORA_1, [Mid6_small.png] X=20.00 ; Y=3.50 ; Z=0.00",
                                                                                                  "IMPRESSORA_2, [Mid6_small.png] X=20.00 ; Y=-3.50 ; Z=0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.",
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado.",
                                                                                               "",
                                                                                               "Neste caso, recomenda-se realizar as conexões nesta ordem:",
                                                                                               "",
                                                                                               "1. “PLACAS_VIRGENS” → “IMPRESSORA_1”",
                                                                                               "2. “PLACAS_VIRGENS” → “IMPRESSORA_2”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "IMPRESSORA_1",
                                                                                                                       "IMPRESSORA_2"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "IMPRESSORA_1:[Mid6_small.png] X = 20.00 ; Y = 3.50 ; Z = 0.00",
                                                                                                                       "IMPRESSORA_2:[Mid6_small.png] X = 20.00 ; Y = -3.50 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Process Time: \u003cb\u003e20\u003c/b\u003e (s)"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-05",
                                                              "number":  "05",
                                                              "type":  "normal",
                                                              "title":  "Etapa 05 – Saída das Placas para os clientes",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA5_1.png",
                                                                                                     "w":  277,
                                                                                                     "h":  290
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "APÓS SEREM IMPRESSAS, AS PLACAS DEIXARÃO O SISTEMA PELO",
                                                                                                  "“SINK: SAIDA_CLIENTES”"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Sink"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Fixed Resources (Recursos fixos) → Sink."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando saída do modelo",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA5_2.png",
                                                                                                     "w":  1547,
                                                                                                     "h":  657
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "“SINK: SAIDA_CLIENTES”",
                                                                                                  "POSICIONADO EM:",
                                                                                                  "[Mid6_small.png] X=30.00 ; Y=0.00 ; Z=0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Sink – “SAIDA_CLIENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar objetos (Atalho: Letra “A” do teclado - clicar primeiro na Impressora e depois no Sink.)"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "SAIDA_CLIENTES"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 30.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Assim como se fez a ligação da Queue “PLACAS_VIRGENS” aos Processors “IMPRESSORA_1” e “IMPRESSORA_2”, priorize conectar na ordem, objeto 1 na porta 1 e objeto 2 na porta 2, tanto input quanto output."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-06",
                                                              "number":  "06",
                                                              "type":  "normal",
                                                              "title":  "Etapa 06 – Filtrar qual impressora processa cada modelo de placa",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Configurando saídas da Queue",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA6_1.png",
                                                                                                     "w":  1679,
                                                                                                     "h":  898
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "CADA MODELO DEVERÁ ENTRAR EM UMA IMPRESSORA ESPECÍFICA:",
                                                                                                  "O MODELO 1 NA IMPRESSORA 1 E O MODELO 2 NA IMPRESSORA 2"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue - PLACAS_VIRGENS"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "Send to Port → Port By Case",
                                                                                                                       "Case Function: item.MODELO",
                                                                                                                       "Clique no [PLUS] abaixo de Case Function para adicionar os campos necessários aos dois modelos.",
                                                                                                                       "",
                                                                                                                       "Preencha Case na primeira coluna e Port na segunda coluna, associando cada modelo à respectiva porta de saída.",
                                                                                                                       "Case: 1  Port: 1",
                                                                                                                       "Case: 2  Port: 2"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-07",
                                                              "number":  "07",
                                                              "type":  "normal",
                                                              "title":  "Etapa 07 – Ajustar turno de trabalho de 08:00 até 16:00 horas.",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Configurando Run Time",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPA7_1.png",
                                                                                                     "w":  1604,
                                                                                                     "h":  900
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "AJUSTE O RUN TIME PARA 1 TURNO DAS 08h00 ÀS 16h00,",
                                                                                                  "SE NECESSÁRIO, COM O AUXÍLIO DO EDIT MODEL SETTINGS"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Superior → Run Time [IMG:image2.png]"
                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "RUN TIME",
                                                                                                         "title":  "Run Time",
                                                                                                         "lines":  [
                                                                                                                       "Start Time: 08:00:00",
                                                                                                                       "[CHECK] Stop Times: 16:00:00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-08",
                                                              "number":  "08",
                                                              "type":  "final",
                                                              "title":  "Etapa Final – Elaborar dados de output e gráficos de estados (Dashboard)",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Inserindo gráficos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL1_1.png",
                                                                                                     "w":  1470,
                                                                                                     "h":  534
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL1_2.png",
                                                                                                     "w":  1703,
                                                                                                     "h":  563
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL1_3.png",
                                                                                                     "w":  1918,
                                                                                                     "h":  563
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL1_4.png",
                                                                                                     "w":  1716,
                                                                                                     "h":  475
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida",
                                                                                                  "2.829 unidades"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Imagem 1 - Barra Superior → Dashboards → Add Blank Dashboard",
                                                                                                  "Imagem 2 – Output → Bar Chart**"
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "**: Da Imagem 2, deve-se arrastar com o mouse “Bar Chart” até a área vazia de Dashboard."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "QUANTIDADE EXPEDIDA"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "OPTIONS",
                                                                                                         "title":  "Options",
                                                                                                         "lines":  [
                                                                                                                       "Throughput Display: PLACAS IMPRESSAS"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "É possível alterar a cor da barra que irá representa a quantidade expedida na aba Colors em Properties."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Gráficos de Estados",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL2_1.png",
                                                                                                     "w":  1624,
                                                                                                     "h":  780
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL2_2.png",
                                                                                                     "w":  1719,
                                                                                                     "h":  534
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_ETAPAFINAL2_3.png",
                                                                                                     "w":  1238,
                                                                                                     "h":  820
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Elaborar e interpretar os gráficos de estados",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Imagem 1 - State → Pie Chart**",
                                                                                                  "Imagem 2 – [PLUS] → Select Objects → +Processor → IMPRESSORA_1 + IMPRESSORA_2 → Select*"
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "**: Da Imagem 1, deve-se arrastar com o mouse “Bar Chart” até a área vazia de Dashboard.",
                                                                                               "",
                                                                                               "*: O caminho da Imagem 2 é uma forma alternativa de selecionar os elementos que serão visualizados no gráfico, alternativo ao que fizemos no gráfico de quantidade expedida ao lado, usando o pincel."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "2.829",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  97.78
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  98.82
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida\n2.829 unidades\nÉ possível alterar a cor da barra que irá representa a quantidade expedida na aba Colors em Properties.\nElaborar e interpretar os gráficos de estados\nPROCESSING\nIMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%"
                                                                          }
                                                          },
                                                          {
                                                              "id":  "modelo-01-etapa-09",
                                                              "number":  "09",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Checando performance do modelo simulado.",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_RESULTADOS_1.png",
                                                                                                     "w":  1918,
                                                                                                     "h":  905
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO1_RESULTADOS_2.png",
                                                                                                     "w":  1910,
                                                                                                     "h":  901
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida: 2.829 unidades",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "2.829",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  97.78
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  98.82
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida: 2.829 unidades\nPROCESSING\nIMPRESSORA_1: 97,78% ; IMPRESSORA_2: 98,82%"
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-05",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  true
                                                                          }
                                                                      ]
                                                      }
                                       },
                                       {
                                           "id":  "modelo-02",
                                           "number":  2,
                                           "label":  "1.2) Modelo 02",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-02-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 – Operadores dedicados para as impressoras",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_1.png",
                                                                                                     "w":  389,
                                                                                                     "h":  459
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE MODELO, VAMOS ACRESCENTAR:",
                                                                                                  "UM OPERADOR DEDICADO PARA CADA IMPRESSORA"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Task Executers (Executores de Tarefas) → Operator."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local próximo do desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando posição dos operadores",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_2.png",
                                                                                                     "w":  1718,
                                                                                                     "h":  676
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "POSICIONADOS EM:",
                                                                                                  "OPERADOR_IMPRESSORA_1, X = 20.00 ; Y = 6.00 ; Z = 0.00",
                                                                                                  "OPERADOR_IMPRESSORA_2, X = 20.00 ; Y = -1.00 ; Z = 0.00",
                                                                                                  "( ambos com rotação de 270º no eixo Z )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “OPERADOR_IMPRESSORA_1”",
                                                                                                 "Operator – “OPERADOR_IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "OPERADOR_IMPRESSORA_1",
                                                                                                                       "OPERADOR_IMPRESSORA_2"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "OPERADOR_IMPRESSORA_1 – ",
                                                                                                                       "[Mid6_small.png] X = 20.00 ; Y = 6.00 ; Z = 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 270.00",
                                                                                                                       "OPERADOR_IMPRESSORA_2 – ",
                                                                                                                       "[Mid6_small.png] X = 20.00 ; Y = -1.00 ; Z = 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 270.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Operador ao Processo (Método 1)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_3.png",
                                                                                                     "w":  1712,
                                                                                                     "h":  669
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_4.png",
                                                                                                     "w":  953,
                                                                                                     "h":  636
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "o OPERADOR_IMPRESSORA_1 realizará o processamento na IMPRESSORA_1,",
                                                                                                  "enquanto o OPERADOR_IMPRESSORA_2 realizará o processamento na IMPRESSORA_2"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)",
                                                                                               "",
                                                                                               "2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "IMPRESSORA_1",
                                                                                                                       "IMPRESSORA_2"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Operator(s) : 1",
                                                                                                                       "Operator: current.centerObjects[1] "
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Operador ao Processo (Método 2)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_3.png",
                                                                                                     "w":  1712,
                                                                                                     "h":  669
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_5.png",
                                                                                                     "w":  1716,
                                                                                                     "h":  703
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "o OPERADOR_IMPRESSORA_1 realizará o processamento na IMPRESSORA_1,",
                                                                                                  "enquanto o OPERADOR_IMPRESSORA_2 realizará o processamento na IMPRESSORA_2"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)",
                                                                                               "",
                                                                                               "2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse.",
                                                                                               "",
                                                                                               "3°: Dentro de |+|Processor, após habilitar ([CHECK] Use Operator(s)), selecione o Operator com [eyedropper.png] e depois clicando em cima do “OPERADOR_IMPRESSORA_X” para a “IMPRESSORA_X”."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-02-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Movimentadores das Placas Virgens entre a fila e as impressoras.",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA1_1.png",
                                                                                                     "w":  389,
                                                                                                     "h":  459
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E DOIS MOVIMENTADORES DE MATERIAIS,",
                                                                                                  "QUE LEVARÃO AS PLACAS VIRGENS"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Esquerda → Library (Biblioteca) → Task Executers (Executores de Tarefas) → Operator."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Clique e mantenha pressionado o botão esquerdo do mouse sobre o objeto e arraste-o até o local próximo do desejado no Mapa 3D.",
                                                                                               "",
                                                                                               "Como alternativa, clique uma vez com o botão esquerdo para selecionar o objeto e, em seguida, clique novamente no local desejado do Mapa 3D para adicioná-lo."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Ao utilizar a segunda forma, o objeto permanece selecionado após ser adicionado. Dessa maneira, você pode clicar em outros locais do Mapa 3D para inserir rapidamente outros objetos do mesmo tipo.",
                                                                                                          "",
                                                                                                          "Adicione um Operator e configure-o conforme as orientações da coluna “Configurando posição dos movimentadores”. Depois, selecione o Operator “MOVIMENTADOR_1”, utilize CTRL+C para copiá-lo e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações do Operator original."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando posição dos movimentadores",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA2_2.png",
                                                                                                     "w":  1712,
                                                                                                     "h":  614
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "DO “ QUEUE: PLACAS_VIRGENS ” PARA OS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”",
                                                                                                  "POSICIONADOS EM:",
                                                                                                  "MOVIMENTADOR_1, X = 15.00 ; Y =  3.50 ; Z = 0.00",
                                                                                                  "MOVIMENTADOR_2, X = 15.00 ; Y = -3.50 ; Z = 0.00",
                                                                                                  "( ambos com rotação de 180º no eixo Z )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “MOVIMENTADOR_1”",
                                                                                                 "Operator – “MOVIMENTADOR_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "MOVIMENTADOR_1",
                                                                                                                       "MOVIMENTADOR_2"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "MOVIMENTADOR_1 – ",
                                                                                                                       "[Mid6_small.png] X = 15.00 ; Y = 3.50 ; Z = 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 180.00",
                                                                                                                       "MOVIMENTADOR_2 – ",
                                                                                                                       "[Mid6_small.png] X = 15.00 ; Y = -3.50 ; Z = 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 180.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Movimentador ao Processo",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA2_3.png",
                                                                                                     "w":  1712,
                                                                                                     "h":  746
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA2_4.png",
                                                                                                     "w":  1713,
                                                                                                     "h":  709
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "SENDO QUE:",
                                                                                                  "o MOVIMENTADOR_1 deverá abastecer somente a IMPRESSORA_1,",
                                                                                                  "enquanto que o MOVIMENTADOR_2 deverá abastecer somente a IMPRESSORA_2;"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_VIRGENS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "1°: Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)",
                                                                                               "",
                                                                                               "2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_VIRGENS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Transport:",
                                                                                                                       "[down_arrow.bmp] → Center Port By Case:",
                                                                                                                       "Case Function: item.MODELO",
                                                                                                                       "Clique duas vezes no [PLUS] abaixo de Case Function para criar um novo Case e liberar os campos para preencher os valores de Setup Cases abaixo.",
                                                                                                                       "",
                                                                                                                       "Case: 1 Port: 1",
                                                                                                                       "Case: 2 Port: 2"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Nas ligações de Porta Central, não faz diferença iniciar clicando no Operador ou no processor primeiro, ambos sentidos funcionam."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando retorno dos movimentadores à posição inicial",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_ETAPA2_5.png",
                                                                                                     "w":  1713,
                                                                                                     "h":  723
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "PARA FINALIZAR:",
                                                                                                  "o MOVIMENTADOR_1, após descarregar, deverá retornar à posição X = 15.00 ; Y = 3.50 ; Z = 0.00,",
                                                                                                  "enquanto o MOVIMENTADOR_2, após descarregar, deverá retornar à posição X = 15.00 ; Y = -3.50 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “MOVIMENTADOR_1”",
                                                                                                 "Operator – “MOVIMENTADOR_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "MOVIMENTADOR_1:",
                                                                                                                       "On Unload → Travel to a Specific Location:",
                                                                                                                       "X: \u003cb\u003e15\u003c/b\u003e",
                                                                                                                       "Y: \u003cb\u003e3.5\u003c/b\u003e",
                                                                                                                       "Z: \u003cb\u003e0\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "MOVIMENTADOR_1:",
                                                                                                                       "On Unload → Travel to a Specific Location:",
                                                                                                                       "X: \u003cb\u003e15\u003c/b\u003e",
                                                                                                                       "Y: -\u003cb\u003e3.5\u003c/b\u003e",
                                                                                                                       "Z: \u003cb\u003e0\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-02-etapa-03",
                                                              "number":  "03",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Checando performance do modelo simulado.",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA1_MODELO2_RESULTADOS_1.png",
                                                                                                     "w":  409,
                                                                                                     "h":  418
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida: 2.009 unidades",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 70,31% ; IMPRESSORA_2: 69,24%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "2.009",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  70.31
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  69.24
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida: 2.009 unidades\nPROCESSING\nIMPRESSORA_1: 70,31% ; IMPRESSORA_2: 69,24%"
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_2",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_1",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  6,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_1",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_2",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  -1,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          }
                                                                      ]
                                                      }
                                       }
                                   ]
                    },
                    {
                        "id":  "aula-02",
                        "number":  2,
                        "title":  "",
                        "models":  [
                                       {
                                           "id":  "modelo-03",
                                           "number":  3,
                                           "label":  "2.1) Modelo 03",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-03-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 – Estoque de placas impressas",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Desconectando objetos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_1.png",
                                                                                                     "w":  1699,
                                                                                                     "h":  703
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”",
                                                                                                 "Sink – “SAIDA_CLIENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Após realizar a desconexão dos objetos, coloque o Sink – “SAIDA_CLIENTES” em X = 50.00, mantendo Y e Z em 0.00."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_2.png",
                                                                                                     "w":  1095,
                                                                                                     "h":  668
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_3.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  695
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE MODELO, AO SAÍREM DOS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”,",
                                                                                                  "AS PLACAS IRÃO DIRETO PARA O “ QUEUE: PLACAS_IMPRESSAS ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 30.00 ; Y = 0.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_IMPRESSAS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_IMPRESSAS - [Mid6_small.png] X = 30.00 ; Y = 0.00 ; Z = 0.00",
                                                                                                                       "SAIDA_CLIENTES - [Mid6_small.png] X = 50.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content – 1000000"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando transporte na saída das impressoras",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_4.png",
                                                                                                     "w":  1727,
                                                                                                     "h":  790
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_5.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  880
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "SENDO LEVADAS PELOS PRÓPRIOS OPERADORES DESSES PROCESSOS,"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "As imagens presentes nesta parte são os dois métodos de selecionar o responsável pelo transporte do produto.",
                                                                                                          "A primeira imagem é como o primeiro Task Executer na Porta Central do Objeto.",
                                                                                                          "A segunda imagem é utilizando o [eyedropper] para selecionar Task Executer desejado para transporter o produto."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando retorno dos operadores à posição inicial",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA1_6.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  880
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "QUE APÓS DESCARREGAREM, DEVERÃO RETORNAR ÀS SUAS RESPECTIVAS IMPRESSORAS;"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “OPERADOR_IMPRESSORA_1”",
                                                                                                 "Operator – “OPERADOR_IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "OPERADOR_IMPRESSORA_1:",
                                                                                                                       "On Unload → Travel to an Object:",
                                                                                                                       "Destination: current.centerObjects[1] ",
                                                                                                                       "Priority: 0",
                                                                                                                       "Condition: current.taskSequences.length == 0",
                                                                                                                       "",
                                                                                                                       "OPERADOR_IMPRESSORA_2:",
                                                                                                                       "On Unload → Travel to an Object:",
                                                                                                                       "Destination: current.centerObjects[1]",
                                                                                                                       "Priority: 0",
                                                                                                                       "Condition: current.taskSequences.length == 0"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Teste das placas impressas",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e Configurando objetos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA2_1.png",
                                                                                                     "w":  1607,
                                                                                                     "h":  824
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA2_2.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  889
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "DESTE ESTOQUE, AS PLACAS IRÃO PARA O “ PROCESSOR: TESTE ”,",
                                                                                                  "POSICIONADO EM X = 40.00 ; Y = 0.00 ; Z = 0.00 ",
                                                                                                  "QUE POSSUI TEMPOS DE CICLO VARIÁVEIS DE ACORDO COM O MODELO:",
                                                                                                  "MODELO 1: 11 [ s / u ] ; MODELO 2: 12 [ s / u ]"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “TESTE”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "TESTE"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X= 40.00; Y= 0.00; Z= 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Process Time [down_arrow.bmp] → Values by Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.MODELO\u003c/b\u003e",
                                                                                                                       "Case: \u003cb\u003e1\u003c/b\u003e  Time: \u003cb\u003e11\u003c/b\u003e",
                                                                                                                       "Case: \u003cb\u003e2\u003c/b\u003e  Time: \u003cb\u003e12\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Extra – Indicador de tempo de Process Time do Teste no Mapa 3D",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA2_3.png",
                                                                                                     "w":  1915,
                                                                                                     "h":  914
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Apenas um método de verificação da lógica de diferentes Process Times para diferentes Modelos. Se o produto dentro do processor for da cor verde, deve aparecer “TC_TESTE: 11”, se for da cor amarela, deve aparecer “TC_TESTE: 12”."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-03",
                                                              "number":  "03",
                                                              "type":  "normal",
                                                              "title":  "Etapa 03 – Operador responsável pelo Teste",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_1.png",
                                                                                                     "w":  1918,
                                                                                                     "h":  791
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "TAMBÉM VAMOS ACRESCENTAR O OPERADOR_TESTE,",
                                                                                                  "POSICIONADO EM X = 40,00 ; Y = 2,50 ; Z = 0,00",
                                                                                                  "( com 270º de rotação no eixo Z )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "OPERADOR_TESTE"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X= 40.00 ; Y= 2.50 ; Z= 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 270.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Atividade 1 do Operador do Teste",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_2.png",
                                                                                                     "w":  1917,
                                                                                                     "h":  800
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_3.png",
                                                                                                     "w":  1727,
                                                                                                     "h":  871
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "QUE FICARÁ RESPONSÁVEL POR TRÊS ATIVIDADES:",
                                                                                                  "LEVAR AS PLACAS DO “ QUEUE: ESTOQUE_PLACAS_IMPRESSAS ” PARA O “ PROCESSOR: TESTE ”"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Transport: current.centerObjects[1]",
                                                                                                                       "OU",
                                                                                                                       "[CHECK] Use Transport: /OPERADOR_TESTE (USANDO eyedropper.png PARA SELECIONAR O TRANSPORTER)"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Atividade 2 do Operador do Teste",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_4.png",
                                                                                                     "w":  1916,
                                                                                                     "h":  965
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_5.png",
                                                                                                     "w":  1460,
                                                                                                     "h":  852
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_6.png",
                                                                                                     "w":  1711,
                                                                                                     "h":  911
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_7.png",
                                                                                                     "w":  1522,
                                                                                                     "h":  713
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "FAZER O SETUP DE 2 [ s/u ] SEMPRE QUE HOUVER MUDANÇA DE MODELO"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “TESTE”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e na Queue.)"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Setup Time → [down_arrow.bmp] If Item Label Changes:",
                                                                                                                       "Label: \u003cb\u003e“MODELO”\u003c/b\u003e",
                                                                                                                       "If Item’s Label Changed: \u003cb\u003e2\u003c/b\u003e",
                                                                                                                       "Otherwise: \u003cb\u003e0\u003c/b\u003e",
                                                                                                                       "[CHECK] Use Operator(s): 1",
                                                                                                                       "",
                                                                                                                       "Operator:",
                                                                                                                       "Current.centerObjects[1]  OU  /OPERADOR_TESTE"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando Atividade 3 do Operador do Teste",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA3_8.png",
                                                                                                     "w":  1725,
                                                                                                     "h":  909
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E REALIZAR O TESTE EM CADA UMA DAS PLACAS"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “TESTE”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Process Time:",
                                                                                                                       "[CHECK] Use Operator(s)  +  [CHECK] Same as Setup"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "A conexão da porta central do Operator já foi feita com o Processor no passo anterior, para que ele pudesse fazer o Setup do Processor. Logo, aqui não será necessário realizar a conexão de porta central."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-04",
                                                              "number":  "04",
                                                              "type":  "normal",
                                                              "title":  "Etapa 04 – Qualidade das Placas determinadas pelo teste",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Configurando rótulo para produto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA4_1.png",
                                                                                                     "w":  1725,
                                                                                                     "h":  916
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "MAS AO SAIR DO “ PROCESSOR: TESTE ”,",
                                                                                                  "CADA PLACA DEVERÁ RECEBER O RÓTULO DE APROVADA OU REPROVADA,",
                                                                                                  "POR MEIO DE UMA LABEL QUE DEVERÁ SER CRIADA E DENOMINADA DE QUALIDADE",
                                                                                                  "E 80% DAS PLACAS TESTADAS DEVERÃO RECEBER O RÓTULO DE APROVADAS E 20% DE REPROVADAS"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “TESTE”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Exit → Data → Set Label by Percentage:",
                                                                                                                       "Label: \u003cb\u003e“QUALIDADE”\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "Percent: \u003cb\u003e80\u003c/b\u003e",
                                                                                                                       "Value: \u003cb\u003e“APROVADA”\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "[PLUS] Para adicionar um novo “Percent + Value”:",
                                                                                                                       "",
                                                                                                                       "Percent: \u003cb\u003e20\u003c/b\u003e",
                                                                                                                       "Value: \u003cb\u003e“REPROVADA”\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-05",
                                                              "number":  "05",
                                                              "type":  "normal",
                                                              "title":  "Etapa 05 – Utilizar esteiras",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto (Esteira aprovados)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA5_1.png",
                                                                                                     "w":  1611,
                                                                                                     "h":  916
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA5_2.png",
                                                                                                     "w":  1423,
                                                                                                     "h":  906
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA5_3.png",
                                                                                                     "w":  1723,
                                                                                                     "h":  705
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "DEIXANDO O “ PROCESSOR: TESTE ”, AS PLACAS DEVERÃO ENTRAR EM UMA ESTEIRA RETA HORIZONTAL",
                                                                                                  "POSICIONADA EM Xa = 42.00 e Xb = 48.00 ; Ya = 0.00 e Yb = 0.00 ; Za = 1.00 e Zb = 1.00,",
                                                                                                  "QUE LEVARÁ AS PLACAS APROVADAS PARA O “ SINK: SAIDA_CLIENTES ”,",
                                                                                                  "QUE AGORA ESTARÁ POSICIONADO EM X = 50.00 ; Y = 0.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "1°: Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado. Conforme orientado a seguir:",
                                                                                               "Processor “TESTE” → Sink “SAIDA_CLIENTES”",
                                                                                               "",
                                                                                               "2°: Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Conforme orientado a seguir:",
                                                                                               "Processor “TESTE” → Conveyor (ESTEIRA) → Sink “SAIDA_CLIENTES”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "CONVEYOR",
                                                                                                         "title":  "Conveyor",
                                                                                                         "lines":  [
                                                                                                                       "Start: \u003cb\u003eX= 42.00 ; Y= 0.00 ; Z= 1.00\u003c/b\u003e",
                                                                                                                       "End: \u003cb\u003eX= 48.00 ; Y= 0.00 ; Z= 1.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto (Esteira reprovados)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA5_4.png",
                                                                                                     "w":  1724,
                                                                                                     "h":  892
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E AS PLACAS REPROVADAS PARA UMA ESTEIRA RETA VERTICAL",
                                                                                                  "POSICIONADA EM Xa = 45.00 e Xb = 45.00 ; Ya = -0.50 e Yb = -16.50 ; Za = 1.00 e Zb = 1.00 "
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "CONVEYOR",
                                                                                                         "title":  "Conveyor",
                                                                                                         "lines":  [
                                                                                                                       "Start: \u003cb\u003eX= 45.00 ; Y= -0.50 ; Z= 1.00\u003c/b\u003e",
                                                                                                                       "End: \u003cb\u003eX= 45.00 ; Y= -16.50 ; Z= 1.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Repita o processo de arrastar o Conveyor para o Mapa 3D, como mostrado no passo anterior realizado para o Conveyor de aprovadas. Posteriormente a isso, configure a posição conforme mostra em [CONVEYOR]."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-06",
                                                              "number":  "06",
                                                              "type":  "normal",
                                                              "title":  "Etapa 06 – Utilizando Decision Point para determinar o fluxo dos produtos",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA6_1.png",
                                                                                                     "w":  1608,
                                                                                                     "h":  911
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA6_2.png",
                                                                                                     "w":  1721,
                                                                                                     "h":  909
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA6_3.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  913
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA6_4.png",
                                                                                                     "w":  1609,
                                                                                                     "h":  958
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "PARA DIRECIONAR CADA PLACA, UTILIZE OS SEGUINTES DECISION POINTS:",
                                                                                                  "DP_0, POSICIONADO EM X = 42.50 ; Y = 0.00 ; Z = 0.00",
                                                                                                  "DP_1, POSICIONADO EM X = 45.00 ; Y = -1.50 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Decision Point – “DP_0”",
                                                                                                 "Decision Point – “DP_1”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "Decision Point “DP_0” → Decision Point “DP_1”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "DP_0",
                                                                                                                       "DP_1"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "DECISION_POINT",
                                                                                                         "title":  "Decision Point",
                                                                                                         "lines":  [
                                                                                                                       "DP_0:",
                                                                                                                       "[_resize.png] \u003cb\u003eX= 42.50 ; Y= 0.20 ; Z= 0.00\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "DP_1:",
                                                                                                                       "[_resize.png] \u003cb\u003eX= 45.00 ; Y= -1.5 ; Z= 0.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando lógica do objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA6_5.png",
                                                                                                     "w":  1725,
                                                                                                     "h":  913
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Decision Point – “DP_0”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On arrival → Send Item By Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.QUALIDADE\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "[PLUS] Para adicionar um novo “Case + Destination”:",
                                                                                                                       "Case: \u003cb\u003e“REPROVADA”\u003c/b\u003e",
                                                                                                                       "Destination: \u003cb\u003ecurrent.outObjects[1]\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-07",
                                                              "number":  "07",
                                                              "type":  "normal",
                                                              "title":  "Etapa 07 – Destino Placas Reprovadas",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objetos (Esteira horizontal)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA7_1.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  913
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "JÁ ESSA ESTEIRA VERTICAL LEVARÁ AS PLACAS PARA UMA ESTEIRA RETA HORIZONTAL,",
                                                                                                  "POSICIONADA EM Xa = 43.00 e Xb = 12.00 ; Ya = -20.00 e Yb = -20.00 ; Za = 1.00 e Zb = 1.00",
                                                                                                  "( AS ESTEIRAS VERTICAL E HORIZONTAL DEVERÃO SER UNIDAS POR UM JOIN )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "CONVEYOR",
                                                                                                         "title":  "Conveyor",
                                                                                                         "lines":  [
                                                                                                                       "Start: \u003cb\u003eX= 43.00 ; Y= -20.00 ; Z= 1.00\u003c/b\u003e",
                                                                                                                       "End: \u003cb\u003eX= 12.00 ; Y= -20.00 ; Z= 1.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Conectando esteiras (Join Conveyors)",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA7_2.png",
                                                                                                     "w":  1611,
                                                                                                     "h":  912
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "( AS ESTEIRAS VERTICAL E HORIZONTAL DEVERÃO SER UNIDAS POR UM JOIN )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor – “StraightConveyor2”",
                                                                                                 "Conveyor – “StraightConveyor3”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Selecione a opção Join Conveyors na Barra Esquerda, em seguida, selecione o final da “StraightConveyor2” com o início da “StraightConveyor3”."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_ETAPA7_3.png",
                                                                                                     "w":  1917,
                                                                                                     "h":  919
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "QUE LEVARÁ AS PLACAS PARA O “ QUEUE: PLACAS_IMPRESSAS_REPROVADAS ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 10.00 ; Y = -20.00 ; Z = 0.00",
                                                                                                  "AO ENTRAREM NESSE ESTOQUE, AS PLACAS DEVERÃO FICAR NA COR VERMELHA",
                                                                                                  "( POR SEGURANÇA, PLACAS APROVADAS DEVERÃO FICAR NA COR AZUL)"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS_REPROVADAS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. Conforme orientado a seguir:",
                                                                                               "Conveyor “StraightConveyor3” → Queue “PLACAS_IMPRESSAS_REPROVADAS”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_IMPRESSAS_REPROVADAS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X= 10.00 ; Y= -20.00 ; Z= 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content: \u003cb\u003e1000000\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On Entry → Visuals → Set Color By Case:",
                                                                                                                       "Value: \u003cb\u003eitem.QUALIDADE\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case Value + Color”:",
                                                                                                                       "“APROVADA” – [down_arrow.bmp] Color.blue",
                                                                                                                       "“REPROVADA” - [down_arrow.bmp] Color.red"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-03-etapa-08",
                                                              "number":  "08",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Checando performance do modelo simulado.",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO3_RESULTADOS_1.png",
                                                                                                     "w":  1916,
                                                                                                     "h":  911
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida",
                                                                                                  "1.021 unidades",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 63,91% ; IMPRESSORA_2: 63,85% ; TESTE: 51,41% "
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "1.021",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  63.91
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  63.85
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "TESTE",
                                                                                                     "pct":  51.41
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida\n1.021 unidades\nPROCESSING\nIMPRESSORA_1: 63,91% ; IMPRESSORA_2: 63,85% ; TESTE: 51,41% "
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-07_Adicionando_e_configurando_objetos_(Esteira_horizontal)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  43,
                                                                              "y1":  -20,
                                                                              "x2":  12,
                                                                              "y2":  -20,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "DP_0",
                                                                              "type":  "Decision Point",
                                                                              "x":  42.5,
                                                                              "y":  0.2,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "DP_1",
                                                                              "type":  "Decision Point",
                                                                              "x":  45,
                                                                              "y":  -1.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_1",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_1",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  6,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REPROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_reprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  45,
                                                                              "y1":  -0.5,
                                                                              "x2":  45,
                                                                              "y2":  -16.5,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_2",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_2",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  -1,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "TESTE",
                                                                              "type":  "Processor",
                                                                              "x":  40,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_aprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  42,
                                                                              "y1":  0,
                                                                              "x2":  48,
                                                                              "y2":  0,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS",
                                                                              "type":  "Queue",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  50,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  true
                                                                          }
                                                                      ]
                                                      }
                                       },
                                       {
                                           "id":  "modelo-04",
                                           "number":  4,
                                           "label":  "2.2) Modelo 04",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-04-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 – Retrabalhar placas impressas reprovadas",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Conectando e configurando objetos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA1_1.png",
                                                                                                     "w":  1723,
                                                                                                     "h":  909
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA1_2.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  908
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE NOVO MODELO, DO “QUEUE: PLACAS_IMPRESSAS_REPROVADAS”,",
                                                                                                  "AS PLACAS SERÃO LEVADAS PELOS MOVIMENTADORES PARA SEREM",
                                                                                                  "RETRABALHADAS NAS IMPRESSORAS NAS QUAIS FORAM IMPRESSAS:"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS_REPROVADAS”",
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”",
                                                                                                 "Sink – “SAIDA_CLIENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "1°: Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "Queue “PLACAS_IMPRESSAS_REPROVADAS” → Processor “IMPRESSORA_1”",
                                                                                               "Queue “PLACAS_IMPRESSAS_REPROVADAS” → Processor “IMPRESSORA_2”",
                                                                                               "",
                                                                                               "2°: Para abrir as propriedades do objeto, clique sobre ele com o botão esquerdo do mouse ou clique duas vezes com o botão esquerdo do mouse."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "Send To Port:",
                                                                                                                       "[down_arrow.bmp] Port By Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.MODELO\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case + Port”:",
                                                                                                                       "Case: \u003cb\u003e1\u003c/b\u003e  Port: \u003cb\u003e1\u003c/b\u003e",
                                                                                                                       "Case: \u003cb\u003e2  \u003c/b\u003ePort: \u003cb\u003e2\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "É possível visualizar se está as conexões estão corretas ao abrir as propriedades e ver se Outputs e Inputs estão compatíveis."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA1_3.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  914
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA1_4.png",
                                                                                                     "w":  1727,
                                                                                                     "h":  910
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "SENDO QUE:",
                                                                                                  "O MOVIMENTADOR_1 LEVARÁ AS PLACAS MODELO 1 PARA O “ PROCESSOR: IMPRESSORA_1 ”",
                                                                                                  "E O MOVIMENTADOR_2 LEVARÁ AS PLACAS MODELO 2 PARA O “ PROCESSOR: IMPRESSORA_2 ”"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS_REPROVADAS”",
                                                                                                 "Operator – “MOVIMENTADOR_1”",
                                                                                                 "Operator - \"MOVIMENTADOR_2”",
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "Operator “MOVIMENTADOR_1” → Queue “PLACAS_IMPRESSAS_REPROVADAS”",
                                                                                               "Operator “MOVIMENTADOR_2” → Queue “PLACAS_IMPRESSAS_REPROVADAS”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Transport:",
                                                                                                                       "[down_arrow.bmp] Center Port By Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.MODELO\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case + Port”:",
                                                                                                                       "Case: \u003cb\u003e1\u003c/b\u003e  Port: \u003cb\u003e1\u003c/b\u003e",
                                                                                                                       "Case: \u003cb\u003e2  \u003c/b\u003ePort: \u003cb\u003e2\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "É possível visualizar se está as conexões estão corretas ao abrir as propriedades e ver se Central Ports está compatível.",
                                                                                                          "",
                                                                                                          "A prioridade sempre é a Porta 1 em qualquer situação, portanto, como os retrabalhos são prioridades para as impressoras, deve-se mudar a posição do input das impressoras de forma a alterar a prioridade de input delas.",
                                                                                                          "",
                                                                                                          "Observe o passo a seguir “Alterando prioridade de input”."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Alterando prioridade de input",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA1_5.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  910
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "MAS ATENÇÃO:",
                                                                                                  "AS PLACAS PARA RETRABALHO TERÃO PRIORIDADE NAS IMPRESSORAS,"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [
                                                                                                  "Barra da Direita → Properties (Propriedades) → Ports (Portas) → [down_arrow.bmp]Input Ports (Portas de entrada)."
                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Dentro de Input Ports, selecione uma das duas portas disponíveis na impressora para move-las.",
                                                                                               "Conforme orientação a seguir:",
                                                                                               "Selecione “2: PLACAS_IMPRESSAS_REPROVADAS” e clique no botão [uparrow_blue.png] para colocá-la na posição 1 e automaticamente “PLACAS_VIRGENS” descer para a posição 2.",
                                                                                               "",
                                                                                               "Outra opção é realizar o oposto, selecionar “1: PLACAS_VIRGENS” e clicar no botão [downarrow_blue.png] para realizar o movimento de colocá-la na posição 2 e automaticamente subir “PLACAS_IMPRESSAS_REPROVADAS” para a posição 1."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PORTS",
                                                                                                         "title":  "Ports",
                                                                                                         "lines":  [
                                                                                                                       "Antes:",
                                                                                                                       "1: PLACAS_VIRGENS",
                                                                                                                       "2: PLACAS_IMPRESSAS_REPROVADAS",
                                                                                                                       "",
                                                                                                                       "Depois:",
                                                                                                                       "1:PLACAS_IMPRESSAS_REPROVADAS",
                                                                                                                       "2:PLACAS_VIRGENS"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Repita para o processor da “IMPRESSORA_2”, ficando igual imagem."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-04-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Tempo de processo diferente para retrabalho",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Configurando rótulo do produto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA2_1.png",
                                                                                                     "w":  1728,
                                                                                                     "h":  908
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "UMA SUGESTÃO:",
                                                                                                  "QUANDO AS PLACAS ENTRAREM NO “ QUEUE: PLACAS_VIRGENS ”,",
                                                                                                  "ATRIBUA O RÓTULO DE ORIGINAL À LABEL QUALIDADE,"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_VIRGENS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Entry → [PLUS] Data → Set Label:",
                                                                                                                       "Label: \u003cb\u003e“QUALIDADE”\u003c/b\u003e",
                                                                                                                       "Value: \u003cb\u003e“ORIGINAL”\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA2_2.png",
                                                                                                     "w":  1724,
                                                                                                     "h":  911
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "O TEMPO DE CICLO PARA RETRABALHO SERÁ DE 10 [ s / u ] /",
                                                                                                  "E QUANDO ESSAS PLACAS ENTRAREM NOS “ PROCESSOR: IMPRESSORAS_1 ; 2 ”,",
                                                                                                  "DEFINA TEMPOS DE CICLO DE 20 [ s / u ] PARA AS ORIGINAIS E DE 10 [ s / u ] PARA AS REPROVADAS"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor – “IMPRESSORA_1”",
                                                                                                 "Processor – “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Process Time → [down_arrow.bmp] Values By Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.QUALIDADE\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case + Time”:",
                                                                                                                       "Case: \u003cb\u003e“ORIGINAL”\u003c/b\u003e  Time: \u003cb\u003e20\u003c/b\u003e",
                                                                                                                       "Case: \u003cb\u003e“REPROVADA”\u003c/b\u003e  Time: \u003cb\u003e10\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Repita no processor “IMPRESSORA_2” igualmente para a “IMPRESSORA_1”.",
                                                                                                          "",
                                                                                                          "É possível fazer uma forma de verificar se a lógica está funcionando, basta procurar na barra de pesquisa do site como foi Feito o “TC_TESTE”, mas agora você reproduz um Text para a “IMPRESSORA_1” e outro para a “IMPRESSORA_2”."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA2_3.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  936
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E,",
                                                                                                  "APÓS RETRABALHADAS, AS PLACAS RETORNARÃO ÀS COLORAÇÕES ORIGINAIS"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Processor - “IMPRESSORA_1”",
                                                                                                 "Processor - “IMPRESSORA_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Segure a Tecla CTRL e clique nas duas impressoras, até que elas fiquem com o paralelepípedo Vermelho ao redor. Após isso, configure de forma idêntica as duas.",
                                                                                               "Ao finalizar, segure a Tecla Shift e clique em algum local vazio no Mapa 3D para remover a seleção das duas impressoras."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On Exit → [PLUS] Visual → Set Color By Case:",
                                                                                                                       "Value: \u003cb\u003eitem.MODELO\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case Value + Color”:",
                                                                                                                       "1\u003cb\u003e:  [down_arrow.bmp] Color.green\u003c/b\u003e",
                                                                                                                       "2\u003cb\u003e:  [down_arrow.bmp] Color.yellow\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Com as duas impressoras selecionadas, qualquer comando que fizer, altera nas duas igualmente."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-04-etapa-03",
                                                              "number":  "03",
                                                              "type":  "normal",
                                                              "title":  "Etapa 03 – Controle de quantidade de reprovações.",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando rótulo ao produto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA3_1.png",
                                                                                                     "w":  1727,
                                                                                                     "h":  910
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA3_2.png",
                                                                                                     "w":  1727,
                                                                                                     "h":  911
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "ANTES DE FINALIZAR:",
                                                                                                  "VAMOS CRIAR NA ENTRADA DO “ QUEUE: PLACAS_VIRGENS ”,",
                                                                                                  "UMA LABEL CHAMADA REPROVACOES PARA CONTAR QUANTAS VEZES UMA PLACA FOI REPROVADA,",
                                                                                                  "PARA QUE CADA PLACA RECEBA O VALOR DE 0 REPROVAÇÕES"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_VIRGENS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "On Entry [properties.png] → [PLUS] Data → Set Label:",
                                                                                                                       "Label: \u003cb\u003e“REPROVACOES”\u003c/b\u003e",
                                                                                                                       "Value: \u003cb\u003e0\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Incrementando valor a um rótulo",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA3_3.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  934
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E QUANDO PLACAS REPROVADAS ENTRAREM NA ESTEIRA VERTICAL APÓS O “PROCESSOR: TESTE”,",
                                                                                                  "ESSA LABEL DEVERÁ SER ACRESCIDA EM UMA UNIDADE"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor – “StraightConveyor2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On Entry → Data → Increment Value:",
                                                                                                                       "Increment: \u003cb\u003eitem.labels[“REPROVACOES”]\u003c/b\u003e",
                                                                                                                       "by: \u003cb\u003e1\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-04-etapa-04",
                                                              "number":  "04",
                                                              "type":  "normal",
                                                              "title":  "Etapa 04 – Peças com mais de uma reprovação se tornam refuge",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA4_1.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  910
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "AS PLACAS REPROVADAS MAIS DE UMA VEZ DEVERÃO SER",
                                                                                                  "DESVIADAS PARA UMA ESTEIRA RETA VERTICAL POSICIONADA EM:",
                                                                                                  "Xa = 20.00 e Xb = 20.00 ; Ya = -19.50 e Yb = -12.00 ; Za = 1.00 e Zb = 1.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "CONVEYOR",
                                                                                                         "title":  "Conveyor",
                                                                                                         "lines":  [
                                                                                                                       "Start: \u003cb\u003eX= 20.00 ; Y= -19.50 ; Z= 1.00\u003c/b\u003e",
                                                                                                                       "End: \u003cb\u003eX= 20.00 ; Y= -12.00 ; Z= 1.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA4_2.png",
                                                                                                     "w":  1723,
                                                                                                     "h":  910
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "QUE LEVARÁ AS PLACAS PARA O “ QUEUE: PLACAS_IMPRESSAS_REFUGADAS ”",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 20.00 ; Y = -10.00 ; Z = 0.00",
                                                                                                  "( MAS AO ENTRAREM NESSE ESTOQUE, AS PLACAS DEVERÃO FICAR NA COR CINZA )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS_REFUGADAS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_IMPRESSAS_REFUGADAS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X= 20.00 ; Y= -10.00 ; Z= 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content: \u003cb\u003e1000000\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On Entry → [PLUS] Visual → Set Color By Case:",
                                                                                                                       "Value: \u003cb\u003eitem.REPROVACOES\u003c/b\u003e",
                                                                                                                       "2x [PLUS] Para adicionar “Case Value + Color”:",
                                                                                                                       "1\u003cb\u003e: [down_arrow.bmp] Color.blue\u003c/b\u003e",
                                                                                                                       "2\u003cb\u003e: [down_arrow.bmp] Color.gray\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA4_3.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  911
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA4_4.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  910
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "SENDO QUE SOMENTE AS PLACAS REPROVADAS UMA ÚNICA VEZ PODERÃO SER RETRABALHADAS.",
                                                                                                  "PARA DIRECIONAR CADA PLACA, UTILIZE OS SEGUINTES DECISION POINTS:",
                                                                                                  "DP_2, POSICIONADO EM X = 22.00 ; Y = -20.00 ; Z = 0.00",
                                                                                                  "DP_3, POSICIONADO EM X = 20.00 ; Y = -17.50 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Decision Point – “DP_2”",
                                                                                                 "Decision Point – “DP_3”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "Decision Point “DP_2” → Decision Point “DP_3”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "DP_2",
                                                                                                                       "DP_3"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "DECISION_POINT",
                                                                                                         "title":  "Decision Point",
                                                                                                         "lines":  [
                                                                                                                       "DP_2:",
                                                                                                                       "[_resize.png] \u003cb\u003eX= 22.00 ; Y= -20.00 ; Z= 0.00\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "DP_3:",
                                                                                                                       "[_resize.png] \u003cb\u003eX= 20.00 ; Y= -17.50 ; Z= 0.00\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Para verificar se as conexões foram feitas corretamente, selecione o Decision Point que deseja verificar, e veja se seu Output Port/Input Port está corretamente conectado.",
                                                                                                          "Conforme segue nas imagens 1 e 2 deste passo, destacado dentro de retângulos amarelos."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando lógica do objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_ETAPA4_5.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  918
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Decision Point – “DP_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] → On arrival → Send Item By Case:",
                                                                                                                       "Case Function: \u003cb\u003eitem.REPROVACOES\u003c/b\u003e",
                                                                                                                       "",
                                                                                                                       "[PLUS] Para adicionar um novo “Case + Destination”:",
                                                                                                                       "Case: \u003cb\u003e“2”\u003c/b\u003e",
                                                                                                                       "Destination: \u003cb\u003ecurrent.outObjects[1]\u003c/b\u003e"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-04-etapa-05",
                                                              "number":  "05",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Checando performance do modelo simulado.",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA2_MODELO4_RESULTADOS_1.png",
                                                                                                     "w":  1805,
                                                                                                     "h":  1015
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida",
                                                                                                  "1.021 unidades",
                                                                                                  "Elaborar e interpretar os gráficos de estados",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "1.021",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  58.87
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  60.35
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "TESTE",
                                                                                                     "pct":  51.36
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida\n1.021 unidades\nElaborar e interpretar os gráficos de estados\nPROCESSING\nIMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36%"
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-07_Adicionando_e_configurando_objetos_(Esteira_horizontal)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  43,
                                                                              "y1":  -20,
                                                                              "x2":  12,
                                                                              "y2":  -20,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_0",
                                                                              "type":  "Decision Point",
                                                                              "x":  42.5,
                                                                              "y":  0.2,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_1",
                                                                              "type":  "Decision Point",
                                                                              "x":  45,
                                                                              "y":  -1.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_1",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_1",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  6,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REPROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_reprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  45,
                                                                              "y1":  -0.5,
                                                                              "x2":  45,
                                                                              "y2":  -16.5,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_2",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REFUGADAS",
                                                                              "type":  "Queue",
                                                                              "x":  20,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_2",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  -1,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_2",
                                                                              "type":  "Decision Point",
                                                                              "x":  22,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "TESTE",
                                                                              "type":  "Processor",
                                                                              "x":  40,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-04-etapa-04_Adicionando_e_configurando_objeto",
                                                                              "type":  "Conveyor",
                                                                              "x1":  20,
                                                                              "y1":  -19.5,
                                                                              "x2":  20,
                                                                              "y2":  -12,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "DP_3",
                                                                              "type":  "Decision Point",
                                                                              "x":  20,
                                                                              "y":  -17.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_aprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  42,
                                                                              "y1":  0,
                                                                              "x2":  48,
                                                                              "y2":  0,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS",
                                                                              "type":  "Queue",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  50,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  false
                                                                          }
                                                                      ]
                                                      }
                                       }
                                   ]
                    },
                    {
                        "id":  "aula-03",
                        "number":  3,
                        "title":  "",
                        "models":  [
                                       {
                                           "id":  "modelo-05",
                                           "number":  5,
                                           "label":  "3.1) Modelo 05",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-05-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 – Estoque de placas aprovadas",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Desconectando objetos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA1_1.png",
                                                                                                     "w":  1918,
                                                                                                     "h":  983
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor – “StraightConveyor1”",
                                                                                                 "Sink – “SAIDA_CLIENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Desconectar os objetos utilizando o comando de Disconnect Object. Como atalho, pressione a tecla “Q” do teclado."
                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Após realizar a desconexão dos objetos, coloque o Sink – “SAIDA_CLIENTES” em X = 80.00, mantendo Y e Z em 0.00."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA1_2.png",
                                                                                                     "w":  1722,
                                                                                                     "h":  894
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE MODELO, AO SAÍREM DO “ PROCESSOR: TESTE ”,",
                                                                                                  "AS PLACAS APROVADAS IRÃO PARA O “ QUEUE: PLACAS_IMPRESSAS_APROVADAS ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 50.00 ; Y = 0.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “PLACAS_IMPRESSAS_APROVADAS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "PLACAS_IMPRESSAS_APROVADAS"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 50.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content – 1000000"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-05-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Combinando produtos",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_1.png",
                                                                                                     "w":  1917,
                                                                                                     "h":  911
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "DESSE ESTOQUE, AS PLACAS IRÃO PARA O “ COMBINER: MONTAGEM ”,",
                                                                                                  "( habilitar animação nesse processo )",
                                                                                                  "POSICIONADO EM X = 60.00 ; Y = 0.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Combiner – “MONTAGEM”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "“MONTAGEM”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 60.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Animate Items",
                                                                                                                       "",
                                                                                                                       "Process Time: 10 [s]"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_2.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  911
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E RECEBERÃO OS COMPONENTES DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 60.00 ; Y = -10.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “COMPONENTES_CILINDROS_CHEIOS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "“COMPONENTES_CILINDROS_CHEIOS”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 60.00 ; Y = -10.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content = 1000000"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Conectando objetos no Combiner",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_3.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  913
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Conveyor – “StraightConveyor1”",
                                                                                                 "Combiner – “MONTAGEM”",
                                                                                                 "Queue – “COMPONENTES_CILINDROS_CHEIOS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "1°: Conveyor – “StraightConveyor1” → Combiner – “MONTAGEM”",
                                                                                               "2°: Queue – “COMPONENTES_CILINDROS_CHEIOS” → Combiner – “MONTAGEM”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PORTS",
                                                                                                         "title":  "Ports",
                                                                                                         "lines":  [
                                                                                                                       "[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do combiner: [FIM_LETRA_VERMELHA]",
                                                                                                                       "",
                                                                                                                       "[down_arrow.bmp] - Input Ports:",
                                                                                                                       "1: PLACAS_IMPRESSAS_APROVADAS",
                                                                                                                       "2: COMPONENTES_CILINDROS_CHEIOS"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "A ordem das conexões deve ser respeitada para que as portas de entrada do Combiner mantenham a sequência indicada na imagem.",
                                                                                                          "",
                                                                                                          "Isso ocorre porque é a Placa impressa aprovada que chama a operação de montagem para ser realizada, enquanto os componentes funcionam como matéria-prima utilizada nessa operação."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_4.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  913
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_5.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  908
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA2_6.png",
                                                                                                     "w":  1725,
                                                                                                     "h":  908
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "SERÃO CRIADOS 2880 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR CINZA,",
                                                                                                  "QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO,",
                                                                                                  "( utilize as funções send message + on message ) "
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “COMPONENTES_CILINDROS_CHEIOS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Reset → [PLUS] Send Message:",
                                                                                                                       "To: Current",
                                                                                                                       "Delay Time: 60",
                                                                                                                       "Parameter 1: 2880",
                                                                                                                       "Parameter 2: 2"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "On Message → Create Flowitems",
                                                                                                                       "Não é necessário alterar nada nesta seção."
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Entry → [PLUS] Visual → Set Location, Rotation or Size:",
                                                                                                                       "Set: [down_arrow.bmp] → Size",
                                                                                                                       "X Size: 0.25",
                                                                                                                       "Y Size: 0.25",
                                                                                                                       "Z Size: 0.25"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Entry [properties.png] → [PLUS] Visual → Set Object color:",
                                                                                                                       "Color: Color.gray"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-05-etapa-03",
                                                              "number":  "03",
                                                              "type":  "normal",
                                                              "title":  "Etapa 3 – Processo de Acabamento",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_1.png",
                                                                                                     "w":  1916,
                                                                                                     "h":  872
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "LOGO NA SEQUÊNCIA, AS PLACAS IRÃO PARA O “ SEPARATOR: ACABAMENTO ”,",
                                                                                                  "POSICIONADO EM X = 70.00 ; Y = 0.00 ; Z = 0.00",
                                                                                                  "O TEMPO DE CICLO DO ACABAMENTO SERÁ DE 10 [ s / u ]"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Separator – “ACABAMENTO”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "“ACABAMENTO”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 70.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "Process Time: 10 [s / u]"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Conectando objetos no Separator",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_2.png",
                                                                                                     "w":  1674,
                                                                                                     "h":  873
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "ESSE PROCESSO, ALÉM DE FAZER O ACABAMENTO, REALIZARÁ A SEPARAÇÃO ENTRE",
                                                                                                  "AS PLACAS IMPRESSAS MONTADAS E OS CILINDROS DE COMPONENTES VAZIOS,",
                                                                                                  "SENDO AS PLACAS ENVIADAS PARA O “ SINK: SAIDA_CLIENTES ”,",
                                                                                                  "POSICIONADO EM X = 80.00 ; Y = 0.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Separator – “ACABAMENTO”",
                                                                                                 "Sink – “SAIDA_CLIENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "SAIDA_CLIENTES: [Mid6_small.png] X = 80.00 ; Y = 0.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_3.png",
                                                                                                     "w":  1678,
                                                                                                     "h":  876
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "E OS CILINDROS PARA O “ QUEUE: COMPONENTES_CILINDROS_VAZIOS ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 70.00 ; Y = -10.00 ; Z = 0.00"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Separator – “ACABAMENTO”",
                                                                                                 "Queue – “COMPONENTES_CILINDROS_VAZIOS”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "1°: Separator – “ACABAMENTO” → Queue – “COMPONENTES_CILINDROS_VAZIOS”",
                                                                                               "2°: Queue – “COMPONENTES_CILINDROS_VAZIOS” → Sink – “SAIDA_CLIENTES”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "“COMPONENTES_CILINDROS_VAZIOS”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 70.00 ; Y = -10.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "QUEUE",
                                                                                                         "title":  "Queue",
                                                                                                         "lines":  [
                                                                                                                       "Max Content = 1000000"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "No Combiner, deve-se manter a opção Combine Mode = Pack. Da mesma forma, no Separator, deve estar selecionada a opção Separate Mode = Unpack.",
                                                                                                          "",
                                                                                                          "Essa configuração faz com que o cilindro de componentes e a placa impressa sejam mantidos como duas entidades distintas durante o processo. Dessa forma, a operação de montagem utiliza os componentes disponíveis no cilindro como matéria-prima.",
                                                                                                          "",
                                                                                                          "Ao final da montagem, o cilindro de componentes vazio é separado da placa impressa, e esta segue para o Sink – “SAIDA_CLIENTES”."
                                                                                                      ],
                                                                                                      [
                                                                                                          "A ordem das conexões no Separator devem ser respeitadas assim como foi realizado no Combiner.",
                                                                                                          "",
                                                                                                          "Para o Combiner:",
                                                                                                          "1°: Separator – “ACABAMENTO” → Sink – “SAIDA_CLIENTES” (Carrega a entidade das Placas Impressas)",
                                                                                                          "2°: Separator – “ACABAMENTO” → Queue – “COMPONENTES_CILINDROS_VAZIOS” (Carrega a entidade dos Cilíndros de Componentes Vazios)"
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Adicionando Operador",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_4.png",
                                                                                                     "w":  1912,
                                                                                                     "h":  873
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "TAMBÉM VAMOS ACRESCENTAR O OPERADOR_MONTAGEM_ACABAMENTO,",
                                                                                                  "POSICIONADO EM X = 60,00 ; Y = 2.50 ; Z = 0,00",
                                                                                                  "( com 270º de rotação no eixo Z )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “OPERADOR_MONTAGEM_ACABAMENTO”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "NOME",
                                                                                                         "title":  "Nome",
                                                                                                         "lines":  [
                                                                                                                       "“OPERADOR_MONTAGEM_ACABAMENTO”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[Mid6_small.png] X = 60.00 ; Y = 2.50 ; Z = 0.00",
                                                                                                                       "[rotate_arrow.png] Z = 270.00"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Conectando Operador nos objetos",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_5.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  913
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_6.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  916
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_7.png",
                                                                                                     "w":  1730,
                                                                                                     "h":  917
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_8.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  916
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA3_9.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  914
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "QUE FICARÁ RESPONSÁVEL POR QUATRO ATIVIDADES:",
                                                                                                  "LEVAR AS PLACAS IMPRESSAS APROVADAS PARA O “ COMBINER: MONTAGEM ”;",
                                                                                                  "REALIZAR A MONTAGEM DE CADA UMA DAS PLACAS;",
                                                                                                  "LEVAR AS PLACAS DO “ COMBINER: MONTAGEM ” PARA O “ SEPARATOR: ACABAMENTO ”;",
                                                                                                  "E REALIZAR O ACABAMENTO DE CADA UMA DAS PLACAS",
                                                                                                  "( aqui, utilize o conceito de preempção, para garantir a ida e acabamento de cada placa logo após ela ser montada )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Operator – “OPERADOR_MONTAGEM_ACABAMENTO”",
                                                                                                 "Queue – “PLACAS_IMPRESSAS_APROVADAS”",
                                                                                                 "Combiner – “MONTAGEM”",
                                                                                                 "Separator – “ACABAMENTO”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar objetos na porta central (Atalho: Letra “S” do teclado - clicar no Operator e no Processor.)",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "1°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Queue: PLACAS_IMPRESSAS_APROVADAS",
                                                                                               "2°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Combiner – “MONTAGEM”",
                                                                                               "3°: Operator – “OPERADOR_MONTAGEM_ACABAMENTO” → Separator – “ACABAMENTO”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "PORTS",
                                                                                                         "title":  "Ports",
                                                                                                         "lines":  [
                                                                                                                       "[LETRA_VERMELHA] - Após a conexão, deve-se estar exibido da seguinte forma as portas de entrada do combiner: [FIM_LETRA_VERMELHA]",
                                                                                                                       "",
                                                                                                                       "[down_arrow.bmp] - Central Ports:",
                                                                                                                       "1: OPERADOR_MONTAGEM_ACABAMENTO",
                                                                                                                       "",
                                                                                                                       "Para Queue – “PLACAS_IMPRESSAS_APROVADAS” + Combiner – “MONTAGEM”:"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "OUTPUT",
                                                                                                         "title":  "Output",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Transport:",
                                                                                                                       "current.centerObjects[1]",
                                                                                                                       "",
                                                                                                                       "Para Combiner – “MONTAGEM”"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Operator",
                                                                                                                       "Operator:",
                                                                                                                       "current.centerObjects[1]",
                                                                                                                       "",
                                                                                                                       "Para Separator – “ACABAMENTO”:"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "PROCESSOR",
                                                                                                         "title":  "Processor",
                                                                                                         "lines":  [
                                                                                                                       "[CHECK] Use Operator",
                                                                                                                       "Operator:",
                                                                                                                       "current.centerObjects[1]",
                                                                                                                       "Preemption: Preempt Only"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Obrigatoriamente, para correta sequência de execução do operador, deve-se utilizar a Preempção.",
                                                                                                          "Conforme a Imagem 5 deste passo e presente na configuração do Separator - \"ACABAMENTO\".."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-05-etapa-04",
                                                              "number":  "04",
                                                              "type":  "normal",
                                                              "title":  "Etapa 4 - Correção do deslocamento dos operadores",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Adicionando e configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA4_1.png",
                                                                                                     "w":  1838,
                                                                                                     "h":  915
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA4_2.png",
                                                                                                     "w":  1486,
                                                                                                     "h":  677
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_ETAPA4_3.png",
                                                                                                     "w":  1140,
                                                                                                     "h":  714
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "IMPORTANTE:",
                                                                                                  "OS OPERADORES NÃO PODERÃO PASSAR ATRAVÉS DAS MÁQUINAS, DAS ESTEIRAS, ETC.,",
                                                                                                  "OU SEJA, OS OPERADORES DEVERÃO CONTORNAR OS OBJETOS QUE ESTARÃO EM SEU CAMINHO",
                                                                                                  "( utilize o recurso AStar",
                                                                                                  "e não esqueça de desabilitar a visualização de Grid Bounds e Members )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "A* Navigation - Grid"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Arraste o Grid para a posição desejada, e configure sua dimensão para cobrir a área pela qual o operador poderá percorrer.",
                                                                                               "",
                                                                                               "Depois abra a aba [view_tools.ico]Toolbox,",
                                                                                               "em seguida, dê um duplo clique em [astarnavigator.png] para abrir o AStar Navigator."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "A*NAVIGATION",
                                                                                                         "title":  "A* Navigator Properties",
                                                                                                         "lines":  [
                                                                                                                       "*SETUP*:",
                                                                                                                       "Members:",
                                                                                                                       "Selecione o(s) operador(es) que deseja que não atravessem objetos através do [eyedropper.png]",
                                                                                                                       "Depois selecione o(s) objeto(s) que deseja que o operador não atravesse, também através do [eyedropper.png]",
                                                                                                                       "",
                                                                                                                       "OPERADOR_MONTAGEM_ACABAMENTO",
                                                                                                                       "MONTAGEM",
                                                                                                                       "ACABAMENTO",
                                                                                                                       "PLACAS_IMPRESSAS_APROVADAS",
                                                                                                                       "",
                                                                                                                       "*VISUAL*",
                                                                                                                       "[UNCHECK] Show Grid Bounds",
                                                                                                                       "[UNCHECK] Show Members"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "O Grid pode cobrir uma área grande, mas o operador não irá percorrer a área inteira."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-05-etapa-05",
                                                              "number":  "05",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Checando performance do modelo simulado.",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO5_RESULTADOS_1.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  918
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida",
                                                                                                  "642 unidades",
                                                                                                  "",
                                                                                                  "Elaborar e interpretar os gráficos de estados",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;",
                                                                                                  "MONTAGEM: 22,33% ; ACABAMENTO: 22,30%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Adicionar no Dashboard, no gráfico de estados, os objetos (Combiner e Separator) que foram criados e que estão em execução nesta aula (MONTAGEM + ACABAMENTO)."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "642",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  58.87
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  60.35
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "TESTE",
                                                                                                     "pct":  51.36
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "MONTAGEM",
                                                                                                     "pct":  22.33
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "ACABAMENTO",
                                                                                                     "pct":  22.3
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida\n642 unidades\n\nElaborar e interpretar os gráficos de estados\nPROCESSING\nIMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;\nMONTAGEM: 22,33% ; ACABAMENTO: 22,30%\nAdicionar no Dashboard, no gráfico de estados, os objetos (Combiner e Separator) que foram criados e que estão em execução nesta aula (MONTAGEM + ACABAMENTO)."
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS",
                                                                              "type":  "Queue",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "COMPONENTES_CILINDROS_VAZIOS",
                                                                              "type":  "Queue",
                                                                              "x":  70,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_2",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_0",
                                                                              "type":  "Decision Point",
                                                                              "x":  42.5,
                                                                              "y":  0.2,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MONTAGEM",
                                                                              "type":  "Combiner",
                                                                              "x":  60,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-04-etapa-04_Adicionando_e_configurando_objeto",
                                                                              "type":  "Conveyor",
                                                                              "x1":  20,
                                                                              "y1":  -19.5,
                                                                              "x2":  20,
                                                                              "y2":  -12,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_APROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  50,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-01",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "TESTE",
                                                                              "type":  "Processor",
                                                                              "x":  40,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_1",
                                                                              "type":  "Decision Point",
                                                                              "x":  45,
                                                                              "y":  -1.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  80,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "ACABAMENTO",
                                                                              "type":  "Separator",
                                                                              "x":  70,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_aprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  42,
                                                                              "y1":  0,
                                                                              "x2":  48,
                                                                              "y2":  0,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_1",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-07_Adicionando_e_configurando_objetos_(Esteira_horizontal)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  43,
                                                                              "y1":  -20,
                                                                              "x2":  12,
                                                                              "y2":  -20,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_MONTAGEM_ACABAMENTO",
                                                                              "type":  "Operator",
                                                                              "x":  60,
                                                                              "y":  2.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REPROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_3",
                                                                              "type":  "Decision Point",
                                                                              "x":  20,
                                                                              "y":  -17.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_2",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  -1,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_2",
                                                                              "type":  "Decision Point",
                                                                              "x":  22,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_reprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  45,
                                                                              "y1":  -0.5,
                                                                              "x2":  45,
                                                                              "y2":  -16.5,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "COMPONENTES_CILINDROS_CHEIOS",
                                                                              "type":  "Queue",
                                                                              "x":  60,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-02",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_1",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  6,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REFUGADAS",
                                                                              "type":  "Queue",
                                                                              "x":  20,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          }
                                                                      ]
                                                      }
                                       },
                                       {
                                           "id":  "modelo-06",
                                           "number":  6,
                                           "label":  "3.2) Modelo 06",
                                           "stages":  [
                                                          {
                                                              "id":  "modelo-06-etapa-01",
                                                              "number":  "01",
                                                              "type":  "normal",
                                                              "title":  "Etapa 01 – Componentes específicos para cada modelo",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Reconfigurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA1_1.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  935
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA1_2.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  913
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "PLACAS DO MODELO 1 RECEBERÃO COMPONENTES ESPECÍFICOS PARA O MODELO 1,",
                                                                                                  "VINDOS DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS_MOD_1 ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 57.00 ; Y = -10.00 ; Z = 0.00",
                                                                                                  "SERÃO CRIADOS 1.440 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR VERDE,",
                                                                                                  "QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO",
                                                                                                  "( mais uma vez, você deverá utilizar as funções send message + on message )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Antes: Queue – “COMPONENTES_CILINDROS_CHEIOS”",
                                                                                                 "Depois: Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_1”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "On Reset [properties.png] → Send Message:",
                                                                                                                       "parameter 1: 1.440"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "On Entry [properties.png] → Set Object color:",
                                                                                                                       "Color: Color.green"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Copiando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA1_3.png",
                                                                                                     "w":  1731,
                                                                                                     "h":  914
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA1_4.png",
                                                                                                     "w":  1729,
                                                                                                     "h":  918
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "PLACAS DO MODELO 2 RECEBERÃO COMPONENTES ESPECÍFICOS PARA O MODELO 2,",
                                                                                                  "VINDOS DO “ QUEUE: COMPONENTES_CILINDROS_CHEIOS_MOD_2 ”,",
                                                                                                  "( com capacidade infinita )",
                                                                                                  "POSICIONADO EM X = 63.00 ; Y = -10.00 ; Z = 0.00",
                                                                                                  "SERÃO CRIADOS 1.440 CILINDROS DE DIMENSÕES 0.25 x 0.25 x 0.25 NA COR AMARELA,",
                                                                                                  "QUE ENTRARÃO NESSE ESTOQUE APÓS 60 SEGUNDO DE INÍCIO DO TURNO",
                                                                                                  "( mais uma vez, você deverá utilizar as funções send message + on message )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_2”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Conectar os objetos utilizando o comando de conexão. Como atalho, pressione a tecla “A” do teclado. ",
                                                                                               "Conforme orientado a seguir:",
                                                                                               "Queue – “COMPONENTES_CILINDROS_CHEIOS_MOD_2” → Combiner – “MONTAGEM”"
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "VISUALS",
                                                                                                         "title":  "Visuals",
                                                                                                         "lines":  [
                                                                                                                       "[ Mid6_small.png] X = 63.00 ; Y = -10.00 ; Z = 0.00"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "On Entry [properties.png] → Set Object color:",
                                                                                                                       "Color: Color.yellow"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Utilize CTRL+C para copiar a Queue - \"COMPONENTES_CILINDROS_CHEIOS_MOD_1\" e CTRL+V para colar uma cópia em outro local do Mapa 3D. A cópia será criada já com as configurações da Queue original.",
                                                                                                          "",
                                                                                                          "Deve-se então reposicionar e configurar a nova cópia com as suas singularidades.",
                                                                                                          "",
                                                                                                          "Após realizar a conexão, observa-se que no Combiner - \"MONTAGEM\" surge em Components List uma nova opção \"From Inpurt Port 3\"."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-06-etapa-02",
                                                              "number":  "02",
                                                              "type":  "normal",
                                                              "title":  "Etapa 02 – Regra de puxar utilizando Global Table",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Criando Global Table",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA2_1.png",
                                                                                                     "w":  1614,
                                                                                                     "h":  894
                                                                                                 },
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA2_2.png",
                                                                                                     "w":  1919,
                                                                                                     "h":  916
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "NESTE MODELO,",
                                                                                                  "AS PLACAS APROVADAS RECEBERÃO COMPONENTES",
                                                                                                  "DE “QUEUES: COMPONENTES_CILINDROS_CHEIOS” ESPECÍFICOS POR MODELO",
                                                                                                  "( para isso, crie a “ GLOBAL TABLE: REGRA_PUXADA_COMPONENTES )"
                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Combiner – “MONTAGEM”",
                                                                                                 "Global Table – “REGRA_PUXADA_COMPONENTES”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [
                                                                                               "Abra a aba [view_tools.ico]Toolbox, clique em [PLUS] e selecione Global Table."
                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "GLOBAL_TABLE",
                                                                                                         "title":  "Global Table",
                                                                                                         "lines":  [
                                                                                                                       "[view_table.ico] GlobalTable1"
                                                                                                                   ]
                                                                                                     },
                                                                                                     {
                                                                                                         "key":  "TABLE",
                                                                                                         "title":  "Table",
                                                                                                         "lines":  [
                                                                                                                       "REGRA_PUXADA_COMPONENTES",
                                                                                                                       "ROWS: 2     COLUMNS: 2"
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Nomes das linhas e colunas são mostrados na Imagem 2 deste passo. Assim como os valores que devem ser inseridos.",
                                                                                                          "",
                                                                                                          "Cuidado principal é com os valores nas posições corretas dentro da Global Table, pois eles determinam qual e quantos cilindros de cada tipo serão enviados para cada placa impressa na montagem."
                                                                                                      ]
                                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "title":  "Configurando objeto",
                                                                                  "prints":  [
                                                                                                 {
                                                                                                     "file":  "AULA3_MODELO6_ETAPA2_3.png",
                                                                                                     "w":  1726,
                                                                                                     "h":  939
                                                                                                 }
                                                                                             ],
                                                                                  "roteiro":  [

                                                                                              ],
                                                                                  "objeto":  [
                                                                                                 "Combiner – “MONTAGEM”"
                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [
                                                                                                     {
                                                                                                         "key":  "TRIGGERS",
                                                                                                         "title":  "Triggers",
                                                                                                         "lines":  [
                                                                                                                       "[PLUS] On Entry → [PLUS] Update Combiner Component List With Labels:",
                                                                                                                       "Table: [down_arrow.bmp] REGRA_PUXADA_COMPONENTES",
                                                                                                                       "Label: \"MODELO\""
                                                                                                                   ]
                                                                                                     }
                                                                                                 ],
                                                                                  "observacoes":  [

                                                                                                  ]
                                                                              }
                                                                          ]
                                                          },
                                                          {
                                                              "id":  "modelo-06-etapa-03",
                                                              "number":  "03",
                                                              "type":  "results",
                                                              "title":  "Resultados",
                                                              "columns":  [
                                                                              {
                                                                                  "title":  "Validando o modelo simulado.",
                                                                                  "prints":  [

                                                                                             ],
                                                                                  "roteiro":  [
                                                                                                  "Quantidade expedida",
                                                                                                  "642 unidades",
                                                                                                  "",
                                                                                                  "Elaborar e interpretar os gráficos de estados",
                                                                                                  "PROCESSING",
                                                                                                  "IMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;",
                                                                                                  "MONTAGEM: 22,33% ; ACABAMENTO: 22,30%"
                                                                                              ],
                                                                                  "objeto":  [

                                                                                             ],
                                                                                  "caminho":  [

                                                                                              ],
                                                                                  "acao":  [

                                                                                           ],
                                                                                  "properties":  [

                                                                                                 ],
                                                                                  "observacoes":  [
                                                                                                      [
                                                                                                          "Este modelo possui os mesmos resultados do modelo anterior, dado que só alterou o estoque de cilíndros de componentes,",
                                                                                                          "porém a dinâmica de montagem permaneceu a mesma."
                                                                                                      ]
                                                                                                  ]
                                                                              }
                                                                          ],
                                                              "results":  {
                                                                              "throughput":  "642",
                                                                              "processing":  [
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_1",
                                                                                                     "pct":  58.87
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "IMPRESSORA_2",
                                                                                                     "pct":  60.35
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "TESTE",
                                                                                                     "pct":  51.36
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "MONTAGEM",
                                                                                                     "pct":  22.33
                                                                                                 },
                                                                                                 {
                                                                                                     "name":  "ACABAMENTO",
                                                                                                     "pct":  22.3
                                                                                                 }
                                                                                             ],
                                                                              "raw":  "Quantidade expedida\n642 unidades\n\nElaborar e interpretar os gráficos de estados\nPROCESSING\nIMPRESSORA_1: 58,87% ; IMPRESSORA_2: 60,35% ; TESTE: 51,36% ;\nMONTAGEM: 22,33% ; ACABAMENTO: 22,30%\nEste modelo possui os mesmos resultados do modelo anterior, dado que só alterou o estoque de cilíndros de componentes,\nporém a dinâmica de montagem permaneceu a mesma."
                                                                          }
                                                          }
                                                      ],
                                           "layout":  {
                                                          "objects":  [
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS",
                                                                              "type":  "Queue",
                                                                              "x":  30,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_2",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "COMPONENTES_CILINDROS_VAZIOS",
                                                                              "type":  "Queue",
                                                                              "x":  70,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_2",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  -3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_0",
                                                                              "type":  "Decision Point",
                                                                              "x":  42.5,
                                                                              "y":  0.2,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MONTAGEM",
                                                                              "type":  "Combiner",
                                                                              "x":  60,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-04-etapa-04_Adicionando_e_configurando_objeto",
                                                                              "type":  "Conveyor",
                                                                              "x1":  20,
                                                                              "y1":  -19.5,
                                                                              "x2":  20,
                                                                              "y2":  -12,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_APROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  50,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "TESTE",
                                                                              "type":  "Processor",
                                                                              "x":  40,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_1",
                                                                              "type":  "Decision Point",
                                                                              "x":  45,
                                                                              "y":  -1.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-06",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "SAIDA_CLIENTES",
                                                                              "type":  "Sink",
                                                                              "x":  80,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CHEGADA_PLACAS_VIRGENS",
                                                                              "type":  "Source",
                                                                              "x":  0,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "ACABAMENTO",
                                                                              "type":  "Separator",
                                                                              "x":  70,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_aprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  42,
                                                                              "y1":  0,
                                                                              "x2":  48,
                                                                              "y2":  0,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_VIRGENS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  0,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "MOVIMENTADOR_1",
                                                                              "type":  "Operator",
                                                                              "x":  15,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-07_Adicionando_e_configurando_objetos_(Esteira_horizontal)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  43,
                                                                              "y1":  -20,
                                                                              "x2":  12,
                                                                              "y2":  -20,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_MONTAGEM_ACABAMENTO",
                                                                              "type":  "Operator",
                                                                              "x":  60,
                                                                              "y":  2.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-03",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REPROVADAS",
                                                                              "type":  "Queue",
                                                                              "x":  10,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-03-etapa-07",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_3",
                                                                              "type":  "Decision Point",
                                                                              "x":  20,
                                                                              "y":  -17.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "IMPRESSORA_1",
                                                                              "type":  "Processor",
                                                                              "x":  20,
                                                                              "y":  3.5,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-01-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_2",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  -1,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "DP_2",
                                                                              "type":  "Decision Point",
                                                                              "x":  22,
                                                                              "y":  -20,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "CONVEYOR_modelo-03-etapa-05_Adicionando_e_configurando_objeto_(Esteira_reprovados)",
                                                                              "type":  "Conveyor",
                                                                              "x1":  45,
                                                                              "y1":  -0.5,
                                                                              "x2":  45,
                                                                              "y2":  -16.5,
                                                                              "stageId":  "modelo-03-etapa-05",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "COMPONENTES_CILINDROS_CHEIOS",
                                                                              "type":  "Queue",
                                                                              "x":  60,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-05-etapa-02",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "COMPONENTES_CILINDROS_CHEIOS_MOD_2",
                                                                              "type":  "Queue",
                                                                              "x":  63,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-06-etapa-01",
                                                                              "isNew":  true
                                                                          },
                                                                          {
                                                                              "name":  "OPERADOR_IMPRESSORA_1",
                                                                              "type":  "Operator",
                                                                              "x":  20,
                                                                              "y":  6,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-02-etapa-01",
                                                                              "isNew":  false
                                                                          },
                                                                          {
                                                                              "name":  "PLACAS_IMPRESSAS_REFUGADAS",
                                                                              "type":  "Queue",
                                                                              "x":  20,
                                                                              "y":  -10,
                                                                              "rot":  0,
                                                                              "stageId":  "modelo-04-etapa-04",
                                                                              "isNew":  false
                                                                          }
                                                                      ]
                                                      }
                                       }
                                   ]
                    }
                ],
    "glossary":  [
                     {
                         "type":  "Combiner",
                         "count":  1,
                         "stages":  [
                                        "modelo-05-etapa-02"
                                    ]
                     },
                     {
                         "type":  "Conveyor",
                         "count":  3,
                         "stages":  [
                                        "modelo-03-etapa-07",
                                        "modelo-03-etapa-05",
                                        "modelo-04-etapa-04"
                                    ]
                     },
                     {
                         "type":  "Decision Point",
                         "count":  2,
                         "stages":  [
                                        "modelo-03-etapa-06",
                                        "modelo-04-etapa-04"
                                    ]
                     },
                     {
                         "type":  "Operator",
                         "count":  3,
                         "stages":  [
                                        "modelo-02-etapa-02",
                                        "modelo-02-etapa-01",
                                        "modelo-05-etapa-03"
                                    ]
                     },
                     {
                         "type":  "Processor",
                         "count":  2,
                         "stages":  [
                                        "modelo-01-etapa-04",
                                        "modelo-03-etapa-02"
                                    ]
                     },
                     {
                         "type":  "Queue",
                         "count":  8,
                         "stages":  [
                                        "modelo-01-etapa-02",
                                        "modelo-03-etapa-07",
                                        "modelo-03-etapa-01",
                                        "modelo-04-etapa-04",
                                        "modelo-05-etapa-03",
                                        "modelo-05-etapa-01",
                                        "modelo-05-etapa-02",
                                        "modelo-06-etapa-01"
                                    ]
                     },
                     {
                         "type":  "Separator",
                         "count":  1,
                         "stages":  [
                                        "modelo-05-etapa-03"
                                    ]
                     },
                     {
                         "type":  "Sink",
                         "count":  3,
                         "stages":  [
                                        "modelo-01-etapa-05",
                                        "modelo-03-etapa-01",
                                        "modelo-05-etapa-03"
                                    ]
                     },
                     {
                         "type":  "Source",
                         "count":  1,
                         "stages":  [
                                        "modelo-01-etapa-01"
                                    ]
                     }
                 ],
    "shortcuts":  [
                      {
                          "key":  "Q",
                          "contexts":  [
                                           "modelo-03-etapa-01",
                                           "modelo-03-etapa-05",
                                           "modelo-05-etapa-01"
                                       ]
                      },
                      {
                          "key":  "Shift + clique",
                          "contexts":  [
                                           "modelo-04-etapa-02"
                                       ]
                      },
                      {
                          "key":  "S",
                          "contexts":  [
                                           "modelo-04-etapa-02"
                                       ]
                      },
                      {
                          "key":  "A",
                          "contexts":  [
                                           "modelo-01-etapa-02",
                                           "modelo-01-etapa-04",
                                           "modelo-03-etapa-05",
                                           "modelo-03-etapa-06",
                                           "modelo-03-etapa-07",
                                           "modelo-04-etapa-01",
                                           "modelo-04-etapa-04",
                                           "modelo-05-etapa-02",
                                           "modelo-05-etapa-03",
                                           "modelo-06-etapa-01"
                                       ]
                      },
                      {
                          "key":  "Ctrl + clique",
                          "contexts":  [
                                           "modelo-04-etapa-02"
                                       ]
                      }
                  ],
    "warnings":  [
                     "Texto fora de qualquer campo ignorado: \u0027\u003cb\u003eIMPORTANTE: \u003c/b\u003eÉ nesta seção que você irá inserir as etapas reais. A seção 5 é apenas consulta.\u0027",
                     "Aula 1 sem titulo apos o traco.",
                     "Aula 2 sem titulo apos o traco.",
                     "Aula 3 sem titulo apos o traco."
                 ]
};
