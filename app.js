/* Paulista OS – app logic. Plain JS, no build. */
(function () {
  const D = window.PDATA, I = window.I18N;
  const LS = { lang: "pos.lang", view: "pos.view", pays: "pos.payments", ap: "pos.approvals" };
  let lang = localStorage.getItem(LS.lang) || "pt";
  const t = (k) => (I[lang] && I[lang][k]) || I.en[k] || k;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const brl = (n, d = 2) => n == null ? "—" : "R$ " + Number(n).toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d });
  const int = (n) => Number(n).toLocaleString(lang === "pt" ? "pt-BR" : "en-US");
  const parseD = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const iso = (dt) => dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  const fmtD = (s) => { const dt = typeof s === "string" ? parseD(s) : s; return dt.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { day: "2-digit", month: "short", year: "numeric" }); };
  const WEEKDAY_PT = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const fmtStart = (s) => {
    const dt = parseD(s);
    if (lang === "pt") return String(dt.getDate()).padStart(2, "0") + "/" + String(dt.getMonth() + 1).padStart(2, "0") + "/" + dt.getFullYear();
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };
  const fmtStartShort = (s) => {
    const dt = parseD(s);
    if (lang === "pt") return String(dt.getDate()).padStart(2, "0") + "/" + String(dt.getMonth() + 1).padStart(2, "0");
    return dt.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  const fmtStartLong = (s) => {
    const dt = parseD(s);
    return lang === "pt" ? WEEKDAY_PT[dt.getDay()] + " " + fmtStart(s) : dt.toLocaleDateString("en-US", { weekday: "long" }) + ", " + fmtStart(s);
  };
  const addDays = (s, n) => { const dt = parseD(s); dt.setDate(dt.getDate() + n); return iso(dt); };
  const load = (k, def) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } };
  const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
  const txt = (v) => v && typeof v === "object" ? (v[lang] || v.en) : v;

  // Flat top-tab order; same section ids as before.
  const NAV = [
    ["dashboard", "M3 13h8V3H3zM13 21h8V11h-8zM3 21h8v-6H3zM13 3v6h8V3z"],
    ["profit", "M4 19V5M4 19h16M8 16l4-5 3 3 5-7"],
    ["cash", "M2 7h20v10H2zM12 9a3 3 0 100 6 3 3 0 000-6z"],
    ["approvals", "M9 11l3 3 8-8M20 12v7H4V5h11"],
    ["sales", "M4 20V10M10 20V4M16 20v-7M22 20H2"],
    ["items", "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"],
    ["menu", "M12 2L2 20h20zM9 13h.01M14 15h.01M12 9h.01"],
    ["stores", "M3 9l2-5h14l2 5M4 9v11h16V9M9 20v-6h6v6"],
    ["suppliers", "M1 7h13v10H1zM14 10h4l4 4v3h-8M5 20a2 2 0 100-4 2 2 0 000 4zM18 20a2 2 0 100-4 2 2 0 000 4z"]
  ];
  const ico = (d) => `<span class="tabico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg></span>`;

  /* ---------- Debt model ---------- */
  const debtStart = () => D.debt.bar + D.debt.vila;
  const payments = () => load(LS.pays, []);
  const paidTotal = () => payments().reduce((a, p) => a + Number(p.amount || 0), 0);
  const remaining = () => Math.max(0, debtStart() - paidTotal());
  function schedule() {
    const rows = []; let bal = debtStart(), w = 0;
    while (bal > 0.005) { const pay = Math.min(D.debt.weekly, bal); bal = Math.round((bal - pay) * 100) / 100; w++;
      rows.push({ w, date: addDays(D.debt.start, 7 * (w - 1)), end: addDays(D.debt.start, 7 * (w - 1) + 6), pay, bal }); }
    return rows;
  }
  const weeksLeft = () => Math.ceil(remaining() / D.debt.weekly);
  const zeroWeek = () => { const n = weeksLeft(); return n ? addDays(nextPayDate(), 7 * (n - 1)) : null; };
  function nextPayDate() { const today = iso(new Date()); const paidN = Math.floor(paidTotal() / D.debt.weekly);
    let d = addDays(D.debt.start, 7 * paidN); while (d < today && d < addDays(D.debt.start, 7 * 40)) d = addDays(d, 7); return d < D.debt.start ? D.debt.start : d; }
  const pending = () => approvals().filter((a) => a.status === "pending").length;

  /* ---------- Approvals model ---------- */
  function approvals() { let a = load(LS.ap, null); const mk = (x) => ({ ...x, by: "manager", status: "pending", sample: true });
    if (!a) { a = D.approvalsSeed.map(mk).sort((x, y) => x.date.localeCompare(y.date)); save(LS.ap, a); return a; }
    const ret = D.retiredSeeds || [], have = new Set(a.map((x) => x.id)); let ch = false;
    const b = a.filter((x) => !(x.sample && x.status === "pending" && ret.includes(x.id))); if (b.length !== a.length) ch = true;
    D.approvalsSeed.forEach((x) => { if (!have.has(x.id)) { b.push(mk(x)); ch = true; } });
    if (ch) { b.sort((x, y) => x.date.localeCompare(y.date)); save(LS.ap, b); } return b; }

  /* ---------- Render helpers ---------- */
  const kpi = (label, val, sub, cls = "") => `<div class="kpi ${cls}"><div class="kl">${esc(label)}</div><div class="kv">${val}</div>${sub ? `<div class="ks">${sub}</div>` : ""}</div>`;
  const card = (title, hint, body) => `<section class="card"><h2>${esc(title)}</h2>${hint ? `<p class="hint">${esc(hint)}</p>` : ""}${body}</section>`;
  const src = (s, d, fmt = fmtD) => `<p class="src">${t("source")}: ${esc(s)}${d ? " · " + t("asof") + " " + fmt(d) : ""}</p>`;
  const table = (head, rows, cls = "") => `<div class="tw"><table class="${cls}"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const rulesBox = () => `<section class="card rules"><h2>${t("rules_title")}</h2><ol>${D.rules.map((r) => `<li>${esc(t("rule_" + r))}</li>`).join("")}</ol></section>`;
  const sname = (id) => id === "both" ? t("both") : t(id);
  const bar = (pct) => `<div class="pbar"><div style="width:${Math.min(100, pct).toFixed(1)}%"></div></div>`;

  /* ---------- Daily Anota series ---------- */
  const DAILY_WINDOW = 30;
  let dailyShowAll = false;
  const numOrNull = (v) => { if (v == null || v === "") return null; const n = Number(v); return Number.isFinite(n) ? n : null; };
  const cellInt = (n) => n == null ? "—" : int(n);
  function dailyRows() {
    const raw = Array.isArray(D.dailySales) ? D.dailySales : [];
    const byDate = new Map();
    raw.forEach((r) => {
      if (!r || typeof r.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(r.date)) return;
      byDate.set(r.date, r);
    });
    return [...byDate.values()].sort((a, b) => b.date.localeCompare(a.date));
  }
  function storeDay(row, id) {
    const s = row && row[id];
    if (!s || typeof s !== "object") return { revenue: null, orders: null, ticket: null };
    const revenue = numOrNull(s.revenue), orders = numOrNull(s.orders);
    let ticket = numOrNull(s.ticket);
    if (ticket == null && revenue != null && orders) ticket = revenue / orders;
    return { revenue, orders, ticket };
  }
  function featuredDay(rows) {
    if (!rows.length) return null;
    const y = addDays(iso(new Date()), -1);
    return rows.find((r) => r.date === y) || rows[0];
  }
  const dayBits = (x) => {
    const bits = [];
    if (x.orders != null) bits.push(`${int(x.orders)} ${t("k_orders")}`);
    if (x.ticket != null) bits.push(`${t("k_ticket")} ${brl(x.ticket)}`);
    return bits.join(" · ");
  };
  const DAILY_DASH = 14;
  const fill = (str, map) => Object.keys(map).reduce((a, k) => a.split("{" + k + "}").join(map[k]), str);
  function peerStat(id, val, sub) {
    return `<article class="peer ${id}"><div class="pl">${esc(t(id))}</div><div class="pv">${val}</div>${sub ? `<div class="ps">${esc(sub)}</div>` : ""}</article>`;
  }
  function peerCard(id, x, maxRev) {
    const rev = x && x.revenue != null ? x.revenue : null;
    const pct = maxRev > 0 && rev != null && rev > 0 ? Math.max(3, (rev / maxRev) * 100) : 0;
    return `<article class="peer ${id}"><div class="pl">${esc(t(id))}</div><div class="pv">${brl(rev)}</div><div class="ps">${esc(dayBits(x))}</div><div class="track ${id}" aria-hidden="true"><i style="width:${pct.toFixed(1)}%"></i></div></article>`;
  }
  function storePeers(row, maxRev) {
    const b = storeDay(row, "bar"), v = storeDay(row, "vila");
    const max = maxRev == null ? Math.max(b.revenue || 0, v.revenue || 0) : maxRev;
    return `<div class="peers">${peerCard("bar", b, max)}${peerCard("vila", v, max)}</div>`;
  }
  function windowMax(rows) {
    let max = 0;
    rows.forEach((r) => { max = Math.max(max, storeDay(r, "bar").revenue || 0, storeDay(r, "vila").revenue || 0); });
    return max;
  }
  function dailyBars(rows, maxRev) {
    const max = maxRev == null ? windowMax(rows) : maxRev;
    const line = (id, x) => {
      const pct = max > 0 && x.revenue != null && x.revenue > 0 ? Math.max(2, (x.revenue / max) * 100) : 0;
      return `<div class="storeline ${id}"><span class="sn">${esc(t(id))}</span><span class="track ${id}" aria-hidden="true"><i style="width:${pct.toFixed(1)}%"></i></span><span class="storeamt"><b>${brl(x.revenue)}</b><span class="storeord">${cellInt(x.orders)} ${esc(t("k_orders"))}</span></span></div>`;
    };
    const loc = lang === "pt" ? "pt-BR" : "en-US";
    const wk = (s) => parseD(s).toLocaleDateString(loc, { weekday: "short" }).replace(/\./g, "");
    const shortD = (s) => {
      const dt = parseD(s);
      const day = String(dt.getDate()).padStart(2, "0");
      const mon = dt.toLocaleDateString(loc, { month: "short" }).replace(/\./g, "");
      return lang === "pt" ? `${day} ${mon}` : `${mon} ${day}`;
    };
    return `<div class="daybars" role="list">${rows.map((r) => {
      const b = storeDay(r, "bar"), v = storeDay(r, "vila");
      const dow = parseD(r.date).getDay();
      const weekend = dow === 0 || dow === 6 ? " weekend" : "";
      return `<article class="dayrow${weekend}" role="listitem" title="${esc(fmtD(r.date))}"><div class="dayhead"><span class="daywk">${esc(wk(r.date))}</span><span class="daydate">${esc(shortD(r.date))}</span></div>${line("bar", b)}${line("vila", v)}</article>`;
    }).join("")}</div>`;
  }
  function dailySource(rows, feat) {
    return (feat && feat.source) || rows.map((r) => r.source).find(Boolean) || "Anota AI";
  }

  /* ---------- Item mix (Anota Principais + Sabores) ---------- */
  const ITEM_CATS = ["size", "soda", "pizza", "borda", "calzone", "sweet", "other"];
  const ITEM_TOP = 5;
  let itemStore = "split", itemCat = "all", itemQuery = "", itemPeriod = -1;
  const fold = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function itemPeriods() {
    const block = D.itemSales;
    if (!block) return [];
    if (Array.isArray(block.periods)) return block.periods.filter(Boolean);
    if (block.byCategory || block.combined) return [block];
    return [];
  }
  function itemPeriodIndex() {
    const ps = itemPeriods();
    if (!ps.length) return -1;
    if (itemPeriod >= 0 && itemPeriod < ps.length) return itemPeriod;
    const id = D.itemSales && D.itemSales.defaultPeriod;
    const found = id ? ps.findIndex((p) => p.id === id) : -1;
    return found >= 0 ? found : 0;
  }
  function currentItems() {
    const ps = itemPeriods();
    const i = itemPeriodIndex();
    return i < 0 ? null : ps[i];
  }
  function itemChipLabel(p) {
    if (lang === "en" && p && p.periodLabel) return p.periodLabel;
    return itemRange(p);
  }
  function itemPeriodChips() {
    const ps = itemPeriods();
    if (ps.length < 2) return "";
    const cur = itemPeriodIndex();
    return `<div class="chips">${ps.map((p, i) => `<button type="button" class="${i === cur ? "on" : ""}" data-itemperiod="${i}">${esc(itemChipLabel(p))}</button>`).join("")}</div>`;
  }
  function itemSkus(p) {
    if (!p) return [];
    const rows = [];
    const push = (r, cat) => {
      if (!r || r.name == null) return;
      const bar = Number(r.bar) || 0, vila = Number(r.vila) || 0;
      const qty = r.qty == null ? bar + vila : Number(r.qty);
      if (!Number.isFinite(qty)) return;
      rows.push({ name: String(r.name), bar, vila, qty, category: r.category || cat || "other" });
    };
    if (p.byCategory && typeof p.byCategory === "object") {
      Object.entries(p.byCategory).forEach(([cat, arr]) => { if (Array.isArray(arr)) arr.forEach((r) => push(r, cat)); });
      return rows;
    }
    const c = p.combined || {};
    ["principais", "sabores"].forEach((k) => { if (Array.isArray(c[k])) c[k].forEach((r) => push(r)); });
    return rows;
  }
  function itemMeasure(r) { return itemStore === "bar" ? r.bar : itemStore === "vila" ? r.vila : r.bar + r.vila; }
  function visibleItems(rows) {
    const q = fold(itemQuery.trim());
    let list = rows.filter((r) => (itemCat === "all" || r.category === itemCat));
    if (itemStore === "bar") list = list.filter((r) => r.bar > 0);
    if (itemStore === "vila") list = list.filter((r) => r.vila > 0);
    if (q) list = list.filter((r) => fold(r.name).includes(q));
    return list.sort((a, b) => itemMeasure(b) - itemMeasure(a) || a.name.localeCompare(b.name));
  }
  function itemRange(p) {
    if (p && Array.isArray(p.period) && p.period.length === 2) return `${fmtD(p.period[0])} – ${fmtD(p.period[1])}`;
    return (p && p.periodLabel) || "";
  }
  const itemTr = (r) => {
    const b = itemStore === "bar" ? `<b>${int(r.bar)}</b>` : int(r.bar);
    const v = itemStore === "vila" ? `<b>${int(r.vila)}</b>` : int(r.vila);
    return `<tr><td>${esc(r.name)}</td><td>${b}</td><td>${v}</td><td>${esc(t("cat_" + r.category))}</td></tr>`;
  };
  function itemTable(rows) {
    const head = [t("m_item"), t("bar"), t("vila"), t("items_cat")];
    const body = rows.length ? rows.map(itemTr).join("") : `<tr><td colspan="4">${esc(t("items_none"))}</td></tr>`;
    return `<div class="tw"><table class="num compact mix"><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody id="itembody">${body}</tbody></table></div>`;
  }
  function paintItems() {
    const rows = visibleItems(itemSkus(currentItems()));
    const body = document.getElementById("itembody");
    if (body) body.innerHTML = rows.length ? rows.map(itemTr).join("") : `<tr><td colspan="4">${esc(t("items_none"))}</td></tr>`;
    const c = document.getElementById("itemcount");
    if (c) c.textContent = `${int(rows.length)} ${t("items_rows")}`;
  }
  function itemMini(title, rows, shown) {
    const head = [t("m_item"), t("bar"), t("vila")];
    const body = rows.map((r) => [esc(r.name), int(r.bar), int(r.vila)]);
    const n = shown == null ? body.length : shown;
    const note = shown == null ? "" : `<p class="hint">${esc(t("items_showing"))} ${int(Math.min(n, rows.length))} / ${int(rows.length)}</p>`;
    return `<h3>${esc(title)}</h3>${note}${table(head, body.slice(0, n), "num compact")}`;
  }
  const pairNums = (a, b) => `<span class="pairn"><span>${int(a)}</span><span>${int(b)}</span></span>`;
  function itemDashCard() {
    const p = currentItems();
    if (!p) return card(t("items_title"), t("items_empty"), "");
    const skus = itemSkus(p);
    const by = (cat) => skus.filter((r) => r.category === cat).sort((a, b) => b.qty - a.qty || a.name.localeCompare(b.name));
    const sizes = by("size"), pizzas = by("pizza"), sodas = by("soda");
    const sodaBar = sodas.reduce((a, r) => a + r.bar, 0);
    const sodaVila = sodas.reduce((a, r) => a + r.vila, 0);
    const sizeKpis = sizes.slice(0, 4).map((r) => kpi(r.name, pairNums(r.bar, r.vila), `${t("bar")} · ${t("vila")}`)).join("");
    return card(t("items_title"), `${itemRange(p)}. ${t("items_dash_hint")}`,
      `${itemPeriodChips()}
      <div class="kpis">${sizeKpis}${kpi(t("items_soda_units"), pairNums(sodaBar, sodaVila), `${t("bar")} · ${t("vila")} · ${t("items_soda_sub")}`)}</div>
      ${itemMini(t("items_sizes"), sizes)}
      ${itemMini(t("items_top_pizza"), pizzas, ITEM_TOP)}
      ${itemMini(t("items_top_soda"), sodas, ITEM_TOP)}
      <button class="ghost" type="button" data-view="items">${esc(t("items_full"))}</button>
      ${src(p.source || "Anota AI", p.asOf)}`);
  }

  /* ---------- Views ---------- */
  const V = {};
  V.dashboard = () => {
    const s = D.sales, st = D.stone, rem = remaining(), raise = D.menu.effective, today = iso(new Date());
    const days = Math.round((parseD(raise) - parseD(today)) / 864e5);
    const raiseSub = days > 0 ? `${days} ${t("k_days")}` : days === 0 ? t("k_today") : t("k_live");
    const raiseNote = fill(t("dash_raise"), { when: fmtStartLong(raise), printed: fmtStartLong(D.menu.printed || raise) });
    const z = zeroWeek();
    const dRows = dailyRows(), feat = featuredDay(dRows);
    let dailyCard;
    if (!feat) {
      dailyCard = card(t("ds_title"), t("ds_empty_dash"), "");
    } else {
      const isY = feat.date === addDays(today, -1);
      const slice = dRows.slice(0, DAILY_DASH);
      const max = windowMax(slice);
      const count = dRows.length > slice.length ? `${int(slice.length)} / ${int(dRows.length)} ${t("ds_days")}` : `${int(slice.length)} ${t("ds_days")}`;
      dailyCard = card(t("ds_title"), t("ds_dash_hint"),
        `<h3>${esc(isY ? t("ds_yesterday") : t("ds_latest"))} · ${fmtD(feat.date)}</h3>
        ${storePeers(feat)}
        <h3>${esc(t("ds_recent"))}</h3><p class="hint">${esc(count)} · ${esc(t("ds_scale"))}</p>
        ${dailyBars(slice, max)}
        <button class="ghost" type="button" data-view="sales">${esc(t("ds_full"))}</button>
        ${src(dailySource(dRows, feat), feat.date)}`);
    }
    const hero = `<section class="hero"><img class="herologo" src="assets/logo.jpg" alt="Pizzaria do Paulista" width="84" height="84">
      <div class="herotxt"><div class="herotag">${t("brand_tag")}</div><div class="heroline">${t("brand_line")}</div>
      <div class="phones">${D.stores.map((x) => `<a class="phonepill" href="tel:+55${x.phone.replace(/\D/g, "")}"><b>${t(x.id)}</b> ${esc(x.phone)}</a>`).join("")}</div></div>
      <div class="heroimg" aria-hidden="true"></div></section>`;
    const planNote = fill(t("plan_note"), { bar: brl(D.debt.bar, 0), vila: brl(D.debt.vila, 0), paid: brl(paidTotal(), 0), left: brl(rem, 0) });
    return hero + dailyCard + itemDashCard() + card(t("dash_title"), t("dash_hint"),
      `<div class="kpis">${kpi(t("k_weeks"), weeksLeft(), t("shared_plan"))}
      ${kpi(t("k_zero"), z ? fmtD(z) : "✓", z ? `${t("wk_of")} ${fmtD(z)} – ${fmtD(addDays(z, 6))}` : t("shared_plan"))}
      ${kpi(t("k_raise"), esc(fmtStart(raise)), `${raiseSub} · ${t("both_stores")}`, "accent")}
      ${kpi(t("k_pending"), pending(), "", pending() ? "warn" : "")}</div>
      <p class="hint">${esc(raiseNote)}</p>
      ${bar(paidTotal() / debtStart() * 100)}<p class="hint">${esc(planNote)}</p>` ) +
      `<div class="two">${["bar", "vila"].map((id) => card(t(id), "",
        `<div class="kpis sm">${kpi(t("k_octsales"), brl(s[id].revenue), `${int(s[id].orders)} ${t("k_orders")} · ${t("k_ticket")} ${brl(s[id].ticket)}`)}
        ${kpi(t("k_debt"), brl(D.debt[id], 0), t("source") + ": 02/11")}
        ${kpi(t("k_cash"), brl(D.cashToday[id]), `${t("c_cover")}: ${(D.cashToday[id] / D.debt[id] * 100).toFixed(1)}% · ${t("c_close")} ${brl(st[id].close)}`)}</div>`)).join("")}</div>` +
      card(t("notes_title"), "", `<ul class="notes">${D.notes.map((n) => `<li><span class="tag">${sname(n.store)}</span> ${esc(txt(n))}</li>`).join("")}</ul>${src("03/11 + Stone Oct", D.asOf)}`) + rulesBox();
  };
  V.cash = () => {
    const s = D.stone, p = D.stoneSep;
    const income = [["c_in", "inflow", true], ["c_sales", "sales", false], ["c_pix", "pixMaq", false], ["c_card", "card", false]];
    const expense = [["c_out", "outflow", true], ["c_sup", "suppliers", false], ["c_drinks", "drinks", false], ["c_util", "utilities", false], ["c_rent", "rent", false], ["c_gm", "gm", false], ["c_people", "people", false], ["c_pers", "personal", false], ["c_fees", "fees", false]];
    const subKey = { c_pix: true, c_card: true };
    const moneyCell = (oct, sep) => {
      const main = typeof oct === "number" ? brl(oct) : esc(oct);
      const sepHtml = sep == null ? "" : `<span class="sepn">${esc(t("c_sep_store"))} ${typeof sep === "number" ? brl(sep) : esc(sep)}</span>`;
      return `<span class="bamt"><b>${main}</b>${sepHtml}</span>`;
    };
    const lines = (id, rows) => rows.map(([lk, key, strong]) => `<div class="bline${strong ? " strong" : ""}${subKey[lk] ? " sub" : ""}"><span>${esc(t(lk))}</span>${moneyCell(s[id][key], p[id][key])}</div>`).join("");
    const book = (id, rows) => `<article class="book ${id}"><h3>${esc(t(id))}</h3>${lines(id, rows)}</article>`;
    const books = (kind, rows) => `<div class="books ${kind}">${["bar", "vila"].map((id) => book(id, rows)).join("")}</div>`;
    const bal = (id) => {
      const store = D.stores.find((x) => x.id === id);
      return `<article class="book ${id}"><h3>${esc(t(id))}</h3><p class="acct">${esc(store.stone)}</p>
        <div class="bline strong"><span>${esc(t("c_close"))}</span>${moneyCell(s[id].close, p[id].close)}</div>
        <div class="bline strong"><span>${esc(t("c_today"))} ${esc(fmtD(D.cashToday.date))}</span>${moneyCell(D.cashToday[id])}</div>
        <div class="bline"><span>${esc(t("c_open"))}</span>${moneyCell(s[id].open, p[id].open)}</div>
        <div class="bline"><span>${esc(t("c_low"))}</span>${moneyCell(s[id].low, p[id].low)}</div>
        <div class="bline"><span>${esc(t("c_cover"))}</span>${moneyCell((s[id].close / D.debt[id] * 100).toFixed(1) + "%")}</div></article>`;
    };
    const catLabel = (c) => t({ suppliers: "c_sup", rent: "c_rent", utilities: "c_util", drinks: "c_drinks", fees: "c_fees", personal: "c_pers", people: "c_people", gm: "c_gm" }[c] || c);
    const moves = Array.isArray(D.cashToday.moves) ? D.cashToday.moves : [];
    const moveLines = (id) => moves.filter((m) => m.store === id).map((m) => {
      const cat = catLabel(m.category);
      return `<div class="bline"><span>${esc(fmtD(m.date))} · ${esc(m.label)} · ${esc(cat)}</span>${moneyCell(m.amount)}</div>`;
    }).join("");
    const moveBook = (id) => `<article class="book ${id}"><h3>${esc(t(id))}</h3>${moveLines(id) || `<p class="hint">${esc(t("cash_receipts_none"))}</p>`}</article>`;
    const movesBlock = moves.length ? `<h3 class="sec out">${esc(t("cash_receipts"))}</h3><p class="hint">${esc(t("cash_receipts_hint"))}</p><div class="books expense">${["bar", "vila"].map(moveBook).join("")}</div>` : "";
    return card(t("cash_title"), t("cash_hint"),
      `<h3 class="sec bal">${esc(t("cash_balances"))}</h3>
      <div class="books balance">${["bar", "vila"].map(bal).join("")}</div>
      ${movesBlock}
      <h3 class="sec in">${esc(t("cash_income"))}</h3><p class="hint">${esc(t("cash_sep_hint"))}</p>
      ${books("income", income)}
      <h3 class="sec out">${esc(t("cash_expenses"))}</h3>
      ${books("expense", expense)}
      <p class="flag">${esc(t("cash_flag"))}</p>${src(s.source)}${src(p.source)}${src(D.cashToday.source, D.cashToday.date)}`) +
      card(t("cash_rule_t"), "", `<p class="rule">${esc(t("cash_rule"))}</p>`) + rulesBox();
  };
  V.sales = () => {
    const rows = dailyRows(), feat = featuredDay(rows);
    let daily;
    if (!feat) {
      daily = card(t("ds_title"), t("ds_hint"), `<p class="hint">${esc(t("ds_empty"))}</p>`);
    } else {
      const isY = feat.date === addDays(iso(new Date()), -1);
      const visible = dailyShowAll ? rows : rows.slice(0, DAILY_WINDOW);
      const max = windowMax(visible);
      const bars = dailyBars(visible, max);
      const scrolled = dailyShowAll && rows.length > DAILY_WINDOW ? `<div class="daylist">${bars}</div>` : bars;
      const more = rows.length <= DAILY_WINDOW ? "" : dailyShowAll
        ? `<button class="ghost" id="dailyless" type="button">${esc(t("ds_less"))}</button>`
        : `<button class="ghost" id="dailymore" type="button">${esc(t("ds_more"))} (${int(rows.length - DAILY_WINDOW)})</button>`;
      const count = visible.length === rows.length ? `${int(rows.length)} ${t("ds_days")}` : `${int(visible.length)} / ${int(rows.length)} ${t("ds_days")}`;
      daily = card(t("ds_title"), t("ds_hint"),
        `<h3>${esc(isY ? t("ds_yesterday") : t("ds_latest"))} · ${fmtD(feat.date)}</h3>
        ${storePeers(feat)}
        <h3>${esc(t("ds_recent"))}</h3><p class="hint">${esc(count)} · ${esc(t("ds_scale"))}</p>
        ${scrolled}${more}${src(dailySource(rows, feat), feat.date)}`);
    }
    const s = D.sales;
    const sumRev = s.bar.revenue + s.vila.revenue;
    const row = (id) => {
      const x = s[id];
      return [t(id), brl(x.revenue), int(x.orders), brl(x.ticket), (x.revenue / sumRev * 100).toFixed(1) + "%", brl(x.revenue / 31)];
    };
    const raiseBits = (id) => {
      const mo = s[id].orders * 5, wk = mo * 12 / 52;
      return `<b>${esc(t(id))}</b> ${brl(mo, 0)} ${t("s_permo")} · ${brl(wk, 0)} ${t("s_perwk")} (${int(s[id].orders)} × R$ 5)`;
    };
    return daily + card(t("sales_title"), t("sales_hint"),
      `${storePeers(s)}
      ${table(["", t("s_rev"), t("s_orders"), t("s_ticket"), t("s_share"), t("s_daily")], [row("bar"), row("vila")], "num")}
      <h3>${t("s_stone")}</h3>${table(["", t("s_rev"), t("s_stonecr"), t("s_gap")], ["bar", "vila"].map((id) => [t(id), brl(s[id].revenue), brl(s[id].stone), brl(s[id].revenue - s[id].stone) + " (" + ((1 - s[id].stone / s[id].revenue) * 100).toFixed(1) + "%)"]), "num")}<p class="flag">${esc(t("s_gap_flag"))}</p>
      <h3>${t("s_raise")}</h3><p class="hint">${esc(t("s_raise_hint"))}</p><p class="hint">${raiseBits("bar")}<br>${raiseBits("vila")}</p>${src(s.source)}`);
  };
  V.items = () => {
    const p = currentItems();
    if (!p) return card(t("items_title"), t("items_empty"), "");
    const skus = itemSkus(p), rows = visibleItems(skus);
    const chips = (key, cur, opts) => `<div class="chips">${opts.map(([id, label]) => `<button type="button" class="${cur === id ? "on" : ""}" data-${key}="${esc(id)}">${esc(label)}</button>`).join("")}</div>`;
    const storeOpts = [["split", t("items_stores")], ["bar", t("bar")], ["vila", t("vila")]];
    const catOpts = [["all", t("items_all")]].concat(ITEM_CATS.map((c) => [c, t("cat_" + c)]));
    return card(t("items_title"), `${itemRange(p)}. ${t("items_hint")}`,
      `${itemPeriodChips()}
      ${chips("itemstore", itemStore, storeOpts)}
      ${chips("itemcat", itemCat, catOpts)}
      <div class="row"><div class="wide"><label for="itemq">${esc(t("items_search"))}</label><input id="itemq" type="search" value="${esc(itemQuery)}" autocomplete="off"></div></div>
      <p class="hint" id="itemcount">${int(rows.length)} ${t("items_rows")}</p>
      ${itemTable(rows)}
      <p class="hint">${esc(t("items_next"))}</p>
      ${src(p.source || "Anota AI", p.asOf)}`);
  };
  V.menu = () => {
    const m = D.menu;
    const when = fmtStartLong(m.effective), printed = fmtStartLong(m.printed || m.effective), d = fmtStartShort(m.effective);
    return card(fill(t("menu_title"), { when }), t("menu_hint"),
      `<p class="flag">${esc(fill(t("menu_launch"), { when, printed }))}</p>` +
      table([t("m_item"), t("m_inc")], m.changes.map((c) => [t("m_" + c.k), `<b>+${brl(c.inc, 0)}</b>`])) ) +
      card(t("m_bands"), "", table([t("m_item"), t("m_before"), fill(t("m_after"), { d }), t("m_inc")],
        m.bands.map((b) => [t(b.k === "calzone" ? "m_calzone" : "m_" + b.k), `${brl(b.lo)} – ${brl(b.hi)}`, `<b>${brl(b.lo + b.inc)} – ${brl(b.hi + b.inc)}</b>`, "+" + brl(b.inc, 0)]), "num") +
        `<p class="hint">${esc(fill(t("m_other"), { when }))}</p>${src("Anota AI cardápio, 2026-10-30", m.effective, fmtStart)}`) +
      card(fill(t("m_sodas"), { d }), "", table([t("m_item"), t("m_before"), fill(t("m_after"), { d })], m.sodas.map((x) => [esc(x.n), brl(x.p), `<b>${brl(x.p + x.inc)}</b>`]), "num") +
        `<p class="flag">${esc(t("m_combo_flag"))}</p>`) +
      card(t("m_flav"), t("m_flav_hint"), `<div class="kpis sm">${kpi(t("m_kept"), m.flavors.kept)}${kpi(t("m_new"), m.flavors.newUnpriced, t("m_unpriced"), "warn")}${kpi(t("m_removed"), m.flavors.removed)}</div>
        <p>${m.flavors.newList.map(esc).join(" · ")}</p>${src(m.flavors.file, "2026-11-03")}`);
  };
  V.stores = () => D.stores.map((s) => {
    const tot = s.fixed.reduce((a, f) => a + f.total, 0);
    return card(t(s.id), "", `<dl class="facts"><dt>${t("addr")}</dt><dd>${esc(s.address)}</dd><dt>${t("phone")}</dt><dd><a href="tel:+55${s.phone.replace(/\D/g, "")}">${esc(s.phone)}</a> <span class="tag muted">Instagram</span></dd><dt>${t("anota")}</dt><dd>${esc(s.anota)}</dd>
      <dt>${t("stone")}</dt><dd>${esc(s.stone)}</dd><dt>${t("draw")}</dt><dd><span class="pill ${s.ownerDraw ? "low" : "out"}">${t(s.ownerDraw ? "draw_yes" : "draw_no")}</span></dd></dl>
      <h3>${t("fixed")}</h3>${table([t("m_item"), t("f_who"), t("f_amt")], s.fixed.map((f) => [t("f_" + f.k), esc(f.who), esc(f.amt)]).concat([[`<b>${t("f_mo")}</b>`, "", `<b>≈ ${brl(tot, 0)}</b>`]]))}
      <p class="flag">${esc(t(s.id === "vila" ? "vila_note" : "bar_note"))}</p>${src(D.fixedSource)}`);
  }).join("") +
    card(t("staff_title"), "", table([t("st_name"), t("debt_store"), t("st_pay"), t("st_oct")], D.staff.map((x) => [`<b>${esc(x.name)}</b>`, sname(x.store), esc(x.pay), brl(x.seenOct)]), "") +
      `<p class="flag">${esc(t("staff_flag"))}</p>${src("03/11 + Stone Oct")}`) +
    card(t("login_title"), t("login_hint"), table([t("lg_sys"), t("debt_store"), t("lg_user"), "Email"], D.logins.map((x) => [esc(x.sys), sname(x.store), esc(x.user), x.email ? esc(x.email) : "—"])) + src("03/11"));
  V.suppliers = () => card(t("sup_title"), t("sup_hint"),
    table([t("sup_name"), t("sup_role"), t("sup_sep") + " · " + t("bar"), t("sup_sep") + " · " + t("vila"), t("sup_oct") + " · " + t("bar"), t("sup_oct") + " · " + t("vila")],
      D.suppliers.map((s) => [`<b>${esc(s.name)}</b>`, `<span class="pill ${s.role === "primary" ? "ok" : "plan"}">${t(s.role)}</span>`, brl(s.bar), brl(s.vila), brl(s.barOct), brl(s.vilaOct)]), "num") + src(D.stone.source)) +
    card(t("sup_debt"), "", `<div class="peers">${peerStat("bar", brl(D.debt.bar, 0), t("debt_start"))}${peerStat("vila", brl(D.debt.vila, 0), t("debt_start"))}</div>
      <p class="hint">${esc(t("k_drinks"))}: ${esc(t("bar"))} ${brl(D.debt.drinks.bar, 0)} · ${esc(t("vila"))} ${brl(D.debt.drinks.vila, 0)}. ${esc(t("drinks_sub"))}</p>
      <p class="hint">${esc(t("shared_plan"))}. ${esc(t("plan_left"))}: ${brl(remaining(), 0)}.</p>
      <p class="flag">${esc(t("sup_gap"))}</p>${src(D.debt.source, D.debt.asOf)}`);
  V.approvals = () => {
    const a = approvals(), types = ["supplier", "rent", "buy", "draw", "other"];
    const item = (x, i) => `<div class="ap ${x.status}"><div class="apmain"><div class="aptop"><span class="tag">${sname(x.store)}</span><span class="tag">${t("t_" + x.type)}</span>${x.sample ? `<span class="tag muted">${t("sample")}</span>` : ""}<span class="apdate">${fmtD(x.date)}</span></div>
      <div class="apdesc">${esc(txt(x.desc))}</div><div class="apby">${t("ap_by")} · ${x.amount == null ? t("ap_tbd") : brl(x.amount)}</div></div>
      <div class="apact"><span class="pill ${x.status === "approved" ? "ok" : x.status === "rejected" ? "out" : "low"}">${t("ap_" + x.status)}</span>
      ${x.status === "pending" ? `<button class="ok-btn" data-ap="${i}" data-st="approved">${t("ap_approve")}</button><button class="no-btn" data-ap="${i}" data-st="rejected">${t("ap_reject")}</button>` : `<button class="ghost sm" data-ap="${i}" data-st="pending">${t("ap_undo")}</button>`}</div></div>`;
    return card(t("ap_title"), t("ap_hint"), `<div class="aplist">${a.map(item).join("")}</div><button class="ghost" id="apreset">${t("ap_reset")}</button>`) +
      card(t("ap_new"), "", `<form id="apf" class="row"><div class="wide"><label>${t("ap_desc")}</label><input name="desc" required></div>
      <div><label>${t("debt_store")}</label><select name="store"><option value="bar">${t("bar")}</option><option value="vila">${t("vila")}</option><option value="both">${t("both")}</option></select></div>
      <div><label>${t("ap_type")}</label><select name="type">${types.map((x) => `<option value="${x}">${t("t_" + x)}</option>`).join("")}</select></div>
      <div><label>${t("debt_amt")}</label><input type="number" name="amount" step="0.01" min="0"></div>
      <div><label>${t("debt_date")}</label><input type="date" name="date" value="${iso(new Date())}" required></div>
      <div class="btncell"><button class="primary" type="submit">${t("ap_add")}</button></div></form><p class="flag" id="apmsg" hidden></p>`) + rulesBox();
  };

  /* ---------- Debt & profit (data/debtProfit.json). Stores stay separate. ---------- */
  /* DP_PURE_START */
  function dpNum(v) { if (v == null || v === "") return null; const n = Number(v); return Number.isFinite(n) ? n : null; }
  function dpValid(s) { return /^\d{4}-\d{2}-\d{2}$/.test(String(s || "")); }
  function dpParse(s) { const [y, m, d] = String(s).split("-").map(Number); return new Date(y, m - 1, d); }
  function dpIso(dt) { return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0"); }
  function dpAddDays(s, n) { const dt = dpParse(s); dt.setDate(dt.getDate() + n); return dpIso(dt); }
  function dpSpan(a, b) { return Math.round((dpParse(b) - dpParse(a)) / 864e5); }
  const DP_DOW = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 };
  function dpWeekday(v) {
    if (typeof v === "number" && v >= 0 && v <= 6) return v;
    const raw = String(v == null ? "" : v).trim().toLowerCase();
    if (/^[0-6]$/.test(raw)) return Number(raw);
    return Object.prototype.hasOwnProperty.call(DP_DOW, raw) ? DP_DOW[raw] : null;
  }
  function dpUnique(dates) { return [...new Set(dates.filter(dpValid))].sort(); }
  function dpNextDowOnOrAfter(date, dow) { return dpAddDays(date, (dow - dpParse(date).getDay() + 7) % 7); }
  function dpNextDowAfter(date, dow) { const delta = (dow - dpParse(date).getDay() + 7) % 7; return dpAddDays(date, delta === 0 ? 7 : delta); }
  function dpMonthDue(year, monthIndex, dueDay) {
    const last = new Date(year, monthIndex + 1, 0).getDate();
    return dpIso(new Date(year, monthIndex, Math.min(dueDay, last)));
  }
  function dpNextMonthAfter(date, dueDay) {
    const dt = dpParse(date); let y = dt.getFullYear(), m = dt.getMonth();
    let due = dpMonthDue(y, m, dueDay);
    if (due <= date) { m += 1; if (m > 11) { m = 0; y += 1; } due = dpMonthDue(y, m, dueDay); }
    return due;
  }
  function dpNextMonthOnOrAfter(date, dueDay) {
    const dt = dpParse(date); let y = dt.getFullYear(), m = dt.getMonth();
    let due = dpMonthDue(y, m, dueDay);
    if (due < date) { m += 1; if (m > 11) { m = 0; y += 1; } due = dpMonthDue(y, m, dueDay); }
    return due;
  }
  function dpNextTenth(date) {
    const dt = dpParse(date);
    if (dt.getDate() <= 10) return dpIso(new Date(dt.getFullYear(), dt.getMonth(), 10));
    return dpIso(new Date(dt.getFullYear(), dt.getMonth() + 1, 10));
  }
  function dpFloor(rule, payDate) {
    const base = dpNum(rule && rule.floor), high = dpNum(rule && rule.floorBefore10th);
    const span = dpNum(rule && rule.floorWindowDays);
    const days = span == null ? 7 : span;
    if (base == null) return { floor: null, raised: false, days: days };
    if (high == null || !dpValid(payDate)) return { floor: base, raised: false, days: days };
    const until = dpSpan(payDate, dpNextTenth(payDate));
    const raised = until >= 0 && until <= days;
    return { floor: raised ? high : base, raised: raised, days: days };
  }
  function dpSuggest(bank, floor, target) {
    if (bank == null || floor == null || target == null) return null;
    const room = Math.round(bank * 100) - Math.round(floor * 100);
    const cap = Math.round(target * 100);
    return Math.max(0, Math.min(cap, room)) / 100;
  }
  function dpNextPay(name, from) {
    const want = dpWeekday(name);
    return dpNextDowOnOrAfter(from, want == null ? 3 : want);
  }
  function dpHeadroom(bank, floor) {
    if (bank == null || floor == null) return null;
    return (Math.round(bank * 100) - Math.round(floor * 100)) / 100;
  }
  function dpPayAmount(ob) {
    const expected = dpNum(ob && ob.expectedAmount);
    if (expected != null) return expected;
    const range = ob && Array.isArray(ob.amountRange) ? ob.amountRange : [];
    const hi = dpNum(range[1]), lo = dpNum(range[0]);
    if (hi != null) return hi;
    if (lo != null) return lo;
    return null;
  }
  function dpCadence(ob) { return String(ob && ob.cadence || "").toLowerCase(); }
  function dpOccurrences(ob, today, horizon) {
    if (!ob || !dpValid(today) || !dpValid(horizon)) return [];
    const cadence = dpCadence(ob);
    const last = dpValid(ob.lastPaidDate) ? ob.lastPaidDate : "";
    const cap = dpAddDays(today, -120);
    if (cadence === "one-off" || cadence === "oneoff" || cadence === "once") {
      if (last) return [];
      return dpValid(ob.dueDate) ? dpUnique([ob.dueDate].filter((d) => d >= cap && d <= horizon)) : [];
    }
    if (cadence === "daily") {
      let cursor = last ? dpAddDays(last, 1) : today;
      if (cursor < cap) cursor = cap;
      const dates = [];
      let guard = 0;
      while (cursor <= horizon && guard < 200) { dates.push(cursor); cursor = dpAddDays(cursor, 1); guard += 1; }
      return dpUnique(dates);
    }
    if (cadence === "weekly") {
      let dow = dpWeekday(ob.dueWeekday);
      if (dow == null && last) dow = dpParse(last).getDay();
      if (dow == null) return [];
      let cursor = last ? dpNextDowAfter(last, dow) : dpNextDowOnOrAfter(today, dow);
      if (cursor < cap) cursor = dpNextDowOnOrAfter(cap, dow);
      const dates = [];
      let guard = 0;
      while (cursor <= horizon && guard < 40) { dates.push(cursor); cursor = dpAddDays(cursor, 7); guard += 1; }
      return dpUnique(dates);
    }
    if (cadence === "monthly") {
      const dueDay = Math.round(Number(ob.dueDay));
      if (!(dueDay >= 1 && dueDay <= 31)) return [];
      let cursor = last ? dpNextMonthAfter(last, dueDay) : dpNextMonthOnOrAfter(today, dueDay);
      if (cursor < cap) cursor = dpNextMonthOnOrAfter(cap, dueDay);
      const dates = [];
      let guard = 0;
      while (cursor <= horizon && guard < 8) { dates.push(cursor); cursor = dpNextMonthAfter(cursor, dueDay); guard += 1; }
      return dpUnique(dates);
    }
    return [];
  }
  function dpCashExcluded(ob) {
    if (!ob) return false;
    if (ob.excludeFromCash === true || ob.includeInCashTotal === false) return true;
    const note = String(ob.note || "").toLowerCase();
    return /not added to the pix cash forecast|not added to the cash forecast|already netted in card receivables|excluded from cash|fora do total de caixa/.test(note);
  }
  function dpLowConfidence(ob) {
    const c = String(ob && ob.confidence || "").toLowerCase();
    return c === "low" || c === "medium";
  }
  function dpSumDue(obs, today, end) {
    let cents = 0;
    (Array.isArray(obs) ? obs : []).forEach((ob) => {
      if (dpCashExcluded(ob)) return;
      const amt = dpPayAmount(ob);
      if (amt == null) return;
      const n = dpOccurrences(ob, today, end).filter((d) => d >= today && d <= end).length;
      cents += Math.round(amt * 100) * n;
    });
    return cents / 100;
  }
  function dpDueExceeds(due, bank, floor) {
    if (due == null || bank == null || floor == null) return false;
    return Math.round(due * 100) > Math.round(bank * 100) - Math.round(floor * 100);
  }
  function dpSensitive(s) {
    const text = String(s == null ? "" : s);
    if (text.includes("@")) return true;
    if (/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/.test(text)) return true;
    if (/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}/.test(text)) return true;
    if (/\b(ag[eê]ncia|agency)\s*[:.]?\s*\d/i.test(text)) return true;
    if (/\b(conta|account)\s*[:.]?\s*\d/i.test(text)) return true;
    return false;
  }
  function dpShare(amount, base, explicitPct) {
    const p = dpNum(explicitPct);
    if (p != null) return p;
    const a = dpNum(amount), b = dpNum(base);
    if (a == null || b == null || b === 0) return null;
    return a / b;
  }
  /* DP_PURE_END */

  let dpState = { status: "loading", data: null };
  const dpCalMonth = { bar: "", vila: "" };
  let dpPop = null;
  function dpList(v) { return Array.isArray(v) ? v : []; }
  function dpPublic(v) {
    if (v && typeof v === "object") return dpPublic(v[lang] || v.en || v.pt || "");
    const text = String(v == null ? "" : v).trim();
    return !text || dpSensitive(text) ? "" : text;
  }
  function dpMoney(n, approx) {
    const x = dpNum(n);
    if (x == null) return "";
    const digits = Math.abs(x - Math.round(x)) < 0.001 ? 0 : 2;
    return (approx ? "~" : "") + brl(x, digits);
  }
  function dpPct(n) {
    const x = dpNum(n);
    if (x == null) return "";
    const v = Math.round(x * 1000) / 10;
    const digits = Math.abs(v - Math.round(v)) < 0.001 ? 0 : 1;
    return v.toLocaleString(lang === "pt" ? "pt-BR" : "en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits }) + "%";
  }
  function dpFmt(s) { return dpValid(s) ? fmtD(s) : ""; }
  function dpFmtStart(s) { return dpValid(s) ? fmtStart(s) : ""; }
  function dpAttr(n) { const x = dpNum(n); return x == null ? "" : String(Math.round(x * 100) / 100); }
  function dpMonthLabel(ym, long) {
    const m = /^(\d{4})-(\d{2})$/.exec(String(ym || ""));
    if (!m) return "";
    return new Date(Number(m[1]), Number(m[2]) - 1, 1).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { month: long ? "long" : "short", year: "numeric" });
  }
  function dpDataAttrs(map) {
    return Object.keys(map).map((k) => {
      const v = map[k];
      if (v == null || v === "") return "";
      return ` data-${k}="${esc(String(v))}"`;
    }).join("");
  }
  function dpPaid(rows, key, pred) {
    let cents = 0;
    dpList(rows).forEach((r) => {
      if (!r || (pred && !pred(r))) return;
      const n = dpNum(r[key]);
      if (n == null) return;
      cents += Math.round(n * 100);
    });
    return cents / 100;
  }

  function dpDebtCard(store, m) {
    const debt = store.debt && typeof store.debt === "object" ? store.debt : {};
    const badge = `<span class="pill ${m.behind ? "out" : "ok"}">${esc(t(m.behind ? "dp_pace_behind" : "dp_pace_ok"))}</span>`;
    let note = "";
    const pn = store.payoffNote || {};
    if (dpValid(pn.raiseHolds) && dpValid(pn.preRaise) && dpValid(pn.priceRaise)) {
      note = `<p class="hint">${esc(fill(t("dp_payoff_note"), { raise: fmtStart(pn.raiseHolds), pre: fmtStart(pn.preRaise), price: fmtStart(pn.priceRaise) }))}</p>`;
    }
    const pays = dpList(debt.payments);
    const payHtml = pays.length ? table([t("debt_date"), t("debt_amt"), t("dp_note")], pays.map((p) => {
      const noteTxt = dpPublic(p && p.note);
      return [dpFmt(p && p.date), dpMoney(p && p.amount), noteTxt ? esc(noteTxt) : ""];
    })) : `<p class="hint">${esc(t("dp_no_pays"))}</p>`;
    let hint = fill(t("dp_start_line"), { supplier: m.supplier, start: dpMoney(m.start) });
    if (dpValid(m.startDate)) hint += " " + fill(t("dp_start_on"), { date: fmtStart(m.startDate) });
    return card(t("dp_debt"), hint, `<div class="kpis">${kpi(t("dp_balance"), dpMoney(m.current), esc(m.supplier))}
      ${kpi(t("dp_paid"), dpMoney(m.paidAll), "")}
      ${kpi(t("dp_payoff"), m.payoff ? fmtStart(m.payoff) : esc(t("dp_open")), "")}</div>
      ${bar(m.progress)}
      <p class="hint">${esc(fill(t("dp_progress"), { paid: dpMoney(m.paidAll), start: dpMoney(m.start) }))}</p>
      <div class="dp-pace">${badge}<span>${esc(t("dp_actual"))} ${dpMoney(m.paidToDate)} · ${esc(t("dp_planned"))} ${dpMoney(m.plannedToDate)}</span></div>
      ${note}${payHtml}${dpPlan(store.plan)}`);
  }
  function dpPlan(plan) {
    const rows = dpList(plan).filter((r) => r && dpValid(r.date));
    if (!rows.length) return "";
    const showBal = rows.some((r) => dpNum(r.balAfter) != null);
    const showFloor = rows.some((r) => dpNum(r.floor) != null);
    const head = [t("debt_date"), t("dp_extra"), t("dp_debt_after")];
    if (showBal) head.push(t("dp_bal_after"));
    if (showFloor) head.push(t("dp_floor"));
    const body = rows.map((r) => {
      const cells = [fmtD(r.date), dpMoney(r.extra), dpMoney(r.debtAfter)];
      if (showBal) cells.push(dpNum(r.balAfter) == null ? "" : dpMoney(r.balAfter));
      if (showFloor) cells.push(dpNum(r.floor) == null ? "" : dpMoney(r.floor));
      return `<tr data-date="${esc(r.date)}" data-extra="${esc(dpAttr(r.extra))}" data-debt="${esc(dpAttr(r.debtAfter))}" data-bal="${esc(dpAttr(r.balAfter))}" data-floor="${esc(dpAttr(r.floor))}">${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
    }).join("");
    return `<details class="plan"><summary>${esc(fill(t("dp_plan_n"), { n: int(rows.length) }))}</summary><div class="tw"><table class="num compact"><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${body}</tbody></table></div></details>`;
  }
  function dpRuleCard(store, m) {
    const cls = m.warnShort || m.warnFloor ? "alert" : "good";
    let warns = "";
    if (m.warnShort) warns += `<p class="flag bad">${esc(t("dp_warn_short"))}</p>`;
    if (m.warnFloor) warns += `<p class="flag bad">${esc(t("dp_warn_floor"))}</p>`;
    const floorSub = m.floorRaised ? fill(t("dp_floor_why"), { days: String(m.windowDays) }) : t("dp_floor_base");
    let diff = "";
    if (m.planExtra != null && m.suggested != null && Math.abs(m.planExtra - m.suggested) > 0.009 && dpValid(m.payDate)) {
      diff = `<p class="hint">${esc(fill(t("dp_plan_diff"), { date: fmtStart(m.payDate), extra: dpMoney(m.planExtra) }))}</p>`;
    }
    let reserva = "";
    if (m.reserva != null) reserva = `<div class="bline"><span>${esc(t("dp_reserva"))}</span><b>${dpMoney(m.reserva)}</b></div><p class="hint">${esc(t("dp_reserva_hint"))}</p>`;
    let order = "";
    if (store.weeklyOrderSeparate === true) order = `<p class="hint">${esc(t("dp_order_plain"))}</p>`;
    else if (dpNum(store.weeklyOrderSeparate) != null) order = `<p class="hint">${esc(fill(t("dp_order_amt"), { amt: dpMoney(store.weeklyOrderSeparate) }))}</p>`;
    const when = dpValid(m.payDate) ? fmtStartLong(m.payDate) : "";
    return card(t("dp_rule"), t("dp_formula"), `<div class="kpis">${kpi(t("dp_suggest"), m.suggested == null ? esc(t("dp_na")) : dpMoney(m.suggested), esc(when), cls)}
      ${kpi(t("dp_floor"), m.floor == null ? esc(t("dp_na")) : dpMoney(m.floor), esc(floorSub))}
      ${kpi(t("dp_bal"), m.bank == null ? esc(t("dp_na")) : dpMoney(m.bank), "")}</div>
      <p class="hint">${esc(t("dp_target_wk"))}: ${dpMoney(m.targetWk)}</p>
      ${diff}${reserva}${warns}${order}`);
  }
  function dpAmountLabel(ob) {
    const exp = dpNum(ob.expectedAmount);
    if (exp != null) return dpMoney(exp);
    const range = Array.isArray(ob.amountRange) ? ob.amountRange : [];
    const lo = dpNum(range[0]), hi = dpNum(range[1]);
    if (lo != null && hi != null && Math.abs(hi - lo) > 0.009) return dpMoney(lo) + " " + t("dp_to") + " " + dpMoney(hi);
    if (hi != null) return dpMoney(hi);
    if (lo != null) return dpMoney(lo);
    return t("dp_ob_amount_missing");
  }
  function dpCadenceLabel(ob) {
    const c = dpCadence(ob);
    if (c === "one-off" || c === "oneoff" || c === "once") return t("dp_cadence_once");
    if (c === "weekly" || c === "monthly" || c === "daily") return t("dp_cadence_" + c);
    return "";
  }
  function dpObRow(ob, dates, overdue) {
    const unusual = ob.status === "unusual-amount";
    const late = overdue || ob.status === "overdue";
    const cls = late ? "overdue" : unusual ? "unusual" : "";
    const cat = t("dp_cat_" + (ob.category || "other"));
    const label = dpPublic(ob.label) || cat;
    let when = "";
    if (dates.length === 1) when = dpFmt(dates[0]);
    else if (dates.length > 1 && dpCadence(ob) === "daily") when = fill(t("dp_ob_times"), { n: int(dates.length), first: dpFmt(dates[0]), last: dpFmt(dates[dates.length - 1]), amt: dpAmountLabel(ob) });
    else if (dates.length > 1) when = dates.map(dpFmt).filter(Boolean).join(", ");
    else when = t("dp_ob_nodate");
    const pills = [dpCadenceLabel(ob), late ? t("dp_ob_overdue_tag") : "", unusual ? t("dp_ob_unusual") : "", ob.status === "due-soon" ? t("dp_ob_due_soon") : "", dpLowConfidence(ob) ? t("dp_ob_low") : "", dpCashExcluded(ob) ? t("dp_ob_excluded") : ""].filter(Boolean);
    const note = dpPublic(ob.note);
    return `<article class="ob ${cls}"><div class="obtop"><span>${esc(label)}</span><b>${esc(dpAmountLabel(ob))}</b></div><div class="obmeta">${esc(when)}${pills.length ? " · " + pills.map(esc).join(" · ") : ""}${note ? " · " + esc(note) : ""}</div></article>`;
  }
  function dpWindowRows(obs, today, end, overdueOnly) {
    const html = [];
    obs.forEach((ob) => {
      const dates = dpOccurrences(ob, today, end);
      const picked = dates.filter((d) => overdueOnly ? d < today : (d >= today && d <= end));
      if (!picked.length) return;
      html.push(dpObRow(ob, picked, overdueOnly));
    });
    return html.join("");
  }
  function dpShownMonth(id, today) {
    const v = dpCalMonth[id];
    return v && /^\d{4}-\d{2}$/.test(v) ? v : today.slice(0, 7);
  }
  function dpShortName(ob) {
    const raw = dpPublic(ob && ob.label) || "";
    const f = fold(raw);
    if (f.includes("boutique")) return "Boutique";
    if (f.includes("gerente")) return lang === "pt" ? "Gerente" : "Manager";
    if (f.includes("diaria")) return lang === "pt" ? "Diárias" : "Staff";
    if (f.includes("retirada")) return lang === "pt" ? "Retirada" : "Draw";
    if (f.includes("aluguel")) return lang === "pt" ? "Aluguel" : "Rent";
    if (f.includes("energia")) return lang === "pt" ? "Energia" : "Energy";
    if (f.includes("agua")) return lang === "pt" ? "Água" : "Water";
    if (f.includes("internet")) return "Internet";
    if (f.includes("celular") || f.includes("claro")) return lang === "pt" ? "Celular" : "Phone";
    if (f.includes("gas")) return lang === "pt" ? "Gás" : "Gas";
    if (f.includes("bebida")) return lang === "pt" ? "Bebidas" : "Drinks";
    if (f.includes("mateus")) return "Mateus";
    if (f.includes("atacad")) return "Atacadão";
    if (f.includes("logui")) return "Logui";
    if (f.includes("mercurio")) return "Mercurio";
    if (f.includes("super central")) return "Super Central";
    if (f.includes("ifood")) return "iFood";
    if (f.includes("tarifa")) return lang === "pt" ? "Tarifas" : "Card fees";
    if (f.includes("nao confirmado")) return lang === "pt" ? "Fornecedor" : "Supplier";
    if (f.includes("nao classificado")) return lang === "pt" ? "Outros" : "Other";
    if (f.includes("pequeno") || f.includes("outros")) return lang === "pt" ? "Pequenos" : "Small bills";
    const cut = raw.split("(")[0].split("/")[0].replace(/^Fornecedor de\s+/i, "").replace(/^Fornecedor\s+/i, "").trim();
    return (cut || t("dp_cat_" + ((ob && ob.category) || "other"))).slice(0, 18);
  }
  function dpDayCash(chips) {
    let cents = 0;
    (chips || []).forEach((c) => { cents += Math.round((Number(c.cash) || 0) * 100); });
    return cents / 100;
  }
  const DP_ALERT_WORDS = [
    ["boutique", "boutique"], ["aluguel", "rent"], ["energia", "energy"], ["equatorial", "equatorial"],
    ["agua", "water"], ["internet", "internet"], ["gas", "gas"], ["folha", "staff"], ["gerente", "manager"],
    ["diaria", "staff"], ["retirada", "owner"], ["bebida", "beverage"], ["mateus", "mateus"],
    ["atacadao", "atacadao"], ["atacada", "atacadao"], ["logui", "logui"], ["mercurio", "mercurio"],
    ["ifood", "ifood"], ["claro", "claro"], ["super central", "super central"], ["tarifa", "fee"]
  ];
  function dpAlertTied(alert, text, occ) {
    const folded = fold(text);
    if (!/\bdue\b|\binstallment\b/.test(folded)) return false;
    if (!dpValid(alert.date)) return false;
    return occ.some((row) => {
      const label = fold(dpPublic(row.ob.label) || "");
      const hit = DP_ALERT_WORDS.some(([pt, en]) => label.includes(pt) && (folded.includes(pt) || folded.includes(en)));
      if (!hit) return false;
      return row.dates.some((d) => Math.abs(dpSpan(alert.date, d)) <= 3);
    });
  }
  function dpNotes(store, today) {
    const obs = dpList(store.obligations).filter((ob) => ob && typeof ob === "object");
    const horizon = dpAddDays(today, 120);
    const occ = obs.map((ob) => ({ ob: ob, dates: dpOccurrences(ob, today, horizon) }));
    return dpList(store.alerts).filter((a) => {
      const text = dpPublic(a && a.text);
      if (!text) return false;
      return !dpAlertTied(a, text, occ);
    }).map((a) => ({ date: a.date, severity: a.severity, text: dpPublic(a.text) }));
  }
  function dpPlaceChips(store, m) {
    const today = m.today;
    const obs = dpList(store.obligations).filter((ob) => ob && typeof ob === "object");
    const payments = dpList(store.debt && store.debt.payments);
    const byDate = {};
    const add = (date, chip) => {
      if (!dpValid(date)) return;
      if (!byDate[date]) byDate[date] = [];
      byDate[date].push(chip);
    };
    obs.forEach((ob) => {
      const dates = dpOccurrences(ob, today, dpAddDays(today, 120));
      const late = dates.filter((d) => d < today);
      const upcoming = dates.filter((d) => d >= today);
      const amt = dpPayAmount(ob);
      const low = dpLowConfidence(ob);
      const exclude = dpCashExcluded(ob);
      const id = ob.id || ob.label || "ob";
      if (dpValid(ob.lastPaidDate)) {
        const paidAmt = dpNum(ob.lastPaidAmount);
        const show = paidAmt != null ? paidAmt : amt;
        add(ob.lastPaidDate, { key: "paid:" + id, tone: "green", low: low, exclude: exclude, label: dpShortName(ob), amount: show, cash: exclude ? 0 : (show || 0), ob: ob, kind: "paid" });
      }
      if (late.length) {
        const each = exclude ? 0 : (amt || 0);
        add(today, { key: "late:" + id, tone: "red", low: low, exclude: exclude, label: dpShortName(ob), amount: amt, count: late.length, cash: Math.round(each * 100) * late.length / 100, dates: late, ob: ob, kind: "overdue" });
      }
      upcoming.forEach((d) => {
        const payHit = ob.category === "debt" ? payments.find((p) => p && p.date === d) : null;
        const paid = !!payHit;
        const show = payHit && dpNum(payHit.amount) != null ? dpNum(payHit.amount) : amt;
        const tone = paid ? "green" : (ob.status === "unusual-amount" || ob.status === "due-soon" ? "amber" : "blue");
        add(d, { key: "due:" + id + ":" + d, tone: tone, low: low, exclude: exclude, label: dpShortName(ob), amount: show, cash: exclude ? 0 : (show || 0), ob: ob, kind: paid ? "paid" : "bill", date: d });
      });
    });
    payments.forEach((p) => {
      if (!p || !dpValid(p.date)) return;
      const hit = (byDate[p.date] || []).some((c) => c.kind === "paid" && c.ob && c.ob.category === "debt");
      if (hit) return;
      const amt = dpNum(p.amount);
      add(p.date, { key: "pay:" + p.date, tone: "green", low: false, exclude: false, label: t("dp_cal_paidextra"), amount: amt, cash: amt || 0, kind: "paid", ob: null });
    });
    const rule = store.rule || {};
    let cursor = today;
    const limit = dpAddDays(today, 120);
    while (cursor <= limit) {
      if (dpParse(cursor).getDay() === 3) {
        const sug = dpSuggest(m.bank, dpFloor(rule, cursor).floor, dpNum(rule.weeklyExtraTarget));
        if (sug != null) add(cursor, { key: "extra:" + cursor, tone: "blue", low: false, exclude: false, label: t("dp_cal_extra"), amount: sug, cash: sug, kind: "extra", ob: null, date: cursor });
      }
      cursor = dpAddDays(cursor, 1);
    }
    return byDate;
  }
  function dpChipBtn(storeId, chip) {
    const amt = chip.amount == null ? "" : " " + dpMoney(chip.amount);
    const count = chip.count > 1 ? " x" + chip.count : "";
    return `<button type="button" class="calchip ${chip.tone}${chip.low ? " low" : ""}" data-store="${esc(storeId)}" data-chip="${esc(chip.key)}">${esc(chip.label + amt + count)}</button>`;
  }
  function dpPopSection(chip) {
    if (!chip) return "";
    const ob = chip.ob;
    const lines = [`<p><b>${esc(chip.label)}</b>${chip.count > 1 ? " · " + esc(fill(t("dp_cal_missed"), { n: int(chip.count) })) : ""}</p>`];
    if (chip.kind === "extra") lines.push(`<p>${esc(t("dp_cal_extra_note"))}</p><p>${esc(t("dp_cal_expected"))}: ${dpMoney(chip.amount)}</p>`);
    else if (ob) {
      lines.push(`<p>${esc(t("dp_cal_expected"))}: ${dpAmountLabel(ob)}</p>`);
      const range = Array.isArray(ob.amountRange) ? ob.amountRange : [];
      if (dpNum(range[0]) != null && dpNum(range[1]) != null) lines.push(`<p>${esc(t("dp_cal_range"))}: ${dpMoney(range[0])} ${esc(t("dp_to"))} ${dpMoney(range[1])}</p>`);
      if (dpValid(ob.lastPaidDate) || dpNum(ob.lastPaidAmount) != null) lines.push(`<p>${esc(t("dp_cal_last"))}: ${dpFmt(ob.lastPaidDate)} ${dpNum(ob.lastPaidAmount) != null ? dpMoney(ob.lastPaidAmount) : ""}</p>`);
      lines.push(`<p>${esc(t("dp_cal_conf"))}: ${esc(dpLowConfidence(ob) ? t("dp_ob_low") : t("dp_cal_high"))}</p>`);
      if (chip.exclude) lines.push(`<p>${esc(t("dp_ob_excluded"))}</p>`);
      const note = dpPublic(ob.note);
      if (note) lines.push(`<p>${esc(note)}</p>`);
      if (chip.dates && chip.dates.length) lines.push(`<p>${esc(chip.dates.map(dpFmt).filter(Boolean).join(", "))}</p>`);
    } else if (chip.amount != null) lines.push(`<p>${dpMoney(chip.amount)}</p>`);
    return lines.join("");
  }
  function dpPopover(storeId, byDate) {
    if (!dpPop || dpPop.store !== storeId) return "";
    let chips = [];
    if (dpPop.key) {
      Object.keys(byDate).forEach((d) => (byDate[d] || []).forEach((c) => { if (c.key === dpPop.key) chips.push(c); }));
    } else if (dpPop.date) chips = byDate[dpPop.date] || [];
    const title = dpPop.date && !dpPop.key ? dpFmt(dpPop.date) : (chips[0] ? chips[0].label : "");
    const body = chips.map(dpPopSection).join("<hr>") || `<p class="hint">${esc(t("dp_cal_none"))}</p>`;
    return `<div class="calpop" role="dialog"><div class="calpophead"><b>${esc(title)}</b><button type="button" class="ghost sm" data-calclose="1">${esc(t("dp_cal_close"))}</button></div>${body}</div>`;
  }
  function dpCalendar(store, m) {
    const id = store.id === "vila" ? "vila" : "bar";
    const today = m.today;
    const byDate = dpPlaceChips(store, m);
    const ym = dpShownMonth(id, today);
    const year = Number(ym.slice(0, 4)), month = Number(ym.slice(5, 7)) - 1;
    const first = new Date(year, month, 1);
    const lead = (first.getDay() + 6) % 7;
    const dim = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < lead; i++) cells.push("");
    for (let d = 1; d <= dim; d++) cells.push(dpIso(new Date(year, month, d)));
    while (cells.length % 7) cells.push("");
    const heads = t("dp_wd").split(",");
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    const weekHtml = weeks.map((week) => {
      const days = week.map((date) => {
        if (!date) return `<div class="calday pad"></div>`;
        const chips = byDate[date] || [];
        const cash = dpDayCash(chips);
        return `<div class="calday${date === today ? " is-today" : ""}"><button type="button" class="calnum" data-store="${id}" data-calday="${date}">${Number(date.slice(8))}${date === today ? " · " + esc(t("dp_cal_today")) : ""}</button>${chips.map((c) => dpChipBtn(id, c)).join("")}${cash > 0 ? `<div class="caldtot">${esc(t("dp_cal_day"))} ${dpMoney(cash)}</div>` : ""}</div>`;
      }).join("");
      const dates = week.filter(Boolean);
      const sum = dates.reduce((a, d) => a + dpDayCash(byDate[d] || []), 0);
      const anchor = dates.find((d) => dpParse(d).getDay() === 3) || dates[0];
      const floor = anchor ? dpFloor(store.rule || {}, anchor).floor : null;
      const room = dpHeadroom(m.bank, floor);
      const over = room != null && Math.round(sum * 100) > Math.round(room * 100);
      const sumLine = dates.length ? `<div class="calwsum${over ? " over" : ""}">${esc(fill(t("dp_cal_week"), { amt: dpMoney(sum) }))}${room == null ? "" : " · " + esc(fill(t("dp_cal_room"), { room: dpMoney(room) }))}</div>` : "";
      return `<div class="calweek">${days}${sumLine}</div>`;
    }).join("");
    const end30 = dpAddDays(today, 30);
    let agenda = "";
    let cursor = today;
    while (cursor <= end30) {
      const chips = byDate[cursor] || [];
      if (chips.length) {
        const cash = dpDayCash(chips);
        agenda += `<article class="agendaday${cursor === today ? " is-today" : ""}"><div class="agendatop"><button type="button" class="calnum" data-store="${id}" data-calday="${cursor}">${esc(dpFmt(cursor))}${cursor === today ? " · " + esc(t("dp_cal_today")) : ""}</button>${cash > 0 ? `<b>${dpMoney(cash)}</b>` : ""}</div>${chips.map((c) => dpChipBtn(id, c)).join("")}</article>`;
      }
      cursor = dpAddDays(cursor, 1);
    }
    if (!agenda) agenda = `<p class="hint">${esc(t("dp_cal_none"))}</p>`;
    const legend = `<p class="hint">${esc(t("dp_cal_legend"))}</p><div class="callegend"><span><i class="swatch red"></i>${esc(t("dp_cal_red"))}</span><span><i class="swatch amber"></i>${esc(t("dp_cal_amber"))}</span><span><i class="swatch blue"></i>${esc(t("dp_cal_blue"))}</span><span><i class="swatch green"></i>${esc(t("dp_cal_green"))}</span><span><i class="swatch low"></i>${esc(t("dp_cal_dash"))}</span></div>`;
    const notes = dpNotes(store, today);
    const noteHtml = notes.length ? `<details class="calnotes"><summary>${esc(t("dp_cal_notes"))} <span class="tabbadge">${notes.length}</span></summary>${notes.map((a) => {
      const sev = a.severity === "red" ? "bad" : a.severity === "info" ? "info" : "";
      return `<p class="flag ${sev}">${dpFmt(a.date)} ${esc(a.text)}</p>`;
    }).join("")}</details>` : "";
    return `<div class="cal" data-cal-store="${id}"><div class="calnav"><button type="button" data-cal="prev" data-store="${id}" aria-label="${esc(t("dp_cal_prev"))}">‹</button><h3>${esc(dpMonthLabel(ym, true))}</h3><button type="button" data-cal="next" data-store="${id}" aria-label="${esc(t("dp_cal_next"))}">›</button></div><div class="calheads">${heads.map((w) => `<span>${esc(w)}</span>`).join("")}</div>${weekHtml}<div class="calagenda"><h3>${esc(t("dp_cal_agenda"))}</h3>${agenda}</div>${legend}${noteHtml}${dpPopover(id, byDate)}</div>`;
  }
  function dpObCard(store, m) {
    const obs = dpList(store.obligations).filter((ob) => ob && typeof ob === "object");
    const today = m.today, end7 = dpAddDays(today, 7), end30 = dpAddDays(today, 30);
    const due7 = dpSumDue(obs, today, end7), due30 = dpSumDue(obs, today, end30);
    const short = dpDueExceeds(due7, m.bank, m.floorToday);
    const head = m.headroom == null ? "" : `<p class="${short ? "flag bad" : "hint"}" data-due7="${esc(dpAttr(due7))}" data-due30="${esc(dpAttr(due30))}">${esc(t("dp_ob_total"))}: ${dpMoney(due7)} · ${esc(t("dp_ob_headroom"))}: ${dpMoney(m.headroom)}</p>`;
    const later = `<p class="hint">${esc(t("dp_ob_30_total"))}: ${dpMoney(due30)}</p>`;
    const warn = short ? `<p class="flag bad">${esc(t("dp_ob_short"))}</p>` : "";
    const basis = obs.some((ob) => dpNum(ob.expectedAmount) == null && dpPayAmount(ob) != null) ? `<p class="hint">${esc(t("dp_ob_basis"))}</p>` : "";
    const feeNote = obs.some(dpCashExcluded) ? `<p class="hint">${esc(t("dp_ob_fees"))}</p>` : "";
    if (!obs.length) {
      return card(t("dp_ob"), t("dp_ob_hint"), `${head}${later}${warn}<p class="hint">${esc(t("dp_ob_empty"))}</p>`);
    }
    const undated = obs.filter((ob) => {
      const c = dpCadence(ob);
      if ((c === "one-off" || c === "oneoff" || c === "once") && dpValid(ob.lastPaidDate)) return false;
      return !dpOccurrences(ob, today, end30).length;
    });
    const undatedHtml = undated.length ? `<p class="hint">${esc(t("dp_ob_nodate"))}: ${undated.map((ob) => esc(dpShortName(ob))).join(", ")}</p>` : "";
    return card(t("dp_ob"), t("dp_ob_hint"), `${head}${later}${warn}${basis}${feeNote}${undatedHtml}${dpCalendar(store, m)}`);
  }
  function dpMonthTable(rows) {
    if (!rows.length) return "";
    const labor = (r) => dpShare(r.labor, r.deposits, r.laborPct);
    const rent = (r) => dpShare(r.rent, r.deposits, r.rentPct);
    const cols = [["label", t("dp_month"), (r) => esc(r.month ? dpMonthLabel(r.month, false) : t("dp_current")) + (r.approximate ? ` <span class="tag muted">${esc(t("dp_approx"))}</span>` : "")]];
    if (rows.some((r) => dpNum(r.deposits) != null)) cols.push(["deposits", t("dp_deposits"), (r) => dpMoney(r.deposits)]);
    if (rows.some((r) => dpNum(r.outflows) != null)) cols.push(["outflows", t("dp_out"), (r) => dpMoney(r.outflows)]);
    if (rows.some((r) => dpNum(r.net) != null)) cols.push(["net", t("dp_net"), (r) => dpMoney(r.net, !!r.approximate)]);
    if (rows.some((r) => dpNum(r.ownerDraws) != null || dpNum(r.ownerDrawsHigh) != null)) cols.push(["draws", t("dp_draws"), (r) => {
      const lo = dpNum(r.ownerDraws), hi = dpNum(r.ownerDrawsHigh);
      if (lo != null && hi != null && Math.abs(hi - lo) > 0.009) return dpMoney(lo) + " " + t("dp_to") + " " + dpMoney(hi);
      return lo != null ? dpMoney(lo) : dpMoney(hi);
    }]);
    const shareCell = (pct, amt) => [pct != null ? dpPct(pct) : "", amt != null ? dpMoney(amt) : ""].filter(Boolean).join(" · ");
    if (rows.some((r) => labor(r) != null || dpNum(r.labor) != null)) cols.push(["labor", t("dp_labor"), (r) => shareCell(labor(r), dpNum(r.labor))]);
    if (rows.some((r) => rent(r) != null || dpNum(r.rent) != null)) cols.push(["rent", t("dp_rent"), (r) => shareCell(rent(r), dpNum(r.rent))]);
    if (cols.length < 2) return "";
    return table(cols.map((c) => c[1]), rows.map((r) => cols.map((c) => c[2](r))), "num");
  }
  function dpPctChart(m) {
    const items = [];
    if (m.laborPct != null) items.push([t("dp_labor"), m.laborPct, false]);
    if (m.rentPct != null) items.push([t("dp_rent"), m.rentPct, false]);
    if (m.gapPct != null) items.push([t("dp_gap"), m.gapPct, m.gapWarn]);
    if (!items.length) return "";
    return `<div class="dp-metrics" role="img" aria-label="${esc(t("dp_chart"))}">${items.map(([label, pct, warn]) => {
      const w = Math.max(pct > 0 ? 2 : 0, Math.min(100, pct * 100));
      return `<div class="dp-metric"><span>${esc(label)}</span><span class="track"><i class="${warn ? "warnbar" : ""}" style="width:${w.toFixed(1)}%"></i></span><b>${dpPct(pct)}</b></div>`;
    }).join("")}</div><p class="hint">${esc(t("dp_chart_key"))}</p>`;
  }
  function dpNetChart(rows) {
    const series = rows.filter((r) => r && r.month && /^\d{4}-\d{2}$/.test(r.month) && dpNum(r.net) != null);
    if (series.length < 2) return "";
    const max = Math.max.apply(null, series.map((r) => Math.abs(dpNum(r.net))));
    if (!max) return "";
    return `<div class="dp-cols" role="img" aria-label="${esc(t("dp_chart"))}">${series.map((r) => {
      const h = Math.max(4, (Math.abs(dpNum(r.net)) / max) * 100);
      return `<div class="dp-colbar"><i style="height:${h.toFixed(1)}%"></i><span>${esc(dpMonthLabel(r.month, false))}</span></div>`;
    }).join("")}</div>`;
  }
  function dpGapHtml(m) {
    if (m.gapPct == null && m.gapAmt == null && m.anota == null) return "";
    let detail = "";
    if (m.gapAmt != null && m.gapPct != null) detail = dpMoney(m.gapAmt, m.gapApprox) + " (" + dpPct(m.gapPct) + ")";
    else if (m.gapPct != null) detail = (m.gapApprox ? "~" : "") + dpPct(m.gapPct);
    else detail = dpMoney(m.gapAmt, m.gapApprox);
    const when = dpMonthLabel(m.gapMonth, true);
    if (when) detail = when + ": " + detail;
    let raw = "";
    if (m.anota != null && m.bankDep != null) raw = `<p class="hint">${esc(t("dp_anota"))} ${dpMoney(m.anota)} · ${esc(t("dp_deposits"))} ${dpMoney(m.bankDep)}</p>`;
    const warn = m.gapWarn ? `<p class="flag bad">${esc(fill(t("dp_gap_warn"), { pct: dpPct(m.gapWarnAbove) }))}</p>` : "";
    return `<h3>${esc(t("dp_gap"))}</h3><p class="hint">${esc(fill(t("dp_gap_line"), { detail: detail }))}</p>${raw}${warn}`;
  }
  function dpTargetHtml(store, m) {
    const target = dpNum(store.target);
    if (target == null && m.decisionDays == null) return "";
    let html = "";
    if (target != null) {
      const now = m.net == null ? "" : (m.netApprox ? "~" : "") + dpMoney(m.net) + t("dp_permo");
      html += `<div class="kpis">${kpi(t("dp_target"), dpMoney(target) + t("dp_permo"), esc(now))}</div>`;
      if (m.net != null && target > 0) html += bar(Math.max(m.net > 0 ? 2 : 0, Math.min(100, (m.net / target) * 100)));
    }
    if (m.decisionDays != null && dpValid(store.decisionDate)) {
      const date = fmtStart(store.decisionDate);
      let msg = t("dp_count_0");
      if (m.decisionDays > 1) msg = fill(t("dp_count"), { n: int(m.decisionDays), date: date });
      else if (m.decisionDays === 1) msg = fill(t("dp_count_1"), { date: date });
      else if (m.decisionDays < 0) msg = fill(t("dp_count_past"), { date: date });
      html += `<p class="hint">${esc(msg)}</p><p class="flag">${esc(fill(t("dp_decision_copy"), { date: date }))}</p>`;
    }
    return html;
  }
  function dpLevers(store) {
    const levers = dpList(store.levers).filter((l) => l && l.id);
    if (!levers.length) return "";
    const items = levers.map((l) => {
      const sign = l.direction === "down" ? "-" : l.direction === "up" ? "+" : "";
      const approx = l.approximate ? "~" : "";
      const one = dpNum(l.monthly), lo = dpNum(l.monthlyLow), hi = dpNum(l.monthlyHigh);
      let amt = "";
      if (one != null) amt = approx + sign + dpMoney(one) + t("dp_permo");
      else if (lo != null && hi != null) amt = approx + sign + dpMoney(lo) + " " + t("dp_to") + " " + dpMoney(hi) + t("dp_permo");
      else if (lo != null) amt = approx + sign + dpMoney(lo) + t("dp_permo");
      return `<li><b>${esc(t("dp_lever_" + l.id))}</b>${amt ? " " + esc(amt) : ""}</li>`;
    }).join("");
    return `<h3>${esc(t("dp_levers"))}</h3><ul class="notes">${items}</ul>`;
  }
  function dpSavings(store) {
    const sv = store.savings;
    if (!sv) return "";
    const buy = dpNum(sv.supermarketMonthly), lo = dpNum(sv.saveLow), hi = dpNum(sv.saveHigh);
    if (buy == null || lo == null || hi == null) return "";
    return `<p class="hint">${esc(fill(t("dp_savings"), { buy: dpMoney(buy), low: dpMoney(lo), high: dpMoney(hi) }))}</p>`;
  }
  function dpProfitCard(store, m) {
    const rows = dpList(store.monthly).filter((r) => r && typeof r === "object");
    const hint = rows.some((r) => r.month) ? t("dp_profit_hist") : t("dp_profit_now");
    return card(t("dp_profit"), hint, dpTargetHtml(store, m) + dpNetChart(rows) + dpMonthTable(rows) + dpPctChart(m) + dpGapHtml(m) +
      (store.drawsTakeAlmostAll ? `<p class="hint">${esc(t("dp_draws_note"))}</p>` : "") + dpSavings(store) + dpLevers(store));
  }
  function dpModel(store, meta) {
    const id = store.id === "vila" ? "vila" : "bar";
    const today = dpIso(new Date());
    const debt = store.debt && typeof store.debt === "object" ? store.debt : {};
    const payments = dpList(debt.payments);
    const plan = dpList(store.plan);
    const start = dpNum(debt.startBalance) || 0;
    const paidAll = dpPaid(payments, "amount");
    const current = Math.max(0, (Math.round(start * 100) - Math.round(paidAll * 100)) / 100);
    const paidToDate = dpPaid(payments, "amount", (p) => dpValid(p.date) && p.date <= today);
    const plannedToDate = dpPaid(plan, "extra", (p) => dpValid(p.date) && p.date <= today);
    let payoff = "";
    plan.forEach((r) => { if (!payoff && r && dpNum(r.debtAfter) != null && dpNum(r.debtAfter) <= 0.009 && dpValid(r.date)) payoff = r.date; });
    const rule = store.rule && typeof store.rule === "object" ? store.rule : {};
    const payDate = dpNextPay(rule.payDay, today);
    const fl = dpFloor(rule, payDate);
    const floorToday = dpFloor(rule, today);
    const bank = dpNum(store.bankBalance);
    const targetWk = dpNum(rule.weeklyExtraTarget);
    const suggested = dpSuggest(bank, fl.floor, targetWk);
    const planHit = plan.find((r) => r && r.date === payDate);
    const rows = dpList(store.monthly).filter((r) => r && typeof r === "object");
    let laborPct = null, rentPct = null, net = null, netApprox = false;
    rows.forEach((r) => {
      const lp = dpShare(r.labor, r.deposits, r.laborPct);
      const rp = dpShare(r.rent, r.deposits, r.rentPct);
      if (lp != null) laborPct = lp;
      if (rp != null) rentPct = rp;
      if (dpNum(r.net) != null) { net = dpNum(r.net); netApprox = !!r.approximate; }
    });
    const gap = store.salesGap && typeof store.salesGap === "object" ? store.salesGap : {};
    const anota = dpNum(gap.anotaSales), bankDep = dpNum(gap.bankDeposits);
    let gapAmt = null, gapPct = null;
    if (anota != null && bankDep != null) {
      gapAmt = (Math.round(anota * 100) - Math.round(bankDep * 100)) / 100;
      gapPct = anota === 0 ? null : (anota - bankDep) / anota;
    } else {
      gapAmt = dpNum(gap.gap);
      gapPct = dpNum(gap.gapPct);
      if (gapPct == null && gapAmt != null && anota) gapPct = gapAmt / anota;
    }
    const warnAbove = dpNum(meta.gapWarnAbove);
    const gapWarnAbove = warnAbove == null ? 0.05 : warnAbove;
    const obs = dpList(store.obligations);
    const due7 = dpSumDue(obs, today, dpAddDays(today, 7));
    const due30 = dpSumDue(obs, today, dpAddDays(today, 30));
    return {
      id: id, today: today, supplier: dpPublic(debt.supplier) || "Boutique", start: start, startDate: debt.startDate,
      current: current, paidAll: paidAll, paidToDate: paidToDate, plannedToDate: plannedToDate,
      behind: paidToDate + 0.009 < plannedToDate, payoff: payoff, progress: start > 0 ? Math.min(100, (paidAll / start) * 100) : 0,
      payDate: payDate, floor: fl.floor, floorRaised: fl.raised, windowDays: fl.days, floorToday: floorToday.floor,
      bank: bank, reserva: dpNum(store.reserva), targetWk: targetWk, suggested: suggested,
      warnShort: suggested != null && targetWk != null && suggested + 0.009 < targetWk,
      warnFloor: bank != null && fl.floor != null && bank + 0.009 < fl.floor,
      planExtra: planHit ? dpNum(planHit.extra) : null,
      laborPct: laborPct, rentPct: rentPct, net: net, netApprox: netApprox,
      gapPct: gapPct, gapAmt: gapAmt, gapMonth: gap.month || "", gapApprox: !!gap.approximate,
      gapWarn: gapPct != null && gapPct > gapWarnAbove + 1e-9, gapWarnAbove: gapWarnAbove, anota: anota, bankDep: bankDep,
      headroom: dpHeadroom(bank, floorToday.floor), due7: due7, due30: due30,
      decisionDays: dpValid(store.decisionDate) ? dpSpan(today, store.decisionDate) : null,
      asOf: dpValid(store.asOf) ? store.asOf : (dpValid(meta.asOf) ? meta.asOf : ""),
      attrs: dpDataAttrs({
        store: id, balance: dpAttr(current), bank: dpAttr(bank), reserva: dpAttr(store.reserva),
        suggested: dpAttr(suggested), floor: dpAttr(fl.floor), payoff: payoff, pace: paidToDate + 0.009 < plannedToDate ? "behind" : "on",
        due7: dpAttr(due7), due30: dpAttr(due30), headroom: dpAttr(dpHeadroom(bank, floorToday.floor)), obcount: String(obs.length),
        gap: gapPct == null ? "" : String(Math.round(gapPct * 10000) / 10000),
        days: dpValid(store.decisionDate) ? String(dpSpan(today, store.decisionDate)) : ""
      })
    };
  }
  function dpDrinks(id) {
    const j = D.debt && D.debt.drinks;
    if (!j || j[id] == null) return "";
    return card(t("k_drinks"), t("drinks_sub"), `<div class="kpi"><div class="kl">${esc(t(id))}</div><div class="kv">${brl(j[id], 0)}</div></div><p class="hint">${esc(t("dp_no_loans"))}</p>`);
  }
  function dpBrowserPays(id) {
    const rows = payments().map((p, i) => ({ p: p, i: i })).filter((x) => x.p && x.p.store === id);
    if (!rows.length) return "";
    return `<h3>${esc(t("dp_browser_pays"))}</h3>` + table([t("debt_date"), t("debt_sup"), t("debt_amt"), ""], rows.map((x) => [fmtD(x.p.date), esc(x.p.supplier || ""), brl(x.p.amount), `<button type="button" class="ghost sm" data-delpay="${x.i}">${esc(t("del"))}</button>`]));
  }
  function dpLegacyPlan() {
    const pays = payments(), rows = schedule(), paid = paidTotal(), next = nextPayDate();
    let cum = 0;
    const sched = rows.map((r) => {
      cum += r.pay;
      const st = cum <= paid + 0.005 ? `<span class="pill ok">${t("st_done")}</span>` : r.date === next ? `<span class="pill low">${t("st_next")}</span>` : `<span class="pill plan">${t("st_plan")}</span>`;
      return [r.w, `${fmtD(r.date)} · ${fmtD(r.end)}`, brl(r.pay, 0), brl(r.bal, 0), st];
    });
    const opts = (arr) => arr.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join("");
    return `<details class="plan legacy"><summary>${esc(t("dp_legacy_title"))}</summary>
      <p class="hint">${esc(t("dp_legacy_hint"))} ${esc(t("debt_sched_hint"))}</p>
      <div class="kpis">${kpi(t("k_paid"), brl(paid, 0), t("shared_plan"), "good")}${kpi(t("plan_left"), brl(remaining(), 0), t("shared_plan"))}${kpi(t("k_weeks"), weeksLeft(), t("k_weeks_sub"))}</div>
      ${bar(debtStart() ? paid / debtStart() * 100 : 0)}
      <p class="flag">${esc(t("debt_flag"))}</p>
      <p class="hint">${esc(t("dp_paid_off"))}</p>
      <h3>${esc(t("debt_log"))}</h3><form id="payf" class="row">
      <div><label>${esc(t("debt_date"))}</label><input type="date" name="date" value="${next}" required></div>
      <div><label>${esc(t("debt_amt"))}</label><input type="number" name="amount" step="0.01" min="0.01" value="${Math.min(D.debt.weekly, Math.max(remaining(), 0.01))}" required></div>
      <div><label>${esc(t("debt_sup"))}</label><select name="supplier">${opts((D.suppliers || []).map((s) => [s.name, s.name]))}</select></div>
      <div><label>${esc(t("debt_store"))}</label><select name="store"><option value="bar">${esc(t("bar"))}</option><option value="vila">${esc(t("vila"))}</option></select></div>
      <div class="btncell"><button class="primary" type="submit">${esc(t("debt_add"))}</button></div></form>
      ${pays.length ? "" : `<p class="hint">${esc(t("debt_none"))}</p>`}
      ${table([t("wk"), t("wk_of"), t("pay"), t("bal"), t("status")], sched, "compact")}
      ${src(D.debt.source, D.debt.asOf)}</details>`;
  }
  function dpColumn(store, meta) {
    const m = dpModel(store, meta);
    return `<section class="dp-col ${m.id}" aria-label="${esc(t(m.id))}"${m.attrs}><div class="dp-banner">${esc(t(m.id))}</div>
      ${src(meta.source || "Stone extratos", m.asOf)}
      ${dpDebtCard(store, m)}${dpDrinks(m.id)}${dpBrowserPays(m.id)}${dpRuleCard(store, m)}${dpObCard(store, m)}${dpProfitCard(store, m)}</section>`;
  }
  function dpView(data) {
    const meta = { source: data.source || "Stone extratos", asOf: data.asOf || "", gapWarnAbove: dpNum(data.gapWarnAbove) };
    const list = dpList(data.stores);
    const cols = ["bar", "vila"].map((id) => {
      const store = list.find((s) => s && s.id === id);
      if (!store) return `<section class="dp-col ${id}" data-store="${id}"><div class="dp-banner">${esc(t(id))}</div><p class="hint">${esc(t("dp_missing"))}</p></section>`;
      return dpColumn(store, meta);
    }).join("");
    return `<p class="hint">${esc(t("dp_hint"))}</p><div class="dp-stores">${cols}</div>` +
      dpLegacyPlan() +
      card(t("dp_log"), "", `<p class="dp-log">${esc(t("dp_log_help"))}</p><p class="hint"><code>data/debtProfit.json</code> · <code>payments</code> · <code>{ date, amount, note }</code></p>`);
  }
  function loadDebtProfit() {
    fetch("data/debtProfit.json", { cache: "no-cache" }).then((r) => {
      if (!r.ok) throw new Error(String(r.status));
      return r.json();
    }).then((data) => {
      dpState = { status: "ready", data: data };
      if (view === "profit") render();
    }).catch(() => {
      dpState = { status: "error", data: null };
      if (view === "profit") render();
    });
  }
  V.profit = function () {
    try {
      if (dpState.status === "loading") return card(t("nav_profit"), t("dp_hint"), `<p class="hint">${esc(t("dp_loading"))}</p>`);
      if (dpState.status !== "ready" || !dpState.data) return card(t("nav_profit"), t("dp_hint"), `<p class="flag bad">${esc(t("dp_error"))}</p>`);
      return dpView(dpState.data);
    } catch (err) {
      console.error(err);
      return card(t("nav_profit"), "", `<p class="flag bad">${esc(t("dp_error"))}</p>`);
    }
  };

  /* ---------- Shell ---------- */
  let view = localStorage.getItem(LS.view) || "dashboard";
  if (view === "debt") view = "profit";
  function renderTabs() {
    const el = $("#tabs");
    el.innerHTML = NAV.map(([id, d]) =>
      `<button class="tab${id === view ? " active" : ""}" role="tab" aria-selected="${id === view}" data-view="${id}">${ico(d)}<span>${t("nav_" + id)}</span>${id === "approvals" && pending() ? `<span class="tabbadge">${pending()}</span>` : ""}</button>`).join("");
    const a = el.querySelector(".tab.active");
    if (a && el.scrollWidth > el.clientWidth) { const l = a.offsetLeft - (el.clientWidth - a.offsetWidth) / 2; el.scrollLeft = Math.max(0, l); }
  }
  function render() {
    if (!V[view]) view = "dashboard";
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    $("#sub").textContent = t("sub"); $("#asof").textContent = `${t("asof")} ${fmtD(D.asOf)}`;
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));
    renderTabs(); $("#view").innerHTML = V[view](); document.title = `Paulista OS · ${t("nav_" + view)}`;
  }
  function go(v) { if (v === "debt") v = "profit"; view = v; localStorage.setItem(LS.view, v); location.hash = v; render(); window.scrollTo(0, 0); }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b && b.dataset.cal && b.dataset.store) {
      const id = b.dataset.store === "vila" ? "vila" : "bar";
      const today = dpIso(new Date());
      const cur = dpShownMonth(id, today);
      const dt = dpParse(cur + "-01");
      dt.setMonth(dt.getMonth() + (b.dataset.cal === "next" ? 1 : -1));
      dpCalMonth[id] = dpIso(dt).slice(0, 7);
      dpPop = null;
      return render();
    }
    if (b && b.dataset.chip && b.dataset.store) {
      dpPop = { store: b.dataset.store === "vila" ? "vila" : "bar", key: b.dataset.chip };
      return render();
    }
    if (b && b.dataset.calday && b.dataset.store) {
      dpPop = { store: b.dataset.store === "vila" ? "vila" : "bar", date: b.dataset.calday };
      return render();
    }
    if (b && b.dataset.calclose != null) { dpPop = null; return render(); }
    if (dpPop && !e.target.closest(".calpop")) { dpPop = null; render(); }
    if (!b) return;
    if (b.dataset.view) return go(b.dataset.view);
    if (b.dataset.lang) { lang = b.dataset.lang; localStorage.setItem(LS.lang, lang); return render(); }
    if (b.dataset.delpay != null) { const p = payments(); p.splice(+b.dataset.delpay, 1); save(LS.pays, p); return render(); }
    if (b.dataset.ap != null) { const a = approvals(); a[+b.dataset.ap].status = b.dataset.st; save(LS.ap, a); return render(); }
    if (b.id === "apreset") { localStorage.removeItem(LS.ap); return render(); }
    if (b.id === "dailymore") { dailyShowAll = true; return render(); }
    if (b.id === "dailyless") { dailyShowAll = false; return render(); }
    if (b.dataset.itemstore) { itemStore = b.dataset.itemstore; return render(); }
    if (b.dataset.itemcat) { itemCat = b.dataset.itemcat; return render(); }
    if (b.dataset.itemperiod != null) { itemPeriod = Number(b.dataset.itemperiod); return render(); }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id !== "itemq") return;
    itemQuery = e.target.value;
    paintItems();
  });
  document.addEventListener("change", (e) => {
    if (e.target.id !== "itemperiod") return;
    itemPeriod = Number(e.target.value);
    render();
  });
  document.addEventListener("submit", (e) => {
    e.preventDefault(); const f = Object.fromEntries(new FormData(e.target));
    if (e.target.id === "payf") { const p = payments(); p.push({ date: f.date, amount: +f.amount, supplier: f.supplier, store: f.store }); p.sort((x, y) => x.date.localeCompare(y.date)); save(LS.pays, p); }
    if (e.target.id === "apf") {
      if (f.type === "draw" && f.store !== "bar") { const m = $("#apmsg"); m.hidden = false; m.textContent = t("ap_vila_block"); return; }
      const a = approvals(); a.unshift({ id: "u" + Date.now(), date: f.date, store: f.store, type: f.type, desc: f.desc, amount: f.amount === "" ? null : +f.amount, by: "manager", status: "pending" }); save(LS.ap, a);
    }
    render();
  });
  window.addEventListener("hashchange", () => {
    const h = location.hash.slice(1);
    if (h === "debt") { if (location.hash !== "#profit") location.hash = "profit"; return; }
    if (h && h !== view && V[h]) go(h);
  });
  const h = location.hash.slice(1);
  if (h === "debt") { view = "profit"; location.hash = "profit"; }
  else if (V[h]) view = h;
  loadDebtProfit();
  render();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js").catch(() => {});
})();
