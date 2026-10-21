# Economic life stages

Lives in `/economic-life-stages/` on coeconomics.com, inside the Doug's Lab repo. It adds no files outside this folder; the root `_headers`, `robots.txt` and `sitemap.xml` belong to the main site.


A static site with no build step. It shows five typical economic considerations for Australians in each two-year age band from 12 to 81 (35 bands in 7 rows), with one linked page per band.

## What is in here

| Path | What it is |
|---|---|
| `index.html` | 7 × 5 grid of age bands. Each card opens to five considerations, each linking to the band page |
| `poster.html` | The whole poster as one clickable SVG. Every band links to its page |
| `pages/age-12-13.html` … `age-80-81.html` | One page per band: five considerations, sources, forms to look for, videos, three income scenarios, previous/next links |
| `assets/icons.svg` | Shared icon sprite used by every page (24 × 24 line icons) |
| `assets/site.css`, `assets/app.js` | Shared styles and script (no inline scripts, so the CSP can stay strict) |
| `favicon.svg` | Icon for this section |

## Deploy

Cloudflare Pages already builds this repo from `main`, so a push to `main` publishes it at `/economic-life-stages/`.

## Local preview

```
python3 -m http.server 8080
```

Then open http://localhost:8080. Opening `index.html` directly also works, except that the video loader needs a server because it uses `fetch`.

## Videos

The video slots show "coming soon". The main site's CSP blocks fetching data and YouTube embeds, so there is no video loader here. Enable it by loosening the root `_headers` (`connect-src 'self'`, `frame-src https://www.youtube-nocookie.com`) and adding a loader.

## Original SVG files

The standalone poster SVG, 35 age-card SVGs and 35 icon SVGs are not in this folder. The poster is inline in `poster.html`. Add the originals under `svg/` if wanted.

## Content notes

- Figures are Australian averages.
- Government links point to department home pages. Add deep links to specific forms once confirmed.
- Income scenarios (about $50,000, $100,000 and $200,000 a year) are illustrative, not official brackets.
- General information only, not financial advice. Rules and thresholds change each year.

## Fonts

The pages ask for Bricolage Grotesque, Figtree and JetBrains Mono, then fall back to system fonts (Segoe UI, system-ui, Menlo/Consolas). No font files are bundled and nothing loads from Google, so the site works offline. To get the original look, add the `.woff2` files under `assets/fonts/` and `@font-face` rules in `assets/site.css`.
