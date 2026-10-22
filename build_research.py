#!/usr/bin/env python3
"""Add a 'Research snapshot' section to every age page.

Usage: build_research.py <pages_in_dir> <out_dir>
Every figure comes from FACTS below (copied from the cited source on 23 Oct 2026).
Re-running is safe: any existing research section is removed first.
"""
import sys, re, json, html, pathlib

CHECKED = "23 October 2026"
SRC = {
    "asfa": ("ASFA, using ATO data", "https://www.superannuation.asn.au/wp-content/uploads/2026/08/An-update-on-Superannuation-Account-Balances-2026-Edition.pdf", "An update on Superannuation Account Balances, 2026 Edition"),
    "sdac": ("ABS", "https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/latest-release", "Disability, Ageing and Carers, Australia: Summary of Findings, 2022"),
    "edwork": ("ABS", "https://www.abs.gov.au/statistics/people/education/education-and-work-australia/latest-release", "Education and Work, Australia, May 2025"),
    "casual": ("ABS", "https://www.abs.gov.au/media-centre/media-releases/casual-work-continues-decline", "Casual work continues to decline (media release)"),
    "nasc": ("National Anti-Scam Centre (ACCC)", "https://www.nasc.gov.au/system/files/targeting-scams-report-2025.pdf", "Targeting scams 2025, Table 6"),
    "esafety": ("eSafety Commissioner", "https://www.esafety.gov.au/research/children-and-social-media", "Children and social media"),
    "hiw": ("ABS", "https://www.abs.gov.au/statistics/economy/finance/household-income-and-wealth-australia/latest-release", "Household Income and Wealth, Australia, 2019-20, Graph 1"),
    "censusinc": ("ABS", "https://www.abs.gov.au/articles/new-census-insights-income-australia-using-administrative-data", "New Census insights on income in Australia using administrative data"),
    "hoc": ("ABS", "https://www.abs.gov.au/statistics/people/housing/housing-occupancy-and-costs/latest-release", "Housing Occupancy and Costs, 2019-20, Graph 6"),
    "conv": ("The Conversation, citing ABS Census data", "https://theconversation.com/more-rented-more-mortgaged-less-owned-what-the-census-tells-us-about-housing-185893", "More rented, more mortgaged, less owned: what the census tells us about housing"),
    "aifs_parents": ("AIFS, using ABS Census data", "https://aifs.gov.au/research/facts-and-figures/young-people-living-parents", "Young people living with parents"),
    "aifs_fam": ("AIFS, using ABS Census data", "https://aifs.gov.au/research/facts-and-figures/families-and-family-composition", "Families and family composition"),
    "births": ("ABS", "https://www.abs.gov.au/statistics/people/population/births-australia/latest-release", "Births, Australia, 2024"),
    "marr": ("ABS", "https://www.abs.gov.au/statistics/people/people-and-communities/marriages-and-divorces-australia/latest-release", "Marriages and Divorces, Australia, 2025"),
    "earn": ("ABS", "https://www.abs.gov.au/media-centre/media-releases/casual-work-continues-decline", "Casual work continues to decline (media release)"),
    "retire": ("ABS", "https://www.abs.gov.au/statistics/labour/employment-and-unemployment/retirement-and-retirement-intentions-australia/latest-release", "Retirement and Retirement Intentions, Australia, 2024-25"),
    "pension": ("AIHW", "https://www.aihw.gov.au/reports/australias-welfare/income-support-older-australians", "Income support for older Australians"),
    "le60": ("ABS", "https://www.abs.gov.au/media-centre/media-releases/australian-life-expectancy-decreases-second-year-row", "Australian life expectancy decreases for second year in a row"),
    "le65": ("AIHW, quoting ABS life tables", "https://aihw.gov.au/reports/life-expectancy-deaths/deaths-in-australia/contents/life-expectancy", "Deaths in Australia: life expectancy"),
    "lf65": ("AIHW, using ABS data", "https://www.aihw.gov.au/reports/older-people/older-australians/contents/employment-and-work", "Older Australians: employment and work"),
    "barometer": ("Roy Morgan", "https://www.roymorgan.com/findings/australian-youth-barometer-2025-financial-pressures-intensify-for-young-australians-as-confidence-in-the-future-weakens", "Australian Youth Barometer 2025"),
    "rba": ("Reserve Bank of Australia", "https://rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html", "Consumer Payment Behaviour in Australia (Bulletin, May 2026)"),
}

def money(n):
    return "${:,}".format(n)

# ---- super balances (ASFA Tables 1 and 2, 30 June 2024) ----
SUPER_GROUPS = [  # lo, hi, label, median, average, male median, female median
    (0, 17, "Under 18", 307, 6890, 408, 238),
    (18, 24, "Ages 18–24", 6071, 9783, 6380, 5784),
    (25, 29, "Ages 25–29", 21395, 27822, 21742, 21048),
    (30, 34, "Ages 30–34", 40426, 54009, 42962, 38070),
    (35, 39, "Ages 35–39", 69200, 91265, 78289, 61022),
    (40, 44, "Ages 40–44", 100330, 134054, 116076, 85804),
    (45, 49, "Ages 45–49", 131705, 182866, 154751, 110864),
    (50, 54, "Ages 50–54", 161375, 238616, 192196, 134309),
    (55, 59, "Ages 55–59", 185120, 301151, 220560, 154732),
    (60, 64, "Ages 60–64", 203326, 371379, 236126, 174655),
    (65, 69, "Ages 65–69", 218631, 437422, 230766, 207187),
    (70, 74, "Ages 70–74", 227982, 492903, 227027, 228978),
    (75, None, "Ages 75 and over", 197878, 525439, 200477, 195201),
]
# ---- household net worth / income by age of reference person (HIW 2019-20) ----
HIW = [  # lo, hi, label, net worth $'000, gross weekly income $
    (20, 24, "Ages 20–24", 82, 1768), (25, 29, "Ages 25–29", 242, 2304),
    (30, 34, "Ages 30–34", 441, 2588), (35, 39, "Ages 35–39", 555, 2728),
    (40, 44, "Ages 40–44", 841, 2961), (45, 49, "Ages 45–49", 1055, 3058),
    (50, 54, "Ages 50–54", 1212, 3017), (55, 59, "Ages 55–59", 1453, 2822),
    (60, 64, "Ages 60–64", 1601, 2245), (65, 69, "Ages 65–69", 1835, 1564),
    (70, 74, "Ages 70–74", 1509, 1330), (75, None, "Ages 75 and over", 1167, 1045),
]
DISAB = [(5, 14, "5–14", 13.5), (15, 24, "15–24", 13.9), (25, 34, "25–34", 10.3), (35, 44, "35–44", 11.5),
         (45, 54, "45–54", 17.8), (55, 59, "55–59", 26.4), (60, 64, "60–64", 33.2), (65, 69, "65–69", 40.3),
         (70, 74, "70–74", 44.9), (75, 79, "75–79", 53.4), (80, 84, "80–84", 67.6), (85, 89, "85–89", 77.1)]
CARERS = [(0, 14, "Under 15", 2.1, 2.3), (15, 24, "15–24", 8.9, 9.5), (25, 34, "25–34", 8.6, 8.4),
          (35, 44, "35–44", 11.5, 15.8), (45, 54, "45–54", 14.1, 20.5), (55, 64, "55–64", 16.0, 19.5),
          (65, 74, "65–74", 19.7, 18.6), (75, None, "75 and over", 20.1, 13.8)]
ALONE = [(15, 19, 1.2), (20, 24, 5.5), (25, 29, 8.6), (30, 34, 8.7), (35, 39, 7.9), (40, 44, 7.8), (45, 49, 8.9),
         (50, 54, 11.1), (55, 59, 14.2), (60, 64, 17.1), (65, 69, 19.4), (70, 74, 21.5), (75, 79, 24.5), (80, 84, 28.8), (85, None, 32.1)]
ASFR = [(15, 19, 6.0), (20, 24, 30.6), (25, 29, 71.3), (30, 34, 106.0), (35, 39, 66.6), (40, 44, 15.5), (45, 49, 1.4)]
FHB = [(15, 24, "Ages 15–24", 5.3), (25, 34, "Ages 25–34", 56.1), (35, 44, "Ages 35–44", 25.6),
       (45, 54, "Ages 45–54", 9.7), (55, 64, "Ages 55–64", 3.4), (65, None, "Ages 65 and over", 0.8)]
RET = [(50, 54, "Ages 50–54", 9.3, 11.8), (55, 59, "Ages 55–59", 16.8, 18.6), (60, 64, "Ages 60–64", 25.7, 23.1),
       (65, 69, "Ages 65–69", 24.3, 15.5), (70, 74, "Ages 70–74", 8.0, 4.5), (75, 79, "Ages 75–79", 2.6, 1.2)]

def g(lo, hi, label, value):
    return {"lo": lo, "hi": hi, "label": label, "value": value}

FACTS = [
 dict(id="edwork", topic="Study and work", title="Work and study", src="edwork", period="May 2025", min_a=14, max_a=25,
      note="Persons. Enrolled in study includes school.",
      groups=[g(15, 19, "Ages 15–19", "<b>86.7%</b> fully engaged in work and/or study<br><b>81.1%</b> currently enrolled in study"),
              g(20, 24, "Ages 20–24", "<b>76.7%</b> fully engaged in work and/or study<br><b>45.0%</b> currently enrolled in study<br><b>42%</b> studying for a non-school qualification at certificate III level or above")],
      evidence="15–19: Men 87.4, Women 85.8, Persons 86.7; 20–24: Men 79.8, Women 73.8, Persons 76.7 (fully engaged). Enrolled: 15–19 Persons 81.1; 20–24 Persons 45.0. '42% of people aged 20-24 years were studying towards a non-school qualification at certificate III level or above.'"),
 dict(id="casual", topic="Study and work", title="Casual work", src="casual", period="August 2025", min_a=14, max_a=25,
      note="Employees only.",
      groups=[g(15, 24, "Ages 15–24", "Just under half of all <b>2.4 million</b> casual employees were aged 15 to 24")],
      evidence="'Of the 2.4 million casual employees, just under half were aged 15 to 24 years' (ABS media release, 12 Dec 2025)."),
 dict(id="scams", topic="Safety", title="Scam losses reported", src="nasc", period="Calendar year 2025", min_a=12, max_a=35,
      note="Top two scam types by total loss among reports that included a loss. Unreported scams are not counted.",
      groups=[g(0, 17, "Under 18", "Shopping scams (<b>$926,636</b>), then investment scams ($56,469)"),
              g(18, 24, "Ages 18–24", "Threat-based scams (<b>$8.2 million</b>), then job scams ($2.2 million)"),
              g(25, 34, "Ages 25–34", "Investment scams (<b>$10.8 million</b>), then job scams ($5.9 million)")],
      evidence="'Under 18 years Shopping $926,636 Investment $56,469'; '18–24 years Threat-based $8.2m Job $2.2m'; '25–34 years Investment $10.8m Job $5.9m' (Table 6: Top 2 scam types by overall loss for age groups in 2025)."),
 dict(id="online", topic="Online life", title="Social media and messaging", src="esafety", period="Survey, September 2024", min_a=12, max_a=13,
      note="Children aged 8 to 12.",
      groups=[g(8, 12, "Ages 8–12", "<b>84%</b> had used at least one social media or messaging service since the start of the year")],
      evidence="'84% of children aged 8 to 12 had used at least one social media or messaging service since the beginning of the year.'"),
 dict(id="youthbar", topic="Money pressure", title="Financial difficulty", src="barometer", period="Australian Youth Barometer 2025", min_a=18, max_a=25,
      note="A survey of 527 people aged 18 to 24, not an official statistic.",
      groups=[g(18, 24, "Ages 18–24", "<b>85%</b> had experienced financial difficulties to some extent in the last 12 months<br><b>28%</b> often or very often")],
      evidence="'Most (85%) young Australians experienced financial difficulties to some extent in the last 12 months'; 'close to one third (28%) reporting that they did so often or very often'."),
 dict(id="censusinc", topic="Work and income", title="Median personal income", src="censusinc", period="Income for July 2020 to June 2021", min_a=14, max_a=55,
      note="Census 2021 linked with tax and payment records. The ABS cautions that incomes for older age groups are likely under-recorded.",
      groups=[g(15, 19, "Ages 15–19", "<b>$25</b> a week, the lowest of any age group; 44% had nil or negative income"),
              g(35, 44, "Ages 35–44", "<b>$1,318</b> a week, one of the two highest groups"),
              g(45, 54, "Ages 45–54", "<b>$1,289</b> a week, one of the two highest groups")],
      evidence="'People aged 35-44 and 45-54 had the highest personal median incomes at $1,318 and $1,289 respectively.' 'People aged 15-19 had the lowest median income at $25, including 44% who had Nil or negative income.'"),
 dict(id="earn", topic="Work and income", title="Median weekly earnings", src="earn", period="August 2025", min_a=44, max_a=55,
      note="Employees. Employee earnings, not household income.",
      groups=[g(45, 54, "Ages 45–54", "<b>$1,750</b> a week, the highest median of any age group")],
      evidence="'Employees in the 45-54 year age group had the highest median weekly earnings at $1750.' (ABS media release, 12 Dec 2025)"),
 dict(id="payments", topic="Money habits", title="How people pay", src="rba", period="2025 Consumer Payments Survey", min_a=18, max_a=81,
      note="Share of payments made using cards.",
      groups=[g(18, 29, "Ages 18–29", "About <b>80%</b> of payments made by card"),
              g(65, None, "Ages 65 and over", "About <b>60%</b> of payments made by card")],
      evidence="'those aged 18–29 years making around 80 per cent of their payments using cards'; 'around 60 per cent for consumers aged 65 years and over'."),
 dict(id="super", topic="Super", title="Super account balance", src="asfa", period="30 June 2024", min_a=16, max_a=81,
      note="Per account, not per person, because many people hold more than one account. Median is the middle account; average is pulled up by large balances.",
      groups=[g(lo, hi, lab, f"<b>{money(med)}</b> median · {money(avg)} average<br>Median by gender: men {money(m)} · women {money(f)}")
              for lo, hi, lab, med, avg, m, f in SUPER_GROUPS],
      evidence="Table 2 rows e.g. '40 - 44 1,813,147 134,054 100,330' (accounts, average, median); Table 1 rows e.g. '40 - 44 927,145 150,305 116,076 885,833 117,067 85,804' (male accounts, average, median, then female). All rows re-read 23 Oct 2026."),
 dict(id="networth", topic="Wealth", title="Household net worth and income", src="hiw", period="2019–20 financial year", min_a=20, max_a=81,
      note="By age of the household's reference person, as shown in the ABS graph. The ABS page does not say whether the values are averages or medians, so treat them as indicative.",
      groups=[g(lo, hi, lab, f"<b>{money(nw * 1000)}</b> net worth<br>{money(inc)} gross household income a week") for lo, hi, lab, nw, inc in HIW],
      evidence="Graph 1 data: '25-29 | 242 | 2,304; 30-34 | 441 | 2,588; 35-39 | 555 | 2,728; 65-69 | 1,835 | 1,564; 75 and over | 1,167 | 1,045' (net worth $'000, gross weekly income $). Axis labels: 'Net worth ($'000)', 'Average weekly income ($)'."),
 dict(id="fhb", topic="Housing", title="Who buys a first home", src="hoc", period="2019–20", min_a=20, max_a=64,
      note="Share of all recent first home buyers in this age group (age of the household reference person). It is not the share of the age group who buy.",
      groups=[g(lo, hi, lab, f"<b>{v}%</b> of first home buyers") for lo, hi, lab, v in FHB],
      evidence="Graph 6 first home buyers: '15–24 5.3; 25–34 56.1; 35–44 25.6; 45–54 9.7; 55–64 3.4; 65 or more 0.8'."),
 dict(id="own", topic="Housing", title="Home ownership", src="conv", period="Census 2021", min_a=24, max_a=81,
      note="Owners with and without a mortgage combined.",
      groups=[g(25, 34, "Households headed by ages 25–34", "<b>43%</b> owned their home, down from 50% in 1996"),
              g(65, None, "Ages 65 and over", "<b>79.4%</b> home ownership rate, up from 78.4% in 2016")],
      evidence="'Between 1996 and 2021, the share of owners in households headed by 25-34 year olds sank from 50% to 43%.' 'home ownership rates among Australians aged 65+ ticked up from 78.4% to 79.4% between 2016 and 2021'."),
 dict(id="parents", topic="Housing", title="Living with parents", src="aifs_parents", period="Census 2021", min_a=20, max_a=25,
      note="Share of young adults living in their parents' home.",
      groups=[g(20, 24, "Ages 20–24", "Women <b>43%</b> · Men <b>51%</b>")],
      evidence="'with 43% living with parents in 2021 compared to 36% in 2006' (women); 'at ages 20-24 years, from 46% in 2006 to 51% in 2021' (men)."),
 dict(id="alone", topic="Household", title="Living alone", src="aifs_fam", period="Census 2021", min_a=18, max_a=81,
      note="Share of people in the age group who lived alone.",
      groups=[g(lo, hi, (f"Ages {lo}–{hi}" if hi else f"Ages {lo} and over"), f"<b>{v}%</b> lived alone") for lo, hi, v in ALONE],
      evidence="Appendix table 'Living alone (%)': 20-24 5.5; 30-34 8.7; 50-54 11.1; 75-79 24.5; 85+ 32.1 (source: ABS 2021 Census TableBuilder)."),
 dict(id="births", topic="Family", title="Births", src="births", period="2024", min_a=18, max_a=49,
      note="Births per 1,000 women in the age group.",
      groups=[g(lo, hi, f"Ages {lo}–{hi}", f"<b>{v}</b> births per 1,000 women") for lo, hi, v in ASFR],
      evidence="2024 row of the age-specific fertility table: 6.0 | 30.6 | 71.3 | 106.0 | 66.6 | 15.5 | 1.4 (ages 15-19 to 45-49)."),
 dict(id="parentage", topic="Family", title="Age of parents at birth", src="births", period="2024", min_a=26, max_a=39,
      note="All births, not only first births.",
      groups=[g(25, 39, "All births in 2024", "Median age of mothers <b>32.1</b> · fathers <b>33.9</b>")],
      evidence="'Median age was 32.1 years for mothers and 33.9 years for fathers.'"),
 dict(id="marriage", topic="Family", title="Marriage", src="marr", period="2025", min_a=28, max_a=37,
      note="Covers all marriages, not only first marriages.",
      groups=[g(25, 40, "All marriages in 2025", "Median age at marriage: men <b>32.7</b> · women <b>31.2</b>")],
      evidence="'The median age at marriage for males in 2025 was 32.7 years... The median age at marriage for females was 31.2 years.'"),
 dict(id="divorce", topic="Family", title="Divorce", src="marr", period="2025", min_a=42, max_a=51,
      note="Median age of people who divorced in the year.",
      groups=[g(40, 55, "All divorces in 2025", "Median age at divorce: men <b>47.3</b> · women <b>44.4</b>")],
      evidence="'The median age at divorce is now 47.3 years for males and 44.4 years for females.'"),
 dict(id="carers", topic="Care", title="Unpaid carers", src="sdac", period="2022", min_a=12, max_a=81,
      note="Share of people in the age group who provide informal care. About 11.9% of all Australians living in households (3.0 million) were carers.",
      groups=[g(lo, hi, lab if lab.startswith("Under") else f"Ages {lab}", f"Men <b>{m}%</b> · Women <b>{f}%</b>") for lo, hi, lab, m, f in CARERS],
      evidence="'Proportion of all persons who provide informal care, by age and sex, 2022': Less than 15 2.1/2.3; 15-24 8.9/9.5; 25-34 8.6/8.4; 35-44 11.5/15.8; 45-54 14.1/20.5; 55-64 16.0/19.5; 65-74 19.7/18.6; 75 and over 20.1/13.8 (males/females)."),
 dict(id="disability", topic="Health", title="Living with disability", src="sdac", period="2022", min_a=12, max_a=81,
      note="Share of people in the age group with disability. Overall 21.4% of Australians (5.5 million) had disability in 2022.",
      groups=[g(lo, hi, f"Ages {lab}", f"<b>{v}%</b> had disability") for lo, hi, lab, v in DISAB],
      evidence="Disability prevalence 2022: 5–14 13.5; 15–24 13.9; 25–34 10.3; 35–44 11.5; 45–54 17.8; 55–59 26.4; 60–64 33.2; 65–69 40.3; 70–74 44.9; 75–79 53.4; 80–84 67.6; 85–89 77.1."),
 dict(id="retage", topic="Retirement", title="Age at retirement", src="retire", period="2024–25", min_a=50, max_a=79,
      note="Share of retirees aged 45 and over who retired at this age.",
      groups=[g(lo, hi, lab, f"Men <b>{m}%</b> · Women <b>{f}%</b> retired at this age") for lo, hi, lab, m, f in RET],
      evidence="Graph 1 data (men/women): 50-54 9.3/11.8; 55-59 16.8/18.6; 60-64 25.7/23.1; 65-69 24.3/15.5; 70-74 8.0/4.5; 75-79 2.6/1.2."),
 dict(id="retintent", topic="Retirement", title="Intended retirement age", src="retire", period="2024–25", min_a=44, max_a=64,
      note="People aged 45 and over who have not yet retired and intend to.",
      groups=[g(45, 64, "Ages 45 and over", "Average intended retirement age <b>65.6</b><br>Men 65.9 · Women 65.3")],
      evidence="'The average age people aged 45 years and over intend to retire is 65.6 years, a slight increase on 2022-23 (65.4 years).'"),
 dict(id="le60", topic="Retirement", title="Life expectancy at 60", src="le60", period="2021–2023", min_a=58, max_a=63,
      note="Remaining years of life, on average, for someone who has reached 60.",
      groups=[g(58, 63, "At age 60", "Men can expect another <b>24.2</b> years<br>Women another <b>27.1</b> years")],
      evidence="'Today, a 60-year-old Australian man can expect to live another 24.2 years, and a woman another 27.1 years.'"),
 dict(id="le65", topic="Retirement", title="Life expectancy at 65", src="le65", period="2020–2022", min_a=64, max_a=75,
      note="Remaining years of life, on average, for someone who has reached 65.",
      groups=[g(64, 75, "At age 65", "Men can expect another <b>20.2</b> years<br>Women another <b>22.8</b> years")],
      evidence="'Men aged 65 in 2020-2022 could expect to live another 20.2 years... Women aged 65 in 2020-2022 could expect to live another 22.8 years.'"),
 dict(id="pension", topic="Retirement", title="Age Pension", src="pension", period="31 March 2023", min_a=66, max_a=75,
      note="Share of the age group receiving the Age Pension.",
      groups=[g(65, 69, "Ages 65–69", "<b>30%</b> received the Age Pension"), g(70, 74, "Ages 70–74", "<b>60%</b> received the Age Pension")],
      evidence="'from 30% of those aged 65–69, to 60% of those aged 70–74, and 78% of those aged 85 and over'."),
 dict(id="lf65", topic="Retirement", title="Still working", src="lf65", period="April 2021", min_a=64, max_a=81,
      note="Labour force participation of people aged 65 and over.",
      groups=[g(65, None, "Ages 65 and over", "<b>15%</b> were in the labour force, up from 6.1% in 2001")],
      evidence="'approximately 619,000 older Australians (aged 65 and over) were employed in the labour force. The workforce participation rate was 15%, up from 6.1% in 2001.'"),
]

def overlaps(grp, a, b):
    return grp["lo"] <= b and (grp["hi"] is None or grp["hi"] >= a)

def card(fact, groups):
    org, url, title = SRC[fact["src"]]
    items = "".join(f'<li><span class="grp">{html.escape(gr["label"])}</span><span class="val">{gr["value"]}</span></li>' for gr in groups)
    return (f'<article class="fact"><span class="tag">{html.escape(fact["topic"])}</span><h3>{html.escape(fact["title"])}</h3>'
            f'<ul>{items}</ul><p class="note">{html.escape(fact["period"])}. {html.escape(fact["note"])}</p>'
            f'<div class="src"><span class="muted">Source</span><a href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(org)}: {html.escape(title)}</a></div></article>')

SECTION_RE = re.compile(r'<section class="wrap s9 research[^"]*" id="research">.*?</section>\n?', re.S)
BAND_RE = re.compile(r'<section class="band-head (s\d+)">')
AGE_RE = re.compile(r'age-(\d+)-(\d+)\.html$')

def build(in_dir, out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)
    counts = {}
    for f in sorted(in_dir.glob("age-*.html")):
        a, b = map(int, AGE_RE.search(f.name).groups())
        s = SECTION_RE.sub("", f.read_text(encoding="utf-8"))
        cls = BAND_RE.search(s).group(1)
        cards = []
        for fact in FACTS:
            if not (fact["min_a"] <= b and fact["max_a"] >= a):
                continue
            gs = [gr for gr in fact["groups"] if overlaps(gr, a, b)]
            if gs:
                cards.append(card(fact, gs))
        sec = (f'<section class="wrap s9 research {cls}" id="research"><h2>Research snapshot</h2>'
               f'<p class="muted">Figures from published research for the age groups that cover {a}–{b}. Sources often publish wider age groups, so the group shown is the one that includes these ages. They describe groups of people, not any one person. Checked {CHECKED}.</p>'
               f'<div class="facts">{"".join(cards)}</div>'
               f'<p class="muted">Dollar figures are in the dollars of the year shown. Average and median are not the same: the median is the middle value. Not financial advice.</p></section>\n')
        marker = '<section class="wrap s9"><h2>Videos</h2>'
        assert marker in s, f.name
        s = s.replace(marker, sec + marker, 1)
        if "research.css" not in s:
            s = s.replace('<link rel="stylesheet" href="../assets/site.css">',
                          '<link rel="stylesheet" href="../assets/site.css">\n<link rel="stylesheet" href="../assets/research.css">', 1)
        s = re.sub(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="https://coeconomics.com/pages/{f.name}">', s)
        s = s.replace("sources and income scenarios for ages", "sources, research and income scenarios for ages")
        (out_dir / f.name).write_text(s, encoding="utf-8")
        counts[f.name] = len(cards)
    return counts

def sources_json(path):
    out = []
    for fact in FACTS:
        org, url, title = SRC[fact["src"]]
        out.append({"id": fact["id"], "topic": fact["topic"], "title": fact["title"], "reference_period": fact["period"],
                    "source_org": org, "source_title": title, "source_url": url, "evidence": fact["evidence"],
                    "shown_for_ages": f'{fact["min_a"]} to {fact["max_a"]}', "note": fact["note"], "checked": CHECKED})
    path.write_text(json.dumps(out, indent=1, ensure_ascii=False) + "\n", encoding="utf-8")

if __name__ == "__main__":
    inp, outp = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
    counts = build(inp, outp)
    sources_json(pathlib.Path(sys.argv[3]))
    print(len(counts), "pages; cards per page min/max:", min(counts.values()), max(counts.values()))
    for k, v in counts.items():
        print(k, v)
