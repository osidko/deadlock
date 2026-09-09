# Agent Guide

## Read first

- Root `CLAUDE.md` — orientation.
- `INFRA.md` — how it's deployed and the Caddy `hide` trap.
- `STACK.md` — why this project ignores the codex stack.

## Ground truth

- It's a **static** client-side toy: `index.html` (app) + `items.js` (data). No framework, no
  build, no backend, no database, no tests. Don't scaffold any of that.
- The item set is **hardcoded** and derived from `items_raw.json` (git-ignored). To change the
  filters (e.g. re-include Tier 5) or refresh data, edit the generation in `COMMANDS.md` and
  regenerate `items.js` — don't hand-edit the generated array.

## Hard stops / traps

- **Never** add a bare folder name to `hide` in `preview/vhost.caddy` — it matches a path
  *component* and 404s the whole site. Anchor with `{http.vars.root}/…`. (See INFRA.md.)
- No basic auth and no database on this vhost — that's a deliberate deviation Oleg asked for,
  not an omission to "fix".
- Deploys are a `git pull` on the box; any vhost change is **validate-then-reload**, never a
  Caddy restart. Box access is the dedicated `claude` ed25519 key connecting to the
  `net.sidko.*` VPS directly (no VPN) — full policy in `INFRA.md` → "Box access" and the fleet
  authority `C:\ws\infra\CLAUDE.md`. Run git as the `deploy` user (`sudo -u deploy git …`).
  For heavier box work, use the **vps-admin** agent.
- `items_raw.json` is 9 MB and git-ignored — don't commit it.
