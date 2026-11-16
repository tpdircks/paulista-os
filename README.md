# Paulista OS

A simple bilingual (English / Português) operating system for Troy's two Brazil pizza stores, **Pizzaria do Paulista Barcarena (sede)** and **Pizzaria do Paulista Vila**. It looks like Smackin' OS (Barlow font, navy header, top tabs) but is much smaller: one page of static files, no build step, no server, no database.

## What it does

| Section | Purpose |
|---|---|
| Dashboard | Home for daily Anota sales: yesterday (or the latest day) with Barcarena and Vila side by side, then the last 14 days as paired bars. October item snapshot (sizes, top pizzas, top sodas) split by store. The shared R$ 1.000/week debt plan is labeled as one plan; Oct sales, Boutique debt, and Stone balance stay on the two store cards. |
| Debt | Supplier debt tracker (R$ 32.724 starting, from Lucas 02/11/2026), log weekly payments, 33-week payoff schedule (10/11/2026 → last R$ 724 on 22/06/2027, week ending 28/06/2027) |
| Debt & Profit | Per-store Boutique payoff, Wednesday extra, obligations, and owner profit. Barcarena and Vila are separate columns. There is no combined total. Numbers live in `data/debtProfit.json`. |
| Cash | October 2026 Stone summaries split into balances, income, and expenses. Each section is Barcarena and Vila only. September sits under each figure. Approval rule for money out. |
| Sales | Fuller daily Anota history (about 3 months) and the October 2026 monthly summary, plus a rough +R$ 5 raise effect |
| Items | Anota item counts for the selected period: sizes, pizzas, sodas, crusts, calzones, and sweets. Barcarena and Vila columns are the default. Filter to one store when you want only that book. |
| Menu | Nov 7, 2026 raise package (printed cardápio Fri Nov 6 at both stores; new prices and weekend frete grátis Sat Nov 7; no public announcement) and before/after price bands |
| Stores | Addresses, Anota users, Stone accounts, owner-draw rule, fixed costs from Lucas |
| Suppliers | Boutique dos Frios (primary, paid first) and others, Sep payments, debt by store |
| Approvals | Lucas proposes, Troy approves or rejects. Saved in the browser |

House rules built in: all company money goes through Troy; Lucas proposes buys; living draw from Barcarena only with Troy's OK; no owner draw from Vila (the form blocks it); R$ 1.000/week to supplier debt, Boutique dos Frios first.

## Open it

Double-click `index.html`, or drag it into Chrome, Safari, or Edge. Use the **EN | PT** buttons at the top right. Your language, payments, and approvals are saved in that browser (`localStorage`). Other people's browsers won't see them.

To update the seeded numbers, edit `data.js` (amounts, dates, sources). Debt, profit, and obligations for the Debt & Profit tab live in `data/debtProfit.json`. Labels for both languages are in `i18n.js`.

## Daily sales

`dailySales` in `data.js` is one Anota row per day (`date`, Barcarena, Vila, `source`). It currently holds 2026-08-06 through 2026-11-05 from Relatórios > Pedidos (cancelled orders excluded). Do not type in guessed revenue. A morning job refreshes `data.js` from the Anota CSV (about 3 months of history, then the new day each morning). The Dashboard is the home for that series: yesterday or the latest day as two peer cards (revenue, orders, ticket), then the last 14 days as Barcarena and Vila bars on one scale. There is no combined total card. The Sales tab keeps the longer list, the same bars, and the October summary per store. With an empty list both places show a short note and no guessed numbers. The monthly `sales` object stays for the October cards. A later row with the same date replaces the earlier one.

`itemSales` in `data.js` holds the Anota item reports. `defaultPeriod` is `2026-11-mtd` (Nov 1 to 5). `periods` also includes full October 2026. The nested `itemSales` object is the November copy and `itemSalesOctober` is October. The Dashboard and Items tab share a period switcher and open on November. Add a newer report to `periods` and point `defaultPeriod` at its id. Repeated Anota names are already merged in this file.

## Deploy to GitHub Pages

1. Create a repo, for example `tpdircks/paulista-os`.
2. Put these files in the repo root: `index.html`, `styles.css`, `data.js`, `i18n.js`, `app.js`, `service-worker.js`, `README.md`.
3. `git add . && git commit -m "Paulista OS v1" && git push`
4. On GitHub, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, pick `main` / `(root)`, and save.
5. After about a minute the site is at `https://tpdircks.github.io/paulista-os/`. When it runs over https, the service worker caches it for offline use.

Note: GitHub Pages sites are public. Anyone with the link can see the numbers in `data.js`. Make the repo private with a paid plan, or add a login, before you share the link widely.

## Debt and profit data

`data/debtProfit.json` is the file a daily job rewrites. Barcarena (`id: "bar"`) and Vila (`id: "vila"`) each have their own object. The screen never adds one store to the other. Omit any key you do not have. Do not invent months. Do not put CPF, CNPJ, account or agency numbers, emails, or personal payee names in labels, notes, or alerts.

Top level: `source`, `asOf` (`YYYY-MM-DD`), `gapWarnAbove` (default 0.05), `stores[]`.

Each store:

- `asOf`, `bankBalance`. Optional `reserva` is shown alone and is not added to `bankBalance`.
- `debt`: `supplier`, `startBalance`, `startDate`, `payments[]` of `{date, amount, note}`.
- `rule`: `floor`, `floorBefore10th`, `weeklyExtraTarget`, `payDay`, optional `floorWindowDays` (default 7). This Wednesday's extra is the weekly target, or the bank balance minus the floor, whichever is smaller, and never below zero. The higher floor applies when the next 10th is within `floorWindowDays` of that Wednesday.
- `plan[]`: `{date, extra, debtAfter, balAfter, floor}`. Leave out `balAfter` when you do not have it.
- `monthly[]`: `{month, deposits, outflows, net, ownerDraws, labor, rent}` plus optional `ownerDrawsHigh`, `laborPct`, `rentPct`, `approximate`. If `labor` and `deposits` are both set, labor percent is `labor / deposits`.
- `salesGap`: `{month, anotaSales, bankDeposits}`. Optional `gap`, `gapPct`, `approximate`. When both sales figures are set, the screen uses those.
- Optional `target`, `decisionDate`, `payoffNote` (`raiseHolds`, `preRaise`, `priceRaise`), `savings` (`supermarketMonthly`, `saveLow`, `saveHigh`), `levers[]` (`id` of `price`, `labor`, or `cash`, `direction` of `up` or `down`, `monthly` or `monthlyLow`/`monthlyHigh`).
- `obligations[]` (empty until real rows are added) and `alerts[]`.

Obligation object: `{id, label, category, cadence, dueDay, dueWeekday, expectedAmount, amountRange, lastPaidDate, lastPaidAmount, status, confidence, note}`. `category` is `debt`, `rent`, `utility`, `payroll`, `supplier`, `tax`, or `other`. `cadence` is `weekly`, `monthly`, `daily`, or `one-off`. Monthly uses `dueDay` (1-31). Weekly uses `dueWeekday` (`Wednesday` or 0-6, Sunday = 0). `amountRange` is `[min, max]`. `status` is `ok`, `due-soon`, `overdue`, or `unusual-amount`. `confidence` is `high` or `low`. `label` is a category label only, such as `Aluguel` or `Energia (Equatorial)`. Optional `dueDate` is for a one-off.

The browser computes due dates. A date strictly after `lastPaidDate` and before today is overdue. If `lastPaidDate` is blank, only the next date on or after today is shown. A one-off with `lastPaidDate` is treated as paid. Windows are inclusive: today through today+7, and today through today+30. The 7-day total uses `expectedAmount`, or the high end of `amountRange` when the expected amount is blank. That total turns red when it is greater than `bankBalance` minus the floor in force today.

Alert object, per store, shown at the top of the tab with the store name: `{date, severity, text}`. `severity` is `info`, `warn`, or `red`. `text` is a string, or `{en, pt}`.

## Files

- `index.html`: the app layout (sticky header + top section tabs, main view)
- `styles.css`: the visual style
- `data.js`: seeded numbers and their sources
- `data/debtProfit.json`: per-store debt, cash rule, profit, obligations, and alerts
- `i18n.js`: EN/PT strings
- `app.js`: views, debt math, approvals
- `service-worker.js`: offline cache (only over http/https)
