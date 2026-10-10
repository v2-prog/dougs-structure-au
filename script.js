// Youth Finance Hub – client-side logic
// Progress stored in localStorage. No sensitive data collected.

let currentView = 'home';
let completed = JSON.parse(localStorage.getItem('yfh-completed') || '[]');

function updateProgress() {
  const pct = Math.round((completed.length / 12) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${completed.length} of 12 rooms completed`;
}

function markComplete(id) {
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem('yfh-completed', JSON.stringify(completed));
    updateProgress();
  }
}

function showView(view, roomId = null) {
  currentView = view;
  const app = document.getElementById('app');
  if (view === 'home') renderHome(app);
  else if (view === 'rooms') renderRoomsList(app);
  else if (view === 'room' && roomId) renderRoom(app, roomId);
  else if (view === 'glossary') renderGlossary(app);
  else if (view === 'support') renderSupport(app);
  else if (view === 'progress') renderProgress(app);
  window.scrollTo(0, 0);
}

function renderHome(container) {
  container.innerHTML = `
    <section class="text-center mb-10">
      <h2 class="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Welcome to the Youth Finance Hub</h2>
      <p class="text-lg max-w-3xl mx-auto text-stone-700">
        A free, evidence-based learning space for young Australians (15–34). 
        Build personal financial capability while understanding the systems — tax, housing, super, cooperatives and community wealth — that shape opportunity.
      </p>
      <p class="mt-4 text-sm text-stone-600 max-w-2xl mx-auto">
        Designed for different levels of income, housing security and family support. 
        No shame. No product sales. Australian sources only.
      </p>
    </section>

    <div class="grid md:grid-cols-3 gap-6 mb-10">
      <div class="bg-white p-6 rounded-lg shadow border border-stone-200">
        <h3 class="font-semibold text-emerald-800 mb-2">Ages 15–17</h3>
        <p class="text-sm">Foundations, first jobs, banking, saving and consumer rights.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow border border-stone-200">
        <h3 class="font-semibold text-emerald-800 mb-2">Ages 18–24</h3>
        <p class="text-sm">Study, HECS-HELP, Centrelink, renting, tax and super.</p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow border border-stone-200">
        <h3 class="font-semibold text-emerald-800 mb-2">Ages 25–34</h3>
        <p class="text-sm">Housing strategies, wills, investing, cooperatives and long-term planning.</p>
      </div>
    </div>

    <div class="text-center">
      <button onclick="showView('rooms')" class="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium">
        Enter the 12 Learning Rooms
      </button>
    </div>

    <section class="mt-12 prose max-w-none">
      <h2>How the hub is organised</h2>
      <p><strong>Rooms 1–3:</strong> Financial foundations (money, saving, work & tax)</p>
      <p><strong>Rooms 4–6:</strong> Assets and housing (super, investing, housing alternatives)</p>
      <p><strong>Rooms 7–8:</strong> Legal and tax structures (wills, trusts, healthcare taxation)</p>
      <p><strong>Rooms 9–12:</strong> Collective economic capability (cooperatives, grants, community wealth, action)</p>
      <p class="text-sm text-stone-600 mt-6">This is a prototype. All factual claims should be verified against current official sources before use in formal education. Content review date: October 2026.</p>
    </section>
  `;
}

function renderRoomsList(container) {
  let html = `<h2 class="text-2xl font-bold text-emerald-800 mb-6">The 12 Learning Rooms</h2><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">`;
  ROOMS.forEach(room => {
    const done = completed.includes(room.id);
    html += `
      <button onclick="showView('room', ${room.id})" class="room-card text-left bg-white p-5 rounded-lg shadow border border-stone-200 hover:border-emerald-400">
        <div class="flex justify-between items-start">
          <span class="text-xs font-medium text-emerald-700">Room ${room.id}</span>
          ${done ? '<span class="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Done</span>' : ''}
        </div>
        <h3 class="font-semibold mt-1">${room.title}</h3>
        <p class="text-sm text-stone-600 mt-1">${room.short}</p>
      </button>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderRoom(container, id) {
  const room = ROOMS.find(r => r.id === id);
  if (!room) return;

  let html = `
    <button onclick="showView('rooms')" class="text-sm text-emerald-700 mb-4 hover:underline">← Back to all rooms</button>
    <article class="bg-white rounded-lg shadow border border-stone-200 p-6 md:p-8 prose max-w-none">
      <h1 class="text-2xl md:text-3xl font-bold text-emerald-800 !mt-0">${room.title}</h1>
      <p class="text-sm text-stone-500">Last reviewed framework: October 2026 · Educational prototype · Verify official sources</p>

      <h2>Learning objectives</h2>
      <ul>${room.objectives.map(o => `<li>${o}</li>`).join('')}</ul>

      <h2>Introduction</h2>
      <p>${room.intro}</p>

      <h2>Core concepts</h2>
      <p>${room.concepts}</p>

      <h2>How the system works</h2>
      <p>${room.howSystem}</p>

      <h2>Questions to ask before making a decision</h2>
      <ul>${room.questions.map(q => `<li>${q}</li>`).join('')}</ul>

      <h2>Common myths and mistakes</h2>
      <ul>${room.myths.map(m => `<li>${m}</li>`).join('')}</ul>

      <h2>Practical activity</h2>
      <p>${room.activity}</p>
      <div id="activity-${room.id}" class="my-4 p-4 bg-stone-50 rounded border"></div>

      <h2>Where to get independent help</h2>
      <ul>
        ${room.help.map(h => `<li><a href="${h.url}" target="_blank" rel="noopener">${h.name}</a>${h.phone ? ` – ${h.phone}` : ''}</li>`).join('')}
      </ul>

      <h2>Bibliography / Sources</h2>
      <ul>
        ${room.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a> (${s.publisher || 'Official source'})${s.accessed ? ` – accessed ${s.accessed}` : ''}</li>`).join('')}
      </ul>

      <h2>Related rooms</h2>
      <p>${room.related.map(rid => {
        const r = ROOMS.find(x => x.id === rid);
        return `<button onclick="showView('room', ${rid})" class="text-emerald-700 underline mr-3">${r ? r.title : rid}</button>`;
      }).join('')}</p>

      <div class="mt-8 pt-6 border-t">
        <button onclick="markComplete(${room.id}); showView('room', ${room.id})" class="bg-emerald-700 text-white px-4 py-2 rounded">
          Mark this room as completed
        </button>
        <p class="text-xs text-stone-500 mt-2">Progress is saved in your browser only. No personal data is sent anywhere.</p>
      </div>
    </article>
  `;
  container.innerHTML = html;

  // Simple activity placeholders
  const act = document.getElementById(`activity-${room.id}`);
  if (room.id === 1) {
    act.innerHTML = `
      <h3 class="font-medium mb-2">Fortnightly Money Map (educational)</h3>
      <p class="text-sm mb-2">Enter rough numbers. Nothing is saved or transmitted.</p>
      <label class="block text-sm">Income: $<input type="number" id="inc" class="border rounded px-2 py-1 w-32 ml-1" value="800"></label>
      <label class="block text-sm mt-1">Essential expenses: $<input type="number" id="exp" class="border rounded px-2 py-1 w-32 ml-1" value="650"></label>
      <button onclick="calcMap()" class="mt-2 bg-stone-700 text-white px-3 py-1 rounded text-sm">Calculate remaining</button>
      <p id="map-result" class="mt-2 font-medium"></p>
    `;
  } else if (room.id === 12) {
    act.innerHTML = `
      <h3 class="font-medium mb-2">My Action Plan</h3>
      <label class="block text-sm mt-2">Immediate action: <input class="border rounded px-2 py-1 w-full" placeholder="e.g. Check my payslip for super"></label>
      <label class="block text-sm mt-2">Savings or debt action: <input class="border rounded px-2 py-1 w-full"></label>
      <label class="block text-sm mt-2">Learning goal: <input class="border rounded px-2 py-1 w-full"></label>
      <label class="block text-sm mt-2">Rights/entitlements check: <input class="border rounded px-2 py-1 w-full"></label>
      <label class="block text-sm mt-2">Longer-term goal: <input class="border rounded px-2 py-1 w-full"></label>
      <label class="block text-sm mt-2">Support service I will contact if needed: <input class="border rounded px-2 py-1 w-full" placeholder="e.g. National Debt Helpline 1800 007 007"></label>
      <p class="text-xs mt-2 text-stone-500">These stay in your browser only. Do not enter real account numbers or TFNs.</p>
    `;
  } else {
    act.innerHTML = `<p class="text-sm text-stone-600">Interactive activity placeholder. In a full build this would include decision trees, quizzes or scenario tools linked to official calculators.</p>`;
  }
}

function calcMap() {
  const inc = parseFloat(document.getElementById('inc').value) || 0;
  const exp = parseFloat(document.getElementById('exp').value) || 0;
  const rem = inc - exp;
  document.getElementById('map-result').textContent = rem >= 0 
    ? `Remaining: $${rem.toFixed(0)}. You could direct some of this to a buffer or goal.`
    : `Shortfall: $${Math.abs(rem).toFixed(0)}. Prioritise essentials and seek free help if needed.`;
}

function renderGlossary(container) {
  let html = `<h2 class="text-2xl font-bold text-emerald-800 mb-6">Glossary</h2><dl class="space-y-4">`;
  GLOSSARY.forEach(g => {
    html += `<div class="bg-white p-4 rounded border"><dt class="font-semibold text-emerald-800">${g.term}</dt><dd class="text-sm mt-1">${g.def}</dd></div>`;
  });
  html += `</dl>`;
  container.innerHTML = html;
}

function renderSupport(container) {
  let html = `<h2 class="text-2xl font-bold text-emerald-800 mb-6">Support Directory</h2><div class="space-y-4">`;
  SUPPORT_DIRECTORY.forEach(s => {
    html += `
      <div class="bg-white p-4 rounded border">
        <h3 class="font-semibold">${s.name}</h3>
        <p class="text-sm">${s.desc}</p>
        ${s.contact ? `<p class="text-sm font-medium">${s.contact}</p>` : ''}
        <a href="${s.url}" target="_blank" rel="noopener" class="text-emerald-700 text-sm underline">Website</a>
      </div>
    `;
  });
  html += `</div><p class="mt-6 text-sm text-stone-600">Always verify current contact details. If you are in crisis, contact Lifeline 13 11 14 or emergency services.</p>`;
  container.innerHTML = html;
}

function renderProgress(container) {
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-emerald-800 mb-4">Your Progress</h2>
    <p class="mb-4">You have completed ${completed.length} of 12 rooms.</p>
    <ul class="space-y-2">
      ${ROOMS.map(r => `<li class="flex items-center gap-2"><span class="w-5 h-5 rounded-full border flex items-center justify-center text-xs ${completed.includes(r.id) ? 'bg-emerald-600 text-white border-emerald-600' : 'border-stone-300'}">${completed.includes(r.id) ? '✓' : ''}</span> ${r.title}</li>`).join('')}
    </ul>
    <button onclick="localStorage.removeItem('yfh-completed'); completed=[]; updateProgress(); showView('progress')" class="mt-6 text-sm text-stone-600 underline">Reset progress</button>
  `;
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  showView('home');
});