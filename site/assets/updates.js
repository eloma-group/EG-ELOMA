/* EG Eloma updates: renders assets/updates-data.js on the Updates page (#upd-list) and
   the home page strip (#upd-strip), handles filters and the alerts sign-up form (#sub-form). */
(function () {
  var DATA = (window.EG_UPDATES || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : a.date > b.date ? -1 : 0; });
  var CAT = { microsoft: 'Microsoft update', security: 'Security advisory', news: 'EG Eloma news' };
  var PRI = { action: 'Action required', recommended: 'Recommended', info: 'For information' };
  var EXT = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function day(d) { var p = d.split('-'); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2], 12)).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }); }
  function card(u, compact) {
    var h = '<article class="upd' + (compact ? ' upd-sm' : '') + '" id="' + esc(u.id) + '" data-cat="' + esc(u.category) + '" data-pri="' + esc(u.priority) + '">' +
      '<div class="upd-top"><span class="upd-cat upd-c-' + esc(u.category) + '">' + esc(CAT[u.category] || u.category) + '</span>' +
      '<span class="upd-pri upd-p-' + esc(u.priority) + '">' + esc(PRI[u.priority] || u.priority) + '</span>' +
      '<time datetime="' + esc(u.date) + '">' + esc(day(u.date)) + '</time></div>' +
      '<h3>' + (compact ? '<a href="updates.html#' + esc(u.id) + '">' + esc(u.title) + '</a>' : esc(u.title)) + '</h3>' +
      '<p>' + esc(u.summary) + '</p>';
    if (!compact) {
      h += '<p class="upd-do"><b>What to do:</b> ' + esc(u.action) + '</p><div class="upd-links">';
      if (u.link) h += '<a class="btn btn-primary" href="' + esc(u.link) + '">' + esc(u.linkText || 'Read more') + '</a>';
      if (u.sourceUrl) h += '<a class="upd-src" href="' + esc(u.sourceUrl) + '" target="_blank" rel="noopener">Source: ' + esc(u.source || 'official notice') + EXT + '</a>';
      h += '</div>';
    }
    return h + '</article>';
  }

  // Updates page
  var list = document.getElementById('upd-list');
  if (list && DATA.length) {
    var cat = 'all', onlyAction = false;
    var btns = document.querySelectorAll('[data-upd-filter]'), act = document.getElementById('upd-action');
    function render() {
      var shown = DATA.filter(function (u) { return (cat === 'all' || u.category === cat) && (!onlyAction || u.priority === 'action'); });
      list.innerHTML = shown.length ? shown.map(function (u) { return card(u); }).join('') : '<p class="upd-none">No updates in this category yet.</p>';
      var c = document.getElementById('upd-count'); if (c) c.textContent = shown.length + (shown.length === 1 ? ' update' : ' updates');
      btns.forEach(function (b) { var on = b.getAttribute('data-upd-filter') === cat; b.setAttribute('aria-pressed', on); });
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { cat = b.getAttribute('data-upd-filter'); render(); }); });
    if (act) act.addEventListener('change', function () { onlyAction = act.checked; render(); });
    var counts = { all: DATA.length };
    DATA.forEach(function (u) { counts[u.category] = (counts[u.category] || 0) + 1; });
    btns.forEach(function (b) { var s = b.querySelector('small'); if (s) s.textContent = counts[b.getAttribute('data-upd-filter')] || 0; });
    render();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) { t.classList.add('upd-hl'); setTimeout(function () { t.scrollIntoView({ block: 'start' }); }, 60); } }
  }

  // Home page strip
  var strip = document.getElementById('upd-strip');
  if (strip && DATA.length) strip.innerHTML = DATA.slice(0, 3).map(function (u) { return card(u, true); }).join('');

  // Alerts sign-up
  var form = document.getElementById('sub-form');
  if (form) {
    var ENDPOINT = form.getAttribute('data-endpoint') || window.EG_SUBSCRIBE_ENDPOINT || '';
    var msg = document.getElementById('sub-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name=company_website]').value) return;
      var em = form.querySelector('[name=email]'), topics = form.querySelectorAll('[name="topics[]"]:checked').length;
      var err = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim()) ? 'Please enter a valid email address.' : !topics ? 'Choose at least one topic.' : '';
      if (err) { msg.className = 'sub-msg sub-err'; msg.textContent = err; msg.hidden = false; em.focus(); return; }
      var btn = form.querySelector('button[type=submit]');
      function ok(preview) {
        form.querySelectorAll('input,button').forEach(function (x) { x.disabled = true; });
        msg.className = 'sub-msg sub-ok'; msg.hidden = false;
        msg.textContent = preview ? 'Design preview: sign-up isn\'t connected yet, so nothing was sent.' : 'Thanks. You\'re on the list for EG Eloma updates.';
      }
      if (!ENDPOINT) { ok(true); return; }
      btn.disabled = true; btn.textContent = 'Signing up…';
      fetch(ENDPOINT, { method: 'POST', body: new FormData(form) }).then(function (r) { if (!r.ok) throw 0; ok(false); })
        .catch(function () { btn.disabled = false; btn.textContent = 'Get updates'; msg.className = 'sub-msg sub-err'; msg.hidden = false; msg.textContent = 'Sorry, that didn\'t work. Please try again or email connect@egeloma.com.au.'; });
    });
  }
})();
