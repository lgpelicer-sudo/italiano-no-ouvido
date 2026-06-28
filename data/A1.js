/* ============================================================
   A1 — Básico (M01–M19) — CONTEÚDO COMPLETO (Fase 2)
   ============================================================ */

export const A1_MODULES = [

  /* ── M01 — Saudações e despedidas ── */
  {
    id: 'a1-m01', nivel: 'A1', emoji: '👋',
    nome: 'Saudações e despedidas',
    descricao: 'Seu primeiro dia em Milão — numa padaria',
    xpTotal: 150,
    exercicios: [
      { tipo: 'hook',
        pt: 'São 9h da manhã. Você entra numa padaria em Milão. O dono te olha, sorri e abre a boca. O que ele vai dizer?',
        it: 'Buongiorno! Come sta?',
        xp: 0 },

      { tipo: 'ascolto', titulo: 'Nella pasticceria',
        linhas: [
          { personagem: 'A', it: 'Buongiorno! Come sta?', pt: 'Bom dia! Como está?' },
          { personagem: 'B', it: 'Bene, grazie. E Lei?', pt: 'Bem, obrigado. E o senhor?' },
          { personagem: 'A', it: 'Benissimo! Arrivederci, buona giornata!', pt: 'Ótimo! Até logo, tenha um bom dia!' },
          { personagem: 'B', it: 'Grazie, arrivederci!', pt: 'Obrigado, até logo!' },
        ], xp: 15 },

      { tipo: 'vocab',
        it: 'buongiorno · buonasera · buonanotte',
        pt: 'bom dia · boa tarde/noite · boa noite (ao dormir)',
        ctx: '"Buonasera" começa às 13h — cobre boa tarde E boa noite ao chegar. "Buonanotte" só na despedida antes de dormir.', xp: 5 },

      { tipo: 'vocab',
        it: 'ciao · salve · arrivederci · a presto',
        pt: 'oi/tchau · olá neutro · até logo (formal) · até logo (breve)',
        ctx: '"Salve" é o coringa: nem muito informal, nem muito formal. Use quando não tiver certeza de qual tom adotar.', xp: 5 },

      { tipo: 'osserva',
        exemplos: [
          'Ciao Marco! Come stai?',
          'Buongiorno, signore. Come sta?',
        ],
        pergunta: 'O que você nota? Por que "stai" numa frase e "sta" na outra?',
        regra: '"Stai" é informal — para amigos e família. "Sta" é formal — para desconhecidos, com respeito. Em italiano, cada verbo muda de forma segundo esse registro. É o coração da língua.',
        xp: 8 },

      { tipo: 'formal_vs_informal',
        situacao: 'Cumprimentar numa padaria vs cumprimentar um amigo na rua',
        informal: { it: 'Ciao! Come stai?', pt: 'Oi! Como vai?' },
        formal: { it: 'Buongiorno. Come sta?', pt: 'Bom dia. Como está?' },
        regra: 'Informal: "ciao" + "stai". Formal: "buongiorno" + "sta". São dois pacotes completos — você não mistura as peças.',
        xp: 15 },

      { tipo: 'pratica', ptFirst: false,
        frases: [
          { it: 'Buongiorno, come sta?', pt: 'Bom dia, como está?' },
          { it: 'Bene, grazie. E Lei?', pt: 'Bem, obrigado. E o senhor?' },
          { it: 'Ciao! Come stai?', pt: 'Oi! Como vai?' },
          { it: 'Sto bene, grazie. E tu?', pt: 'Estou bem, obrigado. E você?' },
          { it: 'Arrivederci! Buona giornata.', pt: 'Até logo! Tenha um bom dia.' },
          { it: 'Ciao, a presto!', pt: 'Tchau, até logo!' },
        ], xp: 10 },

      { tipo: 'cultura',
        titulo: 'Il saluto in Italia',
        texto_pt: 'Na Itália, entrar numa loja sem cumprimentar é considerado rude — quase uma declaração de hostilidade. "Buongiorno" não é opcional: é o bilhete de entrada numa interação. Os italianos cumprimentam com mais entusiasmo e contato visual do que a maioria dos europeus.',
        it: 'Buongiorno a tutti!',
        xp: 5 },

      { tipo: 'connessione',
        pt_intro: 'No dia seguinte você volta à mesma padaria. O dono te reconhece. Agora você sabe exatamente o que dizer:',
        it: 'Buongiorno! Sto bene, grazie. Arrivederci, a domani!',
        pt: 'Bom dia! Estou bem, obrigado. Até logo, até amanhã!',
        ctx: 'Saudação + resposta + despedida + "a domani" — tudo que o módulo ensinou, numa frase só.',
        xp: 10 },

      { tipo: 'quiz_oral',
        pergunta_pt: 'Você está numa farmácia em Roma às 10h. Cumprimente formalmente e pergunte como o atendente está.',
        resposta_it: 'Buongiorno! Come sta?',
        resposta_pt: 'Bom dia! Como está?',
        pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M02 — Apresentação pessoal ── */
  {
    id: 'a1-m02', nivel: 'A1', emoji: '🙋',
    nome: 'Apresentação pessoal',
    descricao: 'Diga quem você é, de onde vem e o que faz',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Agora você vai aprender a se apresentar em italiano: nome, idade, origem, onde mora e profissão.' },
      { tipo: 'frase', it: 'Mi chiamo Luiz.', pt: 'Me chamo Luiz.', ctx: '"Mi chiamo" é o jeito natural. Não se usa "Il mio nome è" na fala cotidiana.', xp: 5 },
      { tipo: 'frase', it: 'Piacere di conoscerti.', pt: 'Prazer em te conhecer.', ctx: 'Informal. Com alguém mais formal: "Piacere di conoscerLa".', xp: 5 },
      { tipo: 'frase', it: 'Ho trent\'anni.', pt: 'Tenho trinta anos.', ctx: '"Ho" do verbo avere. Sempre "Ho X anni" — nunca "Sono X anni".', xp: 5 },
      { tipo: 'frase', it: 'Sono di San Paolo, in Brasile.', pt: 'Sou de São Paulo, no Brasil.', ctx: '"Sono di" + cidade de origem. "Sono brasiliano/brasiliana" para a nacionalidade.', xp: 5 },
      { tipo: 'vocab', it: 'brasiliano / brasiliana', pt: 'brasileiro / brasileira', ctx: 'Adjetivos de nacionalidade variam em gênero: -o (masc.) / -a (fem.).', xp: 5 },
      { tipo: 'frase', it: 'Abito a Milano.', pt: 'Moro em Milão.', ctx: '"Abito a" + cidade. "Abito in" + país/região: "Abito in Italia".', xp: 5 },
      { tipo: 'frase', it: 'Lavoro come ingegnere.', pt: 'Trabalho como engenheiro.', ctx: 'Profissões sem artigo: "Sono medico" (não "un medico").', xp: 5 },
      { tipo: 'formal_vs_informal', situacao: 'Perguntar o nome de alguém', informal: { it: 'Come ti chiami?', pt: 'Como você se chama?' }, formal: { it: 'Come si chiama?', pt: 'Como o senhor se chama?' }, regra: '"Ti chiami" (tu). "Si chiama" (Lei — terceira pessoa como forma de respeito).', xp: 15 },
      { tipo: 'dialogo', titulo: 'Apresentação formal', linhas: [
        { personagem: 'A', it: 'Buongiorno, sono Marco Rossi.', pt: 'Bom dia, sou Marco Rossi.' },
        { personagem: 'B', it: 'Piacere, mi chiamo Luiz. Di dov\'è?', pt: 'Prazer, me chamo Luiz. De onde o senhor é?' },
        { personagem: 'A', it: 'Sono di Roma. Lei è brasiliano?', pt: 'Sou de Roma. O senhor é brasileiro?' },
        { personagem: 'B', it: 'Sì, sono di San Paolo. Lavoro qui a Milano.', pt: 'Sim, sou de São Paulo. Trabalho aqui em Milão.' },
        { personagem: 'A', it: 'Benvenuto in Italia!', pt: 'Bem-vindo à Itália!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como uma mulher diz "Sou brasileira"?', opcoes: ['Sono brasiliano.', 'Sono brasiliana.', 'Ho brasiliana.', 'Abito brasiliana.'], correta: 1, it: 'Sono brasiliana.', pt: 'Sou brasileira.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Me chamo [nome], sou brasileiro."', resposta_it: 'Mi chiamo Luiz, sono brasiliano.', resposta_pt: 'Me chamo Luiz, sou brasileiro.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M03 — Formal × Informal: a base ── */
  {
    id: 'a1-m03', nivel: 'A1', emoji: '🎩',
    nome: 'Formal × Informal — A base',
    descricao: 'Tu vs Lei: a distinção mais importante do italiano',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Este módulo explica tu versus Lei — a distinção mais importante do italiano. No Brasil usamos "você" para quase tudo. Na Itália, esta escolha muda completamente o tom da conversa.' },
      { tipo: 'vocab', it: 'tu', pt: 'você (informal)', ctx: 'Com amigos, família, colegas próximos e crianças.', xp: 5 },
      { tipo: 'vocab', it: 'Lei', pt: 'o senhor / a senhora (formal)', ctx: '"Lei" com L maiúsculo. É gramaticalmente terceira pessoa, mas significa "você formal".', xp: 5 },
      { tipo: 'frase', it: 'Tu sei brasiliano?', pt: 'Você é brasileiro? (informal)', ctx: 'O pronome "tu" costuma ser omitido: "Sei brasiliano?" funciona igual.', xp: 5 },
      { tipo: 'frase', it: 'Lei è brasiliano?', pt: 'O senhor é brasileiro? (formal)', ctx: '"Lei è" usa terceira pessoa, mas se dirige à pessoa na frente de você.', xp: 5 },
      { tipo: 'formal_vs_informal', situacao: 'Perguntar de onde a pessoa é', informal: { it: 'Di dove sei?', pt: 'De onde você é?' }, formal: { it: 'Di dov\'è?', pt: 'De onde o senhor é?' }, regra: 'Informal: "sei" (2ª pessoa). Formal: "è" (3ª pessoa). A mesma lógica vale para todos os verbos.', xp: 15 },
      { tipo: 'formal_vs_informal', situacao: 'Perguntar onde a pessoa mora', informal: { it: 'Dove abiti?', pt: 'Onde você mora?' }, formal: { it: 'Dove abita?', pt: 'Onde o senhor mora?' }, regra: 'Verbos -ARE: tu abiti → Lei abita. A terminação muda de "-i" para "-a".', xp: 15 },
      { tipo: 'frase', it: 'Possiamo darci del tu?', pt: 'Podemos nos tratar por "tu"?', ctx: 'Usada para propor informalidade em reuniões de trabalho ou ao conhecer alguém. A resposta natural é "Certo!" ou "Prego!"', xp: 10 },
      { tipo: 'dialogo', titulo: 'Do formal ao informal', linhas: [
        { personagem: 'A', it: 'Buongiorno, Lei è il signor Rossi?', pt: 'Bom dia, o senhor é o Sr. Rossi?' },
        { personagem: 'B', it: 'Sì, sono io. Piacere.', pt: 'Sim, sou eu. Prazer.' },
        { personagem: 'A', it: 'Possiamo darci del tu? Sono Luiz.', pt: 'Podemos nos tratar por "tu"? Sou Luiz.' },
        { personagem: 'B', it: 'Certo! Siediti, Luiz. Di dove sei?', pt: 'Claro! Sente-se, Luiz. De onde você é?' },
        { personagem: 'A', it: 'Sono di San Paolo, ma abito a Milano.', pt: 'Sou de São Paulo, mas moro em Milão.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Com quem você usaria "Lei" (formal)?', opcoes: ['Seu melhor amigo', 'Um médico que não conhece', 'Seu irmão mais novo', 'Um colega da mesma turma'], correta: 1, it: 'Lei è il mio medico.', pt: 'O senhor é meu médico.', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Qual a forma correta para "Você trabalha aqui?" formalmente?', opcoes: ['Tu lavori qui?', 'Lei lavora qui?', 'Lei lavori qui?', 'Tu lavora qui?'], correta: 1, it: 'Lei lavora qui?', pt: 'O senhor trabalha aqui?', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pergunta formalmente "De onde o senhor é?"', resposta_it: 'Di dov\'è?', resposta_pt: 'De onde o senhor é?', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M04 — Números 0–100 ── */
  {
    id: 'a1-m04', nivel: 'A1', emoji: '🔢',
    nome: 'Números 0–100',
    descricao: 'Conte, use preços e números de telefone',
    xpTotal: 120,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Agora os números em italiano. Os primeiros vinte são irregulares — precisam ser memorizados. A partir do vinte, segue uma lógica simples.' },
      { tipo: 'vocab', it: 'zero, uno, due, tre, quattro, cinque', pt: '0, 1, 2, 3, 4, 5', ctx: 'Pronuncie "dUE" com U fechado, "trE" com E aberto.', xp: 5 },
      { tipo: 'vocab', it: 'sei, sette, otto, nove, dieci', pt: '6, 7, 8, 9, 10', ctx: '"Sette" com T duplo. "Otto" com T duplo e O aberto.', xp: 5 },
      { tipo: 'vocab', it: 'undici, dodici, tredici, quattordici, quindici', pt: '11, 12, 13, 14, 15', ctx: 'De 11 a 16 são irregulares — memorizá-los individualmente.', xp: 5 },
      { tipo: 'vocab', it: 'sedici, diciassette, diciotto, diciannove, venti', pt: '16, 17, 18, 19, 20', ctx: '"Diciassette", "diciotto", "diciannove" — note que 17, 18, 19 começam com "dici-".', xp: 5 },
      { tipo: 'vocab', it: 'trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, cento', pt: '30, 40, 50, 60, 70, 80, 90, 100', ctx: 'As dezenas são regulares. Memorize "trenta" e o padrão fica claro.', xp: 5 },
      { tipo: 'frase', it: 'ventuno, ventotto, trentatré, quarantadue', pt: '21, 28, 33, 42', ctx: 'Regra: venti + uno → ventuno (perde o "i"). venti + otto → ventotto (perde o "i"). Mas trenta + tre → trentatré (mantém tudo, acento no final).', xp: 8 },
      { tipo: 'frase', it: 'Costa quattro euro e cinquanta.', pt: 'Custa quatro euros e cinquenta.', ctx: 'Preços: "euro" é invariável (não tem plural irregular). "Costa" para um item, "costano" para vários.', xp: 8 },
      { tipo: 'frase', it: 'Il mio numero è zero tre due, quattro cinque sei, sette otto nove.', pt: 'Meu número é 032-456-789.', ctx: 'Números de telefone em italiano são ditos dígito a dígito ou em pares.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz 47 em italiano?', opcoes: ['quarantesette', 'quarantasette', 'quarantisette', 'quaranta sette'], correta: 1, it: 'quarantasette', pt: '47', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz 83 em italiano?', opcoes: ['ottantré', 'ottantitré', 'ottantatré', 'ottanta tre'], correta: 2, it: 'ottantatré', pt: '83', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga o número 15 em italiano.', resposta_it: 'quindici', resposta_pt: 'quinze', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M05 — Números 100–1.000.000 ── */
  {
    id: 'a1-m05', nivel: 'A1', emoji: '💯',
    nome: 'Números 100–1.000.000',
    descricao: 'Ordinais, anos e grandes quantidades',
    xpTotal: 100,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Agora os números grandes e os ordinais. Você vai precisar deles para falar de anos, endereços e preços mais altos.' },
      { tipo: 'vocab', it: 'cento, duecento, trecento, quattrocento, cinquecento', pt: '100, 200, 300, 400, 500', ctx: '"Cento" é invariável. "Duecento" é junto, sem espaço.', xp: 5 },
      { tipo: 'vocab', it: 'seicento, settecento, ottocento, novecento, mille', pt: '600, 700, 800, 900, 1000', ctx: '"Mille" para 1000. Para 2000: "duemila" (muda para "mila" no plural).', xp: 5 },
      { tipo: 'vocab', it: 'duemila, diecimila, centomila, un milione', pt: '2.000, 10.000, 100.000, 1.000.000', ctx: '"Un milione" com "di" antes do substantivo: "un milione di euro".', xp: 5 },
      { tipo: 'vocab', it: 'primo, secondo, terzo, quarto, quinto, sesto, settimo, ottavo, nono, decimo', pt: '1º, 2º, 3º, 4º, 5º, 6º, 7º, 8º, 9º, 10º', ctx: 'Ordinais 1º a 10º são irregulares. Do 11º em diante: undicesimo, dodicesimo...', xp: 5 },
      { tipo: 'frase', it: 'Sono nato nel duemilasei.', pt: 'Nasci em 2006.', ctx: 'Anos em italiano: "nel" + anno. "Nel duemilaventisei" = em 2026.', xp: 8 },
      { tipo: 'frase', it: 'Abito in via Roma, numero quindici, terzo piano.', pt: 'Moro na Rua Roma, número 15, 3º andar.', ctx: 'Endereços: via + nome, numero + número, piano + ordinal.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz 1.456 em italiano?', opcoes: ['millequattrocentocinquantasei', 'millequattrocentosessantasei', 'millequattrocentosettantasei', 'milequattrocentocinquantasei'], correta: 0, it: 'millequattrocentocinquantasei', pt: '1.456', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "terceiro andar"?', opcoes: ['terzo piano', 'tre piano', 'terza piano', 'terzio piano'], correta: 0, it: 'terzo piano', pt: 'terceiro andar', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga o ano atual em italiano: 2026.', resposta_it: 'duemilaventisei', resposta_pt: 'dois mil e vinte e seis', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M06 — Giorni, mesi e stagioni ── */
  {
    id: 'a1-m06', nivel: 'A1', emoji: '📅',
    nome: 'Dias, meses e estações',
    descricao: 'Calendário completo e expressões de tempo',
    xpTotal: 130,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Neste módulo você aprende o calendário italiano completo — dias da semana, meses e estações — mais as expressões de tempo essenciais.' },
      { tipo: 'vocab', it: 'lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica', pt: 'segunda, terça, quarta, quinta, sexta, sábado, domingo', ctx: 'Em italiano, os dias da semana têm acento na última sílaba (exceto sabato/domenica). Não são capitalizados.', xp: 5 },
      { tipo: 'vocab', it: 'gennaio, febbraio, marzo, aprile, maggio, giugno', pt: 'janeiro, fevereiro, março, abril, maio, junho', ctx: 'Meses não são capitalizados em italiano.', xp: 5 },
      { tipo: 'vocab', it: 'luglio, agosto, settembre, ottobre, novembre, dicembre', pt: 'julho, agosto, setembro, outubro, novembro, dezembro', ctx: '"Luglio" (não "julio"). "Agosto" igual ao português.', xp: 5 },
      { tipo: 'vocab', it: 'la primavera, l\'estate, l\'autunno, l\'inverno', pt: 'a primavera, o verão, o outono, o inverno', ctx: '"Estate" (verão) é feminino. "Autunno" com artigo masculino "l\'".', xp: 5 },
      { tipo: 'frase', it: 'Oggi è lunedì 17 giugno 2026.', pt: 'Hoje é segunda-feira, 17 de junho de 2026.', ctx: 'Datas: dia + mese + anno. Sem "de" entre eles. O artigo antes do giorno: "il 17 giugno".', xp: 8 },
      { tipo: 'frase', it: 'Il mio compleanno è il tre marzo.', pt: 'Meu aniversário é em três de março.', ctx: 'Datas: "il" + numero + mese. Para o dia 1: "il primo marzo" (usa ordinal só para o dia 1).', xp: 8 },
      { tipo: 'vocab', it: 'ieri, oggi, domani, dopodomani, l\'altro ieri', pt: 'ontem, hoje, amanhã, depois de amanhã, antes de ontem', ctx: '"L\'altro ieri" é muito usado no italiano coloquial.', xp: 5 },
      { tipo: 'vocab', it: 'la settimana scorsa / prossima, il mese scorso / prossimo', pt: 'semana passada / próxima, mês passado / próximo', ctx: '"Scorso/a" = passado/a. "Prossimo/a" = próximo/a. Concordam em gênero.', xp: 5 },
      { tipo: 'formal_vs_informal', situacao: 'Combinar um encontro', informal: { it: 'Ci vediamo sabato?', pt: 'A gente se vê no sábado?' }, formal: { it: 'Sarebbe disponibile sabato?', pt: 'O senhor estaria disponível no sábado?' }, regra: 'Informal: "Ci vediamo" (presente). Formal: condizionale de "essere disponibile".', xp: 15 },
      { tipo: 'dialogo', titulo: 'Marcar um compromisso', linhas: [
        { personagem: 'A', it: 'Ciao! Sei libero venerdì sera?', pt: 'Oi! Você está livre sexta à noite?' },
        { personagem: 'B', it: 'Venerdì? No, ho una cena. E sabato?', pt: 'Sexta? Não, tenho um jantar. E sábado?' },
        { personagem: 'A', it: 'Sabato va benissimo! A che ora?', pt: 'Sábado está ótimo! A que horas?' },
        { personagem: 'B', it: 'Alle otto, va bene?', pt: 'Às oito, tudo bem?' },
        { personagem: 'A', it: 'Perfetto! A sabato allora.', pt: 'Perfeito! Até sábado então.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "semana passada" em italiano?', opcoes: ['la settimana prossima', 'la settimana scorsa', 'la settimana passata', 'l\'altra settimana'], correta: 1, it: 'la settimana scorsa', pt: 'semana passada', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Qual é a data de hoje? Diga em italiano.', resposta_it: 'Oggi è il diciassette giugno duemilaventisei.', resposta_pt: 'Hoje é dezessete de junho de 2026.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M07 — Ore e tempo ── */
  {
    id: 'a1-m07', nivel: 'A1', emoji: '⏰',
    nome: 'Horas e tempo',
    descricao: 'Que horas são? Marque compromissos',
    xpTotal: 120,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Horas em italiano: "Che ore sono?" ou "Che ora è?". Para responder, use "È l\'una" para 1h e "Sono le..." para os outros.' },
      { tipo: 'vocab', it: 'Che ore sono? / Che ora è?', pt: 'Que horas são?', ctx: 'Ambas as formas são corretas. "Che ore sono?" é mais comum no Norte da Itália.', xp: 5 },
      { tipo: 'frase', it: 'È l\'una. / Sono le due. / Sono le tre.', pt: 'É uma hora. / São duas horas. / São três horas.', ctx: '"È l\'una" (singular — só para 1h). "Sono le..." para todos os outros horários.', xp: 5 },
      { tipo: 'frase', it: 'È mezzogiorno. / È mezzanotte.', pt: 'É meio-dia. / É meia-noite.', ctx: '"Mezzogiorno" e "mezzanotte" não usam artigo.', xp: 5 },
      { tipo: 'frase', it: 'Sono le tre e un quarto. / Sono le tre e mezza. / Sono le quattro meno un quarto.', pt: 'São três e quinze. / São três e meia. / São quinze para as quatro.', ctx: '"E un quarto" = e quinze. "E mezza" = e meia. "Meno un quarto" = menos quinze.', xp: 8 },
      { tipo: 'frase', it: 'A che ora parte il treno? — Alle otto e venti.', pt: 'A que horas parte o trem? — Às oito e vinte.', ctx: '"A che ora" = a que horas? "Alle" = às (contração de a + le).', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Perguntar as horas', informal: { it: 'Scusa, che ore sono?', pt: 'Com licença, que horas são?' }, formal: { it: 'Mi scusi, sa che ore sono?', pt: 'Com licença, o senhor sabe que horas são?' }, regra: '"Scusa" (informal) / "Mi scusi" (formal). "Sa" = sabe (Lei).', xp: 15 },
      { tipo: 'dialogo', titulo: 'Marcar reunião formal', linhas: [
        { personagem: 'A', it: 'Buongiorno. Vorrei fissare un appuntamento.', pt: 'Bom dia. Gostaria de marcar um compromisso.' },
        { personagem: 'B', it: 'Certo. Quando Le va bene?', pt: 'Claro. Quando o senhor prefere?' },
        { personagem: 'A', it: 'Giovedì mattina, se possibile.', pt: 'Quinta de manhã, se possível.' },
        { personagem: 'B', it: 'Giovedì alle dieci va bene?', pt: 'Quinta às dez está bem?' },
        { personagem: 'A', it: 'Perfetto. Alle dieci allora. Grazie.', pt: 'Perfeito. Às dez então. Obrigado.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "são duas e meia"?', opcoes: ['Sono le due e un quarto', 'Sono le due e mezza', 'È le due e mezza', 'Sono due e mezza'], correta: 1, it: 'Sono le due e mezza', pt: 'são duas e meia', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pergunta formalmente que horas são?', resposta_it: 'Mi scusi, sa che ore sono?', resposta_pt: 'Com licença, o senhor sabe que horas são?', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M08 — Colori, forme e aggettivi ── */
  {
    id: 'a1-m08', nivel: 'A1', emoji: '🎨',
    nome: 'Cores, formas e adjetivos',
    descricao: 'Descreva objetos, roupas e pessoas',
    xpTotal: 120,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Adjetivos em italiano concordam em gênero e número com o substantivo. Vamos aprender cores e adjetivos essenciais para descrever tudo ao redor.' },
      { tipo: 'vocab', it: 'rosso/rossa, bianco/bianca, nero/nera, giallo/gialla, verde (inv.), blu (inv.)', pt: 'vermelho, branco, preto, amarelo, verde, azul', ctx: '"Verde" e "blu" são invariáveis (não mudam: una gonna verde, un vestito blu).', xp: 5 },
      { tipo: 'vocab', it: 'arancione (inv.), viola (inv.), grigio/grigia, marrone (inv.), rosa (inv.)', pt: 'laranja, roxo/violeta, cinza, marrom, rosa', ctx: '"Arancione", "viola", "marrone" e "rosa" são invariáveis.', xp: 5 },
      { tipo: 'vocab', it: 'grande/piccolo, lungo/corto, alto/basso, largo/stretto', pt: 'grande/pequeno, longo/curto, alto/baixo, largo/estreito', ctx: 'Estes adjetivos concordam: una gonna corta, un vestito lungo.', xp: 5 },
      { tipo: 'vocab', it: 'bello/brutto, nuovo/vecchio, caro/economico, leggero/pesante', pt: 'bonito/feio, novo/velho, caro/barato, leve/pesado', ctx: '"Bello" antes do nome muda como os artigos: bel ragazzo, bell\'uomo, bella ragazza.', xp: 5 },
      { tipo: 'frase', it: 'La macchina è rossa e molto veloce.', pt: 'O carro é vermelho e muito rápido.', ctx: '"Molto" antes do adjetivo = muito. Não concorda: "molto bello", "molto bella".', xp: 8 },
      { tipo: 'frase', it: 'Ho i capelli neri e gli occhi verdi.', pt: 'Tenho cabelos pretos e olhos verdes.', ctx: 'Descrição física: "avere" + artigo + parte do corpo + adjetivo.', xp: 8 },
      { tipo: 'frase', it: 'Che bella giacca! È nuova?', pt: 'Que jaqueta bonita! É nova?', ctx: '"Che + bello/bella/bel..." = Que lindo/a! Exclamativo.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "camiseta branca" em italiano?', opcoes: ['maglietta bianco', 'maglietta bianca', 'maglietta bianchi', 'una bianca maglietta'], correta: 1, it: 'maglietta bianca', pt: 'camiseta branca', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Qual adjetivo é invariável (não muda)?', opcoes: ['rosso', 'bianco', 'blu', 'nero'], correta: 2, it: 'blu (invariabile)', pt: 'azul (invariável)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Descreva: "A bolsa é grande e preta."', resposta_it: 'La borsa è grande e nera.', resposta_pt: 'A bolsa é grande e preta.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M09 — Articoli ── */
  {
    id: 'a1-m09', nivel: 'A1', emoji: '📖',
    nome: 'Artigos',
    descricao: 'Il, lo, la, i, gli, le, un, una — a regra completa',
    xpTotal: 130,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Artigos em italiano são mais complexos que em português. A escolha depende do gênero, número e da letra inicial do substantivo. Vamos dominar isso.' },
      { tipo: 'vocab', it: 'il ragazzo, lo studente, l\'amico, l\'uomo', pt: 'o menino, o estudante, o amigo, o homem', ctx: '"Il" antes de consoante comum. "Lo" antes de s+cons, z, gn, ps, x. "L\'" antes de vogal.', xp: 5 },
      { tipo: 'vocab', it: 'la ragazza, l\'amica, la scuola', pt: 'a menina, a amiga, a escola', ctx: '"La" antes de consoante. "L\'" antes de vogal. Simples para feminino!', xp: 5 },
      { tipo: 'vocab', it: 'i ragazzi, gli studenti, gli amici, le ragazze, le amiche', pt: 'os meninos, os estudantes, os amigos, as meninas, as amigas', ctx: 'Plural: "i" (masc. padrão), "gli" (masc. especial: s+cons, z, vogal), "le" (todos femininos).', xp: 5 },
      { tipo: 'vocab', it: 'un ragazzo, uno studente, un\'amica, una ragazza', pt: 'um menino, um estudante, uma amiga, uma menina', ctx: 'Indefinido: "un" (masc. comum), "uno" (s+cons, z...), "un\'" (fem. antes de vogal), "una" (fem. padrão).', xp: 5 },
      { tipo: 'frase', it: 'Lo sport è importante. La musica è bella. L\'italiano è facile!', pt: 'O esporte é importante. A música é bonita. O italiano é fácil!', ctx: '"Lo sport" (s+cons). "La musica" (fem.). "L\'italiano" (masc. antes de vogal).', xp: 8 },
      { tipo: 'frase', it: 'Ho uno zaino nuovo e un libro interessante.', pt: 'Tenho uma mochila nova e um livro interessante.', ctx: '"Uno zaino" (z → lo/uno). "Un libro" (consoante comum → il/un).', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual artigo correto para "zucchero" (açúcar)?', opcoes: ['il zucchero', 'lo zucchero', 'l\'zucchero', 'un zucchero'], correta: 1, it: 'lo zucchero', pt: 'o açúcar', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Plural de "il libro" (o livro)?', opcoes: ['i libri', 'gli libri', 'le libri', 'i libro'], correta: 0, it: 'i libri', pt: 'os livros', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Artigo indefinido para "amica" (amiga)?', opcoes: ['una amica', 'un amica', 'un\'amica', 'una\'amica'], correta: 2, it: 'un\'amica', pt: 'uma amiga', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "O estudante tem um livro."', resposta_it: 'Lo studente ha un libro.', resposta_pt: 'O estudante tem um livro.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M10 — Essere e Avere ── */
  {
    id: 'a1-m10', nivel: 'A1', emoji: '✅',
    nome: 'Essere e Avere',
    descricao: 'Os dois verbos mais importantes do italiano',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Essere e avere são os pilares do italiano. Essere é "ser/estar". Avere é "ter". Você os usará em cada frase — vale cada minuto de prática.' },
      { tipo: 'vocab', it: 'sono, sei, è, siamo, siete, sono', pt: 'sou/estou, és/estás, é/está, somos/estamos, sois/estais, são/estão', ctx: 'Essere: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono. O "Lei" formal usa "è".', xp: 5 },
      { tipo: 'vocab', it: 'ho, hai, ha, abbiamo, avete, hanno', pt: 'tenho, tens, tem, temos, tendes, têm', ctx: 'Avere: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno. "Lei" formal usa "ha".', xp: 5 },
      { tipo: 'frase', it: 'Sono italiano. Sei brasiliano. È di Roma.', pt: 'Sou italiano. Você é brasileiro. Ele é de Roma.', ctx: 'Essere para identidade, origem, profissão e características permanentes.', xp: 5 },
      { tipo: 'frase', it: 'Ho fame. Ho sete. Ho sonno. Ho freddo. Ho caldo.', pt: 'Estou com fome. Estou com sede. Estou com sono. Estou com frio. Estou com calor.', ctx: 'Em italiano, sensações físicas usam AVERE, não essere: "ho fame" (tenho fome), não "sono fome".', xp: 8 },
      { tipo: 'frase', it: 'Ho fretta. Ho paura. Ho voglia di un caffè.', pt: 'Estou com pressa. Estou com medo. Estou com vontade de um café.', ctx: '"Ho voglia di" + infinito ou substantivo = estou com vontade de.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Perguntar se alguém tem um momento', informal: { it: 'Hai un momento?', pt: 'Você tem um momento?' }, formal: { it: 'Ha un momento?', pt: 'O senhor tem um momento?' }, regra: '"Hai" (tu). "Ha" (Lei). A vogal muda, mas o padrão é consistente.', xp: 15 },
      { tipo: 'dialogo', titulo: 'No café — con amico', linhas: [
        { personagem: 'A', it: 'Ciao! Come stai? Hai fame?', pt: 'Oi! Como vai? Você está com fome?' },
        { personagem: 'B', it: 'Sì, ho una fame incredibile! E tu?', pt: 'Sim, estou com uma fome incrível! E você?' },
        { personagem: 'A', it: 'Anch\'io. Hai voglia di una pizza?', pt: 'Eu também. Você está com vontade de uma pizza?' },
        { personagem: 'B', it: 'Ottima idea! Sono già le otto di sera.', pt: 'Ótima ideia! Já são oito da noite.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "estou com fome" em italiano?', opcoes: ['Sono fame', 'Ho fome', 'Ho fame', 'Sono fome'], correta: 2, it: 'Ho fame', pt: 'Estou com fome', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Lei (o senhor) ___ di Milano."', opcoes: ['sei', 'sono', 'è', 'siete'], correta: 2, it: 'Lei è di Milano', pt: 'O senhor é de Milão', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Tenho pressa e estou com sede"?', resposta_it: 'Ho fretta e ho sete.', resposta_pt: 'Estou com pressa e com sede.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M11 — Verbi regolari ── */
  {
    id: 'a1-m11', nivel: 'A1', emoji: '🗣',
    nome: 'Verbos regulares',
    descricao: '-ARE, -ERE, -IRE: os 25 verbos mais usados',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Verbos regulares italianos seguem três padrões: -ARE (a maioria), -ERE e -IRE. Aprenda o padrão e você sabe conjugar centenas de verbos.' },
      { tipo: 'vocab', it: 'parlare: parlo, parli, parla, parliamo, parlate, parlano', pt: 'falar: falo, falas, fala, falamos, falais, falam', ctx: 'Padrão -ARE: tira -are e adiciona -o, -i, -a, -iamo, -ate, -ano. Outros: lavorare, studiare, mangiare, abitare, ascoltare, guardare, chiamare.', xp: 5 },
      { tipo: 'vocab', it: 'vedere: vedo, vedi, vede, vediamo, vedete, vedono', pt: 'ver: vejo, vês, vê, vemos, vedes, veem', ctx: 'Padrão -ERE: tira -ere e adiciona -o, -i, -e, -iamo, -ete, -ono. Outros: scrivere, leggere, prendere, mettere, chiedere, rispondere.', xp: 5 },
      { tipo: 'vocab', it: 'dormire: dormo, dormi, dorme, dormiamo, dormite, dormono', pt: 'dormir: durmo, dormes, dorme, dormimos, dormis, dormem', ctx: 'Padrão -IRE simples: -o, -i, -e, -iamo, -ite, -ono. Outros: partire, aprire, sentire, seguire.', xp: 5 },
      { tipo: 'vocab', it: 'capire: capisco, capisci, capisce, capiamo, capite, capiscono', pt: 'entender: entendo, entendes, entende, entendemos, entendeis, entendem', ctx: 'Padrão -IRE com "-isc-": capisci/capisce/capiscono inserem "-isc-". Outros: finire, preferire, pulire.', xp: 5 },
      { tipo: 'frase', it: 'Parlo italiano ogni giorno. Studio molto. Ascolto la radio.', pt: 'Falo italiano todo dia. Estudo muito. Escuto o rádio.', ctx: '"Ogni giorno" = todo dia. "Molto" = muito (antes do verbo).', xp: 8 },
      { tipo: 'frase', it: 'Leggo un libro interessante. Scrivo una email. Rispondo al messaggio.', pt: 'Leio um livro interessante. Escrevo um email. Respondo à mensagem.', ctx: '"Rispondo a" = respondo a. "Al" = a + il (contração).', xp: 8 },
      { tipo: 'frase', it: 'Non capisco bene. Puoi parlare più lentamente?', pt: 'Não entendo bem. Você pode falar mais devagar?', ctx: '"Non capisco" = não entendo. "Più lentamente" = mais devagar. Frase essencial para iniciantes!', xp: 8 },
      { tipo: 'dialogo', titulo: 'Rotina diária', linhas: [
        { personagem: 'A', it: 'Cosa fai di solito la mattina?', pt: 'O que você faz normalmente de manhã?' },
        { personagem: 'B', it: 'Mi alzo alle sette, faccio colazione e poi studio italiano.', pt: 'Acordo às sete, tomo café e depois estudo italiano.' },
        { personagem: 'A', it: 'Ascolti anche la radio italiana?', pt: 'Você também escuta o rádio italiano?' },
        { personagem: 'B', it: 'Sì! Ascolto un podcast ogni giorno. Aiuta molto.', pt: 'Sim! Escuto um podcast todo dia. Ajuda muito.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Conjugação correta: "Noi _____ (parlare)"?', opcoes: ['parlamo', 'parliamo', 'parliamo', 'parlemo'], correta: 2, it: 'parliamo', pt: 'falamos', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Qual verbo usa o padrão "-isc-"?', opcoes: ['dormire', 'partire', 'finire', 'sentire'], correta: 2, it: 'finire (finisco)', pt: 'terminar (termino)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Eles leem e escrevem muito"?', resposta_it: 'Leggono e scrivono molto.', resposta_pt: 'Eles leem e escrevem muito.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M12 — Verbi irregolari ── */
  {
    id: 'a1-m12', nivel: 'A1', emoji: '⚡',
    nome: 'Verbos irregulares',
    descricao: 'Andare, venire, fare, dare e os 11 mais usados',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Os verbos irregulares italianos são aqueles que mais aparecem no dia a dia. Precisam ser memorizados — não seguem padrão fixo.' },
      { tipo: 'vocab', it: 'andare: vado, vai, va, andiamo, andate, vanno', pt: 'ir: vou, vais, vai, vamos, ides, vão', ctx: '"Andare" é muito irregular. "Vado" / "vanno" mudam completamente.', xp: 5 },
      { tipo: 'vocab', it: 'venire: vengo, vieni, viene, veniamo, venite, vengono', pt: 'vir: venho, vens, vem, vimos, vindes, vêm', ctx: '"Venire": vengo/vieni/viene/vengono são as formas mais usadas.', xp: 5 },
      { tipo: 'vocab', it: 'fare: faccio, fai, fa, facciamo, fate, fanno / dare: do, dai, dà, diamo, date, danno', pt: 'fazer / dar', ctx: '"Fare" e "dare" são muito usados. "Faccio" (faço), "fai" (fazes), "fa" (faz). "Do" (dou), "dai" (dás).', xp: 5 },
      { tipo: 'vocab', it: 'potere: posso, puoi, può / volere: voglio, vuoi, vuole / dovere: devo, devi, deve', pt: 'poder: posso, podes, pode / querer / dever', ctx: 'Modais! Sempre seguidos de infinito: "Posso venire?" = Posso vir? "Voglio un caffè" = Quero um café.', xp: 5 },
      { tipo: 'vocab', it: 'sapere: so, sai, sa / uscire: esco, esci, esce / bere: bevo, bevi, beve', pt: 'saber / sair / beber', ctx: '"So" = sei/eu sei. "Esco" = saio. "Bevo" = bebo.', xp: 5 },
      { tipo: 'frase', it: 'Vado a scuola. Vengo con te. Faccio colazione alle otto.', pt: 'Vou à escola. Venho com você. Tomo café às oito.', ctx: '"Vado a" + lugar. "Vengo con" + pessoa. "Fare colazione" = tomar café da manhã.', xp: 8 },
      { tipo: 'frase', it: 'Non posso venire stasera. Devo lavorare. Voglio dormire.', pt: 'Não posso vir esta noite. Preciso trabalhar. Quero dormir.', ctx: 'Modais + infinito: "posso venire", "devo lavorare", "voglio dormire".', xp: 8 },
      { tipo: 'dialogo', titulo: 'Programas de fim de semana', linhas: [
        { personagem: 'A', it: 'Dove vai questo weekend?', pt: 'Onde você vai neste fim de semana?' },
        { personagem: 'B', it: 'Voglio andare al mare. Vieni con noi?', pt: 'Quero ir à praia. Você vem com a gente?' },
        { personagem: 'A', it: 'Non posso, devo lavorare sabato.', pt: 'Não posso, preciso trabalhar no sábado.' },
        { personagem: 'B', it: 'Peccato! Forse la prossima volta.', pt: 'Que pena! Quem sabe na próxima vez.' },
        { personagem: 'A', it: 'Sì, dai! Ci vediamo domenica sera?', pt: 'Sim, vai lá! A gente se vê domingo à noite?' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Conjugação correta: "Loro _____ (andare)"?', opcoes: ['andano', 'vanno', 'vano', 'andono'], correta: 1, it: 'vanno', pt: 'vão', xp: 10 },
      { tipo: 'quiz', pergunta_pt: '"Eu sei falar italiano" em italiano?', opcoes: ['So parlare italiano.', 'Sai parlare italiano.', 'Posso sapere italiano.', 'So l\'italiano parlare.'], correta: 0, it: 'So parlare italiano.', pt: 'Sei falar italiano.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Não posso vir amanhã, preciso trabalhar"?', resposta_it: 'Non posso venire domani, devo lavorare.', resposta_pt: 'Não posso vir amanhã, preciso trabalhar.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M13 — Negazione e domande ── */
  {
    id: 'a1-m13', nivel: 'A1', emoji: '❓',
    nome: 'Negação e perguntas',
    descricao: 'Non, mai, ancora, chi, dove, quando…',
    xpTotal: 130,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Em italiano, negar é simples: "non" antes do verbo. Para perguntar, basta mudar a entonação ou usar palavras interrogativas.' },
      { tipo: 'vocab', it: 'non parlo, non capisco, non ho fame', pt: 'não falo, não entendo, não estou com fome', ctx: '"Non" sempre antes do verbo. Mais fácil que em português!', xp: 5 },
      { tipo: 'vocab', it: 'non...mai, non...ancora, non...più, non...niente, non...nessuno', pt: 'nunca, ainda não, não mais, nada, ninguém', ctx: 'Dupla negação é correta em italiano: "Non ho niente" (não tenho nada) — ao contrário do inglês.', xp: 5 },
      { tipo: 'vocab', it: 'chi, che cosa / cosa, dove, quando, come, quanto/a, perché', pt: 'quem, o quê, onde, quando, como, quanto, por quê', ctx: '"Cosa" e "che cosa" são intercambiáveis. "Perché?" = por quê? "Perché" = porque (resposta).', xp: 5 },
      { tipo: 'frase', it: 'Parli italiano? — No, non parlo italiano. Parlo portoghese.', pt: 'Você fala italiano? — Não, não falo italiano. Falo português.', ctx: 'Pergunta por entonação: mesma frase com voz ascendente no final.', xp: 5 },
      { tipo: 'frase', it: 'Non vado mai in palestra. Non ho ancora finito. Non lo faccio più.', pt: 'Nunca vou à academia. Ainda não terminei. Não faço mais isso.', ctx: '"Non...mai" = nunca. "Non...ancora" = ainda não. "Non...più" = não mais.', xp: 8 },
      { tipo: 'frase', it: 'Chi è? Cosa fai? Dove vai? Quando vieni? Come stai? Perché?', pt: 'Quem é? O que você faz? Onde você vai? Quando você vem? Como vai? Por quê?', ctx: 'As 6 perguntas essenciais. Pratique-as até serem automáticas.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Entrevista informal', linhas: [
        { personagem: 'A', it: 'Di dove sei? Come ti chiami?', pt: 'De onde você é? Como você se chama?' },
        { personagem: 'B', it: 'Sono Luiz, di San Paolo. E tu, dove abiti?', pt: 'Sou Luiz, de São Paulo. E você, onde mora?' },
        { personagem: 'A', it: 'Abito a Milano. Parli già bene italiano!', pt: 'Moro em Milão. Você já fala bem italiano!' },
        { personagem: 'B', it: 'Grazie! Capisco, ma non parlo ancora benissimo.', pt: 'Obrigado! Entendo, mas ainda não falo muito bem.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Nunca vou lá" em italiano?', opcoes: ['Non vado mai lì.', 'Non mai vado lì.', 'Vado mai lì.', 'Non vado sempre lì.'], correta: 0, it: 'Non vado mai lì.', pt: 'Nunca vou lá.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pergunta "Onde você mora?" em italiano?', resposta_it: 'Dove abiti?', resposta_pt: 'Onde você mora?', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M14 — Pronomi ── */
  {
    id: 'a1-m14', nivel: 'A1', emoji: '👉',
    nome: 'Pronomes',
    descricao: 'Pessoais, diretos e indiretos — como evitar repetição',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Pronomes em italiano evitam repetição. "Lo vedo" = o vejo. "Gli parlo" = falo com ele. São curtos, mas mudam tudo na frase.' },
      { tipo: 'vocab', it: 'io, tu, lui, lei, Lei, noi, voi, loro', pt: 'eu, você, ele, ela, o senhor/a senhora, nós, vocês, eles/elas', ctx: 'Pronomes sujeito são frequentemente omitidos: "Parlo" = (eu) falo. Usa-se para ênfase.', xp: 5 },
      { tipo: 'vocab', it: 'mi, ti, lo, la, La, ci, vi, li, le', pt: 'me, te, o/lo, a/la, o sr./a sra., nos, vos, os, as', ctx: 'Pronomes diretos (objeto direto). Vêm ANTES do verbo: "Lo vedo" = o vejo.', xp: 5 },
      { tipo: 'vocab', it: 'mi, ti, gli, le, Le, ci, vi, gli', pt: 'me, te, lhe (masc.), lhe (fem.), ao sr./sra., nos, vos, lhes', ctx: 'Pronomes indiretos (objeto indireto). "Gli scrivo" = escrevo a ele. "Le scrivo" = escrevo a ela / ao sr.', xp: 5 },
      { tipo: 'frase', it: 'Lo vedo ogni giorno. La chiamo stasera. Li invito alla festa.', pt: 'Vejo-o todo dia. Ligo para ela hoje à noite. Convido-os à festa.', ctx: 'Pronome direto antes do verbo: lo/la (sing.) li/le (plural). Substituem o objeto já mencionado.', xp: 8 },
      { tipo: 'frase', it: 'Gli dico la verità. Le mando un messaggio. Le telefono, signora.', pt: 'Digo a ele a verdade. Mando uma mensagem para ela. Ligo para a senhora.', ctx: '"Gli" = a ele / a eles. "Le" = a ela / à senhora (formal). Atenção ao contexto!', xp: 8 },
      { tipo: 'frase', it: 'Voglio vederlo. Devo chiamarla. Posso aiutarti?', pt: 'Quero vê-lo. Preciso ligar para ela. Posso te ajudar?', ctx: 'Com infinito: o pronome se une ao final (sem acento). "Vederlo" = vê-lo. "Aiutarti" = te ajudar.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir ajuda a alguém', informal: { it: 'Puoi aiutarmi?', pt: 'Você pode me ajudar?' }, formal: { it: 'Può aiutarmi? / Mi può aiutare?', pt: 'O senhor pode me ajudar?' }, regra: '"Puoi" (tu) / "Può" (Lei). O pronome "mi" pode ir antes ou se unir ao infinito.', xp: 15 },
      { tipo: 'quiz', pergunta_pt: '"Ligo para ele" em italiano?', opcoes: ['Lo chiamo.', 'Gli chiamo.', 'Lo telefono.', 'Gli telefono.'], correta: 3, it: 'Gli telefono.', pt: 'Ligo para ele.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Vejo ela todos os dias"?', resposta_it: 'La vedo ogni giorno.', resposta_pt: 'Vejo ela todos os dias.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M15 — Al bar e al ristorante ── */
  {
    id: 'a1-m15', nivel: 'A1', emoji: '☕',
    nome: 'No bar e restaurante',
    descricao: 'Do pedido à conta — conversa completa',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O bar italiano é diferente do brasileiro: toma-se café em pé, rapidamente. Vamos aprender a pedir, comer e pagar — de forma informal com amigos e formal em restaurantes.' },
      { tipo: 'vocab', it: 'un caffè, un cappuccino, un cornetto, un succo di frutta, una birra, un\'acqua minerale', pt: 'um café, um cappuccino, um croissant, um suco de fruta, uma cerveja, uma água mineral', ctx: '"Un caffè" no bar = expresso. Cappuccino só pela manhã — pedir à tarde levanta sobrancelhas!', xp: 5 },
      { tipo: 'vocab', it: 'antipasto, primo piatto, secondo piatto, contorno, dolce, caffè', pt: 'entrada, primeiro prato (massa/risotto), segundo (carne/peixe), acompanhamento, sobremesa, café', ctx: 'Estrutura de um jantar italiano. O "primo" é geralmente massa ou risoto. O "secondo" é proteína.', xp: 5 },
      { tipo: 'frase', it: 'Vorrei un caffè, per favore. / Mi porta un\'acqua, per favore?', pt: 'Gostaria de um café, por favor. / Pode me trazer uma água, por favor?', ctx: '"Vorrei" (gostaria — mais educado que "voglio"). "Mi porta" = traz para mim.', xp: 8 },
      { tipo: 'frase', it: 'Il conto, per favore. / Possiamo avere il conto?', pt: 'A conta, por favor. / Podemos ter a conta?', ctx: 'Na Itália não costumam trazer a conta espontaneamente — você deve pedir.', xp: 5 },
      { tipo: 'frase', it: 'È buonissimo! / Non ho ordinato questo. / È possibile cambiare?', pt: 'Está delicioso! / Não pedi isso. / É possível trocar?', ctx: '"Buonissimo" = superlativo de buono (muito bom). Reclame educadamente com tom calmo.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir ao garçom', informal: { it: 'Scusa! Ci porti due birre?', pt: 'Com licença! Pode trazer duas cervejas?' }, formal: { it: 'Mi scusi! Vorremmo ordinare.', pt: 'Com licença! Gostaríamos de pedir.' }, regra: '"Scusa" (informal). "Mi scusi" (formal). "Vorremmo" = gostaríamos (nós, condizionale).', xp: 15 },
      { tipo: 'dialogo', titulo: 'Amigos no bar', linhas: [
        { personagem: 'A', it: 'Ciao! Cosa prendi?', pt: 'Oi! O que você vai tomar?' },
        { personagem: 'B', it: 'Un cappuccino e un cornetto. E tu?', pt: 'Um cappuccino e um croissant. E você?' },
        { personagem: 'A', it: 'Solo un caffè. Ho già mangiato.', pt: 'Só um café. Já comi.' },
        { personagem: 'B', it: 'Ok! Scusa! Due caffè... ehm, un caffè e un cappuccino!', pt: 'Ok! Com licença! Dois café... opa, um café e um cappuccino!' },
      ], xp: 20 },
      { tipo: 'dialogo', titulo: 'Jantar formal', linhas: [
        { personagem: 'A', it: 'Buonasera. Avete un tavolo per due?', pt: 'Boa noite. Vocês têm uma mesa para dois?' },
        { personagem: 'B', it: 'Certo. Prego, si accomodino. Ecco il menu.', pt: 'Claro. Por favor, sentem-se. Aqui está o menu.' },
        { personagem: 'A', it: 'Grazie. Vorremmo ordinare. Per me, le tagliatelle al ragù.', pt: 'Obrigado. Gostaríamos de pedir. Para mim, as tagliatelle ao molho bolonhesa.' },
        { personagem: 'B', it: 'Ottima scelta. E per Lei, signora?', pt: 'Ótima escolha. E para a senhora?' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'A forma mais educada de pedir no restaurante?', opcoes: ['Voglio il menu.', 'Dammi il menu.', 'Vorrei vedere il menu.', 'Ho il menu?'], correta: 2, it: 'Vorrei vedere il menu.', pt: 'Gostaria de ver o cardápio.', xp: 10 },
    ],
  },

  /* ── M16 — Fare acquisti ── */
  {
    id: 'a1-m16', nivel: 'A1', emoji: '🛍',
    nome: 'Compras',
    descricao: 'Roupas, preços, provar e pagar',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Fazer compras em italiano. Do "cerco" ao "quanto costa" até pedir desconto — você vai aprender a conversa completa em uma loja.' },
      { tipo: 'vocab', it: 'la giacca, il vestito, la camicia, i pantaloni, le scarpe, la borsa', pt: 'a jaqueta, o vestido, a camisa, as calças, os sapatos, a bolsa', ctx: '"I pantaloni" é plural mesmo sendo uma única peça. Igual a "calças" em português.', xp: 5 },
      { tipo: 'vocab', it: 'la taglia (S, M, L, XL), il numero (scarpe), stretto/largo, corto/lungo', pt: 'o tamanho (S, M, G, GG), o número (calçado), apertado/largo, curto/longo', ctx: 'Tamanhos de roupa: "taglia". Tamanhos de calçado: "numero".', xp: 5 },
      { tipo: 'frase', it: 'Cerco una giacca nera. Ce l\'avete in taglia M?', pt: 'Estou procurando uma jaqueta preta. Vocês têm no tamanho M?', ctx: '"Cerco" = estou procurando. "Ce l\'avete" = vocês têm isso? (lit. você têm disso?))', xp: 8 },
      { tipo: 'frase', it: 'Posso provarlo? / Dov\'è il camerino?', pt: 'Posso experimentá-lo? / Onde é o provador?', ctx: '"Provarlo" = experimentá-lo. "Provarlo" = pro-VAR-lo (pronome junto ao infinito).', xp: 8 },
      { tipo: 'frase', it: 'Quanto costa? / Quanto vengono questi? / Fa uno sconto?', pt: 'Quanto custa? / Quanto custam esses? / Faz desconto?', ctx: '"Costa" (singular). "Vengono" (plural — verbo venire para preços). "Fa uno sconto" = faz desconto.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir ajuda na loja', informal: { it: 'Scusa, puoi aiutarmi?', pt: 'Com licença, pode me ajudar?' }, formal: { it: 'Mi scusi, può aiutarmi?', pt: 'Com licença, o senhor pode me ajudar?' }, regra: '"Puoi" (tu) / "Può" (Lei). Em lojas, o formal é mais comum.', xp: 15 },
      { tipo: 'dialogo', titulo: 'Em uma loja de roupas', linhas: [
        { personagem: 'A', it: 'Buongiorno! Posso aiutarLa?', pt: 'Bom dia! Posso ajudá-lo?' },
        { personagem: 'B', it: 'Sì, cerco un paio di pantaloni grigi. Taglia 42.', pt: 'Sim, estou procurando uma calça cinza. Tamanho 42.' },
        { personagem: 'A', it: 'Ho questi qui. Li vuole provare?', pt: 'Tenho esses aqui. O senhor quer experimentá-los?' },
        { personagem: 'B', it: 'Sì, grazie. Quanto costano?', pt: 'Sim, obrigado. Quanto custam?' },
        { personagem: 'A', it: 'Ottanta euro. Il camerino è in fondo a destra.', pt: 'Oitenta euros. O provador é ao fundo à direita.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como pede para experimentar uma blusa?', opcoes: ['Posso provare la blusa?', 'Posso provarla?', 'Voglio provare.', 'Ho il camerino?'], correta: 1, it: 'Posso provarla?', pt: 'Posso experimentá-la?', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pergunta "quanto custa?" em italiano?', resposta_it: 'Quanto costa?', resposta_pt: 'Quanto custa?', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M17 — Trasporti e direzioni ── */
  {
    id: 'a1-m17', nivel: 'A1', emoji: '🚌',
    nome: 'Transporte e direções',
    descricao: 'Como chegar ao seu destino em italiano',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Transporte e direções — essencial para se orientar na Itália. Vamos aprender como pegar metrô, ônibus e trem, e como pedir e dar direções.' },
      { tipo: 'vocab', it: 'il treno, la metropolitana (metro), l\'autobus, il taxi, il tram, a piedi', pt: 'o trem, o metrô, o ônibus, o táxi, o bonde, a pé', ctx: '"A piedi" = a pé. "Prendere il treno" = pegar o trem. "Andare in metro" = ir de metrô.', xp: 5 },
      { tipo: 'vocab', it: 'sempre dritto, a destra, a sinistra, girare, la prima strada, il semaforo, la piazza', pt: 'sempre em frente, à direita, à esquerda, virar, a primeira rua, o semáforo, a praça', ctx: '"Sempre dritto" = sempre em frente (direto). "Giri a destra al semaforo" = vire à direita no semáforo.', xp: 5 },
      { tipo: 'frase', it: 'Scusi, come si arriva alla stazione?', pt: 'Com licença, como se chega à estação?', ctx: '"Come si arriva a" = como se chega a. Forma impessoal muito usada para pedir direções.', xp: 8 },
      { tipo: 'frase', it: 'Prenda la prima strada a sinistra, poi vada sempre dritto.', pt: 'Pegue a primeira rua à esquerda, depois siga sempre em frente.', ctx: '"Prenda" e "vada" são imperativos de "prendere" e "andare" na forma formal (Lei).', xp: 8 },
      { tipo: 'frase', it: 'Vorrei un biglietto per Roma. Solo andata o andata e ritorno?', pt: 'Gostaria de uma passagem para Roma. Só ida ou ida e volta?', ctx: '"Solo andata" = só ida. "Andata e ritorno" = ida e volta. Essencial para comprar passagens.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir direções', informal: { it: 'Scusa, sai dov\'è la stazione?', pt: 'Com licença, você sabe onde fica a estação?' }, formal: { it: 'Mi scusi, sa dov\'è la stazione?', pt: 'Com licença, o senhor sabe onde fica a estação?' }, regra: '"Sai" (tu) / "Sa" (Lei). Nas ruas da Itália, o formal é a escolha padrão com desconhecidos.', xp: 15 },
      { tipo: 'dialogo', titulo: 'Pedindo direções na rua', linhas: [
        { personagem: 'A', it: 'Scusi, come si arriva al Duomo?', pt: 'Com licença, como se chega ao Duomo?' },
        { personagem: 'B', it: 'È semplice. Vada sempre dritto per due isolati.', pt: 'É simples. Vá sempre em frente por dois quarteirões.' },
        { personagem: 'A', it: 'E poi?', pt: 'E depois?' },
        { personagem: 'B', it: 'Poi giri a destra in piazza della Scala. Il Duomo è lì, non può sbagliare.', pt: 'Depois vire à direita na Piazza della Scala. O Duomo está lá, não tem como errar.' },
        { personagem: 'A', it: 'Grazie mille! È lontano?', pt: 'Muito obrigado! Fica longe?' },
        { personagem: 'B', it: 'No, cinque minuti a piedi.', pt: 'Não, cinco minutos a pé.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como diz "sempre em frente" em italiano?', opcoes: ['sempre a destra', 'sempre dritto', 'sempre sinistra', 'sempre avanti dritto'], correta: 1, it: 'sempre dritto', pt: 'sempre em frente', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pede formalmente direções para a estação?', resposta_it: 'Mi scusi, come si arriva alla stazione?', resposta_pt: 'Com licença, como se chega à estação?', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M18 — Famiglia ── */
  {
    id: 'a1-m18', nivel: 'A1', emoji: '👨‍👩‍👧',
    nome: 'Família',
    descricao: 'Parentesco, possessivos e como apresentar a família',
    xpTotal: 130,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Família em italiano — com uma regra importante: possessivos com membros da família SINGULAR não usam artigo. "Mia madre", nunca "la mia madre".' },
      { tipo: 'vocab', it: 'il padre/la madre, il fratello/la sorella, il marito/la moglie, il figlio/la figlia', pt: 'o pai/a mãe, o irmão/a irmã, o marido/a esposa, o filho/a filha', ctx: 'Família nuclear. Plural: "i fratelli" pode significar "os irmãos" (masc.) ou "irmãos e irmãs".', xp: 5 },
      { tipo: 'vocab', it: 'il nonno/la nonna, lo zio/la zia, il cugino/la cugina, il nipote/la nipote', pt: 'o avô/a avó, o tio/a tia, o primo/a prima, o sobrinho/a sobrinha', ctx: '"Nipote" pode ser tanto neto quanto sobrinho — o contexto esclarece.', xp: 5 },
      { tipo: 'frase', it: 'Mio padre si chiama Antonio. Mia madre è di Napoli.', pt: 'Meu pai se chama Antonio. Minha mãe é de Nápoles.', ctx: 'Família singular: SEM artigo. "Mio padre" (não "il mio padre"). Exceção: se tiver aggettivo: "il mio caro padre".', xp: 8 },
      { tipo: 'frase', it: 'Ho una sorella e due fratelli. I miei fratelli abitano a Roma.', pt: 'Tenho uma irmã e dois irmãos. Meus irmãos moram em Roma.', ctx: 'Família no plural: COM artigo. "I miei fratelli" (os meus irmãos) — aqui o artigo é obrigatório.', xp: 8 },
      { tipo: 'frase', it: 'Mia moglie è architetta. Mio marito lavora in banca.', pt: 'Minha esposa é arquiteta. Meu marido trabalha no banco.', ctx: '"Moglie" e "marito" são irregulares — não mudam para -a/-o como adjetivos.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Apresentando a família', linhas: [
        { personagem: 'A', it: 'Hai fratelli?', pt: 'Você tem irmãos?' },
        { personagem: 'B', it: 'Sì, ho un fratello e una sorella. Mio fratello ha trent\'anni.', pt: 'Sim, tenho um irmão e uma irmã. Meu irmão tem trinta anos.' },
        { personagem: 'A', it: 'E tua sorella? Dove abita?', pt: 'E sua irmã? Onde ela mora?' },
        { personagem: 'B', it: 'Abita a Firenze con suo marito e i loro figli.', pt: 'Ela mora em Florença com o marido e os filhos.' },
        { personagem: 'A', it: 'Che bella famiglia! I tuoi genitori stanno bene?', pt: 'Que família linda! Seus pais estão bem?' },
        { personagem: 'B', it: 'Sì, grazie! Stanno benissimo.', pt: 'Sim, obrigado! Estão ótimos.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "minha mãe" em italiano (sem artigo)?', opcoes: ['la mia madre', 'mia madre', 'la madre mia', 'mia la madre'], correta: 1, it: 'mia madre', pt: 'minha mãe', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Tenho dois irmãos e uma irmã"?', resposta_it: 'Ho due fratelli e una sorella.', resposta_pt: 'Tenho dois irmãos e uma irmã.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M19 — Casa e abitazione ── */
  {
    id: 'a1-m19', nivel: 'A1', emoji: '🏠',
    nome: 'Casa e moradia',
    descricao: 'Cômodos, móveis e preposições de lugar',
    xpTotal: 140,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Descrevendo a casa em italiano. Você vai aprender os cômodos, os móveis principais e as preposições de lugar para dizer onde está cada coisa.' },
      { tipo: 'vocab', it: 'il soggiorno, la cucina, la camera da letto, il bagno, l\'ingresso, il balcone', pt: 'a sala de estar, a cozinha, o quarto, o banheiro, a entrada, a varanda', ctx: '"Camera da letto" (lit. quarto de dormir). "Soggiorno" = sala de estar/living.', xp: 5 },
      { tipo: 'vocab', it: 'il letto, il divano, la scrivania, l\'armadio, il tavolo, la sedia, il frigorifero', pt: 'a cama, o sofá, a escrivaninha, o armário, a mesa, a cadeira, a geladeira', ctx: '"L\'armadio" (armário de roupa). "La scrivania" (mesa de trabalho). "Il tavolo" (mesa de jantar).', xp: 5 },
      { tipo: 'frase', it: 'C\'è un grande soggiorno. Ci sono tre camere da letto.', pt: 'Há uma grande sala de estar. Há três quartos.', ctx: '"C\'è" = há (singular). "Ci sono" = há (plural). Essenciais para descrever ambientes.', xp: 8 },
      { tipo: 'vocab', it: 'sopra, sotto, dentro, fuori, vicino a, lontano da, di fronte a, dietro, accanto a', pt: 'em cima de, embaixo de, dentro de, fora de, perto de, longe de, em frente a, atrás de, ao lado de', ctx: 'Preposições de lugar. "Accanto a" = ao lado de. "Di fronte a" = em frente a.', xp: 5 },
      { tipo: 'frase', it: 'Il libro è sul tavolo. Le chiavi sono nel cassetto. Il gatto è sotto il letto.', pt: 'O livro está na mesa. As chaves estão na gaveta. O gato está embaixo da cama.', ctx: '"Sul" = su + il. "Nel" = in + il. "Sotto il" = embaixo do.', xp: 8 },
      { tipo: 'frase', it: 'Il bagno è accanto alla camera da letto. La cucina è di fronte al soggiorno.', pt: 'O banheiro fica ao lado do quarto. A cozinha fica em frente à sala.', ctx: '"Accanto alla" = accanto a + la. "Di fronte al" = di fronte a + il.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Descrevendo o apartamento', linhas: [
        { personagem: 'A', it: 'Com\'è il tuo appartamento?', pt: 'Como é o seu apartamento?' },
        { personagem: 'B', it: 'È piccolo ma carino. C\'è un soggiorno, una cucina e due camere.', pt: 'É pequeno mas bonito. Há uma sala, uma cozinha e dois quartos.' },
        { personagem: 'A', it: 'Hai un balcone?', pt: 'Você tem varanda?' },
        { personagem: 'B', it: 'Sì! Il balcone è grande, di fronte alla piazza.', pt: 'Sim! A varanda é grande, de frente para a praça.' },
        { personagem: 'A', it: 'Che bello! È al centro della città?', pt: 'Que bacana! Fica no centro da cidade?' },
        { personagem: 'B', it: 'Sì, vicino alla metropolitana. Comodissimo!', pt: 'Sim, perto do metrô. Super conveniente!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Há dois banheiros" em italiano?', opcoes: ['C\'è due bagni.', 'Ci sono due bagni.', 'Ci è due bagni.', 'Ci sono due bagno.'], correta: 1, it: 'Ci sono due bagni.', pt: 'Há dois banheiros.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "O sofá está em frente à televisão"?', resposta_it: 'Il divano è di fronte alla televisione.', resposta_pt: 'O sofá está em frente à televisão.', pausa_segundos: 4, xp: 8 },
    ],
  },

];
