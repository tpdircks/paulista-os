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
    ["debt", "M3 17l6-6 4 4 8-8M14 7h7v7"],
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
  function approvals() { let a = load(LS.ap, null); const mk = (x) => ({ ...x, by: "Lucas", status: "pending", sample: true });
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
        ${kpi(t("k_debt"), brl(D.debt[id], 0), t("source") + ": Lucas 02/11")}
        ${kpi(t("k_cash"), brl(D.cashToday[id]), `${t("c_cover")}: ${(D.cashToday[id] / D.debt[id] * 100).toFixed(1)}% · ${t("c_close")} ${brl(st[id].close)}`)}</div>`)).join("")}</div>` +
      card(t("notes_title"), "", `<ul class="notes">${D.notes.map((n) => `<li><span class="tag">${sname(n.store)}</span> ${esc(txt(n))}</li>`).join("")}</ul>${src("Lucas 03/11 + Stone Oct", D.asOf)}`) + rulesBox();
  };
  V.debt = () => {
    const pays = payments(), rows = schedule(), paid = paidTotal(), next = nextPayDate();
    let cum = 0;
    const sched = rows.map((r) => { cum += r.pay; const st = cum <= paid + 0.005 ? `<span class="pill ok">${t("st_done")}</span>` : r.date === next ? `<span class="pill low">${t("st_next")}</span>` : `<span class="pill plan">${t("st_plan")}</span>`;
      return [r.w, `${fmtD(r.date)} – ${fmtD(r.end)}`, brl(r.pay, 0), brl(r.bal, 0), st]; });
    const opts = (arr) => arr.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join("");
    return card(t("debt_title"), t("debt_hint"),
      `<div class="peers">${peerStat("bar", brl(D.debt.bar, 0), t("debt_start"))}${peerStat("vila", brl(D.debt.vila, 0), t("debt_start"))}</div>
      <div class="kpis">${kpi(t("k_paid"), brl(paid, 0), t("shared_plan"), "good")}${kpi(t("plan_left"), brl(remaining(), 0), t("shared_plan"), "alert")}
      ${kpi(t("k_weeks"), weeksLeft(), t("k_weeks_sub"))}</div>${bar(paid / debtStart() * 100)}
      <p class="hint">${esc(t("k_jonas"))}: ${esc(t("bar"))} ${brl(D.debt.jonas.bar, 0)} · ${esc(t("vila"))} ${brl(D.debt.jonas.vila, 0)}. ${esc(t("jonas_sub"))}</p>
      <p class="flag">${esc(t("debt_flag"))}</p>
      <h3>${t("debt_log")}</h3><form id="payf" class="row">
      <div><label>${t("debt_date")}</label><input type="date" name="date" value="${next}" required></div>
      <div><label>${t("debt_amt")}</label><input type="number" name="amount" step="0.01" min="0.01" value="${Math.min(D.debt.weekly, remaining())}" required></div>
      <div><label>${t("debt_sup")}</label><select name="supplier">${opts(D.suppliers.map((s) => [s.name, s.name]))}</select></div>
      <div><label>${t("debt_store")}</label><select name="store">${opts([["bar", t("bar")], ["vila", t("vila")]])}</select></div>
      <div class="btncell"><button class="primary" type="submit">${t("debt_add")}</button></div></form>
      <h3>${t("debt_paid")}</h3>${pays.length ? table([t("debt_date"), t("debt_sup"), t("debt_store"), t("debt_amt"), ""],
        pays.map((p, i) => [fmtD(p.date), esc(p.supplier), sname(p.store), brl(p.amount), `<button class="ghost sm" data-delpay="${i}">${t("del")}</button>`])) : `<p class="hint">${t("debt_none")}</p>`}
      ${src(D.debt.source, D.debt.asOf)}`) +
      card(t("debt_sched"), t("debt_sched_hint"), table([t("wk"), t("wk_of"), t("pay"), t("bal"), t("status")], sched, "compact"));
  };
  V.cash = () => {
    const s = D.stone, p = D.stoneSep;
    const income = [["c_in", "inflow", true], ["c_sales", "sales", false], ["c_pix", "pixMaq", false], ["c_card", "card", false]];
    const expense = [["c_out", "outflow", true], ["c_sup", "suppliers", false], ["c_jonas", "jonas", false], ["c_util", "utilities", false], ["c_rent", "rent", false], ["c_gm", "gm", false], ["c_people", "people", false], ["c_pers", "personal", false], ["c_fees", "fees", false]];
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
    return card(t("cash_title"), t("cash_hint"),
      `<h3 class="sec bal">${esc(t("cash_balances"))}</h3>
      <div class="books balance">${["bar", "vila"].map(bal).join("")}</div>
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
      `<p class="flag">${esc(t("staff_flag"))}</p>${src("Lucas 03/11 + Stone Oct")}`) +
    card(t("login_title"), t("login_hint"), table([t("lg_sys"), t("debt_store"), t("lg_user"), "Email"], D.logins.map((x) => [esc(x.sys), sname(x.store), esc(x.user), x.email ? esc(x.email) : "—"])) + src("Lucas 03/11"));
  V.suppliers = () => card(t("sup_title"), t("sup_hint"),
    table([t("sup_name"), t("sup_role"), t("sup_sep") + " · " + t("bar"), t("sup_sep") + " · " + t("vila"), t("sup_oct") + " · " + t("bar"), t("sup_oct") + " · " + t("vila")],
      D.suppliers.map((s) => [`<b>${esc(s.name)}</b>`, `<span class="pill ${s.role === "primary" ? "ok" : "plan"}">${t(s.role)}</span>`, brl(s.bar), brl(s.vila), brl(s.barOct), brl(s.vilaOct)]), "num") + src(D.stone.source)) +
    card(t("sup_debt"), "", `<div class="peers">${peerStat("bar", brl(D.debt.bar, 0), t("debt_start"))}${peerStat("vila", brl(D.debt.vila, 0), t("debt_start"))}</div>
      <p class="hint">${esc(t("k_jonas"))}: ${esc(t("bar"))} ${brl(D.debt.jonas.bar, 0)} · ${esc(t("vila"))} ${brl(D.debt.jonas.vila, 0)}. ${esc(t("jonas_sub"))}</p>
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

  /* ---------- Shell ---------- */
  let view = localStorage.getItem(LS.view) || "dashboard";
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
  function go(v) { view = v; localStorage.setItem(LS.view, v); location.hash = v; render(); window.scrollTo(0, 0); }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
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
      const a = approvals(); a.unshift({ id: "u" + Date.now(), date: f.date, store: f.store, type: f.type, desc: f.desc, amount: f.amount === "" ? null : +f.amount, by: "Lucas", status: "pending" }); save(LS.ap, a);
    }
    render();
  });
  window.addEventListener("hashchange", () => { const h = location.hash.slice(1); if (h && h !== view && V[h]) go(h); });
  const h = location.hash.slice(1); if (V[h]) view = h;
  render();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js").catch(() => {});
})();
