/* Generatore PDF A4 leggibile (testo vero, non uno screenshot) per il Progetto del Capo 2026 */
(function (root) {
  const DATA = {
    nome: 'Giuseppe A. Di Mauro',
    luogoData: 'Trani, 15 novembre 2026',
    gruppo: 'Gruppo Triggiano 1 · zona Bari Centro · AGESCI',
    ruoli: [['Capo Clan', [198, 40, 40], [255, 255, 255]], ['Aiuto Capo Branco', [242, 183, 5], [20, 41, 107]]],
    stats: [['INGRESSO IN CO.CA', '2015'], ['ANNI DI SERVIZIO', '11'], ['ANNO CFA', '2020']],
    timeline: [
      ['2015', 'Ingresso in Comunità Capi'],
      ['Gennaio 2016', 'CFT · Taranto'],
      ['Agosto 2017', 'CFM L/C · Rutigliano'],
      ['Ottobre 2020', 'CFA · Aquila'],
      ['Novembre 2022', 'CAM E/G · Giovinazzo'],
      ['Febbraio 2023', 'Nomina a Capo'],
      ['Dicembre 2024', 'MAM R/S · Molfetta'],
      ['Febbraio 2026', 'Campo Capi Gruppo'],
      ['2026', '11 anni di servizio complessivi']
    ],
    servizio: [
      ['Campi regionali e di Zona', 'Servizio in vari campi regionali e campi di Zona.'],
      ['Capo Campo', 'Campetto Piccole Orme · I Fantastici 4 · Missione Soccorso; campetto di specialità ComunichE/Giamo.'],
      ['Capo Reparto', 'Reparto di formazione per il World Scout Jamboree 2027. Il nuovo impegno di quest\'anno.'],
      ['Pattuglia di Zona', 'Membro della pattuglia comunicazione di Zona.']
    ],
    scorsi: [
      ['Leggere i bisogni dei ragazzi', 'In parte', 'Ho sviluppato una maggiore consapevolezza nel leggere i bisogni dei ragazzi, ma è un percorso ancora aperto: lo porto avanti anche quest\'anno.'],
      ['Creare rete con altre realtà', 'Fatto', 'La cena solidale di maggio e le associazioni conosciute grazie al mio ruolo di Capo Gruppo, come la comunità Surprise, hanno dato un contributo concreto alla rete del territorio.'],
      ['Curare la formazione di altri capi', 'In parte', 'Alcuni momenti dedicati nelle comunità capi, come il gioco sulla responsabilità civile e penale. Ho iniziato, c\'è ancora strada da fare.'],
      ['Vivere esperienze vere', 'Tendenza', 'Più che un obiettivo verificabile è un\'inclinazione, e voglio continuare ad averla.'],
      ['Proseguire il ruolo di Capo Clan', 'Fatto', 'Lascio il ruolo di Capo Gruppo e mi impegno a proseguire anche per l\'anno prossimo come Capo Clan. Sono contento di iniziare il nuovo percorso come aiuto Capo Branco.']
    ],
    analisi: [
      ['Io e la realtà', 'La posizione che ogni Capo assume nel concreto e nei possibili cambiamenti.',
        'Mi sento apertissimo ai cambiamenti. Allo stesso tempo, ammetto di essere un po\' preoccupato per come sta andando il mondo negli ultimi tempi. Nel mio piccolo cerco di fare il possibile.', [29, 58, 138]],
      ['Io e il servizio', 'La modifica degli atteggiamenti, delle acquisizioni, delle competenze particolari per poter dare una giusta risposta alle esigenze del servizio.',
        'Quest\'anno forse ho un po\' esagerato nel prendermi tanti impegni di servizio dentro lo scoutismo, anche perché avevo intenzione di aprire un\'associazione culturale di cineforum a Capurso. Farò il possibile per garantire comunque un servizio di qualità ai ragazzi.', [31, 122, 77]],
      ['Io e la Comunità Capi, il Progetto Educativo, l\'Associazione', 'La verifica del proprio confrontarsi con gli altri, con le loro caratteristiche, meriti, difetti.',
        'Il ruolo di Capo Gruppo mi è servito molto e mi ha divertito altrettanto. Lo lascio con un po\' di amarezza: in così poco tempo non sono riuscito a intercettare tutte le istanze formative di tutti i capi.', [214, 158, 0]],
      ['Io e la mia esperienza di fede', 'La necessità di una vita sempre più vissuta coerentemente alla sequela di Cristo ed il conseguente approfondimento delle tematiche religiose.',
        'È un percorso che matura di anno in anno, anche grazie all\'incontro con nuovi parroci, che mi fanno vedere il mondo della fede da punti di vista sempre diversi.', [228, 87, 46]]
    ],
    impegni: [
      ['Realtà', [29, 58, 138], [
        'Continuare a leggere con attenzione i bisogni dei ragazzi e mantenere viva la rete con le altre realtà del territorio.'],
        ['Vivere esperienze vere come tendenza costante del mio modo di fare servizio.']],
      ['Servizio', [31, 122, 77], [
        'Essere Capo Clan, garantendo un servizio di qualità ai ragazzi.',
        'Iniziare con entusiasmo il servizio come aiuto Capo Branco.',
        'Svolgere con cura gli impegni al reparto di formazione per il World Scout Jamboree 2027.'],
        ['Riservare con continuità spazi e tempi precisi della mia vita a chi è più in difficoltà, gli ultimi.']],
      ['Associazione', [214, 158, 0], [
        'Partecipare ad almeno un modulo formativo.',
        'Organizzare almeno un momento formativo all\'interno della Comunità Capi.'],
        ['Assumere un incarico all\'interno della zona, una volta concluso il percorso dei vari mandati da Capo Campo.']],
      ['Fede', [228, 87, 46], [
        'Continuare a far maturare il mio cammino, ascoltando i punti di vista dei sacerdoti che incontro.'], []]
    ],
    url: 'https://giudimax.github.io/progetto-del-capo-2026/',
    urlTesto: 'giudimax.github.io/progetto-del-capo-2026',
    scadenza: 'Anno scout 2026/27'
  };

  async function build(jsPDF, photo, fonts) {
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    doc.setProperties({ title: 'Il mio Progetto del Capo 2026 - ' + DATA.nome, author: DATA.nome });
    const PW = 210, PH = 297, M = 17, CW = PW - 2 * M, LIM = PH - 20;
    const C = { navy: [20, 41, 107], royal: [29, 58, 138], gold: [242, 183, 5], ink: [30, 41, 59], grey: [100, 110, 130], sky: [232, 239, 255], line: [219, 227, 247] };
    let y = 0;
    const fill = c => doc.setFillColor(c[0], c[1], c[2]);
    const txt = c => doc.setTextColor(c[0], c[1], c[2]);
    const K = 1.15; // fattore di ingrandimento del testo
    if (fonts) {
      [['Inter-Regular.ttf', fonts.regular, 'Inter', 'normal'], ['Inter-Italic.ttf', fonts.italic, 'Inter', 'italic'],
       ['Inter-Bold.ttf', fonts.bold, 'Inter', 'bold'], ['Fraunces-ExtraBold.ttf', fonts.display, 'Fraunces', 'bold']
      ].forEach(([f, b64, fam, w]) => { doc.addFileToVFS(f, b64); doc.addFont(f, fam, w); });
    }
    const font = (st, sz) => {
      if (fonts) { if (st === 'display') doc.setFont('Fraunces', 'bold'); else doc.setFont('Inter', st); }
      else doc.setFont('helvetica', st === 'display' ? 'bold' : st);
      doc.setFontSize(sz * K);
    };
    const LH = sz => sz * K * 0.3528 * 1.5;
    const need = h => { if (y + h > LIM) { doc.addPage(); y = M + 2; } };

    function para(t, o) {
      o = Object.assign({ size: 10, style: 'normal', color: C.ink, x: M, w: CW, justify: true, after: 2 }, o || {});
      font(o.style, o.size); txt(o.color);
      const lines = doc.splitTextToSize(t, o.w), lh = LH(o.size);
      lines.forEach((ln, i) => {
        need(lh);
        const last = i === lines.length - 1;
        if (o.justify && !last) doc.text(ln, o.x, y + lh * 0.75, { align: 'justify', maxWidth: o.w });
        else doc.text(ln, o.x, y + lh * 0.75);
        y += lh;
      });
      y += o.after;
    }
    function h2(t, min) {
      need(min || 45); y += 5;
      font('display', 15); txt(C.navy); doc.text(t, M, y + 5); y += 8;
      fill(C.gold); doc.rect(M, y, 20, 1.1, 'F'); y += 5;
    }
    function bullet(t, color) {
      font('normal', 10); const lines = doc.splitTextToSize(t, CW - 6);
      need(LH(10) * Math.min(lines.length, 2) + 1);
      fill(color || C.royal); doc.circle(M + 1.6, y + LH(10) * 0.55, 0.8, 'F');
      para(t, { x: M + 6, w: CW - 6, after: 1.2 });
    }

    // ---------- Copertina ----------
    fill(C.navy); doc.rect(0, 0, PW, 58, 'F');
    fill(C.gold); doc.rect(0, 58, PW, 2, 'F');
    let tx = M;
    if (photo) { doc.addImage(photo, 'PNG', M, 12, 34, 34); tx = M + 42; }
    font('display', 22); txt([255, 255, 255]); doc.text('Il mio Progetto del Capo', tx, 26);
    font('bold', 12.5); doc.text(DATA.nome, tx, 36);
    font('normal', 9.5); txt([210, 222, 250]);
    doc.text(DATA.luogoData, tx, 43);
    doc.text(DATA.gruppo, tx, 48.5);
    font('bold', 9); txt(C.gold);
    doc.textWithLink(DATA.urlTesto, tx, 54.5, { url: DATA.url });
    y = 70;

    // ruoli
    font('bold', 8.5); txt(C.grey); doc.text('ATTUALE SERVIZIO', M, y + 4.4);
    let cx = M + 42;
    DATA.ruoli.forEach(([t, col, tc]) => {
      font('bold', 9.5); const w = doc.getTextWidth(t) + 9;
      fill(col); doc.roundedRect(cx, y, w, 7.5, 3.75, 3.75, 'F');
      txt(tc); doc.text(t, cx + 4.5, y + 5.2); cx += w + 3;
    });
    y += 14;

    // statistiche
    const bw = (CW - 8) / 3;
    DATA.stats.forEach(([l, v], i) => {
      const bx = M + i * (bw + 4);
      fill(C.sky); doc.roundedRect(bx, y, bw, 22, 3, 3, 'F');
      font('bold', 7.5); txt(C.grey); doc.text(l, bx + bw / 2, y + 7, { align: 'center' });
      font('display', 20); txt(C.royal); doc.text(v, bx + bw / 2, y + 17.5, { align: 'center' });
    });
    y += 26;

    // ---------- Formazione e servizio ----------
    h2('Formazione AGESCI ed esperienze di servizio');
    para('Per tenere sempre d\'occhio a che punto siamo.', { style: 'italic', size: 9.5, color: C.grey, justify: false, after: 3 });
    DATA.timeline.forEach(([d, l]) => {
      need(7.5);
      fill(C.gold); doc.circle(M + 1.8, y + 3.4, 1.3, 'F');
      font('bold', 10); txt(C.royal); doc.text(d, M + 7, y + 4.2);
      font('normal', 10); txt(C.ink); doc.text(l, M + 48, y + 4.2);
      y += 7;
    });
    y += 3;
    font('bold', 9); txt(C.grey); need(10); doc.text('ALTRE OCCASIONI DI SERVIZIO', M, y + 4); y += 7;
    DATA.servizio.forEach(([t, d]) => {
      need(16);
      font('bold', 10.5); txt(C.navy); doc.text(t, M, y + 4); y += 6;
      para(d, { size: 10, color: C.ink, after: 3.5, justify: false });
    });

    // ---------- Impegni scorsi ----------
    h2('Cosa mi ero impegnato a fare');
    para('Progetto del Capo di Molfetta · 30 novembre 2025', { style: 'italic', size: 9.5, color: C.grey, justify: false, after: 3 });
    const stCol = { 'In parte': [180, 112, 0], 'Fatto': [31, 122, 77], 'Tendenza': [29, 58, 138] };
    DATA.scorsi.forEach(([t, s, d]) => {
      need(24);
      fill(C.line); doc.rect(M, y, CW, 0.3, 'F'); y += 3;
      font('bold', 11); txt(C.navy); doc.text(t, M, y + 4);
      font('bold', 9); txt(stCol[s]); doc.text(s.toUpperCase(), PW - M, y + 4, { align: 'right' });
      y += 7.5;
      para(d, { size: 10, after: 3 });
    });

    // ---------- Analisi situazionale ----------
    h2('Analisi situazionale e prospettive per il futuro');
    DATA.analisi.forEach(([t, sub, d, col]) => {
      need(34);
      const y0 = y;
      font('bold', 11.5); txt(C.navy);
      const tl = doc.splitTextToSize(t, CW - 6);
      tl.forEach(l => { doc.text(l, M + 5, y + 4.5); y += 5.2; });
      y += 0.5;
      para(sub, { x: M + 5, w: CW - 5, style: 'italic', size: 8.8, color: C.grey, justify: false, after: 1.5 });
      para(d, { x: M + 5, w: CW - 5, size: 10, after: 1 });
      fill(col); doc.rect(M, y0, 1.6, y - y0, 'F');
      y += 5;
    });

    // ---------- Impegni ----------
    h2('Impegni concreti e verificabili');
    para('Con le rispettive scadenze.', { style: 'italic', size: 9.5, color: C.grey, justify: false, after: 3 });
    DATA.impegni.forEach(([area, col, brevi, lunghi]) => {
      need(34);
      fill(col); doc.roundedRect(M, y, CW, 8, 2, 2, 'F');
      font('bold', 11.5); txt([255, 255, 255]); doc.text(area, M + 4, y + 5.7);
      y += 12;
      font('bold', 8); txt(C.royal); doc.text('OBIETTIVO A BREVE TERMINE', M, y + 2.5); y += 5;
      brevi.forEach(b => bullet(b, col));
      font('italic', 9); txt(C.grey); need(7); doc.text('Scadenza: ' + DATA.scadenza, M + 6, y + 3.5); y += 6;
      if (lunghi.length) {
        y += 2;
        font('bold', 8); txt(C.royal); need(10); doc.text('OBIETTIVO A LUNGO TERMINE', M, y + 2.5); y += 5;
        lunghi.forEach(b => bullet(b, col));
      }
      y += 5;
    });

    // ---------- Firma ----------
    need(18); y += 2;
    fill(C.gold); doc.rect(PW / 2 - 10, y, 20, 1, 'F'); y += 7;
    font('display', 12); txt(C.navy); doc.text(DATA.nome, PW / 2, y, { align: 'center' }); y += 5.5;
    font('normal', 9.5); txt(C.grey); doc.text(DATA.luogoData, PW / 2, y, { align: 'center' });

    // ---------- Piè di pagina ----------
    const n = doc.getNumberOfPages();
    for (let i = 1; i <= n; i++) {
      doc.setPage(i);
      font('normal', 8); txt(C.grey);
      doc.text('Progetto del Capo 2026 · ' + DATA.nome + ' · Gruppo Triggiano 1 · pag. ' + i + '/' + n, PW / 2, PH - 12, { align: 'center' });
      font('bold', 8); txt(C.royal);
      const lw = doc.getTextWidth(DATA.urlTesto);
      doc.textWithLink(DATA.urlTesto, (PW - lw) / 2, PH - 7.5, { url: DATA.url });
    }
    return doc;
  }

  root.buildProgettoPdf = build;
  if (typeof module !== 'undefined') module.exports = build;
})(typeof window !== 'undefined' ? window : globalThis);
