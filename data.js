/* Paulista OS seed data. Sources noted per block. All amounts in BRL. No passwords are stored here, ever. */
window.PDATA = {
  asOf: "2026-11-05",
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
  sales: { period: "2026-10", source: "Anota AI Relatórios > Pedidos, October 2026 (excl. cancelled). Stone credited from the Oct extrato.",
    bar: { revenue: 76333.64, orders: 1150, ticket: 66.38, stone: 57007.58 },
    vila: { revenue: 29466.37, orders: 441, ticket: 66.82, stone: 21979.77 } },
  /* Daily Anota series, Relatórios > Pedidos, cancelled excluded, 2026-08-06 through 2026-11-05.
     A later row with the same date replaces the earlier one. A morning job can refresh this array. */
  dailySales: [
    {
      "date": "2026-08-06",
      "bar": {
        "revenue": 2032.4,
        "orders": 31,
        "ticket": 65.56
      },
      "vila": {
        "revenue": 921.83,
        "orders": 16,
        "ticket": 57.61
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-07",
      "bar": {
        "revenue": 1843.49,
        "orders": 28,
        "ticket": 65.84
      },
      "vila": {
        "revenue": 1009.8,
        "orders": 15,
        "ticket": 67.32
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-08",
      "bar": {
        "revenue": 3833.98,
        "orders": 52,
        "ticket": 73.73
      },
      "vila": {
        "revenue": 1714.7,
        "orders": 24,
        "ticket": 71.45
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-09",
      "bar": {
        "revenue": 5625.52,
        "orders": 77,
        "ticket": 73.06
      },
      "vila": {
        "revenue": 1704.67,
        "orders": 26,
        "ticket": 65.56
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-10",
      "bar": {
        "revenue": 1903.41,
        "orders": 30,
        "ticket": 63.45
      },
      "vila": {
        "revenue": 636.88,
        "orders": 9,
        "ticket": 70.76
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-11",
      "bar": {
        "revenue": 791.76,
        "orders": 11,
        "ticket": 71.98
      },
      "vila": {
        "revenue": 246.95,
        "orders": 4,
        "ticket": 61.74
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-12",
      "bar": {
        "revenue": 761.76,
        "orders": 13,
        "ticket": 58.6
      },
      "vila": {
        "revenue": 482.92,
        "orders": 8,
        "ticket": 60.37
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-13",
      "bar": {
        "revenue": 1283.63,
        "orders": 21,
        "ticket": 61.13
      },
      "vila": {
        "revenue": 428.92,
        "orders": 6,
        "ticket": 71.49
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-14",
      "bar": {
        "revenue": 2160.38,
        "orders": 33,
        "ticket": 65.47
      },
      "vila": {
        "revenue": 992.8,
        "orders": 15,
        "ticket": 66.19
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-15",
      "bar": {
        "revenue": 2209.32,
        "orders": 37,
        "ticket": 59.71
      },
      "vila": {
        "revenue": 1325.76,
        "orders": 20,
        "ticket": 66.29
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-16",
      "bar": {
        "revenue": 4553.77,
        "orders": 62,
        "ticket": 73.45
      },
      "vila": {
        "revenue": 2799.45,
        "orders": 38,
        "ticket": 73.67
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-17",
      "bar": {
        "revenue": 1484.59,
        "orders": 22,
        "ticket": 67.48
      },
      "vila": {
        "revenue": 348.94,
        "orders": 6,
        "ticket": 58.16
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-18",
      "bar": {
        "revenue": 2073.44,
        "orders": 25,
        "ticket": 82.94
      },
      "vila": {
        "revenue": 306.93,
        "orders": 6,
        "ticket": 51.16
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-19",
      "bar": {
        "revenue": 1134.65,
        "orders": 16,
        "ticket": 70.92
      },
      "vila": {
        "revenue": 367.93,
        "orders": 5,
        "ticket": 73.59
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-20",
      "bar": {
        "revenue": 1070.7,
        "orders": 16,
        "ticket": 66.92
      },
      "vila": {
        "revenue": 623.87,
        "orders": 10,
        "ticket": 62.39
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-21",
      "bar": {
        "revenue": 1130.66,
        "orders": 18,
        "ticket": 62.81
      },
      "vila": {
        "revenue": 771.86,
        "orders": 12,
        "ticket": 64.32
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-22",
      "bar": {
        "revenue": 3701.98,
        "orders": 52,
        "ticket": 71.19
      },
      "vila": {
        "revenue": 1838.68,
        "orders": 26,
        "ticket": 70.72
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-23",
      "bar": {
        "revenue": 3970.93,
        "orders": 56,
        "ticket": 70.91
      },
      "vila": {
        "revenue": 2775.46,
        "orders": 41,
        "ticket": 67.69
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-24",
      "bar": {
        "revenue": 1551.59,
        "orders": 21,
        "ticket": 73.89
      },
      "vila": {
        "revenue": 0,
        "orders": 0,
        "ticket": 0
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-25",
      "bar": {
        "revenue": 1399.66,
        "orders": 20,
        "ticket": 69.98
      },
      "vila": {
        "revenue": 341.93,
        "orders": 5,
        "ticket": 68.39
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-26",
      "bar": {
        "revenue": 1014.69,
        "orders": 17,
        "ticket": 59.69
      },
      "vila": {
        "revenue": 644.89,
        "orders": 10,
        "ticket": 64.49
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-27",
      "bar": {
        "revenue": 854.77,
        "orders": 14,
        "ticket": 61.06
      },
      "vila": {
        "revenue": 663.88,
        "orders": 8,
        "ticket": 82.98
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-28",
      "bar": {
        "revenue": 2275.34,
        "orders": 35,
        "ticket": 65.01
      },
      "vila": {
        "revenue": 695.87,
        "orders": 9,
        "ticket": 77.32
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-29",
      "bar": {
        "revenue": 3149.14,
        "orders": 45,
        "ticket": 69.98
      },
      "vila": {
        "revenue": 1488.75,
        "orders": 23,
        "ticket": 64.73
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-30",
      "bar": {
        "revenue": 4963.58,
        "orders": 79,
        "ticket": 62.83
      },
      "vila": {
        "revenue": 1096.78,
        "orders": 16,
        "ticket": 68.55
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-08-31",
      "bar": {
        "revenue": 1021.76,
        "orders": 14,
        "ticket": 72.98
      },
      "vila": {
        "revenue": 0,
        "orders": 0,
        "ticket": 0
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-01",
      "bar": {
        "revenue": 1448.58,
        "orders": 24,
        "ticket": 60.36
      },
      "vila": {
        "revenue": 505.9,
        "orders": 7,
        "ticket": 72.27
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-02",
      "bar": {
        "revenue": 657.83,
        "orders": 11,
        "ticket": 59.8
      },
      "vila": {
        "revenue": 550.9,
        "orders": 9,
        "ticket": 61.21
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-03",
      "bar": {
        "revenue": 1706.51,
        "orders": 26,
        "ticket": 65.64
      },
      "vila": {
        "revenue": 976.82,
        "orders": 12,
        "ticket": 81.4
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-04",
      "bar": {
        "revenue": 2973.05,
        "orders": 46,
        "ticket": 64.63
      },
      "vila": {
        "revenue": 1363.76,
        "orders": 19,
        "ticket": 71.78
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-05",
      "bar": {
        "revenue": 3146.1,
        "orders": 46,
        "ticket": 68.39
      },
      "vila": {
        "revenue": 1310.77,
        "orders": 20,
        "ticket": 65.54
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-06",
      "bar": {
        "revenue": 5841.37,
        "orders": 84,
        "ticket": 69.54
      },
      "vila": {
        "revenue": 2374.54,
        "orders": 33,
        "ticket": 71.96
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-07",
      "bar": {
        "revenue": 5182.57,
        "orders": 64,
        "ticket": 80.98
      },
      "vila": {
        "revenue": 857.83,
        "orders": 13,
        "ticket": 65.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-08",
      "bar": {
        "revenue": 2074.54,
        "orders": 20,
        "ticket": 103.73
      },
      "vila": {
        "revenue": 545.89,
        "orders": 7,
        "ticket": 77.98
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-09",
      "bar": {
        "revenue": 1629.6,
        "orders": 28,
        "ticket": 58.2
      },
      "vila": {
        "revenue": 697.87,
        "orders": 11,
        "ticket": 63.44
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-10",
      "bar": {
        "revenue": 1169.62,
        "orders": 16,
        "ticket": 73.1
      },
      "vila": {
        "revenue": 256.95,
        "orders": 4,
        "ticket": 64.24
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-11",
      "bar": {
        "revenue": 2364.38,
        "orders": 36,
        "ticket": 65.68
      },
      "vila": {
        "revenue": 728.85,
        "orders": 11,
        "ticket": 66.26
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-12",
      "bar": {
        "revenue": 2999.08,
        "orders": 45,
        "ticket": 66.65
      },
      "vila": {
        "revenue": 1350.75,
        "orders": 20,
        "ticket": 67.54
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-13",
      "bar": {
        "revenue": 4696.79,
        "orders": 72,
        "ticket": 65.23
      },
      "vila": {
        "revenue": 1810.65,
        "orders": 23,
        "ticket": 78.72
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-14",
      "bar": {
        "revenue": 989.73,
        "orders": 14,
        "ticket": 70.7
      },
      "vila": {
        "revenue": 632.88,
        "orders": 9,
        "ticket": 70.32
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-15",
      "bar": {
        "revenue": 922.82,
        "orders": 17,
        "ticket": 54.28
      },
      "vila": {
        "revenue": 665.88,
        "orders": 11,
        "ticket": 60.53
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-16",
      "bar": {
        "revenue": 1968.58,
        "orders": 29,
        "ticket": 67.88
      },
      "vila": {
        "revenue": 483.9,
        "orders": 9,
        "ticket": 53.77
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-17",
      "bar": {
        "revenue": 1429.71,
        "orders": 20,
        "ticket": 71.49
      },
      "vila": {
        "revenue": 498.91,
        "orders": 7,
        "ticket": 71.27
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-18",
      "bar": {
        "revenue": 2004.56,
        "orders": 24,
        "ticket": 83.52
      },
      "vila": {
        "revenue": 638.89,
        "orders": 9,
        "ticket": 70.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-19",
      "bar": {
        "revenue": 2627.38,
        "orders": 40,
        "ticket": 65.68
      },
      "vila": {
        "revenue": 1280.75,
        "orders": 20,
        "ticket": 64.04
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-20",
      "bar": {
        "revenue": 5009.62,
        "orders": 74,
        "ticket": 67.7
      },
      "vila": {
        "revenue": 2301.58,
        "orders": 34,
        "ticket": 67.69
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-21",
      "bar": {
        "revenue": 1289.68,
        "orders": 19,
        "ticket": 67.88
      },
      "vila": {
        "revenue": 364.93,
        "orders": 6,
        "ticket": 60.82
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-22",
      "bar": {
        "revenue": 1871.53,
        "orders": 28,
        "ticket": 66.84
      },
      "vila": {
        "revenue": 345.94,
        "orders": 6,
        "ticket": 57.66
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-23",
      "bar": {
        "revenue": 1080.68,
        "orders": 17,
        "ticket": 63.57
      },
      "vila": {
        "revenue": 817.85,
        "orders": 11,
        "ticket": 74.35
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-24",
      "bar": {
        "revenue": 1621.57,
        "orders": 26,
        "ticket": 62.37
      },
      "vila": {
        "revenue": 396.93,
        "orders": 7,
        "ticket": 56.7
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-25",
      "bar": {
        "revenue": 3261.09,
        "orders": 44,
        "ticket": 74.12
      },
      "vila": {
        "revenue": 843.86,
        "orders": 9,
        "ticket": 93.76
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-26",
      "bar": {
        "revenue": 3185.2,
        "orders": 49,
        "ticket": 65
      },
      "vila": {
        "revenue": 1763.68,
        "orders": 24,
        "ticket": 73.49
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-27",
      "bar": {
        "revenue": 4295.87,
        "orders": 71,
        "ticket": 60.51
      },
      "vila": {
        "revenue": 1543.71,
        "orders": 23,
        "ticket": 67.12
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-28",
      "bar": {
        "revenue": 1065.73,
        "orders": 18,
        "ticket": 59.21
      },
      "vila": {
        "revenue": 88.98,
        "orders": 1,
        "ticket": 88.98
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-29",
      "bar": {
        "revenue": 1362.61,
        "orders": 20,
        "ticket": 68.13
      },
      "vila": {
        "revenue": 508.91,
        "orders": 9,
        "ticket": 56.55
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-09-30",
      "bar": {
        "revenue": 1526.58,
        "orders": 26,
        "ticket": 58.71
      },
      "vila": {
        "revenue": 1074.79,
        "orders": 17,
        "ticket": 63.22
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-01",
      "bar": {
        "revenue": 1481.59,
        "orders": 24,
        "ticket": 61.73
      },
      "vila": {
        "revenue": 781.85,
        "orders": 10,
        "ticket": 78.19
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-02",
      "bar": {
        "revenue": 2572.28,
        "orders": 32,
        "ticket": 80.38
      },
      "vila": {
        "revenue": 1145.79,
        "orders": 17,
        "ticket": 67.4
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-03",
      "bar": {
        "revenue": 4111.29,
        "orders": 63,
        "ticket": 65.26
      },
      "vila": {
        "revenue": 2143.59,
        "orders": 28,
        "ticket": 76.56
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-04",
      "bar": {
        "revenue": 6696.22,
        "orders": 81,
        "ticket": 82.67
      },
      "vila": {
        "revenue": 1951.65,
        "orders": 30,
        "ticket": 65.06
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-05",
      "bar": {
        "revenue": 1823.46,
        "orders": 30,
        "ticket": 60.78
      },
      "vila": {
        "revenue": 1303.76,
        "orders": 18,
        "ticket": 72.43
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-06",
      "bar": {
        "revenue": 2376.38,
        "orders": 37,
        "ticket": 64.23
      },
      "vila": {
        "revenue": 703.86,
        "orders": 12,
        "ticket": 58.66
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-07",
      "bar": {
        "revenue": 1421.6,
        "orders": 24,
        "ticket": 59.23
      },
      "vila": {
        "revenue": 973.8,
        "orders": 16,
        "ticket": 60.86
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-08",
      "bar": {
        "revenue": 1539.56,
        "orders": 24,
        "ticket": 64.15
      },
      "vila": {
        "revenue": 692.86,
        "orders": 9,
        "ticket": 76.98
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-09",
      "bar": {
        "revenue": 2444.37,
        "orders": 36,
        "ticket": 67.9
      },
      "vila": {
        "revenue": 643.88,
        "orders": 10,
        "ticket": 64.39
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-10",
      "bar": {
        "revenue": 2654.27,
        "orders": 44,
        "ticket": 60.32
      },
      "vila": {
        "revenue": 1319.75,
        "orders": 20,
        "ticket": 65.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-11",
      "bar": {
        "revenue": 4355.79,
        "orders": 69,
        "ticket": 63.13
      },
      "vila": {
        "revenue": 2188.59,
        "orders": 31,
        "ticket": 70.6
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-12",
      "bar": {
        "revenue": 4553.81,
        "orders": 66,
        "ticket": 69
      },
      "vila": {
        "revenue": 2096.61,
        "orders": 32,
        "ticket": 65.52
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-13",
      "bar": {
        "revenue": 1008.71,
        "orders": 20,
        "ticket": 50.44
      },
      "vila": {
        "revenue": 0,
        "orders": 0,
        "ticket": 0
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-14",
      "bar": {
        "revenue": 1285.69,
        "orders": 19,
        "ticket": 67.67
      },
      "vila": {
        "revenue": 356.91,
        "orders": 6,
        "ticket": 59.49
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-15",
      "bar": {
        "revenue": 1402.64,
        "orders": 23,
        "ticket": 60.98
      },
      "vila": {
        "revenue": 493.9,
        "orders": 8,
        "ticket": 61.74
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-16",
      "bar": {
        "revenue": 1527.55,
        "orders": 24,
        "ticket": 63.65
      },
      "vila": {
        "revenue": 884.84,
        "orders": 14,
        "ticket": 63.2
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-17",
      "bar": {
        "revenue": 4396.34,
        "orders": 63,
        "ticket": 69.78
      },
      "vila": {
        "revenue": 1202.76,
        "orders": 20,
        "ticket": 60.14
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-18",
      "bar": {
        "revenue": 3300.1,
        "orders": 51,
        "ticket": 64.71
      },
      "vila": {
        "revenue": 1911.66,
        "orders": 29,
        "ticket": 65.92
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-19",
      "bar": {
        "revenue": 1202.72,
        "orders": 17,
        "ticket": 70.75
      },
      "vila": {
        "revenue": 600.88,
        "orders": 9,
        "ticket": 66.76
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-20",
      "bar": {
        "revenue": 1368.67,
        "orders": 23,
        "ticket": 59.51
      },
      "vila": {
        "revenue": 259.95,
        "orders": 5,
        "ticket": 51.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-21",
      "bar": {
        "revenue": 2283.35,
        "orders": 35,
        "ticket": 65.24
      },
      "vila": {
        "revenue": 649.87,
        "orders": 10,
        "ticket": 64.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-22",
      "bar": {
        "revenue": 1064.68,
        "orders": 17,
        "ticket": 62.63
      },
      "vila": {
        "revenue": 339.94,
        "orders": 5,
        "ticket": 67.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-23",
      "bar": {
        "revenue": 1197.7,
        "orders": 20,
        "ticket": 59.89
      },
      "vila": {
        "revenue": 752.86,
        "orders": 11,
        "ticket": 68.44
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-24",
      "bar": {
        "revenue": 3403.01,
        "orders": 54,
        "ticket": 63.02
      },
      "vila": {
        "revenue": 738.85,
        "orders": 12,
        "ticket": 61.57
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-25",
      "bar": {
        "revenue": 5550.4,
        "orders": 79,
        "ticket": 70.26
      },
      "vila": {
        "revenue": 1627.67,
        "orders": 27,
        "ticket": 60.28
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-26",
      "bar": {
        "revenue": 1477.61,
        "orders": 26,
        "ticket": 56.83
      },
      "vila": {
        "revenue": 0,
        "orders": 0,
        "ticket": 0
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-27",
      "bar": {
        "revenue": 1444.63,
        "orders": 21,
        "ticket": 68.79
      },
      "vila": {
        "revenue": 860.83,
        "orders": 11,
        "ticket": 78.26
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-28",
      "bar": {
        "revenue": 1811.51,
        "orders": 30,
        "ticket": 60.38
      },
      "vila": {
        "revenue": 353.93,
        "orders": 6,
        "ticket": 58.99
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-29",
      "bar": {
        "revenue": 1587.58,
        "orders": 22,
        "ticket": 72.16
      },
      "vila": {
        "revenue": 408.91,
        "orders": 7,
        "ticket": 58.42
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-30",
      "bar": {
        "revenue": 1280.65,
        "orders": 19,
        "ticket": 67.4
      },
      "vila": {
        "revenue": 1083.8,
        "orders": 13,
        "ticket": 83.37
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-10-31",
      "bar": {
        "revenue": 3709.48,
        "orders": 57,
        "ticket": 65.08
      },
      "vila": {
        "revenue": 992.82,
        "orders": 15,
        "ticket": 66.19
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-11-01",
      "bar": {
        "revenue": 4747.73,
        "orders": 71,
        "ticket": 66.87
      },
      "vila": {
        "revenue": 1956.64,
        "orders": 28,
        "ticket": 69.88
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-11-02",
      "bar": {
        "revenue": 4630.71,
        "orders": 72,
        "ticket": 64.32
      },
      "vila": {
        "revenue": 1416.7,
        "orders": 19,
        "ticket": 74.56
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-11-03",
      "bar": {
        "revenue": 1271.64,
        "orders": 21,
        "ticket": 60.55
      },
      "vila": {
        "revenue": 318.95,
        "orders": 4,
        "ticket": 79.74
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-11-04",
      "bar": {
        "revenue": 1196.67,
        "orders": 19,
        "ticket": 62.98
      },
      "vila": {
        "revenue": 356.93,
        "orders": 6,
        "ticket": 59.49
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    },
    {
      "date": "2026-11-05",
      "bar": {
        "revenue": 1301.68,
        "orders": 19,
        "ticket": 68.51
      },
      "vila": {
        "revenue": 702.88,
        "orders": 10,
        "ticket": 70.29
      },
      "source": "Anota AI Relatórios > Pedidos (excl. cancelled)"
    }
  ],
  /* Item reports from Anota Relatório de Itens. defaultPeriod is the one the Dashboard and Items tab open on.
     periods[0] is Nov 1 to 5, 2026. periods[1] is October 2026.
     The nested itemSales object is the Nov copy. itemSalesOctober is October.
     Duplicate Anota names are already merged. Append a newer period and set defaultPeriod to its id. */
  itemSales: {
    "asOf": "2026-11-05",
    "defaultPeriod": "2026-11-mtd",
    "source": "Anota Relatório de Itens (Principais + Adicionais/Sabores)",
    "periods": [
      {
        "id": "2026-11-mtd",
        "asOf": "2026-11-05",
        "period": [
          "2026-11-01",
          "2026-11-05"
        ],
        "periodLabel": "Nov 1–5, 2026",
        "source": "Anota Relatório de Itens → Principais + Adicionais (Fabiana Barcarena + Adan Vila); duplicate names merged",
        "combined": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "bar": 150,
              "vila": 57,
              "qty": 207,
              "category": "size"
            },
            {
              "name": "MÉDIA (30 CM)",
              "bar": 69,
              "vila": 20,
              "qty": 89,
              "category": "size"
            },
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "bar": 32,
              "vila": 0,
              "qty": 32,
              "category": "soda"
            },
            {
              "name": "Coca cola 2L",
              "bar": 31,
              "vila": 0,
              "qty": 31,
              "category": "soda"
            },
            {
              "name": "Guaraná da Amazônia",
              "bar": 26,
              "vila": 0,
              "qty": 26,
              "category": "soda"
            },
            {
              "name": "Coca-cola Zero 1L",
              "bar": 17,
              "vila": 3,
              "qty": 20,
              "category": "soda"
            },
            {
              "name": "Coca Cola 1L",
              "bar": 15,
              "vila": 0,
              "qty": 15,
              "category": "soda"
            },
            {
              "name": "COCA COLA - 2L",
              "bar": 0,
              "vila": 15,
              "qty": 15,
              "category": "soda"
            },
            {
              "name": "Coca-Cola 1 litro",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "soda"
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "bar": 0,
              "vila": 6,
              "qty": 6,
              "category": "soda"
            },
            {
              "name": "PIZZA FECHADA",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "calzone"
            },
            {
              "name": "Guaraná Amazônia",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "soda"
            },
            {
              "name": "BARÉ 2lt",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "soda"
            },
            {
              "name": "coca cola zero 2L",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "soda"
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "bar": 46,
              "vila": 17,
              "qty": 63,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "bar": 15,
              "vila": 10,
              "qty": 25,
              "category": "pizza"
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "bar": 16,
              "vila": 7,
              "qty": 23,
              "category": "pizza"
            },
            {
              "name": "2 QUEIJOS",
              "bar": 14,
              "vila": 1,
              "qty": 15,
              "category": "pizza"
            },
            {
              "name": "4 QUEIJOS",
              "bar": 12,
              "vila": 3,
              "qty": 15,
              "category": "pizza"
            },
            {
              "name": "CALACHEDDAR",
              "bar": 12,
              "vila": 3,
              "qty": 15,
              "category": "calzone"
            },
            {
              "name": "CALAFRANGO",
              "bar": 11,
              "vila": 4,
              "qty": 15,
              "category": "calzone"
            },
            {
              "name": "CALABRESA BARBECUE",
              "bar": 14,
              "vila": 0,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "BACON (sem milho)",
              "bar": 14,
              "vila": 0,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "MODA DA CASA",
              "bar": 10,
              "vila": 4,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "FRANGO",
              "bar": 10,
              "vila": 3,
              "qty": 13,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CHEDDAR",
              "bar": 7,
              "vila": 6,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "MISTA",
              "bar": 7,
              "vila": 4,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "SEM BORDA",
              "bar": 10,
              "vila": 0,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "BORDA REQUEIJÃO",
              "bar": 10,
              "vila": 0,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "PORTUGUESA",
              "bar": 4,
              "vila": 6,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "MUSSARELA",
              "bar": 8,
              "vila": 1,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "3 QUEIJOS",
              "bar": 6,
              "vila": 3,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "CALABRESA ESPECIAL",
              "bar": 6,
              "vila": 3,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "COSTELA",
              "bar": 7,
              "vila": 1,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "JARDINEIRA",
              "bar": 6,
              "vila": 2,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "BACON II",
              "bar": 6,
              "vila": 2,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "bar": 6,
              "vila": 1,
              "qty": 7,
              "category": "borda"
            },
            {
              "name": "HOLANDESA",
              "bar": 5,
              "vila": 2,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO",
              "bar": 4,
              "vila": 3,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CHEDDAR",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "5 QUEIJOS",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "ROMANESCA",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "CALAMAR",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "calzone"
            },
            {
              "name": "AMERICANA",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "CALAMUSSA",
              "bar": 4,
              "vila": 0,
              "qty": 4,
              "category": "calzone"
            },
            {
              "name": "SALAME",
              "bar": 4,
              "vila": 0,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "LEÃO",
              "bar": 3,
              "vila": 1,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "BRIGADEIRO",
              "bar": 3,
              "vila": 1,
              "qty": 4,
              "category": "sweet"
            },
            {
              "name": "BAURU",
              "bar": 1,
              "vila": 3,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBEBUE",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "FRANGO BARBECUE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADPHIA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "CE QUE SABE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "DISQUETE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "sweet"
            },
            {
              "name": "VENEZA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CATUPIRY",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "PERÚ",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PARISIENSE",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PEPPERONI",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CHOCOMUSSA",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "sweet"
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "LOBO",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "borda"
            },
            {
              "name": "COSTELA ESPECIAL",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CAIPIRA",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "FRANGO COMPLETA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "ELDORADO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BORDA DE MUSSARELA",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "CHEDDAR",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FILÉ",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "LOMBO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BORDA DE MUSSARELA E PRESUNTO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BACON",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "MARGUERITA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "PERU",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "MINEIRA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            }
          ]
        },
        "byCategory": {
          "size": [
            {
              "name": "GRANDE (35 CM)",
              "bar": 150,
              "vila": 57,
              "qty": 207,
              "category": "size"
            },
            {
              "name": "MÉDIA (30 CM)",
              "bar": 69,
              "vila": 20,
              "qty": 89,
              "category": "size"
            }
          ],
          "soda": [
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "bar": 32,
              "vila": 0,
              "qty": 32,
              "category": "soda"
            },
            {
              "name": "Coca cola 2L",
              "bar": 31,
              "vila": 0,
              "qty": 31,
              "category": "soda"
            },
            {
              "name": "Guaraná da Amazônia",
              "bar": 26,
              "vila": 0,
              "qty": 26,
              "category": "soda"
            },
            {
              "name": "Coca-cola Zero 1L",
              "bar": 17,
              "vila": 3,
              "qty": 20,
              "category": "soda"
            },
            {
              "name": "Coca Cola 1L",
              "bar": 15,
              "vila": 0,
              "qty": 15,
              "category": "soda"
            },
            {
              "name": "COCA COLA - 2L",
              "bar": 0,
              "vila": 15,
              "qty": 15,
              "category": "soda"
            },
            {
              "name": "Coca-Cola 1 litro",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "soda"
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "bar": 0,
              "vila": 6,
              "qty": 6,
              "category": "soda"
            },
            {
              "name": "Guaraná Amazônia",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "soda"
            },
            {
              "name": "BARÉ 2lt",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "soda"
            },
            {
              "name": "coca cola zero 2L",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "soda"
            }
          ],
          "pizza": [
            {
              "name": "PAULISTA",
              "bar": 46,
              "vila": 17,
              "qty": 63,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "bar": 15,
              "vila": 10,
              "qty": 25,
              "category": "pizza"
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "bar": 16,
              "vila": 7,
              "qty": 23,
              "category": "pizza"
            },
            {
              "name": "2 QUEIJOS",
              "bar": 14,
              "vila": 1,
              "qty": 15,
              "category": "pizza"
            },
            {
              "name": "4 QUEIJOS",
              "bar": 12,
              "vila": 3,
              "qty": 15,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBECUE",
              "bar": 14,
              "vila": 0,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "BACON (sem milho)",
              "bar": 14,
              "vila": 0,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "MODA DA CASA",
              "bar": 10,
              "vila": 4,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "FRANGO",
              "bar": 10,
              "vila": 3,
              "qty": 13,
              "category": "pizza"
            },
            {
              "name": "MISTA",
              "bar": 7,
              "vila": 4,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "PORTUGUESA",
              "bar": 4,
              "vila": 6,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "MUSSARELA",
              "bar": 8,
              "vila": 1,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "3 QUEIJOS",
              "bar": 6,
              "vila": 3,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "CALABRESA ESPECIAL",
              "bar": 6,
              "vila": 3,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "COSTELA",
              "bar": 7,
              "vila": 1,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "JARDINEIRA",
              "bar": 6,
              "vila": 2,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "BACON II",
              "bar": 6,
              "vila": 2,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "HOLANDESA",
              "bar": 5,
              "vila": 2,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO",
              "bar": 4,
              "vila": 3,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CHEDDAR",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "5 QUEIJOS",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "ROMANESCA",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "AMERICANA",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "SALAME",
              "bar": 4,
              "vila": 0,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "LEÃO",
              "bar": 3,
              "vila": 1,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "BAURU",
              "bar": 1,
              "vila": 3,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBEBUE",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "FRANGO BARBECUE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADPHIA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "CE QUE SABE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "VENEZA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "PERÚ",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PARISIENSE",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PEPPERONI",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "LOBO",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "COSTELA ESPECIAL",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CAIPIRA",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "FRANGO COMPLETA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "ELDORADO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "CHEDDAR",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FILÉ",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "LOMBO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BACON",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "MARGUERITA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "PERU",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "MINEIRA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            }
          ],
          "borda": [
            {
              "name": "BORDA DE CHEDDAR",
              "bar": 7,
              "vila": 6,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "SEM BORDA",
              "bar": 10,
              "vila": 0,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "BORDA REQUEIJÃO",
              "bar": 10,
              "vila": 0,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "bar": 6,
              "vila": 1,
              "qty": 7,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "BORDA DE CATUPIRY",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "bar": 1,
              "vila": 1,
              "qty": 2,
              "category": "borda"
            },
            {
              "name": "BORDA DE MUSSARELA",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE MUSSARELA E PRESUNTO",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "borda"
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "borda"
            }
          ],
          "calzone": [
            {
              "name": "CALACHEDDAR",
              "bar": 12,
              "vila": 3,
              "qty": 15,
              "category": "calzone"
            },
            {
              "name": "CALAFRANGO",
              "bar": 11,
              "vila": 4,
              "qty": 15,
              "category": "calzone"
            },
            {
              "name": "CALAMAR",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "calzone"
            },
            {
              "name": "PIZZA FECHADA",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "calzone"
            },
            {
              "name": "CALAMUSSA",
              "bar": 4,
              "vila": 0,
              "qty": 4,
              "category": "calzone"
            }
          ],
          "sweet": [
            {
              "name": "BRIGADEIRO",
              "bar": 3,
              "vila": 1,
              "qty": 4,
              "category": "sweet"
            },
            {
              "name": "DISQUETE",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "sweet"
            },
            {
              "name": "CHOCOMUSSA",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "sweet"
            }
          ],
          "other": []
        },
        "stores": {
          "bar": {
            "principais": [
              {
                "name": "GRANDE (35 CM)",
                "qty": 150
              },
              {
                "name": "Media",
                "qty": 69
              },
              {
                "name": "GUARANÁ ANTÁRTICA 1L",
                "qty": 32
              },
              {
                "name": "Coca cola 2L",
                "qty": 31
              },
              {
                "name": "Guaraná da Amazônia",
                "qty": 26
              },
              {
                "name": "Coca Cola Zero 1L",
                "qty": 17
              },
              {
                "name": "Coca Cola 1L",
                "qty": 15
              },
              {
                "name": "PIZZA FECHADA",
                "qty": 5
              },
              {
                "name": "BARÉ 2lt",
                "qty": 3
              }
            ],
            "sabores": [
              {
                "name": "PAULISTA",
                "qty": 46
              },
              {
                "name": "CALABRESA C/ CATUPIRY",
                "qty": 16
              },
              {
                "name": "FRANGO C/ CATUPIRY",
                "qty": 15
              },
              {
                "name": "CALABRESA BARBECUE",
                "qty": 14
              },
              {
                "name": "BACON (sem milho)",
                "qty": 14
              },
              {
                "name": "2 Queijos",
                "qty": 14
              },
              {
                "name": "4 QUEIJOS",
                "qty": 12
              },
              {
                "name": "CALACHEDDAR",
                "qty": 12
              },
              {
                "name": "CALAFRANGO",
                "qty": 11
              },
              {
                "name": "SEM BORDA",
                "qty": 10
              },
              {
                "name": "FRANGO",
                "qty": 10
              },
              {
                "name": "MODA DA CASA",
                "qty": 10
              },
              {
                "name": "BORDA REQUEIJÃO",
                "qty": 10
              },
              {
                "name": "MUSSARELA",
                "qty": 8
              },
              {
                "name": "MISTA",
                "qty": 7
              },
              {
                "name": "COSTELA",
                "qty": 7
              },
              {
                "name": "BORDA DE CHEDDAR",
                "qty": 7
              },
              {
                "name": "JARDINEIRA",
                "qty": 6
              },
              {
                "name": "BACON II",
                "qty": 6
              },
              {
                "name": "3 QUEIJOS",
                "qty": 6
              },
              {
                "name": "CALABRESA ESPECIAL",
                "qty": 6
              },
              {
                "name": "BORDA DE CREAM CHEESE",
                "qty": 6
              },
              {
                "name": "CAMARÃO C/ CATUPIRY",
                "qty": 6
              },
              {
                "name": "FRANGO C/ CHEDDAR",
                "qty": 6
              },
              {
                "name": "5 QUEIJOS",
                "qty": 5
              },
              {
                "name": "ROMANESCA",
                "qty": 5
              },
              {
                "name": "HOLANDESA",
                "qty": 5
              },
              {
                "name": "CALAMAR",
                "qty": 5
              },
              {
                "name": "AMERICANA",
                "qty": 5
              },
              {
                "name": "CALAMUSSA",
                "qty": 4
              },
              {
                "name": "SALAME",
                "qty": 4
              },
              {
                "name": "PORTUGUESA",
                "qty": 4
              },
              {
                "name": "CAMARÃO",
                "qty": 4
              },
              {
                "name": "FRANGO BARBECUE",
                "qty": 3
              },
              {
                "name": "LEÃO",
                "qty": 3
              },
              {
                "name": "FRANGO PHILADPHIA",
                "qty": 3
              },
              {
                "name": "BORDA DE CREAM COM ALHO FRITO",
                "qty": 3
              },
              {
                "name": "CE QUE SABE",
                "qty": 3
              },
              {
                "name": "DISQUETE",
                "qty": 3
              },
              {
                "name": "VENEZA",
                "qty": 3
              },
              {
                "name": "BRIGADEIRO",
                "qty": 3
              },
              {
                "name": "PERÚ",
                "qty": 2
              },
              {
                "name": "PARISIENSE",
                "qty": 2
              },
              {
                "name": "PEPPERONI",
                "qty": 2
              },
              {
                "name": "CHOCOMUSSA",
                "qty": 2
              },
              {
                "name": "Pizza de calabresa+ Pizza de Mussarela",
                "qty": 2
              },
              {
                "name": "LOBO",
                "qty": 2
              },
              {
                "name": "ELDORADO",
                "qty": 1
              },
              {
                "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
                "qty": 1
              },
              {
                "name": "COSTELA ESPECIAL",
                "qty": 1
              },
              {
                "name": "BORDA DE MUSSARELA",
                "qty": 1
              },
              {
                "name": "BORDA DE CHOCOLATE",
                "qty": 1
              },
              {
                "name": "CHEDDAR",
                "qty": 1
              },
              {
                "name": "CAIPIRA",
                "qty": 1
              },
              {
                "name": "FILÉ",
                "qty": 1
              },
              {
                "name": "BORDA DE REQUEIJÃO",
                "qty": 1
              },
              {
                "name": "LOMBO",
                "qty": 1
              },
              {
                "name": "BORDA DE MUSSARELA E PRESUNTO",
                "qty": 1
              },
              {
                "name": "BAURU",
                "qty": 1
              }
            ],
            "principaisTotal": 348,
            "saboresTotal": 354
          },
          "vila": {
            "principais": [
              {
                "name": "GRANDE (35 CM)",
                "qty": 57
              },
              {
                "name": "Media",
                "qty": 20
              },
              {
                "name": "COCA COLA - 2L",
                "qty": 15
              },
              {
                "name": "Coca-Cola 1 litro",
                "qty": 8
              },
              {
                "name": "REFRIGERANTE TUCHAUA - 2L",
                "qty": 8
              },
              {
                "name": "GUARANÁ ANTARTICA 1 LITRO",
                "qty": 6
              },
              {
                "name": "Guaraná Amazônia",
                "qty": 4
              },
              {
                "name": "Coca-cola Zero 1L",
                "qty": 3
              },
              {
                "name": "coca cola zero 2L",
                "qty": 2
              }
            ],
            "sabores": [
              {
                "name": "PAULISTA",
                "qty": 17
              },
              {
                "name": "FRANGO C/ CATUPIRY",
                "qty": 10
              },
              {
                "name": "CALABRESA C/ CATUPIRY",
                "qty": 7
              },
              {
                "name": "PORTUGUESA",
                "qty": 6
              },
              {
                "name": "BORDA DE CHEDDAR",
                "qty": 6
              },
              {
                "name": "MISTA",
                "qty": 4
              },
              {
                "name": "MODA DA CASA",
                "qty": 4
              },
              {
                "name": "CALABRESA BARBEBUE",
                "qty": 4
              },
              {
                "name": "CALAFRANGO",
                "qty": 4
              },
              {
                "name": "FRANGO",
                "qty": 3
              },
              {
                "name": "CALACHEDDAR",
                "qty": 3
              },
              {
                "name": "3 QUEIJOS",
                "qty": 3
              },
              {
                "name": "CAMARÃO",
                "qty": 3
              },
              {
                "name": "CALABRESA ESPECIAL",
                "qty": 3
              },
              {
                "name": "BAURU",
                "qty": 3
              },
              {
                "name": "BORDA DE CATUPIRY",
                "qty": 3
              },
              {
                "name": "4 QUEIJOS",
                "qty": 3
              },
              {
                "name": "HOLANDESA",
                "qty": 2
              },
              {
                "name": "BACON II",
                "qty": 2
              },
              {
                "name": "CAMARÃO / CATUPIRY",
                "qty": 2
              },
              {
                "name": "FRANGO COMPLETA",
                "qty": 2
              },
              {
                "name": "JARDINEIRA",
                "qty": 2
              },
              {
                "name": "CALABRESA PHILADELPHIA",
                "qty": 1
              },
              {
                "name": "BACON",
                "qty": 1
              },
              {
                "name": "BORDA DE CREAM CHEESE",
                "qty": 1
              },
              {
                "name": "MUSSARELA",
                "qty": 1
              },
              {
                "name": "MARGUERITA",
                "qty": 1
              },
              {
                "name": "2 QUEIJOS",
                "qty": 1
              },
              {
                "name": "ROMANESCA",
                "qty": 1
              },
              {
                "name": "COSTELA",
                "qty": 1
              },
              {
                "name": "BRIGADEIRO",
                "qty": 1
              },
              {
                "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
                "qty": 1
              },
              {
                "name": "CALAMAR",
                "qty": 1
              },
              {
                "name": "FRANGO PHILADELPHIA",
                "qty": 1
              },
              {
                "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
                "qty": 1
              },
              {
                "name": "CAIPIRA",
                "qty": 1
              },
              {
                "name": "Pizza de mussarela+Pizza de calabresa",
                "qty": 1
              },
              {
                "name": "5 QUEIJOS",
                "qty": 1
              },
              {
                "name": "COSTELA ESPECIAL",
                "qty": 1
              },
              {
                "name": "PERU",
                "qty": 1
              },
              {
                "name": "BORDA DE QUEIJO COM PRESUNTO",
                "qty": 1
              },
              {
                "name": "MINEIRA",
                "qty": 1
              },
              {
                "name": "LEÃO",
                "qty": 1
              }
            ],
            "principaisTotal": 123,
            "saboresTotal": 117
          }
        }
      },
      {
        "id": "2026-10",
        "asOf": "2026-10-31",
        "period": [
          "2026-10-01",
          "2026-10-31"
        ],
        "periodLabel": "October 2026",
        "source": "Anota Relatório de Itens → Principais + Adicionais (Fabiana Barcarena + Adan Vila); duplicate names merged",
        "combined": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "bar": 957,
              "vila": 377,
              "qty": 1334,
              "category": "size"
            },
            {
              "name": "MÉDIA (30 CM)",
              "bar": 312,
              "vila": 117,
              "qty": 429,
              "category": "size"
            },
            {
              "name": "Coca Cola 1L",
              "bar": 144,
              "vila": 0,
              "qty": 144,
              "category": "soda"
            },
            {
              "name": "Tuchaua 2L",
              "bar": 107,
              "vila": 0,
              "qty": 107,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "bar": 84,
              "vila": 0,
              "qty": 84,
              "category": "soda"
            },
            {
              "name": "PIZZA FECHADA",
              "bar": 56,
              "vila": 13,
              "qty": 69,
              "category": "calzone"
            },
            {
              "name": "Coca cola 2L",
              "bar": 68,
              "vila": 0,
              "qty": 68,
              "category": "soda"
            },
            {
              "name": "Coca-Cola 1 litro",
              "bar": 0,
              "vila": 62,
              "qty": 62,
              "category": "soda"
            },
            {
              "name": "Coca-cola Zero 1L",
              "bar": 47,
              "vila": 12,
              "qty": 59,
              "category": "soda"
            },
            {
              "name": "Tuchaua 1lt",
              "bar": 52,
              "vila": 0,
              "qty": 52,
              "category": "soda"
            },
            {
              "name": "Pepsi 2L",
              "bar": 44,
              "vila": 7,
              "qty": 51,
              "category": "soda"
            },
            {
              "name": "Coca Cola 2L zero",
              "bar": 48,
              "vila": 0,
              "qty": 48,
              "category": "soda"
            },
            {
              "name": "Guaraná da Amazônia",
              "bar": 38,
              "vila": 0,
              "qty": 38,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "bar": 0,
              "vila": 37,
              "qty": 37,
              "category": "soda"
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "bar": 0,
              "vila": 34,
              "qty": 34,
              "category": "soda"
            },
            {
              "name": "COCA COLA - 2L",
              "bar": 0,
              "vila": 30,
              "qty": 30,
              "category": "soda"
            },
            {
              "name": "coca cola zero 2L",
              "bar": 0,
              "vila": 19,
              "qty": 19,
              "category": "soda"
            },
            {
              "name": "TUCHAUA DE 1 LITRO",
              "bar": 0,
              "vila": 13,
              "qty": 13,
              "category": "soda"
            },
            {
              "name": "Guaraná Antártica 2L",
              "bar": 12,
              "vila": 0,
              "qty": 12,
              "category": "soda"
            },
            {
              "name": "Guaraná Amazônia",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "soda"
            },
            {
              "name": "BARÉ 2lt",
              "bar": 7,
              "vila": 0,
              "qty": 7,
              "category": "soda"
            },
            {
              "name": "Bare 2L",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "soda"
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "bar": 255,
              "vila": 117,
              "qty": 372,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "bar": 181,
              "vila": 58,
              "qty": 239,
              "category": "pizza"
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "bar": 121,
              "vila": 21,
              "qty": 142,
              "category": "pizza"
            },
            {
              "name": "FRANGO",
              "bar": 70,
              "vila": 39,
              "qty": 109,
              "category": "pizza"
            },
            {
              "name": "4 QUEIJOS",
              "bar": 77,
              "vila": 17,
              "qty": 94,
              "category": "pizza"
            },
            {
              "name": "MODA DA CASA",
              "bar": 57,
              "vila": 28,
              "qty": 85,
              "category": "pizza"
            },
            {
              "name": "CALAFRANGO",
              "bar": 67,
              "vila": 17,
              "qty": 84,
              "category": "calzone"
            },
            {
              "name": "PORTUGUESA",
              "bar": 43,
              "vila": 41,
              "qty": 84,
              "category": "pizza"
            },
            {
              "name": "MISTA",
              "bar": 53,
              "vila": 30,
              "qty": 83,
              "category": "pizza"
            },
            {
              "name": "SEM BORDA",
              "bar": 80,
              "vila": 0,
              "qty": 80,
              "category": "borda"
            },
            {
              "name": "MUSSARELA",
              "bar": 62,
              "vila": 8,
              "qty": 70,
              "category": "pizza"
            },
            {
              "name": "BACON II",
              "bar": 47,
              "vila": 11,
              "qty": 58,
              "category": "pizza"
            },
            {
              "name": "CALACHEDDAR",
              "bar": 54,
              "vila": 3,
              "qty": 57,
              "category": "calzone"
            },
            {
              "name": "2 QUEIJOS",
              "bar": 45,
              "vila": 10,
              "qty": 55,
              "category": "pizza"
            },
            {
              "name": "COSTELA",
              "bar": 28,
              "vila": 22,
              "qty": 50,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "bar": 36,
              "vila": 13,
              "qty": 49,
              "category": "borda"
            },
            {
              "name": "CAMARÃO",
              "bar": 23,
              "vila": 24,
              "qty": 47,
              "category": "pizza"
            },
            {
              "name": "BAURU",
              "bar": 30,
              "vila": 14,
              "qty": 44,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBECUE",
              "bar": 43,
              "vila": 0,
              "qty": 43,
              "category": "pizza"
            },
            {
              "name": "3 QUEIJOS",
              "bar": 30,
              "vila": 13,
              "qty": 43,
              "category": "pizza"
            },
            {
              "name": "ROMANESCA",
              "bar": 33,
              "vila": 9,
              "qty": 42,
              "category": "pizza"
            },
            {
              "name": "JARDINEIRA",
              "bar": 31,
              "vila": 10,
              "qty": 41,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CHEDDAR",
              "bar": 28,
              "vila": 13,
              "qty": 41,
              "category": "borda"
            },
            {
              "name": "FILÉ",
              "bar": 29,
              "vila": 10,
              "qty": 39,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADPHIA",
              "bar": 37,
              "vila": 0,
              "qty": 37,
              "category": "pizza"
            },
            {
              "name": "HOLANDESA",
              "bar": 25,
              "vila": 9,
              "qty": 34,
              "category": "pizza"
            },
            {
              "name": "BACON (sem milho)",
              "bar": 32,
              "vila": 0,
              "qty": 32,
              "category": "pizza"
            },
            {
              "name": "FRANGO COM CHEDDAR",
              "bar": 27,
              "vila": 4,
              "qty": 31,
              "category": "pizza"
            },
            {
              "name": "CALABRESA ESPECIAL",
              "bar": 23,
              "vila": 8,
              "qty": 31,
              "category": "pizza"
            },
            {
              "name": "COSTELA ESPECIAL",
              "bar": 19,
              "vila": 11,
              "qty": 30,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "bar": 19,
              "vila": 10,
              "qty": 29,
              "category": "borda"
            },
            {
              "name": "FRANGO BARBECUE",
              "bar": 25,
              "vila": 3,
              "qty": 28,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "bar": 25,
              "vila": 0,
              "qty": 25,
              "category": "pizza"
            },
            {
              "name": "AMERICANA",
              "bar": 14,
              "vila": 10,
              "qty": 24,
              "category": "pizza"
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "bar": 23,
              "vila": 0,
              "qty": 23,
              "category": "pizza"
            },
            {
              "name": "CALAMAR",
              "bar": 20,
              "vila": 3,
              "qty": 23,
              "category": "calzone"
            },
            {
              "name": "PARISIENSE",
              "bar": 17,
              "vila": 4,
              "qty": 21,
              "category": "pizza"
            },
            {
              "name": "CALAMUSSA",
              "bar": 18,
              "vila": 2,
              "qty": 20,
              "category": "calzone"
            },
            {
              "name": "BRIGADEIRO",
              "bar": 13,
              "vila": 6,
              "qty": 19,
              "category": "sweet"
            },
            {
              "name": "LOBO",
              "bar": 14,
              "vila": 3,
              "qty": 17,
              "category": "pizza"
            },
            {
              "name": "VENEZA",
              "bar": 7,
              "vila": 10,
              "qty": 17,
              "category": "pizza"
            },
            {
              "name": "CE QUE SABE",
              "bar": 16,
              "vila": 0,
              "qty": 16,
              "category": "pizza"
            },
            {
              "name": "BURUKUTU",
              "bar": 10,
              "vila": 6,
              "qty": 16,
              "category": "pizza"
            },
            {
              "name": "CAIPIRA",
              "bar": 9,
              "vila": 5,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "bar": 13,
              "vila": 0,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "FRANGO CATUPIRY",
              "bar": 13,
              "vila": 0,
              "qty": 13,
              "category": "pizza"
            },
            {
              "name": "BORDA DE MUSSARELA",
              "bar": 10,
              "vila": 3,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "5 QUEIJOS",
              "bar": 11,
              "vila": 1,
              "qty": 12,
              "category": "pizza"
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "bar": 0,
              "vila": 12,
              "qty": 12,
              "category": "pizza"
            },
            {
              "name": "BORDA REQUEIJÃO",
              "bar": 11,
              "vila": 0,
              "qty": 11,
              "category": "borda"
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "NORDESTINA",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "SALAME",
              "bar": 9,
              "vila": 1,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "LEÃO",
              "bar": 6,
              "vila": 4,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CATUPIRY",
              "bar": 0,
              "vila": 10,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "PRESUNTO",
              "bar": 3,
              "vila": 6,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "BORDA DE DOIS QUEIJOS",
              "bar": 7,
              "vila": 1,
              "qty": 8,
              "category": "borda"
            },
            {
              "name": "CAIÇARA",
              "bar": 5,
              "vila": 3,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBEBUE",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CÊ QUE SABE",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CROCANTE",
              "bar": 7,
              "vila": 0,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CHEDDAR",
              "bar": 6,
              "vila": 1,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "PEPPERONI",
              "bar": 4,
              "vila": 3,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "BACON",
              "bar": 0,
              "vila": 7,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "PERÚ",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "LOMBO",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "DISQUETE",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "sweet"
            },
            {
              "name": "PAÇOCA",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "sweet"
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "bar": 0,
              "vila": 6,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "PRESTÍGIO",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "sweet"
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "borda"
            },
            {
              "name": "CHOCOMUSSA",
              "bar": 2,
              "vila": 3,
              "qty": 5,
              "category": "sweet"
            },
            {
              "name": "JAMAICANA",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "Baiana",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "ROMEU E JULIETA",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "sweet"
            },
            {
              "name": "STROGONOFF",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "MEXICANA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "BORDA DE MUSARELA E PRESUNTO",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "CHOCOBIZ",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "sweet"
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "bar": 2,
              "vila": 1,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "NAPOLITANA",
              "bar": 2,
              "vila": 1,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "SEI LÁ",
              "bar": 1,
              "vila": 2,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "FRANGO COMPLETA",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "PODE SER",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "PERUANA",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "MILHO",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "CALACATU",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "calzone"
            },
            {
              "name": "TANTO FAZ",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "borda"
            },
            {
              "name": "SICILIANA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "MARGUERITA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PRESUNTO CATUPIRY",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FRANGO CHEDDAR",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BIJUPIRA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "ELDORADO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "PERU",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "ITALIANA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            }
          ]
        },
        "byCategory": {
          "size": [
            {
              "name": "GRANDE (35 CM)",
              "bar": 957,
              "vila": 377,
              "qty": 1334,
              "category": "size"
            },
            {
              "name": "MÉDIA (30 CM)",
              "bar": 312,
              "vila": 117,
              "qty": 429,
              "category": "size"
            }
          ],
          "soda": [
            {
              "name": "Coca Cola 1L",
              "bar": 144,
              "vila": 0,
              "qty": 144,
              "category": "soda"
            },
            {
              "name": "Tuchaua 2L",
              "bar": 107,
              "vila": 0,
              "qty": 107,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "bar": 84,
              "vila": 0,
              "qty": 84,
              "category": "soda"
            },
            {
              "name": "Coca cola 2L",
              "bar": 68,
              "vila": 0,
              "qty": 68,
              "category": "soda"
            },
            {
              "name": "Coca-Cola 1 litro",
              "bar": 0,
              "vila": 62,
              "qty": 62,
              "category": "soda"
            },
            {
              "name": "Coca-cola Zero 1L",
              "bar": 47,
              "vila": 12,
              "qty": 59,
              "category": "soda"
            },
            {
              "name": "Tuchaua 1lt",
              "bar": 52,
              "vila": 0,
              "qty": 52,
              "category": "soda"
            },
            {
              "name": "Pepsi 2L",
              "bar": 44,
              "vila": 7,
              "qty": 51,
              "category": "soda"
            },
            {
              "name": "Coca Cola 2L zero",
              "bar": 48,
              "vila": 0,
              "qty": 48,
              "category": "soda"
            },
            {
              "name": "Guaraná da Amazônia",
              "bar": 38,
              "vila": 0,
              "qty": 38,
              "category": "soda"
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "bar": 0,
              "vila": 37,
              "qty": 37,
              "category": "soda"
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "bar": 0,
              "vila": 34,
              "qty": 34,
              "category": "soda"
            },
            {
              "name": "COCA COLA - 2L",
              "bar": 0,
              "vila": 30,
              "qty": 30,
              "category": "soda"
            },
            {
              "name": "coca cola zero 2L",
              "bar": 0,
              "vila": 19,
              "qty": 19,
              "category": "soda"
            },
            {
              "name": "TUCHAUA DE 1 LITRO",
              "bar": 0,
              "vila": 13,
              "qty": 13,
              "category": "soda"
            },
            {
              "name": "Guaraná Antártica 2L",
              "bar": 12,
              "vila": 0,
              "qty": 12,
              "category": "soda"
            },
            {
              "name": "Guaraná Amazônia",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "soda"
            },
            {
              "name": "BARÉ 2lt",
              "bar": 7,
              "vila": 0,
              "qty": 7,
              "category": "soda"
            },
            {
              "name": "Bare 2L",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "soda"
            }
          ],
          "pizza": [
            {
              "name": "PAULISTA",
              "bar": 255,
              "vila": 117,
              "qty": 372,
              "category": "pizza"
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "bar": 181,
              "vila": 58,
              "qty": 239,
              "category": "pizza"
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "bar": 121,
              "vila": 21,
              "qty": 142,
              "category": "pizza"
            },
            {
              "name": "FRANGO",
              "bar": 70,
              "vila": 39,
              "qty": 109,
              "category": "pizza"
            },
            {
              "name": "4 QUEIJOS",
              "bar": 77,
              "vila": 17,
              "qty": 94,
              "category": "pizza"
            },
            {
              "name": "MODA DA CASA",
              "bar": 57,
              "vila": 28,
              "qty": 85,
              "category": "pizza"
            },
            {
              "name": "PORTUGUESA",
              "bar": 43,
              "vila": 41,
              "qty": 84,
              "category": "pizza"
            },
            {
              "name": "MISTA",
              "bar": 53,
              "vila": 30,
              "qty": 83,
              "category": "pizza"
            },
            {
              "name": "MUSSARELA",
              "bar": 62,
              "vila": 8,
              "qty": 70,
              "category": "pizza"
            },
            {
              "name": "BACON II",
              "bar": 47,
              "vila": 11,
              "qty": 58,
              "category": "pizza"
            },
            {
              "name": "2 QUEIJOS",
              "bar": 45,
              "vila": 10,
              "qty": 55,
              "category": "pizza"
            },
            {
              "name": "COSTELA",
              "bar": 28,
              "vila": 22,
              "qty": 50,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO",
              "bar": 23,
              "vila": 24,
              "qty": 47,
              "category": "pizza"
            },
            {
              "name": "BAURU",
              "bar": 30,
              "vila": 14,
              "qty": 44,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBECUE",
              "bar": 43,
              "vila": 0,
              "qty": 43,
              "category": "pizza"
            },
            {
              "name": "3 QUEIJOS",
              "bar": 30,
              "vila": 13,
              "qty": 43,
              "category": "pizza"
            },
            {
              "name": "ROMANESCA",
              "bar": 33,
              "vila": 9,
              "qty": 42,
              "category": "pizza"
            },
            {
              "name": "JARDINEIRA",
              "bar": 31,
              "vila": 10,
              "qty": 41,
              "category": "pizza"
            },
            {
              "name": "FILÉ",
              "bar": 29,
              "vila": 10,
              "qty": 39,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADPHIA",
              "bar": 37,
              "vila": 0,
              "qty": 37,
              "category": "pizza"
            },
            {
              "name": "HOLANDESA",
              "bar": 25,
              "vila": 9,
              "qty": 34,
              "category": "pizza"
            },
            {
              "name": "BACON (sem milho)",
              "bar": 32,
              "vila": 0,
              "qty": 32,
              "category": "pizza"
            },
            {
              "name": "FRANGO COM CHEDDAR",
              "bar": 27,
              "vila": 4,
              "qty": 31,
              "category": "pizza"
            },
            {
              "name": "CALABRESA ESPECIAL",
              "bar": 23,
              "vila": 8,
              "qty": 31,
              "category": "pizza"
            },
            {
              "name": "COSTELA ESPECIAL",
              "bar": 19,
              "vila": 11,
              "qty": 30,
              "category": "pizza"
            },
            {
              "name": "FRANGO BARBECUE",
              "bar": 25,
              "vila": 3,
              "qty": 28,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "bar": 25,
              "vila": 0,
              "qty": 25,
              "category": "pizza"
            },
            {
              "name": "AMERICANA",
              "bar": 14,
              "vila": 10,
              "qty": 24,
              "category": "pizza"
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "bar": 23,
              "vila": 0,
              "qty": 23,
              "category": "pizza"
            },
            {
              "name": "PARISIENSE",
              "bar": 17,
              "vila": 4,
              "qty": 21,
              "category": "pizza"
            },
            {
              "name": "LOBO",
              "bar": 14,
              "vila": 3,
              "qty": 17,
              "category": "pizza"
            },
            {
              "name": "VENEZA",
              "bar": 7,
              "vila": 10,
              "qty": 17,
              "category": "pizza"
            },
            {
              "name": "CE QUE SABE",
              "bar": 16,
              "vila": 0,
              "qty": 16,
              "category": "pizza"
            },
            {
              "name": "BURUKUTU",
              "bar": 10,
              "vila": 6,
              "qty": 16,
              "category": "pizza"
            },
            {
              "name": "CAIPIRA",
              "bar": 9,
              "vila": 5,
              "qty": 14,
              "category": "pizza"
            },
            {
              "name": "FRANGO CATUPIRY",
              "bar": 13,
              "vila": 0,
              "qty": 13,
              "category": "pizza"
            },
            {
              "name": "5 QUEIJOS",
              "bar": 11,
              "vila": 1,
              "qty": 12,
              "category": "pizza"
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "bar": 0,
              "vila": 12,
              "qty": 12,
              "category": "pizza"
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "NORDESTINA",
              "bar": 0,
              "vila": 11,
              "qty": 11,
              "category": "pizza"
            },
            {
              "name": "SALAME",
              "bar": 9,
              "vila": 1,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "LEÃO",
              "bar": 6,
              "vila": 4,
              "qty": 10,
              "category": "pizza"
            },
            {
              "name": "PRESUNTO",
              "bar": 3,
              "vila": 6,
              "qty": 9,
              "category": "pizza"
            },
            {
              "name": "CAIÇARA",
              "bar": 5,
              "vila": 3,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CALABRESA BARBEBUE",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CÊ QUE SABE",
              "bar": 0,
              "vila": 8,
              "qty": 8,
              "category": "pizza"
            },
            {
              "name": "CROCANTE",
              "bar": 7,
              "vila": 0,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "CHEDDAR",
              "bar": 6,
              "vila": 1,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "PEPPERONI",
              "bar": 4,
              "vila": 3,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "BACON",
              "bar": 0,
              "vila": 7,
              "qty": 7,
              "category": "pizza"
            },
            {
              "name": "PERÚ",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "LOMBO",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "bar": 0,
              "vila": 6,
              "qty": 6,
              "category": "pizza"
            },
            {
              "name": "JAMAICANA",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "Baiana",
              "bar": 0,
              "vila": 5,
              "qty": 5,
              "category": "pizza"
            },
            {
              "name": "STROGONOFF",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "pizza"
            },
            {
              "name": "MEXICANA",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "NAPOLITANA",
              "bar": 2,
              "vila": 1,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "SEI LÁ",
              "bar": 1,
              "vila": 2,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "FRANGO COMPLETA",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "PODE SER",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "pizza"
            },
            {
              "name": "PERUANA",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "MILHO",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "TANTO FAZ",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "SICILIANA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "MARGUERITA",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "pizza"
            },
            {
              "name": "PRESUNTO CATUPIRY",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "FRANGO CHEDDAR",
              "bar": 1,
              "vila": 0,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "BIJUPIRA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "ELDORADO",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "PERU",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            },
            {
              "name": "ITALIANA",
              "bar": 0,
              "vila": 1,
              "qty": 1,
              "category": "pizza"
            }
          ],
          "borda": [
            {
              "name": "SEM BORDA",
              "bar": 80,
              "vila": 0,
              "qty": 80,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "bar": 36,
              "vila": 13,
              "qty": 49,
              "category": "borda"
            },
            {
              "name": "BORDA DE CHEDDAR",
              "bar": 28,
              "vila": 13,
              "qty": 41,
              "category": "borda"
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "bar": 19,
              "vila": 10,
              "qty": 29,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "bar": 13,
              "vila": 0,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "BORDA DE MUSSARELA",
              "bar": 10,
              "vila": 3,
              "qty": 13,
              "category": "borda"
            },
            {
              "name": "BORDA REQUEIJÃO",
              "bar": 11,
              "vila": 0,
              "qty": 11,
              "category": "borda"
            },
            {
              "name": "BORDA DE CATUPIRY",
              "bar": 0,
              "vila": 10,
              "qty": 10,
              "category": "borda"
            },
            {
              "name": "BORDA DE DOIS QUEIJOS",
              "bar": 7,
              "vila": 1,
              "qty": 8,
              "category": "borda"
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "borda"
            },
            {
              "name": "BORDA DE MUSARELA E PRESUNTO",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "bar": 2,
              "vila": 1,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "bar": 0,
              "vila": 3,
              "qty": 3,
              "category": "borda"
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "bar": 0,
              "vila": 2,
              "qty": 2,
              "category": "borda"
            }
          ],
          "calzone": [
            {
              "name": "CALAFRANGO",
              "bar": 67,
              "vila": 17,
              "qty": 84,
              "category": "calzone"
            },
            {
              "name": "PIZZA FECHADA",
              "bar": 56,
              "vila": 13,
              "qty": 69,
              "category": "calzone"
            },
            {
              "name": "CALACHEDDAR",
              "bar": 54,
              "vila": 3,
              "qty": 57,
              "category": "calzone"
            },
            {
              "name": "CALAMAR",
              "bar": 20,
              "vila": 3,
              "qty": 23,
              "category": "calzone"
            },
            {
              "name": "CALAMUSSA",
              "bar": 18,
              "vila": 2,
              "qty": 20,
              "category": "calzone"
            },
            {
              "name": "CALACATU",
              "bar": 2,
              "vila": 0,
              "qty": 2,
              "category": "calzone"
            }
          ],
          "sweet": [
            {
              "name": "BRIGADEIRO",
              "bar": 13,
              "vila": 6,
              "qty": 19,
              "category": "sweet"
            },
            {
              "name": "DISQUETE",
              "bar": 6,
              "vila": 0,
              "qty": 6,
              "category": "sweet"
            },
            {
              "name": "PAÇOCA",
              "bar": 5,
              "vila": 1,
              "qty": 6,
              "category": "sweet"
            },
            {
              "name": "PRESTÍGIO",
              "bar": 5,
              "vila": 0,
              "qty": 5,
              "category": "sweet"
            },
            {
              "name": "CHOCOMUSSA",
              "bar": 2,
              "vila": 3,
              "qty": 5,
              "category": "sweet"
            },
            {
              "name": "ROMEU E JULIETA",
              "bar": 0,
              "vila": 4,
              "qty": 4,
              "category": "sweet"
            },
            {
              "name": "CHOCOBIZ",
              "bar": 3,
              "vila": 0,
              "qty": 3,
              "category": "sweet"
            }
          ],
          "other": []
        },
        "stores": {
          "bar": {
            "principais": [
              {
                "name": "GRANDE (35 CM)",
                "qty": 957
              },
              {
                "name": "Media",
                "qty": 312
              },
              {
                "name": "Coca Cola 1L",
                "qty": 144
              },
              {
                "name": "Tuchaua 2L",
                "qty": 107
              },
              {
                "name": "GUARANÁ ANTÁRTICA 1L",
                "qty": 84
              },
              {
                "name": "Coca cola 2L",
                "qty": 68
              },
              {
                "name": "PIZZA FECHADA",
                "qty": 56
              },
              {
                "name": "Tuchaua 1lt",
                "qty": 52
              },
              {
                "name": "Coca Cola 2L zero",
                "qty": 48
              },
              {
                "name": "Coca Cola Zero 1L",
                "qty": 47
              },
              {
                "name": "Pepsi 2L",
                "qty": 44
              },
              {
                "name": "Guaraná da Amazônia",
                "qty": 38
              },
              {
                "name": "Guaraná Antártica 2L",
                "qty": 12
              },
              {
                "name": "BARÉ 2lt",
                "qty": 7
              }
            ],
            "sabores": [
              {
                "name": "PAULISTA",
                "qty": 255
              },
              {
                "name": "FRANGO C/ CATUPIRY",
                "qty": 181
              },
              {
                "name": "CALABRESA C/ CATUPIRY",
                "qty": 121
              },
              {
                "name": "SEM BORDA",
                "qty": 80
              },
              {
                "name": "4 QUEIJOS",
                "qty": 77
              },
              {
                "name": "FRANGO",
                "qty": 70
              },
              {
                "name": "CALAFRANGO",
                "qty": 67
              },
              {
                "name": "MUSSARELA",
                "qty": 62
              },
              {
                "name": "MODA DA CASA",
                "qty": 57
              },
              {
                "name": "CALACHEDDAR",
                "qty": 54
              },
              {
                "name": "MISTA",
                "qty": 53
              },
              {
                "name": "BACON II",
                "qty": 47
              },
              {
                "name": "2 Queijos",
                "qty": 45
              },
              {
                "name": "PORTUGUESA",
                "qty": 43
              },
              {
                "name": "CALABRESA BARBECUE",
                "qty": 43
              },
              {
                "name": "FRANGO PHILADPHIA",
                "qty": 37
              },
              {
                "name": "BORDA DE CREAM CHEESE",
                "qty": 36
              },
              {
                "name": "ROMANESCA",
                "qty": 33
              },
              {
                "name": "BACON (sem milho)",
                "qty": 32
              },
              {
                "name": "JARDINEIRA",
                "qty": 31
              },
              {
                "name": "3 QUEIJOS",
                "qty": 30
              },
              {
                "name": "BAURU",
                "qty": 30
              },
              {
                "name": "FILÉ",
                "qty": 29
              },
              {
                "name": "BORDA DE CHEDDAR",
                "qty": 28
              },
              {
                "name": "COSTELA",
                "qty": 28
              },
              {
                "name": "FRANGO C/ CHEDDAR",
                "qty": 27
              },
              {
                "name": "FRANGO BARBECUE",
                "qty": 25
              },
              {
                "name": "HOLANDESA",
                "qty": 25
              },
              {
                "name": "CAMARÃO C/ CATUPIRY",
                "qty": 25
              },
              {
                "name": "CALABRESA ESPECIAL",
                "qty": 23
              },
              {
                "name": "CAMARÃO",
                "qty": 23
              },
              {
                "name": "Pizza de calabresa+ Pizza de Mussarela",
                "qty": 23
              },
              {
                "name": "CALAMAR",
                "qty": 20
              },
              {
                "name": "COSTELA ESPECIAL",
                "qty": 19
              },
              {
                "name": "BORDA DE CHOCOLATE",
                "qty": 19
              },
              {
                "name": "CALAMUSSA",
                "qty": 18
              },
              {
                "name": "PARISIENSE",
                "qty": 17
              },
              {
                "name": "CE QUE SABE",
                "qty": 16
              },
              {
                "name": "LOBO",
                "qty": 14
              },
              {
                "name": "AMERICANA",
                "qty": 14
              },
              {
                "name": "BORDA DE CREAM COM ALHO FRITO",
                "qty": 13
              },
              {
                "name": "FRANGO CATUPIRY",
                "qty": 13
              },
              {
                "name": "BRIGADEIRO",
                "qty": 13
              },
              {
                "name": "5 QUEIJOS",
                "qty": 11
              },
              {
                "name": "BORDA REQUEIJÃO",
                "qty": 11
              },
              {
                "name": "BURUKUTU",
                "qty": 10
              },
              {
                "name": "BORDA DE MUSSARELA",
                "qty": 10
              },
              {
                "name": "SALAME",
                "qty": 9
              },
              {
                "name": "CAIPIRA",
                "qty": 9
              },
              {
                "name": "VENEZA",
                "qty": 7
              },
              {
                "name": "BORDA DE DOIS QUEIJOS",
                "qty": 7
              },
              {
                "name": "CROCANTE",
                "qty": 7
              },
              {
                "name": "LEÃO",
                "qty": 6
              },
              {
                "name": "CHEDDAR",
                "qty": 6
              },
              {
                "name": "PERÚ",
                "qty": 6
              },
              {
                "name": "LOMBO",
                "qty": 6
              },
              {
                "name": "DISQUETE",
                "qty": 6
              },
              {
                "name": "PAÇOCA",
                "qty": 5
              },
              {
                "name": "PRESTÍGIO",
                "qty": 5
              },
              {
                "name": "BORDA DE REQUEIJÃO",
                "qty": 5
              },
              {
                "name": "CAIÇARA",
                "qty": 5
              },
              {
                "name": "PEPPERONI",
                "qty": 4
              },
              {
                "name": "PRESUNTO",
                "qty": 3
              },
              {
                "name": "MEXICANA",
                "qty": 3
              },
              {
                "name": "BORDA DE MUSARELA E PRESUNTO",
                "qty": 3
              },
              {
                "name": "CHOCOBIZ",
                "qty": 3
              },
              {
                "name": "CHOCOMUSSA",
                "qty": 2
              },
              {
                "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
                "qty": 2
              },
              {
                "name": "PERUANA",
                "qty": 2
              },
              {
                "name": "MILHO",
                "qty": 2
              },
              {
                "name": "CALACATU",
                "qty": 2
              },
              {
                "name": "NAPOLITANA",
                "qty": 2
              },
              {
                "name": "SEI LÁ",
                "qty": 1
              },
              {
                "name": "PRESUNTO CATUPIRY",
                "qty": 1
              },
              {
                "name": "FRANGO CHEDDAR",
                "qty": 1
              }
            ],
            "principaisTotal": 1976,
            "saboresTotal": 2078
          },
          "vila": {
            "principais": [
              {
                "name": "GRANDE (35 CM)",
                "qty": 377
              },
              {
                "name": "Media",
                "qty": 117
              },
              {
                "name": "Coca-Cola 1 litro",
                "qty": 62
              },
              {
                "name": "GUARANÁ ANTARTICA 1 LITRO",
                "qty": 37
              },
              {
                "name": "REFRIGERANTE TUCHAUA - 2L",
                "qty": 34
              },
              {
                "name": "COCA COLA - 2L",
                "qty": 30
              },
              {
                "name": "coca cola zero 2L",
                "qty": 19
              },
              {
                "name": "TUCHAUA DE 1 LITRO",
                "qty": 13
              },
              {
                "name": "PIZZA FECHADA",
                "qty": 13
              },
              {
                "name": "Coca-cola Zero 1L",
                "qty": 12
              },
              {
                "name": "Guaraná Amazônia",
                "qty": 11
              },
              {
                "name": "Pepsi 2L",
                "qty": 7
              },
              {
                "name": "Bare 2L",
                "qty": 5
              }
            ],
            "sabores": [
              {
                "name": "PAULISTA",
                "qty": 117
              },
              {
                "name": "FRANGO C/ CATUPIRY",
                "qty": 58
              },
              {
                "name": "PORTUGUESA",
                "qty": 41
              },
              {
                "name": "FRANGO",
                "qty": 39
              },
              {
                "name": "MISTA",
                "qty": 30
              },
              {
                "name": "MODA DA CASA",
                "qty": 28
              },
              {
                "name": "CAMARÃO",
                "qty": 24
              },
              {
                "name": "COSTELA",
                "qty": 22
              },
              {
                "name": "CALABRESA C/ CATUPIRY",
                "qty": 21
              },
              {
                "name": "CALAFRANGO",
                "qty": 17
              },
              {
                "name": "4 QUEIJOS",
                "qty": 17
              },
              {
                "name": "BAURU",
                "qty": 14
              },
              {
                "name": "3 QUEIJOS",
                "qty": 13
              },
              {
                "name": "BORDA DE CHEDDAR",
                "qty": 13
              },
              {
                "name": "BORDA DE CREAM CHEESE",
                "qty": 13
              },
              {
                "name": "CALABRESA PHILADELPHIA",
                "qty": 12
              },
              {
                "name": "BACON II",
                "qty": 11
              },
              {
                "name": "FRANGO PHILADELPHIA",
                "qty": 11
              },
              {
                "name": "NORDESTINA",
                "qty": 11
              },
              {
                "name": "COSTELA ESPECIAL",
                "qty": 11
              },
              {
                "name": "BORDA DE CATUPIRY",
                "qty": 10
              },
              {
                "name": "BORDA DE CHOCOLATE",
                "qty": 10
              },
              {
                "name": "JARDINEIRA",
                "qty": 10
              },
              {
                "name": "VENEZA",
                "qty": 10
              },
              {
                "name": "AMERICANA",
                "qty": 10
              },
              {
                "name": "FILÉ",
                "qty": 10
              },
              {
                "name": "2 QUEIJOS",
                "qty": 10
              },
              {
                "name": "HOLANDESA",
                "qty": 9
              },
              {
                "name": "ROMANESCA",
                "qty": 9
              },
              {
                "name": "CALABRESA BARBEBUE",
                "qty": 8
              },
              {
                "name": "Pizza de mussarela+Pizza de calabresa",
                "qty": 8
              },
              {
                "name": "CÊ QUE SABE",
                "qty": 8
              },
              {
                "name": "MUSSARELA",
                "qty": 8
              },
              {
                "name": "CALABRESA ESPECIAL",
                "qty": 8
              },
              {
                "name": "BACON",
                "qty": 7
              },
              {
                "name": "BRIGADEIRO",
                "qty": 6
              },
              {
                "name": "BURUKUTU",
                "qty": 6
              },
              {
                "name": "PRESUNTO",
                "qty": 6
              },
              {
                "name": "CAMARÃO / CATUPIRY",
                "qty": 6
              },
              {
                "name": "CAIPIRA",
                "qty": 5
              },
              {
                "name": "JAMAICANA",
                "qty": 5
              },
              {
                "name": "Baiana",
                "qty": 5
              },
              {
                "name": "ROMEU E JULIETA",
                "qty": 4
              },
              {
                "name": "PARISIENSE",
                "qty": 4
              },
              {
                "name": "LEÃO",
                "qty": 4
              },
              {
                "name": "FRANGO COM CHEDDAR",
                "qty": 4
              },
              {
                "name": "STROGONOFF",
                "qty": 4
              },
              {
                "name": "BORDA DE MUSSARELA",
                "qty": 3
              },
              {
                "name": "CALAMAR",
                "qty": 3
              },
              {
                "name": "FRANGO BARBECUE",
                "qty": 3
              },
              {
                "name": "CAIÇARA",
                "qty": 3
              },
              {
                "name": "FRANGO COMPLETA",
                "qty": 3
              },
              {
                "name": "LOBO",
                "qty": 3
              },
              {
                "name": "PODE SER",
                "qty": 3
              },
              {
                "name": "PEPPERONI",
                "qty": 3
              },
              {
                "name": "CALACHEDDAR",
                "qty": 3
              },
              {
                "name": "CHOCOMUSSA",
                "qty": 3
              },
              {
                "name": "BORDA DE QUEIJO COM PRESUNTO",
                "qty": 3
              },
              {
                "name": "TANTO FAZ",
                "qty": 2
              },
              {
                "name": "CALAMUSSA",
                "qty": 2
              },
              {
                "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
                "qty": 2
              },
              {
                "name": "SICILIANA",
                "qty": 2
              },
              {
                "name": "SEI LÁ",
                "qty": 2
              },
              {
                "name": "MARGUERITA",
                "qty": 2
              },
              {
                "name": "NAPOLITANA",
                "qty": 1
              },
              {
                "name": "BIJUPIRA",
                "qty": 1
              },
              {
                "name": "ELDORADO",
                "qty": 1
              },
              {
                "name": "CHEDDAR",
                "qty": 1
              },
              {
                "name": "5 QUEIJOS",
                "qty": 1
              },
              {
                "name": "BORDA DE DOIS QUEIJOS",
                "qty": 1
              },
              {
                "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
                "qty": 1
              },
              {
                "name": "PERU",
                "qty": 1
              },
              {
                "name": "PAÇOCA",
                "qty": 1
              },
              {
                "name": "ITALIANA",
                "qty": 1
              },
              {
                "name": "SALAME",
                "qty": 1
              }
            ],
            "principaisTotal": 737,
            "saboresTotal": 773
          }
        }
      }
    ],
    "itemSales": {
      "id": "2026-11-mtd",
      "asOf": "2026-11-05",
      "period": [
        "2026-11-01",
        "2026-11-05"
      ],
      "periodLabel": "Nov 1–5, 2026",
      "source": "Anota Relatório de Itens → Principais + Adicionais (Fabiana Barcarena + Adan Vila); duplicate names merged",
      "combined": {
        "principais": [
          {
            "name": "GRANDE (35 CM)",
            "bar": 150,
            "vila": 57,
            "qty": 207,
            "category": "size"
          },
          {
            "name": "MÉDIA (30 CM)",
            "bar": 69,
            "vila": 20,
            "qty": 89,
            "category": "size"
          },
          {
            "name": "GUARANÁ ANTÁRTICA 1L",
            "bar": 32,
            "vila": 0,
            "qty": 32,
            "category": "soda"
          },
          {
            "name": "Coca cola 2L",
            "bar": 31,
            "vila": 0,
            "qty": 31,
            "category": "soda"
          },
          {
            "name": "Guaraná da Amazônia",
            "bar": 26,
            "vila": 0,
            "qty": 26,
            "category": "soda"
          },
          {
            "name": "Coca-cola Zero 1L",
            "bar": 17,
            "vila": 3,
            "qty": 20,
            "category": "soda"
          },
          {
            "name": "Coca Cola 1L",
            "bar": 15,
            "vila": 0,
            "qty": 15,
            "category": "soda"
          },
          {
            "name": "COCA COLA - 2L",
            "bar": 0,
            "vila": 15,
            "qty": 15,
            "category": "soda"
          },
          {
            "name": "Coca-Cola 1 litro",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "soda"
          },
          {
            "name": "REFRIGERANTE TUCHAUA - 2L",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTARTICA 1 LITRO",
            "bar": 0,
            "vila": 6,
            "qty": 6,
            "category": "soda"
          },
          {
            "name": "PIZZA FECHADA",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "calzone"
          },
          {
            "name": "Guaraná Amazônia",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "soda"
          },
          {
            "name": "BARÉ 2lt",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "soda"
          },
          {
            "name": "coca cola zero 2L",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "soda"
          }
        ],
        "sabores": [
          {
            "name": "PAULISTA",
            "bar": 46,
            "vila": 17,
            "qty": 63,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CATUPIRY",
            "bar": 15,
            "vila": 10,
            "qty": 25,
            "category": "pizza"
          },
          {
            "name": "CALABRESA C/ CATUPIRY",
            "bar": 16,
            "vila": 7,
            "qty": 23,
            "category": "pizza"
          },
          {
            "name": "2 QUEIJOS",
            "bar": 14,
            "vila": 1,
            "qty": 15,
            "category": "pizza"
          },
          {
            "name": "4 QUEIJOS",
            "bar": 12,
            "vila": 3,
            "qty": 15,
            "category": "pizza"
          },
          {
            "name": "CALACHEDDAR",
            "bar": 12,
            "vila": 3,
            "qty": 15,
            "category": "calzone"
          },
          {
            "name": "CALAFRANGO",
            "bar": 11,
            "vila": 4,
            "qty": 15,
            "category": "calzone"
          },
          {
            "name": "CALABRESA BARBECUE",
            "bar": 14,
            "vila": 0,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "BACON (sem milho)",
            "bar": 14,
            "vila": 0,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "MODA DA CASA",
            "bar": 10,
            "vila": 4,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "FRANGO",
            "bar": 10,
            "vila": 3,
            "qty": 13,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CHEDDAR",
            "bar": 7,
            "vila": 6,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "MISTA",
            "bar": 7,
            "vila": 4,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "SEM BORDA",
            "bar": 10,
            "vila": 0,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "BORDA REQUEIJÃO",
            "bar": 10,
            "vila": 0,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "PORTUGUESA",
            "bar": 4,
            "vila": 6,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "MUSSARELA",
            "bar": 8,
            "vila": 1,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "3 QUEIJOS",
            "bar": 6,
            "vila": 3,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "CALABRESA ESPECIAL",
            "bar": 6,
            "vila": 3,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "COSTELA",
            "bar": 7,
            "vila": 1,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "JARDINEIRA",
            "bar": 6,
            "vila": 2,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "BACON II",
            "bar": 6,
            "vila": 2,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM CHEESE",
            "bar": 6,
            "vila": 1,
            "qty": 7,
            "category": "borda"
          },
          {
            "name": "HOLANDESA",
            "bar": 5,
            "vila": 2,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO",
            "bar": 4,
            "vila": 3,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO C/ CATUPIRY",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CHEDDAR",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "5 QUEIJOS",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "ROMANESCA",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "CALAMAR",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "calzone"
          },
          {
            "name": "AMERICANA",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "CALAMUSSA",
            "bar": 4,
            "vila": 0,
            "qty": 4,
            "category": "calzone"
          },
          {
            "name": "SALAME",
            "bar": 4,
            "vila": 0,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "LEÃO",
            "bar": 3,
            "vila": 1,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "BRIGADEIRO",
            "bar": 3,
            "vila": 1,
            "qty": 4,
            "category": "sweet"
          },
          {
            "name": "BAURU",
            "bar": 1,
            "vila": 3,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBEBUE",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "FRANGO BARBECUE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADPHIA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM COM ALHO FRITO",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "CE QUE SABE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "DISQUETE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "sweet"
          },
          {
            "name": "VENEZA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CATUPIRY",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "PERÚ",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PARISIENSE",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PEPPERONI",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CHOCOMUSSA",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "sweet"
          },
          {
            "name": "Pizza de calabresa+ Pizza de Mussarela",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "LOBO",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "borda"
          },
          {
            "name": "COSTELA ESPECIAL",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CAIPIRA",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO / CATUPIRY",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "FRANGO COMPLETA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "ELDORADO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BORDA DE MUSSARELA",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE CHOCOLATE",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "CHEDDAR",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FILÉ",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BORDA DE REQUEIJÃO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "LOMBO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BORDA DE MUSSARELA E PRESUNTO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "CALABRESA PHILADELPHIA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BACON",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "MARGUERITA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADELPHIA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "Pizza de mussarela+Pizza de calabresa",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "PERU",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BORDA DE QUEIJO COM PRESUNTO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "MINEIRA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          }
        ]
      },
      "byCategory": {
        "size": [
          {
            "name": "GRANDE (35 CM)",
            "bar": 150,
            "vila": 57,
            "qty": 207,
            "category": "size"
          },
          {
            "name": "MÉDIA (30 CM)",
            "bar": 69,
            "vila": 20,
            "qty": 89,
            "category": "size"
          }
        ],
        "soda": [
          {
            "name": "GUARANÁ ANTÁRTICA 1L",
            "bar": 32,
            "vila": 0,
            "qty": 32,
            "category": "soda"
          },
          {
            "name": "Coca cola 2L",
            "bar": 31,
            "vila": 0,
            "qty": 31,
            "category": "soda"
          },
          {
            "name": "Guaraná da Amazônia",
            "bar": 26,
            "vila": 0,
            "qty": 26,
            "category": "soda"
          },
          {
            "name": "Coca-cola Zero 1L",
            "bar": 17,
            "vila": 3,
            "qty": 20,
            "category": "soda"
          },
          {
            "name": "Coca Cola 1L",
            "bar": 15,
            "vila": 0,
            "qty": 15,
            "category": "soda"
          },
          {
            "name": "COCA COLA - 2L",
            "bar": 0,
            "vila": 15,
            "qty": 15,
            "category": "soda"
          },
          {
            "name": "Coca-Cola 1 litro",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "soda"
          },
          {
            "name": "REFRIGERANTE TUCHAUA - 2L",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTARTICA 1 LITRO",
            "bar": 0,
            "vila": 6,
            "qty": 6,
            "category": "soda"
          },
          {
            "name": "Guaraná Amazônia",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "soda"
          },
          {
            "name": "BARÉ 2lt",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "soda"
          },
          {
            "name": "coca cola zero 2L",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "soda"
          }
        ],
        "pizza": [
          {
            "name": "PAULISTA",
            "bar": 46,
            "vila": 17,
            "qty": 63,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CATUPIRY",
            "bar": 15,
            "vila": 10,
            "qty": 25,
            "category": "pizza"
          },
          {
            "name": "CALABRESA C/ CATUPIRY",
            "bar": 16,
            "vila": 7,
            "qty": 23,
            "category": "pizza"
          },
          {
            "name": "2 QUEIJOS",
            "bar": 14,
            "vila": 1,
            "qty": 15,
            "category": "pizza"
          },
          {
            "name": "4 QUEIJOS",
            "bar": 12,
            "vila": 3,
            "qty": 15,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBECUE",
            "bar": 14,
            "vila": 0,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "BACON (sem milho)",
            "bar": 14,
            "vila": 0,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "MODA DA CASA",
            "bar": 10,
            "vila": 4,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "FRANGO",
            "bar": 10,
            "vila": 3,
            "qty": 13,
            "category": "pizza"
          },
          {
            "name": "MISTA",
            "bar": 7,
            "vila": 4,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "PORTUGUESA",
            "bar": 4,
            "vila": 6,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "MUSSARELA",
            "bar": 8,
            "vila": 1,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "3 QUEIJOS",
            "bar": 6,
            "vila": 3,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "CALABRESA ESPECIAL",
            "bar": 6,
            "vila": 3,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "COSTELA",
            "bar": 7,
            "vila": 1,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "JARDINEIRA",
            "bar": 6,
            "vila": 2,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "BACON II",
            "bar": 6,
            "vila": 2,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "HOLANDESA",
            "bar": 5,
            "vila": 2,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO",
            "bar": 4,
            "vila": 3,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO C/ CATUPIRY",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CHEDDAR",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "5 QUEIJOS",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "ROMANESCA",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "AMERICANA",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "SALAME",
            "bar": 4,
            "vila": 0,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "LEÃO",
            "bar": 3,
            "vila": 1,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "BAURU",
            "bar": 1,
            "vila": 3,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBEBUE",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "FRANGO BARBECUE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADPHIA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "CE QUE SABE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "VENEZA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "PERÚ",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PARISIENSE",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PEPPERONI",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "Pizza de calabresa+ Pizza de Mussarela",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "LOBO",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "COSTELA ESPECIAL",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CAIPIRA",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO / CATUPIRY",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "FRANGO COMPLETA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "ELDORADO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "CHEDDAR",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FILÉ",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "LOMBO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "CALABRESA PHILADELPHIA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BACON",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "MARGUERITA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADELPHIA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "Pizza de mussarela+Pizza de calabresa",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "PERU",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "MINEIRA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          }
        ],
        "borda": [
          {
            "name": "BORDA DE CHEDDAR",
            "bar": 7,
            "vila": 6,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "SEM BORDA",
            "bar": 10,
            "vila": 0,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "BORDA REQUEIJÃO",
            "bar": 10,
            "vila": 0,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM CHEESE",
            "bar": 6,
            "vila": 1,
            "qty": 7,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM COM ALHO FRITO",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "BORDA DE CATUPIRY",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
            "bar": 1,
            "vila": 1,
            "qty": 2,
            "category": "borda"
          },
          {
            "name": "BORDA DE MUSSARELA",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE CHOCOLATE",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE REQUEIJÃO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE MUSSARELA E PRESUNTO",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "borda"
          },
          {
            "name": "BORDA DE QUEIJO COM PRESUNTO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "borda"
          }
        ],
        "calzone": [
          {
            "name": "CALACHEDDAR",
            "bar": 12,
            "vila": 3,
            "qty": 15,
            "category": "calzone"
          },
          {
            "name": "CALAFRANGO",
            "bar": 11,
            "vila": 4,
            "qty": 15,
            "category": "calzone"
          },
          {
            "name": "CALAMAR",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "calzone"
          },
          {
            "name": "PIZZA FECHADA",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "calzone"
          },
          {
            "name": "CALAMUSSA",
            "bar": 4,
            "vila": 0,
            "qty": 4,
            "category": "calzone"
          }
        ],
        "sweet": [
          {
            "name": "BRIGADEIRO",
            "bar": 3,
            "vila": 1,
            "qty": 4,
            "category": "sweet"
          },
          {
            "name": "DISQUETE",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "sweet"
          },
          {
            "name": "CHOCOMUSSA",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "sweet"
          }
        ],
        "other": []
      },
      "stores": {
        "bar": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "qty": 150
            },
            {
              "name": "Media",
              "qty": 69
            },
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "qty": 32
            },
            {
              "name": "Coca cola 2L",
              "qty": 31
            },
            {
              "name": "Guaraná da Amazônia",
              "qty": 26
            },
            {
              "name": "Coca Cola Zero 1L",
              "qty": 17
            },
            {
              "name": "Coca Cola 1L",
              "qty": 15
            },
            {
              "name": "PIZZA FECHADA",
              "qty": 5
            },
            {
              "name": "BARÉ 2lt",
              "qty": 3
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "qty": 46
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "qty": 16
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "qty": 15
            },
            {
              "name": "CALABRESA BARBECUE",
              "qty": 14
            },
            {
              "name": "BACON (sem milho)",
              "qty": 14
            },
            {
              "name": "2 Queijos",
              "qty": 14
            },
            {
              "name": "4 QUEIJOS",
              "qty": 12
            },
            {
              "name": "CALACHEDDAR",
              "qty": 12
            },
            {
              "name": "CALAFRANGO",
              "qty": 11
            },
            {
              "name": "SEM BORDA",
              "qty": 10
            },
            {
              "name": "FRANGO",
              "qty": 10
            },
            {
              "name": "MODA DA CASA",
              "qty": 10
            },
            {
              "name": "BORDA REQUEIJÃO",
              "qty": 10
            },
            {
              "name": "MUSSARELA",
              "qty": 8
            },
            {
              "name": "MISTA",
              "qty": 7
            },
            {
              "name": "COSTELA",
              "qty": 7
            },
            {
              "name": "BORDA DE CHEDDAR",
              "qty": 7
            },
            {
              "name": "JARDINEIRA",
              "qty": 6
            },
            {
              "name": "BACON II",
              "qty": 6
            },
            {
              "name": "3 QUEIJOS",
              "qty": 6
            },
            {
              "name": "CALABRESA ESPECIAL",
              "qty": 6
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "qty": 6
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "qty": 6
            },
            {
              "name": "FRANGO C/ CHEDDAR",
              "qty": 6
            },
            {
              "name": "5 QUEIJOS",
              "qty": 5
            },
            {
              "name": "ROMANESCA",
              "qty": 5
            },
            {
              "name": "HOLANDESA",
              "qty": 5
            },
            {
              "name": "CALAMAR",
              "qty": 5
            },
            {
              "name": "AMERICANA",
              "qty": 5
            },
            {
              "name": "CALAMUSSA",
              "qty": 4
            },
            {
              "name": "SALAME",
              "qty": 4
            },
            {
              "name": "PORTUGUESA",
              "qty": 4
            },
            {
              "name": "CAMARÃO",
              "qty": 4
            },
            {
              "name": "FRANGO BARBECUE",
              "qty": 3
            },
            {
              "name": "LEÃO",
              "qty": 3
            },
            {
              "name": "FRANGO PHILADPHIA",
              "qty": 3
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "qty": 3
            },
            {
              "name": "CE QUE SABE",
              "qty": 3
            },
            {
              "name": "DISQUETE",
              "qty": 3
            },
            {
              "name": "VENEZA",
              "qty": 3
            },
            {
              "name": "BRIGADEIRO",
              "qty": 3
            },
            {
              "name": "PERÚ",
              "qty": 2
            },
            {
              "name": "PARISIENSE",
              "qty": 2
            },
            {
              "name": "PEPPERONI",
              "qty": 2
            },
            {
              "name": "CHOCOMUSSA",
              "qty": 2
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "qty": 2
            },
            {
              "name": "LOBO",
              "qty": 2
            },
            {
              "name": "ELDORADO",
              "qty": 1
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "qty": 1
            },
            {
              "name": "COSTELA ESPECIAL",
              "qty": 1
            },
            {
              "name": "BORDA DE MUSSARELA",
              "qty": 1
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "qty": 1
            },
            {
              "name": "CHEDDAR",
              "qty": 1
            },
            {
              "name": "CAIPIRA",
              "qty": 1
            },
            {
              "name": "FILÉ",
              "qty": 1
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "qty": 1
            },
            {
              "name": "LOMBO",
              "qty": 1
            },
            {
              "name": "BORDA DE MUSSARELA E PRESUNTO",
              "qty": 1
            },
            {
              "name": "BAURU",
              "qty": 1
            }
          ],
          "principaisTotal": 348,
          "saboresTotal": 354
        },
        "vila": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "qty": 57
            },
            {
              "name": "Media",
              "qty": 20
            },
            {
              "name": "COCA COLA - 2L",
              "qty": 15
            },
            {
              "name": "Coca-Cola 1 litro",
              "qty": 8
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "qty": 8
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "qty": 6
            },
            {
              "name": "Guaraná Amazônia",
              "qty": 4
            },
            {
              "name": "Coca-cola Zero 1L",
              "qty": 3
            },
            {
              "name": "coca cola zero 2L",
              "qty": 2
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "qty": 17
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "qty": 10
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "qty": 7
            },
            {
              "name": "PORTUGUESA",
              "qty": 6
            },
            {
              "name": "BORDA DE CHEDDAR",
              "qty": 6
            },
            {
              "name": "MISTA",
              "qty": 4
            },
            {
              "name": "MODA DA CASA",
              "qty": 4
            },
            {
              "name": "CALABRESA BARBEBUE",
              "qty": 4
            },
            {
              "name": "CALAFRANGO",
              "qty": 4
            },
            {
              "name": "FRANGO",
              "qty": 3
            },
            {
              "name": "CALACHEDDAR",
              "qty": 3
            },
            {
              "name": "3 QUEIJOS",
              "qty": 3
            },
            {
              "name": "CAMARÃO",
              "qty": 3
            },
            {
              "name": "CALABRESA ESPECIAL",
              "qty": 3
            },
            {
              "name": "BAURU",
              "qty": 3
            },
            {
              "name": "BORDA DE CATUPIRY",
              "qty": 3
            },
            {
              "name": "4 QUEIJOS",
              "qty": 3
            },
            {
              "name": "HOLANDESA",
              "qty": 2
            },
            {
              "name": "BACON II",
              "qty": 2
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "qty": 2
            },
            {
              "name": "FRANGO COMPLETA",
              "qty": 2
            },
            {
              "name": "JARDINEIRA",
              "qty": 2
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "qty": 1
            },
            {
              "name": "BACON",
              "qty": 1
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "qty": 1
            },
            {
              "name": "MUSSARELA",
              "qty": 1
            },
            {
              "name": "MARGUERITA",
              "qty": 1
            },
            {
              "name": "2 QUEIJOS",
              "qty": 1
            },
            {
              "name": "ROMANESCA",
              "qty": 1
            },
            {
              "name": "COSTELA",
              "qty": 1
            },
            {
              "name": "BRIGADEIRO",
              "qty": 1
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "qty": 1
            },
            {
              "name": "CALAMAR",
              "qty": 1
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "qty": 1
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "qty": 1
            },
            {
              "name": "CAIPIRA",
              "qty": 1
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "qty": 1
            },
            {
              "name": "5 QUEIJOS",
              "qty": 1
            },
            {
              "name": "COSTELA ESPECIAL",
              "qty": 1
            },
            {
              "name": "PERU",
              "qty": 1
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "qty": 1
            },
            {
              "name": "MINEIRA",
              "qty": 1
            },
            {
              "name": "LEÃO",
              "qty": 1
            }
          ],
          "principaisTotal": 123,
          "saboresTotal": 117
        }
      }
    },
    "itemSalesOctober": {
      "id": "2026-10",
      "asOf": "2026-10-31",
      "period": [
        "2026-10-01",
        "2026-10-31"
      ],
      "periodLabel": "October 2026",
      "source": "Anota Relatório de Itens → Principais + Adicionais (Fabiana Barcarena + Adan Vila); duplicate names merged",
      "combined": {
        "principais": [
          {
            "name": "GRANDE (35 CM)",
            "bar": 957,
            "vila": 377,
            "qty": 1334,
            "category": "size"
          },
          {
            "name": "MÉDIA (30 CM)",
            "bar": 312,
            "vila": 117,
            "qty": 429,
            "category": "size"
          },
          {
            "name": "Coca Cola 1L",
            "bar": 144,
            "vila": 0,
            "qty": 144,
            "category": "soda"
          },
          {
            "name": "Tuchaua 2L",
            "bar": 107,
            "vila": 0,
            "qty": 107,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTÁRTICA 1L",
            "bar": 84,
            "vila": 0,
            "qty": 84,
            "category": "soda"
          },
          {
            "name": "PIZZA FECHADA",
            "bar": 56,
            "vila": 13,
            "qty": 69,
            "category": "calzone"
          },
          {
            "name": "Coca cola 2L",
            "bar": 68,
            "vila": 0,
            "qty": 68,
            "category": "soda"
          },
          {
            "name": "Coca-Cola 1 litro",
            "bar": 0,
            "vila": 62,
            "qty": 62,
            "category": "soda"
          },
          {
            "name": "Coca-cola Zero 1L",
            "bar": 47,
            "vila": 12,
            "qty": 59,
            "category": "soda"
          },
          {
            "name": "Tuchaua 1lt",
            "bar": 52,
            "vila": 0,
            "qty": 52,
            "category": "soda"
          },
          {
            "name": "Pepsi 2L",
            "bar": 44,
            "vila": 7,
            "qty": 51,
            "category": "soda"
          },
          {
            "name": "Coca Cola 2L zero",
            "bar": 48,
            "vila": 0,
            "qty": 48,
            "category": "soda"
          },
          {
            "name": "Guaraná da Amazônia",
            "bar": 38,
            "vila": 0,
            "qty": 38,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTARTICA 1 LITRO",
            "bar": 0,
            "vila": 37,
            "qty": 37,
            "category": "soda"
          },
          {
            "name": "REFRIGERANTE TUCHAUA - 2L",
            "bar": 0,
            "vila": 34,
            "qty": 34,
            "category": "soda"
          },
          {
            "name": "COCA COLA - 2L",
            "bar": 0,
            "vila": 30,
            "qty": 30,
            "category": "soda"
          },
          {
            "name": "coca cola zero 2L",
            "bar": 0,
            "vila": 19,
            "qty": 19,
            "category": "soda"
          },
          {
            "name": "TUCHAUA DE 1 LITRO",
            "bar": 0,
            "vila": 13,
            "qty": 13,
            "category": "soda"
          },
          {
            "name": "Guaraná Antártica 2L",
            "bar": 12,
            "vila": 0,
            "qty": 12,
            "category": "soda"
          },
          {
            "name": "Guaraná Amazônia",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "soda"
          },
          {
            "name": "BARÉ 2lt",
            "bar": 7,
            "vila": 0,
            "qty": 7,
            "category": "soda"
          },
          {
            "name": "Bare 2L",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "soda"
          }
        ],
        "sabores": [
          {
            "name": "PAULISTA",
            "bar": 255,
            "vila": 117,
            "qty": 372,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CATUPIRY",
            "bar": 181,
            "vila": 58,
            "qty": 239,
            "category": "pizza"
          },
          {
            "name": "CALABRESA C/ CATUPIRY",
            "bar": 121,
            "vila": 21,
            "qty": 142,
            "category": "pizza"
          },
          {
            "name": "FRANGO",
            "bar": 70,
            "vila": 39,
            "qty": 109,
            "category": "pizza"
          },
          {
            "name": "4 QUEIJOS",
            "bar": 77,
            "vila": 17,
            "qty": 94,
            "category": "pizza"
          },
          {
            "name": "MODA DA CASA",
            "bar": 57,
            "vila": 28,
            "qty": 85,
            "category": "pizza"
          },
          {
            "name": "CALAFRANGO",
            "bar": 67,
            "vila": 17,
            "qty": 84,
            "category": "calzone"
          },
          {
            "name": "PORTUGUESA",
            "bar": 43,
            "vila": 41,
            "qty": 84,
            "category": "pizza"
          },
          {
            "name": "MISTA",
            "bar": 53,
            "vila": 30,
            "qty": 83,
            "category": "pizza"
          },
          {
            "name": "SEM BORDA",
            "bar": 80,
            "vila": 0,
            "qty": 80,
            "category": "borda"
          },
          {
            "name": "MUSSARELA",
            "bar": 62,
            "vila": 8,
            "qty": 70,
            "category": "pizza"
          },
          {
            "name": "BACON II",
            "bar": 47,
            "vila": 11,
            "qty": 58,
            "category": "pizza"
          },
          {
            "name": "CALACHEDDAR",
            "bar": 54,
            "vila": 3,
            "qty": 57,
            "category": "calzone"
          },
          {
            "name": "2 QUEIJOS",
            "bar": 45,
            "vila": 10,
            "qty": 55,
            "category": "pizza"
          },
          {
            "name": "COSTELA",
            "bar": 28,
            "vila": 22,
            "qty": 50,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM CHEESE",
            "bar": 36,
            "vila": 13,
            "qty": 49,
            "category": "borda"
          },
          {
            "name": "CAMARÃO",
            "bar": 23,
            "vila": 24,
            "qty": 47,
            "category": "pizza"
          },
          {
            "name": "BAURU",
            "bar": 30,
            "vila": 14,
            "qty": 44,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBECUE",
            "bar": 43,
            "vila": 0,
            "qty": 43,
            "category": "pizza"
          },
          {
            "name": "3 QUEIJOS",
            "bar": 30,
            "vila": 13,
            "qty": 43,
            "category": "pizza"
          },
          {
            "name": "ROMANESCA",
            "bar": 33,
            "vila": 9,
            "qty": 42,
            "category": "pizza"
          },
          {
            "name": "JARDINEIRA",
            "bar": 31,
            "vila": 10,
            "qty": 41,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CHEDDAR",
            "bar": 28,
            "vila": 13,
            "qty": 41,
            "category": "borda"
          },
          {
            "name": "FILÉ",
            "bar": 29,
            "vila": 10,
            "qty": 39,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADPHIA",
            "bar": 37,
            "vila": 0,
            "qty": 37,
            "category": "pizza"
          },
          {
            "name": "HOLANDESA",
            "bar": 25,
            "vila": 9,
            "qty": 34,
            "category": "pizza"
          },
          {
            "name": "BACON (sem milho)",
            "bar": 32,
            "vila": 0,
            "qty": 32,
            "category": "pizza"
          },
          {
            "name": "FRANGO COM CHEDDAR",
            "bar": 27,
            "vila": 4,
            "qty": 31,
            "category": "pizza"
          },
          {
            "name": "CALABRESA ESPECIAL",
            "bar": 23,
            "vila": 8,
            "qty": 31,
            "category": "pizza"
          },
          {
            "name": "COSTELA ESPECIAL",
            "bar": 19,
            "vila": 11,
            "qty": 30,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CHOCOLATE",
            "bar": 19,
            "vila": 10,
            "qty": 29,
            "category": "borda"
          },
          {
            "name": "FRANGO BARBECUE",
            "bar": 25,
            "vila": 3,
            "qty": 28,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO C/ CATUPIRY",
            "bar": 25,
            "vila": 0,
            "qty": 25,
            "category": "pizza"
          },
          {
            "name": "AMERICANA",
            "bar": 14,
            "vila": 10,
            "qty": 24,
            "category": "pizza"
          },
          {
            "name": "Pizza de calabresa+ Pizza de Mussarela",
            "bar": 23,
            "vila": 0,
            "qty": 23,
            "category": "pizza"
          },
          {
            "name": "CALAMAR",
            "bar": 20,
            "vila": 3,
            "qty": 23,
            "category": "calzone"
          },
          {
            "name": "PARISIENSE",
            "bar": 17,
            "vila": 4,
            "qty": 21,
            "category": "pizza"
          },
          {
            "name": "CALAMUSSA",
            "bar": 18,
            "vila": 2,
            "qty": 20,
            "category": "calzone"
          },
          {
            "name": "BRIGADEIRO",
            "bar": 13,
            "vila": 6,
            "qty": 19,
            "category": "sweet"
          },
          {
            "name": "LOBO",
            "bar": 14,
            "vila": 3,
            "qty": 17,
            "category": "pizza"
          },
          {
            "name": "VENEZA",
            "bar": 7,
            "vila": 10,
            "qty": 17,
            "category": "pizza"
          },
          {
            "name": "CE QUE SABE",
            "bar": 16,
            "vila": 0,
            "qty": 16,
            "category": "pizza"
          },
          {
            "name": "BURUKUTU",
            "bar": 10,
            "vila": 6,
            "qty": 16,
            "category": "pizza"
          },
          {
            "name": "CAIPIRA",
            "bar": 9,
            "vila": 5,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM COM ALHO FRITO",
            "bar": 13,
            "vila": 0,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "FRANGO CATUPIRY",
            "bar": 13,
            "vila": 0,
            "qty": 13,
            "category": "pizza"
          },
          {
            "name": "BORDA DE MUSSARELA",
            "bar": 10,
            "vila": 3,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "5 QUEIJOS",
            "bar": 11,
            "vila": 1,
            "qty": 12,
            "category": "pizza"
          },
          {
            "name": "CALABRESA PHILADELPHIA",
            "bar": 0,
            "vila": 12,
            "qty": 12,
            "category": "pizza"
          },
          {
            "name": "BORDA REQUEIJÃO",
            "bar": 11,
            "vila": 0,
            "qty": 11,
            "category": "borda"
          },
          {
            "name": "FRANGO PHILADELPHIA",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "NORDESTINA",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "SALAME",
            "bar": 9,
            "vila": 1,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "LEÃO",
            "bar": 6,
            "vila": 4,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CATUPIRY",
            "bar": 0,
            "vila": 10,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "PRESUNTO",
            "bar": 3,
            "vila": 6,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "BORDA DE DOIS QUEIJOS",
            "bar": 7,
            "vila": 1,
            "qty": 8,
            "category": "borda"
          },
          {
            "name": "CAIÇARA",
            "bar": 5,
            "vila": 3,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBEBUE",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "Pizza de mussarela+Pizza de calabresa",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CÊ QUE SABE",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CROCANTE",
            "bar": 7,
            "vila": 0,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CHEDDAR",
            "bar": 6,
            "vila": 1,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "PEPPERONI",
            "bar": 4,
            "vila": 3,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "BACON",
            "bar": 0,
            "vila": 7,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "PERÚ",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "LOMBO",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "DISQUETE",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "sweet"
          },
          {
            "name": "PAÇOCA",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "sweet"
          },
          {
            "name": "CAMARÃO / CATUPIRY",
            "bar": 0,
            "vila": 6,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "PRESTÍGIO",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "sweet"
          },
          {
            "name": "BORDA DE REQUEIJÃO",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "borda"
          },
          {
            "name": "CHOCOMUSSA",
            "bar": 2,
            "vila": 3,
            "qty": 5,
            "category": "sweet"
          },
          {
            "name": "JAMAICANA",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "Baiana",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "ROMEU E JULIETA",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "sweet"
          },
          {
            "name": "STROGONOFF",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "MEXICANA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "BORDA DE MUSARELA E PRESUNTO",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "CHOCOBIZ",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "sweet"
          },
          {
            "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
            "bar": 2,
            "vila": 1,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "NAPOLITANA",
            "bar": 2,
            "vila": 1,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "SEI LÁ",
            "bar": 1,
            "vila": 2,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "FRANGO COMPLETA",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "PODE SER",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "BORDA DE QUEIJO COM PRESUNTO",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "PERUANA",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "MILHO",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "CALACATU",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "calzone"
          },
          {
            "name": "TANTO FAZ",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "borda"
          },
          {
            "name": "SICILIANA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "MARGUERITA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PRESUNTO CATUPIRY",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FRANGO CHEDDAR",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BIJUPIRA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "ELDORADO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "PERU",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "ITALIANA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          }
        ]
      },
      "byCategory": {
        "size": [
          {
            "name": "GRANDE (35 CM)",
            "bar": 957,
            "vila": 377,
            "qty": 1334,
            "category": "size"
          },
          {
            "name": "MÉDIA (30 CM)",
            "bar": 312,
            "vila": 117,
            "qty": 429,
            "category": "size"
          }
        ],
        "soda": [
          {
            "name": "Coca Cola 1L",
            "bar": 144,
            "vila": 0,
            "qty": 144,
            "category": "soda"
          },
          {
            "name": "Tuchaua 2L",
            "bar": 107,
            "vila": 0,
            "qty": 107,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTÁRTICA 1L",
            "bar": 84,
            "vila": 0,
            "qty": 84,
            "category": "soda"
          },
          {
            "name": "Coca cola 2L",
            "bar": 68,
            "vila": 0,
            "qty": 68,
            "category": "soda"
          },
          {
            "name": "Coca-Cola 1 litro",
            "bar": 0,
            "vila": 62,
            "qty": 62,
            "category": "soda"
          },
          {
            "name": "Coca-cola Zero 1L",
            "bar": 47,
            "vila": 12,
            "qty": 59,
            "category": "soda"
          },
          {
            "name": "Tuchaua 1lt",
            "bar": 52,
            "vila": 0,
            "qty": 52,
            "category": "soda"
          },
          {
            "name": "Pepsi 2L",
            "bar": 44,
            "vila": 7,
            "qty": 51,
            "category": "soda"
          },
          {
            "name": "Coca Cola 2L zero",
            "bar": 48,
            "vila": 0,
            "qty": 48,
            "category": "soda"
          },
          {
            "name": "Guaraná da Amazônia",
            "bar": 38,
            "vila": 0,
            "qty": 38,
            "category": "soda"
          },
          {
            "name": "GUARANÁ ANTARTICA 1 LITRO",
            "bar": 0,
            "vila": 37,
            "qty": 37,
            "category": "soda"
          },
          {
            "name": "REFRIGERANTE TUCHAUA - 2L",
            "bar": 0,
            "vila": 34,
            "qty": 34,
            "category": "soda"
          },
          {
            "name": "COCA COLA - 2L",
            "bar": 0,
            "vila": 30,
            "qty": 30,
            "category": "soda"
          },
          {
            "name": "coca cola zero 2L",
            "bar": 0,
            "vila": 19,
            "qty": 19,
            "category": "soda"
          },
          {
            "name": "TUCHAUA DE 1 LITRO",
            "bar": 0,
            "vila": 13,
            "qty": 13,
            "category": "soda"
          },
          {
            "name": "Guaraná Antártica 2L",
            "bar": 12,
            "vila": 0,
            "qty": 12,
            "category": "soda"
          },
          {
            "name": "Guaraná Amazônia",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "soda"
          },
          {
            "name": "BARÉ 2lt",
            "bar": 7,
            "vila": 0,
            "qty": 7,
            "category": "soda"
          },
          {
            "name": "Bare 2L",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "soda"
          }
        ],
        "pizza": [
          {
            "name": "PAULISTA",
            "bar": 255,
            "vila": 117,
            "qty": 372,
            "category": "pizza"
          },
          {
            "name": "FRANGO C/ CATUPIRY",
            "bar": 181,
            "vila": 58,
            "qty": 239,
            "category": "pizza"
          },
          {
            "name": "CALABRESA C/ CATUPIRY",
            "bar": 121,
            "vila": 21,
            "qty": 142,
            "category": "pizza"
          },
          {
            "name": "FRANGO",
            "bar": 70,
            "vila": 39,
            "qty": 109,
            "category": "pizza"
          },
          {
            "name": "4 QUEIJOS",
            "bar": 77,
            "vila": 17,
            "qty": 94,
            "category": "pizza"
          },
          {
            "name": "MODA DA CASA",
            "bar": 57,
            "vila": 28,
            "qty": 85,
            "category": "pizza"
          },
          {
            "name": "PORTUGUESA",
            "bar": 43,
            "vila": 41,
            "qty": 84,
            "category": "pizza"
          },
          {
            "name": "MISTA",
            "bar": 53,
            "vila": 30,
            "qty": 83,
            "category": "pizza"
          },
          {
            "name": "MUSSARELA",
            "bar": 62,
            "vila": 8,
            "qty": 70,
            "category": "pizza"
          },
          {
            "name": "BACON II",
            "bar": 47,
            "vila": 11,
            "qty": 58,
            "category": "pizza"
          },
          {
            "name": "2 QUEIJOS",
            "bar": 45,
            "vila": 10,
            "qty": 55,
            "category": "pizza"
          },
          {
            "name": "COSTELA",
            "bar": 28,
            "vila": 22,
            "qty": 50,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO",
            "bar": 23,
            "vila": 24,
            "qty": 47,
            "category": "pizza"
          },
          {
            "name": "BAURU",
            "bar": 30,
            "vila": 14,
            "qty": 44,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBECUE",
            "bar": 43,
            "vila": 0,
            "qty": 43,
            "category": "pizza"
          },
          {
            "name": "3 QUEIJOS",
            "bar": 30,
            "vila": 13,
            "qty": 43,
            "category": "pizza"
          },
          {
            "name": "ROMANESCA",
            "bar": 33,
            "vila": 9,
            "qty": 42,
            "category": "pizza"
          },
          {
            "name": "JARDINEIRA",
            "bar": 31,
            "vila": 10,
            "qty": 41,
            "category": "pizza"
          },
          {
            "name": "FILÉ",
            "bar": 29,
            "vila": 10,
            "qty": 39,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADPHIA",
            "bar": 37,
            "vila": 0,
            "qty": 37,
            "category": "pizza"
          },
          {
            "name": "HOLANDESA",
            "bar": 25,
            "vila": 9,
            "qty": 34,
            "category": "pizza"
          },
          {
            "name": "BACON (sem milho)",
            "bar": 32,
            "vila": 0,
            "qty": 32,
            "category": "pizza"
          },
          {
            "name": "FRANGO COM CHEDDAR",
            "bar": 27,
            "vila": 4,
            "qty": 31,
            "category": "pizza"
          },
          {
            "name": "CALABRESA ESPECIAL",
            "bar": 23,
            "vila": 8,
            "qty": 31,
            "category": "pizza"
          },
          {
            "name": "COSTELA ESPECIAL",
            "bar": 19,
            "vila": 11,
            "qty": 30,
            "category": "pizza"
          },
          {
            "name": "FRANGO BARBECUE",
            "bar": 25,
            "vila": 3,
            "qty": 28,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO C/ CATUPIRY",
            "bar": 25,
            "vila": 0,
            "qty": 25,
            "category": "pizza"
          },
          {
            "name": "AMERICANA",
            "bar": 14,
            "vila": 10,
            "qty": 24,
            "category": "pizza"
          },
          {
            "name": "Pizza de calabresa+ Pizza de Mussarela",
            "bar": 23,
            "vila": 0,
            "qty": 23,
            "category": "pizza"
          },
          {
            "name": "PARISIENSE",
            "bar": 17,
            "vila": 4,
            "qty": 21,
            "category": "pizza"
          },
          {
            "name": "LOBO",
            "bar": 14,
            "vila": 3,
            "qty": 17,
            "category": "pizza"
          },
          {
            "name": "VENEZA",
            "bar": 7,
            "vila": 10,
            "qty": 17,
            "category": "pizza"
          },
          {
            "name": "CE QUE SABE",
            "bar": 16,
            "vila": 0,
            "qty": 16,
            "category": "pizza"
          },
          {
            "name": "BURUKUTU",
            "bar": 10,
            "vila": 6,
            "qty": 16,
            "category": "pizza"
          },
          {
            "name": "CAIPIRA",
            "bar": 9,
            "vila": 5,
            "qty": 14,
            "category": "pizza"
          },
          {
            "name": "FRANGO CATUPIRY",
            "bar": 13,
            "vila": 0,
            "qty": 13,
            "category": "pizza"
          },
          {
            "name": "5 QUEIJOS",
            "bar": 11,
            "vila": 1,
            "qty": 12,
            "category": "pizza"
          },
          {
            "name": "CALABRESA PHILADELPHIA",
            "bar": 0,
            "vila": 12,
            "qty": 12,
            "category": "pizza"
          },
          {
            "name": "FRANGO PHILADELPHIA",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "NORDESTINA",
            "bar": 0,
            "vila": 11,
            "qty": 11,
            "category": "pizza"
          },
          {
            "name": "SALAME",
            "bar": 9,
            "vila": 1,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "LEÃO",
            "bar": 6,
            "vila": 4,
            "qty": 10,
            "category": "pizza"
          },
          {
            "name": "PRESUNTO",
            "bar": 3,
            "vila": 6,
            "qty": 9,
            "category": "pizza"
          },
          {
            "name": "CAIÇARA",
            "bar": 5,
            "vila": 3,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CALABRESA BARBEBUE",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "Pizza de mussarela+Pizza de calabresa",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CÊ QUE SABE",
            "bar": 0,
            "vila": 8,
            "qty": 8,
            "category": "pizza"
          },
          {
            "name": "CROCANTE",
            "bar": 7,
            "vila": 0,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "CHEDDAR",
            "bar": 6,
            "vila": 1,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "PEPPERONI",
            "bar": 4,
            "vila": 3,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "BACON",
            "bar": 0,
            "vila": 7,
            "qty": 7,
            "category": "pizza"
          },
          {
            "name": "PERÚ",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "LOMBO",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "CAMARÃO / CATUPIRY",
            "bar": 0,
            "vila": 6,
            "qty": 6,
            "category": "pizza"
          },
          {
            "name": "JAMAICANA",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "Baiana",
            "bar": 0,
            "vila": 5,
            "qty": 5,
            "category": "pizza"
          },
          {
            "name": "STROGONOFF",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "pizza"
          },
          {
            "name": "MEXICANA",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "NAPOLITANA",
            "bar": 2,
            "vila": 1,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "SEI LÁ",
            "bar": 1,
            "vila": 2,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "FRANGO COMPLETA",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "PODE SER",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "pizza"
          },
          {
            "name": "PERUANA",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "MILHO",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "TANTO FAZ",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "SICILIANA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "MARGUERITA",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "pizza"
          },
          {
            "name": "PRESUNTO CATUPIRY",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "FRANGO CHEDDAR",
            "bar": 1,
            "vila": 0,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "BIJUPIRA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "ELDORADO",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "PERU",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          },
          {
            "name": "ITALIANA",
            "bar": 0,
            "vila": 1,
            "qty": 1,
            "category": "pizza"
          }
        ],
        "borda": [
          {
            "name": "SEM BORDA",
            "bar": 80,
            "vila": 0,
            "qty": 80,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM CHEESE",
            "bar": 36,
            "vila": 13,
            "qty": 49,
            "category": "borda"
          },
          {
            "name": "BORDA DE CHEDDAR",
            "bar": 28,
            "vila": 13,
            "qty": 41,
            "category": "borda"
          },
          {
            "name": "BORDA DE CHOCOLATE",
            "bar": 19,
            "vila": 10,
            "qty": 29,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM COM ALHO FRITO",
            "bar": 13,
            "vila": 0,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "BORDA DE MUSSARELA",
            "bar": 10,
            "vila": 3,
            "qty": 13,
            "category": "borda"
          },
          {
            "name": "BORDA REQUEIJÃO",
            "bar": 11,
            "vila": 0,
            "qty": 11,
            "category": "borda"
          },
          {
            "name": "BORDA DE CATUPIRY",
            "bar": 0,
            "vila": 10,
            "qty": 10,
            "category": "borda"
          },
          {
            "name": "BORDA DE DOIS QUEIJOS",
            "bar": 7,
            "vila": 1,
            "qty": 8,
            "category": "borda"
          },
          {
            "name": "BORDA DE REQUEIJÃO",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "borda"
          },
          {
            "name": "BORDA DE MUSARELA E PRESUNTO",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
            "bar": 2,
            "vila": 1,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "BORDA DE QUEIJO COM PRESUNTO",
            "bar": 0,
            "vila": 3,
            "qty": 3,
            "category": "borda"
          },
          {
            "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
            "bar": 0,
            "vila": 2,
            "qty": 2,
            "category": "borda"
          }
        ],
        "calzone": [
          {
            "name": "CALAFRANGO",
            "bar": 67,
            "vila": 17,
            "qty": 84,
            "category": "calzone"
          },
          {
            "name": "PIZZA FECHADA",
            "bar": 56,
            "vila": 13,
            "qty": 69,
            "category": "calzone"
          },
          {
            "name": "CALACHEDDAR",
            "bar": 54,
            "vila": 3,
            "qty": 57,
            "category": "calzone"
          },
          {
            "name": "CALAMAR",
            "bar": 20,
            "vila": 3,
            "qty": 23,
            "category": "calzone"
          },
          {
            "name": "CALAMUSSA",
            "bar": 18,
            "vila": 2,
            "qty": 20,
            "category": "calzone"
          },
          {
            "name": "CALACATU",
            "bar": 2,
            "vila": 0,
            "qty": 2,
            "category": "calzone"
          }
        ],
        "sweet": [
          {
            "name": "BRIGADEIRO",
            "bar": 13,
            "vila": 6,
            "qty": 19,
            "category": "sweet"
          },
          {
            "name": "DISQUETE",
            "bar": 6,
            "vila": 0,
            "qty": 6,
            "category": "sweet"
          },
          {
            "name": "PAÇOCA",
            "bar": 5,
            "vila": 1,
            "qty": 6,
            "category": "sweet"
          },
          {
            "name": "PRESTÍGIO",
            "bar": 5,
            "vila": 0,
            "qty": 5,
            "category": "sweet"
          },
          {
            "name": "CHOCOMUSSA",
            "bar": 2,
            "vila": 3,
            "qty": 5,
            "category": "sweet"
          },
          {
            "name": "ROMEU E JULIETA",
            "bar": 0,
            "vila": 4,
            "qty": 4,
            "category": "sweet"
          },
          {
            "name": "CHOCOBIZ",
            "bar": 3,
            "vila": 0,
            "qty": 3,
            "category": "sweet"
          }
        ],
        "other": []
      },
      "stores": {
        "bar": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "qty": 957
            },
            {
              "name": "Media",
              "qty": 312
            },
            {
              "name": "Coca Cola 1L",
              "qty": 144
            },
            {
              "name": "Tuchaua 2L",
              "qty": 107
            },
            {
              "name": "GUARANÁ ANTÁRTICA 1L",
              "qty": 84
            },
            {
              "name": "Coca cola 2L",
              "qty": 68
            },
            {
              "name": "PIZZA FECHADA",
              "qty": 56
            },
            {
              "name": "Tuchaua 1lt",
              "qty": 52
            },
            {
              "name": "Coca Cola 2L zero",
              "qty": 48
            },
            {
              "name": "Coca Cola Zero 1L",
              "qty": 47
            },
            {
              "name": "Pepsi 2L",
              "qty": 44
            },
            {
              "name": "Guaraná da Amazônia",
              "qty": 38
            },
            {
              "name": "Guaraná Antártica 2L",
              "qty": 12
            },
            {
              "name": "BARÉ 2lt",
              "qty": 7
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "qty": 255
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "qty": 181
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "qty": 121
            },
            {
              "name": "SEM BORDA",
              "qty": 80
            },
            {
              "name": "4 QUEIJOS",
              "qty": 77
            },
            {
              "name": "FRANGO",
              "qty": 70
            },
            {
              "name": "CALAFRANGO",
              "qty": 67
            },
            {
              "name": "MUSSARELA",
              "qty": 62
            },
            {
              "name": "MODA DA CASA",
              "qty": 57
            },
            {
              "name": "CALACHEDDAR",
              "qty": 54
            },
            {
              "name": "MISTA",
              "qty": 53
            },
            {
              "name": "BACON II",
              "qty": 47
            },
            {
              "name": "2 Queijos",
              "qty": 45
            },
            {
              "name": "PORTUGUESA",
              "qty": 43
            },
            {
              "name": "CALABRESA BARBECUE",
              "qty": 43
            },
            {
              "name": "FRANGO PHILADPHIA",
              "qty": 37
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "qty": 36
            },
            {
              "name": "ROMANESCA",
              "qty": 33
            },
            {
              "name": "BACON (sem milho)",
              "qty": 32
            },
            {
              "name": "JARDINEIRA",
              "qty": 31
            },
            {
              "name": "3 QUEIJOS",
              "qty": 30
            },
            {
              "name": "BAURU",
              "qty": 30
            },
            {
              "name": "FILÉ",
              "qty": 29
            },
            {
              "name": "BORDA DE CHEDDAR",
              "qty": 28
            },
            {
              "name": "COSTELA",
              "qty": 28
            },
            {
              "name": "FRANGO C/ CHEDDAR",
              "qty": 27
            },
            {
              "name": "FRANGO BARBECUE",
              "qty": 25
            },
            {
              "name": "HOLANDESA",
              "qty": 25
            },
            {
              "name": "CAMARÃO C/ CATUPIRY",
              "qty": 25
            },
            {
              "name": "CALABRESA ESPECIAL",
              "qty": 23
            },
            {
              "name": "CAMARÃO",
              "qty": 23
            },
            {
              "name": "Pizza de calabresa+ Pizza de Mussarela",
              "qty": 23
            },
            {
              "name": "CALAMAR",
              "qty": 20
            },
            {
              "name": "COSTELA ESPECIAL",
              "qty": 19
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "qty": 19
            },
            {
              "name": "CALAMUSSA",
              "qty": 18
            },
            {
              "name": "PARISIENSE",
              "qty": 17
            },
            {
              "name": "CE QUE SABE",
              "qty": 16
            },
            {
              "name": "LOBO",
              "qty": 14
            },
            {
              "name": "AMERICANA",
              "qty": 14
            },
            {
              "name": "BORDA DE CREAM COM ALHO FRITO",
              "qty": 13
            },
            {
              "name": "FRANGO CATUPIRY",
              "qty": 13
            },
            {
              "name": "BRIGADEIRO",
              "qty": 13
            },
            {
              "name": "5 QUEIJOS",
              "qty": 11
            },
            {
              "name": "BORDA REQUEIJÃO",
              "qty": 11
            },
            {
              "name": "BURUKUTU",
              "qty": 10
            },
            {
              "name": "BORDA DE MUSSARELA",
              "qty": 10
            },
            {
              "name": "SALAME",
              "qty": 9
            },
            {
              "name": "CAIPIRA",
              "qty": 9
            },
            {
              "name": "VENEZA",
              "qty": 7
            },
            {
              "name": "BORDA DE DOIS QUEIJOS",
              "qty": 7
            },
            {
              "name": "CROCANTE",
              "qty": 7
            },
            {
              "name": "LEÃO",
              "qty": 6
            },
            {
              "name": "CHEDDAR",
              "qty": 6
            },
            {
              "name": "PERÚ",
              "qty": 6
            },
            {
              "name": "LOMBO",
              "qty": 6
            },
            {
              "name": "DISQUETE",
              "qty": 6
            },
            {
              "name": "PAÇOCA",
              "qty": 5
            },
            {
              "name": "PRESTÍGIO",
              "qty": 5
            },
            {
              "name": "BORDA DE REQUEIJÃO",
              "qty": 5
            },
            {
              "name": "CAIÇARA",
              "qty": 5
            },
            {
              "name": "PEPPERONI",
              "qty": 4
            },
            {
              "name": "PRESUNTO",
              "qty": 3
            },
            {
              "name": "MEXICANA",
              "qty": 3
            },
            {
              "name": "BORDA DE MUSARELA E PRESUNTO",
              "qty": 3
            },
            {
              "name": "CHOCOBIZ",
              "qty": 3
            },
            {
              "name": "CHOCOMUSSA",
              "qty": 2
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "qty": 2
            },
            {
              "name": "PERUANA",
              "qty": 2
            },
            {
              "name": "MILHO",
              "qty": 2
            },
            {
              "name": "CALACATU",
              "qty": 2
            },
            {
              "name": "NAPOLITANA",
              "qty": 2
            },
            {
              "name": "SEI LÁ",
              "qty": 1
            },
            {
              "name": "PRESUNTO CATUPIRY",
              "qty": 1
            },
            {
              "name": "FRANGO CHEDDAR",
              "qty": 1
            }
          ],
          "principaisTotal": 1976,
          "saboresTotal": 2078
        },
        "vila": {
          "principais": [
            {
              "name": "GRANDE (35 CM)",
              "qty": 377
            },
            {
              "name": "Media",
              "qty": 117
            },
            {
              "name": "Coca-Cola 1 litro",
              "qty": 62
            },
            {
              "name": "GUARANÁ ANTARTICA 1 LITRO",
              "qty": 37
            },
            {
              "name": "REFRIGERANTE TUCHAUA - 2L",
              "qty": 34
            },
            {
              "name": "COCA COLA - 2L",
              "qty": 30
            },
            {
              "name": "coca cola zero 2L",
              "qty": 19
            },
            {
              "name": "TUCHAUA DE 1 LITRO",
              "qty": 13
            },
            {
              "name": "PIZZA FECHADA",
              "qty": 13
            },
            {
              "name": "Coca-cola Zero 1L",
              "qty": 12
            },
            {
              "name": "Guaraná Amazônia",
              "qty": 11
            },
            {
              "name": "Pepsi 2L",
              "qty": 7
            },
            {
              "name": "Bare 2L",
              "qty": 5
            }
          ],
          "sabores": [
            {
              "name": "PAULISTA",
              "qty": 117
            },
            {
              "name": "FRANGO C/ CATUPIRY",
              "qty": 58
            },
            {
              "name": "PORTUGUESA",
              "qty": 41
            },
            {
              "name": "FRANGO",
              "qty": 39
            },
            {
              "name": "MISTA",
              "qty": 30
            },
            {
              "name": "MODA DA CASA",
              "qty": 28
            },
            {
              "name": "CAMARÃO",
              "qty": 24
            },
            {
              "name": "COSTELA",
              "qty": 22
            },
            {
              "name": "CALABRESA C/ CATUPIRY",
              "qty": 21
            },
            {
              "name": "CALAFRANGO",
              "qty": 17
            },
            {
              "name": "4 QUEIJOS",
              "qty": 17
            },
            {
              "name": "BAURU",
              "qty": 14
            },
            {
              "name": "3 QUEIJOS",
              "qty": 13
            },
            {
              "name": "BORDA DE CHEDDAR",
              "qty": 13
            },
            {
              "name": "BORDA DE CREAM CHEESE",
              "qty": 13
            },
            {
              "name": "CALABRESA PHILADELPHIA",
              "qty": 12
            },
            {
              "name": "BACON II",
              "qty": 11
            },
            {
              "name": "FRANGO PHILADELPHIA",
              "qty": 11
            },
            {
              "name": "NORDESTINA",
              "qty": 11
            },
            {
              "name": "COSTELA ESPECIAL",
              "qty": 11
            },
            {
              "name": "BORDA DE CATUPIRY",
              "qty": 10
            },
            {
              "name": "BORDA DE CHOCOLATE",
              "qty": 10
            },
            {
              "name": "JARDINEIRA",
              "qty": 10
            },
            {
              "name": "VENEZA",
              "qty": 10
            },
            {
              "name": "AMERICANA",
              "qty": 10
            },
            {
              "name": "FILÉ",
              "qty": 10
            },
            {
              "name": "2 QUEIJOS",
              "qty": 10
            },
            {
              "name": "HOLANDESA",
              "qty": 9
            },
            {
              "name": "ROMANESCA",
              "qty": 9
            },
            {
              "name": "CALABRESA BARBEBUE",
              "qty": 8
            },
            {
              "name": "Pizza de mussarela+Pizza de calabresa",
              "qty": 8
            },
            {
              "name": "CÊ QUE SABE",
              "qty": 8
            },
            {
              "name": "MUSSARELA",
              "qty": 8
            },
            {
              "name": "CALABRESA ESPECIAL",
              "qty": 8
            },
            {
              "name": "BACON",
              "qty": 7
            },
            {
              "name": "BRIGADEIRO",
              "qty": 6
            },
            {
              "name": "BURUKUTU",
              "qty": 6
            },
            {
              "name": "PRESUNTO",
              "qty": 6
            },
            {
              "name": "CAMARÃO / CATUPIRY",
              "qty": 6
            },
            {
              "name": "CAIPIRA",
              "qty": 5
            },
            {
              "name": "JAMAICANA",
              "qty": 5
            },
            {
              "name": "Baiana",
              "qty": 5
            },
            {
              "name": "ROMEU E JULIETA",
              "qty": 4
            },
            {
              "name": "PARISIENSE",
              "qty": 4
            },
            {
              "name": "LEÃO",
              "qty": 4
            },
            {
              "name": "FRANGO COM CHEDDAR",
              "qty": 4
            },
            {
              "name": "STROGONOFF",
              "qty": 4
            },
            {
              "name": "BORDA DE MUSSARELA",
              "qty": 3
            },
            {
              "name": "CALAMAR",
              "qty": 3
            },
            {
              "name": "FRANGO BARBECUE",
              "qty": 3
            },
            {
              "name": "CAIÇARA",
              "qty": 3
            },
            {
              "name": "FRANGO COMPLETA",
              "qty": 3
            },
            {
              "name": "LOBO",
              "qty": 3
            },
            {
              "name": "PODE SER",
              "qty": 3
            },
            {
              "name": "PEPPERONI",
              "qty": 3
            },
            {
              "name": "CALACHEDDAR",
              "qty": 3
            },
            {
              "name": "CHOCOMUSSA",
              "qty": 3
            },
            {
              "name": "BORDA DE QUEIJO COM PRESUNTO",
              "qty": 3
            },
            {
              "name": "TANTO FAZ",
              "qty": 2
            },
            {
              "name": "CALAMUSSA",
              "qty": 2
            },
            {
              "name": "BORDA DE CREAM CHEESE COM ALHO FRITO",
              "qty": 2
            },
            {
              "name": "SICILIANA",
              "qty": 2
            },
            {
              "name": "SEI LÁ",
              "qty": 2
            },
            {
              "name": "MARGUERITA",
              "qty": 2
            },
            {
              "name": "NAPOLITANA",
              "qty": 1
            },
            {
              "name": "BIJUPIRA",
              "qty": 1
            },
            {
              "name": "ELDORADO",
              "qty": 1
            },
            {
              "name": "CHEDDAR",
              "qty": 1
            },
            {
              "name": "5 QUEIJOS",
              "qty": 1
            },
            {
              "name": "BORDA DE DOIS QUEIJOS",
              "qty": 1
            },
            {
              "name": "BORDA ROMEU E JULIETA(CREAM CHEESE COM CREME DE GOIABA)",
              "qty": 1
            },
            {
              "name": "PERU",
              "qty": 1
            },
            {
              "name": "PAÇOCA",
              "qty": 1
            },
            {
              "name": "ITALIANA",
              "qty": 1
            },
            {
              "name": "SALAME",
              "qty": 1
            }
          ],
          "principaisTotal": 737,
          "saboresTotal": 773
        }
      }
    }
  },
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
    { k: "anota", store: "both", en: "Anota Oct sales on the order CSV are R$ 105.800,01 (cancelled excluded). The 03/11 screenshot total was R$ 100.810 because Barcarena was a partial pull (R$ 71.343,51). Stone credited R$ 78.987,35. Gap vs Stone on the order CSV is R$ 26.812,66, card fees plus cash and Pix outside the machine. Lucas/Fabiana 03/11: little cash vs card/Pix; most 'cash'-tagged orders are really customer Pix; counter staff also log cash as Pix; real cash goes mostly to pay employees, plus purchases/refrigerante. Cash paid out is not tracked.", pt: "Vendas Anota out no CSV de pedidos: R$ 105.800,01 (sem cancelados). O total do print de 03/11 era R$ 100.810 porque Barcarena estava parcial (R$ 71.343,51). Stone creditado R$ 78.987,35. Diferença contra a Stone no CSV: R$ 26.812,66, taxa de cartão mais dinheiro e Pix fora da maquininha. Lucas/Fabiana 03/11: pouco dinheiro vivo comparado a cartão/Pix; a maioria dos pedidos marcados como dinheiro é Pix do cliente; balcão também lança dinheiro como Pix; o dinheiro vivo vai principalmente para pagar funcionários, além de compras/refrigerante. Saídas em dinheiro não são registradas." }
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
