/* EG Eloma chat assistant
 * Works in two modes:
 *  1. Instant answers (default): matches questions against the site's own service and FAQ content.
 *  2. AI mode: set AI_ENDPOINT below to your deployed chat worker URL to answer with AI.
 */
(function () {
  var AI_ENDPOINT = window.EG_CHAT_ENDPOINT || ''; // or paste here, e.g. 'https://egeloma-chat.<your-account>.workers.dev'

  var KB = window.EG_KB || { services: [], faqs: [] };
  var me = document.currentScript && document.currentScript.src;
  var ROOT = me ? me.replace(/assets\/chat\.js.*$/, '') : '/';
  var PHONE = '1800 054 555';
  var TEAMS = 'connect@egeloma.com.au'; // Microsoft Teams chat address
  function teamsUrl(t) { return 'https://teams.microsoft.com/l/chat/0/0?users=' + TEAMS + '&message=' + encodeURIComponent(t || 'Hi EG Eloma, I found you on your website and have a question.'); }
  var WHATSAPP = '61480065856'; // WhatsApp Business number, country code first, no + or spaces
  function waUrl(t) { return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(t || 'Hi EG Eloma, I would like to know more about your services.'); }
  var history = [];
  var open = false, busy = false, started = false;

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- UI ----------
  var logo = ROOT + 'assets/logo.webp';
  var launcher = el('button', 'egc-launch');
  launcher.type = 'button';
  launcher.setAttribute('aria-label', 'Chat with EG Eloma');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.innerHTML = '<img src="' + logo + '" alt="" width="34" height="28"><span class="egc-dot" aria-hidden="true"></span>';

  var tip = el('div', 'egc-tip', 'Hi! Questions about our services? <b>Ask me.</b>');

  var panel = el('div', 'egc-panel');
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'EG Eloma assistant');
  panel.hidden = true;
  panel.innerHTML =
    '<div class="egc-head"><span class="egc-av"><img src="' + logo + '" alt="" width="26" height="21"></span>' +
    '<div class="egc-ht"><b>EG Eloma assistant</b><small><i></i>' + (AI_ENDPOINT ? 'AI assistant · usually instant' : 'Instant answers · 24/7') + '</small></div>' +
    '<button type="button" class="egc-x" aria-label="Close chat">×</button></div>' +
    '<div class="egc-log" aria-live="polite"></div>' +
    '<div class="egc-chips"></div>' +
    '<form class="egc-form"><label class="egc-sr" for="egc-input">Your message</label>' +
    '<input id="egc-input" type="text" autocomplete="off" maxlength="500" placeholder="Ask about software, marketing, pricing…">' +
    '<button type="submit" aria-label="Send"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></form>' +
    '<div class="egc-row"><a class="egc-wa" target="_blank" rel="noopener" href="' + waUrl('Hi EG Eloma, I have a question (from ' + document.title + ').') + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1z"/><path d="M9 9.5c.3 1.8 1.7 3.4 3.6 4.1l1.2-1.1 1.9.8"/></svg>WhatsApp</a>' +
    '<button type="button" class="egc-wa egc-teams"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="11" height="11" rx="2"/><path d="M6 10h5M8.5 10v5"/><circle cx="18" cy="6" r="2"/><path d="M16 11h4a1 1 0 0 1 1 1v3a3 3 0 0 1-5 2"/></svg>Teams</button></div>' +
    '<p class="egc-foot">In Australia, call <b>' + PHONE + '</b> (free) · <a href="' + ROOT + 'contact.html">Book a consultation</a></p>';

  document.body.appendChild(tip);
  document.body.appendChild(panel);
  document.body.appendChild(launcher);

  var log = panel.querySelector('.egc-log'), chips = panel.querySelector('.egc-chips');
  var form = panel.querySelector('.egc-form'), input = panel.querySelector('#egc-input');

  function scroll() { log.scrollTop = log.scrollHeight; }
  function addMsg(who, html, links) {
    var m = el('div', 'egc-msg egc-' + who);
    m.innerHTML = html;
    if (links && links.length) {
      var l = el('div', 'egc-links');
      links.forEach(function (k) {
        var a = el('a', null, esc(k.label) + ' →'); a.href = k.url || '#';
        if (k.act) a.onclick = function (e) { e.preventDefault(); k.act(); };
        if (k.ext) { a.target = '_blank'; a.rel = 'noopener'; }
        l.appendChild(a);
      });
      m.appendChild(l);
    }
    log.appendChild(m); scroll(); return m;
  }
  function setChips(list) {
    chips.innerHTML = '';
    list.forEach(function (c) {
      var b = el('button', 'egc-chip', esc(c)); b.type = 'button';
      b.onclick = function () { send(c); };
      chips.appendChild(b);
    });
  }
  var DEFAULT_CHIPS = ['Custom software', 'Digital marketing', 'How much does it cost?', 'Book a consultation'];

  function start() {
    if (started) return; started = true;
    addMsg('bot', 'Hi, I\'m the EG Eloma assistant. I can tell you about our <b>custom software</b>, <b>digital marketing</b>, Microsoft and IT services. What can I help with?');
    setChips(DEFAULT_CHIPS);
    checkTeams();
    if (ts && ts.active) setMode('teams');
  }
  function toggle(force) {
    open = typeof force === 'boolean' ? force : !open;
    panel.hidden = !open; tip.hidden = true;
    launcher.setAttribute('aria-expanded', open);
    launcher.classList.toggle('egc-on', open);
    if (open) { start(); setTimeout(function () { if (!input.disabled) input.focus(); }, 50); if (ts && ts.active) poll(); }
  }
  launcher.onclick = function () { toggle(); };
  tip.onclick = function () { toggle(true); };
  panel.querySelector('.egc-x').onclick = function () { toggle(false); launcher.focus(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { toggle(false); launcher.focus(); } });
  form.onsubmit = function (e) { e.preventDefault(); var v = input.value.trim(); if (v) { input.value = ''; if (mode === 'teams') sendTeams(v); else send(v); } };

  // ---------- Teams mode: chat with the team, who answer in Microsoft Teams (api/src/functions/teams-chat.js) ----------
  // Each visitor gets a thread in the team's Teams channel; replies there show up here. The chat is kept in this
  // browser (localStorage), so it carries on across pages. Until Teams chat is set up, the button opens Teams itself.
  var API = '/api/teams-chat', TKEY = 'egc-teams-v1';
  var title = panel.querySelector('.egc-ht b'), sub = panel.querySelector('.egc-ht small'), botSub = sub.innerHTML;
  var teamsBtn = panel.querySelector('.egc-teams'), teamsLabel = teamsBtn.innerHTML;
  var tlog = el('div', 'egc-log'); tlog.setAttribute('aria-live', 'polite'); tlog.hidden = true;
  log.parentNode.insertBefore(tlog, log.nextSibling);
  var mode = 'bot', ready = null, rendered = false, timer = 0, inflight = false;
  var ts = null;
  try { ts = JSON.parse(localStorage.getItem(TKEY) || 'null'); } catch (e) {}
  function save() { try { localStorage.setItem(TKEY, JSON.stringify(ts)); } catch (e) {} }
  function newSid() {
    var a = new Uint8Array(18); (window.crypto || window.msCrypto).getRandomValues(a);
    return Array.prototype.map.call(a, function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }
  function checkTeams() {
    if (ready !== null) return;
    fetch(API + '?status=1').then(function (r) { return r.json(); }).then(function (d) { ready = !!d.ready; }).catch(function () { ready = false; });
  }
  function enterTeams() {
    if (ready === false) { window.open(teamsUrl(), '_blank', 'noopener'); return; }
    setMode('teams');
  }
  teamsBtn.onclick = function () { if (mode === 'teams') setMode('bot'); else enterTeams(); };

  function setMode(m) {
    var t = m === 'teams'; mode = m;
    log.hidden = t; tlog.hidden = !t; chips.hidden = t;
    title.textContent = t ? 'EG Eloma Teams' : 'EG Eloma assistant';
    panel.setAttribute('aria-label', title.textContent);
    sub.innerHTML = t ? '<i></i>Our team · replies appear here' : botSub;
    teamsBtn.innerHTML = t ? '← Assistant' : teamsLabel;
    input.placeholder = t ? 'Message the EG Eloma team…' : 'Ask about software, marketing, pricing…';
    input.disabled = false;
    if (t) {
      if (!ts) ts = { sid: newSid(), name: '', email: '', after: '', started: false, log: [] };
      ts.active = true; save();
      if (!rendered) renderTeams();
      if (!ts.name) input.disabled = true;
      poll();
    } else if (ts) { ts.active = false; save(); }
    if (open && !input.disabled) input.focus();
  }

  function addT(item, keep) {
    var by = item.a ? '<small class="egc-by">' + esc(item.a) + ' · EG Eloma team</small>' : '';
    var m = el('div', 'egc-msg egc-' + (item.w === 'user' ? 'user' : 'bot') + (item.w === 'note' ? ' egc-note' : ''), by + esc(item.t).replace(/\n/g, '<br>'));
    tlog.appendChild(m); tlog.scrollTop = tlog.scrollHeight;
    if (keep) { ts.log.push(item); if (ts.log.length > 200) ts.log.shift(); save(); }
    return m;
  }
  function renderTeams() {
    rendered = true;
    addT({ w: 'note', t: 'You\'re chatting with the EG Eloma team. We answer from Microsoft Teams and our replies appear right here.' });
    ts.log.forEach(function (x) { addT(x); });
    if (!ts.name) introForm();
  }
  function introForm() {
    var f = el('form', 'egc-msg egc-bot egc-intro',
      '<label>Your name<input name="n" required maxlength="80" autocomplete="name"></label>' +
      '<label>Email <small>(so we can reply if you leave)</small><input name="e" type="email" maxlength="200" autocomplete="email"></label>' +
      '<button type="submit">Start chat</button>');
    f.onsubmit = function (e) {
      e.preventDefault();
      var n = f.elements.n.value.trim(), em = f.elements.e.value.trim();
      if (!n) { f.elements.n.focus(); return; }
      if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { f.elements.e.focus(); return; }
      ts.name = n; ts.email = em; save();
      f.remove(); input.disabled = false; input.focus();
      addT({ w: 'note', t: 'Thanks, ' + n.split(' ')[0] + '. Type your message below.' });
    };
    tlog.appendChild(f);
    setTimeout(function () { f.elements.n.focus(); }, 50);
  }
  function fallbackLinks(m, text) {
    var l = el('div', 'egc-links');
    [['Open Microsoft Teams', teamsUrl(text)], ['WhatsApp us', waUrl(text)]].forEach(function (x) {
      var a = el('a', null, esc(x[0]) + ' →'); a.href = x[1]; a.target = '_blank'; a.rel = 'noopener'; l.appendChild(a);
    });
    m.appendChild(l);
  }
  function sendTeams(text) {
    if (!ts || !ts.name) return;
    addT({ w: 'user', t: text }, true);
    fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sid: ts.sid, text: text, name: ts.name, email: ts.email, page: location.href }) })
      .then(function (r) {
        if (r.status === 503) { ready = false; throw 503; }
        if (!r.ok) throw r.status;
        if (!ts.started) { ts.started = true; addT({ w: 'note', t: 'Sent to our team. Replies appear here, so keep this chat open or come back to it later.' }, true); }
        poll();
      })
      .catch(function (s) {
        fallbackLinks(addT({ w: 'note', t: s === 503 ? 'Teams chat isn\'t available right now. You can reach us here instead:' : 'Sorry, that message didn\'t send. Please try again, or reach us here:' }), text);
      });
  }
  // Checks for replies: every 4 seconds while the Teams chat is open, every 20 seconds otherwise.
  function poll() {
    clearTimeout(timer);
    if (!ts || !ts.started || !ts.active) return;
    if (!inflight) {
      inflight = true;
      fetch(API + '?sid=' + ts.sid + '&after=' + encodeURIComponent(ts.after || ''), { cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : { messages: [] }; })
        .then(function (d) {
          (d.messages || []).forEach(function (x) {
            ts.after = x.id;
            var item = { w: 'team', t: x.text, a: x.author };
            if (rendered) addT(item, true); else { ts.log.push(item); save(); }
            if (!open || mode !== 'teams') { tip.innerHTML = 'New reply from the <b>EG Eloma team</b>'; tip.hidden = false; tip.classList.add('egc-show'); }
          });
          save();
        })
        .catch(function () {})
        .then(function () { inflight = false; });
    }
    timer = setTimeout(poll, open && mode === 'teams' ? 4000 : 20000);
  }
  if (ts && ts.active && ts.started) poll();

  try { if (!sessionStorage.getItem('egc-tip')) { setTimeout(function () { if (!open) tip.classList.add('egc-show'); }, 4000); sessionStorage.setItem('egc-tip', '1'); } } catch (e) {}

  // ---------- answering ----------
  function send(text) {
    if (busy) return;
    addMsg('user', esc(text));
    history.push({ role: 'user', content: text });
    chips.innerHTML = '';
    var typing = addMsg('bot egc-typing', '<span></span><span></span><span></span>');
    busy = true;
    var done = function (html, links, chipList) {
      typing.remove(); addMsg('bot', html, links);
      history.push({ role: 'assistant', content: html.replace(/<[^>]+>/g, '') });
      setChips(chipList || DEFAULT_CHIPS); busy = false;
    };
    if (AI_ENDPOINT) {
      fetch(AI_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: history.slice(-10) }) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) { var a = local(text); done(format(d.reply || ''), a.links.slice(0, 2), ['Book a consultation', 'Pricing', 'Talk to a person']); })
        .catch(function () { var a = local(text); setTimeout(function () { done(a.html, a.links, a.chips); }, 300); });
    } else {
      var a = local(text);
      setTimeout(function () { done(a.html, a.links, a.chips); }, 450);
    }
  }
  function format(t) { return esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>'); }

  var STOP = 'a an and are as at be can do does for from how i in is it me my of on or our please so that the this to we what when where which who why will with you your about tell need want get help'.split(' ');
  function words(t) { return (t.toLowerCase().match(/[a-z0-9+#]+/g) || []).filter(function (w) { return w.length > 1 && STOP.indexOf(w) < 0; }); }
  function stem(w) { return w.replace(/(ing|ies|es|s|ed)$/, ''); }
  function has(t, list) { for (var i = 0; i < list.length; i++) if (t.indexOf(list[i]) >= 0) return true; return false; }
  function url(p) { return ROOT + p; }
  var CONTACT = { label: 'Book a time', url: url('contact.html#book') };

  function local(q) {
    var t = q.toLowerCase();
    if (has(t, ['hello', 'hi ', 'hey', 'good morning', 'good afternoon']) && t.length < 25)
      return { html: 'Hello! What would you like to know? You can ask about a service, pricing, or how we work.', links: [], chips: DEFAULT_CHIPS };
    if (has(t, ['whatsapp', 'whats app', 'teams', 'message', 'person', 'human', 'call', 'phone', 'speak', 'talk to', 'contact', 'book', 'consult', 'meeting', 'appointment']))
      return { html: 'Happy to connect you with the team. In Australia, call <b>' + PHONE + '</b> (free call). From anywhere in the world, message us on <b>WhatsApp</b> or <b>Microsoft Teams</b>. You can also email <b>connect@egeloma.com.au</b>, or book a free consultation. We reply within one business day, usually much sooner.', links: [{ label: 'WhatsApp us', url: waUrl(), ext: true }, { label: 'Chat with our team', act: enterTeams }, CONTACT], chips: ['Custom software', 'Digital marketing', 'Pricing'] };
    if (has(t, ['demo', 'prototype', 'example of', 'show me', 'restaurant system', 'ordering system', 'pos system']))
      return { html: 'Try our <b>live demo</b>: a restaurant ordering system we built with online ordering, point of sale, kitchen display, phone orders and delivery apps in one owned system. It uses sample data, so feel free to click around.', links: [{ label: 'Open the live demo', url: url('demo/restaurant-ordering.html') }, { label: 'About the demo', url: url('demo.html') }], chips: DEFAULT_CHIPS };
    if (has(t, ['calculator', 'calculate', 'how much do i spend', 'how much am i spending', 'saving', 'save money']))
      return { html: 'Try our free <b>subscription calculator</b>. Add the apps you pay for and see what they cost per year and over five years. Then send us the results for a free review.', links: [{ label: 'Open the calculator', url: url('subscription-calculator.html') }, CONTACT], chips: DEFAULT_CHIPS };
    if (has(t, ['price', 'cost', 'how much', 'quote', 'pricing', 'fee', 'expensive', 'cheap', 'budget', 'afford']))
      return { html: 'Every project and plan is quoted in writing, so you only pay for what you need. Quotes are <b>itemised</b>, in <b>AUD or USD</b>, valid for <b>30 days</b>, and show ad spend separately. Custom software has no per-user monthly licence fees because you own it.', links: [{ label: 'Request a quote', url: url('quote.html') }, { label: 'Compare plans', url: url('plans.html') }, CONTACT], chips: ['Marketing plans', 'Custom software', 'Book a consultation'] };
    if (has(t, ['country', 'countries', 'overseas', 'international', 'usa', 'uk', 'canada', 'india', 'dubai', 'worldwide', 'currency', 'usd', 'aud', 'time zone', 'timezone']))
      return { html: 'We\'re based in Melbourne, Australia and work with businesses <b>anywhere in the world</b> that can work with us in English. Quotes are in <b>AUD</b> for Australian clients and <b>USD</b> for international clients, and meetings are scheduled in your time zone.', links: [CONTACT], chips: DEFAULT_CHIPS };
    if (has(t, ['own', 'subscription', 'saas', 'replace', 'rent', 'licence fee', 'license fee']) && !has(t, ['saas develop', 'build a saas', 'saas product', 'saas platform']))
      return { html: 'That\'s our speciality. We build <b>one custom system</b> that replaces your monthly subscriptions. <b>You own it</b>, including the source code, it scales as you grow, any developer can maintain it, and it\'s priced for small business. No third parties holding your data.', links: [{ label: 'Calculate your subscription costs', url: url('subscription-calculator.html') }, { label: 'Custom software', url: url('custom-software.html') }, CONTACT], chips: ['How much does it cost?', 'Who maintains it?', 'Book a consultation'] };
    if (has(t, ['maintain', 'maintenance of the software', 'who looks after', 'source code', 'handover']))
      return { html: 'You get the full <b>source code and documentation</b>. It\'s built on standard, widely used technology, so any developer or your own team can maintain it. We can also keep supporting it if you prefer.', links: [{ label: 'Custom software', url: url('custom-software.html') }], chips: DEFAULT_CHIPS };
    if (has(t, ['support', '24/7', 'helpdesk', 'help desk', 'response time']))
      return { html: 'Our helpdesk runs <b>24/7</b> with an average response time <b>under 15 minutes</b>.', links: [{ label: 'Support services', url: url('services/support-services.html') }], chips: DEFAULT_CHIPS };
    if (has(t, ['partner', 'asd', 'microsoft partner', 'certified', 'accredit']))
      return { html: 'EG Eloma is a <b>Microsoft Partner</b> and an <b>ASD Business Partner</b> (Australian Signals Directorate\'s Cyber Security Partnership Program), and we follow Essential Eight aligned security practices.', links: [{ label: 'About us', url: url('company.html') }], chips: DEFAULT_CHIPS };
    if (/^something else$/.test(t.trim()))
      return { html: 'Sure. What would you like to know? Try a service name, like <b>SEO</b>, <b>app development</b> or <b>Microsoft 365 Copilot</b>.', links: [], chips: DEFAULT_CHIPS };
    if (/^(digital )?marketing$|^marketing plans?$/.test(t.trim()))
      return { html: 'We run <b>SEO, Google &amp; Meta ads, AI Ads, social media, local listings and design</b>, with a plain-English report every month. Plans: Starter, Growth, Business and All-in-One, or single services.', links: [{ label: 'Digital marketing', url: url('digital-marketing.html') }, { label: 'Plans', url: url('plans.html') }], chips: ['SEO', 'Google ads', 'How much does it cost?'] };
    if (/^custom software$/.test(t.trim()))
      return { html: 'We build <b>custom software you own</b>: one system for your customers, quotes, jobs, stock, staff and reports, replacing the subscriptions you pay for today. We also build websites, online stores, apps, SaaS platforms, AI automation and integrations.', links: [{ label: 'Custom software', url: url('custom-software.html') }, CONTACT], chips: ['How much does it cost?', 'Who maintains it?', 'AI & automation'] };

    // score services and FAQs
    var qw = words(q).map(stem); var best = null, bestS = 0;
    KB.services.forEach(function (s) {
      var name = words(s.name).map(stem), body = words(s.keys).map(stem), sc = 0;
      qw.forEach(function (w) { if (name.indexOf(w) >= 0) sc += 3; else if (body.indexOf(w) >= 0) sc += 1; });
      if (t.indexOf(s.name.toLowerCase()) >= 0) sc += 5;
      if (sc > bestS) { bestS = sc; best = { type: 's', item: s }; }
    });
    KB.faqs.forEach(function (f) {
      var fw = words(f.q).map(stem), sc = 0;
      qw.forEach(function (w) { if (fw.indexOf(w) >= 0) sc += 2; });
      if (sc > bestS) { bestS = sc; best = { type: 'f', item: f }; }
    });
    if (best && bestS >= 3) {
      if (best.type === 's') {
        var s = best.item;
        return { html: '<b>' + esc(s.name) + '</b>: ' + esc(s.intro), links: [{ label: 'More about ' + s.name, url: url(s.url) }, CONTACT], chips: ['How much does it cost?', 'Book a consultation', 'Something else'] };
      }
      var f = best.item;
      return { html: esc(f.a), links: f.url ? [{ label: f.label || 'Learn more', url: url(f.url) }] : [CONTACT], chips: DEFAULT_CHIPS };
    }
    return { html: 'I\'m not sure I have the right answer for that, but our team will. Message us on WhatsApp, call <b>' + PHONE + '</b> from Australia, or book a free consultation and we\'ll help. You can also ask me about a specific service, like SEO, apps or Microsoft 365.', links: [{ label: 'WhatsApp us', url: waUrl(), ext: true }, { label: 'Chat with our team', act: enterTeams }, CONTACT], chips: DEFAULT_CHIPS };
  }
})();
