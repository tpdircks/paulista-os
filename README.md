# Paulista OS

A simple bilingual (English / Português) operating system for Troy's two Brazil pizza stores, **Pizzaria do Paulista Barcarena (sede)** and **Pizzaria do Paulista Vila**. It looks like Smackin' OS (Barlow font, navy header, top tabs) but is much smaller: one page of static files, no build step, no server, no database.

## What it does

| Section | Purpose |
|---|---|
| Dashboard | Debt remaining, weeks to zero at R$ 1.000/week, debt-free week, Nov 10 price-raise countdown, pending approvals, per-store Oct sales / debt / Stone balance |
| Debt | Supplier debt tracker (R$ 32.724 starting, from Lucas 02/11/2026), log weekly payments, 33-week payoff schedule (10/11/2026 → last R$ 724 on 22/06/2027, week ending 28/06/2027) |
| Cash | September 2026 Stone summaries for both accounts, cash vs debt, approval rule for money out |
| Sales | October 2026 Anota AI sales by store and a rough +R$ 5 raise effect |
| Menu | Nov 10 raise package and before/after price bands |
| Stores | Addresses, Anota users, Stone accounts, owner-draw rule, fixed costs from Lucas |
| Suppliers | Boutique dos Frios (primary, paid first) and others, Sep payments, debt by store |
| Approvals | Lucas proposes, Troy approves or rejects. Saved in the browser |

House rules built in: all company money goes through Troy; Lucas proposes buys; living draw from Barcarena only with Troy's OK; no owner draw from Vila (the form blocks it); R$ 1.000/week to supplier debt, Boutique dos Frios first.

## Open it

Double-click `index.html`, or drag it into Chrome, Safari, or Edge. Use the **EN | PT** buttons at the top right. Your language, payments, and approvals are saved in that browser (`localStorage`). Other people's browsers won't see them.

To update the seeded numbers, edit `data.js` (amounts, dates, sources). Labels for both languages are in `i18n.js`.

## Deploy to GitHub Pages

1. Create a repo, for example `tpdircks/paulista-os`.
2. Put these files in the repo root: `index.html`, `styles.css`, `data.js`, `i18n.js`, `app.js`, `service-worker.js`, `README.md`.
3. `git add . && git commit -m "Paulista OS v1" && git push`
4. On GitHub, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, pick `main` / `(root)`, and save.
5. After about a minute the site is at `https://tpdircks.github.io/paulista-os/`. When it runs over https, the service worker caches it for offline use.

Note: GitHub Pages sites are public. Anyone with the link can see the numbers in `data.js`. Make the repo private with a paid plan, or add a login, before you share the link widely.

## Files

- `index.html`: the app layout (sticky header + top section tabs, main view)
- `styles.css`: the visual style
- `data.js`: seeded numbers and their sources
- `i18n.js`: EN/PT strings
- `app.js`: views, debt math, approvals
- `service-worker.js`: offline cache (only over http/https)
