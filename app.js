(function () {
const allQuestions = [
  {
    "pos": 1,
    "anulado": false,
    "enunciado": "Mulher, 56 anos, merendeira, apresenta dor no ombro direito há dois anos. Inicialmente mais intensa e com piora ao dormir por cima do ombro, a dor regrediu de intensidade nos últimos seis meses, associada à progressiva rigidez e limitação dos movimentos. Tem diagnóstico de diabetes mellitus. Nega trauma. Fez uso intermitente de cetoprofeno e celecoxibe e realizou infiltração articular e fisioterapia nos últimos meses, evoluindo com melhora parcial da limitação dos movimentos. Uma ressonância magnética foi solicitada. Dentre as alternativas a seguir, qual achado da imagem é mais esperado?",
    "opcoes": {
      "A": "Bursite subacromial e tendinopatia do supraespinhal.",
      "B": "Edema e espessamento capsular no recesso axilar.",
      "C": "Densidades heterogêneas periarticulares com focos de calcificação.",
      "D": "Lesão de aspecto serpentiforme na cabeça do úmero."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Edema e espessamento capsular no recesso axilar. O quadro clínico é clássico de capsulite adesiva (ombro congelado): dor inicial seguida de rigidez progressiva e limitação de movimentos em paciente com diabetes mellitus (fator de risco importante). A ressonância magnética na capsulite adesiva tipicamente mostra espessamento e edema da cápsula articular, especialmente no recesso axilar.\n\n**Por que as outras estão erradas:**\n- **A.** Bursite subacromial e tendinopatia do supraespinhal são achados de síndrome do impacto do ombro, que cursa com dor ao arco de movimento e não com a rigidez global progressiva descrita.\n- **C.** Densidades heterogêneas periarticulares com focos de calcificação sugerem tendinite calcária, que se apresenta com dor aguda intensa e não com a evolução crônica de rigidez progressiva.\n- **D.** Lesão serpentiforme na cabeça do úmero sugere necrose avascular ou lesão de Hill-Sachs, quadros com mecanismos e apresentações clínicas distintos."
  },
  {
    "pos": 2,
    "anulado": false,
    "enunciado": "Mulher, 40 anos, refere deformidades em mãos de início há 15 anos com piora significativa há dois anos. Atualmente faz uso de anti-inflamatórios não esteroidais sob demanda. Sem edema articular ao exame, apresenta subluxação e desvio ulnar nas articulações metacarpofalângicas, redutíveis. Os exames complementares são mostrados a seguir. A ultrassonografia de mãos e punhos realizada durante a consulta revelou tenossinovite em tendões flexores da 1ª a 5ª articulações metacarpofalângicas, sem derrame articular, com erosões mínimas. A radiografia de mãos é mostrada a seguir. Qual a etiologia mais provável para o quadro articular?",
    "opcoes": {
      "A": "Artrite reumatoide.",
      "B": "Lúpus eritematoso sistêmico.",
      "C": "Febre reumática.",
      "D": "Hipermobilidade articular."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Lúpus eritematoso sistêmico. O quadro descreve artropatia de Jaccoud: deformidades redutíveis (subluxação e desvio ulnar redutíveis nas metacarpofalângicas) sem erosões significativas, com tenossinovite e sem derrame articular. A artropatia de Jaccoud é uma manifestação clássica do LES, resultante de frouxidão capsular e ligamentar, não de destruição articular erosiva.\n\n**Por que as outras estão erradas:**\n- **A.** Artrite reumatoide causa deformidades fixas (não redutíveis) com erosões marginais significativas e destruição articular progressiva, incompatível com as erosões mínimas e deformidades redutíveis do caso.\n- **C.** Febre reumática pode causar artropatia de Jaccoud, mas é muito menos frequente, e o quadro de 15 anos sem história de febre reumática torna essa hipótese improvável.\n- **D.** Hipermobilidade articular causa frouxidão ligamentar, mas não cursa com tenossinovite em múltiplos tendões flexores."
  },
  {
    "pos": 3,
    "anulado": false,
    "enunciado": "Mulher, 68 anos, relata dor, calor e edema nos joelhos há seis meses, com melhora parcial após uso de naproxeno. Realizou infiltração em joelho direito com ácido hialurônico há 15 dias, evoluindo com piora significativa do quadro. Nega febre, mal-estar ou queda do estado geral. Apresenta dor, discreto aumento de temperatura, e derrame articular em joelho direito e crepitação em joelho esquerdo. Uma punção articular foi realizada, e a sinovianálise sob luz polarizada revelou cristais pequenos e com fraca birrefringência, azuis quando paralelos ao eixo do polarizador e amarelos quando perpendiculares. Dentre as opções a seguir, qual condição clínica deve ser investigada?",
    "opcoes": {
      "A": "Hiperparatireoidismo.",
      "B": "Hipertiroidismo.",
      "C": "Hipercalciúria idiopática.",
      "D": "Hipernatremia."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Hiperparatireoidismo. Os cristais descritos — pequenos, com fraca birrefringência, azuis quando paralelos ao eixo do polarizador (birrefringência positiva) — são cristais de pirofosfato de cálcio (CPPD), caracterizando pseudogota. O hiperparatireoidismo é uma das principais condições metabólicas associadas à doença por depósito de pirofosfato de cálcio, pois a hipercalcemia crônica favorece a deposição desses cristais.\n\n**Por que as outras estão erradas:**\n- **B.** Hipertireoidismo não tem associação clínica relevante com a doença por depósito de pirofosfato de cálcio.\n- **C.** Hipercalciúria idiopática não é fator de risco reconhecido para CPPD; a associação é com hipercalcemia e não com a excreção urinária de cálcio.\n- **D.** Hipernatremia não tem relação fisiopatológica com a deposição de cristais de pirofosfato de cálcio."
  },
  {
    "pos": 4,
    "anulado": true,
    "enunciado": "Item Anulado",
    "opcoes": {},
    "correta": "",
    "explicacao": ""
  },
  {
    "pos": 5,
    "anulado": false,
    "enunciado": "Homem, 42 anos, atleta, apresenta dor no quadril direito exacerbada ao realizar atividade física. Ao exame, há dor à flexão e rotação interna da articulação coxofemoral direita. Uma imagem da tomografia computadorizada do quadril é mostrada a seguir. Qual é o diagnóstico?",
    "opcoes": {
      "A": "Necrose avascular do quadril.",
      "B": "Fratura subcondral por insuficiência.",
      "C": "Impacto femoroacetabular do tipo Cam.",
      "D": "Fratura por estresse do quadril."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Impacto femoroacetabular do tipo Cam. Homem jovem, atleta, com dor no quadril exacerbada pela atividade física e dor à flexão e rotação interna da coxofemoral é a apresentação clássica do impacto femoroacetabular (IFA). O tipo Cam é mais frequente em homens jovens e atletas, caracterizado por deformidade na junção cabeça-colo femoral, bem visualizada na tomografia.\n\n**Por que as outras estão erradas:**\n- **A.** Necrose avascular do quadril é mais comum em pacientes com uso de corticoides, etilismo ou hemoglobinopatias, e a imagem tomográfica mostraria colapso ou esclerose subcondral, não alteração morfológica da junção cabeça-colo.\n- **B.** Fratura subcondral por insuficiência ocorre tipicamente em pacientes idosos com osteoporose, não em atletas de 42 anos.\n- **D.** Fratura por estresse do quadril apresentaria linha de fratura no colo femoral e não alteração morfológica tipo Cam na tomografia."
  },
  {
    "pos": 6,
    "anulado": false,
    "enunciado": "Homem, 37 anos, faz acompanhamento na oftalmologia por uveíte anterior persistente (não granulomatosa) que evoluiu para coriorretinite bilateral e vasculite retiniana. Refere lesões orais de repetição. Em uso regular de prednisona (20 mg/dia) e azatioprina (3mg/kg/dia) há três meses, evolui sem melhora do quadro ocular. Causas infecciosas foram descartadas, e o oftalmologista iniciou metilprednisolona 1 g EV/dia (por três dias) e solicitou avaliação do reumatologista. Das opções a seguir, qual próxima conduta é a mais recomendada?",
    "opcoes": {
      "A": "Tocilizumabe.",
      "B": "Pulsoterapia com ciclofosfamida.",
      "C": "Infliximabe associado à azatioprina.",
      "D": "Ciclosporina A."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Infliximabe associado à azatioprina. O quadro é compatível com doença de Behçet com envolvimento ocular grave (uveíte anterior, coriorretinite bilateral e vasculite retiniana) e úlceras orais recorrentes. Em caso de doença ocular grave refratária à azatioprina, as diretrizes recomendam anti-TNF (infliximabe) como agente de escolha, mantido em associação com imunossupressor convencional.\n\n**Por que as outras estão erradas:**\n- **A.** Tocilizumabe (anti-IL-6) não possui evidência robusta no tratamento do envolvimento ocular da doença de Behçet.\n- **B.** Pulsoterapia com ciclofosfamida era usada no passado, porém atualmente o infliximabe é preferível por melhor perfil de eficácia e segurança no acometimento ocular grave.\n- **D.** Ciclosporina A pode ser usada no envolvimento ocular de Behçet, mas é considerada inferior ao infliximabe em casos refratários com doença ameaçadora da visão."
  },
  {
    "pos": 7,
    "anulado": false,
    "enunciado": "Mulher, 44 anos, tem asma de início recente associada à pansinusopatia, eosinofilia periférica, p-ANCA positivo (1:20) e espirometria com distúrbio ventilatório inespecífico. Em razão de queixa sensorial e motora, uma eletroneuromiografia foi solicitada. Das alternativas a seguir, qual padrão eletromiográfico é mais provável?",
    "opcoes": {
      "A": "Multifocal assimétrico.",
      "B": "Polineuropatia distal simétrica.",
      "C": "Polirradiculopatia.",
      "D": "Plexopatia secundária."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Multifocal assimétrico (mononeurite múltipla). O quadro descreve granulomatose eosinofílica com poliangiíte (Churg-Strauss): asma de início recente, pansinusopatia, eosinofilia periférica e p-ANCA positivo. A neuropatia periférica é uma das manifestações mais frequentes, e o padrão clássico é a mononeurite múltipla (padrão multifocal assimétrico na eletroneuromiografia), decorrente de vasculite dos vasa nervorum.\n\n**Por que as outras estão erradas:**\n- **B.** Polineuropatia distal simétrica pode ocorrer em fases tardias, mas o padrão inicial e mais característico da vasculite é a mononeurite múltipla.\n- **C.** Polirradiculopatia sugere acometimento de raízes nervosas, o que não é o mecanismo principal na GEPA.\n- **D.** Plexopatia secundária não é o padrão típico de neuropatia nas vasculites ANCA-associadas."
  },
  {
    "pos": 8,
    "anulado": false,
    "enunciado": "Intervenções farmacológicas que aumentam as concentrações extracelulares de noradrenalina e serotonina em sistema nervoso central ativam vias descendentes inibitórias da dor e são úteis no manejo da dor crônica. Dentre as opções a seguir, qual agente farmacológico tem ação analgésica resultante da inibição da recaptação de noradrenalina?",
    "opcoes": {
      "A": "Venlafaxina.",
      "B": "Escitalopram.",
      "C": "Trazodona.",
      "D": "Mirtazapina."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Venlafaxina. A venlafaxina é um inibidor da recaptação de serotonina e noradrenalina (IRSN), sendo que em doses mais elevadas atua significativamente na inibição da recaptação de noradrenalina, ativando vias descendentes inibitórias da dor. Esse mecanismo dual é a base de sua eficácia analgésica na dor crônica.\n\n**Por que as outras estão erradas:**\n- **B.** Escitalopram é um inibidor seletivo da recaptação de serotonina (ISRS), sem ação relevante sobre a recaptação de noradrenalina, portanto com efeito analgésico limitado.\n- **C.** Trazodona atua como antagonista de receptores serotoninérgicos (5-HT2A) e fraco inibidor da recaptação de serotonina, sem ação significativa sobre noradrenalina.\n- **D.** Mirtazapina é um antagonista alfa-2 adrenérgico e antagonista de receptores serotoninérgicos; não age por inibição da recaptação de noradrenalina."
  },
  {
    "pos": 9,
    "anulado": false,
    "enunciado": "Homem, 68 anos, queixa-se de dor em região lombar com irradiação e dormência em nádegas e coxas há um ano. A dor piora ao caminhar, associa-se a episódios frequentes de perda do equilíbrio e é aliviada ao sentar-se. Hipertenso em uso de hidroclorotiazida, nega outros antecedentes, trauma, febre ou perda de peso. Ao exame, a marcha apresenta base ligeiramente alargada e há dor na extensão lombar. Os pulsos pediosos e o restante do exame são normais. Dentre as opções a seguir, qual diagnóstico explica a sintomatologia do paciente?",
    "opcoes": {
      "A": "Osteoartrite facetária.",
      "B": "Estenose de canal lombar.",
      "C": "Hérnia de núcleo pulposo.",
      "D": "Meningioma espinhal."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Estenose de canal lombar. O quadro clássico de claudicação neurogênica — dor lombar com irradiação para nádegas e coxas que piora ao caminhar e alivia ao sentar — associada a desequilíbrio, base alargada da marcha e dor à extensão lombar em idoso é altamente sugestivo de estenose do canal lombar. O alívio na flexão (sentado) ocorre porque a flexão amplia o canal vertebral.\n\n**Por que as outras estão erradas:**\n- **A.** Osteoartrite facetária causa dor lombar mecânica, mas não cursa com claudicação neurogênica, irradiação para nádegas/coxas ao caminhar nem distúrbio de equilíbrio.\n- **C.** Hérnia de núcleo pulposo causa dor radicular dermatomérica unilateral, tipicamente agravada pela flexão (não pela extensão), e não produz claudicação neurogênica bilateral.\n- **D.** Meningioma espinhal é raro e geralmente cursa com déficits progressivos tipo mielopatia (sinais de neurônio motor superior), incompatível com o quadro descrito."
  },
  {
    "pos": 10,
    "anulado": false,
    "enunciado": "Qual das seguintes exposições ambientais está associada ao risco de desenvolvimento de artrite reumatoide?",
    "opcoes": {
      "A": "Uso de bebidas alcóolicas.",
      "B": "Consumo de azeite de oliva e peixes.",
      "C": "Exposição à sílica.",
      "D": "Dieta rica em carne vermelha."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Exposição à sílica. A exposição ocupacional à sílica é um fator de risco ambiental bem estabelecido para o desenvolvimento de artrite reumatoide, possivelmente pela ativação de mecanismos de citrulinação de proteínas no tecido pulmonar e desencadeamento de autoimunidade.\n\n**Por que as outras estão erradas:**\n- **A.** O uso moderado de bebidas alcoólicas tem efeito protetor descrito contra artrite reumatoide, não sendo fator de risco.\n- **B.** Consumo de azeite de oliva e peixes (ricos em ômega-3) está associado a efeito protetor, não a aumento de risco para artrite reumatoide.\n- **D.** Dieta rica em carne vermelha não tem evidência consistente como fator de risco para artrite reumatoide, diferentemente do tabagismo e da exposição à sílica."
  },
  {
    "pos": 11,
    "anulado": false,
    "enunciado": "Mulher, 75 anos, há dois meses iniciou quadro de dor lombar de forte intensidade. Sem irradiação, a dor a faz acordar várias vezes à noite e alivia parcialmente com o uso de analgésicos comuns e anti-inflamatórios. Tem antecedentes de hipertensão arterial leve, hipotireoidismo e pré-diabetes. Os exames laboratoriais e uma imagem da coluna são mostrados a seguir. Qual é a principal hipótese diagnóstica?",
    "opcoes": {
      "A": "Hipoparatiroidismo.",
      "B": "Doença óssea adinâmica.",
      "C": "Osteoporose pós-menopausa.",
      "D": "Mieloma múltiplo."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Mieloma múltiplo. Mulher idosa com dor lombar intensa de forte intensidade, de início recente, que acorda à noite e não alivia adequadamente com analgésicos comuns, deve levantar a suspeita de neoplasia. A combinação de dor lombar noturna em idosa com achados laboratoriais e de imagem compatíveis (presumivelmente lesões osteolíticas e alterações de proteínas séricas) é altamente sugestiva de mieloma múltiplo.\n\n**Por que as outras estão erradas:**\n- **A.** Hipoparatiroidismo causa hipocalcemia, mas não produz dor lombar noturna intensa nem lesões ósseas destrutivas.\n- **B.** Doença óssea adinâmica ocorre em pacientes com doença renal crônica e é tipicamente assintomática, sem dor lombar intensa.\n- **C.** Osteoporose pós-menopausa pode causar fraturas vertebrais, mas a dor noturna persistente e intensa em paciente idosa com alterações laboratoriais sugere mieloma como principal hipótese."
  },
  {
    "pos": 12,
    "anulado": false,
    "enunciado": "Mulher, 52 anos, iniciou quadro de dor contínua e edema em mão esquerda há dois meses. Tem antecedente de câncer de mama direita há um ano, tratado com mastectomia radical e linfadenectomia. Em seguimento oncológico, faz uso de anastrozol e evolui sem evidência de recidiva. Ao exame, observa-se edema difuso com discreto cacifo, aumento de temperatura e sudorese em mão e punho esquerdos, com dor de forte intensidade ao toque. Os pulsos radiais e o restante do exame são normais. A radiografia de mãos e punhos não revelou anormalidades. Qual é o diagnóstico mais provável?",
    "opcoes": {
      "A": "Artrite induzida pelo inibidor da aromatase.",
      "B": "Síndrome dolorosa complexa regional.",
      "C": "Remitting Seronegative Symmetrical Synovitis with Pitting Oedema.",
      "D": "Linfedema pós linfadenectomia."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Síndrome dolorosa complexa regional (SDCR). O quadro apresenta os elementos cardinais da SDCR: dor desproporcional ao estímulo (alodinia), edema difuso com discreto cacifo, aumento de temperatura local e sudorese em mão e punho, com radiografia normal. O antecedente de mastectomia radical é um gatilho reconhecido para SDCR, que pode surgir no membro ipsilateral ou contralateral.\n\n**Por que as outras estão erradas:**\n- **A.** Artrite induzida por inibidor da aromatase (anastrozol) tipicamente causa artralgia/rigidez bilateral e simétrica, não edema unilateral com alterações vasomotoras e sudorese.\n- **C.** RS3PE (Remitting Seronegative Symmetrical Synovitis with Pitting Oedema) é uma condição simétrica e bilateral com edema em cacifo, mas não cursa com dor intensa ao toque (alodinia) nem alterações de temperatura e sudorese localizada.\n- **D.** Linfedema pós-linfadenectomia ocorreria no membro ipsilateral à cirurgia (lado direito), e não no lado esquerdo como descrito, além de não apresentar dor intensa ao toque e aumento de temperatura."
  },
  {
    "pos": 13,
    "anulado": false,
    "enunciado": "Mulher, 57 anos, encaminhada da otorrinolaringologia, há sete anos apresenta episódios de parotidite de repetição. Inicialmente com melhora e resolução após uso de anti- inflamatório não hormonal, no último ano os episódios tornaram-se mais frequentes e respondem apenas parcialmente aos medicamentos. Tem diagnósticos de hipertensão arterial sistêmica, dislipidemia e fibromialgia. Ao exame, a parótida é palpável e endurecida à esquerda, sem linfonodomegalia cervical. Os exames complementares são mostrados a seguir. Uma biopsia da parótida esquerda foi realizada. Dentre as opções a seguir, qual é o diagnóstico mais provável?",
    "opcoes": {
      "A": "Sarcoidose.",
      "B": "Linfoma extranodal da zona marginal.",
      "C": "Doença relacionada a IgG4.",
      "D": "Linfoma de Hodgkin."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Linfoma extranodal da zona marginal (linfoma MALT). Pacientes com síndrome de Sjögren têm risco aumentado de linfoma, sendo o linfoma MALT de glândulas salivares o mais frequente. Parotidite recorrente crônica com endurecimento glandular progressivo em paciente com provável Sjögren (parotidite de repetição) deve levantar a suspeita de transformação linfomatosa, confirmável pela biópsia.\n\n**Por que as outras estão erradas:**\n- **A.** Sarcoidose pode causar parotidite, mas não tem a evolução crônica recorrente com endurecimento glandular progressivo e associação com Sjögren como descrito.\n- **C.** Doença relacionada a IgG4 pode causar aumento de glândulas salivares, porém tipicamente é bilateral e de consistência firme-elástica; a evolução com episódios recorrentes e endurecimento unilateral favorece linfoma MALT.\n- **D.** Linfoma de Hodgkin raramente se apresenta como envolvimento primário de glândula salivar, sendo muito menos provável que o linfoma MALT nesse contexto."
  },
  {
    "pos": 14,
    "anulado": false,
    "enunciado": "Fonte: Asiri Y, Radiopaedia.org, rID-77371. Considerando os achados da imagem acima, qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Artrite reumatoide.",
      "B": "Espondiloartrite axial radiográfica.",
      "C": "Ocronose.",
      "D": "Hiperostose esquelética idiopática difusa."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Artrite reumatoide. A imagem referenciada (Radiopaedia rID-77371) apresenta achados radiográficos clássicos da artrite reumatoide na coluna cervical, como subluxação atlantoaxial (aumento do intervalo atlantodental) e erosões no processo odontoide, que são alterações características do envolvimento cervical na AR.\n\n**Por que as outras estão erradas:**\n- **B.** Espondiloartrite axial radiográfica acomete primariamente as articulações sacroilíacas e coluna lombar/torácica, com sindesmófitos; o acometimento atlantoaxial erosivo é muito mais típico de AR.\n- **C.** Ocronose (alcaptonúria) causa calcificação de discos intervertebrais e estenose difusa, sem as erosões atlantoaxiais descritas.\n- **D.** Hiperostose esquelética idiopática difusa (DISH) apresenta ossificação ligamentar fluida sem erosões articulares, sendo incompatível com os achados erosivos da imagem."
  },
  {
    "pos": 15,
    "anulado": false,
    "enunciado": "Homem, 52 anos, tem gota, hipertensão arterial sistêmica e dislipidemia, atualmente em uso de nifedipino, captopril, hidroclorotiazida e atorvastatina. Com controle adequado da pressão arterial e dos níveis lipídicos, conforme avaliação recente do cardiologista, mantém níveis séricos de ácido úrico em 6,5 mg/dL. Um ajuste no tratamento foi proposto. Do ponto de vista da uricemia, qual mudança seria a mais recomendável?",
    "opcoes": {
      "A": "Captopril por losartana.",
      "B": "Atorvastatina por rosuvastatina.",
      "C": "Hidroclorotiazida por clortalidona.",
      "D": "Nifedipino por atenolol."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Captopril por losartana. A losartana é o único anti-hipertensivo com efeito uricosúrico comprovado, reduzindo os níveis séricos de ácido úrico em 15-30%. A troca do captopril por losartana mantém o controle pressórico (ambos são bloqueadores do sistema renina-angiotensina) e favorece a redução da uricemia.\n\n**Por que as outras estão erradas:**\n- **B.** A troca de atorvastatina por rosuvastatina não oferece vantagem significativa do ponto de vista uricêmico; embora o fenofibrato tenha efeito uricosúrico, nenhuma estatina tem impacto clinicamente relevante.\n- **C.** A troca de hidroclorotiazida por clortalidona não ajuda, pois ambos os tiazídicos aumentam a uricemia ao reduzirem a excreção renal de ácido úrico.\n- **D.** A troca de nifedipino por atenolol é desfavorável, pois betabloqueadores podem aumentar os níveis de ácido úrico."
  },
  {
    "pos": 16,
    "anulado": false,
    "enunciado": "O uso do denosumabe inibe erosões ósseas e reduz a progressão radiográfica em pacientes com artrite reumatoide. A interferência na expressão de qual fator de transcrição gênica explica esse efeito?",
    "opcoes": {
      "A": "β-Catenina.",
      "B": "NF-κB.",
      "C": "Runx-2.",
      "D": "STAT3."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** NF-κB. O denosumabe é um anticorpo monoclonal anti-RANKL. O RANKL, ao se ligar ao receptor RANK nos precursores de osteoclastos, ativa a via de sinalização NF-κB (fator nuclear kappa B), que é o fator de transcrição essencial para a diferenciação e ativação dos osteoclastos. O bloqueio do RANKL pelo denosumabe impede a ativação do NF-κB e, consequentemente, a osteoclastogênese e a erosão óssea.\n\n**Por que as outras estão erradas:**\n- **A.** β-Catenina está envolvida na via Wnt de formação óssea (osteoblastogênese), não na via de reabsorção óssea mediada por RANK/RANKL.\n- **C.** Runx-2 é um fator de transcrição essencial para a diferenciação de osteoblastos, não de osteoclastos.\n- **D.** STAT3 participa de diversas vias de sinalização inflamatória (como JAK/STAT), mas não é o fator de transcrição central da via RANK/RANKL/OPG."
  },
  {
    "pos": 17,
    "anulado": false,
    "enunciado": "Mulher, 35 anos, veio encaminhada da dermatologia em virtude de alteração na densitometria óssea. Teve diagnóstico de hanseníase há três anos e relata uso de prednisona por reações hansênicas de difícil tratamento (atualmente em uso de prednisona 5 mg em dias alternados). Nega outras doenças ou fraturas. A menarca foi aos 10 anos e mantém ciclos menstruais regulares. A radiografia de coluna torácica e lombar é normal. Os resultados dos exames laboratoriais e da densitometria óssea são mostrados a seguir. Iniciou uso de colecalciferol e recebeu orientação nutricional para adequar a ingestão dietética de cálcio. Conforme as recomendações atuais, qual das condutas a seguir é a mais indicada para o manejo clínico nesse momento?",
    "opcoes": {
      "A": "Teriparatida.",
      "B": "Denosumabe.",
      "C": "Densitometria óssea anual.",
      "D": "Risedronato."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Densitometria óssea anual. Trata-se de mulher jovem, pré-menopáusica, com uso de baixa dose de corticoide (prednisona 5 mg em dias alternados), sem fraturas prévias e com alteração densitométrica. As recomendações atuais para pacientes pré-menopáusicas em uso de glicocorticoides em baixas doses, sem fraturas, indicam monitoramento com densitometria óssea anual, suplementação de cálcio e vitamina D (já iniciados) e ainda não há indicação de tratamento farmacológico antirreabsortivo.\n\n**Por que as outras estão erradas:**\n- **A.** Teriparatida é reservada para pacientes com alto risco de fratura (fraturas prévias, doses altas de corticoide), o que não se aplica a este caso.\n- **B.** Denosumabe não está indicado como primeira linha nesse cenário de mulher jovem pré-menopáusica sem fraturas e com uso de corticoide em dose baixa.\n- **D.** Risedronato (bisfosfonato) seria indicado se houvesse alto risco de fratura; em mulher jovem sem fraturas com baixa dose de corticoide, a monitorização é preferível."
  },
  {
    "pos": 18,
    "anulado": false,
    "enunciado": "Mulher, 50 anos, relata artralgia, manchas nas pernas e urina espumosa persistente há seis meses. Com melhora após uso de prednisona, evolui com recidiva das lesões nas tentativas de desmame. Hipertensa, dislipidêmica e tabagista (20 anos-maço), está em uso de losartana 50 mg/dia, prednisona 20 mg/dia e rosuvastatina 10 mg/dia. Ao exame, observa-se púrpura palpável em membros inferiores, sem outras alterações. Os exames complementares são mostrados a seguir. Dentre as opções a seguir, qual achado laboratorial é mais provável para o caso?",
    "opcoes": {
      "A": "Anti-β2-glicoproteína.",
      "B": "Crioglobulinas.",
      "C": "Anti-mieloperoxidase.",
      "D": "Anti-membrana basal glomerular."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Crioglobulinas. O quadro de púrpura palpável em membros inferiores, artralgia, urina espumosa (proteinúria/nefropatia), recidiva ao desmame de corticoide e complemento baixo é clássico de vasculite crioglobulinêmica. As crioglobulinas são imunocomplexos que precipitam no frio e causam vasculite de pequenos vasos, acometimento renal (glomerulonefrite membranoproliferativa) e púrpura palpável.\n\n**Por que as outras estão erradas:**\n- **A.** Anti-β2-glicoproteína é marcador da síndrome antifosfolípide, que se manifesta com tromboses e não com púrpura palpável e vasculite de pequenos vasos.\n- **C.** Anti-mieloperoxidase (p-ANCA) está associado a vasculites ANCA-associadas (poliangiíte microscópica), que geralmente não cursam com consumo de complemento.\n- **D.** Anti-membrana basal glomerular está associado à doença de Goodpasture (hemorragia pulmonar e glomerulonefrite rapidamente progressiva), sem púrpura palpável típica."
  },
  {
    "pos": 19,
    "anulado": false,
    "enunciado": "Mulher, 62 anos, tem diagnóstico de doença de Sjögren há três anos (Anti-SSA/Ro positivo, Schirmer de zero mm bilateralmente e biópsia de glândula salivar com Focus Score de 2), atualmente em uso de agentes tópicos para olho seco. Queixa-se de dor generalizada há oito meses, associada à fadiga e sensação de queimação e pontadas nas extremidades. Ao exame físico, observa-se hipoestesia térmica e dolorosa nas mãos e pés, sem outras anormalidades. Os exames complementares são mostrados a seguir. Das opções a seguir, qual próximo passo é mais recomendado para o diagnóstico?",
    "opcoes": {
      "A": "Cortisol sérico após estímulo ACTH.",
      "B": "Ressonância magnética de neuro-eixo.",
      "C": "Biópsia de pele com densidade de fibras nervosas intradérmicas.",
      "D": "Sorologia para HTLV-1 e 2."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Biópsia de pele com densidade de fibras nervosas intradérmicas. O quadro descreve neuropatia de fibras finas em paciente com doença de Sjögren: dor generalizada, fadiga, sensação de queimação e pontadas nas extremidades, com hipoestesia térmica e dolorosa. A biópsia de pele para contagem da densidade de fibras nervosas intradérmicas (IENFD) é o padrão-ouro para diagnóstico de neuropatia de fibras finas, que é uma manifestação reconhecida da síndrome de Sjögren.\n\n**Por que as outras estão erradas:**\n- **A.** Cortisol sérico após estímulo com ACTH investiga insuficiência adrenal, que não é sugerida pelo quadro clínico apresentado.\n- **B.** Ressonância magnética de neuroeixo avalia patologia central (mielopatia, desmielinização), mas a neuropatia de fibras finas é periférica e não tem achados na RM.\n- **D.** Sorologia para HTLV-1 e 2 pode ser considerada em mielopatia tropical, porém o padrão de neuropatia de fibras finas em Sjögren torna a biópsia cutânea a investigação prioritária."
  },
  {
    "pos": 20,
    "anulado": false,
    "enunciado": "Mulher, 30 anos, tem lúpus eritematoso sistêmico em remissão há três anos, em uso regular de hidroxicloroquina. Há duas semanas, relata artralgia com rigidez matinal, fadiga e alopecia. Dentre as alternativas a seguir, qual autoanticorpo sugere doença em atividade?",
    "opcoes": {
      "A": "Anti-Sm.",
      "B": "Anti-nucleossomo.",
      "C": "Anti-DNAss.",
      "D": "Anti-SSA/Ro."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Anti-nucleossomo. Em pacientes com LES, o anti-nucleossomo (anti-cromatina) é um marcador que se correlaciona com atividade de doença, particularmente com nefrite lúpica e atividade global. Seus títulos tendem a subir durante os flares e diminuir na remissão, sendo útil para sugerir reativação da doença.\n\n**Por que as outras estão erradas:**\n- **A.** Anti-Sm é altamente específico para LES, mas seus títulos não flutuam de forma significativa com a atividade da doença; são marcadores diagnósticos, não de atividade.\n- **C.** Anti-DNAss (anti-DNA de fita simples) é pouco específico e não é utilizado como marcador de atividade do LES.\n- **D.** Anti-SSA/Ro é associado a fotossensibilidade, lúpus neonatal e síndrome de Sjögren, mas não flutua significativamente com a atividade do LES."
  },
  {
    "pos": 21,
    "anulado": false,
    "enunciado": "Mulher, 65 anos, tem poliartrite simétrica de cotovelos, punhos, articulações metacarpofalângicas e joelhos há 15 anos (fator reumatoide positivo; osteopenia e erosões marginais ao raio-X de mãos). Hipertensa, teve infarto agudo do miocárdio há dois anos e faz uso irregular de atorvastatina 20 mg/dia, losartana 100 mg/dia, AAS 100 mg/dia e clopidogrel 75 mg/dia. É ex-tabagista e refere crises de “chiado no peito” com dispneia aos moderados esforços. Descontinuou uso de leflunomida há três meses por alopecia e está em uso de metotrexato 25 mg/semana associado a prednisona 10 mg/dia (uso continuado desde o início do acompanhamento). Queixa-se de dor e inchaço em punhos, cotovelos e joelho direito associados à fadiga e rigidez matinal (1 hora), com piora progressiva há quatro semanas. Ao exame, apresenta discreta subluxação volar com limitação da flexão em punhos e edema doloroso em cotovelos, punhos e metacarpofalângicas bilateralmente. Os exames laboratoriais mostram: Das opções a seguir, qual intervenção farmacológica é a mais recomendada?",
    "opcoes": {
      "A": "Etanercepte.",
      "B": "Abatacepte.",
      "C": "Tofacitinibe.",
      "D": "Rituximabe."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Rituximabe. Trata-se de paciente com artrite reumatoide erosiva de longa data, com falha a metotrexato em dose otimizada e antecedente cardiovascular grave (IAM prévio, uso de AAS e clopidogrel) e sintomas respiratórios (\"chiado no peito\", dispneia). O rituximabe é o biológico de escolha nesse perfil, pois possui evidência de segurança cardiovascular superior aos inibidores de JAK e é preferido em pacientes com fatores de risco cardiovascular elevados. Além disso, é seguro em pneumopatas.\n\n**Por que as outras estão erradas:**\n- **A. Etanercepte** — Embora seja uma opção de biológico, anti-TNFs não são a primeira escolha em pacientes com risco cardiovascular elevado e doença pulmonar quando o rituximabe está disponível; além disso, não há superioridade cardiovascular comprovada.\n- **B. Abatacepte** — É uma opção aceitável, mas o rituximabe é preferido em pacientes com alto risco cardiovascular e fator reumatoide positivo em altos títulos.\n- **C. Tofacitinibe** — Inibidores de JAK estão contraindicados ou devem ser evitados em pacientes com idade >65 anos, história de eventos cardiovasculares, tabagismo prévio e risco tromboembólico, conforme alertas de segurança (estudo ORAL Surveillance)."
  },
  {
    "pos": 22,
    "anulado": false,
    "enunciado": "Mulher, 26 anos, há um ano queixa-se de dor e inchaço em pequenas articulações das mãos, associados à palidez nos dedos quando exposta ao frio. Refere disfagia leve e tosse seca episódica, sem outras queixas. Ao exame, observa-se edema difuso de mãos e dedos bilateralmente. Os exames laboratoriais solicitados mostram: Considerando a principal hipótese diagnóstica, qual das manifestações a seguir é mais característica?",
    "opcoes": {
      "A": "Neuralgia do trigêmeo bilateral.",
      "B": "Convulsões.",
      "C": "Paquimeningite.",
      "D": "Neuropatia autonômica."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Neuralgia do trigêmeo bilateral. O quadro clínico descreve uma mulher jovem com artralgia de pequenas articulações, fenômeno de Raynaud, disfagia, tosse seca e edema difuso de mãos e dedos (\"puffy hands\"), sugestivo de doença mista do tecido conjuntivo (DMTC). A neuralgia do trigêmeo bilateral é uma manifestação neurológica característica e bastante específica da DMTC, sendo descrita como um dos achados mais típicos da doença.\n\n**Por que as outras estão erradas:**\n- **B. Convulsões** — São mais características do lúpus eritematoso sistêmico (neuropsiquiátrico), não da DMTC.\n- **C. Paquimeningite** — É mais associada à granulomatose com poliangiíte ou doença relacionada a IgG4.\n- **D. Neuropatia autonômica** — Não é uma manifestação clássica da DMTC; é mais vista em diabetes ou amiloidose."
  },
  {
    "pos": 23,
    "anulado": false,
    "enunciado": "Mulher, 45 anos, refere dores articulares e musculares difusas há três anos, sem rigidez matinal. As dores são de forte intensidade, prejudicam atividades de vida diária e se associam à fadiga e a sono não restaurador. Obesa, relata bloqueio atrioventricular do segundo grau há dois anos, em acompanhamento com cardiologista. Não realiza atividade física e relata humor deprimido, atualmente em psicoterapia. Considerando a principal hipótese diagnóstica, qual fármaco é mais indicado?",
    "opcoes": {
      "A": "Duloxetina.",
      "B": "Amitriptilina.",
      "C": "Ciclobenzaprina.",
      "D": "Fluoxetina."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Duloxetina. A paciente apresenta quadro clássico de fibromialgia (dor difusa, fadiga, sono não restaurador, humor deprimido), com a particularidade de ter bloqueio atrioventricular de segundo grau. A duloxetina (inibidor da recaptação de serotonina e noradrenalina — IRSN) é um fármaco aprovado para fibromialgia e não possui efeitos cardíacos significativos sobre a condução, sendo segura nesse contexto.\n\n**Por que as outras estão erradas:**\n- **B. Amitriptilina** — Embora útil na fibromialgia, é um antidepressivo tricíclico que pode agravar distúrbios de condução cardíaca (como BAV de 2º grau), sendo contraindicada nesse cenário.\n- **C. Ciclobenzaprina** — Possui estrutura semelhante aos tricíclicos e compartilha os mesmos riscos de prolongamento da condução cardíaca, sendo inadequada nesta paciente.\n- **D. Fluoxetina** — É um ISRS puro com pouca evidência de eficácia na fibromialgia; não tem ação noradrenérgica relevante para o controle da dor."
  },
  {
    "pos": 24,
    "anulado": false,
    "enunciado": "Mulher, 52 anos, tem diagnóstico de esclerose sistêmica forma limitada há 10 anos, sem comorbidades. Há um ano, apresenta dispneia progressiva, atualmente aos mínimos esforços. Ao exame, apresenta esclerodactilia e microcicatrizes em pontas dos dedos; ausculta pulmonar sem alterações e ausculta cardíaca com hiperfonese de P2. O ecocardiograma evidenciou dilatação de câmaras direitas e velocidade de regurgitação tricúspide (VRT) = 3,2 m/s. A dosagem do NT-proBNP foi de 1200 ng/L (valor de referência < 300 ng/L). O cateterismo cardíaco evidenciou pressão arterial pulmonar média (PAPm) = 40 mmHg (valor de referência 8-20 mmHg), pressão capilar pulmonar (PCP) = 12 mmHg (valor de referência 4-6 mmHg), e resistência vascular pulmonar = 6,75 WU (valor de referência 0,3-2,0 WU). Dentre as opções a seguir, qual conduta inicial é a mais recomendada?",
    "opcoes": {
      "A": "Iniciar bosentana em monoterapia e substituir por sildenafila caso não haja resposta clínica em três meses.",
      "B": "Iniciar sildenafila em monoterapia, seguindo com a combinação com bosentana caso não haja resposta em três meses.",
      "C": "Iniciar análogo de prostaciclina inalatório e seguir tratamento com bosentana após melhora clínica.",
      "D": "Iniciar combinação de bosentana, sildenafila e análogo de prostaciclina inalatório, considerando o transplante na ausência de resposta clínica."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Iniciar combinação de bosentana, sildenafila e análogo de prostaciclina inalatório, considerando o transplante na ausência de resposta clínica. A paciente tem hipertensão arterial pulmonar (HAP) associada à esclerose sistêmica, com hemodinâmica confirmada por cateterismo (PAPm 40 mmHg, PCP 12 mmHg, RVP 6,75 WU), classificada como de alto risco (NT-proBNP elevado, classe funcional avançada com dispneia aos mínimos esforços). As diretrizes atuais (ESC/ERS 2022) recomendam terapia tripla combinada inicial (antagonista do receptor de endotelina + inibidor de PDE5 + análogo de prostaciclina) para pacientes de alto risco, com consideração de transplante se não houver resposta.\n\n**Por que as outras estão erradas:**\n- **A.** Monoterapia com bosentana é insuficiente para pacientes de alto risco.\n- **B.** Monoterapia inicial com sildenafila seguida de terapia sequencial não é a abordagem recomendada em pacientes de alto risco, que necessitam de terapia combinada desde o início.\n- **C.** Iniciar apenas com prostaciclina inalatória e depois trocar por bosentana não segue as diretrizes de terapia combinada upfront em alto risco."
  },
  {
    "pos": 25,
    "anulado": false,
    "enunciado": "Homem, 60 anos, tem diagnóstico de gota tofácea e interrompeu uso de alopurinol após rash cutâneo grave. Tem antecedente de urolitíase e evolui com doença renal crônica (taxa de filtração glomerular estimada = 40 mL/min). Atualmente sem dor articular, retorna para avaliação clínica com níveis séricos de ácido úrico de 10,5 mg/dL. Sem artrite ao exame, apresenta tofos em cotovelos, dorso das mãos e dos pés. Dentre as alternativas a seguir, qual abordagem terapêutica é a mais recomendada?",
    "opcoes": {
      "A": "Iniciar benzbromarona.",
      "B": "Reiniciar alopurinol em dose mais baixa.",
      "C": "Intensificar medidas dietéticas.",
      "D": "Iniciar febuxostate."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Iniciar febuxostate. O paciente tem gota tofácea com hiperuricemia significativa (10,5 mg/dL), história de rash cutâneo grave ao alopurinol (sugerindo hipersensibilidade), doença renal crônica (TFGe 40 mL/min) e urolitíase. O febuxostate é um inibidor seletivo da xantina oxidase que não compartilha reatividade cruzada com alopurinol e pode ser usado com segurança na DRC moderada, sendo a alternativa mais adequada neste cenário.\n\n**Por que as outras estão erradas:**\n- **A. Benzbromarona** — É um uricosúrico contraindicado em pacientes com urolitíase e com eficácia reduzida em DRC avançada.\n- **B. Reiniciar alopurinol em dose mais baixa** — Após um rash cutâneo grave (possível síndrome de DRESS ou Stevens-Johnson), a reintrodução do alopurinol é contraindicada pelo risco de reação grave recorrente.\n- **C. Intensificar medidas dietéticas** — Medidas dietéticas isoladas são insuficientes para controlar a hiperuricemia em pacientes com gota tofácea e ácido úrico muito elevado."
  },
  {
    "pos": 26,
    "anulado": true,
    "enunciado": "Item Anulado",
    "opcoes": {},
    "correta": "",
    "explicacao": ""
  },
  {
    "pos": 27,
    "anulado": false,
    "enunciado": "Considere a imagem radiográfica a seguir. Qual estrutura está mais provavelmente rota?",
    "opcoes": {
      "A": "Cabo longo do bíceps.",
      "B": "Cabo curto do bíceps.",
      "C": "Tendão supraespinhal",
      "D": "Ligamento coracoacromial."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Tendão supraespinhal. A imagem radiográfica descrita é compatível com sinais de ruptura do manguito rotador, e o tendão supraespinhal é o componente mais frequentemente acometido. Achados radiográficos como ascensão da cabeça umeral (redução do espaço subacromial) indicam ruptura crônica e extensa do supraespinhal, permitindo a migração superior do úmero.\n\n**Por que as outras estão erradas:**\n- **A. Cabo longo do bíceps** — A ruptura do cabo longo do bíceps manifesta-se clinicamente com o sinal de Popeye e não gera os achados radiográficos típicos de ascensão da cabeça umeral.\n- **B. Cabo curto do bíceps** — Sua ruptura é extremamente rara e não produz os achados radiográficos descritos.\n- **D. Ligamento coracoacromial** — Não é uma estrutura que, quando rompida, cause os achados radiográficos clássicos de ascensão da cabeça umeral."
  },
  {
    "pos": 28,
    "anulado": false,
    "enunciado": "Mulher, 46 anos, refere parotidite de repetição, artralgia em mãos e olho seco há cinco anos. Faz uso regular de hidroxicloroquina e queixa-se de dormência, formigamento e dor em queimação em membros inferiores de início há três meses. Exame físico geral e neurológico sem anormalidades. Os exames complementares disponíveis são mostrados a seguir. De acordo com as mais recentes recomendações de manejo do EULAR, qual intervenção terapêutica inicial é a mais recomendada?",
    "opcoes": {
      "A": "Prednisona.",
      "B": "Azatioprina.",
      "C": "Gabapentina.",
      "D": "Gamaglobulina EV."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Gabapentina. A paciente tem síndrome de Sjögren com neuropatia de fibras finas (dormência, formigamento e dor em queimação), sem anormalidades no exame neurológico convencional. Conforme as recomendações do EULAR para o manejo da síndrome de Sjögren, a neuropatia de fibras finas isolada (sem vasculite ou acometimento sistêmico grave) deve ser tratada inicialmente com medicamentos para dor neuropática, sendo a gabapentina a primeira linha recomendada.\n\n**Por que as outras estão erradas:**\n- **A. Prednisona** — Corticoides não são indicados como primeira linha para neuropatia de fibras finas na síndrome de Sjögren sem evidência de vasculite.\n- **B. Azatioprina** — Imunossupressores não são recomendados para neuropatia de fibras finas isolada.\n- **D. Gamaglobulina EV** — Reservada para formas graves de neuropatia (motora, vasculítica), não sendo primeira linha na neuropatia de fibras finas."
  },
  {
    "pos": 29,
    "anulado": false,
    "enunciado": "Mulher, 42 anos, há um mês refere fadiga e fraqueza progressiva com dificuldade para subir escadas, pentear cabelos e levantar-se sem apoio. Nega mialgia. A creatinofosfoquinase sérica é de 3.000 U/L (valor de referência: 20 a 180 U/L) e uma eletroneuromiografia mostra fibrilações e ondas agudas positivas. Foi iniciado tratamento com prednisona e azatioprina, e um programa de reabilitação física foi proposto nesse momento. Acerca do exercício físico, qual abordagem inicial é mais recomendada?",
    "opcoes": {
      "A": "Exercício resistido de fortalecimento muscular para prevenir contraturas.",
      "B": "Manter repouso até que os níveis de creatinofosfoquinase estejam normalizados.",
      "C": "Alongamento e exercício passivo para amplitude de movimento.",
      "D": "Treino aeróbio combinado com exercício resistido de alta intensidade."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Alongamento e exercício passivo para amplitude de movimento. Na fase aguda de uma miopatia inflamatória (CPK muito elevada, fraqueza proximal significativa), a abordagem inicial de reabilitação deve ser conservadora, priorizando exercícios de alongamento e amplitude de movimento passivo para prevenir contraturas e manter a funcionalidade, sem sobrecarregar a musculatura inflamada.\n\n**Por que as outras estão erradas:**\n- **A. Exercício resistido de fortalecimento muscular** — Não é indicado na fase ativa com enzimas musculares muito elevadas, pois pode agravar a lesão muscular.\n- **B. Manter repouso até normalização da CPK** — O repouso absoluto prolongado leva à atrofia muscular e contraturas; não é recomendado.\n- **D. Treino aeróbio combinado com exercício resistido de alta intensidade** — Inadequado na fase aguda com inflamação muscular ativa e CPK muito elevada."
  },
  {
    "pos": 30,
    "anulado": false,
    "enunciado": "Mulher, 30 anos, relata episódios de dor e dormência associados à palidez simétrica seguida por cianose nos dedos das mãos há três anos. Há seis meses nota piora do quadro associada a estresse emocional. Traz fotos que mostram palidez simétrica do segundo ao quinto dedo de ambas as mãos. Relata uso de anticoncepcional oral desde a adolescência e de propranolol 80 mg/dia há cinco anos para tratamento de enxaqueca. Sem anormalidades ao exame físico, traz exames complementares, que mostram: Dentre as alternativas a seguir, qual próximo passo é o mais recomendado?",
    "opcoes": {
      "A": "Pesquisar anticorpo anti-topoisomerase I e anti-centrômero.",
      "B": "Descontinuar propranolol e iniciar nifedipino.",
      "C": "Solicitar ultrassonografia Doppler arterial de membros superiores.",
      "D": "Suspender anticoncepcional oral e orientar proteção ao frio."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Descontinuar propranolol e iniciar nifedipino. A paciente apresenta fenômeno de Raynaud simétrico, com exames complementares normais, sugestivo de fenômeno de Raynaud primário. O propranolol (betabloqueador) é uma causa conhecida de vasoconstrição periférica e agravamento do Raynaud. A conduta mais adequada é descontinuar o agente agravante e iniciar nifedipino (bloqueador de canal de cálcio), que é o vasodilatador de primeira linha para o tratamento do fenômeno de Raynaud.\n\n**Por que as outras estão erradas:**\n- **A. Pesquisar anti-topoisomerase I e anti-centrômero** — Não é prioritário antes de remover a causa medicamentosa; os exames complementares são normais, não sugerindo doença autoimune.\n- **C. Ultrassonografia Doppler arterial** — Não é o próximo passo mais adequado; a causa medicamentosa deve ser abordada primeiro.\n- **D. Suspender anticoncepcional oral e orientar proteção ao frio** — O anticoncepcional tem papel menor que o betabloqueador como fator agravante, e a abordagem prioritária é descontinuar o propranolol."
  },
  {
    "pos": 31,
    "anulado": false,
    "enunciado": "Mulher, 56 anos, 64 Kg, ex-tabagista, apresenta poliartrite de grandes e pequenas articulações (fator reumatoide 50 UI/mL) há dois anos. Há sete anos, teve adenocarcinoma de pulmão em estágio inicial (1A) tratado com lobectomia superior direita e dissecção de linfonodo, com boa evolução, sem evidências atuais do tumor. Está em uso de leflunomida 20 mg/dia, iniciada há um ano e meio, após grave intolerância gastrintestinal a metotrexato oral e subcutâneo. Queixa-se de dor e inchaço persistentes em mãos, cotovelos e joelhos há dois meses, sem melhora com prednisona 20 mg/dia, iniciada por conta própria há uma semana. Ao exame, apresenta sinovite dolorosa em punhos, segunda e terceira articulações metacarpofalângicas, bilateralmente e em joelho direito. Os exames laboratoriais mostram: Conforme as mais recentes recomendações de manejo, qual das opções de intervenção a seguir é a mais indicada?",
    "opcoes": {
      "A": "Adalimumabe 40 mg, SC, a cada 14 dias.",
      "B": "Upadacitinibe 15 mg, VO, 1 vez ao dia.",
      "C": "Rituximabe 1 g, EV, no D0 e D14.",
      "D": "Abatacepte 750 mg, EV, no D0, D14 e D28."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Adalimumabe 40 mg, SC, a cada 14 dias. A paciente tem artrite reumatoide ativa com FR positivo, em uso de leflunomida (após intolerância ao metotrexato), com falha ao tratamento com DMARD convencional, sendo indicada a adição de biológico. O adalimumabe (anti-TNF) é a escolha mais adequada neste caso. Embora haja antecedente de adenocarcinoma de pulmão, o tumor estava em estágio inicial e foi tratado há sete anos sem evidência de recidiva, não sendo contraindicação absoluta ao anti-TNF.\n\n**Por que as outras estão erradas:**\n- **B. Upadacitinibe** — Inibidores de JAK devem ser evitados como primeira opção por preocupações com risco aumentado de neoplasias, especialmente em paciente com antecedente oncológico.\n- **C. Rituximabe** — É uma opção válida em pacientes com histórico de neoplasia, porém as recomendações atuais favorecem anti-TNF como primeira linha de biológico após falha a DMARD convencional quando o câncer está em remissão prolongada.\n- **D. Abatacepte** — Embora seguro em relação a neoplasias, o anti-TNF permanece como primeira escolha de biológico após falha a DMARD convencional."
  },
  {
    "pos": 32,
    "anulado": false,
    "enunciado": "Homem, 23 anos, há um ano e meio apresenta episódios de febre (até 39 °C) com duração de 1-2 dias e resolução espontânea. Antes do surgimento da febre, relata episódios de urticária quando exposto ao frio. Atualmente os episódios febris ocorrem com ou sem exposição ao frio. Refere investigação extensa realizada por infectologista que descartou causa infecciosa e uso de diversos antibióticos, sem melhora clínica. Durante a infância, desenvolveu perda auditiva neurossensorial bilateral moderada. Com quadro estável nos últimos anos, atualmente usa aparelho auditivo. Entre as alternativas a seguir, qual gene provavelmente apresenta mutação?",
    "opcoes": {
      "A": "NLRP3.",
      "B": "MVK.",
      "C": "MEFV.",
      "D": "UBA1."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** NLRP3. O quadro descreve um paciente jovem com urticária induzida pelo frio na infância, febre episódica recorrente e perda auditiva neurossensorial bilateral. Essa tríade é típica da síndrome de Muckle-Wells, que faz parte do espectro das criopinopatias (CAPS — Cryopyrin-Associated Periodic Syndromes), causadas por mutações gain-of-function no gene NLRP3, que codifica a criopirina (componente do inflamassoma NLRP3).\n\n**Por que as outras estão erradas:**\n- **B. MVK** — Mutações no gene MVK causam a deficiência de mevalonato quinase (hiper-IgD), que se manifesta com febre periódica, linfadenopatia e rash, mas não com urticária ao frio nem surdez neurossensorial.\n- **C. MEFV** — Mutações no gene MEFV causam a febre familiar do Mediterrâneo, que se apresenta com serosite (peritonite, pleurite) e não com urticária ao frio ou perda auditiva.\n- **D. UBA1** — Mutações somáticas no gene UBA1 causam a síndrome VEXAS, que acomete homens adultos/idosos com vacuolização de precursores mieloides, não compatível com o quadro descrito."
  },
  {
    "pos": 33,
    "anulado": false,
    "enunciado": "Mulher, 61 anos, relata dor no quadril direito com piora progressiva há dois meses. Incapacitante, a dor é localizada na região anterior do quadril (virilha), piora com a deambulação e melhora parcialmente com o uso de tramadol. Tem antecedentes de “artrose” de mãos e joelhos e osteoporose, com uso regular de alendronato e carbonato de cálcio há sete anos. Ao exame, apresenta nódulos de Heberden e Bouchard, crepitação bilateral em joelhos, dor e discreta limitação da flexão do quadril direito. Os exames laboratoriais realizados mostram: A comparação das densitometrias ósseas (HOLOGIC®) realizadas e uma imagem da bacia são mostradas a seguir. \\*Densidade mineral óssea em g/cm2. Variação mínima significativa: L1-L4 1,5%; Fêmur total 2,5%. Entre as alternativas a seguir, qual recomendação de manejo é mais adequada?",
    "opcoes": {
      "A": "Ácido zoledrônico.",
      "B": "Haste intramedular.",
      "C": "Denosumabe.",
      "D": "Muleta canadense."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Haste intramedular. A paciente idosa com osteoporose em uso prolongado de alendronato (sete anos) apresenta dor incapacitante na virilha com alterações densitométricas e imagem compatível com fratura atípica de fêmur (fratura por insuficiência/estresse associada ao uso prolongado de bisfosfonatos). A haste intramedular profilática é indicada para prevenir a fratura completa, que é a complicação mais temida nesse cenário.\n\n**Por que as outras estão erradas:**\n- **A. Ácido zoledrônico** — Trocar um bisfosfonato por outro não é adequado; o bisfosfonato deve ser descontinuado em fraturas atípicas de fêmur.\n- **C. Denosumabe** — Embora seja antirreabsortivo, não resolve o problema mecânico da fratura atípica iminente/incompleta.\n- **D. Muleta canadense** — Embora reduza a carga, não é tratamento definitivo para uma fratura atípica de fêmur incompleta, que tem alto risco de progressão para fratura completa."
  },
  {
    "pos": 34,
    "anulado": false,
    "enunciado": "Homem, 65 anos, apresenta fraqueza progressiva nos últimos três anos, com dificuldade para se levantar do vaso sanitário e segurar objetos nas mãos. Nega dor articular, lesões cutâneas, disfagia ou dispneia. Ao exame, sem sinais de artrite ou instabilidade articular. Há redução da força de preensão palmar na mão direita, extensores do joelho esquerdo e dorsiflexores dos tornozelos. A força é normal na mão esquerda, abdutores dos ombros, flexores/extensores do pescoço, extensores do joelho direito, quadríceps e flexores plantares. A sensibilidade está preservada. Alguns exames laboratoriais são mostrados a seguir e uma biópsia muscular foi realizada. Iniciou tratamento com prednisona 1 mg/kg/dia há cerca de um mês e evolui com pouca ou nenhuma melhora do quadro. Entre as alternativas a seguir, qual achado mais provavelmente será evidenciado na biópsia muscular?",
    "opcoes": {
      "A": "Atrofia perifascicular com infiltrado de linfócitos CD8+.",
      "B": "Necrose com infiltrado de macrófagos CD68+.",
      "C": "Fibras musculares com depósitos amiloide e vacúolos com bordas.",
      "D": "Inflamação endomisial com infiltrado de linfócitos CD4+."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Fibras musculares com depósitos amiloide e vacúolos com bordas. O quadro descreve um homem de 65 anos com fraqueza progressiva assimétrica envolvendo preensão palmar, extensores do joelho e dorsiflexores — padrão clássico de miosite por corpos de inclusão (IBM). A distribuição assimétrica com acometimento preferencial de flexores dos dedos e quadríceps, a idade avançada e a refratariedade ao corticoide são achados característicos. A biópsia revela vacúolos com bordas (rimmed vacuoles) e depósitos de proteína amiloide.\n\n**Por que as outras estão erradas:**\n- **A. Atrofia perifascicular com infiltrado de linfócitos CD8+** — É achado típico de dermatomiosite, não de miosite por corpos de inclusão.\n- **B. Necrose com infiltrado de macrófagos CD68+** — É achado de miopatia necrotizante imunomediada (MNIM).\n- **D. Inflamação endomisial com infiltrado de linfócitos CD4+** — Embora IBM tenha inflamação endomisial, o infiltrado predominante é de CD8+, e o achado mais específico são os vacúolos com bordas e depósitos amiloides."
  },
  {
    "pos": 35,
    "anulado": false,
    "enunciado": "Mulher, 36 anos, tem diagnóstico de artrite reumatoide há 10 anos. Atualmente em uso de metotrexato 25 mg/semana e adalimumabe, realiza cinesioterapia (exercício resistido) duas a três vezes por semana. Apresenta dor e rigidez matinal em joelhos e punhos, pioradas há três semanas. Há sinovite em cotovelo direito, punhos e joelhos (com derrame articular moderado, crepitação e hipotrofia de quadríceps à direita). Uma mudança no tratamento farmacológico foi proposta, e a paciente questiona sobre a realização das atividades físicas. Entre as alternativas a seguir, qual recomendação acerca do exercício físico é mais adequada nesse momento?",
    "opcoes": {
      "A": "Indicar repouso relativo e suspender temporariamente os exercícios até que os sintomas diminuam.",
      "B": "Reduzir a intensidade do exercício, priorizar fortalecimento isométrico e manutenção da amplitude de movimento.",
      "C": "Manter a rotina de exercícios, realizar treino muscular isotônico para minimizar a perda de mobilidade articular.",
      "D": "Indicar mobilização articular passiva e o uso de analgésicos associados a exercício isocinético."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Reduzir a intensidade do exercício, priorizar fortalecimento isométrico e manutenção da amplitude de movimento. Em pacientes com artrite reumatoide em flare (atividade de doença com sinovite, derrame articular), a recomendação é adaptar o exercício — reduzindo intensidade — mas não suspendê-lo completamente. O fortalecimento isométrico é seguro por não sobrecarregar articulações inflamadas, e a manutenção da amplitude de movimento previne contraturas e rigidez.\n\n**Por que as outras estão erradas:**\n- **A. Repouso relativo e suspensão dos exercícios** — O repouso completo não é recomendado; pode levar à atrofia muscular e perda funcional.\n- **C. Manter a rotina de exercícios com treino isotônico** — Manter a mesma intensidade durante um flare pode agravar a inflamação articular.\n- **D. Mobilização passiva e exercício isocinético** — O exercício isocinético não é adequado durante flare por envolver movimentos dinâmicos com carga em articulações inflamadas."
  },
  {
    "pos": 36,
    "anulado": false,
    "enunciado": "Homem, 49 anos, busca pronto atendimento com queixa de inchaço e dormência no pé direito há um mês, com piora progressiva, dor, vermelhidão e calor locais há quatro dias. O quadro impede o uso de calçados e prejudica a deambulação. Nega febre ou outros sintomas. Tem diagnóstico de diabetes mellitus há oito anos, com uso irregular de metformina. Nega outras doenças e uso de álcool. Ao exame, IMC 32 kg/m2, temperatura axilar 37,5 °C, pressão arterial 130/80 mmHg, frequência cardíaca 77/min e frequência respiratória 18/min. Ausculta cardiopulmonar e abdome sem alterações. Há edema, eritema e calor local em dorso do pé direito, sem lesões cutâneas. Os pulsos pediosos e tibiais posteriores estão preservados bilateralmente e a sensibilidade à dor e ao tato está discretamente reduzida em ambos os pés. Uma redução do eritema no pé direito é observada após elevação da perna por cinco minutos. Os exames laboratoriais e imagens da radiografia do pé são mostrados abaixo. Dentre as opções a seguir, qual intervenção é a mais recomendada?",
    "opcoes": {
      "A": "Ciprofloxacino.",
      "B": "Artrodese cirúrgica.",
      "C": "Colchicina.",
      "D": "Gesso de contato total."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Gesso de contato total. O quadro descreve uma neuroartropatia de Charcot aguda (artropatia neuropática) em paciente diabético com neuropatia periférica. Os sinais incluem edema, eritema e calor no pé (que reduzem com elevação), ausência de lesão cutânea, pulsos preservados e achados radiográficos compatíveis. O gesso de contato total (TCC) é o tratamento padrão-ouro para a fase aguda da neuroartropatia de Charcot, pois promove imobilização e descarga do pé afetado.\n\n**Por que as outras estão erradas:**\n- **A. Ciprofloxacino** — Não há evidência de infecção (sem úlcera, sem febre alta, Gram não mencionado positivo); antibioticoterapia não é indicada.\n- **B. Artrodese cirúrgica** — Reservada para fases crônicas com deformidade grave; na fase aguda, o manejo é conservador.\n- **C. Colchicina** — Não há evidência de gota; o quadro é compatível com neuroartropatia de Charcot."
  },
  {
    "pos": 37,
    "anulado": false,
    "enunciado": "O ixequizumabe promove o bloqueio de citocina produzida majoritariamente por qual grupo de células?",
    "opcoes": {
      "A": "Células T que se diferenciam pela ativação do fator de transcrição GATA-3 induzida por sinalização via IL-2 e IL-4.",
      "B": "Células T que se diferenciam pela ativação de RORγt sob estímulo via IL-6 e TGF-β e amplificação por IL-21 e IL-23.",
      "C": "Células T que se diferenciam pela expressão de CD25 e Foxp3 mediante estímulo via sinalização por TGF-β e IL-2.",
      "D": "Células T que se diferenciam pela ativação do fator de transcrição T-bet induzida por sinalização via IFN-γ e IL-12."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Células T que se diferenciam pela ativação de RORγt sob estímulo via IL-6 e TGF-β e amplificação por IL-21 e IL-23. O ixequizumabe é um anticorpo monoclonal anti-IL-17A. A IL-17A é produzida majoritariamente pelas células Th17, que se diferenciam sob a influência de IL-6 e TGF-β, com o fator de transcrição RORγt, e são amplificadas por IL-21 e IL-23.\n\n**Por que as outras estão erradas:**\n- **A.** Descreve células Th2 (GATA-3, IL-4), que produzem IL-4, IL-5 e IL-13, não IL-17.\n- **C.** Descreve células T reguladoras (Foxp3, CD25, TGF-β/IL-2), que produzem IL-10 e TGF-β, não IL-17.\n- **D.** Descreve células Th1 (T-bet, IFN-γ/IL-12), que produzem IFN-γ e TNF, não IL-17."
  },
  {
    "pos": 38,
    "anulado": false,
    "enunciado": "Criança do sexo masculino, quatro anos de idade, é avaliada em pronto atendimento com febre (até 38,9 °C), taquicardia (FC: 145 bpm), exantema maculopapular não pruriginoso no tronco e extremidades, edema da conjuntiva bulbar bilateral, mucosite labial e orofaríngea, edema e eritema nas mãos e pés e linfadenomegalia (maior diâmetro: 3 cm) única, dolorosa, em cadeia cervical posterior à esquerda. O quadro teve início há 12 dias. A febre cessou há três dias, porém as demais alterações persistem. Um ecocardiograma mostrou diâmetro da coronária direita normal. Os exames laboratoriais realizados no pronto atendimento são mostrados abaixo. Considerando a hipótese diagnóstica mais provável e o curso evolutivo da doença nesse caso, qual o tratamento recomendado?",
    "opcoes": {
      "A": "Ciclosporina (5 mg/kg/dia) + prednisona (2 mg/kg/dia).",
      "B": "Prednisona (2 mg/kg/dia) + imunoglobulina intravenosa (2 g/Kg).",
      "C": "Imunoglobulina intravenosa (2 g/Kg) + aspirina (3 a 5 mg/kg/dia).",
      "D": "Aspirina (3 a 5 mg/kg/dia) + ciclosporina (5 mg/kg/dia)."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Imunoglobulina intravenosa (2 g/Kg) + aspirina (3 a 5 mg/kg/dia). O quadro é compatível com doença de Kawasaki (febre, exantema, conjuntivite, mucosite, edema de extremidades e linfadenopatia cervical em criança de 4 anos). Apesar de a febre ter cessado há 3 dias (fase subaguda), o tratamento padrão é IVIG (2 g/kg) associada a aspirina em dose anti-inflamatória (ou antiplaquetária na fase subaguda, 3-5 mg/kg/dia), mesmo que apresentação seja tardia, para reduzir o risco de aneurismas coronarianos.\n\n**Por que as outras estão erradas:**\n- **A. Ciclosporina + prednisona** — Não é o tratamento de primeira linha; reservado para casos refratários à IVIG.\n- **B. Prednisona + IVIG** — A adição de corticoide à IVIG pode ser considerada em pacientes de alto risco, mas a aspirina é parte fundamental do esquema padrão e não deve ser omitida.\n- **D. Aspirina + ciclosporina** — Não é o esquema padrão; a IVIG é o componente mais importante do tratamento inicial."
  },
  {
    "pos": 39,
    "anulado": false,
    "enunciado": "Homem, 63 anos, refere quadro progressivo de fadiga, artralgias em cotovelos e joelhos, mialgias difusas e febre baixa há cinco meses. Tem antecedente de insuficiência cardíaca e arritmia com uso regular de enalapril, carvedilol, furosemida e procainamida há dois anos. Apresenta erupção eritematosa em face, pescoço e membros superiores e traz exames complementares que mostram fator antinuclear (IFI-HEp2) reagente 1:160, padrão nuclear homogêneo (AC-8), com dosagem de C3 e C4 normais. Que autoanticorpo é mais esperado em associação ao quadro clínico-laboratorial?",
    "opcoes": {
      "A": "Anti-nucleossomo.",
      "B": "Anti-DFS70.",
      "C": "Anti-histona.",
      "D": "Anti-DNAds."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Anti-histona. O quadro descreve um paciente com uso prolongado de procainamida (droga classicamente associada ao lúpus induzido por drogas), que desenvolve artralgias, mialgias, febre, erupção cutânea e FAN positivo com padrão homogêneo, com complemento normal. O anti-histona é o autoanticorpo mais característico do lúpus induzido por drogas, presente em mais de 90% dos casos.\n\n**Por que as outras estão erradas:**\n- **A. Anti-nucleossomo** — Embora associado ao lúpus, é mais específico do LES idiopático com nefrite, não do lúpus induzido por drogas.\n- **B. Anti-DFS70** — É um anticorpo associado a indivíduos saudáveis com FAN positivo; não tem relação com lúpus induzido por drogas.\n- **D. Anti-DNAds** — É mais típico do LES idiopático e geralmente negativo no lúpus induzido por drogas; além disso, o complemento estaria consumido no LES ativo."
  },
  {
    "pos": 40,
    "anulado": false,
    "enunciado": "Homem, 58 anos, relata cervicobraquialgia com parestesia e dormência no membro superior direito há oito meses. A imagem de ressonância magnética da coluna cervical mostrada a seguir revelou anormalidade considerada compatível com os achados do exame físico. Imagem adaptada de: Hani M. Al Salam. Radiopaedia.org Das opções a seguir, que anormalidades ao exame físico serão mais provavelmente observadas nesse paciente?",
    "opcoes": {
      "A": "Dormência no aspecto lateral superior do braço, fraqueza para abdução do ombro, redução do reflexo bicipital.",
      "B": "Dor irradiada até o 1º e 2º quirodáctilos, fraqueza para extensão do punho, redução do reflexo braquiorradial.",
      "C": "Dormência no aspecto medial do antebraço até 4º e 5º quirodáctilos, fraqueza para flexão do 1º ao 3º quirodáctilo, reflexos preservados.",
      "D": "Dor irradiada até o 3º quirodáctilo, fraqueza para flexão do punho e extensão dos dedos, redução do reflexo tricipital."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Dor irradiada até o 1º e 2º quirodáctilos, fraqueza para extensão do punho, redução do reflexo braquiorradial. O quadro descreve cervicobraquialgia com parestesia no membro superior direito e achado na RM cervical compatível com radiculopatia de C6. A raiz C6 é responsável pela sensibilidade do 1º e 2º dedos (polegar e indicador), pela extensão do punho e pelo reflexo braquiorradial (estilorradial).\n\n**Por que as outras estão erradas:**\n- **A.** Descreve achados de radiculopatia de C5 (dermátomo do ombro lateral, abdução do ombro, reflexo bicipital).\n- **C.** Descreve achados mais compatíveis com radiculopatia de C8-T1 (aspecto medial do antebraço, flexão dos dedos).\n- **D.** Descreve achados de radiculopatia de C7 (irradiação para 3º dedo, flexão do punho/extensão dos dedos, reflexo tricipital)."
  },
  {
    "pos": 41,
    "anulado": false,
    "enunciado": "A via de sinalização JAK/STAT é essencial à homeostase imunológica e sua desregulação está associada a fenômenos de autoimunidade e ou à imunodeficiência. Dessa forma, é um alvo de interesse para modulação terapêutica. É um ligante que utiliza a via JAK/STAT para sua transdução de sinal:",
    "opcoes": {
      "A": "IL-1β.",
      "B": "IL-17A.",
      "C": "GM-CSF.",
      "D": "TNF-α."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** GM-CSF.\n\nO GM-CSF (fator estimulador de colônias de granulócitos e macrófagos) é uma citocina que sinaliza através de receptores do tipo I que utilizam a via JAK2/STAT5 para sua transdução de sinal. Esta via é um dos alvos dos inibidores de JAK (JAKinibs) usados em reumatologia.\n\n**Por que as outras estão erradas:**\n- **A. IL-1β** – Sinaliza através de receptores da família IL-1R, que utilizam a via MyD88/IRAK/NF-κB, e não a via JAK/STAT.\n- **B. IL-17A** – Sinaliza através do receptor IL-17RA/RC, ativando a via Act1/TRAF6/NF-κB, independente de JAK/STAT.\n- **D. TNF-α** – Sinaliza por receptores TNFR1/TNFR2, ativando vias NF-κB e MAPK, sem envolver JAK/STAT."
  },
  {
    "pos": 42,
    "anulado": false,
    "enunciado": "Mulher, 68 anos, fraturou duas costelas há 14 anos, ao cair de escada (6 degraus) e teve osteoporose diagnosticada por densitometria há seis anos. Foi tratada com ácido zoledrônico (ZOL, seis infusões anuais, a última realizada há 12 meses). Evolui sem novas fraturas e sem quedas no último ano. Os exames laboratoriais, incluindo cálcio, fósforo, fosfatase alcalina, função renal e 25-hidroxivitamina D séricos são normais. A radiografia da coluna vertebral não evidencia deformidades e os dados da densitometria óssea atual e daquela realizada há dois anos são mostrados a seguir. MVS (mínima variação significativa) para L1-L4=2%; Fêmur total=2,5%. Qual é a conduta mais recomendada?",
    "opcoes": {
      "A": "Manter infusão anual de ZOL (por até 10 anos).",
      "B": "Fazer pausa no tratamento (usualmente, por um a três anos).",
      "C": "Substituir ZOL por denosumabe (por até cinco a 10 anos).",
      "D": "Trocar ZOL por teriparatida (por dois anos)."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Fazer pausa no tratamento (usualmente, por um a três anos).\n\nPaciente com osteoporose tratada com ácido zoledrônico por seis anos, sem fraturas recentes, sem fraturas vertebrais e com exames laboratoriais normais, é candidata a \"drug holiday\" (pausa terapêutica). Após 3-6 anos de bisfosfonato endovenoso (ou 5-10 anos de oral), pacientes de menor risco podem realizar pausa de 1 a 3 anos, uma vez que o zoledronato tem longa meia-vida esquelética e mantém efeito residual.\n\n**Por que as outras estão erradas:**\n- **A. Manter infusão anual de ZOL (por até 10 anos)** – Não há indicação de prolongar para 10 anos em paciente sem alto risco (sem fraturas vertebrais, sem perda significativa de DMO).\n- **C. Substituir ZOL por denosumabe** – Não há falha terapêutica que justifique a troca; além disso, a descontinuação do denosumabe pode causar rebote de reabsorção.\n- **D. Trocar ZOL por teriparatida** – Teriparatida é reservada para pacientes de muito alto risco de fratura, o que não é o caso."
  },
  {
    "pos": 43,
    "anulado": false,
    "enunciado": "Homem, 65 anos, com osteoartrite de joelhos foi submetido à injeção intra-articular em joelho direito há três dias. Após o procedimento, vem apresentando dor intensa e edema no joelho tratado, impedindo a deambulação. Nova punção articular retirou 35 mL de fluido espesso, turvo e amarelado, com 13.000 leucócitos/mm³ (95% neutrófilos) e ausência de micro-organismos na coloração por Gram. A microscopia de luz polarizada mostrou numerosos cristais intra e extracelulares, pleomórficos, irregulares, alguns maiores que os leucócitos, com birrefringência positiva fortemente brilhante. Qual é a mais provável natureza dos cristais encontrados no líquido sinovial?",
    "opcoes": {
      "A": "Urato monossódico.",
      "B": "Pirofosfato de cálcio.",
      "C": "Corticosteroide.",
      "D": "Colesterol."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Corticosteroide.\n\nApós injeção intra-articular de corticosteroide, pode ocorrer sinovite reativa por cristais de corticosteroide (\"crystal flare\"). Os cristais de corticosteroide são caracteristicamente pleomórficos, irregulares, frequentemente maiores que os leucócitos, com birrefringência positiva fortemente brilhante à microscopia de luz polarizada. O quadro ocorreu três dias após a infiltração, o que é compatível com essa complicação.\n\n**Por que as outras estão erradas:**\n- **A. Urato monossódico** – Cristais de urato são em formato de agulha com birrefringência negativa forte, não pleomórficos.\n- **B. Pirofosfato de cálcio** – Cristais de PFC são romboides com birrefringência positiva fraca, não fortemente brilhante, e são menores.\n- **D. Colesterol** – Cristais de colesterol são placas retangulares com entalhe em degrau, tipicamente encontrados em derrames crônicos."
  },
  {
    "pos": 44,
    "anulado": false,
    "enunciado": "Homem, 44 anos, refere mialgia difusa e fraqueza, instalando-se ao longo de várias semanas há oito meses. Nega uso de medicamentos e queixa-se de disfagia para sólidos iniciada há três meses. Ao exame: força muscular proximal grau 3 (escala MRC - Medical Research Council). A eletromiografia mostrou padrão miopático e uma biópsia muscular revelou necrose e regeneração de fibras com alguns macrófagos e leve infiltrado linfocitário perivascular. Tomografias de tórax e abdome, ecocardiograma, endoscopia digestiva alta, colonoscopia e ecografia prostática resultaram normais. Exames laboratoriais iniciais mostram: Sem resposta significativa após seis semanas de uso de prednisona (1 mg/kg/dia) associada a metotrexato (20 mg/sem), foi tratada com imunoglobulina IV (2 g/kg) e evoluiu com progressiva melhora clínica e laboratorial. Em uso atual de metotrexato, está em desmame do corticoide. Das opções a seguir, que autoanticorpo está associado ao diagnóstico mais provável nesse caso?",
    "opcoes": {
      "A": "Anti-TIF-1γ.",
      "B": "Anti-SRP.",
      "C": "Anti-NXP-2.",
      "D": "Anti-HMGCR."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Anti-HMGCR.\n\nO quadro descreve uma miopatia necrosante imunomediada (MNIM): fraqueza proximal, CPK muito elevada, biópsia com necrose e regeneração de fibras com macrófagos e escasso infiltrado linfocitário, sem resposta a corticosteroide mas com boa resposta a imunoglobulina IV. O anticorpo anti-HMGCR (anti-3-hydroxy-3-methylglutaryl-CoA reductase) está associado à MNIM, podendo ocorrer mesmo sem exposição a estatinas.\n\n**Por que as outras estão erradas:**\n- **A. Anti-TIF-1γ** – Associado a dermatomiosite, especialmente com risco de neoplasia em adultos. Não se correlaciona com padrão necrosante.\n- **B. Anti-SRP** – Também associado a MNIM, porém tipicamente com quadro mais grave, com menor resposta a IGIV e sem a descrição de melhora progressiva como neste caso. Além disso, a biópsia com anti-SRP mostra necrose sem infiltrado inflamatório significativo.\n- **C. Anti-NXP-2** – Associado a dermatomiosite, com calcinose e risco de neoplasia, não a MNIM."
  },
  {
    "pos": 45,
    "anulado": false,
    "enunciado": "Homem, 69 anos, com osteoartrite de mãos e joelhos, foi submetido à paratireoidectomia (por adenoma funcionante) há cinco semanas. Há quatro semanas, apresenta artrite no punho esquerdo, com tenossinovite de extensores, além de artrite e derrame articular no joelho direito. Nega febre. Seu estado geral se encontra preservado. A artrocentese do joelho direito resultou na retirada de líquido turvo. A citologia do líquido sinovial contabilizou 40.000 leucócitos/mm3, com 75% de polimorfonucleares. A radiografia do punho esquerdo é vista nesta imagem: Adaptado de: Farooq S. Case study. Radiopaedia.org Que achado no líquido sinovial será mais consistente com a principal hipótese diagnóstica nesse caso?",
    "opcoes": {
      "A": "Imunocomplexos solúveis, contendo anticorpos direcionados contra a região Fc de imunoglobulinas G.",
      "B": "Cristais em agulha com birrefringência negativa à microscopia de luz polarizada compensada.",
      "C": "Cultura do líquido sinovial, mostrando o crescimento de microrganismos Gram-positivos.",
      "D": "Cristais romboides com fraca birrefringência positiva à microscopia de luz polarizada compensada."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Cristais romboides com fraca birrefringência positiva à microscopia de luz polarizada compensada.\n\nO paciente tem osteoartrite, história de hiperparatireoidismo (adenoma com paratireoidectomia recente), condrocalcinose radiográfica (calcificação no punho) e artrite aguda pós-cirúrgica. Após paratireoidectomia, a queda dos níveis de cálcio pode desencadear crises de pseudogota por cristais de pirofosfato de cálcio (PFC), que são romboides com fraca birrefringência positiva.\n\n**Por que as outras estão erradas:**\n- **A. Imunocomplexos solúveis (fator reumatoide)** – Não explica o quadro de artrite aguda com condrocalcinose pós-paratireoidectomia.\n- **B. Cristais em agulha com birrefringência negativa** – Descreve cristais de urato monossódico (gota), sem relação com o contexto clínico.\n- **C. Cultura positiva para Gram-positivos** – Artrite séptica é possível no diferencial, mas a condrocalcinose radiográfica e o contexto pós-paratireoidectomia favorecem pseudogota."
  },
  {
    "pos": 46,
    "anulado": false,
    "enunciado": "Mulher, 21 anos, apresenta dor, inchaço e calor local em algumas articulações metacarpofalangeanas e interfalangeanas proximais de ambas as mãos, punhos, cotovelo direito, joelho esquerdo e tornozelos. O quadro articular teve início há seis semanas, foi aditivo e acompanha-se de rigidez matinal (uma hora) e fadiga. Nega outras queixas. Os exames laboratoriais mostram: Considerando o diagnóstico mais provável, quais dos autoanticorpos a seguir indicam pior prognóstico?",
    "opcoes": {
      "A": "Anti-proteínas carbamiladas, anti-RA33.",
      "B": "Anti-RA33, anti-colágeno tipo II nativo.",
      "C": "Anti-colágeno tipo II nativo, anti-proteínas citrulinadas.",
      "D": "Anti-proteínas citrulinadas, anti-proteínas carbamiladas."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Anti-proteínas citrulinadas, anti-proteínas carbamiladas.\n\nEm paciente jovem com poliartrite simétrica de início recente e provável artrite reumatoide, os anticorpos anti-proteínas citrulinadas (anti-CCP/ACPA) e anti-proteínas carbamiladas (anti-CarP) são reconhecidos marcadores de pior prognóstico, associados a doença erosiva, progressão radiográfica mais rápida e manifestações extra-articulares.\n\n**Por que as outras estão erradas:**\n- **A. Anti-proteínas carbamiladas, anti-RA33** – Anti-RA33 (anti-hnRNP-A2) não é um marcador estabelecido de mau prognóstico na AR.\n- **B. Anti-RA33, anti-colágeno tipo II nativo** – Nenhum desses é marcador prognóstico robusto na AR.\n- **C. Anti-colágeno tipo II nativo, anti-proteínas citrulinadas** – Anti-colágeno tipo II não tem papel prognóstico bem definido na prática clínica."
  },
  {
    "pos": 47,
    "anulado": false,
    "enunciado": "Homem, 42 anos, tem diagnóstico de espondiloartrite axial há 10 anos. Apresentou falha terapêutica ao uso de anti-inflamatórios não hormonais. Iniciou uso regular de infliximabe há três meses, quando ASDAS-PCR era de 3,2. Atualmente, queixa-se de lombalgia agravada ao longo do dia, com rigidez matinal de 20 minutos. Ao exame, observam-se: dor à palpação paravertebral lombar bilateralmente e dor contralateral à flexão lateral da coluna; Schober de 3 cm; extensão lombar e manobras de rolamento de quadris e de Gaenslen bilateralmente não dolorosas. O ASDAS-PCR atual é 2,0 e a proteína C reativa é 5,1 mg/dL (valor de referência: até 5,0 mg/dL). Com relação ao tratamento farmacológico em curso, qual das condutas a seguir é mais apropriada nesse momento?",
    "opcoes": {
      "A": "Associar ciclobenzaprina.",
      "B": "Substituir por tofacitinibe.",
      "C": "Associar sulfassalazina.",
      "D": "Substituir por secuquinumabe."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Associar ciclobenzaprina.\n\nO paciente com espondiloartrite axial apresentou melhora clinicamente importante com infliximabe (ASDAS caiu de 3,2 para 2,0, representando melhora ≥ 1,1 pontos). O ASDAS atual de 2,0 situa-se na faixa de baixa atividade de doença. A dor residual com piora ao longo do dia e rigidez matinal curta (20 minutos) sugere componente mecânico/miofascial. Portanto, a conduta adequada é manter o biológico e associar ciclobenzaprina para o componente doloroso residual.\n\n**Por que as outras estão erradas:**\n- **B. Substituir por tofacitinibe** – Não há falha ao infliximabe (houve resposta significativa); tofacitinibe não é primeira linha nesse cenário.\n- **C. Associar sulfassalazina** – Sulfassalazina não tem eficácia comprovada no acometimento axial da espondiloartrite.\n- **D. Substituir por secuquinumabe** – Não há indicação de trocar, pois houve boa resposta ao anti-TNF."
  },
  {
    "pos": 48,
    "anulado": false,
    "enunciado": "Mulher, 29 anos, técnica de laboratório em microbiologia, apresenta, há quatro meses, lombalgia que a desperta de madrugada, intensificando-se ao longo do dia e com a mobilização de cargas. Refere ainda rigidez espinhal que se alivia apenas parcialmente, à tarde. Ao exame físico: dor lombar à flexão ventral, sem irradiação; amplitude de movimentos preservada nos planos sagital e coronal. Traz exames laboratoriais gerais normais, exceto por proteína C reativa de 18,2 mg/L (Valor de referência: < 5 mg/L), além das imagens mostradas a seguir. Considerando a principal hipótese diagnóstica, que resultado de exame complementar será mais provável?",
    "opcoes": {
      "A": "Genotipagem HLA-B27 por reação em cadeia de polimerase positiva.",
      "B": "Hemocultura com crescimento de cocobacilos gram-negativos, não esporulados.",
      "C": "Teste rápido molecular MTB/RIF positivo em amostra de biópsia vertebral.",
      "D": "Presença de células gigantes multinucleadas osteoclasto-símiles em biópsia vertebral."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Genotipagem HLA-B27 por reação em cadeia de polimerase positiva.\n\nMulher jovem, técnica de laboratório, com lombalgia inflamatória (desperta de madrugada, rigidez espinhal prolongada), PCR elevada e provável sacroiliíte em imagem sugere espondiloartrite axial. O HLA-B27 é o marcador genético mais fortemente associado à espondiloartrite axial e faz parte dos critérios ASAS.\n\n**Por que as outras estão erradas:**\n- **B. Hemocultura com cocobacilos gram-negativos** – Sugere brucelose; embora a paciente trabalhe em laboratório de microbiologia, o padrão inflamatório axial crônico com PCR elevada favorece espondiloartrite.\n- **C. Teste MTB/RIF positivo** – Tuberculose vertebral (mal de Pott) geralmente causa destruição vertebral localizada, não lombalgia inflamatória crônica bilateral.\n- **D. Células gigantes osteoclasto-símiles em biópsia** – Sugere tumor de células gigantes ósseo, incompatível com o quadro clínico descrito."
  },
  {
    "pos": 49,
    "anulado": false,
    "enunciado": "Homem, 45 anos, relata dor em coluna vertebral com rigidez matinal prolongada há 12 anos. Ao exame, observa-se limitação da amplitude de movimentos em coluna cervical e lombar. Os exames complementares incluem proteína C reativa 3,4 mg/dL (normal: < 0,5 mg/dL), HLA-B27 negativo e as radiografias mostram: (A) Frank Gaillard, Radiopaedia.org, rID: 7163 (B) Mohammad Amin, Radiopaedia.org, rID: 155003 Considerando o diagnóstico principal, quais marcadores genéticos são reconhecidos fatores de risco?",
    "opcoes": {
      "A": "IL23R, HLA-Cw0602.",
      "B": "HLA-Cw0602, HLA-B*0702.",
      "C": "HLA-B*0702, ERAP2.",
      "D": "ERAP2, IL23R."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** ERAP2, IL23R.\n\nO paciente apresenta espondiloartrite axial radiográfica (espondilite anquilosante), com lombalgia inflamatória de longa data, limitação axial e achados radiográficos compatíveis (sindesmófitos/anquilose). ERAP2 (aminopeptidase do retículo endoplasmático 2) e IL23R (receptor da interleucina 23) são fatores de risco genéticos bem estabelecidos para espondiloartrite axial, além do HLA-B27.\n\n**Por que as outras estão erradas:**\n- **A. IL23R, HLA-Cw0602** – HLA-Cw0602 está associado a psoríase cutânea, não especificamente a espondiloartrite axial.\n- **B. HLA-Cw0602, HLA-B*0702** – Esses alelos estão mais relacionados à psoríase e não são os principais fatores de risco para EA.\n- **C. HLA-B*0702, ERAP2** – HLA-B*0702 não é um fator de risco principal para espondiloartrite axial."
  },
  {
    "pos": 50,
    "anulado": false,
    "enunciado": "Homem, 43 anos, refere astenia, perda ponderal, febre não aferida e poliartralgia há um ano e meio. Há dois meses relata início de hiperemia ocular. Nega doenças prévias, exposições ambientais ou uso de medicamentos ou drogas. Ao exame: adenopatia cervical, axilar e inguinal (linfonodos de até 1 cm, fibroelásticos, indolores), dactilite em quarto dedo da mão direita. O restante do exame é normal. Os exames complementares disponíveis são mostram: Fonte: Wilcox A, et. al. Curr Opin Rheumatol. 2000;12(4):321-30. Uma avaliação oftalmológica foi solicitada. Que acometimento ocular é mais frequente nesse cenário?",
    "opcoes": {
      "A": "Ceratite ulcerativa.",
      "B": "Uveíte anterior.",
      "C": "Esclerite nodular.",
      "D": "Pars planitis."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Uveíte anterior.\n\nO quadro descrito (astenia, perda ponderal, febre, poliartralgia, adenopatia generalizada, dactilite e hiperemia ocular) é compatível com sarcoidose. A uveíte anterior é a manifestação ocular mais frequente da sarcoidose, ocorrendo em até 25-50% dos pacientes com envolvimento ocular.\n\n**Por que as outras estão erradas:**\n- **A. Ceratite ulcerativa** – Mais associada a artrite reumatoide e vasculites sistêmicas, não sendo a manifestação ocular típica da sarcoidose.\n- **C. Esclerite nodular** – Mais frequente em artrite reumatoide e granulomatose com poliangiíte, não na sarcoidose.\n- **D. Pars planitis** – É uma uveíte intermediária idiopática; embora sarcoidose possa causar uveíte intermediária, a uveíte anterior é significativamente mais comum."
  },
  {
    "pos": 51,
    "anulado": false,
    "enunciado": "Homem, 65 anos, apresenta, há sete semanas, dor em pescoço, ombros e quadris, pior na madrugada, com rigidez matinal de três horas e febre (até 38,3 °C). Tem histórico de migrânea. Relata cefaleia diária, bitemporal, com moscas volantes e cintilações visuais. Com falha a vários medicamentos antimigranosos, está em programação de uso de anti- CGRP (calcitonin gene related peptide). Ao exame: dor e limitação de amplitude aos movimentos ativos de ombros e quadris. A ultrassonografia revela: Artéria temporal esquerda (ramo parietal): espessamento médio-intimal de 0,32 mm (normal ≤ 0,30 mm), heterogêneo, assimétrico, hiperecoico. Artérias axilares: normal. Ombros: bursite subdeltoidea bilateral. Outros exames e o laudo da biópsia de artéria temporal são mostram: Considerando o diagnóstico mais provável, qual é o tratamento inicial recomendado?",
    "opcoes": {
      "A": "Prednisolona (20 mg/dia) em monoterapia.",
      "B": "Prednisona (30 mg/dia) + metotrexato (15 mg/semana).",
      "C": "Metilprednisolona (1 g/dia IV, três dias), seguida por prednisona (60 mg/dia).",
      "D": "Prednisona (80 mg/dia) + tocilizumabe (162 mg SC/semana)."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Prednisolona (20 mg/dia) em monoterapia.\n\nO paciente de 65 anos apresenta polimialgia reumática (dor em ombros e quadris, rigidez matinal prolongada, febre, bursite subdeltoidea bilateral). O espessamento médio-intimal da artéria temporal de 0,32 mm (limite superior 0,30 mm) é limítrofe, e a biópsia de artéria temporal deve ter sido negativa ou inespecífica. Na polimialgia reumática sem arterite de células gigantes confirmada e sem sintomas isquêmicos visuais, o tratamento inicial recomendado é prednisolona 12,5-25 mg/dia em monoterapia.\n\n**Por que as outras estão erradas:**\n- **B. Prednisona (30 mg/dia) + metotrexato** – Dose um pouco mais alta e adição de metotrexato não são necessários como terapia inicial na PMR sem complicações.\n- **C. Metilprednisolona (1 g/dia IV) seguida por prednisona (60 mg/dia)** – Essa dose é reservada para ACG com manifestações isquêmicas visuais, não para PMR isolada.\n- **D. Prednisona (80 mg/dia) + tocilizumabe** – Dose excessiva para PMR; tocilizumabe não é primeira linha na PMR."
  },
  {
    "pos": 52,
    "anulado": false,
    "enunciado": "Mulher, 48 anos, relata manchas nas mãos e dispneia progressiva há dois meses, associadas à fadiga intensa, febre baixa persistente e artralgias em mãos e joelhos. Ao exame, são observados rash macular em articulações interfalângicas, ulceração dolorosa em terceiro quirodáctilo direito, eritema palmar, discreto edema periungueal e alopecia, além de estertores finos bibasais. Os exames laboratoriais mostram: Dentre as opções a seguir, que autoanticorpo está associado ao diagnóstico mais provável nesse caso?",
    "opcoes": {
      "A": "Anti-SRP.",
      "B": "Anti-Mi-2.",
      "C": "Anti-MDA5.",
      "D": "Anti-TIF1-γ"
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Anti-MDA5.\n\nA paciente apresenta dermatomiosite amiopática ou hipomiopática com doença pulmonar intersticial rapidamente progressiva. As lesões cutâneas características incluem rash em articulações interfalângicas (pápulas de Gottron invertidas), ulceração digital, eritema palmar e edema periungueal. A associação de dermatomiosite com doença pulmonar intersticial grave e ulcerações cutâneas é altamente sugestiva do anticorpo anti-MDA5 (anti-melanoma differentiation-associated gene 5).\n\n**Por que as outras estão erradas:**\n- **A. Anti-SRP** – Associado a miopatia necrosante imunomediada, sem as lesões cutâneas de dermatomiosite.\n- **B. Anti-Mi-2** – Associado a dermatomiosite clássica com bom prognóstico, sem doença pulmonar intersticial significativa.\n- **D. Anti-TIF1-γ** – Associado a dermatomiosite com risco aumentado de neoplasia, não a doença pulmonar intersticial rapidamente progressiva."
  },
  {
    "pos": 53,
    "anulado": false,
    "enunciado": "Mulher, 45 anos, queixa-se de febre e dor nos joelhos e tornozelos há três semanas. Refere fadiga e mal-estar associados a suores noturnos. Ao exame, a temperatura é de 38,1 °C, a pressão arterial é de 123/56 mmHg, a frequência cardíaca é de 78 batimentos por minuto e a saturação de oxigênio é de 98% em ar ambiente. Limitação discreta da amplitude de movimentos em joelhos por dor. Os pulsos radiais presentes 1+, pulsos pediosos dorsais presentes 2+. Das opções a seguir, que intervenção terapêutica é mais indicada?",
    "opcoes": {
      "A": "Colchicina.",
      "B": "Prednisona.",
      "C": "Ceftriaxona.",
      "D": "Etanercepte."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Prednisona.\n\nO quadro clínico (febre, artralgia em joelhos e tornozelos, fadiga, suores noturnos, pulsos radiais diminuídos assimetricamente com pediosos normais) sugere arterite de Takayasu. A diminuição dos pulsos radiais (1+) comparada aos pulsos pediosos (2+) indica comprometimento de artérias de grande calibre dos membros superiores. O tratamento de primeira linha da arterite de Takayasu é corticosteroide (prednisona 1 mg/kg/dia).\n\n**Por que as outras estão erradas:**\n- **A. Colchicina** – Não é tratamento para vasculite de grandes vasos.\n- **C. Ceftriaxona** – Antibioticoterapia não é indicada neste contexto, sem evidência de infecção bacteriana.\n- **D. Etanercepte** – Anti-TNF pode ser usado como poupador de corticoide em casos refratários, mas não é primeira linha."
  },
  {
    "pos": 54,
    "anulado": false,
    "enunciado": "Menina, 12 anos de idade, 50 kg, apresenta dor e edema em punhos e joelho esquerdo, além de edema da terceira e quarta articulações interfalangeanas proximais há sete semanas. Nega febre, alterações mucocutâneas, cardiopulmonares, gastrointestinais ou neurológicas. Ao exame, o escore clínico de atividade de doença cJADAS10 é 13. Os exames laboratoriais disponíveis são mostrados a seguir. Qual a intervenção farmacológica inicial é mais recomendada?",
    "opcoes": {
      "A": "Prednisona 10 mg/dia + metotrexato oral 15 mg/semana.",
      "B": "Naproxeno 250 mg 12/12h + metotrexato subcutâneo 15 mg/semana.",
      "C": "Prednisona 10 mg/dia + leflunomida 20 mg/dia.",
      "D": "Naproxeno 250 mg 12/12h + etanercepte 50 mg/semana."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Naproxeno 250 mg 12/12h + metotrexato subcutâneo 15 mg/semana.\n\nMenina de 12 anos com artrite idiopática juvenil (AIJ) poliarticular (>4 articulações acometidas por >6 semanas), com cJADAS10 de 13 (atividade moderada a alta). O tratamento inicial recomendado inclui AINE (naproxeno) associado a metotrexato subcutâneo como DMARD de primeira linha. A via subcutânea tem melhor biodisponibilidade e tolerabilidade em crianças.\n\n**Por que as outras estão erradas:**\n- **A. Prednisona 10 mg/dia + metotrexato oral** – Corticosteroide sistêmico não é recomendado como primeira linha na AIJ; deve-se evitar seu uso prolongado em crianças. Metotrexato oral é inferior ao SC em biodisponibilidade.\n- **C. Prednisona 10 mg/dia + leflunomida** – Leflunomida não é primeira escolha na AIJ e corticosteroide sistêmico deve ser evitado.\n- **D. Naproxeno + etanercepte** – Biológico não é indicado como primeira linha; deve-se tentar metotrexato antes de escalar para biológico."
  },
  {
    "pos": 55,
    "anulado": false,
    "enunciado": "As deficiências congênitas e adquiridas e a inibição farmacológica do sistema complemento estão associadas a maior risco de infecções. Infecções recorrentes por Neisseria estão mais fortemente associadas à qual deficiência de complemento?",
    "opcoes": {
      "A": "C1.",
      "B": "C5.",
      "C": "C4.",
      "D": "C2."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** C5.\n\nAs deficiências dos componentes terminais do complemento (C5, C6, C7, C8 e C9), que formam o complexo de ataque à membrana (MAC), estão fortemente associadas a infecções recorrentes por Neisseria (meningococo e gonococo). O MAC é essencial para a lise de bactérias Gram-negativas com parede celular fina, como as espécies de Neisseria.\n\n**Por que as outras estão erradas:**\n- **A. C1** – A deficiência de C1 está mais associada ao lúpus eritematoso sistêmico e infecções por bactérias encapsuladas, não especificamente Neisseria.\n- **C. C4** – A deficiência de C4 está associada a doenças autoimunes (LES) e infecções por bactérias encapsuladas.\n- **D. C2** – A deficiência de C2 é a mais comum do complemento e está associada a LES e infecções por bactérias encapsuladas, não tipicamente Neisseria."
  },
  {
    "pos": 56,
    "anulado": false,
    "enunciado": "Mulher, 32 anos, previamente hígida, refere dor e inchaço nas articulações das mãos e punhos há cerca de três semanas, com rigidez matinal de 40 minutos. Relata odinofagia, tosse seca, cefaleia e mal-estar geral concomitantes ao início dos sintomas articulares. Professora do ensino fundamental, leciona para crianças de oito a 12 anos. O exame clínico é normal, exceto por dor em punhos, em segundas a quintas articulações metacarpofalângicas e em interfalângicas proximais bilateralmente, sem edema articular. Os exames laboratoriais mostram: Das opções a seguir, qual é o melhor próximo passo para o diagnóstico?",
    "opcoes": {
      "A": "Radiografia de mãos e punhos.",
      "B": "PCR para Chlamydia.",
      "C": "Ressonância magnética de mãos.",
      "D": "Sorologia para parvovírus B19."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Sorologia para parvovírus B19.\n\nMulher jovem, professora do ensino fundamental, apresenta poliartralgia simétrica de pequenas articulações das mãos (metacarpofalângicas e interfalângicas proximais) com sintomas prodrômicos virais (odinofagia, tosse seca, cefaleia, mal-estar), sem edema articular visível. O contato com crianças em idade escolar e o padrão articular (semelhante à artrite reumatoide) sugerem fortemente infecção por parvovírus B19, que causa artropatia em adultos, especialmente mulheres.\n\n**Por que as outras estão erradas:**\n- **A. Radiografia de mãos e punhos** – Improvável de mostrar alterações em quadro agudo de três semanas sem edema articular.\n- **B. PCR para Chlamydia** – Artrite reativa por Chlamydia geralmente é oligoarticular e assimétrica, de grandes articulações.\n- **C. Ressonância magnética de mãos** – Prematura neste momento; a investigação etiológica infecciosa é prioritária."
  },
  {
    "pos": 57,
    "anulado": false,
    "enunciado": "Homem, 59 anos, tem história de fratura de úmero após queda da própria altura há dois anos, tendo iniciado uso de ácido zoledrônico 5 mg IV anual (realizou duas infusões), carbonato de cálcio 500 mg/dia e colecalciferol 2000 U/dia. Sem fratura vertebral, tem antecedentes de câncer de cabeça e pescoço tratado com radioterapia há seis anos e acidente cerebrovascular isquêmico há um ano. Os exames laboratoriais, as últimas densitometrias e uma imagem do Vertebral Fracture Assessment – VFA são mostrados a seguir. Densitometrias ósseas: DMO = densidade mineral óssea; Mínima Variação Significativa (MVS): 0,030 g/cm2 para coluna lombar e 0,040 g/cm2 para fêmur total. Considerando o cenário apresentado, qual das opções de terapêutica medicamentosa a seguir é mais indicada nesse momento?",
    "opcoes": {
      "A": "Teriparatida.",
      "B": "Risedronato.",
      "C": "Denosumabe.",
      "D": "Romosozumabe."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Denosumabe.\n\nHomem com osteoporose, fratura prévia de úmero (alto risco), em uso de ácido zoledrônico por dois anos, com antecedente de câncer de cabeça e pescoço tratado com radioterapia (risco de osteonecrose de mandíbula, porém já completou tratamento) e AVC isquêmico recente. A imagem de VFA pode mostrar fratura vertebral incidente. Denosumabe é a opção mais adequada porque é eficaz em pacientes com alto risco de fratura e pode ser usado após bisfosfonato quando há necessidade de intensificar o tratamento.\n\n**Por que as outras estão erradas:**\n- **A. Teriparatida** – Embora seja osteoformador, a teriparatida tem limitação de uso por 2 anos e o denosumabe é preferível neste cenário com perda de DMO sob bisfosfonato.\n- **B. Risedronato** – Trocar de um bisfosfonato IV (mais potente) para um oral (menos potente) não seria adequado em paciente com fratura prévia e possível perda óssea.\n- **D. Romosozumabe** – Contraindicado em pacientes com antecedente de evento cardiovascular (AVC isquêmico há um ano) devido ao risco cardiovascular associado."
  },
  {
    "pos": 58,
    "anulado": false,
    "enunciado": "Homem, 45 anos, previamente hígido, queixa-se de dor, rubor e edema em orelha direita há 45 dias. Refere dor e inchaço em punhos e joelhos com início há duas semanas e que melhora parcialmente com anti-inflamatórios, além de olhos vermelhos com dor ocular na última semana. Paciente nega febre ou perda de peso. Os exames laboratoriais solicitados são normais. Considerando a principal hipótese diagnóstica, qual a complicação respiratória mais comum?",
    "opcoes": {
      "A": "Hemorragia alveolar.",
      "B": "Estenose traqueal.",
      "C": "Bronquiolite obliterante.",
      "D": "Pneumotórax espontâneo."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Estenose traqueal.\n\nO quadro clínico descreve policondrite recidivante: condrite auricular (dor, rubor e edema em orelha – poupando o lóbulo), poliartrite e episclerite/esclerite. A complicação respiratória mais comum da policondrite recidivante é a estenose traqueal e/ou dos brônquios principais, decorrente da inflamação e destruição das cartilagens das vias aéreas, podendo ser potencialmente fatal.\n\n**Por que as outras estão erradas:**\n- **A. Hemorragia alveolar** – É uma complicação de vasculites sistêmicas (como GPA, LES), não típica da policondrite recidivante.\n- **C. Bronquiolite obliterante** – Mais associada a transplante, artrite reumatoide ou infecções, não à policondrite.\n- **D. Pneumotórax espontâneo** – Não é uma complicação reconhecida da policondrite recidivante."
  },
  {
    "pos": 59,
    "anulado": false,
    "enunciado": "Homem, 28 anos, corredor de maratona, apresenta dor intensa e inchaço no joelho direito há três semanas, além de dor em tornozelos. Refere episódio de diarreia durante viagem há cerca de seis semanas. Ao exame físico, nota-se edema e calor em joelho direito e tornozelo esquerdo, com limitação dos movimentos. Realizou artrocentese de joelho direito e os resultados da sinovianálise e de outros exames laboratoriais são mostrados a seguir. Das opções seguintes, qual agente farmacológico é mais adequado para o caso?",
    "opcoes": {
      "A": "Cetoprofeno.",
      "B": "Metotrexato.",
      "C": "Ciprofloxacino.",
      "D": "Sulfassalazina."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Cetoprofeno.\n\nHomem jovem com oligoartrite assimétrica (joelho direito e tornozelo esquerdo) precedida por episódio de diarreia há seis semanas, configurando artrite reativa pós-entérica. A sinovianálise deve mostrar líquido inflamatório estéril. O tratamento de primeira linha da artrite reativa é com anti-inflamatórios não hormonais (AINHs), como o cetoprofeno, que proporciona alívio sintomático na maioria dos casos.\n\n**Por que as outras estão erradas:**\n- **B. Metotrexato** – Reservado para casos crônicos ou refratários ao tratamento inicial com AINHs.\n- **C. Ciprofloxacino** – Antibioticoterapia não é recomendada para artrite reativa pós-entérica, pois a articulação é estéril (processo imunomediado).\n- **D. Sulfassalazina** – Pode ser considerada em casos crônicos com acometimento articular periférico persistente, mas não é primeira linha."
  },
  {
    "pos": 60,
    "anulado": false,
    "enunciado": "Homem, 40 anos, tem lúpus eritematoso sistêmico há três anos, atualmente em uso de azatioprina 200 mg/dia e hidroxicloroquina 5 mg/kg/dia. Há três meses, queixa-se de dor em quadril esquerdo, com piora progressiva ao deambular e limitação funcional. Uma imagem de ressonância nuclear magnética é mostrada: Dentre as alternativas a seguir, qual intervenção é a mais indicada?",
    "opcoes": {
      "A": "Ácido zoledrônico.",
      "B": "Retirada da carga.",
      "C": "Ácido hialurônico intra-articular.",
      "D": "Triancinolona intra-articular."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Retirada da carga.\n\nPaciente com LES em uso de azatioprina e hidroxicloroquina, com dor progressiva em quadril esquerdo e imagem de ressonância magnética, apresenta osteonecrose (necrose avascular) da cabeça femoral, complicação conhecida do LES (relacionada ao uso de corticosteroides e à própria doença). Em estágios iniciais da osteonecrose (pré-colapso), a conduta mais indicada é a retirada da carga (uso de muletas) para prevenir o colapso da cabeça femoral.\n\n**Por que as outras estão erradas:**\n- **A. Ácido zoledrônico** – Bisfosfonatos não têm eficácia comprovada no tratamento da osteonecrose da cabeça femoral.\n- **C. Ácido hialurônico intra-articular** – Não trata a causa do problema (necrose óssea) e não é indicado neste cenário.\n- **D. Triancinolona intra-articular** – Corticosteroide intra-articular é contraindicado, pois o uso de corticosteroides é um fator de risco para a própria osteonecrose."
  },
  {
    "pos": 61,
    "anulado": false,
    "enunciado": "Mulher, 52 anos, tem artrite reumatoide há cinco anos, atualmente com bom controle de doença (CDAI=5) em uso de metotrexato (20 mg/semana) e rituximabe (última infusão há dois meses). Sem vacinação antipneumocócica prévia, deverá receber o imunizante. De acordo com as recomendações mais recentes do Colégio Americano de Reumatologia, qual estratégia é mais recomendada acerca da vacinação antipneumocócica nesse cenário?",
    "opcoes": {
      "A": "Vacinar e suspender o metotrexate por duas semanas após a vacinação.",
      "B": "Vacinar e suspender metotrexate por quatro semanas após a vacinação.",
      "C": "Vacinar após 4 meses e infundir rituximabe duas semanas após vacinação.",
      "D": "Vacinar e manter esquema posológico das medicações."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: B.** Vacinar e suspender metotrexato por quatro semanas apos a vacinacao. De acordo com as diretrizes do ACR (2022), em pacientes em uso de rituximabe, a vacinacao deve ser administrada idealmente antes da proxima infusao (nao ha necessidade de esperar 4 meses como na alternativa C). A recomendacao e suspender o metotrexato por 4 semanas apos a vacinacao para otimizar a resposta imunologica. O rituximabe nao precisa ser suspenso adicionalmente neste cenario.\n\n**Por que as outras estão erradas:**\n- **A.** A suspensao por apenas 2 semanas apos a vacinacao e insuficiente para maximizar a resposta vacinal segundo as recomendacoes do ACR, que preconizam 4 semanas de pausa do metotrexato.\n- **C.** Nao e necessario esperar 4 meses para vacinar; a vacinacao pode ser realizada a qualquer momento e a pausa recomendada refere-se ao metotrexato apos a vacina, nao ao rituximabe.\n- **D.** Manter o metotrexato sem interrupcao reduz significativamente a resposta imunologica a vacina antipneumococica, contrariando a recomendacao vigente."
  },
  {
    "pos": 62,
    "anulado": false,
    "enunciado": "Mulher, 67 anos, tem diagnóstico de artrite reumatoide há três anos e há um ano está em uso de tocilizumabe (8 mg/kg/mês) e metotrexato (20 mg/semana associado a ácido fólico 5 mg/semana), após resposta inadequada (falha secundária) a metotrexato e infliximabe. Tem antecedentes de diabetes mellitus tipo 2, hipertensão e dislipidemia, com uso de insulina, captopril, metoprolol, atorvastatina e omeprazol. Retorna em consulta de rotina, relatando fadiga progressiva há alguns meses e dor em mãos e joelhos. Ao exame, observa-se dor à palpação de punhos, sem sinovites ou outras anormalidades. Alguns exames laboratoriais são mostrados a seguir. Qual das seguintes é a causa mais provável da anemia?",
    "opcoes": {
      "A": "Inflamação.",
      "B": "Anticorpo antifator intrínseco.",
      "C": "Metotrexato.",
      "D": "Tocilizumabe."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Metotrexato. O tocilizumabe (anti-IL-6) suprime a PCR e os marcadores inflamatorios, portanto, se houvesse inflamacao ativa como causa da anemia, a PCR estaria elevada e nao suprimida. A anemia macrocitica (VCM elevado) com pancitopenia em paciente em uso de metotrexato e sugestiva de toxicidade medular pelo metotrexato, que atua como antagonista do folato.\n\n**Por que as outras estão erradas:**\n- **A.** A anemia de doenca cronica/inflamacao e tipicamente normocitica ou microcitica, e o tocilizumabe suprime os marcadores inflamatorios, tornando improvavel uma anemia inflamatoria significativa.\n- **B.** Embora anticorpo antifator intrinseco cause anemia megaloblastica, nao e a causa mais provavel em paciente usando metotrexato (um antifolato) que ja explica a macrocitoce.\n- **D.** O tocilizumabe pode causar neutropenia, mas anemia macrocitica nao e efeito tipico deste farmaco."
  },
  {
    "pos": 63,
    "anulado": false,
    "enunciado": "Homem, 68 anos, há três semanas apresenta dor em ombros, região cervical e quadris, associada à dificuldade para vestir-se e levantar-se da cama, fadiga, rigidez matinal (uma hora) e perda ponderal não mensurada. Tem diagnóstico de melanoma metastático, tendo iniciado uso de nivolumabe (anti-PD-1) há três meses. Ao exame físico, observa-se dor e limitação funcional em coluna cervical e ombros e sinovite em punhos e articulações metacarpofalangeanas bilateralmente. Os exames complementares são: Das opções a seguir, qual mecanismo está mais provavelmente relacionado às queixas musculoesqueléticas do paciente?",
    "opcoes": {
      "A": "Supressão de células T reguladoras (Treg).",
      "B": "Expansão de clones autorreativos de células T CD8+.",
      "C": "Ativação de células B com indução de resposta Th2.",
      "D": "Ativação de linfócitos T CD4+ e produção de citocinas inflamatórias."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: A.** Supressao de celulas T reguladoras (Treg). O nivolumabe e um inibidor de checkpoint imunologico (anti-PD-1) que causa eventos adversos imunomediados, incluindo manifestacoes reumatologicas semelhantes a polimialgia reumatica e artrite inflamatoria. O mecanismo principal e a supressao das celulas T reguladoras (Treg), que perdem sua capacidade de manter a tolerancia imunologica periferica, levando a autoimunidade.\n\n**Por que as outras estão erradas:**\n- **B.** A expansao de clones autorreativos de celulas T CD8+ e um mecanismo antitumoral, e nao o principal mecanismo das manifestacoes reumatologicas induzidas por anti-PD-1.\n- **C.** A ativacao de celulas B com resposta Th2 nao e o mecanismo predominante dos eventos adversos por inibidores de checkpoint; o eixo principal envolve celulas T.\n- **D.** Embora linfocitos T CD4+ participem, o mecanismo mais provavelmente relacionado e a perda da funcao regulatoria (Treg), nao simplesmente a ativacao de CD4+ efetoras."
  },
  {
    "pos": 64,
    "anulado": false,
    "enunciado": "Homem, 41 anos, maratonista, relata lombalgia há cinco anos com piora progressiva há quatro meses, atualmente impossibilitando treinos. Imagens da ressonância magnética são mostradas abaixo: Conforme os critérios vigentes, que anormalidade presente nessas imagens é mais relevante para o diagnóstico?",
    "opcoes": {
      "A": "Backfill.",
      "B": "Capsulite.",
      "C": "Erosões ósseas.",
      "D": "Edema de medula óssea."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Edema de medula ossea. No contexto de espondiloartrite axial, os criterios ASAS para sacroiliite ativa na ressonancia magnetica exigem a presenca de edema de medula ossea (osteite) nas articulacoes sacroiliacas em sequencias STIR ou T2 com supressao de gordura. Este e o achado mais relevante para o diagnostico de espondiloartrite axial nao radiografica.\n\n**Por que as outras estão erradas:**\n- **A.** Backfill (substituicao gordurosa pos-inflamatoria) e um achado estrutural cronico, nao e criterio primario para diagnostico ativo de sacroiliite por RM segundo os criterios ASAS.\n- **B.** Capsulite nao faz parte dos criterios de imagem de sacroiliite ativa na ressonancia magnetica conforme as definicoes ASAS.\n- **C.** Erosoes osseas sao achados estruturais que podem sugerir dano cronico, mas o edema de medula ossea e o achado obrigatorio e mais relevante para definir sacroiliite ativa por RM."
  },
  {
    "pos": 65,
    "anulado": false,
    "enunciado": "Mulher, 25 anos, refere fraqueza no pé direito e dor intensa em queimação na mão esquerda há quatro semanas. Nega febre, lesões cutâneas ou articulares. Tem diagnóstico de lúpus eritematoso sistêmico há três anos, em uso de hidroxicloroquina 5 mg/kg/dia. Ao exame físico, foi observada incapacidade para dorsiflexão do pé direito (força 1/5) e hipoestesia tátil na porção medial da mão esquerda. Os exames complementares mostram: Das opções a seguir, qual intervenção farmacológica é a mais recomendada?",
    "opcoes": {
      "A": "Rituximabe.",
      "B": "Ciclofosfamida.",
      "C": "Imunoglobulina IV.",
      "D": "Belimumabe."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Ciclofosfamida. O quadro descreve mononeurite multipla (pe caido por comprometimento do nervo fibular e hipoestesia medial da mao por lesao do nervo ulnar ou mediano) em paciente com LES, que configura neuropatia periferica grave. Para manifestacoes neuropsiquiatricas graves do LES, incluindo mononeurite multipla, a ciclofosfamida endovenosa associada a corticosteroide e o tratamento de primeira linha recomendado.\n\n**Por que as outras estão erradas:**\n- **A.** Rituximabe pode ser considerado em casos refratarios, mas nao e o tratamento de primeira linha para mononeurite multipla lupica.\n- **C.** Imunoglobulina IV pode ser usada como adjuvante, mas nao e primeira linha isoladamente para esta manifestacao grave do LES.\n- **D.** Belimumabe nao tem indicacao para manifestacoes neuropsiquiatricas graves do LES, sendo mais utilizado para doenca cutanea, articular e serologicamente ativa."
  },
  {
    "pos": 66,
    "anulado": false,
    "enunciado": "Mulher, 54 anos, refere palidez e cianose em mãos desencadeada pelo frio, associados a endurecimento da pele das mãos, braços, tronco e abdômen há oito meses. Relata ainda dificuldade para deglutir alimentos sólidos e perda de peso. A pressão arterial é 140x90 mm Hg e observa-se espessamento difuso da pele e cicatrizes em polpas digitais. O fator antinuclear (IFI-HEp2) é reagente, nuclear pontilhado grosso, 1/320 e uma tomografia computadorizada de tórax de alta resolução evidenciou a presença de nódulo espiculado com bordas irregulares, medindo 9 mm em ápice pulmonar direito, sem outras anormalidades. Dentre as opções abaixo, qual autoanticorpo é mais frequentemente associado ao quadro descrito?",
    "opcoes": {
      "A": "Anti-RNA polimerase III.",
      "B": "Anti-topoisomerase-1.",
      "C": "Anti-centrômero.",
      "D": "Anti-U3RNP."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Anti-RNA polimerase III. A paciente apresenta esclerose sistemica difusa (espessamento cutaneo em tronco, abdomen, bracos e maos) com fenomeno de Raynaud, disfagia e nodulo pulmonar espiculado sugestivo de neoplasia. O anticorpo anti-RNA polimerase III esta fortemente associado a esclerose sistemica difusa e, notavelmente, a risco aumentado de neoplasia concomitante (sindrome paraneoplasica), o que torna esta a associacao mais relevante neste cenario.\n\n**Por que as outras estão erradas:**\n- **B.** Anti-topoisomerase I (anti-Scl-70) esta associado a esclerose sistemica difusa com doenca pulmonar intersticial, mas nao tem a mesma associacao com neoplasia.\n- **C.** Anti-centromero e tipicamente associado a esclerose sistemica limitada (sindrome CREST), nao a forma difusa descrita.\n- **D.** Anti-U3RNP (anti-fibrilarina) e raro e associado a esclerose sistemica difusa com hipertensao pulmonar e envolvimento renal, mas nao tem a associacao com neoplasia como o anti-RNA polimerase III."
  },
  {
    "pos": 67,
    "anulado": false,
    "enunciado": "Mulher, 40 anos, há dois meses relata piora significativa de dor em punhos, articulações metacarpofalangeanas e joelhos, associada à rigidez matinal de 60 minutos e fadiga. Nega febre, suores noturnos, emagrecimento, tosse ou outras alterações. Tem diagnóstico de artrite reumatoide há cinco anos, atualmente em uso regular de leflunomida e prednisona 5 mg/dia. Mora com o pai que iniciou tratamento para tuberculose pulmonar há dois meses. Ao exame, há dor e edema em punhos, em segunda e terceira metacarpofalangeanas bilateralmente e em ambos os joelhos. Métricas: DAS28PCR=5,11; CDAI=30. Os exames disponíveis mostram: Dentre as opções a seguir, qual conduta medicamentosa é a mais indicada?",
    "opcoes": {
      "A": "Etanercepte doze semanas após iniciar curso de seis meses de isoniazida 300 mg/dia (180 doses diárias).",
      "B": "Adalimumabe quatro semanas após iniciar curso de três meses de rifapentina 900 mg + isoniazida 900 mg (12 doses semanais).",
      "C": "Tofacitinibe duas semanas após iniciar curso de quatro meses de rifampicina 600 mg/dia (120 doses diárias).",
      "D": "Tocilizumabe endovenoso associado a monitoração clínica mensal de sinais e sintomas."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Adalimumabe quatro semanas apos iniciar curso de tres meses de rifapentina 900 mg + isoniazida 900 mg (12 doses semanais). A paciente tem artrite reumatoide ativa (CDAI=30) e e contactante domiciliar de tuberculose ativa, necessitando de tratamento de infeccao latente antes de iniciar biologico. O regime 3HP (rifapentina + isoniazida semanal por 3 meses) e aceito e a recomendacao e iniciar o anti-TNF apos pelo menos 4 semanas de quimioprofilaxia.\n\n**Por que as outras estão erradas:**\n- **A.** Esperar 12 semanas para iniciar etanercepte com regime de 6 meses de isoniazida e excessivamente longo em paciente com doenca altamente ativa; o regime 3HP permite inicio mais precoce do biologico.\n- **C.** Tofacitinibe (JAKi) tambem requer quimioprofilaxia, mas rifampicina interage significativamente com inibidores de JAK (indutor potente de CYP3A4), e 2 semanas de tratamento antes do inicio e insuficiente.\n- **D.** Iniciar tocilizumabe sem quimioprofilaxia em contactante de tuberculose ativa e inadequado, pois o tocilizumabe pode mascarar sinais de tuberculose ao suprimir a PCR e a febre."
  },
  {
    "pos": 68,
    "anulado": false,
    "enunciado": "Homem, 55 anos, tem artrite reumatoide há 15 anos e atualmente está em uso regular de adalimumabe e metotrexato. Sem avaliação clínica há oito meses, retorna com dor e inchaço persistentes no joelho direito, com piora progressiva há quatro meses. Refere emagrecimento e episódios de febre, sem outras queixas. Ao exame, há edema, discreto aumento de temperatura e limitação da amplitude de movimento em joelho direito. As demais articulações não apresentam dor ou edema. A ultrassonografia articular revelou líquido livre em cavidade articular do joelho direito, importante hipertrofia sinovial e a presença de extenso edema de partes moles na topografia da bursa infrapatelar. Os resultados dos exames complementares são: Das opções a seguir, qual teste em líquido sinovial será mais útil para a elucidação diagnóstica?",
    "opcoes": {
      "A": "PCR para Mycobacterium tuberculosis.",
      "B": "PCR para Chlamydia trachomatis.",
      "C": "Bacterioscopia e cultura para aeróbio.",
      "D": "Antígeno Aspergillus galactomanana."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** PCR para Mycobacterium tuberculosis. O paciente com artrite reumatoide em uso de adalimumabe (anti-TNF) apresenta monoartrite cronica de joelho com febre e emagrecimento, sugestivos de artrite infecciosa. Em pacientes imunossuprimidos com anti-TNF, a tuberculose osteoarticular deve ser fortemente considerada. A PCR para Mycobacterium tuberculosis no liquido sinovial tem alta sensibilidade e permite diagnostico rapido.\n\n**Por que as outras estão erradas:**\n- **B.** PCR para Chlamydia trachomatis seria indicada em artrite reativa, mas o quadro clinico (monoartrite cronica, febre, emagrecimento em imunossuprimido) nao sugere artrite reativa.\n- **C.** Bacterioscopia e cultura para aerobios sao importantes, mas a artrite septica bacteriana tipica teria evolucao mais aguda; o quadro cronico com imunossupressao por anti-TNF aponta mais para tuberculose.\n- **D.** Antigeno galactomanana para Aspergillus e usado para infeccao fungica invasiva pulmonar e nao e o exame de escolha para investigacao de artrite em paciente com este perfil clinico."
  },
  {
    "pos": 69,
    "anulado": false,
    "enunciado": "Mulher, 35 anos, relata fraqueza e fadiga progressivas, perda de peso e náusea há três semanas. Etilista, tem diagnóstico de lúpus eritematoso sistêmico há seis anos, em uso de hidroxicloroquina e prednisona 5 mg/dia, e refere ter iniciado tratamento para tuberculose há dois meses (usa medicação regularmente, em acompanhamento em posto de saúde). Ao exame, apresenta-se emagrecida, IMC 18 Kg/m2, com pressão arterial de 90/50 mm Hg (em decúbito dorsal) e 60/40 mm Hg (em ortostatismo) e hiperpigmentação em cotovelos e pregas palmares. O restante do exame é normal. Das opções a seguir, qual o melhor próximo passo para investigação diagnóstica?",
    "opcoes": {
      "A": "Hemograma completo, ferro e capacidade de fixação do ferro.",
      "B": "Hemocultura para aeróbios e fungos.",
      "C": "Cortisol basal e após estímulo com ACTH.",
      "D": "Anti-DNAds, complemento C3 e C4 e Coombs indireto."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Cortisol basal e apos estimulo com ACTH. A paciente apresenta hipotensao ortostatica grave, fraqueza, nausea, perda de peso e hiperpigmentacao em cotovelos e pregas palmares, que sao sinais classicos de insuficiencia adrenal primaria (doenca de Addison). A rifampicina, usada no tratamento da tuberculose, pode precipitar crise adrenal por acelerar o metabolismo do cortisol (e da prednisona). Alem disso, o LES e o etilismo podem contribuir para insuficiencia adrenal. A dosagem de cortisol basal e o teste de estimulo com ACTH confirmam o diagnostico.\n\n**Por que as outras estão erradas:**\n- **A.** Hemograma e perfil de ferro investigam anemia ferropriva ou de doenca cronica, mas nao explicam hipotensao ortostatica grave e hiperpigmentacao.\n- **B.** Hemoculturas sao indicadas para sepse, mas a paciente nao apresenta febre e o quadro e mais compativel com insuficiencia adrenal.\n- **D.** Avaliar atividade lupica (anti-DNAds, complemento) nao explicaria a hiperpigmentacao nem a hipotensao ortostatica grave."
  },
  {
    "pos": 70,
    "anulado": false,
    "enunciado": "Mulher, 35 anos, internada há sete dias por broncopneumonia, foi transferida para unidade de cuidados críticos com quadro de oligúria e insuficiência respiratória aguda. Tem diagnóstico de lúpus eritematoso sistêmico há quatro anos (cutâneo-articular; renal; fator antinuclear pontilhado grosso, 1/640; hipocomplementemia; e anticorpo anticardiolipina IgG e IgM positivos), atualmente em uso regular de hidroxicloroquina 5 mg/kg/dia, azatioprina 100 mg/dia e AAS 100 mg/dia. Ao exame físico, está em mau estado geral e apresenta temperatura 37,8 °C, pressão arterial 90 x 50 mmHg, frequência cardíaca 110 bpm, frequência respiratória de 30 ipm, saturação de oxigênio 90% em ar ambiente. Presença de estertores finos em bases, edema, livedo e lesões purpúricas em membros inferiores. Sem alterações relevantes no restante do exame. Os exames complementares disponíveis são: Foi iniciada antibioticoterapia de amplo espectro. Dentre as opções a seguir, qual intervenção farmacológica é recomendada em primeira linha?",
    "opcoes": {
      "A": "Transfusão de plaquetas, plasma fresco e imunoglobulina intravenosa.",
      "B": "Heparina de baixo peso molecular, metilprednisolona e plasmaférese.",
      "C": "Hidrocortisona, rituximabe e plasmaférese.",
      "D": "Imunoglobulina intravenosa, metilprednisolona e eculizumabe."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Heparina de baixo peso molecular, metilprednisolona e plasmaferese. O quadro e compativel com sindrome antifosfolipide catastrofica (CAPS): paciente com LES, anticorpos antifosfolipides positivos, apresentando falencia multiorganica aguda (renal, pulmonar), livedo, purpura e trombocitopenia. O tratamento de primeira linha da CAPS inclui anticoagulacao (heparina), corticoterapia em altas doses (metilprednisolona em pulsoterapia) e plasmaferese.\n\n**Por que as outras estão erradas:**\n- **A.** Transfusao de plaquetas pode agravar a trombose em CAPS; plasma fresco isolado e imunoglobulina nao sao a primeira linha.\n- **C.** Hidrocortisona em dose de estresse e insuficiente; rituximabe nao e primeira linha na CAPS e demora para agir.\n- **D.** Eculizumabe e reservado para casos refratarios de CAPS, nao sendo tratamento de primeira linha."
  },
  {
    "pos": 71,
    "anulado": false,
    "enunciado": "Mulher, 73 anos, relata dor mecânica em quadris (mais intensa à direita) há cinco anos, com acompanhamento pelo ortopedista. A despeito do uso de analgésicos, anti- inflamatórios e fisioterapia, evolui com piora significativa da dor em quadril direito com importante limitação funcional nos últimos 12 meses, tendo sido indicada a artroplastia total (a cirurgia foi programada para ser realizada em duas semanas). Procura o reumatologista para uma segunda opinião. Os exames realizados e uma imagem da radiografia são: Dentre as alternativas a seguir, qual conduta é o próximo passo mais recomendado?",
    "opcoes": {
      "A": "Denosumabe.",
      "B": "Etidronato.",
      "C": "Colecalciferol.",
      "D": "Ácido zoledrônico."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Acido zoledronico. A paciente de 73 anos com osteoartrite grave de quadril direito indicada para artroplastia total apresenta, provavelmente, osteoporose ou alto risco de fratura periprotetica. O acido zoledronico (bisfosfonato endovenoso) e a escolha mais adequada antes da artroplastia, pois melhora a densidade ossea perirpotetica e reduz o risco de afrouxamento aseptico e fraturas periproteticas, alem de exigir apenas uma infusao anual.\n\n**Por que as outras estão erradas:**\n- **A.** Denosumabe, apesar de eficaz para osteoporose, apresenta risco de rebote de reabsorcao ossea com a descontinuacao e requer aplicacoes semestrais regulares, sendo menos ideal no perioperatorio.\n- **B.** Etidronato e um bisfosfonato de primeira geracao com baixa potencia antirreabsortiva, nao sendo mais recomendado como terapia de primeira linha para osteoporose.\n- **C.** Colecalciferol (vitamina D) e importante como suplementacao adjuvante, mas isoladamente nao e tratamento adequado para osteoporose em paciente com indicacao cirurgica iminente."
  },
  {
    "pos": 72,
    "anulado": false,
    "enunciado": "Mulher, 25 anos, procura atendimento médico por febre intermitente há dois meses, fadiga intensa e dores articulares em mãos, punhos e joelhos. Refere perda de peso de 5 Kg no período, queda de cabelo e surgimento de manchas avermelhadas nas pernas que pioram com o frio. Ao exame, observa-se úlcera oral, livedo reticular racemoso em membros inferiores e edema discreto em tornozelos. Os exames laboratoriais são: Considerando o diagnóstico mais provável, qual exame é mais indicado?",
    "opcoes": {
      "A": "Fator antinuclear.",
      "B": "ANCA.",
      "C": "Crioglobulinas.",
      "D": "Antifosfolípides."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Fator antinuclear. A paciente jovem apresenta febre, artralgia, queda de cabelo (alopecia), ulcera oral, livedo reticular racemoso, perda de peso e edema em tornozelos, que sao manifestacoes classicas de lupus eritematoso sistemico (LES). O fator antinuclear (FAN) e o exame de triagem mais indicado, sendo positivo em mais de 95% dos casos de LES e fazendo parte dos criterios classificatorios.\n\n**Por que as outras estão erradas:**\n- **B.** ANCA e marcador de vasculites associadas a ANCA (granulomatose com poliangiite, poliangiite microscopica), que nao se encaixam no quadro descrito.\n- **C.** Crioglobulinas podem causar purpura e livedo, mas o conjunto de manifestacoes (ulcera oral, alopecia, artralgia, febre em mulher jovem) aponta mais fortemente para LES.\n- **D.** Antifosfolipides podem estar presentes no LES, mas nao sao o exame de triagem inicial; o FAN e o primeiro passo diagnostico."
  },
  {
    "pos": 73,
    "anulado": false,
    "enunciado": "Conforme os critérios de Nova Iorque modificados (1984), os achados da radiografia acima são compatíveis com:",
    "opcoes": {
      "A": "Sacroiliíte Grau 1.",
      "B": "Sacroiliíte Grau 2.",
      "C": "Sacroiliíte Grau 3.",
      "D": "Sacroiliíte Grau 4."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Sacroiliite Grau 3. Conforme os criterios de Nova Iorque modificados (1984), a sacroiliite radiografica e graduada de 0 a 4: Grau 0 (normal), Grau 1 (alteracoes suspeitas), Grau 2 (esclerose com minima erosao), Grau 3 (erosoes evidentes com esclerose, alargamento ou estreitamento parcial do espaco articular) e Grau 4 (anquilose completa). A imagem descrita e compativel com grau 3, com erosoes definidas e alteracoes do espaco articular sem anquilose total.\n\n**Por que as outras estão erradas:**\n- **A.** Grau 1 representa apenas alteracoes suspeitas e inespecificas, incompativeis com erosoes evidentes.\n- **B.** Grau 2 mostra alteracoes minimas (pequenas erosoes e esclerose), sem as erosoes definidas e alargamento articular vistos na imagem.\n- **D.** Grau 4 corresponde a anquilose completa da articulacao sacroiliaca, que nao e o caso descrito."
  },
  {
    "pos": 74,
    "anulado": false,
    "enunciado": "Homem, 45 anos, refere congestão nasal, dor retro-orbitária e epistaxe recorrente nos últimos quatro meses. Relata ainda tosse seca, dispneia aos esforços e lesões hiperemiadas em membros inferiores. Há 15 dias, apresenta inchaço nas pernas, urina espumosa e redução do volume urinário. Ao exame físico: PA 150x90 mm Hg, palidez cutaneomucosa 1+/4+, crepitações em bases pulmonares, proptose à esquerda, púrpura palpável em membros inferiores, edema de membros inferiores +1/4+. Imagem da ressonância magnética realizada: Dentre as alternativas a seguir, qual achado laboratorial é mais provável?",
    "opcoes": {
      "A": "Níveis séricos elevados de subclasse IGG4.",
      "B": "Anticorpo anti-proteinase 3 reagente.",
      "C": "Concentrações aumentadas de enzima conversora de angiotensina.",
      "D": "Anticorpo anti-membrana basal glomerular reagente."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Anticorpo anti-proteinase 3 (anti-PR3) reagente. O quadro clinico descreve granulomatose com poliangiite (GPA, antiga Wegener): congestao nasal, epistaxe, massa retro-orbitaria (proptose), tosse seca, dispneia, purpura palpavel e glomerulonefrite rapidamente progressiva (urina espumosa, oliguria, edema). O c-ANCA/anti-PR3 esta presente em cerca de 90% dos casos de GPA com doenca generalizada.\n\n**Por que as outras estão erradas:**\n- **A.** IgG4 elevada ocorre na doenca relacionada a IgG4, que pode causar pseudotumor orbitario, mas nao causa tipicamente glomerulonefrite rapidamente progressiva com purpura palpavel.\n- **C.** ECA elevada sugere sarcoidose, que pode afetar pulmao e rim, mas nao apresenta tipicamente epistaxe recorrente, purpura palpavel e glomerulonefrite rapidamente progressiva.\n- **D.** Anti-membrana basal glomerular (anti-MBG) e encontrado na sindrome de Goodpasture, que causa hemorragia alveolar e glomerulonefrite, mas nao explica a massa retro-orbitaria e as manifestacoes de vias aereas superiores."
  },
  {
    "pos": 75,
    "anulado": false,
    "enunciado": "Mulher, 31 anos, tem história de febre persistente há duas semanas, dor articular e dispneia aos moderados esforços. Nega hipertensão, diabetes mellitus ou dislipidemia. Ao exame, apresenta bom estado geral; temperatura 37,8 °C; PA 120x80 mm Hg; ausculta pulmonar normal; sopro sistólico mitral (++/6+); livedo reticular racemoso; sem artrite. O eletrocardiograma é normal, e o ecocardiograma transesofágico mostra espessamento de valva mitral de 5 mm, com regurgitação leve. Outros exames são: Considerando a hipótese mais provável, qual exame é mais indicado para auxiliar o diagnóstico?",
    "opcoes": {
      "A": "Crioglobulinas.",
      "B": "Anti-estreptolisina O.",
      "C": "Hemoculturas seriadas.",
      "D": "Anticorpos antifosfolípides."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Anticorpos antifosfolipides. A paciente jovem apresenta febre, artralgia, livedo reticular racemoso e espessamento valvar mitral (endocardite de Libman-Sacks), que e uma manifestacao classica da sindrome antifosfolipide (SAF) ou do LES com anticorpos antifosfolipides. A vegetacao valvar nao infecciosa (Libman-Sacks) com espessamento de 5 mm e caracteristica. A pesquisa de anticorpos antifosfolipides e o exame mais indicado para confirmar a hipotese diagnostica.\n\n**Por que as outras estão erradas:**\n- **A.** Crioglobulinas causam vasculite e purpura, mas nao estao tipicamente associadas a endocardite valvar nao infecciosa.\n- **B.** Anti-estreptolisina O investigaria febre reumatica, mas esta causa cardite aguda com valvulite, nao espessamento valvar cronico com livedo racemoso em adulta jovem.\n- **C.** Hemoculturas seriadas investigam endocardite infecciosa, mas a apresentacao com livedo racemoso e espessamento valvar de 5 mm sem vegetacoes tipicas sugerem endocardite de Libman-Sacks."
  },
  {
    "pos": 76,
    "anulado": false,
    "enunciado": "Homem, 38 anos, procura pronto atendimento com dor intensa em joelho direito há cinco dias, de início súbito, acompanhada de edema, calor local e febre (38,5 °C). Nega trauma ou cirurgia recente. Tem antecedente de fibrilação atrial e diabetes mellitus com uso regular de warfarina e metformina. Ao exame físico, o joelho direito é muito doloroso, edemaciado, eritematoso e com reduzida amplitude de movimento. Presença de úlcera em segundo pododáctilo direito. Os exames laboratoriais iniciais são: Uma punção articular foi realizada e o material enviado para cultura. Dentre as alternativas a seguir, assinale o agente etiológico mais provável.",
    "opcoes": {
      "A": "Salmonella spp.",
      "B": "Streptococcus grupo B.",
      "C": "Proteus sp.",
      "D": "Haemophilus influenzae."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Streptococcus grupo B. O paciente e diabetico com ulcera em pe (porta de entrada cutanea), apresentando artrite septica aguda de joelho. O Streptococcus do grupo B (S. agalactiae) e o segundo agente mais comum de artrite septica em adultos (apos S. aureus) e tem especial prevalencia em pacientes diabeticos, sendo frequentemente associado a infeccoes de partes moles como porta de entrada.\n\n**Por que as outras estão erradas:**\n- **A.** Salmonella spp. e mais associada a artrite septica em pacientes com anemia falciforme ou imunossupressao grave, nao sendo o agente mais provavel neste cenario.\n- **C.** Proteus sp. e um agente menos comum de artrite septica, geralmente associado a infeccoes urinarias e nao a ulceras cutaneas em diabeticos.\n- **D.** Haemophilus influenzae e mais relevante em artrite septica pediatrica (antes da vacinacao) e raramente causa artrite septica em adultos."
  },
  {
    "pos": 77,
    "anulado": false,
    "enunciado": "Mulher, 72 anos, há oito anos queixa-se de dor em joelhos ao subir escadas e ao caminhar, com piora progressiva no último ano. Há 15 dias, apresentou piora significativa da dor, que agora aparece no repouso, se associa a inchaço em joelho direito e impossibilita a deambulação. Nega outros antecedentes ou trauma. Ao exame, bom estado geral, IMC 31 Kg/m2 e PA 120x80 mm Hg. Dor intensa à palpação do côndilo femoral medial do joelho direito, com edema e calor local e limitação da amplitude de movimento. Presença de crepitação em joelho esquerdo, sem dor ou edema. A radiografia de joelhos evidencia redução moderada do espaço articular medial, osteófitos e esclerose subcondral bilateral. Imagens da ressonância magnética do joelho direito: Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Pseudogota.",
      "B": "Osteonecrose.",
      "C": "Fratura subcondral.",
      "D": "Osteoartrite (flare)."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Fratura subcondral. A paciente idosa com osteoartrite cronica de joelhos apresenta piora subita e significativa da dor no joelho direito, agora em repouso, com edema e calor local. A ressonancia magnetica do joelho confirma o diagnostico. A fratura por insuficiencia subcondral (fratura subcondral) e uma complicacao conhecida da osteoartrite, caracterizada por dor subita intensa em pacientes com doenca previa, frequentemente no condilo femoral medial.\n\n**Por que as outras estão erradas:**\n- **A.** Pseudogota (condrocalcinose) pode causar crises agudas, mas o diagnostico definitivo requer identificacao de cristais de pirofosfato de calcio na sinovialise, e a RM mostraria achados diferentes.\n- **B.** Osteonecrose tem apresentacao semelhante, mas a fratura subcondral e mais comum em pacientes com osteoartrite previa e dor subita sobre o condilo femoral medial.\n- **D.** Osteoartrite em flare (piora aguda) nao explicaria os achados da RM com alteracao focal no condilo femoral medial."
  },
  {
    "pos": 78,
    "anulado": false,
    "enunciado": "Mulher, 75 anos, tem diagnóstico de lúpus eritematoso sistêmico com envolvimento renal há 15 anos. Evolui com bom controle de doença nos últimos anos, atualmente em uso de eritropoietina e azatioprina como terapia de manutenção. Apresentou artrite aguda em articulações metatarsofalângicas e joelho esquerdo há um mês (com presença de cristais birrefringentes em formato de agulha na sinovianálise), com melhora após uso de prednisona. Retorna em consulta, em uso de azatioprina 100 mg/dia, sem queixas. Há discreto edema em joelho esquerdo, e o restante do exame físico é normal. Os exames laboratoriais são: Dentre as opções a seguir, qual alternativa de manejo clínico é mais recomendada?",
    "opcoes": {
      "A": "Manter a azatioprina e adicionar alopurinol.",
      "B": "Reduzir a dose da azatioprina e adicionar febuxostate.",
      "C": "Substituir azatioprina por ciclosporina e iniciar benzobromarona.",
      "D": "Substituir azatioprina por micofenolato e adicionar alopurinol."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Substituir azatioprina por micofenolato e adicionar alopurinol. A paciente tem LES com nefrite em uso de azatioprina como manutencao e desenvolveu gota (cristais birrefringentes em formato de agulha). A azatioprina e metabolizada pela xantina oxidase, e o alopurinol (inibidor da xantina oxidase) tem interacao farmacologica grave com a azatioprina, causando mielossupressao potencialmente fatal. Portanto, e necessario substituir a azatioprina por micofenolato (que nao tem essa interacao) antes de iniciar alopurinol.\n\n**Por que as outras estão erradas:**\n- **A.** Manter azatioprina e adicionar alopurinol e contraindicado pela interacao grave entre esses farmacos, com risco de pancitopenia.\n- **B.** Mesmo com reducao da dose de azatioprina, a associacao com febuxostate (outro inibidor da xantina oxidase) tambem e contraindicada pela mesma interacao farmacologica.\n- **C.** Ciclosporina pode causar hiperuricemia e piorar a gota, sendo uma escolha inadequada; alem disso, benzobromarona e contraindicada em pacientes com insuficiencia renal."
  },
  {
    "pos": 79,
    "anulado": false,
    "enunciado": "Homem, 63 anos, apresenta dor e inchaço em tornozelos, joelhos e punhos há 30 dias. Tabagista, relata ainda tosse produtiva com hemoptoicos, fadiga, sudorese, dor na região distal das pernas e perda de peso. Ao exame físico, observa-se edema e dor à palpação de punhos, joelhos e tornozelos, com derrame em joelhos (mais importante à direita). A artrocentese do joelho direito revelou líquido claro, viscoso, com contagem de leucócitos de 400/mm³ e predomínio de mononucleares. A tomografia de tórax mostrou massa cavitada no lobo superior direito com espessamento pleural, além de linfadenopatia hilar e pequenos nódulos subpleurais homolaterais. Os exames laboratoriais e a radiografia das mãos são mostrados adiante: Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Granulomatose com poliangiíte.",
      "B": "Artrite reativa a tuberculose.",
      "C": "Sarcoidose.",
      "D": "Osteoartropatia hipertrófica."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Osteoartropatia hipertrofica. O paciente tabagista apresenta poliartralgia, derrame articular nao inflamatorio (400 leucocitos/mm3, predomonio de mononucleares), dor em pernas (periostite), massa pulmonar cavitada (neoplasia pulmonar provavel) e, provavelmente, baqueteamento digital na radiografia de maos. Este conjunto e classico de osteoartropatia hipertrofica (sindrome de Pierre-Marie-Bamberger), paraneoplasica, associada a neoplasia pulmonar.\n\n**Por que as outras estão erradas:**\n- **A.** Granulomatose com poliangiite pode causar nodulos e cavitacoes pulmonares, mas apresentaria liquido sinovial inflamatorio e manifestacoes de vias aereas superiores/glomerulonefrite.\n- **B.** Artrite reativa a tuberculose (Poncet) cursa com liquido inflamatorio e nao explica o derrame nao inflamatorio nem a massa cavitada com linfadenopatia hilar unilateral.\n- **C.** Sarcoidose pode causar linfadenopatia hilar e artrite, mas tipicamente apresenta linfadenopatia bilateral e nao massa cavitada; o liquido sinovial tambem seria inflamatorio."
  },
  {
    "pos": 80,
    "anulado": false,
    "enunciado": "Homem, 45 anos, corredor amador, apresenta dor em joelho esquerdo há dois meses. A dor piora após 10 a 15 minutos de corrida e ao descer escadas. Apresenta dor à palpação do epicôndilo lateral do fêmur esquerdo. Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Lesão meniscal lateral.",
      "B": "Tendinite da banda iliotibial.",
      "C": "Lesão do ligamento colateral.",
      "D": "Lesão osteocondral."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Tendinite da banda iliotibial (sindrome da banda iliotibial). O corredor amador apresenta dor lateral no joelho que piora apos 10-15 minutos de corrida e ao descer escadas, com dor a palpacao do epicondilo lateral do femur. Este e o quadro classico da sindrome da banda iliotibial, uma das causas mais comuns de dor lateral do joelho em corredores, causada pelo atrito repetitivo da banda iliotibial sobre o epicondilo lateral femoral.\n\n**Por que as outras estão erradas:**\n- **A.** Lesao meniscal lateral causaria dor na interlinha articular lateral, com possivel bloqueio articular e teste de McMurray positivo, nao dor localizada no epicondilo lateral.\n- **C.** Lesao do ligamento colateral lateral causaria instabilidade em varo e dor a estresse lateral, geralmente apos trauma, nao dor relacionada a corrida com localizacao no epicondilo.\n- **D.** Lesao osteocondral causaria dor articular difusa, possivel bloqueio e derrame, nao dor localizada especificamente no epicondilo lateral do femur."
  },
  {
    "pos": 81,
    "anulado": false,
    "enunciado": "Homem, 70 anos, diabético, apresenta dor intensa na região lateral do quadril esquerdo há uma semana, sem febre ou outros sintomas sistêmicos. Ao exame, IMC = 34,9 kg/m², dor à palpação do trocânter maior do fêmur esquerdo e à manobra de flexão, abdução e rotação externa do quadril esquerdo, sem limitação da amplitude de movimento. A radiografia do quadril mostra discreta redução do espaço femoroacetabular. Acerca do caso acima, qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Necrose avascular do quadril.",
      "B": "Osteoartrite coxofemoral.",
      "C": "Radiculopatia da raiz L2.",
      "D": "Bursite trocantérica."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Bursite trocantérica. O quadro clínico é clássico de síndrome dolorosa do trocânter maior (bursite trocantérica): dor localizada na região lateral do quadril, dor à palpação direta do trocânter maior e positividade da manobra de FABER (flexão, abdução e rotação externa), sem limitação real da amplitude de movimento articular. O paciente obeso e diabético tem fatores de risco adicionais para essa condição. A redução discreta do espaço articular na radiografia é um achado incidental compatível com coxartrose leve, mas não explica a apresentação clínica lateral.\n\n**Por que as outras estão erradas:**\n- **A. Necrose avascular do quadril** – Tipicamente apresenta dor na virilha (região inguinal) com limitação progressiva da amplitude de movimento, especialmente rotação interna. A localização lateral da dor e a ausência de limitação articular não favorecem esse diagnóstico.\n- **B. Osteoartrite coxofemoral** – Embora a radiografia mostre discreta redução do espaço articular, a dor da coxartrose é tipicamente inguinal/anterior e associada a limitação de movimento, não lateral sobre o trocânter.\n- **C. Radiculopatia da raiz L2** – Causaria dor referida na face anterior da coxa, geralmente com déficits sensitivos ou motores no dermátomo correspondente. Não justifica a dor pontual no trocânter maior."
  },
  {
    "pos": 82,
    "anulado": false,
    "enunciado": "A depleção de células da linhagem do linfócito B com rituximabe é uma estratégia terapêutica útil no tratamento da doença relacionada ao IgG4. Para que esse desfecho benéfico seja alcançado, qual subpopulação celular é depletada com essa medicação?",
    "opcoes": {
      "A": "Célula pró-B CD10+.",
      "B": "Plasmócitos CD138+ de vida longa.",
      "C": "Plasmablastos CD38+ de vida curta.",
      "D": "Macrófago M2 CD163+."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Plasmablastos CD38+ de vida curta. Na doença relacionada ao IgG4 (DR-IgG4), os plasmablastos circulantes CD38+ de vida curta são a população celular central na patogênese, sendo responsáveis pela produção ativa de IgG4. O rituximabe, anticorpo monoclonal anti-CD20, depleta linfócitos B CD20+, reduzindo a geração de novos plasmablastos. Os plasmablastos de vida curta, embora CD20-negativos, dependem continuamente da reposição a partir do pool de células B CD20+, o que explica a eficácia do rituximabe nessa doença.\n\n**Por que as outras estão erradas:**\n- **A. Célula pró-B CD10+** – São precursores imaturos na medula óssea e não têm papel significativo na patogênese da DR-IgG4.\n- **B. Plasmócitos CD138+ de vida longa** – Residem na medula óssea, são CD20-negativos e não são depletados pelo rituximabe. Se fossem os principais efetores, o rituximabe não seria eficaz.\n- **D. Macrófago M2 CD163+** – Não são células da linhagem B e não são alvo do rituximabe (anti-CD20)."
  },
  {
    "pos": 83,
    "anulado": false,
    "enunciado": "Mulher, 36 anos, tem diagnóstico de lúpus eritematoso sistêmico há oito meses, com envolvimento cutâneo, articular e renal (biópsia renal: glomerulonefrite proliferativa difusa -classe IV, índice de atividade 18/24, índice de cronicidade 3/12). Realizou pulsoterapia com metilprednisolona (500 mg, três dias) há seis meses e desde então faz uso regular de hidroxicloroquina 400 mg/dia, micofenolato de mofetila 3 g/dia, losartana 100 mg/dia e prednisona (dose atual 5 mg/dia). Tem boa adesão ao tratamento e retorna para avaliação de rotina, relatando discreto inchaço nas pernas, sem outras queixas. Ao exame, a pressão arterial é 120x80 mm Hg e há edema de membros inferiores 1+/4. Ausência de sinovite ou lesões cutâneas. Os exames realizados nos últimos meses são mostrados a seguir. Dentre as opções de tratamento farmacológico recomendadas pelo mais recente consenso da Sociedade Brasileira de Reumatologia, qual conduta é a mais indicada?",
    "opcoes": {
      "A": "Reduzir micofenolato para 1 g/dia e adicionar tacrolimus 4 mg/dia.",
      "B": "Descontinuar micofenolato e iniciar rituximabe 1 g D0 e D14 em monoterapia.",
      "C": "Seguir manutenção com micofenolato 2 g/dia.",
      "D": "Descontinuar micofenolato e iniciar belimumabe 10 mg/kg IV."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Reduzir micofenolato para 1 g/dia e adicionar tacrolimus 4 mg/dia. A paciente apresenta nefrite lúpica classe IV com resposta parcial ao micofenolato de mofetila (persistência de proteinúria significativa após seis meses de tratamento adequado). De acordo com o consenso mais recente da Sociedade Brasileira de Reumatologia, a terapia multialvo (multitarget therapy), que combina doses reduzidas de micofenolato com inibidor de calcineurina (tacrolimus), é a conduta indicada para pacientes com resposta parcial à indução com micofenolato, especialmente na nefrite classe IV.\n\n**Por que as outras estão erradas:**\n- **B. Descontinuar micofenolato e iniciar rituximabe em monoterapia** – O rituximabe pode ser utilizado em nefrite lúpica refratária, porém não é recomendado em monoterapia como primeira opção de resgate, e a descontinuação abrupta do micofenolato não é preconizada.\n- **C. Seguir manutenção com micofenolato 2 g/dia** – A paciente apresenta resposta parcial após seis meses com dose plena (3 g/dia), portanto simplesmente reduzir para dose de manutenção sem otimizar a terapia é insuficiente.\n- **D. Descontinuar micofenolato e iniciar belimumabe em monoterapia** – O belimumabe pode ser associado como adjuvante na nefrite lúpica, mas não é indicado em monoterapia substituindo o imunossupressor de base."
  },
  {
    "pos": 84,
    "anulado": false,
    "enunciado": "Homem, 52 anos, tem diagnóstico de artrite psoriásica há 10 anos (poliartrite, entesite e sacroiliíte), atualmente em uso de metotrexato oral 20 mg/semana associado a adalimumabe, iniciado há 12 meses. Há dois meses, refere aparecimento de novas lesões cutâneas (PASI = 10), dor e inchaço em terceiro dedo da mão direita e joelhos (DAPSA = 34. e dor lombar com rigidez matinal de uma hora que o incapacita para o trabalho. Os exames laboratoriais são normais, exceto por proteína C reativa de 32 mg/L (valor de referência < 5 mg/L) e velocidade de hemossedimentação de 41 mm (valor de referência < 20 mm/1ª hora). Uma mudança na estratégia foi realizada, e o adalimumabe será descontinuado. Conforme as recomendações vigentes de manejo, qual dos agentes farmacológicos listados é o mais apropriado nesse momento?",
    "opcoes": {
      "A": "Golimumabe.",
      "B": "Risanquizumabe.",
      "C": "Ustequinumabe.",
      "D": "Secuquinumabe."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Secuquinumabe. O paciente apresenta artrite psoriásica com envolvimento poliarticular, entesítico, cutâneo (PASI = 10), dactilite e axial, com falha ao adalimumabe (anti-TNF). O secuquinumabe (anti-IL-17A) é um agente biológico com evidência robusta de eficácia em todos esses domínios da artrite psoriásica, incluindo doença axial, e é recomendado como opção preferencial após falha a um primeiro anti-TNF conforme diretrizes vigentes (GRAPPA e SBR).\n\n**Por que as outras estão erradas:**\n- **A. Golimumabe** – É outro agente anti-TNF; trocar para um segundo anti-TNF após falha ao adalimumabe é uma opção menos recomendada do que mudar o mecanismo de ação, especialmente com doença ativa em múltiplos domínios.\n- **B. Risanquizumabe** – Anti-IL-23 com boa eficácia para psoríase cutânea e artrite periférica, mas sem evidência comprovada para doença axial, que é um domínio importante neste caso.\n- **C. Ustequinumabe** – Anti-IL-12/23 que, embora aprovado para artrite psoriásica, não demonstrou eficácia no componente axial e possui eficácia articular comparativamente inferior."
  },
  {
    "pos": 85,
    "anulado": false,
    "enunciado": "Homem, 38 anos, é avaliado em pronto atendimento com história de febre e episódios recorrentes de cefaleia associados à visão turva, por vezes dupla, há cerca de um mês. Refere úlceras orais dolorosas e máculas eritematosas nos membros inferiores de aparecimento ocasional e de resolução espontânea. Ao exame físico, nota-se nodulações eritematosas dolorosas em membros inferiores. O exame neurológico é normal, exceto por discreta rigidez nucal. Os resultados de exames complementares, incluindo uma punção liquórica realizada após exame de imagem do neuroeixo, são mostrados adiante. Dentre as alternativas a seguir, qual achado adicional no estudo do líquor é mais provável?",
    "opcoes": {
      "A": "Níveis elevados de IL-6.",
      "B": "Aumento da concentração da enzima conversora de angiotensina.",
      "C": "Intensa atipia celular com mononucleares multinucleados.",
      "D": "Níveis elevados de adenosina deaminase."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Níveis elevados de IL-6. O quadro clínico é altamente sugestivo de doença de Behçet com envolvimento neurológico (neuro-Behçet): homem jovem com úlceras orais recorrentes, eritema nodoso em membros inferiores, cefaleia, alterações visuais e rigidez nucal. Na neuro-Behçet parenquimatosa e meníngea, a IL-6 no líquor está caracteristicamente elevada e é um biomarcador útil para diagnóstico e monitoramento da atividade da doença.\n\n**Por que as outras estão erradas:**\n- **B. Aumento da enzima conversora de angiotensina** – Achado típico da neurossarcoidose, não da doença de Behçet.\n- **C. Intensa atipia celular com mononucleares multinucleados** – Sugere processo neoplásico (linfoma do SNC) ou infecção granulomatosa, não sendo característica do neuro-Behçet.\n- **D. Níveis elevados de adenosina deaminase (ADA)** – Achado clássico da meningite tuberculosa, não da doença de Behçet."
  },
  {
    "pos": 86,
    "anulado": false,
    "enunciado": "Mulher, 62 anos, refere lombalgia há dois anos com piora há dois meses, associada à irradiação para nádegas e raiz de coxas e rigidez matinal de 15 minutos. A dor piora ao final do dia e prejudica a deambulação e as atividades diárias. Relata que atualmente tem dor persistente, especialmente para sair da cama pela manhã e após períodos prolongados em posição sentada. Fez uso de diversos cursos de anti-inflamatórios e analgésicos, com melhora parcial e transitória. Ao exame físico, apresenta dor à extensão da coluna lombar. Os exames laboratoriais mais recentes e uma imagem da coluna são mostrados a seguir. Dentre as alternativas a seguir, qual o tratamento mais adequado?",
    "opcoes": {
      "A": "Ablação por radiofrequência do ramo medial da raiz dorsal.",
      "B": "Abordagem cirúrgica com artrodese para fixação vertebral.",
      "C": "Infiltração peridural com corticoide guiada por imagem.",
      "D": "Repouso e colete tipo Putti por período de sete dias."
    },
    "correta": "A",
    "explicacao": "**Resposta correta: A.** Ablação por radiofrequência do ramo medial da raiz dorsal. A paciente de 62 anos apresenta lombalgia crônica com características mecânicas (piora ao final do dia, dor à extensão da coluna), rigidez matinal breve (15 minutos) e refratariedade a analgésicos e AINEs. O quadro é compatível com dor facetária lombar (síndrome facetária). A ablação por radiofrequência do ramo medial do nervo dorsal é o tratamento indicado para lombalgia crônica de origem facetária refratária ao tratamento conservador, com evidência de eficácia sustentada.\n\n**Por que as outras estão erradas:**\n- **B. Artrodese para fixação vertebral** – Abordagem cirúrgica invasiva reservada para instabilidade vertebral significativa ou casos muito selecionados; não é primeira indicação para dor facetária.\n- **C. Infiltração peridural com corticoide** – Indicada principalmente para radiculopatia com compressão neural, não para dor facetária.\n- **D. Repouso e colete tipo Putti** – Repouso prolongado e imobilização não são recomendados para lombalgia crônica e podem agravar o quadro."
  },
  {
    "pos": 87,
    "anulado": false,
    "enunciado": "Mulher, 32 anos, refere dor na região radial do punho direito há duas semanas. Primípara, teve parto vaginal sem complicações há três meses. Ao exame, observa-se dor à palpação na região do processo estiloide do rádio e dor intensa à manobra de realizar o desvio ulnar forçado do punho com o polegar aduzido. Para o manejo do caso, qual o tratamento de primeira linha?",
    "opcoes": {
      "A": "Fonoforese com aplicação local de corticoide em creme.",
      "B": "Injeção com corticoide no segundo compartimento extensor.",
      "C": "Órtese para manter o punho em leve extensão e o polegar abduzido.",
      "D": "Cirurgia para liberar a bainha retinacular estenótica."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Órtese para manter o punho em leve extensão e o polegar abduzido. O quadro clínico é clássico de tenossinovite de De Quervain: dor na região do processo estiloide radial com manobra de Finkelstein positiva (desvio ulnar forçado com polegar aduzido), em mulher no pós-parto recente. A primeira linha de tratamento é conservadora, com uso de órtese (splint) que imobiliza o punho e o polegar, associada a medidas de repouso e analgesia.\n\n**Por que as outras estão erradas:**\n- **A. Fonoforese com corticoide em creme** – Não há evidência robusta de eficácia para essa modalidade no tratamento da tenossinovite de De Quervain.\n- **B. Injeção com corticoide no segundo compartimento extensor** – A tenossinovite de De Quervain acomete o primeiro compartimento extensor (abdutor longo e extensor curto do polegar), não o segundo; além disso, infiltração é segunda linha.\n- **D. Cirurgia para liberar a bainha retinacular** – Reservada para casos refratários ao tratamento conservador, não é primeira linha."
  },
  {
    "pos": 88,
    "anulado": false,
    "enunciado": "Homem, 69 anos, ex-tabagista, tem diagnóstico de artrite reumatoide há 15 anos. Atualmente, refere dor e inchaço em punhos e articulações metacarpofalângicas com rigidez matinal superior a uma hora. Relata dispneia progressiva aos médios e pequenos esforços de início há dois anos. Ao exame, apresenta dor e edema em punhos e crepitações pulmonares bibasais. Uma prova de função pulmonar revelou distúrbio ventilatório restritivo de grau moderado com medida da difusão do monóxido de carbono moderadamente reduzida. Os exames laboratoriais e imagens da tomografia de tórax em alta resolução são mostrados adiante. Dentre as opções a seguir, qual agente farmacológico deve ser preferencialmente recomendado?",
    "opcoes": {
      "A": "Tocilizumabe.",
      "B": "Rituximabe.",
      "C": "Metilprednisolona.",
      "D": "Ciclosporina."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Rituximabe. O paciente apresenta artrite reumatoide de longa data com doença articular ativa e doença pulmonar intersticial (DPI) associada, evidenciada por dispneia progressiva, crepitações bibasais, padrão restritivo na prova de função pulmonar e redução da DLCO. Entre os agentes biológicos, o rituximabe é o mais recomendado para pacientes com AR e DPI concomitante, pois possui o melhor perfil de segurança pulmonar e evidências de estabilização ou melhora da função pulmonar.\n\n**Por que as outras estão erradas:**\n- **A. Tocilizumabe** – Embora eficaz para AR, há preocupações quanto à segurança pulmonar, e não é a primeira escolha em pacientes com DPI significativa associada à AR.\n- **C. Metilprednisolona** – Corticoides em altas doses podem ser usados em exacerbações agudas da DPI, mas não representam terapia de manutenção para controle da doença articular e pulmonar.\n- **D. Ciclosporina** – Não é tratamento de primeira escolha para AR com DPI; possui perfil de toxicidade desfavorável (nefrotoxicidade, hipertensão) e eficácia limitada nesse contexto."
  },
  {
    "pos": 89,
    "anulado": false,
    "enunciado": "Mulher, 45 anos, com diagnóstico de fibromialgia iniciou uso de pregabalina 75 mg/noite há 14 dias, tendo aumentado dose para 150 mg/dia há cinco dias. Evolui com redução discreta da dor difusa e queixa-se de boca seca. Considerando o mecanismo de ação e a farmacocinética da pregabalina, qual a estratégia mais recomendada nesse momento?",
    "opcoes": {
      "A": "Manter dose, minimizando risco de tolerância.",
      "B": "Aumentar dose, considerando alta biodisponibilidade e farmacocinética linear.",
      "C": "Trocar por duloxetina, uma vez que houve falha ao tratamento.",
      "D": "Reduzir dose para 50 mg, reforçando a necessidade de atividade física."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Aumentar dose, considerando alta biodisponibilidade e farmacocinética linear. A pregabalina possui farmacocinética linear e alta biodisponibilidade oral (>90%), permitindo titulação previsível da dose. Com apenas 14 dias de uso e resposta parcial (discreta redução da dor), a conduta adequada é aumentar progressivamente a dose, já que a dose atual (150 mg/dia) está abaixo da dose terapêutica ótima (300-450 mg/dia). O efeito colateral relatado (boca seca) é leve e esperado.\n\n**Por que as outras estão erradas:**\n- **A. Manter dose minimizando risco de tolerância** – A dose de 150 mg/dia é subterapêutica para fibromialgia; manter sem titular não otimiza o benefício. Tolerância farmacológica não é a principal preocupação nessa fase.\n- **C. Trocar por duloxetina por falha terapêutica** – Não houve falha ao tratamento; o tempo de uso é curto e a dose não foi titulada até a faixa terapêutica plena. Trocar prematuramente seria inadequado.\n- **D. Reduzir dose para 50 mg** – Reduzir a dose quando há resposta parcial e tolerabilidade aceitável é contraproducente; a direção correta é titular para cima."
  },
  {
    "pos": 90,
    "anulado": false,
    "enunciado": "Homem, 54 anos, relata artralgia em punhos, segundas e terceiras articulações metacarpofalângicas, tornozelos e joelhos, associada à fadiga. Apresenta limitação para flexão completa do indicador e dedo médio, bilateralmente. Uma imagem da radiografia de mãos é mostrada: Dentre as opções a seguir, qual exame complementar é mais recomendado para investigação diagnóstica?",
    "opcoes": {
      "A": "Anti-CCP.",
      "B": "VDRL.",
      "C": "Ferritina.",
      "D": "Enzima conversora da angiotensina."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Ferritina. O quadro clínico é sugestivo de hemocromatose hereditária: homem de meia-idade com artralgia em punhos e metacarpofalângicas (sobretudo 2ª e 3ª), padrão radiográfico compatível (artropatia com condrocalcinose e alterações em ganchos nas MCFs), e limitação da flexão dos dedos. A hemocromatose é a causa clássica de artropatia com envolvimento das 2ª e 3ª MCFs, e a ferritina sérica é o exame de rastreio mais recomendado para investigação inicial.\n\n**Por que as outras estão erradas:**\n- **A. Anti-CCP** – Marcador de artrite reumatoide. Embora a artropatia da hemocromatose possa mimetizar AR, o padrão de acometimento das 2ª e 3ª MCFs com achados radiográficos típicos aponta para hemocromatose.\n- **B. VDRL** – Teste para sífilis, que não cursa com esse padrão articular característico.\n- **D. Enzima conversora da angiotensina** – Marcador de sarcoidose; não se aplica a esse quadro articular."
  },
  {
    "pos": 91,
    "anulado": false,
    "enunciado": "Mulher, 38 anos, relata mialgia, artralgia, fadiga, xerostomia, xeroftalmia e aumento bilateral e simétrico das glândulas salivares há três meses. A avaliação clínica demonstrou teste de Schirmer maior que 10 mm bilateralmente e fluxo salivar de 0,09 mL/min. Os exames complementares são mostrados a seguir. Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Doença de Sjögren.",
      "B": "Doença relacionada a IgG4.",
      "C": "Sialoadenite linfocítica difusa secundária ao HIV.",
      "D": "Linfoma de células T."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Sialoadenite linfocítica difusa secundária ao HIV (SLID/DILS). O quadro de aumento bilateral e simétrico das glândulas salivares com xerostomia, xeroftalmia e sintomas articulares mimetiza a síndrome de Sjögren, mas o teste de Schirmer normal (>10 mm) e o fluxo salivar apenas discretamente reduzido, combinados com os dados dos exames complementares (provavelmente sorologias compatíveis com HIV e CD8 elevado), apontam para a síndrome linfocítica infiltrativa difusa associada ao HIV (DILS). Essa condição é caracterizada por infiltração CD8+ das glândulas salivares.\n\n**Por que as outras estão erradas:**\n- **A. Doença de Sjögren** – Esperaríamos teste de Schirmer anormal (<5 mm), anticorpos anti-SSA/SSB positivos e biópsia com infiltrado linfocítico focal CD4+. O Schirmer normal torna Sjögren menos provável.\n- **B. Doença relacionada a IgG4** – Cursa com aumento glandular, porém tipicamente com níveis elevados de IgG4 sérica e infiltrado plasmocítico rico em IgG4, com padrão histológico distinto.\n- **D. Linfoma de células T** – Embora possa causar aumento glandular, é tipicamente assimétrico e não cursa com esse quadro sistêmico de sicca."
  },
  {
    "pos": 92,
    "anulado": false,
    "enunciado": "Mulher, 35 anos, tem lúpus eritematoso sistêmico (Fator antinuclear Reagente, padrão AC- 4/AC-5, > 1/1280, anti-SSA/Ro > 240 U/mL), atualmente em remissão, em uso regular de hidroxicloroquina. Está na 24ª semana da gestação (G2P1A0) e o ecocardiograma fetal seriado evidenciou bloqueio cardíaco fetal de segundo grau. Gestação prévia há três anos evoluiu com bloqueio cardíaco fetal do terceiro grau e necessidade de marcapasso definitivo ao nascimento. Dentre as opções a seguir e conforme as mais recentes recomendações do Colégio Americano de Reumatologia, qual intervenção é a mais indicada?",
    "opcoes": {
      "A": "Plasmaférese.",
      "B": "Imunoglobulina humana endovenosa.",
      "C": "Dexametasona.",
      "D": "Pulsoterapia com metilprednisolona."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Dexametasona. Em gestante com LES e anti-SSA/Ro positivo que desenvolve bloqueio cardíaco fetal de segundo grau (incompleto), a dexametasona é a intervenção indicada conforme as recomendações do Colégio Americano de Reumatologia (ACR). A dexametasona é um corticoide fluorado que atravessa a barreira placentária sem ser inativado pela 11-beta-hidroxiesteroide desidrogenase, atuando diretamente no feto. Em bloqueios de segundo grau, pode haver reversibilidade, justificando o tratamento.\n\n**Por que as outras estão erradas:**\n- **A. Plasmaférese** – Não é recomendada rotineiramente pelo ACR para bloqueio cardíaco fetal neonatal.\n- **B. Imunoglobulina humana endovenosa** – As evidências não demonstraram benefício consistente para reverter o bloqueio cardíaco fetal e não é recomendada pelo ACR para essa indicação.\n- **D. Pulsoterapia com metilprednisolona** – A metilprednisolona não atravessa eficientemente a placenta (é inativada pela 11-beta-HSD placentária), sendo ineficaz para tratar a inflamação cardíaca fetal."
  },
  {
    "pos": 93,
    "anulado": false,
    "enunciado": "Mulher, 64 anos, queixa-se de dor em joelho direito há cinco anos com limitação para subir e descer escadas. Há dois meses evolui com significativa piora, apresentando dor em repouso e necessidade de auxiliador de marcha, sem melhora após o uso de analgésicos simples e anti-inflamatórios não hormonais. Ao exame, apresenta dor à palpação da linha articular, com calor e edema em joelho direito, crepitação articular e discreta limitação da amplitude de movimento. Dentre as opções, qual das intervenções de terapêutica intra-articular é a mais recomendada?",
    "opcoes": {
      "A": "Ácido hialurônico.",
      "B": "Plasma rico em plaquetas.",
      "C": "Células tronco mesenquimais.",
      "D": "Triancinolona."
    },
    "correta": "D",
    "explicacao": "**Resposta correta: D.** Triancinolona. A paciente apresenta osteoartrite de joelho com sinais inflamatórios (calor, edema) e refratariedade ao tratamento com analgésicos e AINEs orais. Na presença de sinovite ativa (derrame articular com sinais flogísticos), a infiltração intra-articular com corticoide (triancinolona) é a terapêutica intra-articular mais recomendada pelas diretrizes vigentes (ACR/OARSI), com evidência de eficácia para alívio sintomático a curto e médio prazo.\n\n**Por que as outras estão erradas:**\n- **A. Ácido hialurônico** – A viscossuplementação com ácido hialurônico tem evidência controversa e é condicionalmente não recomendada pelo ACR nas diretrizes mais recentes para OA de joelho.\n- **B. Plasma rico em plaquetas (PRP)** – Não é recomendado pelas principais diretrizes internacionais para OA de joelho devido à insuficiência de evidências de qualidade.\n- **C. Células-tronco mesenquimais** – Terapia experimental sem evidência suficiente para recomendação na prática clínica."
  },
  {
    "pos": 94,
    "anulado": false,
    "enunciado": "Homem, 45 anos, apresenta há dois anos quadro recorrente de dor intensa de tornozelo direito, acompanhado de calor, hiperemia e edema. Os episódios habitualmente duram de cinco a oito dias e ocasionalmente se associam à febre. Os exames iniciais são mostrados a seguir. Considerando a principal hipótese diagnóstica, que citocina tem papel central na patogênese?",
    "opcoes": {
      "A": "IL-6.",
      "B": "IL-1β.",
      "C": "TNF-alfa.",
      "D": "INF-I."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** IL-1β (Interleucina-1 beta). O quadro descreve gota aguda: episódios recorrentes de monoartrite intensa em tornozelo com sinais flogísticos exuberantes, às vezes com febre, com duração autolimitada. Na fisiopatologia da crise de gota, os cristais de urato monossódico ativam o inflamassoma NLRP3 nos macrófagos, levando à clivagem e liberação de IL-1β, que é a citocina central na amplificação da resposta inflamatória aguda da gota.\n\n**Por que as outras estão erradas:**\n- **A. IL-6** – Participa da resposta inflamatória sistêmica, mas não é a citocina central na patogênese da crise aguda de gota.\n- **C. TNF-alfa** – Contribui para a inflamação, mas não é o mediador central; o eixo NLRP3/IL-1β é a via predominante na gota.\n- **D. INF-I (Interferon tipo I)** – Está relacionado à patogênese de doenças autoimunes como LES, não à gota."
  },
  {
    "pos": 95,
    "anulado": false,
    "enunciado": "Mulher, 85 anos, tem dor no ombro direito há um ano e refere piora significativa nas últimas semanas, após realizar tarefas domésticas. Faz uso de varfarina em virtude de prótese valvar. Nega trauma. Ao exame, o ombro direito é ligeiramente aumentado e doloroso à palpação, sem calor ou eritema, com redução da amplitude de movimento para flexão anterior e rotações. As outras articulações e o restante do exame físico são normais. Cerca de 9 mL de líquido avermelhado foi aspirado por artrocentese do ombro direito. Os resultados da sinovianálise, outros exames laboratoriais e a radiografia do ombro direito são mostrados a seguir. Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Capsulite adesiva.",
      "B": "Artrite associada ao fosfato de cálcio básico.",
      "C": "Doença por depósito de pirofosfato de cálcio.",
      "D": "Hemartrose por anticoagulante."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Artrite associada ao fosfato de cálcio básico (artropatia por hidroxiapatita). O quadro é compatível com a síndrome do ombro de Milwaukee: paciente idosa com artropatia destrutiva do ombro, líquido sinovial hemorrágico (avermelhado), contagem baixa de células no líquido sinovial (não inflamatório), ausência de cristais na microscopia com luz polarizada compensada (cristais de fosfato de cálcio básico não são birrefringentes e não são visíveis à polarização convencional), e alterações radiográficas destrutivas. O uso de varfarina é um distrator.\n\n**Por que as outras estão erradas:**\n- **A. Capsulite adesiva** – Causa limitação de movimento, mas não produz derrame articular hemorrágico nem destruição articular.\n- **C. Doença por depósito de pirofosfato de cálcio** – Os cristais de pirofosfato são visíveis à microscopia com luz polarizada (birrefringência fracamente positiva), e o líquido sinovial seria tipicamente inflamatório.\n- **D. Hemartrose por anticoagulante** – Embora o líquido seja hemorrágico e a paciente use varfarina, a hemartrose isolada não explica a artropatia destrutiva crônica do ombro."
  },
  {
    "pos": 96,
    "anulado": false,
    "enunciado": "Mulher, 26 anos, apresenta lesões purpúricas em membros inferiores pioradas há um mês. Refere artralgias e lesões urticariformes que aparecem em tronco e membros (imagem abaixo) desde a primeira infância, ora associadas à alimentação, ora ao frio. Os exames complementares são mostrados a seguir. Lesão cutânea Um esquema terapêutico foi iniciado. Das opções a seguir, qual alternativa corresponde à primeira linha de tratamento?",
    "opcoes": {
      "A": "Colchicina.",
      "B": "Dapsona.",
      "C": "Cetirizina.",
      "D": "Metotrexato."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Cetirizina. A paciente jovem apresenta lesões urticariformes desde a infância, desencadeadas por alimentação ou frio, associadas a púrpura em membros inferiores. O quadro é compatível com urticária vasculite hipocomplementêmica ou urticária crônica. A primeira linha de tratamento para urticária crônica, conforme diretrizes internacionais, é o uso de anti-histamínicos H1 de segunda geração, como a cetirizina.\n\n**Por que as outras estão erradas:**\n- **A. Colchicina** – Pode ser utilizada como segunda linha em urticária vasculite, mas não é primeira linha.\n- **B. Dapsona** – Opção terapêutica de segunda ou terceira linha para vasculite urticariforme, não é primeira linha.\n- **D. Metotrexato** – Imunossupressor reservado para casos refratários; não é tratamento de primeira linha para urticária."
  },
  {
    "pos": 97,
    "anulado": false,
    "enunciado": "Mulher, 68 anos, está na pós-menopausa há 12 anos e realizou a densitometria óssea da coluna lombar cuja imagem é mostrada a seguir. Previamente hígida, ingere quatro porções de leite e derivados por dia e nega uso de medicações. Entre as alternativas a seguir, qual recomendação é o próximo passo mais adequado?",
    "opcoes": {
      "A": "Complementar com a análise do fêmur e iniciar alendronato e colecalciferol 1000 UI/dia, associados à orientação de exercício físico.",
      "B": "Realizar estimativa do risco absoluto de fraturas (FRAX®) e recomendar tratamento se a ferramenta indicar alto risco de fraturas.",
      "C": "Solicitar hemograma, VHS, cálcio, fósforo, albumina, creatinina, fosfatase alcalina, 25- hidroxivitamina D, PTH, calciúria e morfometria vertebral.",
      "D": "Solicitar marcador da remodelação óssea (CTX; P1NP) para orientar o uso de medicação antirreabsortiva ou osteoformadora."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Solicitar hemograma, VHS, cálcio, fósforo, albumina, creatinina, fosfatase alcalina, 25-hidroxivitamina D, PTH, calciúria e morfometria vertebral. Diante de uma densitometria óssea com valores compatíveis com osteoporose em mulher pós-menopausa, antes de iniciar tratamento farmacológico, é fundamental realizar investigação laboratorial de causas secundárias de osteoporose e avaliar fraturas vertebrais prevalentes por morfometria. Essa abordagem permite identificar condições tratáveis subjacentes e estratificar adequadamente o risco.\n\n**Por que as outras estão erradas:**\n- **A. Complementar com fêmur e iniciar alendronato** – Iniciar tratamento sem investigação de causas secundárias é inadequado; porém, a densitometria do fêmur deve ser complementada.\n- **B. Realizar FRAX e tratar se alto risco** – O FRAX é útil para pacientes com osteopenia para decisão terapêutica, mas quando já há osteoporose densitométrica, a prioridade é investigar causas secundárias antes de tratar.\n- **D. Solicitar marcadores de remodelação óssea** – CTX e P1NP são úteis para monitoramento de tratamento, mas não são o próximo passo prioritário antes da investigação de causas secundárias."
  },
  {
    "pos": 98,
    "anulado": false,
    "enunciado": "Mulher, 37 anos, tem diagnóstico de lúpus eritematoso sistêmico cutâneo-articular há dois anos. Em uso de hidroxicloroquina, prednisona 5 mg em dias alternados, carbonato de cálcio 500 mg/dia e colecalciferol 7000 UI/semana, evolui com doença em remissão. Refere ciclos menstruais regulares. Uma imagem da densitometria óssea realizada é mostrada a seguir. Que segmento lombar deve ser considerado para estratificação de risco e qual o diagnóstico?",
    "opcoes": {
      "A": "L1-L4 – Baixa densidade mineral óssea.",
      "B": "L3-L4 – Osteopenia.",
      "C": "L3-L4 – Osteoporose.",
      "D": "L2-L4 – Baixa massa óssea."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** L3-L4 – Osteoporose. Em pacientes com artefatos na densitometria da coluna lombar (como alterações degenerativas, fraturas ou calcificações vasculares que elevam falsamente os valores em determinadas vértebras), as vértebras afetadas devem ser excluídas da análise. Quando há discrepância superior a 1 desvio padrão entre vértebras adjacentes, excluem-se as vértebras com valores falsamente elevados. No caso, os segmentos L1 e L2 provavelmente apresentam artefatos, e a análise correta é feita com L3-L4. Em mulher pré-menopausa com LES e uso de corticoide, utiliza-se Z-score; o resultado é compatível com osteoporose (conforme critérios para pacientes em uso de glicocorticoides).\n\n**Por que as outras estão erradas:**\n- **A. L1-L4 – Baixa densidade mineral óssea** – Incluir vértebras com artefatos superestima a DMO e leva a um diagnóstico incorreto.\n- **B. L3-L4 – Osteopenia** – O segmento L3-L4 é correto, mas a classificação como osteopenia subestima a gravidade; os valores são compatíveis com osteoporose.\n- **D. L2-L4 – Baixa massa óssea** – Inclui L2, que provavelmente apresenta artefato, e a terminologia \"baixa massa óssea\" (Z-score) não reflete a classificação correta neste contexto."
  },
  {
    "pos": 99,
    "anulado": false,
    "enunciado": "Homem, 68 anos, procura pronto atendimento com dor aguda, inchaço e limitação de movimento em punho direito, de início súbito nas últimas 24 horas. Relata episódios anteriores de dor e inchaço em joelhos e punhos. A punção articular mostra líquido sinovial amarelo com contagem de leucócitos de 20.000 células/mm³ e predomínio de neutrófilos. A seguir, uma imagem do líquido sinovial sob microscopia com luz polarizada: Qual o diagnóstico mais provável?",
    "opcoes": {
      "A": "Artrite gotosa aguda.",
      "B": "Condrocalcinose (pseudogota).",
      "C": "Doença por deposição de hidroxiapatita.",
      "D": "Hemartrose."
    },
    "correta": "B",
    "explicacao": "**Resposta correta: B.** Condrocalcinose (pseudogota). O quadro descreve artrite aguda de punho com líquido inflamatório e episódios recorrentes em joelhos e punhos, em paciente idoso. A microscopia com luz polarizada mostra cristais compatíveis com pirofosfato de cálcio (cristais romboides, com birrefringência fracamente positiva), o que caracteriza a doença por depósito de pirofosfato de cálcio (pseudogota). Os punhos e joelhos são as articulações mais frequentemente acometidas por pseudogota.\n\n**Por que as outras estão erradas:**\n- **A. Artrite gotosa aguda** – Os cristais de urato monossódico são em forma de agulha com birrefringência fortemente negativa (amarelos quando paralelos ao eixo do polarizador), o que difere da descrição do caso.\n- **C. Doença por deposição de hidroxiapatita** – Os cristais de hidroxiapatita não são visíveis à microscopia com luz polarizada convencional e requerem colorações especiais (vermelho de alizarina) ou microscopia eletrônica.\n- **D. Hemartrose** – O líquido sinovial é descrito como amarelo (não hemorrágico), com leucocitose e predomínio de neutrófilos, o que descarta hemartrose."
  },
  {
    "pos": 100,
    "anulado": false,
    "enunciado": "Mulher, 27 anos, queixa-se de artralgia e fadiga há seis meses. Um achado do exame físico é mostrado: Qual lesão pode ser observada?",
    "opcoes": {
      "A": "Púrpura reticularis.",
      "B": "Eritema elevatum.",
      "C": "Livedo racemosa.",
      "D": "Lúpus pérnio."
    },
    "correta": "C",
    "explicacao": "**Resposta correta: C.** Livedo racemosa. Em mulher jovem com artralgia e fadiga, a presença de livedo racemosa — padrão reticular violáceo irregular e não uniforme da pele, que não desaparece completamente ao aquecimento — sugere fortemente associação com síndrome antifosfolípide ou lúpus eritematoso sistêmico. A livedo racemosa difere da livedo reticularis fisiológica por seu padrão irregular e incompleto dos anéis, e tem significado patológico, indicando vasculopatia.\n\n**Por que as outras estão erradas:**\n- **A. Púrpura reticularis** – Não é um termo semiológico padronizado para descrever essa lesão; a púrpura tem características distintas (lesões por extravasamento de sangue não branqueáveis).\n- **B. Eritema elevatum** – O eritema elevatum diutinum são pápulas e placas elevadas, firmes, de coloração violácea, tipicamente sobre superfícies extensoras, com padrão histológico de vasculite leucocitoclástica. Não tem padrão reticular.\n- **D. Lúpus pérnio** – Lesão nodular violácea em nariz, orelhas e dedos associada à sarcoidose, com aspecto completamente diferente do padrão reticular descrito.\n\n\nEXAME DE SUFICIÊNCIA PARA OBTENÇÃO DO TÍTULO DE ESPECIALISTA EM REUMATOLOGIA - PROVA TEÓRICA 2025 GABARITO DEFINITIVO\n1 B\n2 B\n3 A\n4 ANULADA\n5 C\n6 C\n7 A\n8 A\n9 B\n10 C\n11 D\n12 B\n13 B\n14 A\n15 A\n16 B\n17 C\n18 B\n19 C\n20 B\n21 D\n22 A\n23 A\n24 D\n25 D\n26 ANULADA\n27 C\n28 C\n29 C\n30 B\n31 A\n32 A\n33 B\n34 C\n35 B\n36 D\n37 B\n38 C\n39 C\n40 B\n41 C\n42 B\n43 C\n44 D\n45 D\n46 D\n47 A\n48 A\n49 D\n50 B\n51 A\n52 C\n53 B\n54 B\n55 B\n56 D\n57 C\n58 B\n59 A\n60 B\n61 C\n62 C\n63 B\n64 D\n65 B\n66 A\n67 B\n68 A\n69 C\n70 B\n71 D\n72 A\n73 C\n74 B\n75 D\n76 B\n77 C\n78 D\n79 D\n80 B\n81 D\n82 C\n83 A\n84 D\n85 A\n86 A\n87 C\n88 B\n89 B\n90 C\n91 C\n92 C\n93 D\n94 B\n95 B\n96 C\n97 C\n98 C\n99 B\n100 C"
  }
];

  // State
  let current = 0;
  const answers = {};        // pos -> chosen letter
  const STORAGE_KEY = "ester2025";

  // Restore saved state
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const s = JSON.parse(saved);
      Object.assign(answers, s.answers || {});
      current = s.current || 0;
      if (Object.keys(answers).length > 0) {
        document.getElementById("btn-review").style.display = "inline-block";
      }
    } catch {}
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, current }));
  }

  // Elements
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultsScreen = document.getElementById("results-screen");

  function showScreen(screen) {
    [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }

  // -- Start --
  document.getElementById("btn-start").onclick = () => {
    current = 0;
    Object.keys(answers).forEach(k => delete answers[k]);
    save();
    showScreen(quizScreen);
    render();
  };

  document.getElementById("btn-review").onclick = () => {
    showScreen(quizScreen);
    render();
  };

  // -- Quiz --
  const qCounter = document.getElementById("q-counter");
  const progressFill = document.getElementById("progress-fill");
  const scoreDisplay = document.getElementById("score-display");
  const qAnulado = document.getElementById("q-anulado");
  const qEnunciado = document.getElementById("q-enunciado");
  const qOpcoes = document.getElementById("q-opcoes");
  const qFeedback = document.getElementById("q-feedback");
  const feedbackResult = document.getElementById("feedback-result");
  const feedbackExplicacao = document.getElementById("feedback-explicacao");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const navDots = document.getElementById("nav-dots");

  function getScore() {
    let correct = 0;
    for (const pos in answers) {
      const q = allQuestions.find(qq => qq.pos === +pos);
      if (q && !q.anulado && answers[pos] === q.correta) correct++;
    }
    return correct;
  }

  function getAnsweredCount() {
    return Object.keys(answers).filter(pos => {
      const q = allQuestions.find(qq => qq.pos === +pos);
      return q && !q.anulado;
    }).length;
  }

  function renderDots() {
    navDots.innerHTML = "";
    allQuestions.forEach((q, i) => {
      const dot = document.createElement("button");
      dot.className = "nav-dot";
      if (i === current) dot.classList.add("current");

      const pos = q.pos;
      if (q.anulado) {
        dot.classList.add("answered");
      } else if (answers[pos] !== undefined) {
        dot.classList.add(answers[pos] === q.correta ? "dot-correct" : "dot-wrong");
      }

      dot.onclick = () => { current = i; render(); };
      navDots.appendChild(dot);
    });
  }

  function markdownBold(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function formatExplicacao(text) {
    if (!text) return "";
    const lines = text.split("\n");
    let html = "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) { html += "<br>"; continue; }
      if (trimmed.startsWith("- ")) {
        html += "<div style='margin-left:12px;margin-bottom:4px'>" + markdownBold(trimmed) + "</div>";
      } else {
        html += "<div style='margin-bottom:4px'>" + markdownBold(trimmed) + "</div>";
      }
    }
    return html;
  }

  function render() {
    const q = allQuestions[current];
    const pos = q.pos;
    const answered = answers[pos] !== undefined;

    // Header
    qCounter.textContent = `${current + 1} / ${allQuestions.length}`;
    progressFill.style.width = `${((getAnsweredCount()) / (allQuestions.length - 2)) * 100}%`;
    scoreDisplay.textContent = `${getScore()} ✓`;

    // Anulado
    if (q.anulado) {
      qAnulado.style.display = "block";
      qEnunciado.textContent = "";
      qOpcoes.innerHTML = "";
      qFeedback.style.display = "none";
    } else {
      qAnulado.style.display = "none";
      qEnunciado.textContent = q.enunciado;

      // Options
      qOpcoes.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      letters.forEach(letter => {
        if (!q.opcoes[letter]) return;
        const btn = document.createElement("button");
        btn.className = "option-btn";

        if (answered) {
          btn.classList.add("disabled");
          if (letter === q.correta) btn.classList.add("correct");
          if (letter === answers[pos] && letter !== q.correta) btn.classList.add("wrong");
        }

        btn.innerHTML = `
          <span class="option-letter">${letter}</span>
          <span class="option-text">${q.opcoes[letter]}</span>
        `;

        if (!answered) {
          btn.onclick = () => choose(pos, letter);
        }

        qOpcoes.appendChild(btn);
      });

      // Feedback
      if (answered) {
        qFeedback.style.display = "block";
        const isCorrect = answers[pos] === q.correta;
        feedbackResult.textContent = isCorrect ? "Resposta correta!" : `Incorreta — a resposta certa é ${q.correta}.`;
        feedbackResult.className = "feedback-result " + (isCorrect ? "is-correct" : "is-wrong");
        feedbackExplicacao.innerHTML = formatExplicacao(q.explicacao);
      } else {
        qFeedback.style.display = "none";
      }
    }

    // Navigation
    btnPrev.disabled = current === 0;
    btnNext.textContent = current === allQuestions.length - 1 ? "Encerrar" : "Próxima →";

    renderDots();
    save();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function choose(pos, letter) {
    answers[pos] = letter;
    render();
  }

  btnPrev.onclick = () => { if (current > 0) { current--; render(); } };
  btnNext.onclick = () => {
    if (current < allQuestions.length - 1) { current++; render(); }
    else showResults();
  };

  document.getElementById("btn-finish").onclick = showResults;

  // Keyboard nav
  document.addEventListener("keydown", (e) => {
    if (!quizScreen.classList.contains("active")) return;
    const q = allQuestions[current];
    if (!q || q.anulado) {
      if (e.key === "ArrowRight") { btnNext.click(); }
      if (e.key === "ArrowLeft") { btnPrev.click(); }
      return;
    }
    const answered = answers[q.pos] !== undefined;
    if (!answered) {
      const map = { "1": "A", "2": "B", "3": "C", "4": "D", a: "A", b: "B", c: "C", d: "D" };
      if (map[e.key.toLowerCase()]) choose(q.pos, map[e.key.toLowerCase()]);
    }
    if (e.key === "ArrowRight") btnNext.click();
    if (e.key === "ArrowLeft") btnPrev.click();
  });

  // -- Results --
  function showResults() {
    showScreen(resultsScreen);

    const total = allQuestions.filter(q => !q.anulado).length; // 98
    const answeredCount = getAnsweredCount();
    const score = getScore();
    const wrong = answeredCount - score;
    const skipped = total - answeredCount;
    const pct = Math.round((score / total) * 100);

    document.getElementById("results-score").textContent = `${score} / ${total}`;
    document.getElementById("results-score").style.color = pct >= 60 ? "var(--correct)" : "var(--wrong)";

    const barFill = document.getElementById("results-bar-fill");
    barFill.style.width = "0%";
    barFill.style.background = pct >= 60
      ? "linear-gradient(90deg, var(--correct), #6ee7b7)"
      : "linear-gradient(90deg, var(--wrong), #fca5a5)";
    requestAnimationFrame(() => { barFill.style.width = pct + "%"; });

    document.getElementById("results-stats").innerHTML = `
      <span style="color:var(--correct)">✓ ${score} corretas</span>
      <span style="color:var(--wrong)">✗ ${wrong} erradas</span>
      <span>${skipped} não respondidas</span>
      <span><strong>${pct}%</strong></span>
    `;

    const grid = document.getElementById("results-grid");
    grid.innerHTML = "";
    allQuestions.forEach((q, i) => {
      const cell = document.createElement("div");
      cell.className = "results-cell";
      cell.textContent = q.pos;

      if (q.anulado) {
        cell.classList.add("rc-anulado");
        cell.title = `Q${q.pos} — Anulada`;
      } else if (answers[q.pos] === undefined) {
        cell.classList.add("rc-skipped");
        cell.title = `Q${q.pos} — Não respondida`;
      } else if (answers[q.pos] === q.correta) {
        cell.classList.add("rc-correct");
        cell.title = `Q${q.pos} — Correta (${q.correta})`;
      } else {
        cell.classList.add("rc-wrong");
        cell.title = `Q${q.pos} — Errada (você: ${answers[q.pos]}, correta: ${q.correta})`;
      }

      cell.onclick = () => { current = i; showScreen(quizScreen); render(); };
      grid.appendChild(cell);
    });
  }

  document.getElementById("btn-review-results").onclick = () => {
    current = 0;
    showScreen(quizScreen);
    render();
  };

  document.getElementById("btn-restart").onclick = () => {
    Object.keys(answers).forEach(k => delete answers[k]);
    current = 0;
    save();
    showScreen(startScreen);
    document.getElementById("btn-review").style.display = "none";
  };
})();
