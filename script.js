// Youth Finance Hub – client-side logic
// Progress stored in localStorage. No sensitive data collected.
// Updated: Enter the 12 Learning Rooms now links to dedicated room pages.
// Cache-bust: 2026-10-11

let currentView = 'home';
let completed = JSON.parse(localStorage.getItem('yfh-completed') || '[]');

function updateProgress() {
  const pct = Math.round((completed.length / 12) * 100);
  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = `${completed.length} of 12 rooms completed`;
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
  if (!app) return;
  if (view === 'home') renderHome(app);
  else if (view === 'rooms') {
    window.location.href = 'rooms.html';
    return;
  }
  else if (view === 'room' && roomId) {
    window.location.href = `room${roomId}.html`;
    return;
  }
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
      <a href="rooms.html" class="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium inline-block">
        Enter the 12 Learning Rooms
      </a>
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

function renderGlossary(container) {
  container.innerHTML = `<h2 class="text-2xl font-bold text-emerald-800 mb-6">Glossary</h2><p>See individual rooms for key terms and links to official sources.</p>`;
}

function renderSupport(container) {
  container.innerHTML = `<h2 class="text-2xl font-bold text-emerald-800 mb-6">Support Directory</h2><p>National Debt Helpline: 1800 007 007. Lifeline: 13 11 14. Check links in each room.</p>`;
}

function renderProgress(container) {
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-emerald-800 mb-4">Your Progress</h2>
    <p class="mb-4">Visit the individual room pages to learn at your own pace.</p>
    <a href="rooms.html" class="text-emerald-700 underline">Go to the 12 Learning Rooms</a>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  updateProgress();
  showView('home');
});
