// Deadlock item set (source: deadlock-api.com public assets).
// Hardcoded snapshot — no runtime API calls.
// Only shopable, non-disabled items are included; Tier 5 items excluded.
// "contains" lists the transitive component items this item is built from,
// used to avoid picking a built item together with one of its components.
const DEADLOCK_ITEMS = [
  {
    "name": "Extra Charge",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_charge.png",
    "contains": []
  },
  {
    "name": "Extra Spirit",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/extra_spirit.png",
    "contains": []
  },
  {
    "name": "Golden Goose Egg",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/goose_egg.png",
    "contains": []
  },
  {
    "name": "Mystic Burst",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_burst.png",
    "contains": []
  },
  {
    "name": "Mystic Expansion",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reach.png",
    "contains": []
  },
  {
    "name": "Mystic Regeneration",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_regen.png",
    "contains": []
  },
  {
    "name": "Rusted Barrel",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rusted_barrel.png",
    "contains": []
  },
  {
    "name": "Spirit Strike",
    "category": "spirit",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_strike.png",
    "contains": []
  },
  {
    "name": "Arcane Surge",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arcane_surge.png",
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Bullet Resist Shredder",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/bullet_resist_shredder.png",
    "contains": []
  },
  {
    "name": "Cold Front",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/cold_front.png",
    "contains": []
  },
  {
    "name": "Compress Cooldown",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_cooldown.png",
    "contains": []
  },
  {
    "name": "Duration Extender",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/duration_extender.png",
    "contains": []
  },
  {
    "name": "Improved Spirit",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/improved_spirit.png",
    "contains": [
      "Extra Spirit"
    ]
  },
  {
    "name": "Mystic Slow",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_slow.png",
    "contains": []
  },
  {
    "name": "Mystic Vulnerability",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_vulnerability.png",
    "contains": []
  },
  {
    "name": "Quicksilver Reload",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/quicksilver_reload.png",
    "contains": []
  },
  {
    "name": "Slowing Hex",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/slowing_hex.png",
    "contains": []
  },
  {
    "name": "Spirit Sap",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_sap.png",
    "contains": []
  },
  {
    "name": "Suppressor",
    "category": "spirit",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/suppressor.png",
    "contains": []
  },
  {
    "name": "Decay",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/decay.png",
    "contains": []
  },
  {
    "name": "Disarming Hex",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/disarming_hex.png",
    "contains": [
      "Rusted Barrel"
    ]
  },
  {
    "name": "Greater Expansion",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/greater_expansion.png",
    "contains": [
      "Mystic Expansion"
    ]
  },
  {
    "name": "Knockdown",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/knockdown.png",
    "contains": []
  },
  {
    "name": "Radiant Regeneration",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/radiant_regeneration.png",
    "contains": [
      "Mystic Regeneration"
    ]
  },
  {
    "name": "Rapid Recharge",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/rapid_recharge.png",
    "contains": [
      "Extra Charge"
    ]
  },
  {
    "name": "Silence Wave",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/silence_glyph.png",
    "contains": []
  },
  {
    "name": "Spirit Snatch",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_snatch.png",
    "contains": [
      "Spirit Strike"
    ]
  },
  {
    "name": "Superior Cooldown",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_cooldown.png",
    "contains": [
      "Compress Cooldown"
    ]
  },
  {
    "name": "Superior Duration",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/superior_duration.png",
    "contains": [
      "Duration Extender"
    ]
  },
  {
    "name": "Surge of Power",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/surge_of_power.png",
    "contains": [
      "Extra Spirit"
    ]
  },
  {
    "name": "Tankbuster",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/tankbuster.png",
    "contains": [
      "Mystic Burst"
    ]
  },
  {
    "name": "Torment Pulse",
    "category": "spirit",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/torment_pulse.png",
    "contains": []
  },
  {
    "name": "Arctic Blast",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/arctic_blast.png",
    "contains": [
      "Cold Front"
    ]
  },
  {
    "name": "Boundless Spirit",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/boundless_spirit.png",
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
    "contains": []
  },
  {
    "name": "Echo Shard",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/echo_shard.png",
    "contains": []
  },
  {
    "name": "Escalating Exposure",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/escalating_exposure.png",
    "contains": [
      "Mystic Vulnerability"
    ]
  },
  {
    "name": "Ethereal Shift",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/ethereal_shift.png",
    "contains": []
  },
  {
    "name": "Focus Lens",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/focus_lens.png",
    "contains": [
      "Spirit Sap"
    ]
  },
  {
    "name": "Lightning Scroll",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/lightning_scroll.png",
    "contains": [
      "Mystic Slow"
    ]
  },
  {
    "name": "Magic Carpet",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/magic_carpet.png",
    "contains": []
  },
  {
    "name": "Mercurial Magnum",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mercurial_magnum.png",
    "contains": [
      "Quicksilver Reload"
    ]
  },
  {
    "name": "Mystic Reverb",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/mystic_reverb.png",
    "contains": []
  },
  {
    "name": "Refresher",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/refresher.png",
    "contains": []
  },
  {
    "name": "Scourge",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/scourge.png",
    "contains": []
  },
  {
    "name": "Spirit Burn",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/spirit_burn.png",
    "contains": []
  },
  {
    "name": "Transcendent Cooldown",
    "category": "spirit",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/spirit/transcendent_cooldown.png",
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
    "contains": [
      "Slowing Hex"
    ]
  },
  {
    "name": "Extra Health",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_health.png",
    "contains": []
  },
  {
    "name": "Extra Regen",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_regen.png",
    "contains": []
  },
  {
    "name": "Extra Stamina",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/extra_stamina.png",
    "contains": []
  },
  {
    "name": "Grit",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/grit.png",
    "contains": []
  },
  {
    "name": "Healing Rite",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_rite.png",
    "contains": []
  },
  {
    "name": "Melee Lifesteal",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/melee_lifesteal.png",
    "contains": []
  },
  {
    "name": "Rebuttal",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rebuttal.png",
    "contains": []
  },
  {
    "name": "Sprint Boots",
    "category": "vitality",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/sprint_boots.png",
    "contains": []
  },
  {
    "name": "Battle Vest",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/battle_vest.png",
    "contains": []
  },
  {
    "name": "Bullet Lifesteal",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_lifesteal.png",
    "contains": []
  },
  {
    "name": "Debuff Reducer",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_reducer.png",
    "contains": []
  },
  {
    "name": "Enchanter's Emblem",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enchanters_emblem.png",
    "contains": []
  },
  {
    "name": "Enduring Speed",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/enduring_speed.png",
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Guardian Ward",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/guardian_ward.png",
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Healbane",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healbane.png",
    "contains": []
  },
  {
    "name": "Healing Booster",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_booster.png",
    "contains": [
      "Extra Regen"
    ]
  },
  {
    "name": "Reactive Barrier",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/reactive_barrier.png",
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Restorative Locket",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/restorative_locket.png",
    "contains": []
  },
  {
    "name": "Return Fire",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/return_fire.png",
    "contains": []
  },
  {
    "name": "Spirit Lifesteal",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_lifesteal.png",
    "contains": []
  },
  {
    "name": "Spirit Shielding",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_shielding.png",
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Trophy Collector",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/trophy_collector.png",
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Weapon Shielding",
    "category": "vitality",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/weapon_shielding.png",
    "contains": [
      "Grit"
    ]
  },
  {
    "name": "Bullet Resilience",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/bullet_resilience.png",
    "contains": []
  },
  {
    "name": "Counterspell",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/counterspell.png",
    "contains": []
  },
  {
    "name": "Dispel Magic",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/debuff_remover.png",
    "contains": []
  },
  {
    "name": "Fortitude",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fortitude.png",
    "contains": [
      "Extra Health"
    ]
  },
  {
    "name": "Fury Trance",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/fury_trance.png",
    "contains": [
      "Bullet Lifesteal"
    ]
  },
  {
    "name": "Healing Nova",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_nova.png",
    "contains": [
      "Healing Rite"
    ]
  },
  {
    "name": "Lifestrike",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/lifestrike.png",
    "contains": [
      "Melee Lifesteal"
    ]
  },
  {
    "name": "Majestic Leap",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/majestic_leap.png",
    "contains": []
  },
  {
    "name": "Metal Skin",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/metal_skin.png",
    "contains": []
  },
  {
    "name": "Rescue Beam",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/rescue_beam.png",
    "contains": [
      "Healing Rite"
    ]
  },
  {
    "name": "Spirit Resilience",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spirit_resilience.png",
    "contains": []
  },
  {
    "name": "Stamina Mastery",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/stamina_mastery.png",
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Veil Walker",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/veil_walker.png",
    "contains": [
      "Sprint Boots"
    ]
  },
  {
    "name": "Warp Stone",
    "category": "vitality",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/warp_stone.png",
    "contains": []
  },
  {
    "name": "Cheat Death",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/cheat_death.png",
    "contains": []
  },
  {
    "name": "Colossus",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/colossus.png",
    "contains": [
      "Extra Health"
    ]
  },
  {
    "name": "Divine Barrier",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/divine_barrier.png",
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
    "contains": []
  },
  {
    "name": "Healing Tempo",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/healing_tempo.png",
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
    "contains": [
      "Spirit Lifesteal"
    ]
  },
  {
    "name": "Inhibitor",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/inhibitor.png",
    "contains": []
  },
  {
    "name": "Juggernaut",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/juggernaut.png",
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
    "contains": []
  },
  {
    "name": "Plated Armor",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/plated_armor.png",
    "contains": []
  },
  {
    "name": "Siphon Bullets",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/siphon_bullets.png",
    "contains": []
  },
  {
    "name": "Spellbreaker",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/spellbreaker.png",
    "contains": [
      "Debuff Reducer"
    ]
  },
  {
    "name": "Unstoppable",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/unstoppable.png",
    "contains": [
      "Debuff Reducer"
    ]
  },
  {
    "name": "Vampiric Burst",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/vampiric_burst.png",
    "contains": [
      "Bullet Lifesteal"
    ]
  },
  {
    "name": "Witchmail",
    "category": "vitality",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/vitality/witchmail.png",
    "contains": []
  },
  {
    "name": "Close Quarters",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/close_quarters.png",
    "contains": []
  },
  {
    "name": "Extended Magazine",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/basic_magazine.png",
    "contains": []
  },
  {
    "name": "Headshot Booster",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headshot_booster.png",
    "contains": []
  },
  {
    "name": "High-Velocity Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/high_velocity_rounds.png",
    "contains": []
  },
  {
    "name": "Monster Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/monster_rounds.png",
    "contains": []
  },
  {
    "name": "Rapid Rounds",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/rapid_rounds.png",
    "contains": []
  },
  {
    "name": "Restorative Shot",
    "category": "weapon",
    "tier": 1,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/restorative_shot.png",
    "contains": []
  },
  {
    "name": "Active Reload",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/active_reload.png",
    "contains": []
  },
  {
    "name": "Fleetfoot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/fleetfoot.png",
    "contains": []
  },
  {
    "name": "Intensifying Magazine",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/intensifying_magazine.png",
    "contains": []
  },
  {
    "name": "Kinetic Dash",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/kinetic_dash.png",
    "contains": [
      "Extra Stamina"
    ]
  },
  {
    "name": "Long Range",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/long_range.png",
    "contains": []
  },
  {
    "name": "Melee Charge",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/melee_charge.png",
    "contains": []
  },
  {
    "name": "Mystic Shot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/mystic_shot.png",
    "contains": []
  },
  {
    "name": "Opening Rounds",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/opening_rounds.png",
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Recharging Rush",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/recharging_rounds.png",
    "contains": []
  },
  {
    "name": "Slowing Bullets",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/slowing_bullets.png",
    "contains": []
  },
  {
    "name": "Spirit Shredder Bullets",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spirit_shredder_bullets.png",
    "contains": []
  },
  {
    "name": "Split Shot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/split_shot.png",
    "contains": []
  },
  {
    "name": "Stalker",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/backstabber.png",
    "contains": []
  },
  {
    "name": "Swift Striker",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/swift_striker.png",
    "contains": [
      "Rapid Rounds"
    ]
  },
  {
    "name": "Titanic Magazine",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/titanic_magazine.png",
    "contains": [
      "Extended Magazine"
    ]
  },
  {
    "name": "Weakening Headshot",
    "category": "weapon",
    "tier": 2,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weakening_headshot.png",
    "contains": []
  },
  {
    "name": "Alchemical Fire",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_fire.png",
    "contains": []
  },
  {
    "name": "Ballistic Enchantment",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/alchemical_seal.png",
    "contains": [
      "Mystic Expansion"
    ]
  },
  {
    "name": "Berserker",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/berserker.png",
    "contains": []
  },
  {
    "name": "Blood Tribute",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/blood_tribute.png",
    "contains": []
  },
  {
    "name": "Burst Fire",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/burst_fire.png",
    "contains": [
      "Rapid Rounds"
    ]
  },
  {
    "name": "Cultist Sacrifice",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/cultist_sacrifice.png",
    "contains": [
      "Monster Rounds"
    ]
  },
  {
    "name": "Escalating Resilience",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/escalating_resilience.png",
    "contains": [
      "Extended Magazine"
    ]
  },
  {
    "name": "Express Shot",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/express_shot.png",
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Headhunter",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/headhunter.png",
    "contains": [
      "Headshot Booster"
    ]
  },
  {
    "name": "Heroic Aura",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/heroic_aura.png",
    "contains": []
  },
  {
    "name": "Hollow Point",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hollow_point.png",
    "contains": []
  },
  {
    "name": "Hunter's Aura",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/hunters_aura.png",
    "contains": []
  },
  {
    "name": "Point Blank",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/point_blank.png",
    "contains": [
      "Close Quarters"
    ]
  },
  {
    "name": "Shadow Weave",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/shadow_weave.png",
    "contains": []
  },
  {
    "name": "Sharpshooter",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/sharp_shooter.png",
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
    "contains": [
      "Spirit Shredder Bullets"
    ]
  },
  {
    "name": "Tesla Bullets",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/tesla_bullets.png",
    "contains": []
  },
  {
    "name": "Toxic Bullets",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/toxic_bullets.png",
    "contains": []
  },
  {
    "name": "Weighted Shots",
    "category": "weapon",
    "tier": 3,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/weighted_shots.png",
    "contains": [
      "Slowing Bullets"
    ]
  },
  {
    "name": "Armor Piercing Rounds",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/armor_piercing_rounds.png",
    "contains": [
      "High-Velocity Rounds"
    ]
  },
  {
    "name": "Capacitor",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/capacitor.png",
    "contains": [
      "Tesla Bullets"
    ]
  },
  {
    "name": "Crippling Headshot",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crippling_headshot.png",
    "contains": [
      "Weakening Headshot"
    ]
  },
  {
    "name": "Crushing Fists",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/crushing_fists.png",
    "contains": [
      "Melee Charge"
    ]
  },
  {
    "name": "Frenzy",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/frenzy.png",
    "contains": []
  },
  {
    "name": "Glass Cannon",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/glass_cannon.png",
    "contains": []
  },
  {
    "name": "Lucky Shot",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/lucky_shot.png",
    "contains": []
  },
  {
    "name": "Ricochet",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/ricochet.png",
    "contains": []
  },
  {
    "name": "Silencer",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/silencer.png",
    "contains": []
  },
  {
    "name": "Spellslinger",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spell_slinger.png",
    "contains": []
  },
  {
    "name": "Spiritual Overflow",
    "category": "weapon",
    "tier": 4,
    "image": "https://assets-bucket.deadlock-api.com/assets-api-res/images/items/weapon/spiritual_overflow.png",
    "contains": [
      "Spirit Lifesteal"
    ]
  }
];
