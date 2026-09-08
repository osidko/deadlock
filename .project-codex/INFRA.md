# Infrastructure

## Environments

| Env     | URL                          | Host                         | Notes                        |
|---------|------------------------------|------------------------------|------------------------------|
| preview | https://deadlock.sidko.net   | shared preview VPS (`94.75.223.21`) | only environment; no prod    |

DNS: `deadlock.sidko.net` → the preview VPS (points at the box, TLS issued automatically by
the mutualized Caddy).

## How it's served (deviation from the codex preview contract)

The codex preview contract normally mandates per-project **containers**, a **database**, an
`/api` same-origin proxy, and **basic auth** on the SPA. This project has **none of those** —
Oleg explicitly requested no database and no basic auth. It is a plain static site, so:

- No container, no `docker-compose.preview.yml`, no ghcr image, no `migrate`/`seed` profiles.
- No database, no role, no connection string, **no secrets** (nothing in the box `.env`, no
  GitHub Actions secrets required for the app itself).
- No basic auth, no `/api` proxy, no webhook exemptions.
- Served straight from the **mutualized Caddy** via `file_server`.

The project's git checkout lives at `/srv/preview/projects/deadlock/` on the box and is mounted
**read-only** into the Caddy container at the same path; Caddy's `root` points there and serves
`index.html` + `items.js` directly. `preview/vhost.caddy` (owned by this repo) is synced to
`/srv/preview/projects/deadlock/vhost.caddy` and imported by the shared Caddyfile.

## The `hide` gotcha (do not reintroduce)

In Caddy `file_server`, a `hide` value **without a `/`** is matched against every **path
component** of each served file's absolute path. The box root is under `/srv/preview/…`, so a
bare `hide preview` matches the `preview` ancestor component of *every* file → Caddy hides
everything → blanket **404** on the whole site (the tell: even `items.js`, not in the hide
list, 404s). Anchor folder hides to the root instead:

```caddy
hide .git .gitignore README.md items_raw.json {http.vars.root}/preview {http.vars.root}/preview/*
```

See the annotated comment in `preview/vhost.caddy`. This trap applies to any static
`file_server` project onboarded to this preview VPS.

## Deploying an update

1. Push to `main` on `osidko/deadlock`.
2. On the box: `ssh deploy@<preview-host>` → `cd /srv/preview/projects/deadlock && git pull`.
   Static file changes (`index.html`, `items.js`) are live immediately — Caddy serves the
   checkout directly, no reload needed.
3. **Only if `preview/vhost.caddy` changed:** sync it to
   `/srv/preview/projects/deadlock/vhost.caddy`, then **validate-then-reload** — `caddy
   validate` the full config and gracefully `caddy reload` only on success (never restart the
   shared Caddy; a bad vhost must not take down neighbour projects).

For anything box-level, use the **vps-admin** agent (the preview VPS owner); see
`c:/Workspace/dev-codex/preview-vps.md`.
