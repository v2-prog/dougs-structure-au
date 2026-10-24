# Economic life stages (coeconomics.com)

The home page (`index.html`) is the poster: all 35 age bands from 12 to 81 in seven rows, each linking to its own page. Below the poster is a list view where each band opens to its five considerations.

## Files

| Path | What it is |
|---|---|
| `index.html` | Home page: clickable poster plus list view |
| `age-12-13.html` ... `age-80-81.html` | One page per age band: five considerations, forms and sources, research snapshot, videos placeholder, three income scenarios |
| `assets/site.css`, `assets/research.css` | Styles |
| `assets/icons.svg` | Shared icon sprite |
| `assets/app.js` | Open all / Close all on the list view |
| `research/sources.json` | Every research figure with its source, reference period and verbatim excerpt |
| `research/income-percentiles.json` | The ATO-based income percentiles behind each age page's three income scenarios |
| `research/build_research.py` | Regenerates the research sections (see `research/README.md`) |
| `poster.html`, `_redirects` | `/poster`, `/poster.html` and old `/pages/...` links redirect to the right place |
| `sitemap.xml`, `robots.txt`, `_headers`, `404.html`, `favicon.svg` | Standard site files (`_headers` holds the strict security policy: no inline scripts or styles) |
| `PUBLISH.md`, `publish.sh` | How to put this on GitHub / Cloudflare |

## Deploy

Cloudflare Pages builds this repo from `main` with no build command and `/` as the output directory. A push to `main` redeploys.

## Notes

- Research figures were read from the cited pages on 23 October 2026. Each age page shows the source's age group and year next to every figure.
- General information only, not financial advice.
- This package is the whole site. Older files left in the repo from earlier builds (Doug's Lab rooms, `economic-life-stages/`, stray root copies) are not used by it; `publish.sh` removes them.
