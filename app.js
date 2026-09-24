(function () {
  "use strict";

  var D = window.DOUGS_LAB;
  var PROFILE_KEY = "dougslab:profile";
  var CHECK_KEY = "dougslab:checklist";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "class") node.className = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else if (key.indexOf("on") === 0 && typeof attrs[key] === "function") node.addEventListener(key.slice(2), attrs[key]);
        else if (attrs[key] === true) node.setAttribute(key, "");
        else if (attrs[key] !== false && attrs[key] != null) node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null || child === false) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function p(text) {
    return el("p", null, [text]);
  }

  function shape(tone) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (tone === "green") path.setAttribute("d", "M6 1.2a4.8 4.8 0 1 1 0 9.6a4.8 4.8 0 0 1 0-9.6z");
    else if (tone === "amber") path.setAttribute("d", "M6 1.2l4.8 8.6H1.2z");
    else if (tone === "red") path.setAttribute("d", "M1.4 1.4h9.2v9.2H1.4z");
    else path.setAttribute("d", "M6 1.2l4.2 4.8L6 10.8L1.8 6z");
    path.setAttribute("fill", "currentColor");
    svg.appendChild(path);
    return svg;
  }

  function tag(tone, label) {
    var safe = tone === "green" || tone === "amber" || tone === "red" ? tone : "ink";
    return el("span", { class: "tag tag-" + safe }, [shape(safe), el("span", null, [label])]);
  }

  function levelMark(word) {
    var tone = "ink";
    var label = word || "Depends on documents";
    if (label === "Low") tone = "green";
    else if (label === "Moderate") tone = "amber";
    else if (label === "Higher") tone = "red";
    return el("span", { class: "level" }, [shape(tone === "ink" ? "diamond" : tone), el("span", null, [label])]);
  }

  function card(opts) {
    var summaryKids = [
      el("span", { class: "mark-dot", "aria-hidden": "true" }),
      el("span", { class: "line" }, [opts.line])
    ];
    summaryKids.push(el("span", null, [
      el("span", { class: "hint hint-closed" }, ["Show"]),
      el("span", { class: "hint hint-open" }, ["Hide"])
    ]));
    var bodyKids = [];
    if (opts.tag) bodyKids.push(tag(opts.tone, opts.tag));
    (opts.paragraphs || []).forEach(function (text) { bodyKids.push(p(text)); });
    if (opts.fields) {
      var fields = el("div", { class: "fields" });
      opts.fields.forEach(function (field) {
        fields.appendChild(el("div", null, [
          el("span", { class: "field-label" }, [field.label]),
          p(field.text)
        ]));
      });
      bodyKids.push(fields);
    }
    if (opts.extra) bodyKids.push(opts.extra);
    var details = el("details", { class: "card", id: opts.id || null }, [
      el("summary", null, summaryKids),
      el("div", { class: "card-body" }, bodyKids)
    ]);
    return details;
  }

  function hardLine() {
    return el("aside", { class: "hard-line" }, [
      el("p", { class: "label" }, ["Hard line"]),
      el("p", null, [el("strong", null, [D.hardLine])]),
      p("Do not describe one as the other. A family appointor is not a charity board.")
    ]);
  }

  function linkList(items) {
    return el("ul", { class: "links" }, items.map(function (item) {
      return el("li", null, [el("a", { href: item.href }, [item.label])]);
    }));
  }

  function roomByHref(href) {
    return D.rooms.filter(function (room) { return room.href === href; })[0];
  }

  function readJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch (err) {
      return null;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function clearPrefix() {
    var keys = [];
    for (var i = 0; i < localStorage.length; i += 1) keys.push(localStorage.key(i));
    keys.forEach(function (key) {
      if (key && key.indexOf("dougslab:") === 0) localStorage.removeItem(key);
    });
  }

  function setupNav() {
    var button = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", open ? "false" : "true");
      if (open) nav.setAttribute("hidden", "");
      else nav.removeAttribute("hidden");
    });
  }

  function openHash() {
    var id = (location.hash || "").slice(1);
    if (!id) return;
    var node = document.getElementById(id);
    if (!node) return;
    if (node.tagName === "DETAILS") node.open = true;
    node.scrollIntoView({ block: "start" });
  }

  function renderHome(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Australia only. Flags and questions for family, land and purpose. Not advice, and not a structure you can buy from this page."
    ]));
    root.appendChild(hardLine());
    D.objectives.forEach(function (item) {
      var links = el("ul", { class: "links" });
      item.rooms.forEach(function (href) {
        var room = roomByHref(href);
        links.appendChild(el("li", null, [
          el("a", { href: href }, [room ? room.label : href])
        ]));
      });
      root.appendChild(card({
        id: item.id,
        line: item.label + " — " + item.line,
        paragraphs: [item.body],
        extra: links
      }));
    });
    root.appendChild(el("h2", null, ["All eleven rooms"]));
    root.appendChild(el("ol", { class: "links" }, D.rooms.map(function (room) {
      return el("li", null, [
        el("a", { href: room.href }, [room.label]),
        el("span", null, [" — " + room.line])
      ]);
    })));
  }

  function routeFor(profile) {
    var box = el("div", { class: "route-box panel" });
    if (!profile || !profile.objective) {
      box.appendChild(p("Choose an objective to see which rooms match. Nothing is sent off this browser."));
      return box;
    }
    var objective = D.objectives.filter(function (item) { return item.id === profile.objective; })[0];
    box.appendChild(el("p", { class: "label" }, ["Rooms that match"]));
    box.appendChild(el("h3", null, [objective.label]));
    box.appendChild(p(objective.body));
    var hrefs = objective.rooms.slice();
    if (profile.prior === "yes" && hrefs.indexOf("team.html") === -1) hrefs.push("team.html");
    if (profile.business === "yes" && hrefs.indexOf("explorer.html") === -1) hrefs.unshift("explorer.html");
    if (profile.will === "no" && hrefs.indexOf("succession.html") === -1) hrefs.unshift("succession.html");
    if (profile.bdbn === "no" && hrefs.indexOf("succession.html") === -1) hrefs.push("succession.html");
    box.appendChild(linkList(hrefs.map(function (href) {
      var room = roomByHref(href);
      return { href: href, label: room ? room.label : href };
    })));
    if (profile.prior === "yes") {
      box.appendChild(p("You noted a previous relationship or children from an earlier one. A family lawyer is the role that speaks to that. A binding financial agreement may reduce the risk of a later dispute between the parties. It does not remove family provision claims by itself."));
    }
    if (profile.business === "yes") {
      box.appendChild(p("You noted a business or assets in a trust or company. Read those structures beside the Will. The Will may not control them."));
    }
    if (profile.bdbn === "no") {
      box.appendChild(p("You noted that there is no superannuation death benefit nomination. Super may pass outside the Will. Check the fund deed, including any lapse rule."));
    }
    box.appendChild(el("p", null, [
      el("a", { class: "button", href: hrefs[0] }, ["Open " + (roomByHref(hrefs[0]) ? roomByHref(hrefs[0]).label : "the first room")])
    ]));
    return box;
  }

  function renderProfile(root) {
    var saved = readJson(PROFILE_KEY) || {};
    root.appendChild(el("p", { class: "lede" }, [
      "Answers stay in this browser only. There is no account and nothing is sent. Clearing removes keys that start with dougslab: and leaves the rest of the browser alone."
    ]));
    var form = el("form", { id: "profile-form" });
    var objectiveSet = el("fieldset", null, [el("legend", null, ["Primary objective"])]);
    D.objectives.forEach(function (item) {
      var id = "obj-" + item.id;
      objectiveSet.appendChild(el("label", { class: "choice", for: id }, [
        el("input", { type: "radio", name: "objective", id: id, value: item.id, checked: saved.objective === item.id }),
        el("span", null, [item.label + ". " + item.line])
      ]));
    });
    form.appendChild(objectiveSet);
    D.profileQuestions.forEach(function (question) {
      var set = el("fieldset", null, [el("legend", null, [question.label + " Optional."])]);
      ["yes", "no", ""].forEach(function (value) {
        var id = question.id + "-" + (value || "blank");
        var label = value === "yes" ? "Yes" : value === "no" ? "No" : "Not answered";
        set.appendChild(el("label", { class: "choice", for: id }, [
          el("input", {
            type: "radio",
            name: question.id,
            id: id,
            value: value,
            checked: (saved[question.id] || "") === value
          }),
          el("span", null, [label])
        ]));
      });
      form.appendChild(set);
    });
    var status = el("p", { class: "status", id: "profile-status", role: "status" });
    form.appendChild(el("div", { class: "actions" }, [
      el("button", { type: "submit" }, ["Save on this browser"]),
      el("button", { type: "button", class: "ghost", id: "clear-profile" }, ["Clear household answers"]),
      el("button", { type: "button", class: "ghost", id: "clear-checks" }, ["Clear checklist ticks"]),
      el("button", { type: "button", class: "ghost", id: "clear-all" }, ["Clear all Doug's Lab answers"])
    ]));
    form.appendChild(status);
    var route = el("div", { id: "route" });
    route.appendChild(routeFor(saved));
    root.appendChild(form);
    root.appendChild(route);

    function collect() {
      var data = { objective: "" };
      var objective = form.querySelector("input[name=objective]:checked");
      data.objective = objective ? objective.value : "";
      D.profileQuestions.forEach(function (question) {
        var picked = form.querySelector("input[name='" + question.id + "']:checked");
        data[question.id] = picked ? picked.value : "";
      });
      return data;
    }

    function refresh(message) {
      var data = collect();
      route.innerHTML = "";
      route.appendChild(routeFor(data));
      status.textContent = message || "";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      try {
        writeJson(PROFILE_KEY, collect());
        refresh("Saved on this browser.");
      } catch (err) {
        status.textContent = "This browser did not save the answer. Nothing was sent anywhere.";
      }
    });
    form.addEventListener("change", function () { refresh(""); });
    function blankProfile() {
      form.querySelectorAll("input[name=objective]").forEach(function (input) {
        input.checked = false;
      });
      D.profileQuestions.forEach(function (question) {
        form.querySelectorAll("input[name='" + question.id + "']").forEach(function (input) {
          input.checked = input.value === "";
        });
      });
    }

    document.getElementById("clear-profile").addEventListener("click", function () {
      localStorage.removeItem(PROFILE_KEY);
      blankProfile();
      refresh("Household answers cleared.");
    });
    document.getElementById("clear-checks").addEventListener("click", function () {
      localStorage.removeItem(CHECK_KEY);
      status.textContent = "Checklist ticks cleared.";
    });
    document.getElementById("clear-all").addEventListener("click", function () {
      clearPrefix();
      blankProfile();
      refresh("All Doug's Lab answers on this browser were cleared.");
    });
  }

  function renderSuccession(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Five ways to look at the same estate. Terminology and rules differ by state or territory. Nothing here removes a claim or fixes a tax outcome."
    ]));
    D.lenses.forEach(function (lens) {
      root.appendChild(card({ id: lens.id, line: lens.line, paragraphs: [lens.body] }));
    });

    root.appendChild(el("h2", null, ["Estate and non-estate assets"]));
    root.appendChild(p("A Will covers the estate. Other documents can move value around it. Check each one."));
    var columns = el("div", { class: "grid-2" });
    ["inWill", "outside"].forEach(function (key) {
      var col = D.estateColumns[key];
      columns.appendChild(el("section", { class: "panel" }, [
        el("h3", null, [col.title]),
        el("ul", null, col.points.map(function (point) { return el("li", null, [point]); }))
      ]));
    });
    root.appendChild(columns);
    root.appendChild(el("div", { class: "flag flag-red" }, [
      tag("red", "Warning"),
      el("h3", null, ["Assuming the Will controls everything"]),
      p("That assumption misses joint property, super, trusts and many business agreements. It is a warning, not a starting point.")
    ]));

    root.appendChild(el("h2", null, ["Documents that sit around a Will"]));
    D.aroundWill.forEach(function (item, index) {
      root.appendChild(card({ id: "around-" + index, line: item.line, paragraphs: [item.body] }));
    });
    root.appendChild(el("p", null, [
      el("a", { href: "team.html" }, ["Who usually prepares these documents"])
    ]));
  }

  function renderExplorer(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Nineteen Australian structures. Each note says who controls it after death or incapacity, what a Will can reach, where delay starts, and the tax character to ask about. Words, not figures."
    ]));
    root.appendChild(hardLine());
    var group = "";
    D.structures.forEach(function (item) {
      if (item.group !== group) {
        group = item.group;
        root.appendChild(el("h2", null, [group]));
      }
      var extra = el("div", null, [
        el("p", null, [el("span", { class: "field-label" }, ["Who is normally involved"]), item.who]),
        el("p", null, [
          el("span", { class: "field-label" }, ["Probate exposure"]),
          " "
        ])
      ]);
      extra.lastChild.appendChild(levelMark(item.compare.probate));
      extra.appendChild(el("p", null, [el("span", { class: "field-label" }, ["Challenge exposure"])]));
      extra.lastChild.appendChild(document.createTextNode(" "));
      extra.lastChild.appendChild(levelMark(item.compare.challenge));
      if (item.hard) extra.appendChild(el("p", null, [D.hardLine]));
      root.appendChild(card({
        id: item.id,
        line: item.name + " — " + item.line,
        fields: item.fields,
        extra: extra
      }));
    });
  }

  function renderWorkshop(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Pick a move and a holding. The page shows flags only. There is no calculator, no rate and no dollar figure."
    ]));
    var holding = el("select", { id: "holding", "aria-label": "What is being dealt with" });
    D.scenarioHoldings.forEach(function (item) {
      holding.appendChild(el("option", { value: item.id }, [item.label]));
    });
    var action = el("select", { id: "action", "aria-label": "Sell, gift, covenant or hold" });
    D.scenarioActions.forEach(function (item) {
      action.appendChild(el("option", { value: item.id }, [item.label]));
    });
    var output = el("div", { id: "flags", "aria-live": "polite" });
    root.appendChild(el("div", { class: "workshop-controls" }, [
      el("label", null, [el("span", { class: "label" }, ["Move"]), action]),
      el("label", null, [el("span", { class: "label" }, ["Holding"]), holding])
    ]));
    root.appendChild(output);

    function draw() {
      output.innerHTML = "";
      var key = action.value + "|" + holding.value;
      var rows = D.scenarios[key] || [[
        "amber",
        "Ask before you move",
        "This path still needs a tax agent and a solicitor. The direction depends on the documents and on the state or territory."
      ]];
      rows.forEach(function (row) {
        output.appendChild(el("article", { class: "flag flag-" + row[0] }, [
          tag(row[0], row[0] === "green" ? "Fits the claim" : row[0] === "red" ? "Warning" : row[0] === "amber" ? "Check" : "Note"),
          el("h3", null, [row[1]]),
          p(row[2])
        ]));
      });
      if (holding.value === "trust-land" || holding.value === "charity-land") {
        output.appendChild(hardLine());
      }
    }
    action.addEventListener("change", draw);
    holding.addEventListener("change", draw);
    draw();
  }

  function renderStudio(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Green means a form can do the job it claims when the documents are real. Amber means take the concern to a solicitor or a tax agent. Red is a warning, usually a private wrapper in community clothes. Colour is never the only signal."
    ]));
    root.appendChild(hardLine());
    D.studio.forEach(function (item) {
      root.appendChild(card({
        id: item.id,
        tone: item.tone,
        tag: item.tag,
        line: item.line,
        paragraphs: item.body
      }));
    });
  }

  function renderVillage(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "A settlement is a stack of legal layers. This page names the layers. It is not an offer of land, finance or a development."
    ]));
    root.appendChild(hardLine());
    D.villageLayers.forEach(function (item, index) {
      root.appendChild(card({ id: "layer-" + index, line: item.line, paragraphs: [item.body] }));
    });
    root.appendChild(p("If the aim is ecological care and the holder is a family discretionary trust, say that plainly. The care may still be real. The lock is not."));
  }

  function renderCompare(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Choose up to three. Low, moderate, higher and depends on documents are ordinary-language flags. They are not a score and not a recommendation."
    ]));
    root.appendChild(hardLine());
    var defaults = { fdt: true, tdt: true, clt: true };
    var picks = el("div", { class: "compare-picks" });
    D.structures.forEach(function (item) {
      var id = "pick-" + item.id;
      picks.appendChild(el("label", { for: id }, [
        el("input", { type: "checkbox", id: id, value: item.id, checked: !!defaults[item.id] }),
        el("span", null, [item.name])
      ]));
    });
    var tableHost = el("div", { id: "compare-table" });
    var note = el("p", { class: "note compare-scroll-note" }, ["On a small screen the table moves sideways. The first column stays put."]);
    var side = el("div", { class: "compare-side" }, [picks, note]);
    root.appendChild(el("div", { class: "compare-layout" }, [side, tableHost]));

    var columns = [
      ["control", "Control"],
      ["lock", "Lock"],
      ["tax", "Tax character"],
      ["cgt", "CGT and duty flags"],
      ["purpose", "Eco, family or bequest"],
      ["survives", "Survives death"],
      ["will", "Passes under a Will"],
      ["probate", "Probate exposure"],
      ["challenge", "Challenge exposure"],
      ["incapacity", "Control on incapacity"]
    ];

    function selected() {
      return Array.prototype.map.call(picks.querySelectorAll("input:checked"), function (input) {
        return input.value;
      }).slice(0, 3);
    }

    function draw() {
      var ids = selected();
      tableHost.innerHTML = "";
      if (!ids.length) {
        tableHost.appendChild(p("Choose at least one structure."));
        return;
      }
      var rows = D.structures.filter(function (item) { return ids.indexOf(item.id) !== -1; });
      var table = el("table", null, []);
      var thead = el("thead");
      var headRow = el("tr", null, [el("th", { scope: "col" }, ["Column"])]);
      rows.forEach(function (item) {
        headRow.appendChild(el("th", { scope: "col" }, [item.name]));
      });
      thead.appendChild(headRow);
      var tbody = el("tbody");
      columns.forEach(function (col) {
        var tr = el("tr");
        tr.appendChild(el("th", { scope: "row" }, [col[1]]));
        rows.forEach(function (item) {
          var value = item.compare[col[0]];
          var cell = el("td");
          if (col[0] === "probate" || col[0] === "challenge") cell.appendChild(levelMark(value));
          else cell.appendChild(document.createTextNode(value));
          tr.appendChild(cell);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(thead);
      table.appendChild(tbody);
      tableHost.appendChild(el("div", { class: "table-wrap" }, [table]));
      var overflow = picks.querySelectorAll("input:checked").length > 3;
      if (overflow) {
        var extras = picks.querySelectorAll("input:checked");
        for (var i = 3; i < extras.length; i += 1) extras[i].checked = false;
        note.textContent = "Three is the maximum, so the later ticks were cleared. The table moves sideways on a small screen.";
      }
    }

    picks.addEventListener("change", function (event) {
      var checked = picks.querySelectorAll("input:checked");
      if (checked.length > 3 && event.target.checked) {
        event.target.checked = false;
        note.textContent = "Three is the maximum. Untick one to add another. The table moves sideways on a small screen.";
        return;
      }
      note.textContent = "On a small screen the table moves sideways. The first column stays put.";
      draw();
    });
    draw();
  }

  function renderChecklist(root) {
    var saved = readJson(CHECK_KEY) || {};
    root.appendChild(el("p", { class: "lede" }, [
      "Ticks stay on this browser under dougslab:checklist. They are prompts, not a file you lodge."
    ]));
    var status = el("p", { class: "status", role: "status" });
    D.checklist.forEach(function (group) {
      root.appendChild(el("h2", null, [group.label]));
      var list = el("ul", { class: "check-list" });
      group.items.forEach(function (item) {
        var id = "check-" + item.id;
        list.appendChild(el("li", null, [
          el("label", { for: id }, [
            el("input", { type: "checkbox", id: id, "data-id": item.id, checked: !!saved[item.id] }),
            el("span", null, [item.text])
          ])
        ]));
      });
      root.appendChild(list);
    });
    root.appendChild(el("div", { class: "actions" }, [
      el("button", { type: "button", class: "ghost", id: "clear-checks" }, ["Clear checklist ticks"])
    ]));
    root.appendChild(status);
    root.appendChild(el("p", null, [
      "Household answers, and a clear-all control, are on the ",
      el("a", { href: "profile.html" }, ["household profile"]),
      "."
    ]));
    root.addEventListener("change", function (event) {
      if (!event.target || !event.target.getAttribute("data-id")) return;
      var data = readJson(CHECK_KEY) || {};
      var id = event.target.getAttribute("data-id");
      if (event.target.checked) data[id] = true;
      else delete data[id];
      try {
        writeJson(CHECK_KEY, data);
        status.textContent = "Saved on this browser.";
      } catch (err) {
        status.textContent = "This browser did not save the tick. Nothing was sent anywhere.";
      }
    });
    document.getElementById("clear-checks").addEventListener("click", function () {
      localStorage.removeItem(CHECK_KEY);
      root.querySelectorAll("input[type=checkbox]").forEach(function (box) { box.checked = false; });
      status.textContent = "Checklist ticks cleared.";
    });
  }

  function renderGlossary(root) {
    root.appendChild(el("p", { class: "lede" }, [
      "Short meanings for the words used in these rooms. One or two sentences. No figures."
    ]));
    D.glossary.forEach(function (item) {
      root.appendChild(card({ id: item.id, line: item.term, paragraphs: [item.text] }));
    });
    root.appendChild(el("h2", null, ["Sequence"]));
    root.appendChild(p("Advice, then documents, then lodgement, then any movement of land. Skipping ahead is how control and tax get separated from each other."));
    D.timeline.forEach(function (step, index) {
      root.appendChild(el("section", { class: "panel", id: step.id }, [
        el("p", { class: "label" }, ["Step " + (index + 1)]),
        el("h3", null, [step.label]),
        p(step.text)
      ]));
    });
    root.appendChild(el("h2", null, ["Order of the team"]));
    root.appendChild(el("ol", { class: "steps" }, D.engagement.map(function (step) {
      return el("li", null, [step]);
    })));
    root.appendChild(el("p", null, [
      "Authors to look for, as a reading list only, are on ",
      el("a", { href: "team.html#further-reading" }, ["the team page"]),
      ". That list is not an endorsement and not advice."
    ]));
  }

  function renderTeam(root) {
    root.appendChild(el("p", { class: "lede" }, [D.team.intro]));
    root.appendChild(hardLine());
    root.appendChild(el("h2", null, ["Legal roles"]));
    D.team.legal.forEach(function (item) {
      var extra = null;
      if (item.link) {
        extra = el("p", null, [el("a", { href: item.link.href }, [item.link.label])]);
      }
      if (item.id === "probate-lawyers") {
        extra = el("div", null, [
          p("Court homes. Look for the probate or grants section."),
          linkList(D.courts)
        ]);
      }
      root.appendChild(card({
        id: item.id,
        tone: item.tone,
        tag: item.tag,
        line: item.line,
        paragraphs: item.body,
        extra: extra
      }));
    });
    root.appendChild(el("h2", null, ["Financial roles"]));
    D.team.financial.forEach(function (item) {
      var extra = null;
      if (item.id === "advisers") {
        extra = el("p", null, [el("a", { href: "https://www.asic.gov.au/regulatory-resources/financial-services/financial-advice/financial-advisers-register/" }, ["ASIC — Financial Advisers Register"])]);
      }
      if (item.id === "accountants") {
        extra = el("p", null, [el("a", { href: "https://www.tpb.gov.au/public-register" }, ["TPB public register"])]);
      }
      root.appendChild(card({
        id: item.id,
        tone: item.tone,
        tag: item.tag,
        line: item.line,
        paragraphs: item.body,
        extra: extra
      }));
    });
    root.appendChild(el("h2", { id: "order" }, ["Order of engagement"]));
    root.appendChild(el("ol", { class: "steps" }, D.engagement.map(function (step) {
      return el("li", null, [step]);
    })));
    root.appendChild(p("The same sequence is on the glossary timeline."));
    root.appendChild(el("h2", null, ["Where to check a practitioner"]));
    root.appendChild(p("These are registers and professional bodies, not a referral list. Other states and territories have their own law society or equivalent. This list is not complete."));
    root.appendChild(linkList([
      { href: "https://www.tpb.gov.au/public-register", label: "Tax Practitioners Board public register" },
      { href: "https://www.asic.gov.au/regulatory-resources/financial-services/financial-advice/financial-advisers-register/", label: "ASIC Financial Advisers Register" }
    ].concat(D.lawSocieties)));
    root.appendChild(el("h2", { id: "further-reading" }, ["Further reading (authors to look for)"]));
    root.appendChild(p("A reading list for context only. Not an endorsement, and not advice. No scholar listed here endorses this site. Check titles and editions against a publisher or library record."));
    root.appendChild(el("ul", { class: "reading" }, D.reading.map(function (item) {
      return el("li", null, [
        el("strong", null, [item.who]),
        el("span", null, [" — " + item.what])
      ]);
    })));
  }

  var renderers = {
    home: renderHome,
    profile: renderProfile,
    succession: renderSuccession,
    explorer: renderExplorer,
    workshop: renderWorkshop,
    studio: renderStudio,
    village: renderVillage,
    compare: renderCompare,
    checklist: renderChecklist,
    glossary: renderGlossary,
    team: renderTeam
  };

  document.addEventListener("DOMContentLoaded", function () {
    if (!D) return;
    setupNav();
    var room = document.body.getAttribute("data-room");
    var root = document.getElementById("room");
    if (root && renderers[room]) renderers[room](root);
    openHash();
    window.addEventListener("hashchange", openHash);
  });
})();
