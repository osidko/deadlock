# Stack

**Deviation from codex defaults.** This project does not use the codex stack (NestJS / React
+ Vite / Prisma / Postgres / Docker). It is intentionally a single static HTML file plus one
hand-generated JS data file — no framework, no build tool, no package manager, no backend, no
database.

Rationale: it's a tiny client-side toy. The codex stack would be pure overhead. Oleg
explicitly asked for a plain HTML one-pager with a hardcoded item set and **no database and no
basic auth**.

- **Runtime:** the browser. Vanilla JS, plain CSS.
- **Data:** `items.js` — a hardcoded array generated from a Deadlock assets API dump
  (`items_raw.json`), using Python for the one-off transform.
- **Hosting:** static files served by the mutualized Caddy on the shared preview VPS
  (see `INFRA.md`), not a per-project container.
