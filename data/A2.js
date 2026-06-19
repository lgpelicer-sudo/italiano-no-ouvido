/* ============================================================
   A2 — Elementar (M20–M36) — CONTEÚDO COMPLETO (Fase 3)
   ============================================================ */

export const A2_MODULES = [

  /* ── M20 — Passato Prossimo ── */
  {
    id: 'a2-m20', nivel: 'A2', emoji: '⏪',
    nome: 'Passato Prossimo',
    descricao: 'Conte o que fez no passado',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O passato prossimo é o tempo mais usado para falar do passado em italiano. É equivalente ao nosso "fiz, comi, fui". Formado com avere ou essere + participio passato.' },
      { tipo: 'vocab', it: 'ho parlato, ho mangiato, ho dormito', pt: 'falei/tenho falado, comi, dormi', ctx: 'Com AVERE: -are → -ato, -ere → -uto, -ire → -ito. Sujeito e participio não concordam.', xp: 5 },
      { tipo: 'vocab', it: 'sono andato/a, sono venuto/a, sono partito/a, sono stato/a', pt: 'fui, vim, parti, fui/estive', ctx: 'Com ESSERE: participio CONCORDA com o sujeito. "Sono andato" (masc.) / "sono andata" (fem.).', xp: 5 },
      { tipo: 'frase', it: 'Ieri ho mangiato una pizza buonissima.', pt: 'Ontem comi uma pizza deliciosa.', ctx: '"Ieri" = ontem. Verbo transitivo → avere. "Ho mangiato" não concorda.', xp: 8 },
      { tipo: 'frase', it: 'Siamo andati al cinema sabato scorso.', pt: 'Fomos ao cinema no sábado passado.', ctx: '"Andare" usa essere. "Siamo andati" = nós fomos (masc. plural ou misto).', xp: 8 },
      { tipo: 'vocab', it: 'participi irregolari: fatto, detto, scritto, letto, visto, preso, messo, venuto, rimasto, stato', pt: 'feito, dito, escrito, lido, visto, pegado, colocado, vindo, ficado, sido/estado', ctx: 'Irregulares mais comuns. "Ho fatto" (fiz). "Ho visto" (vi). "Ho detto" (disse).', xp: 5 },
      { tipo: 'frase', it: 'Non ho ancora fatto la spesa. Ho già visto quel film.', pt: 'Ainda não fiz as compras. Já vi aquele filme.', ctx: '"Non...ancora" = ainda não. "Già" = já. Vêm entre l\'ausiliare e il participio.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Com\'è andata la settimana?', linhas: [
        { personagem: 'A', it: 'Ciao! Com\'è andata questa settimana?', pt: 'Oi! Como foi essa semana?' },
        { personagem: 'B', it: 'Benissimo! Mercoledì sono andato a Firenze.', pt: 'Ótimo! Na quarta fui a Florença.' },
        { personagem: 'A', it: 'Davvero? Cosa hai fatto lì?', pt: 'Sério? O que você fez lá?' },
        { personagem: 'B', it: 'Ho visitato gli Uffizi e ho mangiato una bistecca fantastica.', pt: 'Visitei os Uffizi e comi um bife fantástico.' },
        { personagem: 'A', it: 'Che bello! Sei venuto in treno?', pt: 'Que bacana! Você veio de trem?' },
        { personagem: 'B', it: 'Sì, ho preso il Frecciarossa. È velocissimo!', pt: 'Sim, peguei o Frecciarossa. É rapidíssimo!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Ieri (io) _____ a Roma." (andare)', opcoes: ['ho andato', 'sono andato', 'sono andati', 'ho andati'], correta: 1, it: 'sono andato', pt: 'fui (masc.)', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Lei _____ la lettera." (scrivere)', opcoes: ['ha scritta', 'ha scritto', 'è scritta', 'ha scrivuto'], correta: 1, it: 'ha scritto', pt: 'ela escreveu', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Ontem fui ao trabalho e depois comi com um amigo."', resposta_it: 'Ieri sono andato al lavoro e poi ho mangiato con un amico.', resposta_pt: 'Ontem fui ao trabalho e depois comi com um amigo.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M21 — Imperfetto ── */
  {
    id: 'a2-m21', nivel: 'A2', emoji: '🌅',
    nome: 'Imperfetto',
    descricao: 'Hábitos, estados e descrições no passado',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O imperfetto descreve situações no passado: hábitos, estados, ações em andamento, cenário de uma história. Diferente do passato prossimo, não tem começo nem fim definidos.' },
      { tipo: 'vocab', it: 'parlavo, parlavi, parlava, parlavamo, parlavate, parlavano', pt: 'eu falava, você falava, ele falava, nós falávamos, vós faláveis, eles falavam', ctx: 'Imperfetto -ARE: radical + -avo, -avi, -ava, -avamo, -avate, -avano. Muito regular!', xp: 5 },
      { tipo: 'vocab', it: 'vedevo, vedevi, vedeva / dormivo, dormivi, dormiva', pt: 'eu via... / eu dormia...', ctx: '-ERE → -evo. -IRE → -ivo. Exceção importante: essere → ero, eri, era, eravamo, eravate, erano.', xp: 5 },
      { tipo: 'frase', it: 'Da bambino andavo al mare ogni estate.', pt: 'Quando criança, ia à praia todo verão.', ctx: '"Da bambino/a" = quando criança. "Ogni" + periodo = todo/a... Imperfetto para hábitos.', xp: 8 },
      { tipo: 'frase', it: 'Mentre dormivo, ha squillato il telefono.', pt: 'Enquanto eu dormia, o telefone tocou.', ctx: '"Mentre" + imperfetto = ação em andamento. O PP (ha squillato) interrompe.', xp: 8 },
      { tipo: 'frase', it: 'Era una giornata bellissima: il sole splendeva e c\'era poca gente.', pt: 'Era um dia lindo: o sol brilhava e havia pouca gente.', ctx: 'Imperfetto para descrever cenário. "C\'era" = havia (imperfetto di "c\'è").', xp: 8 },
      { tipo: 'dialogo', titulo: 'Memorie d\'infanzia', linhas: [
        { personagem: 'A', it: 'Com\'era la tua infanzia?', pt: 'Como era a sua infância?' },
        { personagem: 'B', it: 'Bellissima! Abitavamo in campagna. Giocavo sempre fuori.', pt: 'Maravilhosa! Morávamos no campo. Sempre brincava fora.' },
        { personagem: 'A', it: 'Avevi molti amici?', pt: 'Você tinha muitos amigos?' },
        { personagem: 'B', it: 'Sì! E ogni domenica tutta la famiglia si riuniva per pranzo.', pt: 'Sim! E todo domingo toda a família se reunia para o almoço.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Qual forma correta de "essere" no imperfetto para "loro"?', opcoes: ['erano', 'eravano', 'stavano', 'erano stati'], correta: 0, it: 'erano', pt: 'eles eram/estavam', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Quando era pequeno, gostava de futebol."', resposta_it: 'Quando ero piccolo, mi piaceva il calcio.', resposta_pt: 'Quando era pequeno, gostava de futebol.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M22 — Passato vs Imperfetto ── */
  {
    id: 'a2-m22', nivel: 'A2', emoji: '🔀',
    nome: 'Passato vs Imperfetto',
    descricao: 'A regra definitiva para narrar histórias',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A distinção mais importante do italiano intermediário: passato prossimo para ações completas com começo e fim; imperfetto para cenário, hábitos e ações em andamento.' },
      { tipo: 'frase', it: 'Mentre guardavo la TV, è arrivato Marco.', pt: 'Enquanto assistia à TV, chegou o Marco.', ctx: 'IMPERFETTO = ação em andamento (cenário). PASSATO PROSSIMO = ação que interrompeu.', xp: 8 },
      { tipo: 'frase', it: 'Da piccola, andavo a scuola a piedi. Ieri sono andata in macchina.', pt: 'Quando pequena, ia à escola a pé. Ontem fui de carro.', ctx: 'Mesmo verbo, dois tempos: andavo (hábito) vs sono andata (evento único).', xp: 8 },
      { tipo: 'frase', it: 'Ero stanco, così ho deciso di restare a casa.', pt: 'Estava cansado, então decidi ficar em casa.', ctx: '"Ero stanco" = estado (imperfetto). "Ho deciso" = ação tomada (passato prossimo).', xp: 8 },
      { tipo: 'vocab', it: 'sempre, di solito, ogni giorno, da bambino → imperfetto', pt: 'sempre, normalmente, todo dia, quando criança → imperfetto', ctx: 'Estas expressões pedem imperfetto (hábitos). "Ieri, stamattina, una volta" → PP.', xp: 5 },
      { tipo: 'dialogo', titulo: 'Racconto di una serata', linhas: [
        { personagem: 'A', it: 'Hai sentito? Ieri sera c\'era una partita di calcio!', pt: 'Você ouviu? Ontem à noite tinha um jogo de futebol!' },
        { personagem: 'B', it: 'Sì, lo so! Stavo guardando quando è andata via la luce.', pt: 'Sim, eu sei! Estava assistindo quando a luz foi embora.' },
        { personagem: 'A', it: 'No! E com\'è finita?', pt: 'Não! E como terminou?' },
        { personagem: 'B', it: 'La luce è tornata dopo mezz\'ora. Alla fine l\'Italia ha vinto 2-1.', pt: 'A luz voltou depois de meia hora. No final a Itália ganhou 2 a 1.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Qual tempo para "Quando era criança, brincava todo dia"?', opcoes: ['Passato prossimo para as duas', 'Imperfetto para as duas', 'PP para "brincava", IMP para "era"', 'Futuro'], correta: 1, it: 'Quando ero bambino/a, giocavo ogni giorno.', pt: 'Ambas são hábitos/estados → imperfetto', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Mentre _____ (dormire), qualcuno _____ (bussare) alla porta."', opcoes: ['dormivo / ha bussato', 'ho dormito / bussava', 'dormivo / bussava', 'ho dormito / ha bussato'], correta: 0, it: 'Mentre dormivo, qualcuno ha bussato alla porta.', pt: 'Enquanto dormia, alguém bateu à porta.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Narre: "Ontem estava chovendo quando saí de casa."', resposta_it: 'Ieri stava piovendo quando sono uscito di casa.', resposta_pt: 'Ontem estava chovendo quando saí de casa.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M23 — Futuro Semplice ── */
  {
    id: 'a2-m23', nivel: 'A2', emoji: '🔮',
    nome: 'Futuro Semplice',
    descricao: 'Planos, previsões e probabilidade',
    xpTotal: 170,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O futuro simples em italiano tem dois usos principais: falar de planos e previsões futuras, e expressar probabilidade sobre o presente. "Sarà stanca" = deve estar cansada.' },
      { tipo: 'vocab', it: 'parlerò, parlerai, parlerà, parleremo, parlerete, parleranno', pt: 'falarei, falarás, falará, falaremos, falareis, falarão', ctx: '-ARE: radical + erò/erai/erà... -ERE: perd. \'e\' + rò/rai/rà... Nota: parlare → parlerò (inserção de \'e\').', xp: 5 },
      { tipo: 'vocab', it: 'essere: sarò / avere: avrò / fare: farò / venire: verrò / potere: potrò / dovere: dovrò', pt: 'serei / terei / farei / virei / poderei / deverei', ctx: 'Irregulares frequentes. "Sarò" (serei), "avrò" (terei), "verrò" (virei).', xp: 5 },
      { tipo: 'frase', it: 'L\'anno prossimo andrò in Italia per sei mesi.', pt: 'No próximo ano irei à Itália por seis meses.', ctx: '"L\'anno prossimo" = no próximo ano. Futuro para planos concretos.', xp: 8 },
      { tipo: 'frase', it: 'Dov\'è Marco? — Sarà in ufficio. / Avrà fame.', pt: 'Onde está o Marco? — Deve estar no escritório. / Deve estar com fome.', ctx: 'Futuro de probabilidade: "sarà" = deve ser/estar. Equivale ao nosso "deve ser que...".', xp: 8 },
      { tipo: 'frase', it: 'Quando arriverò, ti chiamerò. Se verrà, mangieremo insieme.', pt: 'Quando chegar, vou te ligar. Se vier, comeremos juntos.', ctx: 'Após "quando" e "se" com referência futura, o italiano usa o futuro (diferente do português).', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Ela virá amanhã"?', opcoes: ['Viene domani', 'Verrà domani', 'Venirà domani', 'Vienirà domani'], correta: 1, it: 'Verrà domani', pt: 'Ela virá amanhã', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "O ano que vem faremos uma viagem na Itália."', resposta_it: 'L\'anno prossimo faremo un viaggio in Italia.', resposta_pt: 'O ano que vem faremos uma viagem na Itália.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M24 — Trapassato Prossimo ── */
  {
    id: 'a2-m24', nivel: 'A2', emoji: '⏮',
    nome: 'Trapassato Prossimo',
    descricao: 'O que já tinha acontecido antes',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O trapassato prossimo indica uma ação passada que ocorreu ANTES de outra ação passada. "Quando sono arrivato, era già partito" — ele já tinha partido quando cheguei.' },
      { tipo: 'vocab', it: 'avevo mangiato, eri andato, era partita, avevamo visto', pt: 'tinha comido, tinhas ido, ela tinha partido, tínhamos visto', ctx: 'Formação: imperfetto di avere/essere + participio passato. Mesmas regras de avere/essere do PP.', xp: 5 },
      { tipo: 'frase', it: 'Quando sono arrivato alla stazione, il treno era già partito.', pt: 'Quando cheguei à estação, o trem já havia partido.', ctx: '"Già" = já. "Era già partito" = had already left. TP para a ação mais antiga.', xp: 8 },
      { tipo: 'frase', it: 'Non avevo mai mangiato la pasta al tartufo prima di allora.', pt: 'Nunca tinha comido macarrão com trufas antes disso.', ctx: '"Prima di allora" = antes disso. "Non...mai" com TP = nunca tinha...', xp: 8 },
      { tipo: 'dialogo', titulo: 'Troppo tardi!', linhas: [
        { personagem: 'A', it: 'Sei andato alla mostra di arte moderna?', pt: 'Você foi à exposição de arte moderna?' },
        { personagem: 'B', it: 'Purtroppo no. Quando mi hanno detto, era già finita.', pt: 'Infelizmente não. Quando me avisaram, já tinha terminado.' },
        { personagem: 'A', it: 'Che peccato! Io ci ero andato il primo giorno.', pt: 'Que pena! Eu tinha ido no primeiro dia.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Ela já tinha comido quando chegamos"?', opcoes: ['Aveva già mangiato quando siamo arrivati.', 'Ha già mangiato quando siamo arrivati.', 'Mangiava già quando siamo arrivati.', 'Aveva già mangiare quando siamo arrivati.'], correta: 0, it: 'Aveva già mangiato quando siamo arrivati.', pt: 'Ela já tinha comido quando chegamos.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Nunca tinha estado em Roma antes"?', resposta_it: 'Non ero mai stato a Roma prima.', resposta_pt: 'Nunca tinha estado em Roma antes.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M25 — Preposizioni ── */
  {
    id: 'a2-m25', nivel: 'A2', emoji: '🔗',
    nome: 'Preposições',
    descricao: 'Di, a, da, in, con, su, per, tra e as articuladas',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'As preposições italianas se combinam com artigos definidos para formar contrações. "Di + il = del", "a + la = alla", "in + il = nel". Vamos dominar as mais comuns.' },
      { tipo: 'vocab', it: 'del, dello, della, dell\', dei, degli, delle', pt: 'do, do, da, do/da, dos, dos, das', ctx: '"di + il = del". Uso: matéria ("un bicchiere di vino"), posse ("il libro di Marco"), origem.', xp: 5 },
      { tipo: 'vocab', it: 'al, allo, alla, all\', ai, agli, alle', pt: 'ao, ao, à, ao/à, aos, aos, às', ctx: '"a + il = al". Uso: direção/destino ("vado al cinema"), tempo ("alle 8"), indiretto ("do al medico").', xp: 5 },
      { tipo: 'vocab', it: 'nel, nello, nella, nell\', nei, negli, nelle', pt: 'no, no, na, no/na, nos, nos, nas', ctx: '"in + il = nel". Uso: lugar ("sono nel parco"), tempo ("nel 2026"), mezzo de transporte ("in treno").', xp: 5 },
      { tipo: 'vocab', it: 'sul, sullo, sulla, sull\', sui, sugli, sulle', pt: 'no/sobre, no, na, no/na, nos, nos, nas', ctx: '"su + il = sul". Uso: posição sobre ("il libro è sul tavolo"), argomento ("un film sulla storia").', xp: 5 },
      { tipo: 'frase', it: 'Vado al supermercato con la macchina. Torno a casa alle sette.', pt: 'Vou ao supermercado de carro. Volto para casa às sete.', ctx: '"Al supermercato" (a+il). "Con la macchina" = de carro. "A casa" (sem artigo).', xp: 8 },
      { tipo: 'frase', it: 'Sono nata a São Paulo, nel Brasile, nel 1990.', pt: 'Nasci em São Paulo, no Brasil, em 1990.', ctx: '"A" + cidade. "In" + paese. "Nel" + anno.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Vou ao médico"?', opcoes: ['Vado al medico', 'Vado del medico', 'Vado nel medico', 'Vado medico'], correta: 0, it: 'Vado al medico', pt: 'Vou ao médico', xp: 10 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Ho comprato un regalo _____ mia sorella."', opcoes: ['per', 'a', 'di', 'da'], correta: 0, it: 'per mia sorella', pt: 'para minha irmã', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "O livro está sobre a mesa na sala."', resposta_it: 'Il libro è sul tavolo nel soggiorno.', resposta_pt: 'O livro está sobre a mesa na sala.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M26 — Aggettivi e comparativi ── */
  {
    id: 'a2-m26', nivel: 'A2', emoji: '📊',
    nome: 'Adjetivos e comparativos',
    descricao: 'Mais, menos, o melhor, ótimo, péssimo',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Comparativos em italiano: "più...di/che" para mais, "meno...di/che" para menos, "tanto...quanto" para igual. Superlativos: "il più" e irregulares como "ottimo" e "pessimo".' },
      { tipo: 'vocab', it: 'più + agg + di/che, meno + agg + di/che, (tanto) + agg + quanto', pt: 'mais + adj + que, menos + adj + que, tão + adj + quanto', ctx: '"Di" antes de pronome/nome. "Che" antes de verbo, preposição ou dois adjetivos: "è più bello che intelligente".', xp: 5 },
      { tipo: 'vocab', it: 'il più + agg (rel.), agg + issimo (abs.)', pt: 'o mais + adj, adj + íssimo', ctx: '"Il più bello" = o mais bonito. "Bellissimo" = belíssimo. "Buonissimo" = delicioso.', xp: 5 },
      { tipo: 'vocab', it: 'buono → migliore (comp.) → il migliore (sup.) / ottimo (abs.)', pt: 'bom → melhor → o melhor / ótimo', ctx: 'Irregulares: buono/migliore/ottimo; cattivo/peggiore/pessimo; grande/maggiore/massimo; piccolo/minore/minimo.', xp: 5 },
      { tipo: 'frase', it: 'Roma è più grande di Firenze. Il caffè italiano è il migliore del mondo.', pt: 'Roma é maior que Florença. O café italiano é o melhor do mundo.', ctx: '"Più grande di" = maior que. "Il migliore del mondo" = o melhor do mundo.', xp: 8 },
      { tipo: 'frase', it: 'Questo ristorante è meno caro di quello, ma la pizza è ottima.', pt: 'Este restaurante é menos caro que aquele, mas a pizza é ótima.', ctx: '"Meno caro di" = menos caro que. "Ottima" = superlativo assoluto de "buona".', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Ela é mais alta que o irmão"?', opcoes: ['È più alta che il fratello', 'È più alta di il fratello', 'È più alta del fratello', 'È più alta del fratello suo'], correta: 2, it: 'È più alta del fratello', pt: 'Ela é mais alta que o irmão', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Este filme é belíssimo — o melhor do ano"?', resposta_it: 'Questo film è bellissimo — il migliore dell\'anno.', resposta_pt: 'Este filme é belíssimo — o melhor do ano.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M27 — Pronomi combinati ── */
  {
    id: 'a2-m27', nivel: 'A2', emoji: '💬',
    nome: 'Pronomi combinati',
    descricao: 'Me lo, glielo, ce lo — dominar pronomes duplos',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Pronomi combinati: quando usamos dois pronomes juntos — um indireto e um direto. "Me lo dai?" = Você me dá isso? Os dois se unem e o indireto muda forma.' },
      { tipo: 'vocab', it: 'mi → me, ti → te, gli/le → glie, ci → ce, vi → ve, gli → glie', pt: 'me, te, lhe, nos, vos, lhes', ctx: 'O pronome indireto muda antes do direto. "Mi + lo = me lo". "Gli + lo = glielo" (único que se une sem espaço).', xp: 5 },
      { tipo: 'vocab', it: 'me lo/la/li/le, te lo/la/li/le, glielo/gliela/glieli/gliele, ce lo/la/li/le, ve lo/la/li/le, glielo/gliela/glieli/gliele', pt: 'mo/ma/mos/mas, to/ta/tos/tas, lho/lha/lhos/lhas, no-lo..., vo-lo..., lho/lha...', ctx: 'Tabela completa. "Glielo" cobre "a lui", "a lei" e "a loro" — sem distinção de gênero no indireto.', xp: 5 },
      { tipo: 'frase', it: 'Puoi prestarmi il libro? — Certo, te lo presto domani.', pt: 'Pode me emprestar o livro? — Claro, te empresto amanhã.', ctx: '"Ti presto il libro" → "te lo presto". O direto (lo) substitui "il libro".', xp: 8 },
      { tipo: 'frase', it: 'Hai detto la verità a Marco? — Sì, gliela ho detta.', pt: 'Você disse a verdade ao Marco? — Sim, eu disse a ele.', ctx: '"Gliela" = gli (a lui) + la (la verità). Com passato prossimo: participio concorda com il diretto!', xp: 8 },
      { tipo: 'quiz', pergunta_pt: '"Ela me enviou o pacote" — pronome combinato?', opcoes: ['Me la ha mandata', 'Me lo ha mandato', 'Glielo ha mandato', 'Lo mi ha mandato'], correta: 1, it: 'Me lo ha mandato', pt: 'Ela me enviou (o pacote = masc.)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Transforme: "Puoi dare il caffè a me?" com pronomi combinati.', resposta_it: 'Me lo puoi dare? / Puoi darmelo?', resposta_pt: 'Pode me dar (o café)?', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M28 — Verbi riflessivi ── */
  {
    id: 'a2-m28', nivel: 'A2', emoji: '🪥',
    nome: 'Verbos reflexivos',
    descricao: 'Sua rotina matinal em italiano',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Verbos reflexivos: a ação recai sobre o próprio sujeito. "Mi sveglio" = acordo (acordo a mim mesmo). Essenciais para descrever rotinas.' },
      { tipo: 'vocab', it: 'mi sveglio, ti svegli, si sveglia, ci svegliamo, vi svegliate, si svegliano', pt: 'acordo, você acorda, ele acorda, nós acordamos, vocês acordam, eles acordam', ctx: 'Pronomes reflexivos: mi/ti/si/ci/vi/si. Sempre antes do verbo. No passato prossimo, usam essere.', xp: 5 },
      { tipo: 'vocab', it: 'svegliarsi, alzarsi, lavarsi, vestirsi, truccarsi, pettinarsi, farsi la doccia, addormentarsi', pt: 'acordar, levantar, lavar-se, vestir-se, maquiar-se, pentear-se, tomar banho, adormecer', ctx: 'Verbos de rotina — todos reflexivos. "Mi faccio la doccia" = tomo banho.', xp: 5 },
      { tipo: 'frase', it: 'Di solito mi sveglio alle sette, mi alzo subito e mi faccio una doccia.', pt: 'Normalmente acordo às sete, levanto logo e tomo banho.', ctx: '"Di solito" = normalmente. Sequência de reflexivos — pronome antes de cada verbo.', xp: 8 },
      { tipo: 'frase', it: 'Ieri mi sono alzato tardi e mi sono vestito in fretta.', pt: 'Ontem levantei tarde e me vesti com pressa.', ctx: 'Passato prossimo com riflessivi: sempre ESSERE. "Mi sono alzato/a", "mi sono vestito/a".', xp: 8 },
      { tipo: 'dialogo', titulo: 'La mattina di Sara', linhas: [
        { personagem: 'A', it: 'A che ora ti svegli di solito?', pt: 'A que horas você costuma acordar?' },
        { personagem: 'B', it: 'Mi sveglio alle sei e mezza, ma mi alzo alle sette.', pt: 'Acordo às seis e meia, mas levanto às sete.' },
        { personagem: 'A', it: 'E poi cosa fai?', pt: 'E depois, o que você faz?' },
        { personagem: 'B', it: 'Mi faccio la doccia, mi vesto e faccio colazione. Tutto in venti minuti!', pt: 'Tomo banho, me visto e tomo café. Tudo em vinte minutos!' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como se diz "Ontem ela foi dormir tarde" (addormentarsi)?', opcoes: ['Ha addormentato tardi', 'Si è addormentata tardi', 'Si ha addormentata tardi', 'È addormentata tardi'], correta: 1, it: 'Si è addormentata tardi', pt: 'Ela foi dormir tarde', xp: 10 },
    ],
  },

  /* ── M29 — Ci e Ne ── */
  {
    id: 'a2-m29', nivel: 'A2', emoji: '🔄',
    nome: 'Ci e Ne',
    descricao: 'As duas partículas mais versáteis do italiano',
    xpTotal: 170,
    exercicios: [
      { tipo: 'intro', audio_pt: '"Ci" e "ne" são partículas com muitos usos. Ci = lá, nesse lugar, disso. Ne = de isso, de lá, quantidade. Difíceis no começo, mas essenciais para falar naturalmente.' },
      { tipo: 'vocab', it: 'Ci vado. Ci sono stato. Ci penso.', pt: 'Vou lá. Já estive lá. Estou pensando nisso.', ctx: '"Ci" substitui "a + lugar" ou "a + coisa". "Ci vado" = vou lá. "Ci penso" = penso nisso.', xp: 5 },
      { tipo: 'vocab', it: 'Ne ho tre. Ne voglio ancora. Ne parla sempre.', pt: 'Tenho três (disso). Quero mais (disso). Fala sempre disso.', ctx: '"Ne" substitui "di + coisa" e quantidades. "Ne ho tre" = tenho três (deles/disso).', xp: 5 },
      { tipo: 'frase', it: 'Sei mai stato in Italia? — Sì, ci sono andato l\'anno scorso.', pt: 'Você já esteve na Itália? — Sim, fui lá no ano passado.', ctx: '"Ci sono andato" = fui lá. "Ci" substitui "in Italia".', xp: 8 },
      { tipo: 'frase', it: 'Quante pizze hai mangiato? — Ne ho mangiate due.', pt: 'Quantas pizzas você comeu? — Comi duas.', ctx: '"Ne ho mangiate due" = comi duas (delas). Participio concorda com "ne" se feminino!', xp: 8 },
      { tipo: 'frase', it: 'Ci vuole un\'ora per arrivare. Ce ne sono molti di ristoranti qui.', pt: 'Demora uma hora para chegar. Há muitos restaurantes aqui.', ctx: '"Ci vuole" = leva (tempo). "Ce ne sono" = há/existem (quantidade + luogo).', xp: 8 },
      { tipo: 'quiz', pergunta_pt: '"Ne" substitui o que em: "Parli molto di italiano?"  → "Sì, ___ parlo molto."', opcoes: ['ci', 'ne', 'lo', 'la'], correta: 1, it: 'Ne parlo molto', pt: 'Falo muito disso', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Responda com "ne": "Quanti fratelli hai? — Due."', resposta_it: 'Ne ho due.', resposta_pt: 'Tenho dois (deles).', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M30 — Imperativo ── */
  {
    id: 'a2-m30', nivel: 'A2', emoji: '👮',
    nome: 'Imperativo',
    descricao: 'Ordens, instruções e receitas',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O imperativo dá ordens, instruções e convites. "Parla!" (informal), "Parli!" (formal). Negativos: "Non parlare!" Com pronomes, eles se unem ao verbo.' },
      { tipo: 'vocab', it: 'parla! / parli! / parlate! — mangia! / mangi! — vieni! / venga! — vai! / vada!', pt: 'fale (tu/Lei/voi) / fale (Lei) / falem — come/coma/comam — venha/venha — vá/vá', ctx: 'Informal (tu): = 3ª sing. presente. Formal (Lei): = 3ª sing. presente conjuntivo. Exceção: tu → "vai", "fa\'"...', xp: 5 },
      { tipo: 'vocab', it: 'Non parlare! / Non parli! — va\', fa\', di\', da\', sta\'', pt: 'Não fale! / Não fale (formal) — vai, faz, diz, dá, fica', ctx: 'Negativo informal = "non" + infinito. Formal = "non" + presente (mesmo forma). Apocopados: vai → va\'!', xp: 5 },
      { tipo: 'frase', it: 'Scusa, puoi ripetere? — Sì, ascolta bene: prendi a sinistra e poi vai dritto.', pt: 'Desculpa, você pode repetir? — Sim, escuta bem: pegue à esquerda e vai em frente.', ctx: '"Ascolta", "prendi", "vai" = imperativo informale. Para dar direções: molto naturale.', xp: 8 },
      { tipo: 'frase', it: 'Mi scusi, entri pure! Si accomodi. Prego, si sieda.', pt: 'Com licença, pode entrar! Fique à vontade. Por favor, sente-se.', ctx: 'Imperativo formal + "pure" = convite educado. "Si accomodi", "si sieda" = formas formais.', xp: 8 },
      { tipo: 'frase', it: 'Dimmi! / Stammi a sentire. / Non preoccuparti!', pt: 'Me diz! / Fica me ouvindo. / Não se preocupe!', ctx: 'Com pronomes: unem-se ao imperativo. "Di\' + mi = dimmi". "Stare + mi = stammi". Muy coloquial!', xp: 8 },
      { tipo: 'dialogo', titulo: 'Ricetta veloce', linhas: [
        { personagem: 'A', it: 'Come si fa la pasta al pomodoro?', pt: 'Como se faz macarrão ao molho de tomate?' },
        { personagem: 'B', it: 'Facile! Prima fai bollire l\'acqua. Aggiungi il sale.', pt: 'Fácil! Primeiro faça a água ferver. Adicione o sal.' },
        { personagem: 'A', it: 'E il sugo?', pt: 'E o molho?' },
        { personagem: 'B', it: 'In un\'altra pentola, metti l\'olio e friggi l\'aglio. Aggiungi i pomodori e lascia cuocere 15 minuti.', pt: 'Em outra panela, coloque o azeite e frite o alho. Acrescente os tomates e deixe cozinhar 15 minutos.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Como diz formalmente "Sente-se, por favor"?', opcoes: ['Siediti, per favore.', 'Si sieda, per favore.', 'Siedi, per favore.', 'Sieda, per favore.'], correta: 1, it: 'Si sieda, per favore.', pt: 'Sente-se, por favor. (formal)', xp: 10 },
    ],
  },

  /* ── M31 — Lavoro informale ── */
  {
    id: 'a2-m31', nivel: 'A2', emoji: '💼',
    nome: 'Trabalho informal',
    descricao: 'Conversas do dia a dia no trabalho',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Conversas informais no trabalho: com colegas, na pausa do café, almoço juntos. Italiano mais natural, menos formal, com expressões do quotidiano profissional.' },
      { tipo: 'vocab', it: 'il collega/la collega, il capo/la capo, la riunione, il progetto, la scadenza, fare straordinari', pt: 'o colega, o chefe, a reunião, o projeto, o prazo, fazer hora extra', ctx: '"Fare straordinari" = fazer hora extra. "Scadenza" = prazo/deadline. "Riunione" = reunião.', xp: 5 },
      { tipo: 'frase', it: 'Hai finito il report? — No, ho ancora da fare. La scadenza è domani, sto impazzendo!', pt: 'Você terminou o relatório? — Não, ainda tenho muito. O prazo é amanhã, estou enlouquecendo!', ctx: '"Ho ancora da fare" = ainda tenho (coisas) para fazer. "Sto impazzendo" = estou enlouquecendo.', xp: 8 },
      { tipo: 'frase', it: 'Andiamo a pranzo insieme? C\'è una trattoria nuova vicino all\'ufficio.', pt: 'Vamos almoçar juntos? Tem uma trattoria nova perto do escritório.', ctx: '"Andiamo a pranzo" = vamos almoçar. "Trattoria" = restaurante simples italiano.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Pausa caffè', linhas: [
        { personagem: 'A', it: 'Hai sentito? Fanno una festa per il compleanno di Marco venerdì.', pt: 'Você ouviu? Vão fazer uma festa de aniversário do Marco na sexta.' },
        { personagem: 'B', it: 'Sì! Però ho una riunione fino alle sei... spero di finire in tempo.', pt: 'Sim! Mas tenho uma reunião até as seis... espero terminar a tempo.' },
        { personagem: 'A', it: 'Forza! E poi ci rilassiamo un po\'.', pt: 'Vai lá! E depois relaxamos um pouco.' },
        { personagem: 'B', it: 'Hai ragione. Andiamo a prendere un caffè adesso?', pt: 'Você tem razão. Vamos tomar um café agora?' },
      ], xp: 20 },
      { tipo: 'formal_vs_informal', situacao: 'Chegar atrasado ao trabalho', informal: { it: 'Scusa il ritardo! C\'era traffico pazzesco.', pt: 'Desculpa o atraso! O trânsito estava louco.' }, formal: { it: 'Mi scusi il ritardo. C\'erano problemi di traffico.', pt: 'Peço desculpas pelo atraso. Havia problemas de trânsito.' }, regra: 'Informal: "scusa" + spiegazione. Formal: "mi scusi" + linguaggio neutro (non "pazzesco").', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como convida o colega para almoçar?', resposta_it: 'Andiamo a pranzo insieme?', resposta_pt: 'Vamos almoçar juntos?', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M32 — Lavoro formale ── */
  {
    id: 'a2-m32', nivel: 'A2', emoji: '🤝',
    nome: 'Trabalho formal',
    descricao: 'E-mail profissional e reuniões formais',
    xpTotal: 170,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Italiano no ambiente formal de trabalho: e-mails, reuniões e apresentações. Fórmulas fixas, vocabulário específico e a diferença de registro que faz toda a diferença.' },
      { tipo: 'vocab', it: 'Gentile/Egregio, In riferimento a, Le invio in allegato, In attesa di Sua risposta, Cordiali saluti', pt: 'Prezado/Caro (formal), Com referência a, Envio em anexo, Aguardando sua resposta, Atenciosamente', ctx: '"Gentile" para tom neutro-formal. "Egregio" para autoridades. Sempre com maiúscula no "Lei/Sua".', xp: 5 },
      { tipo: 'frase', it: 'Gentile signor Rossi, in riferimento alla nostra riunione di ieri, Le invio in allegato il verbale.', pt: 'Prezado Sr. Rossi, com referência à nossa reunião de ontem, envio em anexo a ata.', ctx: '"Verbale" = ata de reunião. "In allegato" = em anexo. Estrutura clássica de e-mail formal.', xp: 8 },
      { tipo: 'frase', it: 'Vorrei fissare un appuntamento per discutere la proposta. Sarebbe disponibile martedì pomeriggio?', pt: 'Gostaria de marcar um compromisso para discutir a proposta. Estaria disponível na terça à tarde?', ctx: '"Vorrei" + infinito = desejo educado. "Sarebbe disponibile?" = condizionale per cortesia.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Apertura di una riunione', linhas: [
        { personagem: 'A', it: 'Buongiorno a tutti. Iniziamo la riunione. Il punto all\'ordine del giorno è il budget del Q3.', pt: 'Bom dia a todos. Vamos começar a reunião. O ponto da pauta é o orçamento do Q3.' },
        { personagem: 'B', it: 'Scusi, posso aggiungere un punto? Vorrei parlare anche del nuovo fornitore.', pt: 'Com licença, posso acrescentar um ponto? Gostaria de falar também do novo fornecedor.' },
        { personagem: 'A', it: 'Certamente. Lo aggiungiamo in fondo all\'ordine del giorno.', pt: 'Certamente. Adicionamos no final da pauta.' },
      ], xp: 20 },
      { tipo: 'formal_vs_informal', situacao: 'Pedir informações sobre uma proposta', informal: { it: 'Puoi mandarmi i dettagli?', pt: 'Você pode me mandar os detalhes?' }, formal: { it: 'Potrebbe inviarmi i dettagli in merito?', pt: 'O senhor poderia me enviar os detalhes a esse respeito?' }, regra: '"Puoi" (tu informal). "Potrebbe" (condizionale formale di "potere"). "In merito" = a esse respeito.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como encerra formalmente um e-mail em italiano?', resposta_it: 'Cordiali saluti, Luiz Pelicer.', resposta_pt: 'Atenciosamente, Luiz Pelicer.', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M33 — Telefono e messaggi ── */
  {
    id: 'a2-m33', nivel: 'A2', emoji: '📞',
    nome: 'Telefone e mensagens',
    descricao: 'Ligações, WhatsApp e secretária eletrônica',
    xpTotal: 160,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Ao telefone em italiano: "Pronto!" é o cumprimento de quem atende. "Sono io" = sou eu. Vamos aprender as frases essenciais para ligações formais e informais.' },
      { tipo: 'vocab', it: 'Pronto! / Sono io. / Chi parla? / Con chi parlo? / Un momento, per favore.', pt: 'Alô! / Sou eu. / Quem fala? / Com quem falo? / Um momento, por favor.', ctx: '"Pronto" = literalmente "pronto" — quem atende sempre diz isso.', xp: 5 },
      { tipo: 'vocab', it: 'Il numero è sbagliato. / La linea è occupata. / Può richiamare? / Lascio un messaggio.', pt: 'O número está errado. / A linha está ocupada. / Pode ligar de volta? / Deixo uma mensagem.', ctx: 'Frases essenciais para problemas de ligação. "Richiamare" = ligar de volta.', xp: 5 },
      { tipo: 'frase', it: 'Pronto? Sono Luiz. Posso parlare con la signora Bianchi?', pt: 'Alô? Sou o Luiz. Posso falar com a Sra. Bianchi?', ctx: '"Posso parlare con" = posso falar com. Forma padrão ao telefone.', xp: 8 },
      { tipo: 'frase', it: 'Mi dispiace, è in riunione. Vuole lasciare un messaggio?', pt: 'Desculpe, ela está em reunião. O senhor deseja deixar uma mensagem?', ctx: '"È in riunione" = está em reunião. "Vuole lasciare" = formal (Lei).', xp: 8 },
      { tipo: 'dialogo', titulo: 'Chiamata formale', linhas: [
        { personagem: 'A', it: 'Pronto, Studio Rossi, buongiorno.', pt: 'Alô, Escritório Rossi, bom dia.' },
        { personagem: 'B', it: 'Buongiorno, sono il dottor Pelicer. Posso parlare con l\'avvocato Rossi?', pt: 'Bom dia, sou o Dr. Pelicer. Posso falar com o advogado Rossi?' },
        { personagem: 'A', it: 'Mi dispiace, è impegnato. Vuole che le faccia richiamare?', pt: 'Desculpe, ele está ocupado. O senhor quer que eu peça para ele retornar?' },
        { personagem: 'B', it: 'Sì, grazie. Il mio numero è 02-345-6789.', pt: 'Sim, obrigado. Meu número é 02-345-6789.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'O que diz quem atende o telefone em italiano?', opcoes: ['Ciao!', 'Pronto!', 'Salve!', 'Allô!'], correta: 1, it: 'Pronto!', pt: 'Alô! (quem atende)', xp: 10 },
    ],
  },

  /* ── M34 — Emozioni e stati d'animo ── */
  {
    id: 'a2-m34', nivel: 'A2', emoji: '💗',
    nome: 'Emoções e estados de ânimo',
    descricao: 'Expressar e reconhecer emoções',
    xpTotal: 170,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Expressando emoções em italiano. Algumas se formam com essere, outras com avere, e muitas com stare + gerundio. Vamos aprender a falar do que sentimos de forma natural.' },
      { tipo: 'vocab', it: 'sono felice/triste/arrabbiato/stanco/preoccupato/emozionato', pt: 'estou feliz/triste/com raiva/cansado/preocupado/emocionado', ctx: '"Essere" para estados de ânimo. Adjetivos concordam em gênero: "sono arrabbiata" (fem.).', xp: 5 },
      { tipo: 'vocab', it: 'mi sento bene/male/così così — ho voglia di piangere / ho bisogno di riposo', pt: 'me sinto bem/mal/assim assim — estou com vontade de chorar / preciso de descanso', ctx: '"Mi sento" = me sinto. "Ho bisogno di" = preciso de. "Ho voglia di" = estou com vontade de.', xp: 5 },
      { tipo: 'frase', it: 'Che bella notizia! Sono così contento, non ci credo ancora!', pt: 'Que ótima notícia! Estou tão feliz, ainda não acredito!', ctx: '"Così" antes do adjetivo = tão. "Non ci credo" = não acredito nisso.', xp: 8 },
      { tipo: 'frase', it: 'Stai bene? Sembri stressato. — Sì, ho avuto una settimana pesante.', pt: 'Você está bem? Parece estressado. — Sim, tive uma semana pesada.', ctx: '"Sembrare" = parecer. "Ho avuto una settimana pesante" = tive uma semana pesada.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Supporto tra amici', linhas: [
        { personagem: 'A', it: 'Hai un\'aria triste. Cosa è successo?', pt: 'Você está com cara de triste. O que aconteceu?' },
        { personagem: 'B', it: 'Ho litigato con la mia ragazza. Sono ancora arrabbiato.', pt: 'Briguei com minha namorada. Ainda estou com raiva.' },
        { personagem: 'A', it: 'Mi dispiace. Come mai?', pt: 'Que pena. Por que foi?' },
        { personagem: 'B', it: 'Una stupidaggine... ma mi sento in colpa. Devo scusarmi.', pt: 'Uma bobagem... mas me sinto culpado. Preciso pedir desculpas.' },
        { personagem: 'A', it: 'Sì, fallo. Le cose si sistemano se si parla.', pt: 'Sim, faça isso. As coisas se resolvem se a gente conversa.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Estou preocupado com o trabalho"?', resposta_it: 'Sono preoccupato per il lavoro.', resposta_pt: 'Estou preocupado com o trabalho.', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M35 — Tempo libero e hobby ── */
  {
    id: 'a2-m35', nivel: 'A2', emoji: '🎸',
    nome: 'Tempo livre e hobby',
    descricao: 'Esportes, música, cinema e passatempos',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Falar de hobbies e tempo livre — conversas essenciais para fazer amigos e se conectar com italianos. Aprenda a descrever o que você gosta de fazer.' },
      { tipo: 'vocab', it: 'fare sport, giocare a calcio, andare in palestra, fare yoga, nuotare, correre', pt: 'fazer esporte, jogar futebol, ir à academia, fazer yoga, nadar, correr', ctx: '"Fare" + sport (genérico). "Giocare a" + sport com bola. "Andare" + a palestra/piscina.', xp: 5 },
      { tipo: 'vocab', it: 'leggere, dipingere, suonare la chitarra, ascoltare musica, guardare serie TV, cucinare', pt: 'ler, pintar, tocar violão, ouvir música, assistir séries, cozinhar', ctx: '"Suonare" + strumento. "Guardare" séries/film. "Cucinare" é hobby popular.', xp: 5 },
      { tipo: 'frase', it: 'Nel tempo libero mi piace leggere e cucinare. Nel weekend gioco a calcio con gli amici.', pt: 'No tempo livre gosto de ler e cozinhar. No fim de semana jogo futebol com os amigos.', ctx: '"Mi piace" + infinito. "Nel weekend" = no fim de semana (anglicismo comum em italiano).', xp: 8 },
      { tipo: 'frase', it: 'Hai mai provato lo yoga? — Sì, ho iniziato il mese scorso. È rilassante!', pt: 'Você já tentou yoga? — Sim, comecei no mês passado. É relaxante!', ctx: '"Hai mai provato" = você já experimentou? "Ho iniziato il mese scorso" = comecei mês passado.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Cosa fai nel weekend?', linhas: [
        { personagem: 'A', it: 'Cosa fai di solito il sabato?', pt: 'O que você costuma fazer no sábado?' },
        { personagem: 'B', it: 'La mattina vado in palestra, poi pranzo con la famiglia.', pt: 'De manhã vou à academia, depois almoço com a família.' },
        { personagem: 'A', it: 'E la sera?', pt: 'E à noite?' },
        { personagem: 'B', it: 'Dipende. A volte vado al cinema, a volte sto a casa e guardo una serie.', pt: 'Depende. Às vezes vou ao cinema, às vezes fico em casa e assisto uma série.' },
        { personagem: 'A', it: 'Stai guardando qualcosa di bello ora?', pt: 'Está assistindo algo bom agora?' },
        { personagem: 'B', it: 'Sì! "Suburra" — una serie italiana. Te la consiglio!', pt: 'Sim! "Suburra" — uma série italiana. Recomendo para você!' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Fale sobre um hobby seu em italiano.', resposta_it: 'Mi piace ascoltare musica e correre nel parco.', resposta_pt: 'Gosto de ouvir música e correr no parque.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M36 — Viaggio e hotel ── */
  {
    id: 'a2-m36', nivel: 'A2', emoji: '✈️',
    nome: 'Viagem e hotel',
    descricao: 'Do aeroporto ao check-out',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Italiano para viagens: aeroporto, hotel, reservas. Vocabulário prático para você se virar do início ao fim de uma viagem na Itália.' },
      { tipo: 'vocab', it: 'il volo, il gate, il bagaglio a mano, il bagaglio in stiva, la carta d\'imbarco, il passaporto', pt: 'o voo, o portão, a bagagem de mão, a bagagem despachada, o cartão de embarque, o passaporte', ctx: '"Carta d\'imbarco" = boarding pass. "Bagaglio a mano" = bagagem de cabine.', xp: 5 },
      { tipo: 'vocab', it: 'prenotare, il check-in, il check-out, la camera singola/doppia/matrimoniale, la colazione inclusa', pt: 'reservar, o check-in, o check-out, o quarto individual/duplo/de casal, café da manhã incluso', ctx: '"Camera matrimoniale" = quarto de casal (com cama de casal). "Camera doppia" = dois ocupantes (camas separadas).', xp: 5 },
      { tipo: 'frase', it: 'Vorrei prenotare una camera doppia per tre notti, dal 20 al 23 luglio.', pt: 'Gostaria de reservar um quarto duplo por três noites, de 20 a 23 de julho.', ctx: 'Frase padrão de reserva. "Dal...al" = de...a. "Per tre notti" = por três noites.', xp: 8 },
      { tipo: 'frase', it: 'Il volo è in ritardo di un\'ora. Dobbiamo andare al gate 12.', pt: 'O voo está atrasado uma hora. Precisamos ir ao portão 12.', ctx: '"In ritardo" = atrasado. "Di un\'ora" = de uma hora. "Dobbiamo" = precisamos.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Check-in in hotel', linhas: [
        { personagem: 'A', it: 'Buonasera. Ho una prenotazione a nome Pelicer.', pt: 'Boa noite. Tenho uma reserva no nome Pelicer.' },
        { personagem: 'B', it: 'Buonasera. Sì, camera doppia per due notti. Posso vedere il passaporto?', pt: 'Boa noite. Sim, quarto duplo por duas noites. Posso ver o passaporte?' },
        { personagem: 'A', it: 'Certo. La colazione è inclusa?', pt: 'Claro. O café da manhã está incluso?' },
        { personagem: 'B', it: 'Sì, dalle sette alle dieci. La camera è al terzo piano. Ecco la chiave.', pt: 'Sim, das sete às dez. O quarto é no terceiro andar. Aqui está a chave.' },
        { personagem: 'A', it: 'Grazie. C\'è il wifi in camera?', pt: 'Obrigado. Tem wifi no quarto?' },
        { personagem: 'B', it: 'Sì, la password è sulla chiave. Buona permanenza!', pt: 'Sim, a senha está na chave. Boa estadia!' },
      ], xp: 20 },
      { tipo: 'formal_vs_informal', situacao: 'Reclamar de um problema no quarto', informal: { it: 'Scusa, il riscaldamento non funziona!', pt: 'Com licença, o aquecimento não funciona!' }, formal: { it: 'Mi scusi, purtroppo il riscaldamento della camera non funziona. Potrebbe mandare qualcuno?', pt: 'Com licença, infelizmente o aquecimento do quarto não funciona. Poderia mandar alguém?' }, regra: 'Informal: direto ao ponto. Formal: "purtroppo" (lamento), detalhe, pedido em condizionale.', xp: 15 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como faz uma reserva de hotel por telefone?', resposta_it: 'Vorrei prenotare una camera doppia per due notti.', resposta_pt: 'Gostaria de reservar um quarto duplo por duas noites.', pausa_segundos: 4, xp: 8 },
    ],
  },

];
