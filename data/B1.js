/* ============================================================
   B1 — Intermediário (M37–M53) — CONTEÚDO COMPLETO (Fase 4)
   ============================================================ */

export const B1_MODULES = [

  /* ── M37 — Congiuntivo Presente ── */
  {
    id: 'b1-m37', nivel: 'B1', emoji: '🌀',
    nome: 'Congiuntivo Presente',
    descricao: 'O modo que expressa dúvida, desejo e emoção',
    xpTotal: 220,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O congiuntivo é o modo italiano da subjetividade — dúvida, desejo, emoção, opinião. Após "penso che", "voglio che", "è importante che", sempre congiuntivo.' },
      { tipo: 'vocab', it: 'parli, mangi, dorma, scriva, finisca (tu/lui/lei)', pt: 'que você fale, coma, durma, escreva, termine (congiuntivo)', ctx: 'Congiuntivo presente: -ARE → -i; -ERE/-IRE → -a. 1ª sing. = igual ao presente indicativo! "Io parli" (subj.).', xp: 5 },
      { tipo: 'vocab', it: 'penso che, credo che, voglio che, è importante che, spero che, ho paura che, sono contento che', pt: 'penso que, acredito que, quero que, é importante que, espero que, tenho medo que, estou contente que', ctx: 'Estas expressões exigem congiuntivo na oração subordinada. São as "gatilhos do congiuntivo".', xp: 5 },
      { tipo: 'frase', it: 'Penso che Marco abbia ragione. Credo che venga anche lei.', pt: 'Acho que o Marco tem razão. Acredito que ela também venha.', ctx: '"Abbia" = conj. de avere. "Venga" = conj. di venire. Atenção: "venga", non "viene".', xp: 8 },
      { tipo: 'frase', it: 'È importante che tu studi ogni giorno. Voglio che tu sia felice.', pt: 'É importante que você estude todo dia. Quero que você seja feliz.', ctx: 'Dopo "è importante che": congiuntivo obrigatório. "Studi" (conj. di studiare). "Sia" (conj. di essere).', xp: 8 },
      { tipo: 'frase', it: 'Benché sia stanco, continuo a lavorare. Sebbene piova, esco.', pt: 'Embora esteja cansado, continuo trabalhando. Embora chova, saio.', ctx: '"Benché/sebbene" = embora. Sempre seguidos de congiuntivo.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Pareri diversi', linhas: [
        { personagem: 'A', it: 'Pensi che questo progetto abbia successo?', pt: 'Você acha que este projeto terá sucesso?' },
        { personagem: 'B', it: 'Credo di sì, però è necessario che tutti collaborino.', pt: 'Acho que sim, porém é necessário que todos colaborem.' },
        { personagem: 'A', it: 'Hai ragione. Spero che il capo sia d\'accordo.', pt: 'Você tem razão. Espero que o chefe concorde.' },
        { personagem: 'B', it: 'Sì, benché di solito sia critico, stavolta penso che approvi.', pt: 'Sim, embora normalmente seja crítico, desta vez acho que aprovará.' },
      ], xp: 20 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "È importante che tu ___ (essere) puntuale."', opcoes: ['sei', 'sia', 'eri', 'sarai'], correta: 1, it: 'sia', pt: 'seja (congiuntivo)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Espero que você venha à festa."', resposta_it: 'Spero che tu venga alla festa.', resposta_pt: 'Espero que você venha à festa.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M38 — Congiuntivo Imperfetto ── */
  {
    id: 'b1-m38', nivel: 'B1', emoji: '🌀',
    nome: 'Congiuntivo Imperfetto',
    descricao: 'Desejos e hipóteses no passado',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O congiuntivo imperfetto aparece em desejos ("Vorrei che venisse"), hipóteses ("Se avessi tempo...") e expressões do tipo "Magari fosse vero" — oxalá fosse verdade.' },
      { tipo: 'vocab', it: 'parlassi, parlasse, parlassimo / venissi, venisse / fossi, fosse, fossimo / avessi, avesse', pt: 'que eu falasse / que viesse / que fosse / que tivesse', ctx: 'Formação: radical do imperfetto + -ssi, -ssi, -sse, -ssimo, -ste, -ssero. "Fossi" = fosse (essere).', xp: 5 },
      { tipo: 'frase', it: 'Vorrei che tu venissi con me. Speravo che fosse più facile.', pt: 'Gostaria que você viesse comigo. Esperava que fosse mais fácil.', ctx: '"Vorrei che" = gostaria que + congiuntivo imperfetto. "Speravo che" no passato → congiuntivo imperfetto.', xp: 8 },
      { tipo: 'frase', it: 'Magari fosse vero! / Altro che facile!', pt: 'Oxalá fosse verdade! / Que fácil, coisa nenhuma!', ctx: '"Magari" + congiuntivo = oxalá/quem dera. Expressão muito italiana para expressar desejo improvável.', xp: 8 },
      { tipo: 'frase', it: 'Credevo che sapessi già la risposta. Non pensavo che fosse così complicato.', pt: 'Achei que você já soubesse a resposta. Não achei que fosse tão complicado.', ctx: 'Verbo principal no passado + "che" → congiuntivo imperfetto (not presente).', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Complete: "Speravo che lui ___ (venire)."', opcoes: ['viene', 'venga', 'venisse', 'veniva'], correta: 2, it: 'venisse', pt: 'viesse (conj. imperfetto)', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Quem dera eu fosse italiano!"', resposta_it: 'Magari fossi italiano!', resposta_pt: 'Quem dera eu fosse italiano!', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M39 — Condizionale ── */
  {
    id: 'b1-m39', nivel: 'B1', emoji: '🎭',
    nome: 'Condizionale',
    descricao: 'Cortesia, hipóteses e pedidos educados',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O condizionale equivale ao nosso condicional: "faria, gostaria, poderia". É o modo da cortesia. "Vorrei un caffè" soa muito mais educado que "voglio".' },
      { tipo: 'vocab', it: 'parlerei, parleresti, parlerebbe, parleremmo, parlereste, parlerebbero', pt: 'falaria, falarias, falaria, falaríamos, falaríeis, falariam', ctx: 'Formação igual ao futuro + -ei/-esti/-ebbe/-emmo/-este/-ebbero. Irregulares: sarei, avrei, farei, verrei, potrei.', xp: 5 },
      { tipo: 'frase', it: 'Vorrei un caffè, per favore. / Potrei avere il conto?', pt: 'Gostaria de um café, por favor. / Poderia trazer a conta?', ctx: '"Vorrei" = gostaria. "Potrei" = poderia. São as formas mais usadas para pedidos educados.', xp: 8 },
      { tipo: 'frase', it: 'Al tuo posto, parlerei con il direttore. Io non accetterei quell\'offerta.', pt: 'No seu lugar, eu falaria com o diretor. Eu não aceitaria aquela oferta.', ctx: '"Al tuo posto" = no seu lugar. Condizionale para dar conselhos hypothéticos.', xp: 8 },
      { tipo: 'frase', it: 'Secondo te, dovrei cambiare lavoro? — Dipende. Cosa ti piacerebbe fare?', pt: 'Na sua opinião, eu devrei mudar de emprego? — Depende. O que você gostaria de fazer?', ctx: '"Dovrei" = deveria. "Ti piacerebbe" = você gostaria. Pedindo e dando conselhos.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Sogni e desideri', linhas: [
        { personagem: 'A', it: 'Se potessi vivere in qualsiasi città del mondo, dove andresti?', pt: 'Se pudesse morar em qualquer cidade do mundo, onde iria?' },
        { personagem: 'B', it: 'Andrei a Lisbona. È bella, non troppo grande e ha il mare.', pt: 'Iria a Lisboa. É bonita, não muito grande e tem o mar.' },
        { personagem: 'A', it: 'Non sceglieresti l\'Italia?', pt: 'Você não escolheria a Itália?' },
        { personagem: 'B', it: 'Certo, ma avrei paura di non sopportare il caldo d\'estate! E tu?', pt: 'Claro, mas teria medo de não aguentar o calor no verão! E você?' },
        { personagem: 'A', it: 'Io vivrei a Milano. Mi piacerebbe molto lavorare nella moda.', pt: 'Eu moraria em Milão. Gostaria muito de trabalhar na moda.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Peça educadamente a conta no restaurante.', resposta_it: 'Potrebbe portarci il conto, per favore?', resposta_pt: 'Poderia trazer a conta, por favor?', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M40 — Periodo Ipotetico ── */
  {
    id: 'b1-m40', nivel: 'B1', emoji: '🔀',
    nome: 'Período hipotético',
    descricao: 'Se... então: todos os tipos de condicionais',
    xpTotal: 220,
    exercicios: [
      { tipo: 'intro', audio_pt: 'O período hipotético tem três tipos. Tipo 1: real — se + presente, futuro. Tipo 2: irreale del presente — se + congiuntivo imperfetto, condizionale. Tipo 3: irreale del passato — se + congiuntivo trapassato, condizionale passato.' },
      { tipo: 'vocab', it: 'Tipo 1 (reale): Se studio, prendo un buon voto.', pt: 'Se eu estudar, tiro uma boa nota.', ctx: 'Situação possível/real. "Se" + presente indicativo → presente/futuro indicativo.', xp: 5 },
      { tipo: 'vocab', it: 'Tipo 2 (irreale presente): Se studiassi di più, prenderei voti migliori.', pt: 'Se eu estudasse mais, tiraria notas melhores.', ctx: 'Hipótese improvável no presente. "Se" + congiuntivo imperfetto → condizionale presente.', xp: 5 },
      { tipo: 'vocab', it: 'Tipo 3 (irreale passato): Se avessi studiato, avrei preso un buon voto.', pt: 'Se eu tivesse estudado, teria tirado uma boa nota.', ctx: 'Hipótese impossível no passado. "Se" + congiuntivo trapassato → condizionale passato.', xp: 5 },
      { tipo: 'frase', it: 'Se vieni domani, ti mostro il progetto. Se venissi, ti mostrerei tutto.', pt: 'Se vier amanhã, te mostro o projeto. Se viesse, te mostraria tudo.', ctx: 'Tipo 1 (provável) vs Tipo 2 (improvável). Note a diferença de certeza implícita.', xp: 8 },
      { tipo: 'frase', it: 'Se avessi saputo prima, non sarei venuto. Se fossi arrivato in tempo, avrei visto il film.', pt: 'Se eu tivesse sabido antes, não teria vindo. Se tivesse chegado a tempo, teria visto o filme.', ctx: 'Tipo 3: arrependimento ou especulação sobre o passado. Muito usado em narrativas.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual tipo: "Se avessi più tempo, viaggerei di più"?', opcoes: ['Tipo 1 — real', 'Tipo 2 — irreale presente', 'Tipo 3 — irreale passato', 'Nenhum'], correta: 1, it: 'Se avessi più tempo, viaggerei di più.', pt: 'Tipo 2 — hipótese irreal no presente', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Forme tipo 3: "Se eu tivesse estudado, teria passado no exame."', resposta_it: 'Se avessi studiato, avrei superato l\'esame.', resposta_pt: 'Se eu tivesse estudado, teria passado no exame.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M41 — Passivo ── */
  {
    id: 'b1-m41', nivel: 'B1', emoji: '📰',
    nome: 'Voz passiva',
    descricao: 'A voz passiva e o "si" passivante',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A voz passiva em italiano: essere + participio passato. O sujeito recebe a ação. "Il libro è stato scritto da Eco." Também existe o "si" passivante: "Qui si parla italiano."' },
      { tipo: 'vocab', it: 'Il libro è scritto da Eco. (presente) / Il libro è stato scritto. (passato) / Il libro sarà pubblicato. (futuro)', pt: 'O livro é escrito por Eco. / O livro foi escrito. / O livro será publicado.', ctx: 'Passiva: essere (tempo correto) + participio. O participio concorda com il soggetto.', xp: 5 },
      { tipo: 'frase', it: 'Questo palazzo è stato costruito nel 1800. La pizza è stata inventata a Napoli.', pt: 'Este palácio foi construito em 1800. A pizza foi inventada em Nápoles.', ctx: '"È stato costruito" = foi construído. Participio masc. com soggetto masc. "È stata inventata" = fem.', xp: 8 },
      { tipo: 'frase', it: 'Qui si parla italiano. Si vende appartamento. Si mangiano bene le lasagne qui.', pt: 'Aqui se fala italiano. Vende-se apartamento. Come-se bem as lasanhas aqui.', ctx: '"Si" passivante: mais comum do que a passiva formal na língua falada. Muito útil!', xp: 8 },
      { tipo: 'frase', it: 'La partita è stata vinta dall\'Italia per 2 a 0.', pt: 'A partida foi vencida pela Itália por 2 a 0.', ctx: '"Da" + agente na passiva. "Dall\'Italia" = da Itália (da + l\').', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Transforme em passiva: "Marco ha scritto la lettera."', opcoes: ['La lettera è stata scritto da Marco.', 'La lettera è stata scritta da Marco.', 'La lettera ha stata scritta da Marco.', 'La lettera è scritto da Marco.'], correta: 1, it: 'La lettera è stata scritta da Marco.', pt: 'A carta foi escrita pelo Marco.', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga com "si" passivante: "Aqui se come muito bem."', resposta_it: 'Qui si mangia molto bene.', resposta_pt: 'Aqui se come muito bem.', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M42 — Gerundio e Participio ── */
  {
    id: 'b1-m42', nivel: 'B1', emoji: '➡️',
    nome: 'Gerúndio e Particípio',
    descricao: 'Studando si impara — narrar com elegância',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Gerúndio em italiano: forma em -ando/-endo. Usado com stare (azione in corso) ou para indicar modo/causa. Participio passato: também adjetivo e em costruzioni participiali.' },
      { tipo: 'vocab', it: 'parlando, mangiando, dormendo, facendo, essendo, avendo', pt: 'falando, comendo, dormindo, fazendo, sendo, tendo', ctx: '-ARE → -ando. -ERE/-IRE → -endo. Irregolari: fare → facendo, essere → essendo, dire → dicendo.', xp: 5 },
      { tipo: 'frase', it: 'Sto parlando con il direttore. Stava dormendo quando ho chiamato.', pt: 'Estou falando com o diretor. Estava dormindo quando liguei.', ctx: '"Stare + gerundio" = ação em curso. "Stava dormendo" = estava dormindo (durativa nel passato).', xp: 8 },
      { tipo: 'frase', it: 'Studiando ogni giorno, ho migliorato molto. Essendo stanco, sono andato a letto presto.', pt: 'Estudando todo dia, melhorei muito. Estando cansado, fui dormir cedo.', ctx: 'Gerundio para causa ou modo. Equivale a "porque" ou "ao". Elegante ma non troppo formale.', xp: 8 },
      { tipo: 'frase', it: 'Arrivato a Roma, ho chiamato il mio amico. Finito il lavoro, siamo usciti.', pt: 'Chegando a Roma, liguei para o meu amigo. Terminado o trabalho, saímos.', ctx: 'Participio assoluto = dopo che + frase. "Arrivato" = depois de ter chegado. Muito litterario ma utile.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: '"Ele estava ligando" em italiano?', opcoes: ['Stava chiamare', 'Stava chiamato', 'Stava chiamando', 'Stava a chiamare'], correta: 2, it: 'Stava chiamando', pt: 'Ele estava ligando', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Diga: "Trabalhando muito, ela conseguiu o emprego."', resposta_it: 'Lavorando molto, ha ottenuto il lavoro.', resposta_pt: 'Trabalhando muito, ela conseguiu o emprego.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M43 — Discorso Indiretto ── */
  {
    id: 'b1-m43', nivel: 'B1', emoji: '💭',
    nome: 'Discurso indireto',
    descricao: 'Reportar o que alguém disse',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Discurso indireto: reportar o que alguém disse. "Ho detto che..." Quando o verbo principal está no passato, o tempo da frase relatada recua: presente → imperfetto, passato prossimo → trapassato.' },
      { tipo: 'vocab', it: 'ha detto che / ha chiesto se / ha chiesto di + infinito / ha risposto che', pt: 'disse que / perguntou se / pediu para / respondeu que', ctx: 'Verbos de discurso: dire, chiedere, rispondere, spiegare, pensare, credere.', xp: 5 },
      { tipo: 'frase', it: 'Marco: "Sono stanco." → Marco ha detto che era stanco.', pt: 'Marco: "Estou cansado." → Marco disse que estava cansado.', ctx: 'Presente → imperfetto no discurso indireto (passado). "Sono" → "era".', xp: 8 },
      { tipo: 'frase', it: '"Hai finito?" → Mi ha chiesto se avevo finito. "Vieni!" → Mi ha detto di venire.', pt: '"Você terminou?" → Perguntou se eu tinha terminado. "Venha!" → Me disse para vir.', ctx: 'Pergunta: "chiedere se". Ordine: "dire di" + infinito. Passato prossimo → trapassato.', xp: 8 },
      { tipo: 'frase', it: '"Partirò domani." → Ha detto che sarebbe partito il giorno dopo.', pt: '"Partirei amanhã." → Disse que partiria no dia seguinte.', ctx: '"Domani" → "il giorno dopo". "Futuro" → "condizionale". Mudanças de tempo e parola.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Reportar: "Sono brasiliano." → Ha detto che ___', opcoes: ['era brasiliano', 'è brasiliano', 'fosse brasiliano', 'sarà brasiliano'], correta: 0, it: 'era brasiliano', pt: 'era brasileiro', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Reporte: "Marco disse que não poderia venire amanhã."', resposta_it: 'Marco ha detto che non sarebbe potuto venire il giorno dopo.', resposta_pt: 'Marco disse que não poderia vir no dia seguinte.', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M44 — Tu vs Lei uso avanzato ── */
  {
    id: 'b1-m44', nivel: 'B1', emoji: '🎩',
    nome: 'Tu vs Lei — Uso avançado',
    descricao: 'Regras sociais, contextos e a transição',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'No B1 você já usa tu e Lei. Agora entendemos os contextos sutis: quando o formal é obrigatório, quando o informal é esperado, e como fazer a transição sem constrangimento.' },
      { tipo: 'vocab', it: 'Sempre Lei: cliente-fornecedor formale, paziente-medico, studente-professore adulto, dipendente-dirigente', pt: 'Sempre formal: cliente-fornecedor, paciente-médico, aluno-professor adulto, funcionário-diretor', ctx: 'Hierarquia profissional e relações de serviço geralmente pedem Lei. Exceção: startups jovens.', xp: 5 },
      { tipo: 'vocab', it: 'Sempre tu: amici, famiglia, coetanei (mesma idade), bambini, sport/palestra, ambiente universitario', pt: 'Sempre informal: amigos, família, mesma idade, crianças, academia, universidade', ctx: 'Ambiente universitário italiano usa muito o "tu" mesmo entre professor-aluno jovem.', xp: 5 },
      { tipo: 'frase', it: 'Senta, è possibile darci del tu? Mi sentirei più a mio agio.', pt: 'Escute, é possível nos tratarmos por "tu"? Me sentiria mais à vontade.', ctx: '"Darsi del tu" = usar o tu entre si. Fórmula gentil para propor informalidade.', xp: 8 },
      { tipo: 'frase', it: 'La ringrazio infinitamente, professore. Le mando la tesi entro venerdì.', pt: 'Agradeço imensamente, professor. Envio a tese até sexta-feira.', ctx: '"La ringrazio" = te agradeço (Lei formal). "Le mando" = te mando (Lei). Discurso acadêmico.', xp: 8 },
      { tipo: 'formal_vs_informal', situacao: 'Discordar de alguém educadamente', informal: { it: 'Non sono d\'accordo, ma capisco il tuo punto.', pt: 'Não concordo, mas entendo o seu ponto.' }, formal: { it: 'Permettetemi di dissentire. Ritengo che la situazione sia differente.', pt: 'Com licença divergir. Acredito que a situação seja diferente.' }, regra: 'Informal: direto mas gentil. Formal: "permettetemi di" + infinito, "ritengo che" + congiuntivo.', xp: 15 },
      { tipo: 'dialogo', titulo: 'Prima riunione con un cliente', linhas: [
        { personagem: 'A', it: 'Buongiorno, sono la dottoressa Ferretti.', pt: 'Bom dia, sou a Dra. Ferretti.' },
        { personagem: 'B', it: 'Piacere, Luiz Pelicer. Grazie per avermi ricevuto.', pt: 'Prazer, Luiz Pelicer. Obrigado por me receber.' },
        { personagem: 'A', it: 'Prego! Possiamo darci del tu? Preferisco lavorare in modo più diretto.', pt: 'De nada! Podemos usar o "tu"? Prefiro trabalhar de forma mais direta.' },
        { personagem: 'B', it: 'Certo! Ottima idea. Dunque, Luiz, come posso aiutarti?', pt: 'Claro! Ótima ideia. Então, Luiz, como posso te ajudar?' },
      ], xp: 20 },
    ],
  },

  /* ── M45 — Email e carta formale ── */
  {
    id: 'b1-m45', nivel: 'B1', emoji: '✉️',
    nome: 'E-mail e carta formal',
    descricao: 'Escrever e-mails profissionais em italiano',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'E-mail formal em italiano tem estrutura rígida: abertura, corpo, fechamento. Aprenda as fórmulas fixas que todo profissional italiano reconhece e espera.' },
      { tipo: 'vocab', it: 'Spett.le (Spettabile), Gentile, Egregio/Egregia, A chi di competenza', pt: 'Prezada empresa, Caro/a, Ilustre, A quem possa interessar', ctx: '"Spett.le" (Spettabile) para empresas. "Gentile" para pessoas. "Egregio" muito formal, para autoridades.', xp: 5 },
      { tipo: 'vocab', it: 'In riferimento a, Come da accordi, Le scrivo per, Allego alla presente, In allegato troverà', pt: 'Com referência a, Conforme combinado, Escrevo para, Anexo à presente, Em anexo encontrará', ctx: 'Fórmulas de abertura e referência. "Come da accordi" = conforme combinamos.', xp: 5 },
      { tipo: 'vocab', it: 'Resto a Sua disposizione, In attesa di una Sua gentile risposta, Cordiali saluti, Distinti saluti', pt: 'Fico à sua disposição, Aguardando uma resposta, Atenciosamente, Respeitosamente', ctx: '"Cordiali saluti" = mais comum. "Distinti saluti" = mais formal. Sempre com maiúscula no "Sua/Suoi".', xp: 5 },
      { tipo: 'frase', it: 'Gentile signora Bianchi, in riferimento alla Sua email del 15 giugno, Le invio in allegato i documenti richiesti.', pt: 'Prezada Sra. Bianchi, com referência ao seu e-mail de 15 de junho, envio em anexo os documentos solicitados.', ctx: 'E-mail tipo de resposta. Referência + ação. Sempre maiúscula em "Sua/Le".', xp: 8 },
      { tipo: 'frase', it: 'Resto a Sua completa disposizione per qualsiasi ulteriore informazione. Cordiali saluti, Luiz Pelicer', pt: 'Fico à sua inteira disposição para qualquer informação adicional. Atenciosamente, Luiz Pelicer', ctx: 'Fechamento padrão. "Ulteriore" = adicional/ulterior. Assinatura com nome completo.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual abertura para um e-mail a uma empresa desconhecida?', opcoes: ['Ciao!', 'Ehi,', 'Spett.le,', 'Amico mio,'], correta: 2, it: 'Spett.le [nome azienda],', pt: 'Prezada [nome da empresa],', xp: 10 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como encerra formalmente um e-mail em italiano?', resposta_it: 'Resto a Sua disposizione. Cordiali saluti.', resposta_pt: 'Fico à sua disposição. Atenciosamente.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M46 — Riunioni e presentazioni ── */
  {
    id: 'b1-m46', nivel: 'B1', emoji: '📋',
    nome: 'Reuniões e apresentações',
    descricao: 'Conduzir reuniões e apresentações formais',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Conduzir uma reunião em italiano: abrir, dar a palavra, resumir, concordar, discordar, encerrar. Vocabulário específico para quem trabalha com italianos.' },
      { tipo: 'vocab', it: 'aprire la riunione, dare la parola a, passare al punto successivo, fare il punto della situazione, concludere', pt: 'abrir a reunião, dar a palavra a, passar ao próximo ponto, fazer um balanço, concluir', ctx: 'Expressões para o moderador de reunião. "Fare il punto" = fazer um resumo do que foi discutido.', xp: 5 },
      { tipo: 'vocab', it: 'Concordo / Sono d\'accordo. / Non concordo. / Ho alcune perplessità. / Vorrei aggiungere che...', pt: 'Concordo. / Não concordo. / Tenho algumas reservas. / Gostaria de acrescentar que...', ctx: '"Perplessità" = reservas, dúvidas. "Vorrei aggiungere" = gostaria de acrescentar — suave e formal.', xp: 5 },
      { tipo: 'frase', it: 'Iniziamo la riunione. Il primo punto all\'ordine del giorno è il budget. La parola a Marco.', pt: 'Vamos iniciar a reunião. O primeiro ponto da pauta é o orçamento. A palavra é do Marco.', ctx: '"La parola a" + persona = passando a palavra para. Fórmula clássica de moderação.', xp: 8 },
      { tipo: 'frase', it: 'Mi permetto di dissentire: i dati mostrano un trend diverso. Posso mostrarvi il grafico?', pt: 'Permito-me discordar: os dados mostram uma tendência diferente. Posso mostrar o gráfico a vocês?', ctx: '"Mi permetto di" + infinito = fórmula educada para discordar ou interromper.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Presentazione aziendale', linhas: [
        { personagem: 'A', it: 'Buongiorno a tutti. Oggi vi presento i risultati del Q2.', pt: 'Bom dia a todos. Hoje apresento os resultados do Q2.' },
        { personagem: 'B', it: 'Come si vede dal grafico, le vendite sono cresciute del 15%.', pt: 'Como se vê no gráfico, as vendas cresceram 15%.' },
        { personagem: 'C', it: 'Scusi, potrebbe spiegare il calo di marzo?', pt: 'Com licença, poderia explicar a queda de março?' },
        { personagem: 'B', it: 'Ottima domanda. A marzo abbiamo avuto problemi logistici, ora risolti.', pt: 'Ótima pergunta. Em março tivemos problemas logísticos, agora resolvidos.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pede a palavra educadamente numa reunião?', resposta_it: 'Posso aggiungere qualcosa? / Vorrei intervenire.', resposta_pt: 'Posso acrescentar algo? / Gostaria de intervir.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M47 — Gergo e linguaggio informale ── */
  {
    id: 'b1-m47', nivel: 'B1', emoji: '😎',
    nome: 'Gírias e linguagem informal',
    descricao: '50 expressões que os italianos realmente usam',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Gírias e expressões que os italianos usam todo dia — que os livros não ensinam. Do "dai!" ao "mah...", essas expressões fazem você soar natural em vez de robótico.' },
      { tipo: 'vocab', it: 'Dai! / Forza! / Andiamo! / Su!', pt: 'Vai lá! / Força! / Vamos! / Anda!', ctx: '"Dai" é talvez a palavra mais usada do italiano coloquial. Serve para incentivar, pedir, protestar.', xp: 5 },
      { tipo: 'vocab', it: 'Figurati! / Ma va\'! / Macché! / Boh! / Mah...', pt: 'Imagina! / Que nada! / De jeito nenhum! / Sei lá! / Hmm...', ctx: '"Figurati" = de nada/imagina. "Macché" = de modo algum. "Boh" = não sei/sei lá. Molto italiano!', xp: 5 },
      { tipo: 'vocab', it: 'Che figata! / Che schifo! / Che roba! / Forte! / Figo!', pt: 'Que maneiro! / Que nojo! / Que coisa! / Demais! / Que legal!', ctx: '"Figata" e "figo" são muito comuns entre jovens. "Roba" = coisa (molto informale).', xp: 5 },
      { tipo: 'frase', it: 'Dai, su! Non ci vuole molto. Forza che ce la fai!', pt: 'Vai lá, anda! Não leva muito. Vai que você consegue!', ctx: '"Ce la fai" = você consegue. "Ce la fare" = conseguir (de verdade — uma das expressões mais usadas).', xp: 8 },
      { tipo: 'frase', it: 'Boh, non lo so. Mah... forse sì, forse no. Dipende.', pt: 'Sei lá, não sei. Hmm... talvez sim, talvez não. Depende.', ctx: '"Mah" é uma interjeição de incerteza ou dúvida. "Dipende" = depende — italiano puro!', xp: 8 },
      { tipo: 'dialogo', titulo: 'Tra amici — weekend', linhas: [
        { personagem: 'A', it: 'Allora, sei pronto? Dai, muoviti!', pt: 'Então, você está pronto? Vai logo, se mexa!' },
        { personagem: 'B', it: 'Aspetta! Non trovo le chiavi. Mamma mia...', pt: 'Espera! Não acho as chaves. Meu Deus...' },
        { personagem: 'A', it: 'Figurati! Le hai messe in borsa stamattina, boh!', pt: 'Imagina! Você colocou na bolsa essa manhã, sei lá!' },
        { personagem: 'B', it: 'Ah, cavolo! Hai ragione. Eccole. Andiamo!', pt: 'Ah, caramba! Você tem razão. Aqui estão. Vamos!' },
        { personagem: 'A', it: 'Finalmente! Che casino...', pt: 'Finalmente! Que bagunça...' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz "Sei lá!" e "Imagina!" em italiano?', resposta_it: 'Boh! / Figurati!', resposta_pt: 'Sei lá! / Imagina!', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M48 — Parolacce e registro ── */
  {
    id: 'b1-m48', nivel: 'B1', emoji: '🔞',
    nome: 'Palavrões e registro',
    descricao: 'Palavrões suaves, eufemismos e escalas de gravidade',
    xpTotal: 150,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Módulo para entender, não para usar. Palavrões italianos são muito comuns na fala cotidiana. Não entendê-los cria mal-entendidos. Aprenda a escala de gravidade e os eufemismos seguros.' },
      { tipo: 'vocab', it: 'Cavolo! / Accidenti! / Diamine! / Mannaggia!', pt: 'Caramba! / Droga! / Raios! / Merda! (suave)', ctx: 'Eufemismos populares — todos seguros em qualquer contexto. "Cavolo" é literalmente "repolho".', xp: 5 },
      { tipo: 'vocab', it: 'Caspita! / Perdinci! / Porca miseria! / Madonna!', pt: 'Nossa! / Puxa! / Poxa vida! / Nossa Senhora!', ctx: '"Porca miseria" = expressão comum de frustração, sem ser chocante. "Madonna" = muito usada, pouco ofensiva.', xp: 5 },
      { tipo: 'frase', it: 'Quando qualcosa va storto, gli italiani dicono "Caz..." ma davanti ai bambini usano "Cavolo!".', pt: 'Quando algo dá errado, os italianos dizem "C..." mas na frente de crianças usam "Cavolo!".', ctx: 'O eufemismo é sempre a escolha segura. Entender os originais é necessário; usá-los depende do contexto.', xp: 8 },
      { tipo: 'frase', it: 'Che casino! / Che bordello! = confusão/bagunça (neutros no italiano coloquiale)', pt: '"Que bagunça!" — palavras com origem tabu tornadas neutras no uso cotidiano', ctx: '"Casino" originalmente referia-se a local de prostituição, mas hoje significa bagunça/confusão sem conotação sexual.', xp: 8 },
      { tipo: 'quiz', pergunta_pt: 'Qual eufemismo usar em lugar de um palavrão forte, na frente de crianças?', opcoes: ['Porca miseria!', 'Madonna!', 'Cavolo!', 'Tutte le opzioni sono ok'], correta: 2, it: 'Cavolo!', pt: 'Caramba! (mais suave, para crianças)', xp: 10 },
    ],
  },

  /* ── M49 — Medico e emergenze ── */
  {
    id: 'b1-m49', nivel: 'B1', emoji: '🏥',
    nome: 'Médico e emergências',
    descricao: 'Sintomas, pronto-socorro e farmácia',
    xpTotal: 200,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Vocabulário médico essencial — situações onde a comunicação precisa ser clara e rápida. Do descrever sintomas ao entender a receita médica.' },
      { tipo: 'vocab', it: 'ho mal di testa/schiena/gola/stomaco, ho la febbre, mi fa male il/la...', pt: 'tenho dor de cabeça/costas/garganta/estômago, estou com febre, dói o/a...', ctx: '"Ho mal di" + parte do corpo. "Mi fa male" + artigo + parte do corpo. Ambos corretos.', xp: 5 },
      { tipo: 'vocab', it: 'il pronto soccorso, la farmacia, il medico di base, la ricetta, la pillola, il cerotto', pt: 'o pronto-socorro, a farmácia, o clínico geral, a receita, o comprimido, o curativo', ctx: '"Medico di base" = clínico geral/médico de família. "Ricetta" = receita médica.', xp: 5 },
      { tipo: 'frase', it: 'Ho bisogno di un medico. Ho mal di pancia da due giorni e ho anche la febbre a 38.', pt: 'Preciso de um médico. Tenho dor de barriga há dois dias e também estou com febre de 38.', ctx: '"Da due giorni" = há dois dias. "Anche" = também. Descrever sintomas claramente.', xp: 8 },
      { tipo: 'frase', it: 'Chiami un\'ambulanza! C\'è stato un incidente. Il numero di emergenza è il 118.', pt: 'Chame uma ambulância! Houve um acidente. O número de emergência é 118.', ctx: 'Emergências: 118 = ambulância. 113 = Polizia. 115 = Vigili del fuoco. 112 = Carabinieri.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Dal medico', linhas: [
        { personagem: 'A', it: 'Buongiorno dottore. Non mi sento bene.', pt: 'Bom dia doutor. Não me sinto bem.' },
        { personagem: 'B', it: 'Da quanto tempo? Quali sono i sintomi?', pt: 'Há quanto tempo? Quais são os sintomas?' },
        { personagem: 'A', it: 'Da ieri sera. Ho mal di gola, tosse e la febbre a 37 e mezzo.', pt: 'Desde ontem à noite. Tenho dor de garganta, tosse e febre de 37 e meio.' },
        { personagem: 'B', it: 'Apra la bocca. Hmm, la gola è infiammata. Le prescrivo un antibiotico.', pt: 'Abra a boca. Hmm, a garganta está inflamada. Vou prescrever um antibiótico.' },
        { personagem: 'A', it: 'Devo stare a casa?', pt: 'Devo ficar em casa?' },
        { personagem: 'B', it: 'Sì, almeno due giorni. Le do anche un certificato medico.', pt: 'Sim, pelo menos dois dias. Também dou um atestado médico.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como descreve: "Tenho dor de cabeça há três dias e estou com febre."', resposta_it: 'Ho mal di testa da tre giorni e ho la febbre.', resposta_pt: 'Tenho dor de cabeça há três dias e estou com febre.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M50 — Banca e finanza ── */
  {
    id: 'b1-m50', nivel: 'B1', emoji: '🏦',
    nome: 'Banco e finanças',
    descricao: 'Conta, transferências e linguagem bancária',
    xpTotal: 180,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Vocabulário bancário italiano. Para abrir conta, fazer transferências, entender extratos e lidar com a burocracia financeira na Itália.' },
      { tipo: 'vocab', it: 'il conto corrente, il bancomat, il bonifico, il prelievo, il versamento, il saldo', pt: 'a conta corrente, o cartão de débito/caixa eletrônico, a transferência, o saque, o depósito, o saldo', ctx: '"Bancomat" = o cartão (marca virou nome genérico). "Fare un bonifico" = fazer uma transferência.', xp: 5 },
      { tipo: 'vocab', it: 'IBAN, la banca, lo sportello, il tasso di interesse, il mutuo, il prestito', pt: 'IBAN, o banco, o caixa/guichê, a taxa de juros, o financiamento imobiliário, o empréstimo', ctx: '"Mutuo" = financiamento de imóvel. "Prestito" = empréstimo pessoal. "Sportello" = balcão do banco.', xp: 5 },
      { tipo: 'frase', it: 'Vorrei aprire un conto corrente. Ho bisogno del codice fiscale e di un documento d\'identità.', pt: 'Gostaria de abrir uma conta corrente. Preciso do código fiscal e de um documento de identidade.', ctx: '"Codice fiscale" = CPF italiano — obrigatório para tudo. Sem ele não se abre conta.', xp: 8 },
      { tipo: 'frase', it: 'Ho bisogno di fare un bonifico a un\'azienda straniera. Qual è il vostro IBAN?', pt: 'Preciso fazer uma transferência para uma empresa estrangeira. Qual é o seu IBAN?', ctx: '"A un\'azienda straniera" = para uma empresa estrangeira. IBAN obrigatório para transferências internacionais.', xp: 8 },
      { tipo: 'dialogo', titulo: 'In banca', linhas: [
        { personagem: 'A', it: 'Buongiorno. Vorrei controllare il saldo del mio conto.', pt: 'Bom dia. Gostaria de verificar o saldo da minha conta.' },
        { personagem: 'B', it: 'Certamente. Ha il suo documento?', pt: 'Certamente. O senhor tem seu documento?' },
        { personagem: 'A', it: 'Sì, eccolo. Anche vorrei fare un bonifico di 500 euro a questo IBAN.', pt: 'Sim, aqui está. Também gostaria de fazer uma transferência de 500 euros para este IBAN.' },
        { personagem: 'B', it: 'Perfetto. Ha bisogno di altro?', pt: 'Perfeito. O senhor precisa de mais alguma coisa?' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como pede para fazer uma transferência bancária?', resposta_it: 'Vorrei fare un bonifico, per favore.', resposta_pt: 'Gostaria de fazer uma transferência, por favor.', pausa_segundos: 3, xp: 8 },
    ],
  },

  /* ── M51 — Contratti e burocrazia ── */
  {
    id: 'b1-m51', nivel: 'B1', emoji: '📄',
    nome: 'Contratos e burocrazia',
    descricao: 'Codice fiscale, contratos e documentos',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A burocrazia italiana é famosa. Mas com o vocabulário certo, fica gerenciável. Codice fiscale, residência, contrato de trabalho, permesso di soggiorno — essenciais para quem vive na Itália.' },
      { tipo: 'vocab', it: 'il codice fiscale, il permesso di soggiorno, la residenza, l\'iscrizione anagrafica, il contratto di lavoro', pt: 'o CPF italiano, o visto de residência, a residência oficial, o registro na prefeitura, o contrato de trabalho', ctx: '"Codice fiscale" = sequência de 16 caracteres (letras+números). Gerado pelo CF italiano, similar ao CPF.', xp: 5 },
      { tipo: 'vocab', it: 'firmare, scadere, rinnovare, il documento, il modulo, la marca da bollo, lo sportello', pt: 'assinar, vencer/expirar, renovar, o documento, o formulário, o selo fiscal, o guichê', ctx: '"Marca da bollo" = selo fiscal obrigatório em muitos documentos oficiais italianos (2 euros).', xp: 5 },
      { tipo: 'frase', it: 'Devo rinnovare il permesso di soggiorno. Il mio scade il mese prossimo.', pt: 'Preciso renovar o permesso di soggiorno. O meu vence no mês que vem.', ctx: '"Rinnovare" = renovar. "Scadere" = vencer/expirar. Ir ao Commissariato di polizia con anticipo.', xp: 8 },
      { tipo: 'frase', it: 'Prima di firmare il contratto, legga bene tutte le clausole.', pt: 'Antes de assinar o contrato, leia bem todas as cláusulas.', ctx: 'Imperativo formal: "Legga" (Lei). Conselho importante — contratos italianos são longos.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Al Comune — iscrizione anagrafica', linhas: [
        { personagem: 'A', it: 'Buongiorno. Devo iscrivermi all\'anagrafe. Sono arrivato dall\'estero.', pt: 'Bom dia. Preciso me registrar no cartório. Cheguei do exterior.' },
        { personagem: 'B', it: 'Ha il codice fiscale e il permesso di soggiorno?', pt: 'O senhor tem o código fiscal e o permesso di soggiorno?' },
        { personagem: 'A', it: 'Sì, ecco i documenti. Ho anche il contratto di affitto.', pt: 'Sim, aqui estão os documentos. Tenho também o contrato de aluguel.' },
        { personagem: 'B', it: 'Perfetto. Compili questo modulo e torni tra una settimana per il certificato.', pt: 'Perfeito. Preencha este formulário e volte em uma semana para o certificado.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'O que você diz ao chegar à prefeitura para se registrar?', resposta_it: 'Devo iscrivermi all\'anagrafe. Ho tutti i documenti necessari.', resposta_pt: 'Preciso me registrar no cartório. Tenho todos os documentos necessários.', pausa_segundos: 4, xp: 8 },
    ],
  },

  /* ── M52 — Opinioni e dibattito ── */
  {
    id: 'b1-m52', nivel: 'B1', emoji: '🗣',
    nome: 'Opiniões e debate',
    descricao: 'Concordar, discordar e debater com elegância',
    xpTotal: 190,
    exercicios: [
      { tipo: 'intro', audio_pt: 'Expressar opiniões, concordar e discordar com elegância — essencial para conversas mais profundas com italianos. Da discussão de notícias ao debate de ideias.' },
      { tipo: 'vocab', it: 'Secondo me / A mio avviso / A mio parere / Ritengo che + congiuntivo', pt: 'Segundo meu ponto de vista / Na minha opinião / Acredito que', ctx: '"Secondo me" = informal mas correto. "A mio avviso" = mais formal. Todos seguidos de indicativo ou congiuntivo.', xp: 5 },
      { tipo: 'vocab', it: 'Sono d\'accordo. / Sono pienamente d\'accordo. / Non sono d\'accordo. / Ho qualche dubbio.', pt: 'Concordo. / Concordo plenamente. / Não concordo. / Tenho algumas dúvidas.', ctx: '"Ho qualche dubbio" = tenho algumas dúvidas — forma sofisticada de discordar parcialmente.', xp: 5 },
      { tipo: 'frase', it: 'Hai ragione, però bisogna anche considerare che... D\'altra parte, non si può ignorare che...', pt: 'Você tem razão, porém também é necessário considerar que... Por outro lado, não se pode ignorar que...', ctx: '"Hai ragione, però" = técnica italiana de discordar sem confrontar diretamente. Muito elegante.', xp: 8 },
      { tipo: 'frase', it: 'Da un lato capisco la tua posizione, dall\'altro penso che la realtà sia più complessa.', pt: 'Por um lado entendo sua posição, por outro acho que a realidade seja mais complexa.', ctx: '"Da un lato...dall\'altro" = por um lado...por outro. Conectores de contraste essenciais.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Discussione su un tema attuale', linhas: [
        { personagem: 'A', it: 'Secondo te, i social media fanno più bene o più male?', pt: 'Na sua opinião, as redes sociais fazem mais bem ou mais mal?' },
        { personagem: 'B', it: 'A mio avviso, dipende dall\'uso. Possono essere strumenti utili.', pt: 'Na minha opinião, depende do uso. Podem ser ferramentas úteis.' },
        { personagem: 'A', it: 'Hai ragione, però ritengo che l\'impatto negativo sulla salute mentale sia reale.', pt: 'Você tem razão, porém acredito que o impacto negativo na saúde mental seja real.' },
        { personagem: 'B', it: 'Non ho torto, ma bisogna anche considerare i benefici per la comunicazione globale.', pt: 'Não está errado, mas também é necessário considerar os benefícios para a comunicação global.' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'Como diz educadamente que discorda em italiano?', resposta_it: 'Hai ragione, però non sono del tutto d\'accordo. A mio parere...', resposta_pt: 'Você tem razão, mas não concordo totalmente. Na minha opinião...', pausa_segundos: 5, xp: 8 },
    ],
  },

  /* ── M53 — Cultura italiana ── */
  {
    id: 'b1-m53', nivel: 'B1', emoji: '🇮🇹',
    nome: 'Cultura italiana',
    descricao: 'Mesa, gestos, festas e o orgulho regional',
    xpTotal: 170,
    exercicios: [
      { tipo: 'intro', audio_pt: 'A cultura italiana vai muito além da linguagem. Mesa sagrada, gestos expressivos, rivalidade regional e il bello vivere — entender isso ajuda a comunicar-se de verdade com os italianos.' },
      { tipo: 'vocab', it: 'la tavola, il pranzo domenicale, il caffè del bar, la passeggiata, il campanilismo, il bello vivere', pt: 'a mesa de refeições, o almoço de domingo, o café no bar, o passeio à tarde, o orgulho local, o bem viver', ctx: '"Campanilismo" = apego extremo à própria cidade/região, como um orgulho do sino da sua torre (campanile).', xp: 5 },
      { tipo: 'frase', it: 'In Italia, il pranzo domenicale è sacro: tutta la famiglia si riunisce per ore a tavola.', pt: 'Na Itália, o almoço de domingo é sagrado: toda a família se reúne por horas à mesa.', ctx: 'A mesa é o centro da vida social italiana. Recusar comida pode ser visto como uma ofensa.', xp: 8 },
      { tipo: 'frase', it: 'I gesti italiani non sono decorativi — comunicano significati precisi. "E allora?" con la mano = e então?', pt: 'Os gestos italianos não são decorativos — comunicam significados precisos.', ctx: 'Gestos principais: mano a pera (e allora?/che vuoi?), mano al mento (me ne frego), occhio! (attento).', xp: 8 },
      { tipo: 'frase', it: 'Un milanese e un napoletano: due italiani, due culture diversissime. Il Nord e il Sud non si parlano sempre bene.', pt: 'Um milanês e um napolitano: dois italianos, duas culturas muito diferentes. Norte e Sul nem sempre se entendem.', ctx: 'Diferença Nord-Sud: tema sensível mas real. Milão = lavoro, eficienza. Napoli = calore, creatività.', xp: 8 },
      { tipo: 'dialogo', titulo: 'Tradizioni regionali', linhas: [
        { personagem: 'A', it: 'Da dove sei? Toscana o Emilia-Romagna?', pt: 'De onde você é? Toscana ou Emilia-Romagna?' },
        { personagem: 'B', it: 'Sono di Bologna! La migliore città d\'Italia, ovviamente.', pt: 'Sou de Bologna! A melhor cidade da Itália, obviamente.' },
        { personagem: 'A', it: 'Ah, il campanilismo! Ogni italiano pensa che la sua città sia la migliore.', pt: 'Ah, o campanilismo! Todo italiano acha que a sua cidade é a melhor.' },
        { personagem: 'B', it: 'Ma nel caso di Bologna è oggettivo: la migliore cucina del mondo!', pt: 'Mas no caso de Bologna é objetivo: a melhor culinária do mundo!' },
      ], xp: 20 },
      { tipo: 'quiz_oral', pergunta_pt: 'O que é "campanilismo" em italiano?', resposta_it: 'Il campanilismo è l\'orgoglio eccessivo per la propria città o regione.', resposta_pt: 'O campanilismo é o orgulho excessivo pela própria cidade ou região.', pausa_segundos: 4, xp: 8 },
    ],
  },

];
