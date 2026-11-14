/* EG Eloma meeting picker: choose a service, day and time (shown in the visitor's time zone),
   then send the request by WhatsApp or email. The team confirms with a Teams link.
   The Microsoft Bookings calendar is in the second tab for instant booking. */
(function () {
  var root = document.getElementById('bookpick');
  if (!root) return;
  var WA = '61480065856', EMAIL = 'connect@egeloma.com.au', HQ = 'Australia/Melbourne';
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

  // next 10 Melbourne weekdays
  function days() {
    var out = [], now = new Date();
    var parts = new Intl.DateTimeFormat('en-CA', { timeZone: HQ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now).split('-');
    var y = +parts[0], m = +parts[1] - 1, d = +parts[2];
    for (var i = 1; out.length < 10 && i < 20; i++) {
      var noon = melb(y, m, d + i, 12, 0);
      var wd = fmt(noon, HQ, { weekday: 'short' });
      if (wd !== 'Sat' && wd !== 'Sun') out.push({ y: y, m: m, d: d + i, noon: noon });
    }
    return out;
  }
  function slots(day) {
    var out = [];
    for (var h = 9; h < 17; h++) for (var mi = 0; mi < 60; mi += 30) out.push(melb(day.y, day.m, day.d, h, mi));
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
    days().forEach(function (d) {
      var key = d.y + '-' + d.m + '-' + d.d, on = st.day && st.day.key === key;
      var b = el('button', 'bp-day' + (on ? ' on' : ''), '<span>' + fmt(d.noon, tz, { weekday: 'short' }) + '</span><b>' + fmt(d.noon, tz, { day: 'numeric' }) + '</b><small>' + fmt(d.noon, tz, { month: 'short' }) + '</small>');
      b.type = 'button'; b.setAttribute('aria-pressed', on);
      b.onclick = function () { st.day = { key: key, d: d }; st.slot = null; render(); };
      dv.appendChild(b);
    });
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
    updateLinks();
  }
  function updateLinks() {
    if (!st.svc || !st.slot) return;
    var f = function (id) { var e = $('#' + id); return e ? e.value.trim() : ''; };
    var msg = 'Hi EG Eloma, I would like to book a ' + st.svc.name + ' (' + st.svc.mins + ' min, Microsoft Teams).\n' +
      'Preferred time: ' + fmt(st.slot, tz, { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }) + ' (' + tz + ')\n' +
      'Melbourne time: ' + fmt(st.slot, HQ, { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }) + '\n' +
      (f('bp-name') ? 'Name: ' + f('bp-name') + '\n' : '') + (f('bp-biz') ? 'Business: ' + f('bp-biz') + '\n' : '') +
      (f('bp-email') ? 'Email: ' + f('bp-email') + '\n' : '') + (f('bp-notes') ? 'About: ' + f('bp-notes') + '\n' : '');
    $('#bp-wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    var tm = $('#bp-teams'); if (tm) tm.href = 'https://teams.microsoft.com/l/chat/0/0?users=' + EMAIL + '&message=' + encodeURIComponent(msg);
    $('#bp-mail').href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Meeting request: ' + st.svc.name) + '&body=' + encodeURIComponent(msg);
  }
  ['bp-name', 'bp-biz', 'bp-email', 'bp-notes'].forEach(function (id) { var e = $('#' + id); if (e) e.addEventListener('input', updateLinks); });

  // tabs
  var tabs = document.querySelectorAll('[data-booktab]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); document.getElementById(x.getAttribute('aria-controls')).hidden = !on; });
    });
  });
  render();
})();
