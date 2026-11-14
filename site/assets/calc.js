/* EG Eloma subscription cost calculator */
(function () {
  var root = document.getElementById('calc');
  if (!root) return;
  var WHATSAPP = '61480065856';
  var EMAIL = 'connect@egeloma.com.au';
  var KEY = 'egeloma-calc-v1';
  var EXAMPLE = [
    { name: 'CRM', price: 45, per: 'user', users: 5 },
    { name: 'Invoicing & accounting', price: 60, per: 'month', users: 1 },
    { name: 'Bookings & scheduling', price: 30, per: 'user', users: 5 },
    { name: 'Help desk', price: 25, per: 'user', users: 3 },
    { name: 'Rostering & timesheets', price: 6, per: 'user', users: 10 }
  ];
  var state = { cur: 'AUD', rise: 5, years: 5, rows: EXAMPLE.map(function (r) { return Object.assign({}, r); }), example: true };
  try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.rows) state = s; } catch (e) {}

  var tbody = root.querySelector('#calc-rows');
  var $ = function (id) { return root.querySelector(id); };

  function money(n) {
    var sym = state.cur === 'USD' ? 'US$' : 'A$';
    return sym + Math.round(n).toLocaleString('en-AU');
  }
  function monthlyOf(r) {
    var p = Math.max(0, parseFloat(r.price) || 0), u = Math.max(1, parseInt(r.users, 10) || 1);
    return r.per === 'user' ? p * u : p;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function render() {
    tbody.innerHTML = '';
    state.rows.forEach(function (r, i) {
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td><label class="egc-sr" for="cn' + i + '">App or subscription</label><input id="cn' + i + '" type="text" value="' + (r.name || '').replace(/"/g, '&quot;') + '" placeholder="e.g. CRM"></td>' +
        '<td><label class="egc-sr" for="cp' + i + '">Price</label><input id="cp' + i + '" type="number" min="0" step="0.01" inputmode="decimal" value="' + r.price + '"></td>' +
        '<td><label class="egc-sr" for="ct' + i + '">Charged</label><select id="ct' + i + '"><option value="user"' + (r.per === 'user' ? ' selected' : '') + '>per user / month</option><option value="month"' + (r.per === 'month' ? ' selected' : '') + '>per month (flat)</option></select></td>' +
        '<td><label class="egc-sr" for="cu' + i + '">Users</label><input id="cu' + i + '" type="number" min="1" step="1" inputmode="numeric" value="' + r.users + '"' + (r.per === 'month' ? ' disabled' : '') + '></td>' +
        '<td class="calc-m">' + money(monthlyOf(r)) + '</td>' +
        '<td><button type="button" class="calc-del" aria-label="Remove ' + (r.name || 'row') + '">×</button></td>';
      tr.querySelector('#cn' + i).oninput = function (e) { r.name = e.target.value; touch(false); };
      tr.querySelector('#cp' + i).oninput = function (e) { r.price = e.target.value; touch(true); };
      tr.querySelector('#ct' + i).onchange = function (e) { r.per = e.target.value; touch(true, true); };
      tr.querySelector('#cu' + i).oninput = function (e) { r.users = e.target.value; touch(true); };
      tr.querySelector('.calc-del').onclick = function () { state.rows.splice(i, 1); touch(true, true); };
      tbody.appendChild(tr);
    });
    totals();
  }
  function touch(recalc, rerender) {
    if (state.example) { state.example = false; $('#calc-example').hidden = true; }
    save();
    if (rerender) render(); else if (recalc) { updateRowTotals(); totals(); }
  }
  function updateRowTotals() {
    var cells = tbody.querySelectorAll('.calc-m');
    state.rows.forEach(function (r, i) { if (cells[i]) cells[i].textContent = money(monthlyOf(r)); });
  }
  function totals() {
    var m = state.rows.reduce(function (a, r) { return a + monthlyOf(r); }, 0);
    var y = m * 12, rise = Math.max(0, parseFloat(state.rise) || 0) / 100, n = state.years, total = 0;
    for (var k = 0; k < n; k++) total += y * Math.pow(1 + rise, k);
    $('#t-month').textContent = money(m);
    $('#t-year').textContent = money(y);
    $('#t-total').textContent = money(total);
    $('#t-years').textContent = n;
    $('#t-count').textContent = state.rows.length;
    $('#t-hire').textContent = money(state.rows.filter(function (r) { return r.per === 'user'; }).reduce(function (a, r) { return a + (parseFloat(r.price) || 0); }, 0) * 12);
    $('#calc-example').hidden = !state.example;
    var summary = 'Hi EG Eloma, I used your subscription calculator.\n' +
      state.rows.map(function (r) { return '- ' + (r.name || 'App') + ': ' + money(monthlyOf(r)) + '/month'; }).join('\n') +
      '\nTotal: ' + money(m) + '/month, ' + money(y) + '/year, about ' + money(total) + ' over ' + n + ' years.\nI would like a free subscription review.';
    $('#calc-wa').href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(summary);
    $('#calc-mail').href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Free subscription review request') + '&body=' + encodeURIComponent(summary);
    $('#calc-summary').value = summary;
  }

  $('#calc-add').onclick = function () { state.rows.push({ name: '', price: 0, per: 'user', users: 1 }); touch(true, true); var ins = tbody.querySelectorAll('input[type=text]'); ins[ins.length - 1].focus(); };
  $('#calc-clear').onclick = function () { state.rows = [{ name: '', price: 0, per: 'user', users: 1 }]; touch(true, true); };
  $('#calc-reset').onclick = function () { state.rows = EXAMPLE.map(function (r) { return Object.assign({}, r); }); state.example = true; save(); render(); };
  var cur = $('#calc-cur'), rise = $('#calc-rise'), yrs = $('#calc-years');
  cur.value = state.cur; rise.value = state.rise; yrs.value = state.years;
  cur.onchange = function () { state.cur = cur.value; save(); render(); };
  rise.oninput = function () { state.rise = rise.value; $('#calc-rise-v').textContent = rise.value + '%'; save(); totals(); };
  yrs.onchange = function () { state.years = parseInt(yrs.value, 10); save(); totals(); };
  $('#calc-rise-v').textContent = state.rise + '%';
  $('#calc-copy').onclick = function () {
    var t = $('#calc-summary').value, b = this;
    var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy results'; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function () { $('#calc-summary').select(); });
    else { $('#calc-summary').select(); }
  };
  render();
})();
