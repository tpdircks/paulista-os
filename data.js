/* Paulista OS seed data. Sources noted per block. All amounts in BRL. */
window.PDATA = {
  asOf: "2026-11-03",
  rules: [
    "money", "lucas", "draw", "vila", "debt"
  ],
  stores: [
    { id: "bar", name: "Barcarena (sede)", address: "Tv. São Francisco, 614 – Centro, Barcarena/PA, CEP 68.445-000",
      anota: "Fabiana Valente Maia", stone: "Ana Paula Maia Dircks · Stone ag 0001 conta 43106076-3",
      fixed: [ { k: "rent", who: "Jairo Soares", amt: "R$ 900 (day 10) + R$ 700 (day 20)", total: 1600 },
               { k: "energy", who: "Equatorial", amt: "R$ 900 – 1.000", total: 950 },
               { k: "water", who: "Águas de São Francisco", amt: "R$ 150 – 200", total: 175 } ],
      ownerDraw: true },
    { id: "vila", name: "Vila", address: "Av. Cônego Batista Campos, 33 – Barcarena/PA, CEP 68.445-000",
      anota: "Adan Maia", stone: "Thiago · Stone conta 64744532-9",
      fixed: [ { k: "rent", who: "Seu Valter", amt: "R$ 750 (day 4) + R$ 750 (day 23)", total: 1500 },
               { k: "energy", who: "Equatorial", amt: "R$ 550 – 700", total: 625 },
               { k: "water", who: "—", amt: "none / nenhuma", total: 0 } ],
      ownerDraw: false }
  ],
  fixedSource: "Lucas, WhatsApp 2026-11-02 (midpoints used for totals)",
  sales: { period: "2026-10", source: "Anota AI, October 2026",
    bar: { revenue: 71343.51, orders: 1074, ticket: 66.43 },
    vila: { revenue: 29466.37, orders: 441, ticket: 66.82 } },
  stone: { period: "2026-09", source: "Stone extratos 01–30/09/2026 (issued 2026-10-01), reconciled line by line",
    bar: { open: 2683.32, inflow: 56774.22, outflow: 57997.33, close: 1460.21, sales: 54409.37, pixMaq: 24058.01, card: 30351.36,
           suppliers: 25971.45, utilities: 1772.25, rent: 1600, personal: 9380, people: 18247.59, fees: 178.05, low: "R$ 0,53 (26/09)" },
    vila: { open: 595.04, inflow: 22658.40, outflow: 22453.37, close: 800.07, sales: 21082.54, pixMaq: 10876.63, card: 10205.91,
           suppliers: 7503.52, utilities: 825.46, rent: 1500, personal: 3587, people: 7258.54, fees: 106.78, low: "R$ 9,30 (02/09)" } },
  debt: { asOf: "2026-11-02", source: "Lucas, WhatsApp 2026-11-02", bar: 24325, vila: 8399, loans: 0,
    weekly: 1000, start: "2026-11-10" },
  suppliers: [
    { name: "Boutique dos Frios Comércio Atacadista", role: "primary", bar: 13515.30, vila: 4700.00 },
    { name: "Mateus Supermercados", role: "secondary", bar: 5879.97, vila: 1252.11 },
    { name: "Atacadão", role: "secondary", bar: 3559.10, vila: null }
  ],
  menu: { effective: "2026-11-10",
    changes: [ { k: "medgrand", inc: 5 }, { k: "combo", inc: 10 }, { k: "soda1", inc: 1 }, { k: "soda2", inc: 2 }, { k: "calzone", inc: 2 } ],
    bands: [ { k: "medium", lo: 39.99, hi: 59.99, inc: 5 }, { k: "large", lo: 44.99, hi: 64.99, inc: 5 }, { k: "calzone", lo: 19.99, hi: 29.99, inc: 2 } ],
    other: { delivery: "R$ 2,99 – 8,99", minOrder: 20 } },
  approvalsSeed: [
    { id: "s1", date: "2026-11-10", store: "bar", type: "supplier", desc: { en: "Week 1 debt payment – Boutique dos Frios", pt: "Pagamento semana 1 da dívida – Boutique dos Frios" }, amount: 1000 },
    { id: "s2", date: "2026-11-04", store: "vila", type: "rent", desc: { en: "Vila rent 1st half – Seu Valter (due day 4)", pt: "Aluguel Vila 1ª parte – Seu Valter (vence dia 4)" }, amount: 750 },
    { id: "s3", date: "2026-11-10", store: "bar", type: "rent", desc: { en: "Barcarena rent 1st half – Jairo Soares (due day 10)", pt: "Aluguel Barcarena 1ª parte – Jairo Soares (vence dia 10)" }, amount: 900 },
    { id: "s4", date: "2026-11-09", store: "both", type: "buy", desc: { en: "Reprint cardápio with Nov 10 prices (quote pending from Lucas)", pt: "Reimprimir cardápio com preços de 10/11 (orçamento pendente do Lucas)" }, amount: null }
  ]
};
