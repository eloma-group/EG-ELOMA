/* EG Eloma quote request form with file upload.
   Sends multipart/form-data (fields + files[]) to the endpoint in data-endpoint on #quote-form
   (or window.EG_FORM_ENDPOINT). Received by the Azure Function in api/src/functions/quote.js. */
(function () {
  var form = document.getElementById('quote-form');
  if (!form) return;
  var ENDPOINT = form.getAttribute('data-endpoint') || window.EG_FORM_ENDPOINT || '';
  // Files travel as email attachments (Microsoft Graph sendMail takes up to 4 MB per message, base64 included).
  var MAX_FILES = 10, MAX_MB = 2.5, MAX_TOTAL_MB = 2.5;
  var OK_EXT = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'heic', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'ppt', 'pptx', 'txt', 'rtf', 'zip'];
  var files = [];
  var $ = function (s) { return form.querySelector(s); };
  var input = $('#q-files'), drop = $('#q-drop'), list = $('#q-list'), ferr = $('#q-ferr');

  function size(b) { return b < 1024 * 1024 ? Math.max(1, Math.round(b / 1024)) + ' KB' : (b / 1048576).toFixed(1) + ' MB'; }
  function ext(n) { var m = /\.([a-z0-9]+)$/i.exec(n); return m ? m[1].toLowerCase() : ''; }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function kind(e) {
    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'heic'].indexOf(e) >= 0) return 'IMG';
    if (e === 'pdf') return 'PDF';
    if (['xls', 'xlsx', 'csv'].indexOf(e) >= 0) return 'XLS';
    if (['doc', 'docx', 'rtf', 'txt'].indexOf(e) >= 0) return 'DOC';
    if (['ppt', 'pptx'].indexOf(e) >= 0) return 'PPT';
    return 'ZIP';
  }

  function add(fl) {
    var msgs = [];
    Array.prototype.forEach.call(fl, function (f) {
      var e = ext(f.name);
      if (OK_EXT.indexOf(e) < 0) { msgs.push(f.name + ': this file type isn\'t supported.'); return; }
      if (f.size > MAX_MB * 1048576) { msgs.push(f.name + ': larger than ' + MAX_MB + ' MB.'); return; }
      if (files.length >= MAX_FILES) { msgs.push('You can attach up to ' + MAX_FILES + ' files.'); return; }
      if (files.some(function (x) { return x.name === f.name && x.size === f.size; })) return;
      var total = files.reduce(function (a, x) { return a + x.size; }, 0) + f.size;
      if (total > MAX_TOTAL_MB * 1048576) { msgs.push('Files can total up to ' + MAX_TOTAL_MB + ' MB.'); return; }
      files.push(f);
    });
    ferr.textContent = msgs.filter(function (m, i) { return msgs.indexOf(m) === i; }).join(' ');
    ferr.hidden = !msgs.length;
    renderFiles();
  }
  function renderFiles() {
    list.innerHTML = '';
    files.forEach(function (f, i) {
      var li = document.createElement('li');
      var k = kind(ext(f.name));
      li.innerHTML = '<span class="q-ico q-' + k.toLowerCase() + '">' + k + '</span><span class="q-fn"><b>' + esc(f.name) + '</b><small>' + size(f.size) + '</small></span><button type="button" aria-label="Remove ' + esc(f.name) + '">×</button>';
      if (k === 'IMG' && window.URL && URL.createObjectURL) {
        var img = document.createElement('img'); img.alt = ''; img.src = URL.createObjectURL(f); img.onload = function () { URL.revokeObjectURL(img.src); };
        li.querySelector('.q-ico').replaceWith(img);
      }
      li.querySelector('button').onclick = function () { files.splice(i, 1); renderFiles(); ferr.hidden = true; };
      list.appendChild(li);
    });
    var total = files.reduce(function (a, x) { return a + x.size; }, 0);
    $('#q-count').textContent = files.length ? files.length + ' of ' + MAX_FILES + ' files · ' + size(total) : 'No files added yet';
  }

  input.addEventListener('change', function () { add(input.files); input.value = ''; });
  ['dragenter', 'dragover'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add('over'); }); });
  ['dragleave', 'drop'].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove('over'); }); });
  drop.addEventListener('drop', function (e) { if (e.dataTransfer && e.dataTransfer.files) add(e.dataTransfer.files); });
  drop.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });

  // preselect from ?service=
  try {
    var sv = new URLSearchParams(location.search).get('service');
    if (sv) { var cb = form.querySelector('input[name="services[]"][value="' + sv.replace(/[^a-z-]/g, '') + '"]'); if (cb) cb.checked = true; }
  } catch (e) {}

  // offer calculator results saved in this browser
  try {
    var c = JSON.parse(localStorage.getItem('egeloma-calc-v1') || 'null');
    if (c && c.rows && c.rows.length && !c.example) {
      var sym = c.cur === 'USD' ? 'US$' : 'A$', m = 0;
      var lines = c.rows.map(function (r) {
        var p = Math.max(0, parseFloat(r.price) || 0), u = Math.max(1, parseInt(r.users, 10) || 1), v = r.per === 'user' ? p * u : p; m += v;
        return '- ' + (r.name || 'App') + ': ' + sym + Math.round(v).toLocaleString('en-AU') + '/month';
      });
      var box = $('#q-calc');
      box.hidden = false;
      $('#q-calc-sum').textContent = c.rows.length + ' apps · ' + sym + Math.round(m).toLocaleString('en-AU') + '/month';
      $('#q-calc-btn').onclick = function () {
        var t = $('#q-tools');
        t.value = (t.value ? t.value + '\n\n' : '') + 'From the subscription calculator:\n' + lines.join('\n') + '\nTotal: ' + sym + Math.round(m).toLocaleString('en-AU') + '/month';
        box.hidden = true;
      };
    }
  } catch (e) {}

  function fieldErr(el, msg) {
    var w = el.closest('.q-field') || el.closest('fieldset'); if (!w) return;
    var p = w.querySelector('.q-err'); if (!p) { p = document.createElement('p'); p.className = 'q-err'; w.appendChild(p); }
    p.textContent = msg; p.hidden = !msg; el.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function validate() {
    var first = null, ok = true;
    function chk(el, cond, msg) { fieldErr(el, cond ? '' : msg); if (!cond) { ok = false; first = first || el; } }
    chk($('#q-name'), $('#q-name').value.trim(), 'Please enter your name.');
    chk($('#q-email'), /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#q-email').value.trim()), 'Please enter a valid email address.');
    var svc = form.querySelectorAll('input[name="services[]"]:checked').length;
    chk(form.querySelector('input[name="services[]"]'), svc > 0, 'Choose at least one option.');
    chk($('#q-consent'), $('#q-consent').checked, 'Please confirm so we can use your files to prepare a quote.');
    if (first) first.focus();
    return ok;
  }
  form.querySelectorAll('input,textarea,select').forEach(function (el) { el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') fieldErr(el, ''); }); el.addEventListener('change', function () { if (el.getAttribute('aria-invalid') === 'true') fieldErr(el, ''); }); });

  function ref() {
    var d = new Date(), p = function (n) { return ('0' + n).slice(-2); };
    return 'EGQ-' + String(d.getFullYear()).slice(2) + p(d.getMonth() + 1) + p(d.getDate()) + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  }
  function done(reference, preview) {
    var name = $('#q-name').value.trim().split(' ')[0];
    var ok = document.getElementById('q-done');
    ok.querySelector('#q-done-name').textContent = name ? ', ' + name : '';
    ok.querySelector('#q-done-ref').textContent = reference;
    ok.querySelector('#q-done-email').textContent = $('#q-email').value.trim();
    ok.querySelector('#q-done-files').textContent = files.length ? files.length + (files.length === 1 ? ' file' : ' files') + ' received.' : '';
    if (!preview && window.egTrack) egTrack.lead();
    form.hidden = true; ok.hidden = false;
    ok.scrollIntoView({ behavior: 'smooth', block: 'start' }); ok.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if ($('#q-hp').value) return; // honeypot
    if (!validate()) return;
    var btn = $('#q-send'), bar = $('#q-prog'), status = $('#q-status');
    var reference = ref();
    var fd = new FormData(form);
    fd.delete('files[]');
    files.forEach(function (f) { fd.append('files[]', f, f.name); });
    fd.append('reference', reference);
    fd.append('page', location.href);
    fd.append('timezone', (Intl.DateTimeFormat().resolvedOptions().timeZone) || '');

    if (!ENDPOINT) { // design preview: no backend connected yet
      btn.disabled = true; bar.hidden = false; var w = 0;
      var t = setInterval(function () { w += 20; bar.firstElementChild.style.width = w + '%'; if (w >= 100) { clearInterval(t); done(reference, true); } }, 120);
      return;
    }
    btn.disabled = true; btn.textContent = 'Sending…'; bar.hidden = false; status.hidden = true;
    var x = new XMLHttpRequest();
    x.open('POST', ENDPOINT);
    x.upload.onprogress = function (ev) { if (ev.lengthComputable) bar.firstElementChild.style.width = Math.round(ev.loaded / ev.total * 100) + '%'; };
    x.onload = function () {
      if (x.status >= 200 && x.status < 300) {
        var r = reference; try { var j = JSON.parse(x.responseText); if (j && j.reference) r = j.reference; } catch (er) {}
        done(r, false);
      } else fail();
    };
    x.onerror = fail;
    function fail() {
      btn.disabled = false; btn.textContent = 'Send quote request'; bar.hidden = true;
      status.hidden = false;
    }
    x.send(fd);
  });
  renderFiles();
})();
