/* ============================================================
   B2 — Independente (M54–M72) — CONTEÚDO COMPLETO (Fase 5)
   ============================================================ */

export const B2_MODULES = [

  /* ── M54 — Congiuntivo avanzato ── */
  {
    id: 'b2-m54', nivel: 'B2', emoji: '🌀',
    nome: 'Congiuntivo avançado',
    descricao: 'Benché, sebbene, chiunque, qualunque',
    xpTotal: 230,
    exercicios: [
      { tipo: 'intro', audio_pt: 'No B2 o congiuntivo vai além do "penso che". Aprenda expressões concessivas (benché, sebbene), indefinite (chiunque, qualunque, ovunque) e o congiuntivo in frasi esclamative e dubitative.' },
      { tipo: 'vocab', it: 'benché, sebbene, malgrado, nonostante + congiuntivo', pt: 'embora, apesar de + subjuntivo', ctx: '"Benché venga tardi, è sempre produttivo." Todas exigem congiuntivo na subordinada.', xp: 5 },
      { tipo: 'vocab', it: 'chiunque, qualunque, comunque, dovunque/ovunque, qualsiasi + congiuntivo', pt: 'quem quer que, qualquer que, de qualquer forma, onde quer que, qualquer + subjuntivo', ctx: '"Chiunque venga, sarà benvenuto." (quem quer que venha). Pronomi/aggettivi indefiniti + congiuntivo.', xp: 5 },
      { tipo: 'frase', it: 'Benché sia stanco, continuerà a lavorare. Sebbene non capisca tutto, fa domande ottime.', pt: 'Embora esteja cansado, continuará trabalhando. Embora não entenda tudo, faz ótimas perguntas.', ctx: '"Benché/sebbene" + congiuntivo presente para simultaneità, + congiuntivo imperfetto per il passato.', xp: 8 },
      { tipo: 'frase', it: 'Chiunque tu sia, sei il benvenuto. Qualunque cosa accada, non mollare.', pt: 'Quem quer que você seja, seja bem-vindo. Qualquer que seja a coisa que aconteça, não desista.', ctx: '"Chiunque tu sia" = quem quer que você seja. "Qualunque cosa accada" = qualquer coisa que aconteça.', xp: 8 },
      { tipo: 'frase', it: 'Non so se venga o no. Dubito che abbiano capito. Credo che tu abbia torto, ma non ne sono sicuro.', pt: 'Não sei se vem ou não. Duvido que tenham entendido. Acho que você está errado, mas não tenho certeza.', ctx: '"Dubito che" + congiuntivo. "Non so se" = não sei se (congiuntivo opzionale).', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "___ cosa dica, non ti ascolterò." (qualunque)', opcoes: ['Qualunque cosa dica', 'Qualunque cosa dice', 'Qualsiasi cosa dici', 'Comunque dica'], correta: 0, it: 'Qualunque cosa dica, non ti ascolterò.', pt: 'Qualquer coisa que você diga, não vou te ouvir.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Embora seja difícil, é possível aprender italiano fluentemente."', resposta_it: 'Benché sia difficile, è possibile imparare l\'italiano in modo fluente.', resposta_pt: 'Embora seja difícil, é possível aprender italiano fluentemente.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M55 — Periodo Ipotetico avanzato ── */
  {
    id: 'b2-m55', nivel: 'B2', emoji: '🔀',
    nome: 'Período hipotético avançado',
    descricao: 'Misto, qualora, se fossi in te',
    xpTotal: 220,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O período hipotético avançado inclui o tipo misto (passado + presente), "qualora" em lugar de "se", e construções sofisticadas como "a meno che non" e "purché".' },
      { tipo: 'vocab', it: 'Tipo misto: Se non fossi andato in Italia, non parlerei italiano ora.', pt: 'Tipo misto: Se eu não tivesse ido à Itália, não falaria italiano agora.', ctx: 'Tipo misto: hipótese passada com consequência no presente. "Se" + congiuntivo trapassato → condizionale presente.', xp: 5 },
      { tipo: 'vocab', it: 'qualora + congiuntivo, a meno che non + congiuntivo, purché + congiuntivo, a patto che + congiuntivo', pt: 'caso, a menos que, desde que, desde que', ctx: '"Qualora" = caso (mais formal que "se"). "Purché" = desde que. "A meno che non" = a menos que.', xp: 5 },
      { tipo: 'frase', it: 'Se fossi in te, accetterei l\'offerta. / Al tuo posto, non direi niente.', pt: 'Se eu fosse você, aceitaria a oferta. / No seu lugar, não diria nada.', ctx: '"Se fossi in te" = se eu fosse você. "Al tuo posto" = no seu lugar. Consigli ipotetici.', xp: 8 },
      { tipo: 'frase', it: 'Qualora avesse bisogno di ulteriori informazioni, non esiti a contattarmi.', pt: 'Caso precise de informações adicionais, não hesite em me contatar.', ctx: '"Qualora avesse" = caso precise (mais formal que "se ha bisogno"). Típico de e-mail formale.', xp: 8 },
      { tipo: 'frase', it: 'Vengo alla festa, purché finisca il lavoro in tempo. A meno che non piova, usciamo.', pt: 'Vou à festa, desde que termine o trabalho a tempo. A menos que chova, saímos.', ctx: '"Purché" + congiuntivo = desde que. "A meno che non" + congiuntivo = a menos que.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Se non ___ in Italia, non parlerei italiano ora." (tipo misto)', opcoes: ['sono andato', 'andavo', 'fossi andato', 'andrò'], correta: 2, it: 'Se non fossi andato in Italia, non parlerei italiano ora.', pt: 'Tipo misto: hipótese no passado → consequência no presente.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Construa: "Se eu tivesse estudado medicina, seria médico agora."', resposta_it: 'Se avessi studiato medicina, sarei medico adesso.', resposta_pt: 'Se eu tivesse estudado medicina, seria médico agora.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M56 — Infinito e costruzioni ── */
  {
    id: 'b2-m56', nivel: 'B2', emoji: '🔧',
    nome: 'Infinito e costruções',
    descricao: 'Fare causativo, lasciare, verbi di percezione',
    xpTotal: 210,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Construções com infinito: fare causativo, lasciare, verbi di percezione (vedere, sentire, ascoltare). "Faccio riparare la macchina" — faço consertar o carro. Uma área que distingue o B2.' },
      { tipo: 'vocab', it: 'fare + infinito (causativo): faccio riparare, faccio venire, ho fatto aspettare', pt: 'fazer + infinito (causativo): mando consertar, faço vir, fiz esperar', ctx: '"Fare + infinito" = fazer alguém fazer algo ou mandar fazer. "Ho fatto aspettare" = fiz esperar.', xp: 5 },
      { tipo: 'vocab', it: 'lasciare + infinito: lascia parlare, l\'ho lasciata uscire, lasciami stare', pt: 'deixar + infinito: deixa falar, deixei ela sair, me deixa em paz', ctx: '"Lasciare + infinito" = deixar (permissão/concessão). "Lasciami stare" = me deixa em paz.', xp: 5 },
      { tipo: 'frase', it: 'Ho fatto riparare la macchina. Ho fatto venire il tecnico. L\'ho fatto aspettare troppo.', pt: 'Mandei consertar o carro. Fiz vir o técnico. Fiz ele esperar demais.', ctx: 'Com pronome: "L\'ho fatto aspettare" (il tecnico → lo → l\'). O pronome precede "ho fatto".', xp: 8 },
      { tipo: 'frase', it: 'Ho visto entrare Marco. L\'ho sentita piangere. Ho ascoltato suonare l\'orchestra.', pt: 'Vi o Marco entrar. Ouvi ela chorar. Escutei a orquestra tocar.', ctx: 'Verbi di percezione + infinito: vedere/sentire/ascoltare + infinito (sem "che").', xp: 8 },
      { tipo: 'frase', it: 'Si fa capire bene. Si fa voler bene da tutti. Si lascia trasportare dalle emozioni.', pt: 'Se faz entender bem. Se faz querer bem por todos. Se deixa levar pelas emoções.', ctx: '"Farsi" = fazer-se. "Lasciarsi" = deixar-se. Construccioni riflessive molto espressive.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como diz "Fiz ele esperar" com faire causativo?', opcoes: ['Ho fatto lui aspettare', 'L\'ho fatto aspettare', 'Ho fatto aspettare a lui', 'L\'ho lasciato aspettare'], correta: 1, it: 'L\'ho fatto aspettare.', pt: 'Fiz ele esperar. (pronome antes de "ho fatto")', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Mandei consertar o computador"?', resposta_it: 'Ho fatto riparare il computer.', resposta_pt: 'Mandei consertar o computador.', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M57 — Connettivi e coesione ── */
  {
    id: 'b2-m57', nivel: 'B2', emoji: '🔗',
    nome: 'Conectivos e coesão',
    descricao: 'Poiché, dunque, benché, affinché e muito mais',
    xpTotal: 210,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Conectivos de nível B2 elevam o seu italiano de "correto" para "elegante". São as palavras que estruturam o raciocínio: causa, consequência, contraste, finalidade.' },
      { tipo: 'vocab', it: 'Causa: poiché, siccome, dal momento che, dato che', pt: 'Causa: porque/visto que, já que, dado que', ctx: '"Poiché" e "siccome" iniciam a frase com a causa. "Dato che" é mais coloquiale.', xp: 5 },
      { tipo: 'vocab', it: 'Consequência: quindi, dunque, pertanto, di conseguenza, per cui', pt: 'Consequência: portanto, logo, por conseguinte, consequentemente, por isso', ctx: '"Quindi" = portanto (mais comum). "Pertanto/dunque" = formale. "Per cui" = por isso/coloquiale.', xp: 5 },
      { tipo: 'vocab', it: 'Contrasto: tuttavia, eppure, ciononostante, nondimeno, d\'altra parte', pt: 'Contraste: todavia, mesmo assim, apesar disso, não obstante, por outro lado', ctx: '"Tuttavia" e "eppure" são os mais usados. "Ciononostante" = muito formal.', xp: 5 },
      { tipo: 'vocab', it: 'Finalità: affinché + congiuntivo, in modo che + congiuntivo, al fine di + infinito', pt: 'Finalidade: para que + subjuntivo, de modo que, a fim de', ctx: '"Affinché tu capisca" = para que você entenda. Sempre congiuntivo após affinché.', xp: 5 },
      { tipo: 'frase', it: 'Dal momento che non hai studiato, è normale non capire. Tuttavia, non è troppo tardi per ricominciare.', pt: 'Já que você não estudou, é normal não entender. Todavia, não é tarde demais para recomeçar.', ctx: '"Dal momento che" (causa) → "tuttavia" (contrasto). Sequência lógica elegante.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual conectivo expressa CAUSA em italiano formal?', opcoes: ['tuttavia', 'quindi', 'poiché', 'affinché'], correta: 2, it: 'Poiché / siccome / dal momento che', pt: 'Porque / já que — conectivos de causa (iniziano la frase).', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Conecte: "Estava cansado → portanto foi dormir cedo."', resposta_it: 'Era stanco, quindi è andato a letto presto.', resposta_pt: 'Estava cansado, portanto foi dormir cedo.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M58 — Falar de si com profundidade ── */
  {
    id: 'b2-m58', nivel: 'B2', emoji: '🪞',
    nome: 'Falar de si com profundidade',
    descricao: 'Personalidade, valores e objetivos',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'No B2 você pode falar sobre si mesmo com nuance. Não só "sono brasiliano" mas sua visão de mundo, valores, contradições e sonhos — em italiano fluente.' },
      { tipo: 'vocab', it: 'Sono una persona + aggettivo / Tendo a + infinito / Ho la tendenza a / Mi contraddistingue il fatto che', pt: 'Sou uma pessoa + adj / Tendo a / Tenho tendência a / Me caracteriza o fato de que', ctx: 'Estruturas para se descrever de forma sofisticada. "Mi contraddistingue" = me diferencia.', xp: 5 },
      { tipo: 'frase', it: 'Sono una persona pragmatica, però tendo a riflettere troppo prima di prendere una decisione.', pt: 'Sou uma pessoa pragmática, porém tendo a refletir demais antes de tomar uma decisão.', ctx: 'Descrever uma qualidade + uma nuance/contradição = soa autêntico e maduro.', xp: 8 },
      { tipo: 'frase', it: 'Ciò che mi motiva davvero è poter crescere. Non mi accontento della mediocrità.', pt: 'O que me motiva de verdade é poder crescer. Não me contento com a mediocridade.', ctx: '"Ciò che" = o que (pronome relativo neutro). "Non accontentarsi di" = não se contentar com.', xp: 8 },
      { tipo: 'frase', it: 'Tra cinque anni mi vedo in un ruolo di responsabilità, possibilmente all\'estero.', pt: 'Em cinco anos me vejo em um papel de responsabilidade, possivelmente no exterior.', ctx: 'Projeção futura: "tra + tempo + mi vedo + gerúndio/particípio". Clássica pergunta de entrevista.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Colloquio di lavoro', linhas: [
        { personagem: 'A', it: 'Mi parli di sé. Cosa la distingue dagli altri candidati?', pt: 'Fale-me de você. O que o distingue dos outros candidatos?' },
        { personagem: 'B', it: 'Sono una persona determinata e creativa. Mi distinguo per la capacità di trovare soluzioni originali.', pt: 'Sou uma pessoa determinada e criativa. Me diferencio pela capacidade de encontrar soluções originais.' },
        { personagem: 'A', it: 'Qual è il suo maggior difetto?', pt: 'Qual é o seu maior defeito?' },
        { personagem: 'B', it: 'Tendo ad essere un perfezionista, il che a volte rallenta il mio lavoro. Sto lavorando su questo.', pt: 'Tendo a ser perfeccionista, o que às vezes atrasa meu trabalho. Estou trabalhando nisso.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como diz "Tendo a ser perfeccionista" em italiano?', opcoes: ['Sono perfezionista', 'Tendo ad essere un perfezionista', 'Mi piace essere perfezionista', 'Era perfezionista'], correta: 1, it: 'Tendo ad essere un perfezionista.', pt: 'Tendo a ser perfeccionista. ("tendere a" = ter tendência a)', xp: 10 },
      { tipo: 'formal_vs_informal', situacao: 'Falar de si mesmo numa entrevista vs com amigos', informal: { it: 'Sono curioso, amo imparare cose nuove e mi adatto facilmente.', pt: 'Sou curioso, adoro aprender coisas novas e me adapto facilmente.' }, formal: { it: 'Mi contraddistingue la capacità di adattamento e la propensione all\'apprendimento continuo.', pt: 'Me caracteriza a capacidade de adaptação e a propensão ao aprendizado contínuo.' }, regra: 'Informal: adjetivos diretos. Formal (entrevista): substantivos abstratos ("propensione", "capacità") soam mais profissionais.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Descreva brevemente sua personalidade em italiano.', resposta_it: 'Sono una persona curiosa e ambiziosa. Tendo a lavorare molto, ma so anche godermi la vita.', resposta_pt: 'Sou uma pessoa curiosa e ambiciosa. Tendo a trabalhar muito, mas também sei aproveitar a vida.', pausa_segundos: 6, xp: 8 },
    ],
  },

  /* ── M59 — Argomentazione e persuasione ── */
  {
    id: 'b2-m59', nivel: 'B2', emoji: '💡',
    nome: 'Argumentação e persuasão',
    descricao: 'Estrutura argumentativa e linguagem persuasiva',
    xpTotal: 220,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Argumentar em italiano com estrutura clara: tese, argomenti, controargomentazione, conclusione. Linguagem persuasiva que funciona em debates, reuniões e testi scritti.' },
      { tipo: 'vocab', it: 'La mia tesi è che... / Innanzitutto / In secondo luogo / Infine / In conclusione', pt: 'Minha tese é que... / Em primeiro lugar / Em segundo lugar / Por fim / Em conclusão', ctx: 'Estrutura clássica de argumentação. Usar estas expressões deixa o raciocínio claro e convincente.', xp: 5 },
      { tipo: 'vocab', it: 'È evidente che / Non si può negare che / I dati dimostrano che / Come si può vedere', pt: 'É evidente que / Não se pode negar que / Os dados demonstram que / Como se pode ver', ctx: 'Expressões para apoiar argumentos com evidências. Todas + indicativo (fato).', xp: 5 },
      { tipo: 'frase', it: 'Innanzitutto, bisogna riconoscere che il problema esiste. In secondo luogo, occorre trovare soluzioni concrete.', pt: 'Em primeiro lugar, é necessário reconhecer que o problema existe. Em segundo lugar, é preciso encontrar soluções concretas.', ctx: '"Bisogna/occorre" + infinito = é necessário/preciso (impersonale). Elegante in italiano formale.', xp: 8 },
      { tipo: 'frase', it: 'Capisco il punto di vista opposto, tuttavia ritengo che i vantaggi superino di gran lunga gli svantaggi.', pt: 'Entendo o ponto de vista oposto, todavia acredito que as vantagens superam em muito as desvantagens.', ctx: '"Supera di gran lunga" = supera em muito. Controargomentazione elegante e respettosa.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual expressão introduz o PRIMEIRO argumento numa argumentação formal?', opcoes: ['In conclusione', 'Tuttavia', 'Innanzitutto', 'Di conseguenza'], correta: 2, it: 'Innanzitutto, bisogna riconoscere che...', pt: 'Em primeiro lugar, é necessário reconhecer que...', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Inicie um argumento formal: "Em primeiro lugar... Em segundo lugar..."', resposta_it: 'Innanzitutto, il problema è reale. In secondo luogo, esistono soluzioni concrete.', resposta_pt: 'Em primeiro lugar, o problema é real. Em segundo lugar, existem soluções concretas.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M60 — Narrare e descrivere ── */
  {
    id: 'b2-m60', nivel: 'B2', emoji: '📖',
    nome: 'Narrar e descrever',
    descricao: 'Conectivos narrativos e descrição rica',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Narrar eventos e descrever cenários com riqueza de detalhes. Conectivos temporais, descrições vívidas e variação de tempo verbal fazem a diferença entre B1 e B2.' },
      { tipo: 'vocab', it: 'all\'improvviso, d\'un tratto, nel frattempo, poco dopo, alla fine, nel bel mezzo di', pt: 'de repente, de repente, enquanto isso, pouco depois, afinal, bem no meio de', ctx: '"All\'improvviso/d\'un tratto" = de repente. "Nel frattempo" = enquanto isso. Essenciali per narrare.', xp: 5 },
      { tipo: 'frase', it: 'Stavo camminando tranquillamente quando, d\'un tratto, ha iniziato a piovere a dirotto.', pt: 'Estava caminhando tranquilamente quando, de repente, começou a chover torrencialmente.', ctx: '"Piovere a dirotto" = chover torrencialmente. "D\'un tratto" = de repente. Narrazione vivida.', xp: 8 },
      { tipo: 'frase', it: 'Il vicolo era stretto e buio. Odore di caffè e spezie. Nel bel mezzo del mercato, un\'orchestra di strada.', pt: 'O beco era estreito e escuro. Cheiro de café e especiarias. Bem no meio do mercado, uma orquestra de rua.', ctx: 'Descrizione evocativa: frasi brevi, dettagli sensoriali. Struttura tipica della narrativa litteraria.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Raccontare un aneddoto', linhas: [
        { personagem: 'A', it: 'Senti, ti racconto una cosa assurda che mi è successa ieri.', pt: 'Olha, vou te contar uma coisa absurda que me aconteceu ontem.' },
        { personagem: 'B', it: 'Dai, racconta!', pt: 'Vai, conta!' },
        { personagem: 'A', it: 'Stavo andando al lavoro quando d\'un tratto ho visto il mio ex con la mia migliore amica.', pt: 'Estava indo ao trabalho quando de repente vi meu ex com minha melhor amiga.' },
        { personagem: 'B', it: 'No! E poi com\'è finita?', pt: 'Não! E depois como terminou?' },
        { personagem: 'A', it: 'Alla fine ho scoperto che stavano organizzando una festa a sorpresa per me!', pt: 'No final descobri que estavam organizando uma festa surpresa para mim!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como diz "de repente" em italiano (duas opções)?', opcoes: ['nel frattempo / poco dopo', 'd\'un tratto / all\'improvviso', 'alla fine / in fondo', 'nel bel mezzo / intanto'], correta: 1, it: 'D\'un tratto / All\'improvviso', pt: 'De repente (d\'un tratto é mais narrativo, all\'improvviso mais colloquiale)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Narre brevemente um anedoto usando "d\'un tratto" e "alla fine".', resposta_it: 'Stavo leggendo quando d\'un tratto è caduta la luce. Alla fine ho trovato le candele!', resposta_pt: 'Estava lendo quando de repente caiu a luz. No final achei as velas!', pausa_segundos: 6, xp: 8 },
    ],
  },

  /* ── M61 — Umorismo e ironia ── */
  {
    id: 'b2-m61', nivel: 'B2', emoji: '😂',
    nome: 'Humor e ironia',
    descricao: 'O humor italiano: ironia, sarcasmo, hipérbole',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O humor italiano é marcado por ironia, autoironia e hipérbole. Entender e usar o humor é sinal claro de proficiência real. Vamos aprender as estruturas que fazem italianos rirem.' },
      { tipo: 'vocab', it: 'l\'ironia, il sarcasmo, l\'iperbole, l\'understatement, la battuta, la barzelletta', pt: 'a ironia, o sarcasmo, a hipérbole, o understatement, a piada/comentário espirituoso, a piada', ctx: '"Battuta" = comentário espirituoso/piada de situação. "Barzelletta" = piada clássica com setup e punchline.', xp: 5 },
      { tipo: 'frase', it: 'Ma dai, sei un genio! (detto con tono ironico a chi ha fatto una cosa stupida)', pt: 'Nossa, você é um gênio! (dito com tom irônico a quem fez algo estúpido)', ctx: 'Ironia italiana: o contrário exato do que se quer dizer, com tom exagerado. Reconhecível pelo contexto.', xp: 8 },
      { tipo: 'frase', it: 'Ho aspettato solo tre ore. / L\'ufficio postale? Velocissimi, come sempre.', pt: 'Esperei apenas três horas. / A agência dos correios? Rapidíssimos, como sempre.', ctx: 'Understatement ("solo tre ore") e sarcasmo ("velocissimi, come sempre"). Tipicamente italiano.', xp: 8 },
      { tipo: 'frase', it: 'Ho una fame da lupi! Mi venderei per un piatto di pasta. Ci metto un\'eternità.', pt: 'Estou morto de fome! Me venderia por um prato de massa. Demoro uma eternidade.', ctx: 'Hipérbole italiana: exagerar para ser expressivo, não literal. Muito comum e natural.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Ironia quotidiana', linhas: [
        { personagem: 'A', it: 'Il treno è in ritardo di due ore. Grande efficienza!', pt: 'O trem está atrasado duas horas. Grande eficiência!' },
        { personagem: 'B', it: 'Come sempre! Ci vediamo dopodomani, allora.', pt: 'Como sempre! A gente se vê depois de amanhã, então.' },
        { personagem: 'A', it: 'Esatto. Ho portato un libro, una cena e un sacco a pelo.', pt: 'Exatamente. Trouxe um livro, um jantar e um saco de dormir.' },
        { personagem: 'B', it: 'Ah ah! Almeno c\'è il wi-fi... no, aspetta, non funziona nemmeno quello.', pt: 'Haha! Pelo menos tem wi-fi... não, espera, isso também não funciona.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'O que é uma "battuta" em italiano?', opcoes: ['Uma pancada', 'Um comentário espirituoso / piada de situação', 'Uma briga verbal', 'Uma piada com setup e punchline'], correta: 1, it: 'Una battuta!', pt: 'Um comentário espirituoso / piada de situação. (A piada clássica com setup é "barzelletta")', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Use hipérbole italiana: "Estou com muito frio."', resposta_it: 'Sto morendo di freddo! Ho un freddo pazzesco!', resposta_pt: 'Estou morrendo de frio! Um frio absurdo!', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M62 — Business avanzato ── */
  {
    id: 'b2-m62', nivel: 'B2', emoji: '📈',
    nome: 'Business avançado',
    descricao: 'Pitch, negociação e linguagem executiva',
    xpTotal: 230,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Italiano para executivos: pitch de produto, negociação de contratos, linguagem de relatórios. O registro que diferencia um falante B1 de um B2 no mundo dos negócios.' },
      { tipo: 'vocab', it: 'il pitch, la proposta commerciale, la trattativa, il margine, la redditività, il ROI, fare un\'offerta', pt: 'o pitch, a proposta comercial, a negociação, a margem, a rentabilidade, o ROI, fazer uma oferta', ctx: 'Vocabolario del business italiano moderno. Molti anglicismi (pitch, ROI) sono entrati nell\'uso corrente.', xp: 5 },
      { tipo: 'frase', it: 'Ci permettiamo di sottoporre alla Sua attenzione una proposta commerciale vantaggiosa per entrambe le parti.', pt: 'Permitimo-nos apresentar à sua atenção uma proposta comercial vantajosa para ambas as partes.', ctx: '"Ci permettiamo di" = nos permitimos (formula di cortesia estrema). "Entrambe le parti" = ambas as partes.', xp: 8 },
      { tipo: 'frase', it: 'Siamo disposti a rivedere i termini. Tuttavia, non possiamo scendere al di sotto di questa cifra.', pt: 'Estamos dispostos a revisar os termos. Todavia, não podemos ir abaixo deste valor.', ctx: 'Negoziazione: mostrare flessibilità + linha di fondo. "Al di sotto di" = abaixo de. Formula classica.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Trattativa commerciale', linhas: [
        { personagem: 'A', it: 'Grazie per l\'offerta. Tuttavia, il prezzo è al di sopra del nostro budget.', pt: 'Obrigado pela oferta. Todavia, o preço está acima do nosso orçamento.' },
        { personagem: 'B', it: 'Capisco. Saremmo disposti a rivedere le condizioni. Quale sarebbe il vostro tetto?', pt: 'Entendo. Estaríamos dispostos a revisar as condições. Qual seria o seu teto?' },
        { personagem: 'A', it: 'Potremmo arrivare a 50.000 euro, tutto compreso.', pt: 'Poderíamos chegar a 50.000 euros, tudo incluso.' },
        { personagem: 'B', it: 'Ci pensiamo e Le risponderemo entro domani. Ovviamente, includeremmo il supporto post-vendita.', pt: 'Pensamos e respondemos até amanhã. Obviamente, incluiríamos o suporte pós-venda.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: '"Siamo disposti a rivedere i termini" significa:', opcoes: ['Recusamos totalmente a proposta', 'Estamos dispostos a revisar os termos', 'Aceitamos todas as condições', 'Precisamos de mais tempo'], correta: 1, it: 'Siamo disposti a rivedere i termini.', pt: 'Estamos dispostos a revisar os termos. (abertura para negociar sem se comprometer)', xp: 10 },
      { tipo: 'formal_vs_informal', situacao: 'Apresentar uma proposta comercial', informal: { it: 'Senti, abbiamo un\'offerta interessante per te.', pt: 'Olha, temos uma oferta interessante pra você.' }, formal: { it: 'Ci permettiamo di sottoporre alla Sua cortese attenzione una proposta commerciale vantaggiosa.', pt: 'Permitimo-nos apresentar à sua cortês atenção uma proposta comercial vantajosa.' }, regra: 'Informal: direto e pessoal. Formal: "permettersi di", "cortese attenzione", "sottoporre" — elevam o registro em negócios.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz formalmente que está aberto a negociar, mas com limites?', resposta_it: 'Siamo disposti a trattare, tuttavia non possiamo scendere al di sotto di questa cifra.', resposta_pt: 'Estamos dispostos a negociar, todavia não podemos ir abaixo deste valor.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M63 — Italiano accademico ── */
  {
    id: 'b2-m63', nivel: 'B2', emoji: '🎓',
    nome: 'Italiano acadêmico',
    descricao: 'Saggio, relazione e linguagem acadêmica',
    xpTotal: 210,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Italiano para contextos acadêmicos: escrever um saggio (ensaio), apresentar uma relazione (relatório), linguagem de tesi. Estruturas formais e vocabulário específico.' },
      { tipo: 'vocab', it: 'il saggio, la tesi, la relazione, la citazione, la bibliografia, l\'abstract, la metodologia', pt: 'o ensaio, a tese, o relatório, a citação, a bibliografia, o abstract, a metodologia', ctx: 'Vocabolario della scrittura accademica. "Saggio" = ensaio crítico. "Relazione" = relatório de pesquisa.', xp: 5 },
      { tipo: 'vocab', it: 'Come sostiene X, / Secondo quanto afferma / Come emerge dall\'analisi / In definitiva / Si evince che', pt: 'Como afirma X, / Segundo o que afirma / Como emerge da análise / Em definitivo / Depreende-se que', ctx: 'Expressões acadêmicas para citar, analisar e concluir. "Si evince che" = depreende-se que (molto accademico).', xp: 5 },
      { tipo: 'frase', it: 'Come sostiene Eco nell\'opera in questione, il testo letterario ammette interpretazioni molteplici.', pt: 'Como sustenta Eco na obra em questão, o texto literário admite múltiplas interpretações.', ctx: '"Come sostiene" + autore = como sustenta/afirma. "In questione" = em questão. Citação acadêmica.', xp: 8 },
      { tipo: 'frase', it: 'Dall\'analisi dei dati si evince che il fenomeno è in costante crescita. In definitiva, la ricerca conferma l\'ipotesi iniziale.', pt: 'Da análise dos dados depreende-se que o fenômeno está em constante crescimento. Em definitivo, a pesquisa confirma a hipótese inicial.', ctx: '"Si evince" = depreende-se/evidencia-se. "In definitiva" = em definitivo. Conclusioni accademiche.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'O que significa "si evince" em italiano acadêmico?', opcoes: ['se evita', 'depreende-se / evidencia-se', 'se evade', 'se inventa'], correta: 1, it: 'Si evince che il fenomeno è in costante crescita.', pt: 'Depreende-se que o fenômeno está em constante crescimento. (tipicamente acadêmico)', xp: 10 },
      { tipo: 'formal_vs_informal', situacao: 'Discordar de uma ideia no texto vs numa conversa', informal: { it: 'Non sono d\'accordo: questa conclusione non ha senso.', pt: 'Não concordo: essa conclusão não faz sentido.' }, formal: { it: 'Desta tesi risulta difficile condividere la conclusione proposta, in quanto i dati sembrano indicare il contrário.', pt: 'Desta tese é difícil compartilhar a conclusão proposta, visto que os dados parecem indicar o contrário.' }, regra: 'Acadêmico: nunca diga "Non sono d\'accordo" diretamente. Use "risulta difficile condividere" ou "non pare condivisibile".', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como introduz uma citação acadêmica em italiano?', resposta_it: 'Come sostiene il professor Rossi, / Secondo quanto afferma l\'autore,', resposta_pt: 'Como sustenta o professor Rossi, / Segundo o que afirma o autor,', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M64 — Dialetti e accenti ── */
  {
    id: 'b2-m64', nivel: 'B2', emoji: '🗣',
    nome: 'Dialetos e sotaques',
    descricao: 'Milano, Roma, Napoli — reconhecer sotaques',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A Itália tem dialetos fortíssimos. Entender que existe uma diferença entre "italiano standard" e como se fala em Milão, Roma e Nápoles ajuda a não se perder quando falar com nativos.' },
      { tipo: 'vocab', it: 'il dialetto milanese: "voeuri" (voglio), "là" (lì) — veneziano: "xe" (è) — romanesco: "me" (mi), "che cazzo" senza tabù', pt: 'Características regionais: milanese, veneziano, romanesco', ctx: 'Dialetos não são "italiano errado" — são línguas próprias com histórias ricas. O italiano standard é uma convenção.', xp: 5 },
      { tipo: 'frase', it: 'Il romanesco usa "aò!" come interiezione. Il napoletano usa molte doppie: "cappuccino" diventa "capbuccino".', pt: 'O romanesco usa "aò!" como interjeição. O napolitano usa muito a dupla consoante.', ctx: '"Aò" = atenção/ei no romanesco. Napolitano: melodia distintiva, muito expressivo.', xp: 8 },
      { tipo: 'frase', it: 'Il nord parla veloce e tende a non aprire le vocali. Il sud parla più musicalmente, con enfasi emozionale.', pt: 'O norte fala rápido e tende a não abrir as vogais. O sul fala mais melodiosamente, com ênfase emocional.', ctx: 'Generalismi, mas úteis: accento settentrionale (chiuso, veloce) vs meridionale (aperto, melodico).', xp: 8 },
      { tipo: 'frase', it: '"Allora, dai, forza" sono parole usate ovunque ma con intonazioni diverse per regione.', pt: '"Allora, dai, forza" são palavras usadas em toda parte mas com entonações diferentes por região.', ctx: 'Mesmo vocabulário — entonação diferente muda o significado ou a intensidade. Osservare e ascoltare.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se caracteriza o sotaque do Sul da Itália?', opcoes: ['Rápido e com vogais fechadas', 'Sem consoantes duplas', 'Mais melódico e aberto que o Norte', 'Idêntico ao italiano padrão'], correta: 2, it: 'L\'accento meridionale è più melodico e aperto.', pt: 'O sotaque do Sul é mais melódico e aberto — muito expressivo emocionalmente.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Descreva em uma frase a diferença de sotaque entre Norte e Sul da Itália.', resposta_it: 'Il nord tende a parlare più veloce e con vocali chiuse; il sud ha un accento più melodico e aperto.', resposta_pt: 'O norte tende a falar mais rápido com vogais fechadas; o sul tem um sotaque mais melódico e aberto.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M65 — Media e giornalismo ── */
  {
    id: 'b2-m65', nivel: 'B2', emoji: '📰',
    nome: 'Mídia e jornalismo',
    descricao: 'Ler e entender La Repubblica e o TG',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Italiano da mídia: jornais, TG (telegiornale), podcast. A linguagem jornalística usa estruturas específicas, passivo, titoli truncados. Vamos aprender a decifrar notícias italianas.' },
      { tipo: 'vocab', it: 'il titolo, l\'articolo, il servizio, il redattore, la notizia, l\'inchiesta, il commento', pt: 'o título, o artigo, o serviço/matéria, o redator, a notícia, a investigação, o comentário', ctx: '"Servizio" = matéria jornalística (TV/radio). "Inchiesta" = investigação jornalística longa.', xp: 5 },
      { tipo: 'frase', it: 'Titolo giornalistico: "Vertice G7: accordo sul clima. Opposizione all\'attacco." (linguaggio tipico)', pt: 'Título jornalístico: "Cúpula G7: acordo sobre o clima. Oposição ao ataque."', ctx: 'Titoli: frasi brevi, senza articoli, verbi all\'indicativo presente (valore storico). Molto compresso.', xp: 8 },
      { tipo: 'frase', it: 'Il ministro ha dichiarato che la situazione è sotto controllo. Secondo fonti ministeriali, i dati sarebbero positivi.', pt: 'O ministro declarou que a situação está sob controle. Segundo fontes ministeriais, os dados seriam positivos.', ctx: '"Secondo fonti" + condizionale = dado não confirmado (jornalisticamente prudente). Struttura tipica.', xp: 8 },
      { tipo: 'frase', it: 'Nel corso di un\'intervista rilasciata a La Repubblica, il CEO ha sottolineato che...', pt: 'No decurso de uma entrevista concedida à La Repubblica, o CEO destacou que...', ctx: '"Nel corso di" = no decurso de. "Rilasciata a" = concedida a. "Ha sottolineato" = destacou. Linguaggio giornalistico.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'No jornalismo italiano, o condizionale após "secondo fonti" indica:', opcoes: ['Fato completamente confirmado', 'Informação não confirmada — prudência jornalística', 'Hipótese do próprio jornalista', 'Notícia falsa'], correta: 1, it: 'Secondo fonti anonime, la situazione sarebbe critica.', pt: 'Segundo fontes anônimas, a situação seria crítica. (condizionale = não confirmado)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como introduz uma informação não confirmada em linguagem jornalística italiana?', resposta_it: 'Secondo fonti anonime, la situazione sarebbe più grave del previsto.', resposta_pt: 'Segundo fontes anônimas, a situação seria mais grave do que o previsto.', pausa_segundos: 4, xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Reportar um acontecimento — artigo de jornal vs post de redes sociais', informal: { it: 'Roba assurda! Il sindaco beccato a rubare soldi pubblici — scandalo totale!', pt: 'Coisa absurda! O prefeito pego roubando dinheiro público — escândalo total!' }, formal: { it: 'Il sindaco è stato sorpreso in flagrante durante il prelievo illegale di fondi pubblici, secondo quanto dichiarato dalla procura.', pt: 'O prefeito foi surpreendido em flagrante durante o saque ilegal de fundos públicos, segundo declarou a promotoria.' }, regra: 'Jornalístico: passivo ("è stato sorpreso"), fonte explícita ("secondo la procura"), sem exclamação. Redes: emotivo, direto, adjetivos fortes.', xp: 15 },
    ],
  },

  /* ── M66 — Scritto vs parlato ── */
  {
    id: 'b2-m66', nivel: 'B2', emoji: '💬',
    nome: 'Escrito vs falado',
    descricao: 'Como nativos falam x como se escreve formalmente',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O italiano falado e o escrito são muito diferentes. Nativos usam costruzioni che i libri non insegnano. Aprenda a diferença para soar natural e entender conversas reais.' },
      { tipo: 'vocab', it: 'Scritto: "Non lo so." → Parlato: "Boh!" / Scritto: "Hai mangiato?" → Parlato: "Hai mangiato?"(ma velocissimo: "aimangià?")', pt: 'Escrito vs falado: diferenças de velocidade, fusão fonética e vocabulário', ctx: 'Na fala natural, parole come "hai" diventano quasi "ai", "quello" diventa "\'l quello". Normale!', xp: 5 },
      { tipo: 'frase', it: 'Scritto: "Cosa stai facendo?" — Parlato: "Cosa fai?" / "Che fai?" / "Che stai a fa\'?" (romanesco)', pt: 'Escrito: "O que você está fazendo?" — Falado: "O que você faz?" / dialetal', ctx: '"Stare + gerundio" è più formale. Nella conversazione, il semplice presente basta.', xp: 8 },
      { tipo: 'frase', it: 'Scritto: "Poiché era stanco, è andato a dormire." — Parlato: "Era stanco, quindi è andato a letto."', pt: 'Escrito: conectivo formal. Falado: "então" simples.', ctx: '"Poiché" = escrito/formale. "Quindi" = parlato. Il livello di registro cambia todo in italiano.', xp: 8 },
      { tipo: 'frase', it: 'Che ora è? → Che ore sono? → Che ore fa? (colloq. meridionale) — tutte corrette in diversi contesti', pt: '"Que horas são?" — três formas corretas em diferentes registros e regiões.', ctx: 'La variazione regionale + il registro creano questa diversità. Nessuna è sbagliata nel contesto giusto.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual é a versão INFORMAL (falada) de "Poiché era stanco, è andato a dormire"?', opcoes: ['Siccome era stanco, è andato a dormire', 'Dal momento che era stanco, è andato a dormire', 'Era stanco, quindi è andato a letto', 'Dato che era stanco, è andato a dormire'], correta: 2, it: 'Era stanco, quindi è andato a letto.', pt: '"Quindi" = versão falada. "Poiché/siccome/dal momento che" = escrito/formal.', xp: 10 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir uma informação na rua vs num email', informal: { it: 'Scusa, sai dov\'è la stazione?', pt: 'Com licença, você sabe onde fica a estação?' }, formal: { it: 'La disturbo un momento? Potrebbe indicarmi la direzione per la stazione, per favore?', pt: 'Posso incomodar por um momento? Poderia me indicar a direção da estação, por favor?' }, regra: 'Falado casual: "scusa + sai". Falado formal: "La disturbo?" + "Potrebbe" (condizionale). O condizionale = chave da cortesia oral.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga a mesma frase formalmente e informalmente: "Porque estava com fome, comeu."', resposta_it: 'Formale: Poiché aveva fame, ha mangiato. / Informale: Aveva fame, quindi ha mangiato.', resposta_pt: 'Formal: Porque estava com fome, comeu. / Informal: Estava com fome, então comeu.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M67 — Frasi idiomatiche avanzate ── */
  {
    id: 'b2-m67', nivel: 'B2', emoji: '🌿',
    nome: 'Expressões idiomáticas avançadas',
    descricao: '100 expressões reais dos italianos',
    xpTotal: 220,
    exercicios: [
      { tipo: 'intro', audio_pt: 'As expressões idiomáticas fazem você soar como nativo. Não seguem lógica literal — precisam ser memorizadas pelo significado. Vamos cobrir as mais usadas e coloridas do italiano.' },
      { tipo: 'vocab', it: 'In bocca al lupo! (Crepi!) / Mettere le mani avanti / Farla franca / Essere al verde', pt: 'Boa sorte! (obrigado!) / Se antecipar para se proteger / Sair impune / Estar sem dinheiro', ctx: '"In bocca al lupo" = boa sorte (lit. na boca do lobo). Resposta correta: "Crepi!" (que morra!).', xp: 5 },
      { tipo: 'vocab', it: 'Avere le mani in pasta / Non avere peli sulla lingua / Prendere due piccioni con una fava / Essere alle prime armi', pt: 'Ter as mãos na massa / Não ter papas na língua / Matar dois coelhos com uma cajadada / Ser iniciante', ctx: '"Avere le mani in pasta" = estar envolvido em algo. "Non avere peli sulla lingua" = falar abertamente.', xp: 5 },
      { tipo: 'vocab', it: 'Fare il pesce in barile / Avere il prosciutto sugli occhi / Prendere in giro / Fare orecchie da mercante', pt: 'Fazer corpo mole / Estar de olho vendado / Gozar/zomgar / Fazer ouvidos de mercador', ctx: '"Avere il prosciutto sugli occhi" = não ver o óbvio (lit. ter presunto nos olhos). Muito espressivo!', xp: 5 },
      { tipo: 'frase', it: 'Non fare il pesce in barile — dai, aiutaci! Ha le mani in pasta in quell\'affare losco.', pt: 'Não faça corpo mole — vai, nos ajuda! Ele está envolvido naquele negócio suspeito.', ctx: '"Losco" = suspeito/escuro. Combinazione di due espressioni idiomatiche in contesto naturale.', xp: 8 },
      { tipo: 'frase', it: 'Avevo il prosciutto sugli occhi — non avevo visto che mi stava prendendo in giro da mesi.', pt: 'Estava de olho vendado — não tinha visto que estava me zoando por meses.', ctx: '"Prendere in giro" = zoar/gozar (non fisicamente). "Prosciutto sugli occhi" per non aver visto l\'ovvio.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: '"Essere al verde" significa:', opcoes: ['Ser ecológico / amar a natureza', 'Estar com inveja', 'Estar sem dinheiro', 'Ter saúde perfeita'], correta: 2, it: 'Sono al verde — non ho un euro!', pt: 'Estar sem dinheiro / estar a zero. (origem: fundo verde dos castiçais quando a vela acabava)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'O que significa "non avere peli sulla lingua"?', resposta_it: 'Significa non avere paura di dire quello che si pensa, parlare senza filtri.', resposta_pt: 'Significa não ter medo de dizer o que pensa, falar sem filtros.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M68 — Fluenza e naturalezza ── */
  {
    id: 'b2-m68', nivel: 'B2', emoji: '🌊',
    nome: 'Fluência e naturalidade',
    descricao: 'Marcadores, pausas e como soar natural',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A diferença entre falar "corretamente" e falar "naturalmente". Marcadores de discurso, hesitações, preenchimento de pausa — as ferramentas que nativos usam inconscientemente.' },
      { tipo: 'vocab', it: 'allora, dunque, diciamo, insomma, cioè, praticamente, nel senso, sì comunque', pt: 'então, portanto, digamos, enfim, ou seja, praticamente, no sentido, sim de qualquer forma', ctx: 'Marcatori del discorso italiano. "Cioè" = ou seja. "Nel senso" = no sentido de. "Insomma" = enfim.', xp: 5 },
      { tipo: 'frase', it: 'Allora, diciamo che... cioè, nel senso, è complicato. Insomma, non lo so.', pt: 'Então, digamos que... ou seja, no sentido de, é complicado. Enfim, não sei.', ctx: 'Encadeamento de marcadores = fala muito natural. Não parece hesitação mas fluidez!', xp: 8 },
      { tipo: 'frase', it: 'Praticamente è andata così: insomma, ho detto quello che pensavo. E lui, sì comunque, ci è rimasto male.', pt: 'Praticamente foi assim: enfim, disse o que pensava. E ele, bem de qualquer forma, ficou mal com isso.', ctx: '"Ci è rimasto male" = ficou mal/magoado. "Praticamente" como marcador narrativo.', xp: 8 },
      { tipo: 'frase', it: 'Saper fare una pausa al momento giusto, modulare il tono e variare il ritmo: ecco i segreti della fluidità.', pt: 'Saber fazer uma pausa no momento certo, modular o tom e variar o ritmo: esses são os segredos da fluidez.', ctx: 'Fluidez = não só velocidade. Pausas estratégicas e variação de ritmo são marcas do falante avançado.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Conversazione fluida', linhas: [
        { personagem: 'A', it: 'Allora, hai visto il film di cui ti avevo parlato?', pt: 'Então, você viu o filme do qual te tinha falado?' },
        { personagem: 'B', it: 'Sì, diciamo che... cioè, mi ha colpito, però insomma, non è il mio genere.', pt: 'Sim, digamos que... ou seja, me impactou, mas enfim, não é meu gênero.' },
        { personagem: 'A', it: 'Capisco. Nel senso, è molto intenso.', pt: 'Entendo. No sentido de, é muito intenso.' },
        { personagem: 'B', it: 'Esatto. Comunque, vale la pena vederlo.', pt: 'Exatamente. De qualquer forma, vale a pena ver.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Qual é o equivalente italiano de "ou seja / no sentido de"?', opcoes: ['insomma / dunque', 'cioè / nel senso', 'allora / praticamente', 'comunque / sì'], correta: 1, it: 'Cioè... nel senso...', pt: '"Cioè" = ou seja. "Nel senso" = no sentido de. Os marcadores mais usados para explicar.', xp: 10 },
      { tipo: 'formal_vs_informal', situacao: 'Dar sua opinião em conversa casual vs num debate acadêmico', informal: { it: 'Allora, diciamo che... cioè, a mio parere è un po\' esagerato, insomma.', pt: 'Então, digamos que... ou seja, na minha opinião é um pouco exagerado, enfim.' }, formal: { it: 'Ritengo che la posizione sostenuta presenti alcune criticità che meritano ulteriore approfondimento.', pt: 'Considero que a posição defendida apresenta algumas críticas que merecem aprofundamento adicional.' }, regra: 'Casual: marcadores + opinião direta. Formal: "Ritengo che" + congiuntivo, sem marcadores de hesitação, vocabulário abstrato.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Use marcadores naturais para dizer: "Não sei bem como explicar, mas acho que é complicado."', resposta_it: 'Allora, diciamo che... cioè, insomma, è complicato. Non so bene come spiegarlo.', resposta_pt: 'Então, digamos que... ou seja, enfim, é complicado. Não sei bem como explicar.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M69 — Simulazione CILS B2 ── */
  {
    id: 'b2-m69', nivel: 'B2', emoji: '📝',
    nome: 'Simulazione CILS B2',
    descricao: 'Prática completa para o exame CILS B2',
    xpTotal: 250,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Preparação para o CILS B2 — Certificazione di Italiano come Lingua Straniera da Università di Siena. Cinco seções: ascolto, lettura, analisi, scrittura, produzione orale.' },
      { tipo: 'frase', it: 'Sezione Ascolto: ascolta il testo e rispondi alle domande. Il livello B2 richiede comprensione di testi autentici con accenti diversi.', pt: 'Seção Audição: ouça o texto e responda às perguntas. O nível B2 exige compreensão de textos autênticos com diferentes sotaques.', ctx: 'Dica: não espere entender 100%. Foque nas ideias principais e keywords.', xp: 5 },
      { tipo: 'vocab', it: 'la traccia scritta, la comprensione del testo, l\'analisi delle strutture, la produzione scritta, il colloquio orale', pt: 'a redação, a compreensão de texto, a análise de estruturas, a produção escrita, a entrevista oral', ctx: 'Cinco seções do CILS. A produção scritta inclui saggio breve (200-300 parole). Oral: 15 minutos.', xp: 5 },
      { tipo: 'frase', it: 'Scrittura CILS: Esprimete la vostra opinione sul seguente tema: "I social media favoriscono o ostacolano le relazioni umane?"', pt: 'Redação CILS: Expresse sua opinião sobre o seguinte tema: "As redes sociais favorecem ou prejudicam as relações humanas?"', ctx: 'Estrutura: introdução (posição) + argomenti (3) + conclusione. 200-300 palavras. 30 minuti.', xp: 8 },
      { tipo: 'frase', it: 'Orale CILS: descrivete una situazione problematica che avete vissuto e come l\'avete risolta.', pt: 'Oral CILS: descreva uma situação problemática que você viveu e como a resolveu.', ctx: 'Oral B2: 2-3 minutos de fala contínua. Usar connettivi, congiuntivo, condizionale. Pausas naturais.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Simulazione colloquio orale', linhas: [
        { personagem: 'A', it: 'Può descrivermi un momento in cui ha dovuto adattarsi a una situazione nuova?', pt: 'Pode me descrever um momento em que teve que se adaptar a uma situação nova?' },
        { personagem: 'B', it: 'Certamente. Quando mi sono trasferito in Italia, tutto era diverso: la lingua, le abitudini, il ritmo della vita.', pt: 'Certamente. Quando me mudei para a Itália, tudo era diferente: a língua, os costumes, o ritmo de vida.' },
        { personagem: 'A', it: 'Come ha superato le difficoltà?', pt: 'Como você superou as dificuldades?' },
        { personagem: 'B', it: 'Innanzitutto, ho cercato di imparare l\'italiano ogni giorno. In secondo luogo, ho fatto amicizia con italiani che mi hanno aiutato a capire la cultura.', pt: 'Em primeiro lugar, procurei aprender italiano todo dia. Em segundo lugar, fiz amizades com italianos que me ajudaram a entender a cultura.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'A produção escrita do CILS B2 (saggio breve) tem quantas palavras?', opcoes: ['50-100 parole', '100-150 parole', '200-300 parole', '500+ parole'], correta: 2, it: '200-300 parole per il saggio breve. 30 minuti di tempo.', pt: '200-300 palavras para a redação curta do CILS B2. 30 minutos.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Pratique: fale por 2 minutos sobre um tema de sua escolha em italiano.', resposta_it: 'Voglio parlare dell\'importanza delle lingue straniere. Secondo me, imparare una lingua apre nuove opportunità...', resposta_pt: 'Quero falar sobre a importância dos idiomas estrangeiros. Na minha opinião, aprender uma língua abre novas oportunidades...', pausa_segundos: 10, xp: 8 },
    ],
  },

  /* ── M70 — Cultura e identità italiana ── */
  {
    id: 'b2-m70', nivel: 'B2', emoji: '🇮🇹',
    nome: 'Cultura e identidade italiana',
    descricao: 'Identidade regional, Made in Italy e política',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Entender a identidade italiana: o paradoxo de um povo unificado politicamente apenas no 1861 mas com identidade cultural millenaria. Made in Italy, la Costituzione, il Risorgimento.' },
      { tipo: 'vocab', it: 'il Risorgimento, l\'Unità d\'Italia (1861), la Costituzione Repubblicana (1948), la Prima e Seconda Repubblica', pt: 'o Ressurgimento, a Unificação da Itália (1861), a Constituição Republicana (1948), a Primeira e Segunda República', ctx: 'História essencial para entender referências culturais. "Prima Repubblica" terminou com Tangentopoli (1992).', xp: 5 },
      { tipo: 'frase', it: 'Il "Made in Italy" non è solo un marchio: è un\'identità basata su artigianato, design, gastronomia e moda.', pt: 'O "Made in Italy" não é só uma marca: é uma identidade baseada em artesanato, design, gastronomia e moda.', ctx: 'Quatro pilastri del Made in Italy: moda (Armani, Gucci), design (Alessi, Cassina), cibo, automobili (Ferrari).', xp: 8 },
      { tipo: 'frase', it: 'Gli italiani hanno spesso un rapporto ambivalente con la politica: molto critica ma alta partecipazione al voto.', pt: 'Os italianos têm frequentemente uma relação ambivalente com a política: muito críticos mas alta participação no voto.', ctx: '"Ambivalente" = ambivalente. Apesar da crítica constante, os italianos têm uma das mais altas taxas de participação eleitoral.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Identità italiana nel mondo', linhas: [
        { personagem: 'A', it: 'Perché pensi che l\'italiano sia associato alla bellezza nel mondo?', pt: 'Por que você acha que o italiano é associado à beleza no mundo?' },
        { personagem: 'B', it: 'Per via del nostro patrimonio artistico. Abbiamo un terzo di tutti i siti UNESCO del mondo.', pt: 'Por causa do nosso patrimônio artístico. Temos um terço de todos os sítios UNESCO do mundo.' },
        { personagem: 'A', it: 'Non solo: il modo di vivere italiano — il cibo, la moda, l\'architettura — è ammirato ovunque.', pt: 'Não só: o modo de viver italiano — a comida, a moda, a arquitetura — é admirado em todo lugar.' },
        { personagem: 'B', it: 'È vero. Anche se noi italiani spesso non lo apprezziamo abbastanza!', pt: 'É verdade. Mesmo que nós italianos muitas vezes não apreciemos o suficiente!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Em que ano foi a Unificação da Itália (Unità d\'Italia)?', opcoes: ['1492', '1776', '1861', '1948'], correta: 2, it: 'L\'Unità d\'Italia è del 1861.', pt: 'A Unificação foi em 1861. (A Constituição Republicana é de 1948)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'O que é o "Made in Italy" como conceito cultural?', resposta_it: 'Il Made in Italy è un\'identità culturale basata sull\'eccellenza artigianale, il design e la gastronomia italiana.', resposta_pt: 'O Made in Italy é uma identidade cultural baseada na excelência artesanal, o design e a gastronomia italiana.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M71 — Mantenere e migliorare ── */
  {
    id: 'b2-m71', nivel: 'B2', emoji: '🔁',
    nome: 'Manter e melhorar',
    descricao: 'Rotina de manutenção e como chegar ao C1',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Chegando ao B2, o risco maior é parar e esquecer. Vamos montar uma rotina de manutenção e definir o caminho para o C1 — o nível de uso avançado autônomo.' },
      { tipo: 'vocab', it: 'il mantenimento linguistico, l\'immersione, la lettura estensiva, l\'output linguistico, il tandem', pt: 'a manutenção linguística, a imersão, a leitura extensiva, o output linguístico, o intercâmbio de idiomas', ctx: '"Tandem" = conversar com nativo que aprende português enquanto você pratica italiano. Molto efficace.', xp: 5 },
      { tipo: 'frase', it: 'Per mantenere il B2, consiglio: 15 minuti di podcast italiani al giorno, un film a settimana in italiano, scrivere un diario.', pt: 'Para manter o B2, recomendo: 15 minutos de podcast italiano por dia, um filme por semana em italiano, escrever um diário.', ctx: 'Input (ascolto + lettura) + output (scrittura + parlato). Bilancio tra i quattro per la manutenzione.', xp: 8 },
      { tipo: 'frase', it: 'Per arrivare al C1: esposizione prolungata a testi autentici, più produzione scritta formale, tandem con madrelingua.', pt: 'Para chegar ao C1: exposição prolongada a textos autênticos, mais produção escrita formal, tandem com nativo.', ctx: 'C1 exige: domínio do congiuntivo in tutti i tempi, stile formale, velocità e spontaneità.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Piano di studio per il C1', linhas: [
        { personagem: 'A', it: 'Hai raggiunto il B2. Cosa fai adesso?', pt: 'Você alcançou o B2. O que faz agora?' },
        { personagem: 'B', it: 'Continuo a studiare. Voglio il C1 entro un anno.', pt: 'Continuo estudando. Quero o C1 em até um ano.' },
        { personagem: 'A', it: 'Qual è il tuo piano?', pt: 'Qual é o seu plano?' },
        { personagem: 'B', it: 'Leggo un giornale italiano ogni giorno, ho un tandem una volta a settimana e scrivo un tema ogni mese.', pt: 'Leio um jornal italiano todo dia, tenho um tandem uma vez por semana e escrevo uma redação todo mês.' },
        { personagem: 'A', it: 'Ottimo piano! In bocca al lupo!', pt: 'Ótimo plano! Boa sorte!' },
        { personagem: 'B', it: 'Crepi! Grazie.', pt: 'Obrigado! (Que morra o lobo!)' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'O que é um "tandem" linguístico?', opcoes: ['Um dicionário avançado italiano-português', 'Conversar com um nativo que aprende a sua língua', 'Uma aula formal de gramática', 'Um podcast de imersão total'], correta: 1, it: 'Il tandem: pratichi italiano con un madrelingua che impara il portoghese.', pt: 'O tandem: você pratica italiano com um nativo que aprende português. Ambos ganham!', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Qual é o seu plano para manter e melhorar o italiano?', resposta_it: 'Il mio piano è ascoltare podcast ogni giorno, leggere libri in italiano e praticare con un madrelingua.', resposta_pt: 'Meu plano é ouvir podcasts todo dia, ler livros em italiano e praticar com um nativo.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M72 — Conclusione e futuro ── */
  {
    id: 'b2-m72', nivel: 'B2', emoji: '🏆',
    nome: 'Conclusão e futuro',
    descricao: 'Parabéns! Seu percurso A0 → B2',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Parabéns — você chegou ao B2! Do zero ao independente, de "ciao" ao congiuntivo avançato. Este módulo final celebra sua conquista e olha para o futuro: o C1 e além.' },
      { tipo: 'frase', it: 'Hai imparato oltre 73 moduli di italiano. Ora puoi leggere un giornale, guardare un film, lavorare in italiano.', pt: 'Você aprendeu mais de 73 módulos de italiano. Agora você pode ler um jornal, assistir um filme, trabalhar em italiano.', ctx: 'Reflexione sul percorso: da zero a B2 è un viaggio enorme. Merita essere celebrato!', xp: 8 },
      { tipo: 'frase', it: 'Il B2 non è un punto d\'arrivo: è la porta verso la vera fluidità. Dal B2 in poi, l\'italiano diventa un piacere.', pt: 'O B2 não é um ponto de chegada: é a porta para a verdadeira fluência. A partir do B2, o italiano vira um prazer.', ctx: 'Dopo il B2: lettura di romanzi, film senza sottotitoli, amicizie in italiano. L\'italiano entra nella vita.', xp: 8 },
      { tipo: 'vocab', it: 'Traguardo, obiettivo, risultato, sacrificio, perseveranza, conquista', pt: 'Meta, objetivo, resultado, sacrifício, perseverança, conquista', ctx: 'Vocabulário da conquista — para você falar sobre seu percurso com qualquer italiano.', xp: 5 },
      { tipo: 'frase', it: 'Se sei arrivato fino a qui, hai dimostrato che puoi fare qualsiasi cosa tu voglia. L\'italiano è tuo.', pt: 'Se você chegou até aqui, demonstrou que pode fazer qualquer coisa que queira. O italiano é seu.', ctx: 'Messaggio finale: il linguaggio non è solo comunicazione — è identità, connessione, libertà.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Una conversazione reale', linhas: [
        { personagem: 'A', it: 'Sei migliorato tantissimo! Quando hai iniziato a studiare italiano?', pt: 'Você melhorou muito! Quando você começou a estudar italiano?' },
        { personagem: 'B', it: 'Ho iniziato un anno fa, praticamente da zero. Non credevo di arrivare fin qui.', pt: 'Comecei um ano atrás, praticamente do zero. Não acreditava que chegaria até aqui.' },
        { personagem: 'A', it: 'È incredibile. Parli in modo molto naturale, sai?', pt: 'É incrível. Você fala de forma muito natural, sabia?' },
        { personagem: 'B', it: 'Grazie! Ho studiato ogni giorno, camminando con le cuffie. L\'italiano è entrato nella mia vita.', pt: 'Obrigado! Estudei todo dia, caminhando com os fones. O italiano entrou na minha vida.' },
        { personagem: 'A', it: 'Complimenti davvero. In bocca al lupo per il C1!', pt: 'Parabéns de verdade. Boa sorte para o C1!' },
        { personagem: 'B', it: 'Crepi! E grazie per tutto il supporto.', pt: 'Obrigado! E obrigado por todo o apoio.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: '"In bocca al lupo!" — qual é a resposta CORRETA em italiano?', opcoes: ['"Grazie molto!"', '"Crepi!"', '"Prego!"', '"Figurati!"'], correta: 1, it: '"In bocca al lupo!" → "Crepi!"', pt: '"Boa sorte!" → "Que morra o lobo!" — Dizer só "grazie" é considerado errado pelos italianos.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Fale sobre sua jornada de aprendizado de italiano até o B2.', resposta_it: 'Ho iniziato studiando le basi: l\'alfabeto, le parole semplici. Poi sono passato alla grammatica, agli idiomi, alla cultura. È stato un percorso lungo ma meraviglioso.', resposta_pt: 'Comecei estudando o básico: o alfabeto, palavras simples. Depois passei para a gramática, as expressões, a cultura. Foi um longo mas maravilhoso percurso.', pausa_segundos: 10, xp: 8 },
    ],
  },

];
