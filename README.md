# Doug’s Lab

Family, land & purpose structures — Australia only.

**Product name:** Doug’s Lab (Doug’s Structure AU)  
**Domain reference:** [coeconomics.com](https://coeconomics.com)  
**Workshop voice:** quiet field notebook, not a store.

A static ten-room explainer for Australian households and purpose-driven groups.

Not a store, not a blog, not a booking site, and not a US nature-credits company.  
No accounts. No lead-capture. No invented duty tables or dollar savings.

## Rooms

1. Home — decision screen  
2. Household profile (answers stored in localStorage only)  
3. Succession planner  
4. Structure explorer — nineteen Australian structures, each with succession & continuity  
5. Scenario workshop — including a live CGT / duty flag sketch  
6. CLT / charity / co-op studio  
7. Economic regenerative village  
8. Compare — including succession columns  
9. Action checklist  
10. Glossary & timeline  

Australia only. No LLCs, S-corps, FEIE, 1031, Augusta rule, or Delaware vehicles.

Every page carries:  
*General information only. Confirm with a registered tax agent and solicitor. Rules include 2026–28 announced reforms that may change.*

## Deploy (Cloudflare Pages)

Account expected: the Cloudflare login tied to this project (v2@live.com.au / the v2-prog GitHub).

1. Workers & Pages → Create → Connect to Git → **v2-prog/dougs-structure-au**, branch `main`.
2. Framework: None. Build command: empty. Output directory: `/`.
3. Attach custom domain `coeconomics.com` once DNS is on Cloudflare.

GitHub Pages alternative: enable Pages from `main`, root `/`.

## Local

Open `index.html` in a browser, or:

```
python3 -m http.server 8080
```

## Licence of content

Educational flags only. Not tax, legal or financial advice.
