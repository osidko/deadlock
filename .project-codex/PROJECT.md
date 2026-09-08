# Project

**Deadlock Item Picker** — a throwaway single-page toy. On load it shows one **Pick items**
button; clicking picks 12 random items from the game Deadlock and deals them in as cards
(picture + name), staggered with a fly-in animation. Clicking again regenerates. Each card
has a ↻ icon to re-roll that single item in place.

## Rules the picker enforces

- Only **buyable** items (the API's `shopable`, non-`disabled` upgrades).
- **Tier 5 excluded** (Oleg's request).
- Never shows an item together with one of its **components** (transitive container/contained
  conflict), so a chosen set is always independently buildable.

## Scope / non-goals

- No accounts, no persistence, no backend, no database, no analytics.
- Item data is a hardcoded snapshot, not live — acceptable for a toy; refresh manually when
  the game changes.

## Audience

Personal / casual — a quick "give me a random loadout" tool. Not a customer deliverable.
