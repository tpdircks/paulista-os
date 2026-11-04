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
  const src = (s, d) => `<p class="src">${t("source")}: ${esc(s)}${d ? " · " + t("asof") + " " + fmtD(d) : ""}</p>`;
  const table = (head, rows, cls = "") => `<div class="tw"><table class="${cls}"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  const rulesBox = () => `<section class="card rules"><h2>${t("rules_title")}</h2><ol>${D.rules.map((r) => `<li>${esc(t("rule_" + r))}</li>`).join("")}</ol></section>`;
  const sname = (id) => id === "both" ? t("both") : t(id);
  const bar = (pct) => `<div class="pbar"><div style="width:${Math.min(100, pct).toFixed(1)}%"></div></div>`;

  /* ---------- Views ---------- */
  const V = {};
  V.dashboard = () => {
    const s = D.sales, st = D.stone, rem = remaining(), raise = D.menu.effective, today = iso(new Date());
    const days = Math.round((parseD(raise) - parseD(today)) / 864e5);
    const raiseSub = days > 0 ? `${days} ${t("k_days")}` : days === 0 ? t("k_today") : t("k_live");
    const z = zeroWeek();
    const hero = `<section class="hero"><img class="herologo" src="assets/logo.jpg" alt="Pizzaria do Paulista" width="84" height="84">
      <div class="herotxt"><div class="herotag">${t("brand_tag")}</div><div class="heroline">${t("brand_line")}</div>
      <div class="phones">${D.stores.map((x) => `<a class="phonepill" href="tel:+55${x.phone.replace(/\D/g, "")}"><b>${t(x.id)}</b> ${esc(x.phone)}</a>`).join("")}</div></div>
      <div class="heroimg" aria-hidden="true"></div></section>`;
    return hero + card(t("dash_title"), t("dash_hint"),
      `<div class="kpis">${kpi(t("k_debt"), brl(rem, 0), `${t("debt_start")} ${brl(debtStart(), 0)} · ${t("k_paid")} ${brl(paidTotal(), 0)}`, "alert")}
      ${kpi(t("k_weeks"), weeksLeft(), t("k_weeks_sub"))}
      ${kpi(t("k_zero"), z ? fmtD(z) : "✓", z ? `${t("wk_of")} ${fmtD(z)} – ${fmtD(addDays(z, 6))}` : "")}
      ${kpi(t("k_raise"), fmtD(raise), raiseSub, "accent")}
      ${kpi(t("k_pending"), pending(), "", pending() ? "warn" : "")}</div>
      ${bar(paidTotal() / debtStart() * 100)}` ) +
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
      `<div class="kpis">${kpi(t("debt_start"), brl(debtStart(), 0), `${t("bar")} ${brl(D.debt.bar, 0)} · ${t("vila")} ${brl(D.debt.vila, 0)}`)}
      ${kpi(t("k_paid"), brl(paid, 0), "", "good")}${kpi(t("k_debt"), brl(remaining(), 0), "", "alert")}
      ${kpi(t("k_weeks"), weeksLeft(), t("k_weeks_sub"))}
      ${kpi(t("k_jonas"), brl(D.debt.jonas.amount), t("jonas_sub"), "warn")}</div>${bar(paid / debtStart() * 100)}<p class="flag">${esc(t("debt_flag"))}</p>
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
    const s = D.stone, f = [["c_open", "open"], ["c_in", "inflow"], ["c_out", "outflow"], ["c_close", "close"], ["c_sales", "sales"], ["c_pix", "pixMaq"], ["c_card", "card"],
      ["c_sup", "suppliers"], ["c_jonas", "jonas"], ["c_util", "utilities"], ["c_rent", "rent"], ["c_gm", "gm"], ["c_people", "people"], ["c_pers", "personal"], ["c_fees", "fees"]], p = D.stoneSep;
    const rows = f.map(([l, k]) => [t(l), brl(s.bar[k]), brl(s.vila[k]), brl(s.bar[k] + s.vila[k]), brl(p.bar[k] + p.vila[k])]);
    rows.push([t("c_low"), s.bar.low, s.vila.low, "—", p.bar.low + " · " + p.vila.low]);
    rows.push([`<b>${t("c_today")} ${fmtD(D.cashToday.date)}</b>`, `<b>${brl(D.cashToday.bar)}</b>`, `<b>${brl(D.cashToday.vila)}</b>`, `<b>${brl(D.cashToday.bar + D.cashToday.vila)}</b>`, "—"]);
    rows.push([t("c_cover"), (s.bar.close / D.debt.bar * 100).toFixed(1) + "%", (s.vila.close / D.debt.vila * 100).toFixed(1) + "%", ((s.bar.close + s.vila.close) / debtStart() * 100).toFixed(1) + "%", "—"]);
    return card(t("cash_title"), t("cash_hint"),
      `<div class="kpis">${kpi(t("bar") + " · " + t("c_close"), brl(s.bar.close), D.stores[0].stone)}${kpi(t("vila") + " · " + t("c_close"), brl(s.vila.close), D.stores[1].stone)}
      ${kpi(t("total"), brl(s.bar.close + s.vila.close), `${t("k_debt")} ${brl(debtStart(), 0)}`, "alert")}</div>
      ${table(["", t("bar"), t("vila"), t("total"), t("c_sep")], rows, "num")}<p class="flag">${esc(t("cash_flag"))}</p>${src(s.source)}${src(D.cashToday.source, D.cashToday.date)}`) +
      card(t("cash_rule_t"), "", `<p class="rule">${esc(t("cash_rule"))}</p>`) + rulesBox();
  };
  V.sales = () => {
    const s = D.sales, tot = { revenue: s.bar.revenue + s.vila.revenue, orders: s.bar.orders + s.vila.orders };
    const row = (l, x) => [l, brl(x.revenue), int(x.orders), brl(x.revenue / x.orders), (x.revenue / tot.revenue * 100).toFixed(1) + "%", brl(x.revenue / 31)];
    const mo = tot.orders * 5, wk = mo * 12 / 52;
    return card(t("sales_title"), t("sales_hint"),
      `<div class="kpis">${kpi(t("total") + " · " + t("s_rev"), brl(tot.revenue), `${int(tot.orders)} ${t("k_orders")}`)}
      ${kpi(t("bar"), brl(s.bar.revenue), `${int(s.bar.orders)} ${t("k_orders")} · ${t("k_ticket")} ${brl(s.bar.ticket)}`)}
      ${kpi(t("vila"), brl(s.vila.revenue), `${int(s.vila.orders)} ${t("k_orders")} · ${t("k_ticket")} ${brl(s.vila.ticket)}`)}</div>
      ${table(["", t("s_rev"), t("s_orders"), t("s_ticket"), t("s_share"), t("s_daily")], [row(t("bar"), s.bar), row(t("vila"), s.vila), row(t("total"), tot)], "num")}
      <h3>${t("s_stone")}</h3>${table(["", t("s_rev"), t("s_stonecr"), t("s_gap")], ["bar", "vila"].map((id) => [t(id), brl(s[id].revenue), brl(s[id].stone), brl(s[id].revenue - s[id].stone) + " (" + ((1 - s[id].stone / s[id].revenue) * 100).toFixed(1) + "%)"]), "num")}<p class="flag">${esc(t("s_gap_flag"))}</p>
      <h3>${t("s_raise")}</h3><p class="hint">${t("s_raise_hint")} <b>${brl(mo, 0)}</b> ${t("s_permo")} · <b>${brl(wk, 0)}</b> ${t("s_perwk")} (${int(tot.orders)} × R$ 5).</p>${src(s.source)}`);
  };
  V.menu = () => {
    const m = D.menu;
    return card(t("menu_title"), t("menu_hint"), table([t("m_item"), t("m_inc")], m.changes.map((c) => [t("m_" + c.k), `<b>+${brl(c.inc, 0)}</b>`])) ) +
      card(t("m_bands"), "", table([t("m_item"), t("m_before"), t("m_after"), t("m_inc")],
        m.bands.map((b) => [t(b.k === "calzone" ? "m_calzone" : "m_" + b.k), `${brl(b.lo)} – ${brl(b.hi)}`, `<b>${brl(b.lo + b.inc)} – ${brl(b.hi + b.inc)}</b>`, "+" + brl(b.inc, 0)]), "num") +
        `<p class="hint">${t("m_other")}</p>${src("Anota AI cardápio, 2026-10-30", m.effective)}`) +
      card(t("m_sodas"), "", table([t("m_item"), t("m_before"), t("m_after")], m.sodas.map((x) => [esc(x.n), brl(x.p), `<b>${brl(x.p + x.inc)}</b>`]), "num") +
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
    card(t("sup_debt"), "", `<div class="kpis">${kpi(t("bar"), brl(D.debt.bar, 0))}${kpi(t("vila"), brl(D.debt.vila, 0))}${kpi(t("total"), brl(debtStart(), 0), `${t("k_debt")}: ${brl(remaining(), 0)}`, "alert")}${kpi(t("k_jonas"), brl(D.debt.jonas.amount), t("jonas_sub"), "warn")}</div>
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
