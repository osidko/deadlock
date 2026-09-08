# Commands

No package manager, no build, no test suite — it's a static site. The only real "commands"
are running it locally, regenerating the data, and deploying.

## Run locally

Open `index.html` in a browser (item images load from the Deadlock CDN, so internet is
needed for pictures). Any static server also works, e.g. `python -m http.server`.

## Regenerate `items.js` from a fresh API dump

```bash
# 1. Download the raw item dump (kept git-ignored)
curl -sL "https://api.deadlock-api.com/v1/assets/items" -o items_raw.json

# 2. Regenerate items.js: type=upgrade, shopable & not disabled, Tier 5 excluded,
#    with a transitive `contains` list built from component_items.
python - <<'PY'
import json
data=json.load(open('items_raw.json'))
ups=[d for d in data if d.get('type')=='upgrade']
shop=[d for d in ups if d.get('shopable') and not d.get('disabled') and d.get('item_tier')!=5]
byclass={d['class_name']:d for d in shop}
def transitive(cls, seen=None):
    seen=set() if seen is None else seen
    d=byclass.get(cls)
    for c in (d.get('component_items') or []) if d else []:
        if c in byclass and byclass[c]['name'] not in seen:
            seen.add(byclass[c]['name']); transitive(c, seen)
    return seen
items=[{'name':d['name'],'category':d['item_slot_type'],'tier':d['item_tier'],
        'image':d['shop_image'],'contains':sorted(transitive(d['class_name']))} for d in shop]
items.sort(key=lambda x:(x['category'], x['tier'] or 0, x['name']))
with open('items.js','w',encoding='utf-8') as f:
    f.write('// Deadlock item set (source: deadlock-api.com public assets).\n')
    f.write('// Hardcoded snapshot — no runtime API calls.\n')
    f.write('// Only shopable, non-disabled items are included; Tier 5 items excluded.\n')
    f.write('// "contains" lists the transitive component items this item is built from,\n')
    f.write('// used to avoid picking a built item together with one of its components.\n')
    f.write('const DEADLOCK_ITEMS = '+json.dumps(items,ensure_ascii=False,indent=2)+';\n')
print('wrote', len(items), 'items')
PY
```

## Deploy

See `INFRA.md`. Push to `main`, then `git pull` in `/srv/preview/projects/deadlock/` on the
preview VPS; validate-then-reload Caddy only if `preview/vhost.caddy` changed.
