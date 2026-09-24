/* Doug's Lab — single content source. Edit cards here.
   General information only. Not advice. Australia only. */

// VERIFY BEFORE PUBLISH: confirm exact titles, co-authors, editions, honours and affiliations against publisher or library records. Do not assert a title or edition you cannot confirm. Where unsure, list the author and topic only.
// Checked 2026-09-24 against public library and publisher listings, not against the books themselves:
// - de Groot: a Queensland Law Handbook author note names Wills, Probate and Administration Practice (Queensland) and Family Provision in Australia. No edition is stated on this site.
// - Croucher: State Library of NSW and Supreme Court Library Queensland catalogue Succession: Families, Property and Death, co-author Prue Vines. The phrase "Succession: Families, Property and Law" is not used here.
// - Nolan: topic only. No title is asserted.
// - Dal Pont: topic only (law of succession; equity and trusts in Australia). No edition is asserted.

window.DOUGS_LAB = {
  disclaimer: "General information only. Confirm with a registered tax agent and solicitor. Rules include 2026–28 announced reforms that may change.",
  hardLine: "A locked charity or a community land trust is not a family discretionary trust.",

  rooms: [
    { href: "index.html", id: "home", n: "01", label: "Home", line: "What are you planning for?" },
    { href: "profile.html", id: "profile", n: "02", label: "Household profile", line: "A browser-only note of your objective." },
    { href: "succession.html", id: "succession", n: "03", label: "Succession planner", line: "Control, probate, delay, challenge, continuity." },
    { href: "explorer.html", id: "explorer", n: "04", label: "Structure explorer", line: "Nineteen Australian structures, including testamentary trusts." },
    { href: "workshop.html", id: "workshop", n: "05", label: "Scenario workshop", line: "Sell, gift, covenant or hold — flags only." },
    { href: "studio.html", id: "studio", n: "06", label: "CLT / charity / co-op", line: "Green, amber and red. The hard line lives here." },
    { href: "village.html", id: "village", n: "07", label: "Regenerative village", line: "Settlement layers, not a development pitch." },
    { href: "compare.html", id: "compare", n: "08", label: "Compare", line: "Control, lock, tax character and succession columns." },
    { href: "checklist.html", id: "checklist", n: "09", label: "Action checklist", line: "Ticks stay on this browser." },
    { href: "glossary.html", id: "glossary", n: "10", label: "Glossary and timeline", line: "Terms, then advice, documents, lodgement, land." },
    { href: "team.html", id: "team", n: "11", label: "The team", line: "Who does what, and in what order." },
    { href: "booking.html", id: "booking", n: "12", label: "Walk through", line: "Canberra school holidays, and weekends after 1:00 pm." }
  ],

  booking: {
    phoneDisplay: "0423 336 331",
    phoneTel: "+61423336331",
    email: "v2@live.com.au",
    slots: [
      ["13:00", "1:00–2:00 pm"],
      ["14:00", "2:00–3:00 pm"],
      ["15:00", "3:00–4:00 pm"],
      ["16:00", "4:00–5:00 pm"],
      ["17:00", "5:00–6:00 pm"]
    ],
    // ACT public school holidays. Teacher start days are not included.
    // Term dates: ACT Government, public school terms 2026–28 (act.gov.au).
    holidays: [
      ["2026-04-03", "2026-04-19"],
      ["2026-07-04", "2026-07-19"],
      ["2026-09-26", "2026-10-11"],
      ["2026-12-19", "2027-01-28"],
      ["2027-04-10", "2027-04-26"],
      ["2027-07-03", "2027-07-18"],
      ["2027-09-25", "2027-10-10"],
      ["2027-12-18", "2028-02-06"]
    ]
  },

  objectives: [
    {
      id: "protection",
      label: "Protection",
      line: "Keep a house, a business or a gift from being treated as if it were already someone else's.",
      body: "Start with who can decide if capacity is lost, and which assets a Will does not control. A structure can be relevant to that question. It does not remove a later challenge by itself.",
      rooms: ["succession.html", "explorer.html", "checklist.html"]
    },
    {
      id: "succession",
      label: "Succession",
      line: "Decide what should happen on death, including assets the Will does not control.",
      body: "Use the five lenses, then separate estate assets from non-estate assets. The team page sets out roles and a workable order. It does not name firms.",
      rooms: ["succession.html", "team.html", "glossary.html"]
    },
    {
      id: "stewardship",
      label: "Stewardship",
      line: "Hold land or a place so that care of it can continue after the people who started it.",
      body: "That is a question of title, purpose and who can still make decisions. A new name on a family trust does not lock the land to a purpose.",
      rooms: ["village.html", "explorer.html", "studio.html"]
    },
    {
      id: "community",
      label: "Community",
      line: "A group that holds something together: a co-op, an association, or a charity with members.",
      body: "Membership and rules do that work. A family appointor is a different tool. Do not describe one as the other.",
      rooms: ["studio.html", "village.html", "explorer.html"]
    },
    {
      id: "charity",
      label: "Charity",
      line: "A purpose that is locked, with a regulator, and not available as family discretionary property.",
      body: "Read the hard line before using the words CLT or community. Registration and the winding-up clause matter more than the letterhead.",
      rooms: ["studio.html", "explorer.html", "glossary.html"]
    },
    {
      id: "hybrid",
      label: "Hybrid",
      line: "More than one of the above. This is where names get slippery.",
      body: "Name the pieces separately. A family discretionary trust can sit beside a charity. It cannot be the charity. Compare and the workshop show the difference. Neither page calculates tax.",
      rooms: ["compare.html", "workshop.html", "team.html"]
    }
  ],

  profileQuestions: [
    { id: "will", label: "Is there a current Will?" },
    { id: "poa", label: "Are there enduring powers of attorney (the name differs by state or territory)?" },
    { id: "bdbn", label: "Is there a superannuation death benefit nomination?" },
    { id: "business", label: "Is there a business, or assets held in a trust or company?" },
    { id: "prior", label: "Are there previous relationships, or children from an earlier relationship?" }
  ],

  lenses: [
    {
      id: "control",
      line: "Control — who can decide, including if capacity is lost.",
      body: "Ask who can sign now, and who can sign if the person cannot. For land in a person's name, an enduring power of attorney may be relevant. For a trust, the deed decides. For a company, the constitution and the directors decide. The name of the incapacity document differs by state or territory. A Will does not operate while the person is alive."
    },
    {
      id: "probate",
      line: "Probate — whether a court grant is needed before anyone can deal with an asset.",
      body: "A grant of probate, or letters of administration if there is no Will, comes from the Supreme Court of the relevant state or territory. Banks and land registries often ask for a grant before they will deal with assets in the deceased person's sole name. Some assets pass outside that process. Check the documents rather than assuming either way."
    },
    {
      id: "delay",
      line: "Delay — what commonly slows a transfer.",
      body: "Delay often comes from a missing Will, a grant, unclear trust deeds, a sole director who has died, a nomination that has lapsed, unpaid debts, or a dispute. Tax and duty questions can also slow a transfer even when the legal title is clear. Time limits for challenges differ by state or territory."
    },
    {
      id: "challenge",
      line: "Challenge — family provision and other disputes.",
      body: "Eligible people may apply to a court if they believe inadequate provision was made for them. Who is eligible, the time limit, and whether a notional estate idea exists, differ by state or territory. A Will, a testamentary trust, a binding financial agreement or a family trust does not remove that kind of claim by itself. See the team page for the family provision role."
    },
    {
      id: "continuity",
      line: "Continuity — whether a house, farm, business or place can keep functioning.",
      body: "Continuity is about who can pay rates, sign a lease, employ someone, or call a meeting after a death or a loss of capacity. Insurance funding and buy-sell terms can be relevant to a business. They do not replace the Will, the deed or the constitution."
    }
  ],

  estateColumns: {
    inWill: {
      title: "Passes under a Will",
      points: [
        "Assets held in the person's sole name, subject to the Will's terms.",
        "A share held as tenant in common is often in this group. Check the title.",
        "If there is no valid Will, intestacy rules decide. Those rules differ by state or territory."
      ]
    },
    outside: {
      title: "May pass outside a Will (check the documents)",
      points: [
        "Superannuation and SMSF death benefits.",
        "Jointly held property, which may pass by survivorship.",
        "Assets held in a family trust. Control follows the trust deed and the appointor or guardian rules.",
        "Company shares, where the constitution and any shareholder agreement also matter. Shares in a sole name can still be estate property.",
        "Life insurance with a nominated beneficiary.",
        "A business interest governed by a partnership agreement or a buy-sell agreement."
      ]
    }
  },

  aroundWill: [
    { line: "Enduring power of attorney — financial decisions if capacity is lost.", body: "The name, the powers and the witnessing rules differ by state or territory. It operates in life. It is not a Will." },
    { line: "Enduring guardianship-type document — lifestyle or medical decisions.", body: "Names differ. Examples include enduring guardian, advance care directive, advance health directive, and medical treatment decision-maker. Do not use one state's name as the national name." },
    { line: "Super and SMSF death benefit nominations.", body: "These sit outside the Will. Check whether a nomination is binding, whether it lapses, and what the fund deed allows." },
    { line: "Trust deeds — appointor, guardian and successor clauses.", body: "The deed, not the Will, usually decides who controls a family trust after death or incapacity, unless the deed itself points back to the Will." },
    { line: "Company constitution and shareholder or partnership agreements.", body: "These can restrict transfer on death and can require a buy-out. Check them beside the Will." },
    { line: "Life insurance nominations.", body: "A nominated beneficiary may receive the proceeds outside the estate. The policy and the nomination decide. Check both." },
    { line: "Binding financial agreement, where a relationship break-up is relevant.", body: "It may reduce the risk of a later dispute between the parties to it. It does not remove family provision claims by itself. Validity depends on the formalities being met." }
  ],

  structures: [
    {
      id: "sole",
      group: "Holding an asset",
      name: "Assets in one person's name",
      line: "The usual estate asset. The Will matters, and a grant is often required.",
      who: "Solicitor, financial adviser, accountant or tax agent.",
      fields: [
        { label: "Who controls after death or incapacity", text: "While the person is alive but has lost capacity, an enduring attorney may be able to act if the document is valid. After death, the executor acts once a grant is made, then the beneficiaries take under the Will. If there is no Will, an administrator acts under the intestacy rules of that state or territory." },
        { label: "What passes under a Will", text: "Assets in the sole name generally pass under the Will. Joint property, super and trust assets may not. Check each title." },
        { label: "Typical delay points", text: "Finding the original Will, the grant, debts, land registry practice, and tax questions about the asset." },
        { label: "Challenge exposure", text: "Family provision claims are aimed at the estate. Eligibility and time limits differ by state or territory. Sole-name assets are commonly inside that conversation. A Will does not remove the claim." },
        { label: "Tax character flags", text: "Death has its own capital gains tax rules, and they depend on the asset. Main residence treatment may be relevant and depends on the facts. Duty on a transmission by death is not the same question as duty on a sale. Check the ATO and the state revenue office." }
      ],
      compare: {
        control: "The owner, then an attorney or an executor.",
        lock: "Not locked to a purpose.",
        tax: "Personal. Depends on the asset.",
        cgt: "Death, gift and sale can each be relevant. Check the ATO. Duty on death differs from a sale.",
        purpose: "Family",
        survives: "The asset can pass. The person's control does not.",
        will: "Generally yes, if it is still in the sole name.",
        probate: "Higher",
        challenge: "Moderate",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "joint",
      group: "Holding an asset",
      name: "Joint tenancy",
      line: "Survivorship may take the interest outside the Will.",
      who: "Solicitor. A conveyancer or the land registry may be involved in the title. Tax agent for tax flags.",
      fields: [
        { label: "Who controls after death or incapacity", text: "While all owners are alive, they generally must act together. If one loses capacity, that person's attorney may be able to sign, if the power allows it. On death, the surviving joint tenant generally takes the whole interest." },
        { label: "What passes under a Will", text: "The deceased's interest generally does not pass under the Will. It may pass by survivorship. Check the title. Do not assume the Will overrides the joint tenancy." },
        { label: "Typical delay points", text: "Proving death to the land registry, uncertainty about whether the tenancy was joint or in common, and any dispute about severance." },
        { label: "Challenge exposure", text: "Some states can look at certain non-estate assets in a family provision claim, including through a notional estate idea. That is not a national rule. A joint tenancy does not remove a claim by itself." },
        { label: "Tax character flags", text: "Capital gains tax and duty on survivorship can differ from a sale between strangers. Check the ATO and the revenue office. This page does not say survivorship is tax-free." }
      ],
      compare: {
        control: "The joint owners together, then the survivor.",
        lock: "Not locked to a purpose.",
        tax: "Personal co-ownership.",
        cgt: "Survivorship can still raise tax and duty questions. Check.",
        purpose: "Family",
        survives: "The surviving joint tenant generally takes the interest.",
        will: "Generally no. Check the title.",
        probate: "Low",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "tic",
      group: "Holding an asset",
      name: "Tenancy in common",
      line: "A distinct share that can pass under a Will.",
      who: "Solicitor, tax agent.",
      fields: [
        { label: "Who controls after death or incapacity", text: "Each co-owner deals with their own share. An attorney may act for a person who has lost capacity. After death, the executor or administrator deals with that share." },
        { label: "What passes under a Will", text: "The deceased's share generally passes under the Will. It does not automatically go to the other co-owner." },
        { label: "Typical delay points", text: "A grant is often needed before the share can be transferred. Co-owners may disagree about sale." },
        { label: "Challenge exposure", text: "The share is commonly an estate asset, so family provision can be relevant. Rules differ by state or territory." },
        { label: "Tax character flags", text: "Sale or gift of a share can be a CGT event and a duty event. Death has separate rules. Check the ATO and the revenue office." }
      ],
      compare: {
        control: "Each owner, for their own share.",
        lock: "Not locked to a purpose.",
        tax: "Personal co-ownership, in shares.",
        cgt: "A transfer of a share can raise CGT and duty. Check.",
        purpose: "Family",
        survives: "The share can pass. It does not automatically go to the co-owner.",
        will: "Generally yes.",
        probate: "Higher",
        challenge: "Moderate",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "fdt",
      group: "Private trusts",
      name: "Family discretionary trust",
      line: "Private family control. Not a charity and not a CLT.",
      hard: true,
      who: "Solicitor, accountant, financial adviser.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The trustee holds the assets. Practical control often sits with the appointor, and sometimes a guardian. The deed decides who takes those roles if someone dies or loses capacity. If the deed is silent, delay is common." },
        { label: "What passes under a Will", text: "The trust assets generally do not pass under a beneficiary's Will. A role such as appointor passes only if the deed says so. Assuming the Will controls the trust is a warning." },
        { label: "Typical delay points", text: "A missing deed, no successor appointor, a trustee company with no living director, and arguments about who may call in the assets." },
        { label: "Challenge exposure", text: "Family provision is usually aimed at the estate, not automatically at trust assets. Some states have notional estate or similar ideas that can reach some assets outside the estate. That differs by state. A family trust does not remove a claim by itself." },
        { label: "Tax character flags", text: "This is a private trust. Distributions and some changes of control or deed can be relevant to tax. Check the ATO. It is not a charity concession and it is not a locked community asset." }
      ],
      compare: {
        control: "Trustee, often directed in practice by an appointor.",
        lock: "Not locked. A private deed can usually be changed if its own rules allow.",
        tax: "Private discretionary trust.",
        cgt: "Sales, gifts and some deed or control changes can be relevant. Check the ATO and duty rules.",
        purpose: "Family",
        survives: "The trust can continue. Control depends on the deed.",
        will: "Generally the assets do not. A control role might, if the deed says so.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "tdt",
      group: "Private trusts",
      name: "Testamentary discretionary trust",
      line: "A discretionary trust written into a Will. Still not a charity or a CLT.",
      hard: true,
      who: "Estate planning solicitor, accountant, financial adviser.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The trust does not exist until after death, and only if the Will is valid and the trust is set up in the administration. The Will names the trustee and the range of beneficiaries. It does not help with incapacity during life. Lifetime documents do that." },
        { label: "What passes under a Will", text: "The assets have to reach the estate first, and the Will then directs them into the trust. Assets that never enter the estate, such as joint property or super paid elsewhere, do not enter this trust unless a separate step puts them there." },
        { label: "Typical delay points", text: "The grant, estate debts, tax questions, and the work of actually constituting the trust. A challenge to the Will delays it." },
        { label: "Challenge exposure", text: "The Will can still be challenged. A testamentary discretionary trust may help protect a beneficiary's inheritance from that beneficiary's later bankruptcy, creditors or relationship property claims. It does not remove family provision claims against the estate, and it does not guarantee an outcome." },
        { label: "Tax character flags", text: "Tax treatment of a testamentary trust can differ from a trust set up during life. The difference depends on the current law and on how the trust is used. Check the ATO. Do not treat it as a charity." }
      ],
      compare: {
        control: "The trustee named in the Will, after death.",
        lock: "Not a charity lock. The Will and trust terms set the range.",
        tax: "Testamentary discretionary trust. Check current treatment.",
        cgt: "Death rules may be relevant to assets that pass into the trust. Check the ATO.",
        purpose: "Family or bequest",
        survives: "It is created by the death, if the Will works.",
        will: "Yes. It only exists because of the Will.",
        probate: "Higher",
        challenge: "Moderate",
        incapacity: "Does not operate in life"
      }
    },
    {
      id: "unit",
      group: "Private trusts",
      name: "Unit trust",
      line: "Fixed units. The units may be property. The trust is not a charity.",
      who: "Solicitor, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The trustee runs the trust under the deed. Unitholders have the rights the deed gives them. If a unitholder dies, their units are the succession question. If a trustee dies, the deed decides the replacement." },
        { label: "What passes under a Will", text: "Units held in a sole name generally pass under the Will, subject to any transfer rules in the deed. The underlying land does not pass under the unitholder's Will." },
        { label: "Typical delay points", text: "Deed restrictions on transfer, a grant for the units, and valuation disputes between families." },
        { label: "Challenge exposure", text: "Units that are estate property can be relevant to family provision. The trust assets themselves are not the same thing as the units. Rules differ by state or territory." },
        { label: "Tax character flags", text: "Transfer of units can be a CGT event. Duty on unit transfers differs by state and territory and has changed in some places. Check the revenue office. Do not use one state's rule as the national rule." }
      ],
      compare: {
        control: "Trustee under the deed. Unitholders have fixed rights.",
        lock: "Not locked to a community purpose.",
        tax: "Unit trust. Fixed entitlements as the deed describes.",
        cgt: "Transfer of units can raise CGT and, in some places, duty. Check.",
        purpose: "Family or business",
        survives: "The trust can continue. Units may pass.",
        will: "The units may. The underlying assets generally do not.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "fixed",
      group: "Private trusts",
      name: "Fixed trust",
      line: "Beneficiaries have defined interests, not a free discretion.",
      who: "Solicitor, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The trustee administers. Beneficiaries have the interests set out in the deed. Those interests, if a person owns them, are what pass when that person dies." },
        { label: "What passes under a Will", text: "A person's fixed interest may pass under the Will. The whole trust fund does not, unless the person was the only beneficiary and the deed says the interest is property of that kind." },
        { label: "Typical delay points", text: "Reading the deed carefully enough to see what the interest actually is, then a grant if the interest is estate property." },
        { label: "Challenge exposure", text: "If the interest is estate property, family provision can be relevant. A fixed trust is not a locked charity." },
        { label: "Tax character flags", text: "Tax rules sometimes treat fixed entitlements differently from discretionary interests. Whether this deed qualifies is a fact question. Check the ATO. Do not assume a label is enough." }
      ],
      compare: {
        control: "Trustee, with defined beneficiary interests.",
        lock: "Not a charity lock.",
        tax: "Fixed trust. Check whether the deed matches the tax label.",
        cgt: "Dealing with the interest can be relevant to CGT and duty. Check.",
        purpose: "Family or business",
        survives: "The trust can continue. The interest may pass.",
        will: "The interest may pass under the Will.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "bare",
      group: "Private trusts",
      name: "Bare trust",
      line: "The trustee holds for a named beneficiary and generally must follow that beneficiary.",
      who: "Solicitor, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The beneficiary generally directs the trustee. If the beneficiary dies, their interest is the succession question. If the trustee dies, a replacement can usually be required so the holding continues." },
        { label: "What passes under a Will", text: "The beneficial interest may pass under the beneficiary's Will. The legal title may stay with a trustee until it is transferred. Check the declaration of trust." },
        { label: "Typical delay points", text: "A trust that was never written down, or a title that still shows a person who was only a nominee." },
        { label: "Challenge exposure", text: "If the beneficial interest is estate property, family provision can be relevant. A bare trust is not a family discretionary trust and it is not a CLT." },
        { label: "Tax character flags", text: "The beneficiary is often the person the tax system looks to, but that depends on the facts. A transfer of the beneficial interest can be relevant to CGT and duty. Check the ATO and the revenue office." }
      ],
      compare: {
        control: "The beneficiary generally directs the trustee.",
        lock: "Not locked.",
        tax: "Usually look-through to the beneficiary. Check the facts.",
        cgt: "A dealing with the beneficial interest can raise CGT and duty. Check.",
        purpose: "Depends on documents",
        survives: "The interest can pass.",
        will: "The beneficial interest may pass under the Will.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "pty",
      group: "Companies, partnerships and super",
      name: "Proprietary limited company",
      line: "The company does not die. Shares and directors are the succession questions.",
      who: "Solicitor, accountant, financial adviser. A business succession adviser if there are co-owners.",
      fields: [
        { label: "Who controls after death or incapacity", text: "Directors control day-to-day decisions while they hold office. Shareholders can replace directors if the constitution allows the meeting to happen. A sole director's death or incapacity can leave nobody who can sign." },
        { label: "What passes under a Will", text: "Shares held in a sole name generally pass under the Will. A constitution or shareholder agreement may force a transfer or a buy-out instead. The company's assets do not pass under a shareholder's Will." },
        { label: "Typical delay points", text: "No living director, missing share certificates or registers, ASIC forms, and a clash between the Will and a shareholder agreement." },
        { label: "Challenge exposure", text: "Shares that fall into the estate can be relevant to family provision. A buy-sell may change what the estate receives. It does not remove a claim by itself." },
        { label: "Tax character flags", text: "A transfer of shares can be a CGT event. Duty on shares differs by state and territory. Check the revenue office rather than assuming a national rule. Dividends and loans have their own tax character. Check the ATO." }
      ],
      compare: {
        control: "Directors, within the constitution. Shareholders own the shares.",
        lock: "Not locked, unless a constitution deliberately restricts transfers.",
        tax: "Company. Separate from its shareholders.",
        cgt: "Share transfers can raise CGT. Share duty differs by state. Check.",
        purpose: "Family or business",
        survives: "The company continues. Shares may pass or be bought out.",
        will: "Shares may pass, subject to the constitution and any agreement.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "partnership",
      group: "Companies, partnerships and super",
      name: "Partnership",
      line: "The agreement, not only the Will, decides whether the business continues.",
      who: "Solicitor, accountant, financial adviser.",
      fields: [
        { label: "Who controls after death or incapacity", text: "Partners control the firm under the agreement and the relevant Partnership Act. Those Acts differ by state and territory. If a partner loses capacity, an attorney may be able to deal with that partner's interest only if the agreement and the power allow it." },
        { label: "What passes under a Will", text: "A partnership interest may be governed by the agreement. The Will alone may not keep the partnership going or deliver a share of the business. Check both." },
        { label: "Typical delay points", text: "No written agreement, a clause that ends the partnership on death, and no funding for a buy-out." },
        { label: "Challenge exposure", text: "Whatever value reaches the estate can be relevant to family provision. The business itself may already have moved under the agreement." },
        { label: "Tax character flags", text: "Partnership income and a disposal of a partnership interest can be relevant to tax. Goodwill and trading stock are fact questions. Check the ATO. No figure is given here." }
      ],
      compare: {
        control: "The partners, under the agreement.",
        lock: "Not locked.",
        tax: "Partnership. Check how income is shared.",
        cgt: "Leaving or buying out a partner can raise tax questions. Check the ATO.",
        purpose: "Business",
        survives: "Only if the agreement, or a new agreement, keeps it going.",
        will: "Often no, or only the value the agreement allows.",
        probate: "Depends on documents",
        challenge: "Depends on documents",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "smsf",
      group: "Companies, partnerships and super",
      name: "Self-managed superannuation fund",
      line: "Super, not a family trust. Death benefits follow the deed and the nomination.",
      who: "Financial adviser with the right licence, accountant, solicitor.",
      fields: [
        { label: "Who controls after death or incapacity", text: "Trustees, or the directors of a corporate trustee, control the fund under the deed and super law. A member's death or loss of capacity can leave the fund unable to act if no one else can be a trustee or director. The deed should be read for the next trustee." },
        { label: "What passes under a Will", text: "A death benefit does not automatically follow the Will. It follows a valid binding nomination if the deed allows it, or the trustee's decision if there is no binding nomination. It can be paid to the estate only if the deed and the decision allow that." },
        { label: "Typical delay points", text: "A lapsed nomination, a deed that does not allow the nomination people think they made, and a corporate trustee with no living director." },
        { label: "Challenge exposure", text: "Super is a common dispute. A binding nomination can be relevant. It does not remove every dispute, and some states can look beyond the estate. Rules differ." },
        { label: "Tax character flags", text: "The tax treatment of a death benefit can differ with the recipient and with whether that person is a dependant under the tax rules. Check the ATO. This page does not say a payment is tax-free." }
      ],
      compare: {
        control: "Trustees or corporate trustee, under the deed and super law.",
        lock: "Locked to super rules, not to a family appointor and not to a charity.",
        tax: "Complying super fund, if it meets the rules. Check.",
        cgt: "Payments on death have their own tax rules. Check the ATO. Duty is a separate state question if assets are transferred.",
        purpose: "Retirement savings, then a death benefit",
        survives: "The fund can continue only if trusteeship is sorted.",
        will: "Generally no. Only if the benefit is paid to the estate.",
        probate: "Low",
        challenge: "Moderate",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "apra",
      group: "Companies, partnerships and super",
      name: "Interest in an APRA-regulated super fund",
      line: "Also outside the Will, unless the fund pays the benefit to the estate.",
      who: "Financial adviser with the right licence, the fund, and a solicitor if there is a dispute.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The fund trustee decides within the fund rules and any valid nomination. The member's family does not become the trustee." },
        { label: "What passes under a Will", text: "The benefit generally does not pass under the Will. A binding death benefit nomination, if the fund offers one and it is still valid, can be relevant. Some nominations lapse. Check the fund." },
        { label: "Typical delay points", text: "The fund's own claim process, a nomination that expired, and competing dependants." },
        { label: "Challenge exposure", text: "Disputes about super can go through the fund's process and sometimes a complaint body or a court. A Will does not decide the benefit by itself." },
        { label: "Tax character flags", text: "Tax on a death benefit depends on the recipient and the current rules. Check the ATO. This is not a family discretionary trust." }
      ],
      compare: {
        control: "The fund trustee, within the rules and any nomination.",
        lock: "Locked to super law. Not a family deed.",
        tax: "Superannuation. Check the death-benefit rules.",
        cgt: "Death benefits have their own tax treatment. Check the ATO.",
        purpose: "Retirement savings, then a death benefit",
        survives: "The account ends or is paid. The fund continues.",
        will: "Generally no, unless paid to the estate.",
        probate: "Low",
        challenge: "Moderate",
        incapacity: "The fund's rules, not a family appointor"
      }
    },
    {
      id: "life",
      group: "Holding an asset",
      name: "Life interest or right of residence",
      line: "Someone may live there, or receive income, without taking the whole asset.",
      who: "Solicitor, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The document decides. A life tenant or resident may occupy or receive income. A remainderman takes later. Trustees may hold the asset in the meantime. Incapacity of the life tenant does not hand the remainder to them." },
        { label: "What passes under a Will", text: "This right is often created by the Will. It can also be created by a deed during life. The remainder does not pass to the life tenant's own beneficiaries unless the document says so." },
        { label: "Typical delay points", text: "Arguments about repairs, sale, aged care and whether the right has ended. The asset can be unsaleable for a long time." },
        { label: "Challenge exposure", text: "A life interest does not remove a family provision claim against the estate. A court can still adjust provision. Rules differ by state or territory." },
        { label: "Tax character flags", text: "Capital gains tax and main residence questions can arise when a life interest ends or the property is sold. Check the ATO. Duty can be relevant when the interest is created by a lifetime deed. Check the state." }
      ],
      compare: {
        control: "Split between the life tenant or resident, the trustee, and the remainder.",
        lock: "Locked only for as long as the document says.",
        tax: "Depends on whether it arose under a Will or a lifetime deed.",
        cgt: "Ending or selling the interest can be relevant. Check the ATO.",
        purpose: "Family or bequest",
        survives: "The right can continue after the giver's death.",
        will: "Often created by the Will. It does not give the whole asset to the life tenant.",
        probate: "Depends on documents",
        challenge: "Moderate",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "charity-trust",
      group: "Purpose and community",
      name: "Charitable trust",
      line: "Held for a charitable purpose. Not a family discretionary trust.",
      hard: true,
      who: "Solicitor, an adviser who understands the ACNC, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The trustee controls, under the deed and charity law. If a trustee dies, the deed or a regulator or a court may be relevant to a replacement. Family members do not become appointors of a private family trust by inheritance." },
        { label: "What passes under a Will", text: "The trust fund does not pass under a relative's Will. A person may leave an estate gift to the trust. That gift is a bequest to the purpose, not family property." },
        { label: "Typical delay points", text: "A deed that does not say how trustees are replaced, and uncertainty about whether the purpose is actually charitable." },
        { label: "Challenge exposure", text: "Disputes are about purpose and trustee duties, not about using the fund as a parent's estate. It does not remove family provision claims against a person's own estate." },
        { label: "Tax character flags", text: "Concessions may be relevant if the trust is endorsed. Endorsement is not automatic. Check the ATO and the ACNC. Do not assume a concession, and do not treat the trust as a family tax vehicle." }
      ],
      compare: {
        control: "Charitable trustee, under the deed and charity law.",
        lock: "Locked to the charitable purpose, if the deed and the law hold.",
        tax: "Charity, only if it qualifies and is endorsed. Check.",
        cgt: "Concessions may be relevant and are not automatic. Duty can still arise. Check.",
        purpose: "Bequest or community purpose",
        survives: "The purpose can continue. It is not a family inheritance.",
        will: "No. A person may leave a gift to it.",
        probate: "Low",
        challenge: "Low",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "clg",
      group: "Purpose and community",
      name: "Company limited by guarantee",
      line: "A common legal form for Australian charities. Members do not take the assets.",
      who: "Solicitor, an adviser who understands the ACNC, accountant.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The board controls, within the constitution. Members can appoint directors if the constitution allows the meeting. Death of one director does not end the company if others remain, or if the constitution can fill a vacancy." },
        { label: "What passes under a Will", text: "The company's assets do not pass under a member's or director's Will. Membership is usually not property that is sold or inherited. A person may leave a gift to the company." },
        { label: "Typical delay points", text: "Too few directors to form a quorum, and a constitution that nobody has read." },
        { label: "Challenge exposure", text: "If the company is a real charity, its assets are not a family estate. If a family uses the form without a charitable purpose or a real member base, that is a warning, not a CLT. Check the constitution and the ACNC register." },
        { label: "Tax character flags", text: "Charity concessions require endorsement and a charitable purpose. The company form alone does not create them. Check the ATO and the ACNC. Winding up should send assets to a similar charity, not to members, if it is a charity." }
      ],
      compare: {
        control: "Board and members, under the constitution.",
        lock: "Can be locked, if the purpose and winding-up clause are real.",
        tax: "Depends on charity endorsement. The form alone is not enough.",
        cgt: "Concessions may be relevant only if endorsement and use match the rules. Check.",
        purpose: "Depends on documents",
        survives: "The company can continue after a person dies.",
        will: "No.",
        probate: "Low",
        challenge: "Depends on documents",
        incapacity: "The board continues if enough directors remain."
      }
    },
    {
      id: "assoc",
      group: "Purpose and community",
      name: "Incorporated association",
      line: "A state or territory form for a group. Not automatically a charity.",
      who: "Solicitor, the state or territory regulator, accountant. The ACNC as well, if it is also a charity.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The committee or board, under the rules. Those rules and the regulator differ by state and territory. One person's death should not end the association if the rules can replace them." },
        { label: "What passes under a Will", text: "The association's assets do not pass under a member's Will. What happens on winding up is in the rules. Check that the rules do not send assets to members if a charity lock was intended." },
        { label: "Typical delay points", text: "Operating outside the home state, a missing rules document, and confusion about whether ACNC registration was ever finished." },
        { label: "Challenge exposure", text: "Internal disputes follow the rules and the state Act. This is not a family discretionary trust. Calling it a CLT does not make it one." },
        { label: "Tax character flags", text: "Tax concessions are a separate question from incorporation. Check the ATO and, if it claims to be a charity, the ACNC." }
      ],
      compare: {
        control: "Committee under state or territory rules.",
        lock: "Only if the rules and, where relevant, charity law lock the assets.",
        tax: "Depends on endorsement and activity. Not automatic.",
        cgt: "Check the ATO before assuming a concession. State duty can still matter.",
        purpose: "Depends on documents",
        survives: "The association can continue.",
        will: "No.",
        probate: "Low",
        challenge: "Low",
        incapacity: "Depends on the rules"
      }
    },
    {
      id: "coop",
      group: "Purpose and community",
      name: "Co-operative",
      line: "Membership and the co-op rules. Not a family appointor and not, by itself, a CLT.",
      who: "Solicitor, accountant, the state or territory co-operatives registrar.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The board, under the rules. Members vote as the rules allow. One member, one vote is common and is not universal. Check the rules. Active membership tests can matter." },
        { label: "What passes under a Will", text: "A membership or share may not pass like an ordinary company share. The rules may end the membership on death or limit who can take a transfer. The co-op's land does not fall into a member's Will." },
        { label: "Typical delay points", text: "Active membership rules, a transfer the board will not approve, and a family that expected freehold." },
        { label: "Challenge exposure", text: "Disputes are about the rules and membership. A co-op is not a way to take family trust assets outside a challenge, and it is not a charity unless it is also set up and registered as one." },
        { label: "Tax character flags", text: "Tax treatment depends on the type of co-operative and on the member's interest. Check the ATO. Duty on land the co-op buys or transfers is a state question." }
      ],
      compare: {
        control: "Board and members, under co-op rules.",
        lock: "Locked to the rules, not to a family appointor.",
        tax: "Co-operative. Type matters. Check the ATO.",
        cgt: "Transfers of membership and land can be relevant. Check.",
        purpose: "Community or business",
        survives: "The co-op can continue. A membership may not.",
        will: "Generally the land does not. Membership may not.",
        probate: "Low",
        challenge: "Low",
        incapacity: "Depends on documents"
      }
    },
    {
      id: "clt",
      group: "Purpose and community",
      name: "Community land trust (charity)",
      line: "Land held for a community purpose by a real charity. Not a family discretionary trust.",
      hard: true,
      who: "Solicitor, an adviser who understands the ACNC, accountant, and the planning authority.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The charity's board and members, under the constitution. There is no family appointor. If the board thins out, the constitution's vacancy rules matter. A founder's death does not hand the land to the founder's estate." },
        { label: "What passes under a Will", text: "The land generally does not pass under a resident's or a founder's Will. A resident may hold a lease or another occupation right. That right is whatever the documents say. It is not freehold ownership of the charity's land." },
        { label: "Typical delay points", text: "Planning approval, a constitution that was never finished, and confusion between the charity's title and a household's lease." },
        { label: "Challenge exposure", text: "The charity's land is not a parent's estate. Family provision against a person's own estate is a separate question and is not removed by the existence of a CLT." },
        { label: "Tax character flags", text: "Charity concessions, land tax and duty depend on endorsement, use and the state or territory. Check the ACNC, the ATO and the revenue office. Do not assume a concession. A family trust that uses the letters CLT has the tax character of a family trust." }
      ],
      compare: {
        control: "Charity board and members. Not an appointor.",
        lock: "Locked to the charitable purpose, when the documents and registration are real.",
        tax: "Charity, if endorsed and actually charitable. Otherwise it is not a CLT.",
        cgt: "Concessions may be relevant and are not automatic. State duty and land tax still need a check.",
        purpose: "Eco or community purpose",
        survives: "The charity can continue. The land is not inherited.",
        will: "No.",
        probate: "Low",
        challenge: "Low",
        incapacity: "The board continues under the constitution."
      }
    },
    {
      id: "catsi",
      group: "Purpose and community",
      name: "Indigenous corporation and prescribed body corporate",
      line: "A CATSI Act corporation, and sometimes a PBC for native title. Not a private family trust.",
      hard: true,
      who: "Solicitor working in this area, the corporation's own advisers, ORIC, and an accountant. Native title decisions follow their own process.",
      fields: [
        { label: "Who controls after death or incapacity", text: "The corporation is controlled under its rule book and the CATSI Act, regulated by ORIC. Directors and members can be replaced under those rules. A prescribed body corporate holds or manages native title for the common law holders, not for a private family." },
        { label: "What passes under a Will", text: "Native title is not an ordinary parcel that a Will disposes of. The corporation's assets do not pass under a director's or member's Will. Membership rules decide membership. Check the rule book." },
        { label: "Typical delay points", text: "A rule book that does not match how decisions are actually made, uncertainty about membership, and processes required for native title decisions." },
        { label: "Challenge exposure", text: "This is not a vehicle for taking family estate assets outside a family provision claim. Disputes about the corporation follow its rule book and the CATSI Act. Native title disputes follow native title law." },
        { label: "Tax character flags", text: "Charity registration is separate from CATSI incorporation. Some corporations are charities and some are not. Check the ACNC and the ATO if a concession is being relied on. Do not assume one." }
      ],
      compare: {
        control: "Directors and members under the rule book and the CATSI Act.",
        lock: "Locked to the rule book and, for a PBC, to native title duties.",
        tax: "Depends on activities and any charity endorsement. Check.",
        cgt: "Check the ATO before assuming a concession. Land dealings can raise other taxes.",
        purpose: "Community. Native title purposes where a PBC is appointed.",
        survives: "The corporation can continue. Native title is not inherited under a Will.",
        will: "No.",
        probate: "Low",
        challenge: "Low",
        incapacity: "Depends on the rule book"
      }
    }
  ],

  studio: [
    {
      id: "real-clt",
      tone: "green",
      tag: "Fits the claim",
      line: "A real CLT charity — land held for a community purpose.",
      body: [
        "When a community land trust in Australia is real, it is usually a charity. Often that charity is a company limited by guarantee. Its purpose is to hold land for community benefit. Membership and the board sit in the constitution.",
        "The land is generally not a family asset and does not pass under a relative's Will. Residents may have a lease or another right to occupy. That right is not the same thing as owning the freehold.",
        "This can do the job it claims when the constitution, the winding-up clause and the ACNC record match the purpose. It is not a family discretionary trust."
      ]
    },
    {
      id: "fake-clt",
      tone: "red",
      tag: "Warning",
      line: "A family trust branded CLT — community words, private control.",
      body: [
        "A family discretionary trust does not become a CLT or a charity because the name, the logo or the pitch uses those words.",
        "Control by an appointor, discretionary distributions to family, and the absence of a charitable purpose and ACNC registration are signs to take to a solicitor. Treating the trust as a locked community asset, while the deed still allows family control, is a warning.",
        "This site does not treat that arrangement as a CLT."
      ]
    },
    {
      id: "offshore",
      tone: "red",
      tag: "Warning",
      line: "An offshore company in community clothes — not an option on this site.",
      body: [
        "A company formed outside Australia, even if it uses the words community, village, trust or foundation, is not an Australian charity, CLT or co-operative.",
        "It can raise control, tax and regulatory questions that a solicitor and a tax agent need to see. This site does not explain how to use a foreign company, and it does not treat one as an Australian structure.",
        "Foreign forms are outside the work of these rooms."
      ]
    },
    {
      id: "oric",
      tone: "amber",
      tag: "Check the documents",
      line: "An Indigenous corporation or PBC — green only when the documents match.",
      body: [
        "A corporation under the CATSI Act is regulated by ORIC. A prescribed body corporate holds or manages native title for the common law holders. Neither is a private family trust, and neither is a CLT merely because land is involved.",
        "Fits the claim when the rule book, the membership and any native title role match the law and the documents. Take it to a solicitor when control of land, membership, or winding up is unclear.",
        "Charity status, if it is claimed, is a separate ACNC question."
      ]
    },
    {
      id: "real-coop",
      tone: "green",
      tag: "Fits the claim",
      line: "A co-operative that is actually registered as a co-operative.",
      body: [
        "A co-operative is a member-based body under state or territory co-operatives law. The rules, the registrar and any active membership test do the work.",
        "It can do that job when the registration and the rules are real. It is not a family discretionary trust. It is not a CLT unless a separate charity also holds the land on CLT terms.",
        "Terminology and the registrar differ by state or territory."
      ]
    },
    {
      id: "charity-clothes",
      tone: "red",
      tag: "Warning",
      line: "A private company wearing charity or community language.",
      body: [
        "A proprietary company with shareholders is a private company. Community language on a website does not make it a charity, a co-op or a CLT.",
        "If family shareholders can sell, gift or inherit the shares, the asset is not locked to a purpose. That is a warning sign, not a stewardship structure.",
        "Check ASIC for the company form, and the ACNC only if someone claims it is a registered charity."
      ]
    }
  ],

  villageLayers: [
    { line: "Who holds the title.", body: "Name the legal holder: a person, a company, a private trust, a co-op, or a charity. The holder is whatever the title and the documents say. A village name does not change the title." },
    { line: "What the planning rules allow.", body: "Zoning, covenants, bushfire, water and wastewater rules differ by state and territory, and often by council. Check the planning portal. A structure choice does not grant a planning approval." },
    { line: "How people occupy.", body: "Ownership, a lease, a licence, a co-op membership or a life right are different. Write down which one a household actually has. Do not describe a lease as freehold." },
    { line: "Shared infrastructure.", body: "Roads, water, energy and common buildings need an owner and a way to be maintained. A handshake does not create a sinking fund or a legal duty. Ask who can sign a repair contract in ten years." },
    { line: "Governance and membership.", body: "Who can become a member, who can be removed, and who chairs a meeting, should be in a constitution, rules or deed. A family appointor is a private-trust tool. A membership vote is a different tool." },
    { line: "Purpose lock, or private control.", body: "If the land is meant to stay for a community or ecological purpose, the holder is usually a charity or another locked form, with a winding-up clause that does not send assets to members. If a family trust holds the land, the purpose is not locked. The hard line applies." },
    { line: "What happens when someone dies or leaves.", body: "Say whether a household's right ends, passes under a Will, or is decided by a board. Super, joint titles and trust roles still follow their own documents. The village rules do not replace them." },
    { line: "Care of the place over time.", body: "Ecological care is a practice and, where it is legal, a covenant or a management plan. A covenant can be relevant to later use and value. It does not by itself create a charity or remove tax or duty questions." }
  ],

  scenarioHoldings: [
    { id: "sole-land", label: "Land in one person's name" },
    { id: "joint-land", label: "Land held as joint tenants" },
    { id: "trust-land", label: "Land in a family discretionary trust" },
    { id: "charity-land", label: "Land held by a charity or CLT" },
    { id: "shares", label: "Shares in a proprietary company" },
    { id: "coop", label: "Membership or shares in a co-operative" },
    { id: "home", label: "A home used as a residence" }
  ],

  scenarioActions: [
    { id: "sell", label: "Sell" },
    { id: "gift", label: "Gift" },
    { id: "covenant", label: "Covenant" },
    { id: "hold", label: "Hold" }
  ],

  scenarios: {
    "sell|sole-land": [
      ["amber", "Capital gains tax", "A sale of land can be a CGT event. Main residence treatment may be relevant and depends on the facts. Check the ATO."],
      ["amber", "Transfer duty", "Duty is set by the state or territory. Check that revenue office. This page does not estimate it."],
      ["ink", "The estate", "Money still held at death can fall into the estate. A sale does not remove family provision exposure over what remains."]
    ],
    "gift|sole-land": [
      ["amber", "A gift can still be a CGT event", "The fact that no money is paid does not remove the question. Check the ATO."],
      ["amber", "Duty", "A gift of land can still attract transfer duty. Rules differ by state or territory."],
      ["amber", "Later claims", "A gift does not remove a later family provision claim by itself. Some states can look at assets outside the estate. That is not a national rule."]
    ],
    "covenant|sole-land": [
      ["amber", "Use can be restricted", "A covenant can limit building or use. Planning rules differ by state or territory. Check the planning portal."],
      ["amber", "Tax and duty", "A covenant can be relevant to value and to later duty even when little or no money changes hands. Check the ATO and the revenue office."],
      ["ink", "Not a CLT", "A covenant does not turn private land into a charity or a community land trust."]
    ],
    "hold|sole-land": [
      ["green", "No sale yet", "Simply holding does not by itself create the CGT event that a sale or a gift can create. Other events can still matter. Check the ATO if something else changes."],
      ["amber", "Incapacity", "If the owner loses capacity, someone needs authority to deal with the land. The document name differs by state or territory."],
      ["amber", "Death", "Land in one person's name generally passes under the Will and often needs a grant before the title can change."]
    ],
    "sell|joint-land": [
      ["amber", "Both owners", "A sale while both are alive is generally a joint decision. If one has died, survivorship may already have moved the title outside the Will. Check the title."],
      ["amber", "Tax and duty", "CGT and transfer duty can both be relevant. Check the ATO and the revenue office."],
      ["ink", "The Will", "A sale does not rewrite a Will. It changes what is left to pass under it."]
    ],
    "gift|joint-land": [
      ["amber", "Severance", "Gifting a joint interest may sever the joint tenancy. Whether it does depends on the transfer and the state or territory. Check a solicitor."],
      ["amber", "Tax and duty", "A gift can still be a CGT event and a duty event. Check."],
      ["red", "Do not assume", "Do not assume the Will controls a joint interest."]
    ],
    "covenant|joint-land": [
      ["amber", "All owners", "A covenant usually needs every owner who must sign. Check the title and the state rules."],
      ["ink", "Not a CLT", "A covenant on jointly held land does not create a charity or a CLT."],
      ["amber", "Value", "The covenant can be relevant to later sale, finance and duty. Check."]
    ],
    "hold|joint-land": [
      ["amber", "Survivorship", "When one joint tenant dies, the survivor generally takes the interest outside the Will. Check that the title is joint, not in common."],
      ["ink", "Incapacity", "If one owner loses capacity, that person's enduring document may be relevant. Names differ by state or territory."],
      ["ink", "Not a trust", "Joint ownership is not a family discretionary trust and not a CLT."]
    ],
    "sell|trust-land": [
      ["amber", "The trustee sells", "The trustee sells, if the deed allows it. Beneficiaries do not sell trust land in their own names unless the deed says otherwise."],
      ["amber", "Tax character", "A sale can be a CGT event for the trust. Distributions of the proceeds have their own tax character. Check the ATO. Duty is a state question."],
      ["red", "Not a charity", "Selling an asset does not make a family trust into a charity or a CLT."]
    ],
    "gift|trust-land": [
      ["red", "Power to give", "A trustee must have power to give the asset away. Without that power, a family arrangement can be a breach of trust. Check the deed."],
      ["amber", "Tax and duty", "A gift can still be a CGT event and a duty event. Check the ATO and the revenue office."],
      ["red", "Hard line", "A gift out of a family trust does not turn the trust into a CLT, and it does not remove later disputes by itself."]
    ],
    "covenant|trust-land": [
      ["amber", "Power", "The trustee must have power to enter the covenant. Check the deed."],
      ["red", "Still a family trust", "A covenant on trust land does not lock the trust as a charity."],
      ["amber", "Planning and duty", "Planning rules differ by state or territory. Duty can be relevant. Check."]
    ],
    "hold|trust-land": [
      ["ink", "Outside the Will", "Holding in the trust does not by itself put the land under a beneficiary's Will."],
      ["amber", "Successor control", "On death or incapacity of an appointor or trustee, the deed decides who steps in. If it is silent, delay is common."],
      ["red", "Warning", "Assuming the Will controls the trust is a warning, not a plan."]
    ],
    "sell|charity-land": [
      ["red", "Purpose first", "A charity or CLT sells only if its constitution and charity law allow it. Proceeds usually have to stay with the purpose. This is not a household asset to sell."],
      ["amber", "Check the record", "Read the constitution and the ACNC record. Ask a solicitor before treating a sale as available."],
      ["amber", "Tax and duty", "Concessions, if any, depend on endorsement and the state. They are not automatic. Check the ATO and the revenue office."]
    ],
    "gift|charity-land": [
      ["red", "Warning", "Gifting charity or CLT land to a family member is a warning, not a routine step. The asset is generally locked to the purpose."],
      ["red", "Hard line", "It does not behave like a family discretionary trust. Read the winding-up clause."],
      ["amber", "Regulators", "The ACNC can be relevant. Some charity disputes also involve the state attorney-general pathway. Check a solicitor."]
    ],
    "covenant|charity-land": [
      ["green", "May fit the purpose", "A covenant may fit a stewardship purpose if the constitution allows it. It does not replace charity registration."],
      ["amber", "Planning", "Planning rules differ by state or territory. Check the portal."],
      ["amber", "Duty", "Duty can be relevant. Check the revenue office. Do not assume a concession."]
    ],
    "hold|charity-land": [
      ["green", "Fits a real CLT", "Holding land for the registered purpose is what a real charity CLT is built to do, when the documents say that."],
      ["red", "Not an inheritance", "The land does not pass under a founder's Will. Expecting that it will is a warning."],
      ["amber", "Board succession", "The charity can stall if nobody can appoint directors. Read the vacancy clauses."]
    ],
    "sell|shares": [
      ["amber", "CGT", "A sale of shares can be a CGT event. Check the ATO."],
      ["amber", "Restrictions", "The constitution and any shareholder agreement may restrict who can buy. Check them before assuming a sale is free."],
      ["amber", "Duty differs", "Share transfer duty differs by state and territory and has changed in some places. Check the revenue office. Do not treat one state as the national rule."]
    ],
    "gift|shares": [
      ["amber", "CGT", "A gift of shares can be a CGT event. Check the ATO."],
      ["amber", "Pre-emption", "Other shareholders may have a right to be offered the shares first. Check the agreement."],
      ["ink", "Claims", "A gift does not remove family provision exposure by itself."]
    ],
    "covenant|shares": [
      ["amber", "A side agreement", "A covenant about shares is a contract question. It does not lock a proprietary company as a charity."],
      ["ink", "Read it beside the constitution", "If the agreement and the constitution clash, a solicitor needs to read both. This page does not decide which one wins."],
      ["ink", "Not a CLT", "Community language in the agreement does not create a CLT."]
    ],
    "hold|shares": [
      ["ink", "The company continues", "The shareholder's death is the succession question. The company itself does not die."],
      ["amber", "Sole director", "Death or incapacity of a sole director can stop the company acting. Check the constitution."],
      ["amber", "Buy-sell", "An agreement may require the estate to sell. The Will alone may not decide the outcome."]
    ],
    "sell|coop": [
      ["amber", "Rules first", "Active membership rules and the co-op rules may limit a sale or transfer. Check them and the state or territory law."],
      ["amber", "Tax", "The tax character depends on the co-op and on the member's interest. Check the ATO."],
      ["ink", "Not a title", "A member's interest is not the co-op's land title and not a family trust interest."]
    ],
    "gift|coop": [
      ["amber", "Approval", "The rules may refuse a transfer to someone who will not be an active member. Check."],
      ["amber", "Tax and duty", "Tax and duty can still be relevant. Check."],
      ["ink", "Not freehold", "A gift of a membership does not convert co-op land into personal freehold."]
    ],
    "covenant|coop": [
      ["amber", "Whose decision", "A covenant over land the co-op holds is a decision of the co-op, not of one member, unless the rules say otherwise."],
      ["ink", "Not automatically a charity", "A covenant does not by itself register a charity or create a CLT."],
      ["amber", "Planning", "Planning rules differ by state or territory."]
    ],
    "hold|coop": [
      ["amber", "Death of a member", "Membership may end on death rather than pass like a private share. Check the rules."],
      ["ink", "Land stays", "The co-op's land does not fall into a member's Will."],
      ["ink", "Continuity", "Ask who can still form a board if several members leave or die."]
    ],
    "sell|home": [
      ["amber", "Main residence", "Main residence treatment may be relevant to CGT and depends on how the home has been used. Check the ATO. This page does not say a gain is disregarded."],
      ["amber", "Duty", "Concessions differ by state or territory. Check the revenue office."],
      ["red", "Whose name", "If the home is in a trust or a company, do not assume the same treatment as a home in a person's own name."]
    ],
    "gift|home": [
      ["amber", "Still a dealing", "A gift of a home can be a CGT event and a duty event. Main residence rules may be relevant and may not cover the whole period. Check the ATO."],
      ["amber", "If you stay", "If you keep living there after a gift, capacity and the documents matter. Check a solicitor."],
      ["ink", "Claims remain", "A gift does not remove a mortgage by itself, and it does not remove family provision exposure."]
    ],
    "covenant|home": [
      ["amber", "Use of the home", "A covenant can affect whether you can alter, leave or refinance the home. Planning rules differ."],
      ["amber", "Tax and duty", "They can be relevant even for a home. Check."],
      ["ink", "Read the words", "A covenant does not create a right of residence unless the document actually grants one."]
    ],
    "hold|home": [
      ["ink", "Where it sits", "A home in your own name generally falls into the estate, subject to the Will and to any joint tenancy."],
      ["amber", "Bills and care", "If capacity is lost, rates and care still need to be dealt with. Enduring documents may be relevant. Names differ by state or territory."],
      ["ink", "Say what the home is for", "Tell the solicitor if the home is meant to house someone for life. This page cannot design that bequest."]
    ]
  },

  checklist: [
    {
      id: "documents",
      label: "Documents",
      items: [
        { id: "doc-will-find", text: "Original Will located, and the executor knows where it is." },
        { id: "doc-store", text: "Enduring documents are stored so the executor and the attorney can find them." }
      ]
    },
    {
      id: "team",
      label: "Team",
      items: [
        { id: "team-will", text: "Current Will reviewed by a solicitor after any major life event." },
        { id: "team-poa", text: "Enduring power of attorney and guardianship-type documents in place (check your state's terms)." },
        { id: "team-super", text: "Super and SMSF death benefit nominations checked against the fund deed, including any lapse rules." },
        { id: "team-deed", text: "Trust deed reviewed for appointor, guardian and succession-of-control provisions." },
        { id: "team-company", text: "Company constitution and shareholder or partnership agreement checked for death and incapacity clauses." },
        { id: "team-buysell", text: "Buy-sell arrangement and its funding discussed with an adviser (business owners)." },
        { id: "team-prior", text: "Prior-relationship children or separation risk discussed with a family lawyer." },
        { id: "team-executor", text: "Executor named, informed, and documents easy to find." },
        { id: "team-cgt", text: "Accountant asked about CGT and duty flags before any transfer." },
        { id: "team-registers", text: "Registers checked for advisers: TPB register for tax practitioners, ASIC Financial Advisers Register for financial advice, the relevant state Law Society or equivalent for solicitors." }
      ]
    },
    {
      id: "land",
      label: "Land and purpose",
      items: [
        { id: "land-title", text: "Title checked: sole name, joint tenants, or tenants in common." },
        { id: "land-deed", text: "If a trust holds land, the deed is kept with the Will papers." },
        { id: "land-charity", text: "If a charity or CLT is intended, the ACNC record and the winding-up clause have been read." },
        { id: "land-planning", text: "Planning rules for any shared or covenanted land checked on the state or territory portal." },
        { id: "land-hard", text: "The hard line has been read: a locked charity or CLT is not a family discretionary trust." }
      ]
    },
    {
      id: "review",
      label: "Review",
      items: [
        { id: "review-event", text: "A review is planned after any marriage, separation, birth, death, sale, or law change." },
        { id: "review-objective", text: "The objective saved on this browser still matches what you are planning." }
      ]
    }
  ],

  glossary: [
    { id: "tdt", term: "Testamentary discretionary trust", text: "A trust set up by a Will, so that it can come into existence after death if the Will is valid and the estate is administered. It is discretionary for the people named in the Will. It is not a charity and it is not a community land trust. It may help protect an inheritance from a beneficiary's later creditors, bankruptcy or relationship claims. It does not remove family provision claims against the estate, and it does not guarantee an outcome." },
    { id: "probate", term: "Probate", text: "The process of proving a Will, usually in a state or territory Supreme Court, so that the executor can deal with estate assets. The steps differ by state or territory." },
    { id: "grant", term: "Grant of probate", text: "The court's grant recognising the Will and the executor's authority. Land registries and banks often ask for it before they will deal with assets in the deceased person's sole name." },
    { id: "loa", term: "Letters of administration", text: "A grant used when there is no valid Will, or sometimes when a named executor cannot act. The title of the grant, and who may apply, differ by state or territory." },
    { id: "executor", term: "Executor", text: "The person named in a Will to carry out its terms. An executor may need a grant before dealing with estate assets. The role is not the same as a trustee of a family trust, and not the same as an attorney." },
    { id: "epoa", term: "Enduring power of attorney", text: "A document that lets someone deal with financial or legal matters if the person loses capacity. The name, the powers and the witnessing rules differ by state or territory. It does not replace a Will." },
    { id: "guardian", term: "Enduring guardianship (and equivalent names)", text: "In some states, a document that lets someone make lifestyle or medical decisions if capacity is lost. Other places use different names, such as enduring guardian, advance health directive, advance care directive, or medical treatment decision-maker. Do not treat one state's name as universal." },
    { id: "bdbn", term: "Binding death benefit nomination (BDBN)", text: "A notice to a super fund, including many SMSFs, about who should receive a death benefit. It sits outside the Will. Whether it binds the trustee depends on the deed and the fund rules. Some nominations lapse. Check the deed." },
    { id: "nonlapse", term: "Non-lapsing nomination", text: "A death benefit nomination written so that it does not expire on a timetable, if the fund deed allows that form. Non-lapsing does not mean it overrides the deed, or that it cannot be disputed. Check the deed." },
    { id: "smsf", term: "SMSF", text: "A self-managed superannuation fund. It is super, not a family discretionary trust and not a charity. Death benefits follow the deed and any valid nomination. They do not automatically follow the Will." },
    { id: "nonestate", term: "Non-estate asset", text: "An asset or benefit that may pass outside the Will, such as jointly held property, super death benefits, or assets already in a trust. Whether it really sits outside the estate depends on the documents. Assuming the Will controls everything is a warning." },
    { id: "fpc", term: "Family provision claim", text: "A court application by an eligible person who says that inadequate provision was made for them. Who is eligible, and the time limit, differ by state or territory. A Will, a trust or a binding financial agreement does not remove the possibility of a claim by itself." },
    { id: "notional", term: "Notional estate", text: "A concept, used in some states and not as a national rule, that can allow a court to treat certain assets outside the estate as available for a family provision order. Terminology and rules differ by state or territory. Do not assume every trust is reached, and do not assume every state has this rule." },
    { id: "bfa", term: "Binding financial agreement", text: "An agreement under family law about how property will be dealt with if a relationship breaks down. It may reduce the risk of a later dispute between the parties. It does not remove family provision claims by itself. It is valid only if the formalities are met." },
    { id: "buysell", term: "Buy-sell agreement", text: "An agreement between business owners about buying out a person who dies, becomes unable to work, or leaves. It often sits beside the Will and the company constitution. It does not replace either document." },
    { id: "keyperson", term: "Key-person insurance", text: "Insurance a business may hold so that cash can be available if a key person dies or cannot work. It is sometimes used to fund a buy-sell. This site does not describe amounts or products. A licensed adviser is the person to ask whether a policy fits." },
    { id: "appointor", term: "Appointor", text: "A role in many private trust deeds, with power to appoint or remove the trustee. The appointor often has practical control. Who becomes appointor on death or incapacity is a deed question, unless the deed points to the Will." },
    { id: "cgt", term: "Capital gains tax event", text: "A happening, such as a sale or a gift, that can bring capital gains tax into question. Death has its own rules, which depend on the asset. Check the ATO. An event being relevant does not say what, if anything, is payable." },
    { id: "duty", term: "Stamp duty (transfer duty)", text: "A state or territory tax that can apply when property is transferred, and sometimes when it is gifted or when certain interests change. Names and concessions differ, and they change. Check the revenue office. This site does not set out rates." },
    { id: "fdt", term: "Family discretionary trust", text: "A private trust in which the trustee has a discretion about distributions. Control often sits with an appointor. It is not a charity, not a CLT, and not an SMSF. The deed decides succession of control." },
    { id: "clt", term: "Community land trust", text: "On this site, a CLT means a real charity holding land for a community purpose, with control in its constitution rather than in a family appointor. A family trust that borrows the name is not a CLT." },
    { id: "charity", term: "Charity", text: "A body with a charitable purpose. Registration with the ACNC, endorsement for tax concessions, and a winding-up clause are separate questions. A charity is not a family discretionary trust." },
    { id: "coop", term: "Co-operative", text: "A member-based body under state or territory co-operatives law. Rules and the registrar differ. It is not, by itself, a charity or a CLT." },
    { id: "jt", term: "Joint tenancy", text: "A way of holding land together so that, generally, the survivor takes the whole interest outside the Will. Check the title. It is not the same as a tenancy in common." },
    { id: "tic", term: "Tenancy in common", text: "A way of holding land in distinct shares. A share can pass under a Will. It does not automatically go to the other owner." },
    { id: "trust-guardian", term: "Guardian (in a trust deed)", text: "A role some deeds use to consent to trustee decisions. It is not the same as an enduring guardian for medical decisions. The deed defines it." },
    { id: "pbc", term: "Prescribed body corporate", text: "A body that holds or manages native title for the common law holders. It is not a private family trust and not a CLT." },
    { id: "catsi", term: "Indigenous corporation", text: "A corporation under the Corporations (Aboriginal and Torres Strait Islander) Act, regulated by ORIC. Charity status is a separate question." },
    { id: "life-interest", term: "Life interest", text: "A right to use an asset or receive its income for life, with someone else taking afterwards. It can delay a sale. It does not remove family provision claims." },
    { id: "intestacy", term: "Intestacy", text: "The rules that apply when there is no valid Will. They differ by state or territory. A grant of letters of administration may be needed." }
  ],

  timeline: [
    { id: "advice", label: "Advice", text: "Map the assets, including assets that may sit outside the Will. An accountant and, where a financial product is involved, a licensed adviser do this mapping. The estate lawyer needs that map before drafting." },
    { id: "documents", label: "Documents", text: "The Will, any testamentary trust, enduring powers, guardianship-type documents, super nominations, trust deeds and business agreements. They have to be read together. One document does not correct the others." },
    { id: "lodgement", label: "Lodgement", text: "After a death, a grant is lodged with the Supreme Court of the relevant state or territory if a grant is needed. During life, lodgement can mean ASIC, a land registry, the ACNC, ORIC, or a state regulator, depending on the structure." },
    { id: "land", label: "Land movement", text: "A transfer or a lease happens only after the right people can sign, and after duty and planning questions have been checked. A structure diagram is not a transfer." }
  ],

  engagement: [
    "Accountant and financial adviser map assets and non-estate assets.",
    "Estate planning lawyer drafts the Will, any testamentary trusts, powers of attorney and guardianship-type documents.",
    "Adviser and lawyer align super nominations, trust deeds and business agreements with the Will.",
    "Family lawyer, if relevant, addresses children of an earlier relationship or separation risk.",
    "After death: probate lawyer and executor. The accountant handles final returns and capital gains tax questions.",
    "Review after any marriage, separation, birth, death, sale, or law change."
  ],

  team: {
    intro: "Succession needs lawyers and financial specialists working on the same map. Law and finance meet here so that assets can move in an orderly way, tax is considered, and disputes are less likely. These are roles, not firms. This site does not endorse any practice.",
    legal: [
      {
        id: "wills-lawyers",
        tone: "green",
        tag: "Fits this role",
        line: "Wills and estate planning lawyers — proactive planning, while the person is alive.",
        body: [
          "They draft Wills. They can draft a testamentary discretionary trust, which may help protect assets from a beneficiary's later divorce, bankruptcy or creditors. That protection is not guaranteed, and it does not remove family provision claims against the estate.",
          "They draft enduring powers of attorney and enduring guardianship-type documents for financial decisions and for lifestyle or medical decisions if capacity is lost.",
          "The names differ by state and territory. Examples include enduring power of attorney, enduring guardian, advance care directive, advance health directive, and medical treatment decision-maker. Do not treat one state's names as universal."
        ]
      },
      {
        id: "probate-lawyers",
        tone: "green",
        tag: "Fits this role",
        line: "Probate and estate administration lawyers — after a death.",
        body: [
          "They assist the executor to apply for a grant of probate, or for letters of administration if there is no Will, in the Supreme Court of the relevant state or territory.",
          "They deal with estate debts and with distributing assets that fall into the estate. Assets outside the estate still follow their own documents.",
          "Use the court's own site and look for the probate, grants or wills section. This site links to court homes, not to forms."
        ]
      },
      {
        id: "family-lawyers",
        tone: "amber",
        tag: "Check your state",
        line: "Family lawyers — where family law meets succession.",
        body: [
          "They handle divorce, separation and financial settlements. Marriage, divorce or separation can change the effect of a Will. The rules vary by state or territory, so check your state.",
          "They may prepare a binding financial agreement to ring-fence assets for children of an earlier relationship. An agreement may reduce the risk of later disputes between the parties.",
          "It does not remove family provision claims by itself. Validity depends on the formalities being met."
        ]
      },
      {
        id: "family-provision",
        tone: "amber",
        tag: "Check your state",
        line: "Family provision — contested Wills.",
        body: [
          "Eligible people can apply to a court if they believe inadequate provision was made for them. Eligibility, time limits, and the concept of a notional estate differ by state or territory.",
          "This is the challenge lens on the succession page. No structure on this site removes that jurisdiction by itself."
        ],
        link: { href: "succession.html#challenge", label: "Open the challenge lens" }
      }
    ],
    financial: [
      {
        id: "advisers",
        tone: "amber",
        tag: "Licence matters",
        line: "Estate planning financial advisers — the wealth-transfer map, including non-estate assets.",
        body: [
          "They map how wealth is meant to move over a lifetime, and they check that non-estate assets are actually dealt with. Superannuation and SMSF death benefits sit outside the Will and do not automatically follow it.",
          "Check for a valid binding death benefit nomination, its lapse rules, and what the fund deed allows.",
          "Giving financial product advice requires the right licence. Use the ASIC Financial Advisers Register, which ASIC publishes, before you rely on someone for personal advice."
        ]
      },
      {
        id: "accountants",
        tone: "amber",
        tag: "Check the register",
        line: "Specialist accountants and tax advisers — CGT and duty when value moves.",
        body: [
          "They consider capital gains tax and state stamp duty when assets move on death or by gift. They look at how company shares and private trust control pass, so the path is considered before it is signed.",
          "Capital gains tax events on death, and the treatment of the family home, vary by the facts and by the current law. Check the ATO. This site does not say what is payable.",
          "Tax practitioners are on the Tax Practitioners Board register. Check it."
        ]
      },
      {
        id: "business",
        tone: "amber",
        tag: "Check the documents",
        line: "Business succession specialists — buy-sell and continuity for owners.",
        body: [
          "For business owners, a buy-sell agreement can let surviving partners buy a deceased partner's share, provide cash to the family, and keep the business running. It is often funded by key-person or similar insurance.",
          "This page describes the idea only. It does not describe amounts, premiums or products. A licensed adviser and a solicitor read the policy beside the agreement, the constitution and the Will."
        ]
      }
    ]
  },

  reading: [
    {
      who: "Dr John de Groot AM",
      what: "A leading writer on Australian succession law. Works include Wills, Probate and Administration Practice (Queensland) and Family Provision in Australia. No edition is stated here."
    },
    {
      who: "Professor Rosalind Croucher AM",
      what: "Property, equity and succession scholar. Co-author, with Prue Vines, of Succession: Families, Property and Death."
    },
    {
      who: "Professor Richard Nolan",
      what: "A Commonwealth trust law scholar whose work on trustees' duties is relevant to the trust law that underpins Australian trusts."
    },
    {
      who: "Professor G. E. (Gino) Dal Pont",
      what: "Author of texts on the law of succession and on equity and trusts in Australia."
    }
  ],

  courts: [
    { href: "https://www.supremecourt.justice.nsw.gov.au/", label: "Supreme Court of New South Wales" },
    { href: "https://www.supremecourt.vic.gov.au/", label: "Supreme Court of Victoria" },
    { href: "https://www.courts.qld.gov.au/", label: "Queensland Courts" },
    { href: "https://www.supremecourt.wa.gov.au/", label: "Supreme Court of Western Australia" },
    { href: "https://www.courts.sa.gov.au/", label: "Courts Administration Authority of South Australia" },
    { href: "https://www.supremecourt.tas.gov.au/", label: "Supreme Court of Tasmania" },
    { href: "https://www.courts.act.gov.au/", label: "Courts of the Australian Capital Territory" },
    { href: "https://supremecourt.nt.gov.au/", label: "Supreme Court of the Northern Territory" }
  ],

  lawSocieties: [
    { href: "https://www.lawsociety.com.au/", label: "Law Society of New South Wales" },
    { href: "https://www.liv.asn.au/", label: "Law Institute of Victoria" },
    { href: "https://www.qls.com.au/", label: "Queensland Law Society" }
  ]
};
