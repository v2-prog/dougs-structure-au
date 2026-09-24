# Doug’s Lab

Family, land & purpose structures — Australia only.

**Product name:** Doug’s Lab (Doug’s Structure AU)  
**Domain reference:** [coeconomics.com](https://coeconomics.com)  
**Workshop voice:** quiet field notebook, not a store.

A static twelve-room explainer for Australian households and purpose-driven groups.

Not a store and not a US nature-credits company.  
No accounts. No lead-capture form. The walk-through room is a phone and email link only.  
No invented duty tables or dollar savings.

## Rooms

1. Home — decision screen  
2. Household profile (answers stored in localStorage only)  
3. Succession planner — five lenses, estate vs non-estate assets, documents around a Will  
4. Structure explorer — nineteen Australian structures, including testamentary discretionary trusts, each with succession and continuity  
5. Scenario workshop — sell / gift / covenant / hold flags only  
6. CLT / charity / co-op studio  
7. Economic regenerative village  
8. Compare — control, lock, tax character, and succession columns  
9. Action checklist — including the team group  
10. Glossary and timeline  
11. The team — legal and financial roles, order of engagement, further reading  
12. Booking a walk through — Canberra school holidays and weekends, 1:00 pm–6:00 pm. Contact appears after a time is chosen.  

Australia only. No LLCs, S-corps, FEIE, 1031, Augusta rule, or Delaware vehicles.

Every page carries:  
*General information only. Confirm with a registered tax agent and solicitor. Rules include 2026–28 announced reforms that may change.*

Cards and definitions live in `data.js`. Household answers and checklist ticks use `localStorage` keys prefixed `dougslab:`.

Fonts are self-hosted (Newsreader, IBM Plex Sans, IBM Plex Mono; SIL Open Font License). See `fonts/NOTICE.txt`.

## Deploy (Cloudflare Pages)

Account expected: the Cloudflare login tied to this project (v2@live.com.au / the v2-prog GitHub).

1. Workers & Pages → Create → Connect to Git → **v2-prog/dougs-structure-au**, branch `main`.
2. Framework: None. Build command: empty. Output directory: `/`.
3. Attach custom domain `coeconomics.com` once DNS is on Cloudflare.

Pretty URLs are on. Room files stay `succession.html`, but the live address is `/succession`. Do not put a `_redirects` rule from `/succession` back to `/succession.html`. That loops.

GitHub Pages alternative: enable Pages from `main`, root `/`.

## Local

Open `index.html` in a browser, or:

```
python3 -m http.server 8080
```

## Licence of content

Educational flags only. Not tax, legal or financial advice.
