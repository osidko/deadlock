# Deadlock Item Picker

A single-page toy that randomly picks 12 items from the [Deadlock](https://deadlock.wiki/Items) game and shows them as cards.

Live: https://deadlock.sidko.net

## Features

- **Pick items** — draws 12 random items and deals them in with a one-by-one fly-in animation.
- **Re-pick a single card** — hover a card and click the ↻ icon to reroll just that item.
- **Smart picking** — excludes unbuyable/disabled items and Tier 5 items, and never picks an item together with one of its components (container/contained conflicts).

## Structure

- `index.html` — the whole app (markup, styles, picker logic).
- `items.js` — hardcoded item snapshot sourced from the public [deadlock-api.com](https://deadlock-api.com) assets. No runtime API calls, no database.

## Local use

Open `index.html` in a browser. Item images load from the Deadlock assets CDN, so an internet connection is needed for the pictures.
