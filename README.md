# Research snapshot

Each age page has a "Research snapshot" section built from `build_research.py`.

- `sources.json` lists every figure used: topic, reference period, source organisation and exact page, a verbatim excerpt, and the ages it is shown for.
- Figures were read from the source pages on 23 October 2026. Where a source publishes wider age groups than the two-year bands, the page shows the group that includes those ages and says so.
- Not included because the age tables could not be read (they sit in Excel downloads): labour force participation by age, median earnings by age (except the highest group), home ownership split by age, and remaining life expectancy at ages other than 60 and 65.

## Updating

1. Edit the `FACTS` list in `build_research.py` (add or change a figure, its source and the ages it applies to).
2. Run `python3 build_research.py <folder of age pages without research> <output folder> sources.json`. Running it again on pages that already have research is safe: the old section is replaced.
