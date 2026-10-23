# Economic life stages (coeconomics.com)

Static site, no build step. Drop the contents of this folder into the repo path Cloudflare Pages serves
(the repo root, or the folder set as the build output directory).

- `index.html`  the 7 x 5 grid of age bands, each a dropdown of five considerations
- `pages/age-12-13.html` ... `pages/age-80-81.html`  one page per band, with sources, forms, videos, three income scenarios and a Home button
- `svg/icons/*.svg`  35 self-contained line icons (24x24 viewBox, no external references)
- `svg/ages/*.svg`  35 self-contained age cards (five icons and labels each)
- `svg/economic-life-stages.svg`  the whole 7 x 5 poster as one SVG
- `data/videos.json`  add YouTube video IDs per band, for example `"age-12-13": ["VIDEO_ID"]`
- `assets/site.css`  shared styles

## For Grok or another tool
Upload any SVG from `svg/`. All colours are literal hex values and fonts fall back to Arial, so files render
the same anywhere. To adapt an icon, change `stroke`, `stroke-width` or the path data.

## Content notes
Figures are Australian averages. Government links point to department home pages; add deep links to specific
forms once confirmed. Income scenarios are illustrative, not official brackets. Not financial advice.
