# Deadlock Item Picker — Project Guide

Single-page toy that randomly picks 12 buyable [Deadlock](https://deadlock.wiki/Items) items
as cards. **Static site, no backend, no build step, no database.** Deployed on the shared
preview VPS at **https://deadlock.sidko.net**.

For global engineering conventions see `c:/Workspace/dev-codex/` (this project deliberately
opts out of the default stack — see `.project-codex/STACK.md`).

## Files that matter

- `index.html` — the entire app: markup, styles, and picker logic (vanilla JS, no framework).
- `items.js` — hardcoded item snapshot (`DEADLOCK_ITEMS`), sourced once from the public
  deadlock-api.com assets. No runtime API calls.
- `preview/vhost.caddy` — the Caddy vhost that serves the site on the preview VPS.
- `items_raw.json` — 9 MB raw API dump, kept locally for regenerating `items.js`. Git-ignored,
  not deployed.

## Modifying the site

Everything is client-side; open `index.html` in a browser to test (needs internet for item
images from the Deadlock CDN). Key knobs live at the top of the `<script>` in `index.html`:
`PICK_COUNT`, `CATEGORY_COLORS`, `conflicts()`/`pickRandom()` (component-conflict rules),
and the `flyIn`/`reflip` CSS keyframes for the deal-in and per-card re-roll animations.

### Regenerating the item set

`items.js` is derived from `items_raw.json`. Current filters: type `upgrade`, `shopable` and
not `disabled`, **Tier 5 excluded**; each item carries a transitive `contains` list (built
from `component_items`) so the picker never shows an item together with one of its components.
To refresh: re-download the dump and re-run the generation (see `.project-codex/COMMANDS.md`).

## Deploying

See `.project-codex/INFRA.md`. Short version: it's served straight from the mutualized Caddy
on the preview VPS from a git checkout — a deploy is a `git pull` on the box (plus a
validate-then-reload of Caddy if `preview/vhost.caddy` changed). **Trap:** read the `hide`
comment in `preview/vhost.caddy` before touching it — a bare folder name in `hide` 404s the
whole site.
