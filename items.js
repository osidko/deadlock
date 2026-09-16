// Deadlock item set (source: deadlock-api.com public assets).
// Hardcoded snapshot — no runtime API calls.
// Only shopable, non-disabled items are included; Tier 5 items excluded.
// "active": true = an item you assign to a slot and trigger in combat
//   (is_active_item); false = a passive, always-on stat item.
// "contains" lists the transitive component items this item is built from,
// used to avoid picking a built item together with one of its components.
const DEADLOCK_ITEMS = [
  {
    "name": "Extra Charge",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Extra Spirit",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Golden Goose Egg",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Mystic Burst",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Mystic Expansion",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Mystic Regeneration",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Rusted Barrel",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Spirit Strike",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Arcane Surge",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.png",
    "active": false,
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Bullet Resist Shredder",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Cold Front",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Compress Cooldown",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Duration Extender",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Improved Spirit",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.png",
    "active": false,
    "contains": [
      "Extra Spirit"
    ]
  },
  {
    "name": "Mystic Slow",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Mystic Vulnerability",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Quicksilver Reload",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Slowing Hex",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Spirit Sap",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Suppressor",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Decay",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Disarming Hex",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.png",
    "active": true,
    "contains": [
      "Rusted Barrel"
    ]
  },
  {
    "name": "Greater Expansion",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.png",
    "active": false,
    "contains": [
      "Mystic Expansion"
    ]
  },
  {
    "name": "Knockdown",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Radiant Regeneration",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.png",
    "active": false,
    "contains": [
      "Mystic Regeneration"
    ]
  },
  {
    "name": "Rapid Recharge",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.png",
    "active": false,
    "contains": [
      "Extra Charge"
    ]
  },
  {
    "name": "Silence Wave",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Spirit Snatch",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.png",
    "active": false,
    "contains": [
      "Spirit Strike"
    ]
  },
  {
    "name": "Superior Cooldown",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.png",
    "active": false,
    "contains": [
      "Compress Cooldown"
    ]
  },
  {
    "name": "Superior Duration",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.png",
    "active": false,
    "contains": [
      "Duration Extender"
    ]
  },
  {
    "name": "Surge of Power",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.png",
    "active": false,
    "contains": [
      "Extra Spirit"
    ]
  },
  {
    "name": "Tankbuster",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.png",
    "active": false,
    "contains": [
      "Mystic Burst"
    ]
  },
  {
    "name": "Torment Pulse",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Arctic Blast",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.png",
    "active": true,
    "contains": [
      "Cold Front"
    ]
  },
  {
    "name": "Boundless Spirit",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.png",
    "active": false,
    "contains": [
      "Extra Spirit",
      "Improved Spirit"
    ]
  },
  {
    "name": "Cursed Relic",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/curse.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Echo Shard",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Escalating Exposure",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.png",
    "active": false,
    "contains": [
      "Mystic Vulnerability"
    ]
  },
  {
    "name": "Ethereal Shift",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Focus Lens",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.png",
    "active": true,
    "contains": [
      "Spirit Sap"
    ]
  },
  {
    "name": "Lightning Scroll",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.png",
    "active": false,
    "contains": [
      "Mystic Slow"
    ]
  },
  {
    "name": "Magic Carpet",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Mercurial Magnum",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.png",
    "active": false,
    "contains": [
      "Quicksilver Reload"
    ]
  },
  {
    "name": "Mystic Reverb",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Refresher",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Scourge",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Spirit Burn",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Transcendent Cooldown",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.png",
    "active": false,
    "contains": [
      "Compress Cooldown",
      "Superior Cooldown"
    ]
  },
  {
    "name": "Vortex Web",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/vortex_web.png",
    "active": true,
    "contains": [
      "Slowing Hex"
    ]
  },
  {
    "name": "Extra Health",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Extra Regen",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Extra Stamina",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Grit",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Healing Rite",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Melee Lifesteal",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Rebuttal",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Sprint Boots",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Battle Vest",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Bullet Lifesteal",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Debuff Reducer",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Enchanter's Emblem",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Enduring Speed",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.png",
    "active": false,
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Guardian Ward",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.png",
    "active": true,
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Healbane",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Healing Booster",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.png",
    "active": false,
    "contains": [
      "Extra Regen"
    ]
  },
  {
    "name": "Reactive Barrier",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.png",
    "active": false,
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Restorative Locket",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Return Fire",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Spirit Lifesteal",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Spirit Shielding",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.png",
    "active": false,
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Trophy Collector",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.png",
    "active": false,
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Weapon Shielding",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.png",
    "active": false,
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Bullet Resilience",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Counterspell",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Dispel Magic",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Fortitude",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.png",
    "active": false,
    "contains": [
      "Extra Health"
    ]
  },
  {
    "name": "Fury Trance",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.png",
    "active": true,
    "contains": [
      "Bullet Lifesteal"
    ]
  },
  {
    "name": "Healing Nova",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.png",
    "active": true,
    "contains": [
      "Healing Rite"
    ]
  },
  {
    "name": "Lifestrike",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.png",
    "active": false,
    "contains": [
      "Melee Lifesteal"
    ]
  },
  {
    "name": "Majestic Leap",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Metal Skin",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Rescue Beam",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.png",
    "active": true,
    "contains": [
      "Healing Rite"
    ]
  },
  {
    "name": "Spirit Resilience",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Stamina Mastery",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.png",
    "active": false,
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Veil Walker",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.png",
    "active": false,
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Warp Stone",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Cheat Death",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Colossus",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.png",
    "active": true,
    "contains": [
      "Extra Health"
    ]
  },
  {
    "name": "Divine Barrier",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.png",
    "active": true,
    "contains": [
      "Grit",
      "Guardian Ward"
    ]
  },
  {
    "name": "Diviner's Kevlar",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/diviners_kevlar.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Healing Tempo",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.png",
    "active": false,
    "contains": [
      "Extra Regen",
      "Healing Booster"
    ]
  },
  {
    "name": "Indomitable",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/indomitable.png",
    "active": false,
    "contains": [
      "Grit",
      "Reactive Barrier"
    ]
  },
  {
    "name": "Infuser",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/infuser.png",
    "active": true,
    "contains": [
      "Spirit Lifesteal"
    ]
  },
  {
    "name": "Inhibitor",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Juggernaut",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.png",
    "active": false,
    "contains": [
      "Enduring Speed",
      "Sprint Boots"
    ]
  },
  {
    "name": "Leech",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/leech.png",
    "active": false,
    "contains": [
      "Bullet Lifesteal",
      "Spirit Lifesteal"
    ]
  },
  {
    "name": "Phantom Strike",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/phantom_strike.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Plated Armor",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Siphon Bullets",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Spellbreaker",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.png",
    "active": false,
    "contains": [
      "Debuff Reducer"
    ]
  },
  {
    "name": "Unstoppable",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.png",
    "active": true,
    "contains": [
      "Debuff Reducer"
    ]
  },
  {
    "name": "Vampiric Burst",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.png",
    "active": true,
    "contains": [
      "Bullet Lifesteal"
    ]
  },
  {
    "name": "Witchmail",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Close Quarters",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Extended Magazine",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Headshot Booster",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.png",
    "active": false,
    "contains": []
  },
  {
    "name": "High-Velocity Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Monster Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Rapid Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Restorative Shot",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Active Reload",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Fleetfoot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Intensifying Magazine",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Kinetic Dash",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.png",
    "active": false,
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Long Range",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Melee Charge",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Mystic Shot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Opening Rounds",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.png",
    "active": false,
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Recharging Rush",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Slowing Bullets",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Spirit Shredder Bullets",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spirit_shredder_bullets.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Split Shot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Stalker",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Swift Striker",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.png",
    "active": false,
    "contains": [
      "Rapid Rounds"
    ]
  },
  {
    "name": "Titanic Magazine",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.png",
    "active": false,
    "contains": [
      "Extended Magazine"
    ]
  },
  {
    "name": "Weakening Headshot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Alchemical Fire",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Ballistic Enchantment",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.png",
    "active": false,
    "contains": [
      "Mystic Expansion"
    ]
  },
  {
    "name": "Berserker",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Blood Tribute",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Burst Fire",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.png",
    "active": false,
    "contains": [
      "Rapid Rounds"
    ]
  },
  {
    "name": "Cultist Sacrifice",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.png",
    "active": true,
    "contains": [
      "Monster Rounds"
    ]
  },
  {
    "name": "Escalating Resilience",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.png",
    "active": false,
    "contains": [
      "Extended Magazine"
    ]
  },
  {
    "name": "Express Shot",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.png",
    "active": false,
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Headhunter",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.png",
    "active": false,
    "contains": [
      "Headshot Booster"
    ]
  },
  {
    "name": "Heroic Aura",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Hollow Point",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Hunter's Aura",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Point Blank",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.png",
    "active": false,
    "contains": [
      "Close Quarters"
    ]
  },
  {
    "name": "Shadow Weave",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.png",
    "active": true,
    "contains": []
  },
  {
    "name": "Sharpshooter",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.png",
    "active": false,
    "contains": [
      "High-Velocity Rounds",
      "Long Range"
    ]
  },
  {
    "name": "Spirit Rend",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spellslinger_headshots.png",
    "active": false,
    "contains": [
      "Spirit Shredder Bullets"
    ]
  },
  {
    "name": "Tesla Bullets",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Toxic Bullets",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Weighted Shots",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.png",
    "active": false,
    "contains": [
      "Slowing Bullets"
    ]
  },
  {
    "name": "Armor Piercing Rounds",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.png",
    "active": false,
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Capacitor",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.png",
    "active": true,
    "contains": [
      "Tesla Bullets"
    ]
  },
  {
    "name": "Crippling Headshot",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.png",
    "active": false,
    "contains": [
      "Weakening Headshot"
    ]
  },
  {
    "name": "Crushing Fists",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.png",
    "active": false,
    "contains": [
      "Melee Charge"
    ]
  },
  {
    "name": "Frenzy",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Glass Cannon",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Lucky Shot",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Ricochet",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Silencer",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Spellslinger",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.png",
    "active": false,
    "contains": []
  },
  {
    "name": "Spiritual Overflow",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.png",
    "active": false,
    "contains": [
      "Spirit Lifesteal"
    ]
  }
];
