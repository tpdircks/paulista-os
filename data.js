/* Paulista OS seed data. Sources noted per block. All amounts in BRL. No passwords are stored here, ever. */
window.PDATA = {
  asOf: "2026-11-06",
  rules: [
    "money", "lucas", "draw", "vila", "debt"
  ],
  stores: [
    { id: "bar", name: "Barcarena (sede)", phone: "(91) 98600-1589", address: "Tv. São Francisco, 614 – Centro, Barcarena/PA, CEP 68.445-000",
      anota: "Fabiana Valente Maia", stone: "Ana Paula Maia Dircks · Stone ag 0001 conta 43106076-3",
      fixed: [ { k: "rent", who: "Jairo Soares Almeida", amt: "R$ 900 (day 10) + R$ 700 (day 20)", total: 1600 },
               { k: "energy", who: "Equatorial", amt: "R$ 900 – 1.000 (Oct paid R$ 947,97)", total: 950 },
               { k: "water", who: "Águas de São Francisco", amt: "R$ 150 – 200 (Sep R$ 835,94 leak; none paid Oct)", total: 175 },
               { k: "net", who: "IBL", amt: "≈ R$ 105", total: 105 },
               { k: "sys", who: "Tuna Pagamentos (probable system fee, day 10)", amt: "R$ 279,99", total: 279.99 } ],
      ownerDraw: true },
    { id: "vila", name: "Vila", phone: "(91) 99603-5471", address: "Av. Cônego Batista Campos, 33 – Barcarena/PA, CEP 68.445-000",
      anota: "Adan Maia", stone: "Thiago Efraim Lima Maia · Stone/Ton conta 64744532-9",
      fixed: [ { k: "rent", who: "Seu Valter (Pix to wife Maria do Socorro de Brito)", amt: "R$ 750 (day 4) + R$ 750 (day 23)", total: 1500 },
               { k: "energy", who: "Equatorial", amt: "R$ 550 – 700 (Oct paid R$ 639,29)", total: 625 },
               { k: "water", who: "—", amt: "none / nenhuma", total: 0 },
               { k: "net", who: "IBL + Claro", amt: "≈ R$ 185 – 280", total: 183 },
               { k: "sys", who: "Tuna Pagamentos (probable system fee, day 10)", amt: "R$ 279,99", total: 279.99 } ],
      ownerDraw: false }
  ],
  phoneSource: "Instagram @pizzariadopaulistapa flyer (\"Hoje é dia de Pizza\")",
  fixedSource: "Lucas, WhatsApp 2026-11-02 and 2026-11-03; amounts paid from Stone extratos Sep/Oct 2026",
  sales: { period: "2026-10", source: "Anota AI, October 2026 (Lucas screenshots)",
    bar: { revenue: 71343.51, orders: 1074, ticket: 66.43, stone: 57007.58 },
    vila: { revenue: 29466.37, orders: 441, ticket: 66.82, stone: 21979.77 } },
  /* Daily Anota series, about 3 months. Empty until the morning job loads the CSV.
     A later row with the same date replaces the earlier one.
     { date: "YYYY-MM-DD", bar: { revenue, orders, ticket? }, vila: { revenue, orders, ticket? }, source: "Anota AI" }
     Do not invent figures. */
  dailySales: [],
  /* Latest month. jonas and gm split out from people since 2026-11-03. */
  stone: { period: "2026-10", source: "Stone extratos 01–31/10/2026 (issued 2026-11-03), reconciled line by line",
    bar: { open: 1460.21, inflow: 59051.31, outflow: 57271.11, close: 3240.41, sales: 57007.58, pixMaq: 26265.49, card: 30742.09,
           suppliers: 29416.67, jonas: 5919, utilities: 1082.50, rent: 1600, gm: 4320, people: 4460.39, personal: 8250, fees: 194.44, low: "R$ 6,28 (29/10)" },
    vila: { open: 800.07, inflow: 23239.66, outflow: 23538.23, close: 501.50, sales: 21979.77, pixMaq: 9668.45, card: 12311.32,
           suppliers: 8230.54, jonas: 1852, utilities: 882.27, rent: 1500, gm: 0, people: 6055.88, personal: 3633, fees: 94.92, low: "R$ 16,28 (16/10)" } },
  stoneSep: { period: "2026-09", source: "Stone extratos 01–30/09/2026, reclassified 2026-11-03 with Oct rules",
    bar: { open: 2683.32, inflow: 56774.22, outflow: 57997.33, close: 1460.21, sales: 54409.37, pixMaq: 24058.01, card: 30351.36,
           suppliers: 25931.10, jonas: 6265, utilities: 1772.25, rent: 1600, gm: 4320, people: 7662.59, personal: 9380, fees: 178.05, low: "R$ 0,53 (26/09)" },
    vila: { open: 595.04, inflow: 22658.40, outflow: 22453.37, close: 800.07, sales: 21082.54, pixMaq: 10876.63, card: 10205.91,
           suppliers: 7503.52, jonas: 1143, utilities: 825.46, rent: 1500, gm: 700, people: 5415.54, personal: 3587, fees: 106.78, low: "R$ 9,30 (02/09)" } },
  cashToday: { date: "2026-11-03", source: "Lucas, WhatsApp 2026-11-03 (app screenshots)", bar: 3557.41, vila: 1435.84 },
  /* bar + vila = Boutique dos Frios only (R$ 32.724). This is what the R$ 1.000/week plan pays down. */
  debt: { asOf: "2026-11-03", source: "Lucas, WhatsApp 2026-11-02/03", boutique: 32724, bar: 24325, vila: 8399, loans: 0,
    weekly: 1000, start: "2026-11-10",
    jonas: { name: "Jonas Miranda Distribuidora (refrigerante)", amount: 1752, store: "both", vila: 450, bar: 1302, range: "Vila ~R$ 400–500, Barcarena the rest (~R$ 1.252–1.352); split approximate (Lucas 03/11)", terms: "paid weekly; outside the Boutique R$ 32.724. Unknown: does Friday Pix pay down this balance or only weekly purchases?" },
    onlyTheseTwo: true, paidOff: ["Mateus Supermercados", "Atacadão", "Mercurio Alimentos"], paidOffNote: "Lucas 03/11: only Boutique and Jonas remain; Mateus, Atacadão, Mercurio already paid." },
  staff: [
    { name: "Thiago", store: "vila", pay: "R$ 125/day (diária), almost every day + R$ 100/week gas allowance", daily: 125, fuel: 100, fuelPer: "week",
      estMonth: [3680, 4180], seenOct: 3633, note: "Lucas 03/11: diária R$ 125 + R$ 100/week gas. Est. month ≈ 26–30 days × R$ 125 + ~4,3 × R$ 100. Vila → Thiago Santander R$ 3.633 in Oct. Still unconfirmed whether that Santander Pix is the diária." },
    { name: "Lucas Lima Maia", store: "bar", pay: "Probable GM pay R$ 1.080/week from Barcarena Stone (not confirmed)", weekly: 1080, seenOct: 4320 }
  ],
  logins: [
    { sys: "Anota AI", store: "bar", user: "Fabiana Maia", email: null },
    { sys: "Anota AI", store: "both", user: "Lucas Maia", email: null },
    { sys: "Anota AI", store: "vila", user: "Vila (historical)", email: null },
    { sys: "Stone", store: "bar", user: "Lucas Maia + Ana Paula Dircks", email: null },
    { sys: "Ton", store: "vila", user: "Lucas Maia", email: null },
    { sys: "Stone", store: "vila", user: "Ana Paula Dircks", email: null }
  ],
  loginNote: "Emails and access holders only. Passwords are never stored in Paulista OS.",
  notes: [
    { k: "water", store: "bar", en: "High water bill was a bathroom leak. Fixed. Normalized recently (Lucas 03/11). October water bill NOT paid yet (Lucas 03/11).", pt: "Conta de água alta era vazamento no banheiro. Consertado. Normalizou recentemente (Lucas 03/11). Conta de água de outubro AINDA NÃO FOI PAGA (Lucas 03/11)." },
    { k: "mixer", store: "both", en: "Dough mixer is being repaired. Lucas goes to a parts store in Vila on 04/11 to quote the part. No amount yet.", pt: "Masseira em conserto. Lucas vai a uma loja na Vila em 04/11 orçar a peça. Sem valor ainda." },
    { k: "sys", store: "both", en: "System fee is due day 10 with rent and products. Amount not given. Stone shows Tuna Pagamentos R$ 279,99 per store around day 10. Probably this.", pt: "A mensalidade do sistema vence dia 10 junto com aluguel e produtos. Valor não informado. A Stone mostra Tuna Pagamentos R$ 279,99 por loja perto do dia 10. Provavelmente é isso." },
    { k: "rent", store: "vila", en: "Vila rent: Socorro is Seu Valter's wife. They changed the receiving account recently. Confirm the account before paying on 04/11.", pt: "Aluguel Vila: Socorro é esposa do Seu Valter. Trocaram a conta que recebe recentemente. Confirmar a conta antes de pagar em 04/11." },
    { k: "boutique", store: "both", en: "Boutique got R$ 19.550 in Oct (Bar 13.900 + Vila 5.650) and the debt is still R$ 32.724. The R$ 1.000/week must be on top of weekly purchases.", pt: "A Boutique recebeu R$ 19.550 em outubro (Bar 13.900 + Vila 5.650) e a dívida segue R$ 32.724. Os R$ 1.000/semana têm que ser além das compras da semana." },
    { k: "anota", store: "both", en: "Anota Oct sales R$ 100.810 vs Stone credited R$ 78.987. Gap R$ 21.823 is card fees plus cash and Pix outside the machine. Lucas/Fabiana 03/11: little cash vs card/Pix; most 'cash'-tagged orders are really customer Pix; counter staff also log cash as Pix; real cash goes mostly to pay employees, plus purchases/refrigerante. Cash paid out is not tracked.", pt: "Vendas Anota out R$ 100.810 x Stone creditado R$ 78.987. Diferença de R$ 21.823 é taxa de cartão mais dinheiro e Pix fora da maquininha. Lucas/Fabiana 03/11: pouco dinheiro vivo comparado a cartão/Pix; a maioria dos pedidos marcados como dinheiro é Pix do cliente; balcão também lança dinheiro como Pix; o dinheiro vivo vai principalmente para pagar funcionários, além de compras/refrigerante. Saídas em dinheiro não são registradas." }
  ],
  suppliers: [
    { name: "Boutique dos Frios Comércio Atacadista", role: "primary", bar: 13515.30, vila: 4700.00, barOct: 13900, vilaOct: 5650 },
    { name: "Jonas Miranda Distribuidora (refrigerante)", role: "secondary", bar: 6265, vila: 1143, barOct: 5919, vilaOct: 1852 },
    { name: "Mateus Supermercados", role: "secondary", bar: 5879.97, vila: 1252.11, barOct: 8957.40, vilaOct: 572.63 },
    { name: "Atacadão", role: "secondary", bar: 3559.10, vila: null, barOct: 2144.07, vilaOct: 610.64 },
    { name: "Mercurio Alimentos", role: "secondary", bar: null, vila: null, barOct: 1379.64, vilaOct: 363 }
  ],
  menu: { effective: "2026-11-10",
    changes: [ { k: "medgrand", inc: 5 }, { k: "combo", inc: 10 }, { k: "soda1", inc: 1 }, { k: "soda2", inc: 2 }, { k: "calzone", inc: 2 } ],
    bands: [ { k: "medium", lo: 39.99, hi: 59.99, inc: 5 }, { k: "large", lo: 44.99, hi: 64.99, inc: 5 }, { k: "calzone", lo: 19.99, hi: 29.99, inc: 2 } ],
    sodas: [ { n: "Coca-Cola / Zero 1L", p: 10, inc: 1 }, { n: "Tuchaua 1L", p: 8, inc: 1 }, { n: "Coca-Cola / Zero 2L", p: 15, inc: 2 }, { n: "Tuchaua 2L", p: 10, inc: 2 } ],
    combo: null,
    flavors: { file: "Cardápio 2026.1 (Lucas ODT, 03/11)", savory: 53, kept: 43, newUnpriced: 10, removed: 27, sweet: 6, calzones: 11,
      newList: ["Paulista", "Calabresa Acebolada", "Bacon", "Carne Seca", "Carne Seca c/ Catupiry", "Italiana", "Salame c/ Catupiry", "Pepperoni", "Pepperoni c/ Cheddar", "Pepperoni c/ Catupiry"] },
    other: { delivery: "R$ 2,99 – 8,99", minOrder: 20 } },
  approvalsSeed: [
    { id: "s1", date: "2026-11-10", store: "bar", type: "supplier", desc: { en: "Week 1 debt payment – Boutique dos Frios (on top of weekly purchases)", pt: "Pagamento semana 1 da dívida – Boutique dos Frios (além das compras da semana)" }, amount: 1000 },
    { id: "s2", date: "2026-11-04", store: "vila", type: "rent", desc: { en: "Vila rent 1st half – Seu Valter via Socorro (confirm new account)", pt: "Aluguel Vila 1ª parte – Seu Valter via Socorro (confirmar conta nova)" }, amount: 750 },
    { id: "s3", date: "2026-11-10", store: "bar", type: "rent", desc: { en: "Barcarena rent 1st half – Jairo Soares (due day 10)", pt: "Aluguel Barcarena 1ª parte – Jairo Soares (vence dia 10)" }, amount: 900 },
    { id: "s5", date: "2026-11-10", store: "both", type: "other", desc: { en: "System fee (due day 10). Probably Tuna R$ 279,99 per store. Confirm amount.", pt: "Mensalidade do sistema (vence dia 10). Provável Tuna R$ 279,99 por loja. Confirmar valor." }, amount: null },
    { id: "s6", date: "2026-11-06", store: "both", type: "supplier", desc: { en: "Jonas Miranda weekly soda payment. Confirm amount and whether it pays down the R$ 1.752 balance (≈ Vila 450 / Bar 1.302)", pt: "Pagamento semanal Jonas Miranda (refrigerante). Confirmar valor e se abate o saldo de R$ 1.752 (≈ Vila 450 / Bar 1.302)" }, amount: null },
    { id: "s7", date: "2026-11-05", store: "both", type: "buy", desc: { en: "Dough mixer part. Lucas quoting at a Vila store on 04/11", pt: "Peça da masseira. Lucas orçando em loja da Vila em 04/11" }, amount: null },
    { id: "s8", date: "2026-11-20", store: "bar", type: "rent", desc: { en: "Barcarena rent 2nd half – Jairo Soares (due day 20)", pt: "Aluguel Barcarena 2ª parte – Jairo Soares (vence dia 20)" }, amount: 700 },
    { id: "s9", date: "2026-11-23", store: "vila", type: "rent", desc: { en: "Vila rent 2nd half – Seu Valter via Socorro (due day 23)", pt: "Aluguel Vila 2ª parte – Seu Valter via Socorro (vence dia 23)" }, amount: 750 },
    { id: "s10", date: "2026-11-04", store: "bar", type: "other", desc: { en: "Barcarena October water bill – NOT paid yet (Lucas 03/11). Confirm amount (est. R$ 150–200)", pt: "Conta de água outubro Barcarena – AINDA NÃO PAGA (Lucas 03/11). Confirmar valor (est. R$ 150–200)" }, amount: null }
  ],
  retiredSeeds: ["s4"]
};
