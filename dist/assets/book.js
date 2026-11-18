/* EG Eloma meeting picker: choose a service, day and time (shown in the visitor's time zone),
   then send the request to the team by email (/api/book). The team confirms with a Teams link.
   The Microsoft Bookings calendar is in the second tab for instant booking. */
(function () {
  var root = document.getElementById('bookpick');
  if (!root) return;
  var HQ = 'Australia/Melbourne';
  var SERVICES = [
    { id: 'consult', name: 'Free consultation', mins: 30, desc: 'Talk through your goals for software or marketing.' },
    { id: 'review', name: 'Free subscription review', mins: 30, desc: 'See what one owned system could replace.' },
    { id: 'licence', name: 'Free licence review', mins: 30, desc: 'Microsoft 365 licences (Australian clients).' },
    { id: 'marketing', name: 'Marketing strategy call', mins: 30, desc: 'SEO, ads and social media for your business.' }
  ];
  var st = { svc: null, day: null, slot: null };
  var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone) || HQ;
  var $ = function (s) { return root.querySelector(s); };
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }

  // Melbourne offset (minutes) for a given UTC instant
  function offsetMin(date, zone) {
    var p = new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).formatToParts(date);
    var o = {}; p.forEach(function (x) { o[x.type] = x.value; });
    var asUTC = Date.UTC(+o.year, +o.month - 1, +o.day, +o.hour % 24, +o.minute);
    return (asUTC - date.getTime()) / 60000;
  }
  // UTC Date for a Melbourne wall-clock time
  function melb(y, m, d, h, mi) {
    var guess = new Date(Date.UTC(y, m, d, h, mi));
    var off = offsetMin(guess, HQ);
    var t = new Date(guess.getTime() - off * 60000);
    var off2 = offsetMin(t, HQ);
    return off2 === off ? t : new Date(guess.getTime() - off2 * 60000);
  }
  function fmt(d, zone, opts) { return d.toLocaleString('en-AU', Object.assign({ timeZone: zone }, opts)); }

  // Month calendar of Melbourne dates: weekdays from tomorrow up to 90 days ahead can be booked.
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var todayParts = new Intl.DateTimeFormat('en-CA', { timeZone: HQ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()).split('-');
  var TODAY = Date.UTC(+todayParts[0], +todayParts[1] - 1, +todayParts[2]);
  var DAY_MS = 864e5, MAX = TODAY + 90 * DAY_MS;
  // Today counts while it still has a slot at least 30 minutes away.
  var bookable = function (t) {
    var dt = new Date(t), wd = dt.getUTCDay();
    if (t < TODAY || t > MAX || wd === 0 || wd === 6) return false;
    return t > TODAY || slots({ y: dt.getUTCFullYear(), m: dt.getUTCMonth(), d: dt.getUTCDate() }).length > 0;
  };
  var first = TODAY; while (!bookable(first)) first += DAY_MS;
  var view = { y: new Date(first).getUTCFullYear(), m: new Date(first).getUTCMonth() };
  var monthIndex = function (y, m) { return y * 12 + m; };
  var MIN_VIEW = monthIndex(view.y, view.m), MAX_VIEW = monthIndex(new Date(MAX).getUTCFullYear(), new Date(MAX).getUTCMonth());
  function slots(day) {
    var out = [], soonest = Date.now() + 30 * 60000;
    for (var h = 9; h < 17; h++) for (var mi = 0; mi < 60; mi += 30) {
      var t = melb(day.y, day.m, day.d, h, mi);
      if (t.getTime() >= soonest) out.push(t);
    }
    return out;
  }

  function render() {
    $('#bp-tz').textContent = tz.replace(/_/g, ' ');
    var sv = $('#bp-svc'); sv.innerHTML = '';
    SERVICES.forEach(function (s) {
      var b = el('button', 'bp-svc' + (st.svc === s ? ' on' : ''), '<b>' + s.name + '</b><span>' + s.mins + ' min · Microsoft Teams</span><small>' + s.desc + '</small>');
      b.type = 'button'; b.setAttribute('aria-pressed', st.svc === s);
      b.onclick = function () { st.svc = s; render(); };
      sv.appendChild(b);
    });
    var dv = $('#bp-days'); dv.innerHTML = '';
    var vi = monthIndex(view.y, view.m);
    var head = el('div', 'bp-cal-head',
      '<button type="button" class="bp-nav" data-step="-1" aria-label="Previous month"' + (vi <= MIN_VIEW ? ' disabled' : '') + '><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg></button>' +
      '<b aria-live="polite">' + MONTHS[view.m] + ' ' + view.y + '</b>' +
      '<button type="button" class="bp-nav" data-step="1" aria-label="Next month"' + (vi >= MAX_VIEW ? ' disabled' : '') + '><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>');
    head.querySelectorAll('.bp-nav').forEach(function (n) {
      n.onclick = function () { var i = vi + +n.getAttribute('data-step'); view = { y: Math.floor(i / 12), m: i % 12 }; render(); };
    });
    dv.appendChild(head);
    var grid = el('div', 'bp-cal-grid');
    WEEKDAYS.forEach(function (w) { grid.appendChild(el('span', 'bp-wd', '<abbr title="' + w + '">' + w.slice(0, 3) + '</abbr>')); });
    var lead = (new Date(Date.UTC(view.y, view.m, 1)).getUTCDay() + 6) % 7;
    for (var i = 0; i < lead; i++) grid.appendChild(el('span', 'bp-cd-x'));
    var dim = new Date(Date.UTC(view.y, view.m + 1, 0)).getUTCDate();
    for (var dd = 1; dd <= dim; dd++) (function (dd) {
      var t = Date.UTC(view.y, view.m, dd), key = view.y + '-' + view.m + '-' + dd;
      var on = st.day && st.day.key === key, ok = bookable(t);
      var b = el('button', 'bp-cd' + (on ? ' on' : '') + (t === TODAY ? ' today' : ''), String(dd));
      b.type = 'button';
      b.setAttribute('aria-label', WEEKDAYS[(new Date(t).getUTCDay() + 6) % 7] + ' ' + dd + ' ' + MONTHS[view.m] + ' ' + view.y + (ok ? '' : ', not available'));
      if (!ok) b.disabled = true;
      else {
        b.setAttribute('aria-pressed', on);
        b.onclick = function () { st.day = { key: key, t: t, d: { y: view.y, m: view.m, d: dd } }; st.slot = null; render(); };
      }
      grid.appendChild(b);
    })(dd);
    dv.appendChild(grid);
    dv.appendChild(el('p', 'bp-cal-note', st.day
      ? 'Selected: <b>' + WEEKDAYS[(new Date(st.day.t).getUTCDay() + 6) % 7] + ' ' + st.day.d.d + ' ' + MONTHS[st.day.d.m] + ' ' + st.day.d.y + '</b>'
      : 'Weekdays only, up to 3 months ahead. Days are in Melbourne time.'));
    var tv = $('#bp-times'); tv.innerHTML = '';
    if (!st.day) tv.innerHTML = '<p class="bp-hint">Choose a day to see times.</p>';
    else slots(st.day.d).forEach(function (t) {
      var on = st.slot && st.slot.getTime() === t.getTime();
      var b = el('button', 'bp-time' + (on ? ' on' : ''), fmt(t, tz, { hour: 'numeric', minute: '2-digit' }));
      b.type = 'button'; b.title = 'Melbourne time: ' + fmt(t, HQ, { weekday: 'short', hour: 'numeric', minute: '2-digit' });
      b.onclick = function () { st.slot = t; render(); };
      tv.appendChild(b);
    });
    var ready = st.svc && st.slot;
    $('#bp-summary').innerHTML = ready
      ? '<b>' + st.svc.name + '</b> · ' + fmt(st.slot, tz, { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }) + ' <span>(your time)</span><br><small>Melbourne time: ' + fmt(st.slot, HQ, { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) + '</small>'
      : 'Choose a meeting type, day and time.';
    $('#bp-form').hidden = !ready;
  }

  // One submit: POST /api/book (Azure Function, emails the team through Microsoft 365), then /thank-you counts the lead.
  var form = $('#bp-form'), submit = $('.bp-submit'), err = $('#bp-err'), label = submit.textContent;
  var val = function (id) { return $('#' + id).value.trim(); };
  var fail = function (msg) { err.textContent = msg; err.hidden = false; submit.disabled = false; submit.textContent = label; };
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.hidden = true;
    if (!st.svc || !st.slot) return fail('Choose a meeting type, day and time first.');
    if (!form.checkValidity()) { form.reportValidity(); return; }
    submit.disabled = true; submit.textContent = 'Sending…';
    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        service: st.svc.id, start: st.slot.toISOString(), tz: tz,
        name: val('bp-name'), email: val('bp-email'), business: val('bp-biz'), phone: val('bp-phone'), notes: val('bp-notes'),
        website: val('bp-hp')
      })
    }).then(function (r) {
      if (!r.ok) throw r.status;
      if (window.egTrack) egTrack.flagLead();
      location.assign('/thank-you');
    }).catch(function () {
      fail('Sorry, your request didn’t send. Please try again, or call 1800 054 555.');
    });
  });

  // tabs
  var tabs = document.querySelectorAll('[data-booktab]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    });
  });
  render();
})();
