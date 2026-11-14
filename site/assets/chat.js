/* EG Eloma chat assistant
 * Works in two modes:
 *  1. Instant answers (default): matches questions against the site's own service and FAQ content.
 *  2. AI mode: set AI_ENDPOINT below to your deployed chat worker URL to answer with Claude.
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
  var logo = ROOT + 'assets/logo.png';
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
    '<a class="egc-wa egc-teams" target="_blank" rel="noopener" href="' + teamsUrl() + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="11" height="11" rx="2"/><path d="M6 10h5M8.5 10v5"/><circle cx="18" cy="6" r="2"/><path d="M16 11h4a1 1 0 0 1 1 1v3a3 3 0 0 1-5 2"/></svg>Teams</a></div>' +
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
      links.forEach(function (k) { var a = el('a', null, esc(k.label) + ' →'); a.href = k.url; if (k.ext) { a.target = '_blank'; a.rel = 'noopener'; } l.appendChild(a); });
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
  }
  function toggle(force) {
    open = typeof force === 'boolean' ? force : !open;
    panel.hidden = !open; tip.hidden = true;
    launcher.setAttribute('aria-expanded', open);
    launcher.classList.toggle('egc-on', open);
    if (open) { start(); setTimeout(function () { input.focus(); }, 50); }
  }
  launcher.onclick = function () { toggle(); };
  tip.onclick = function () { toggle(true); };
  panel.querySelector('.egc-x').onclick = function () { toggle(false); launcher.focus(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) { toggle(false); launcher.focus(); } });
  form.onsubmit = function (e) { e.preventDefault(); var v = input.value.trim(); if (v) { input.value = ''; send(v); } };

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
      return { html: 'Happy to connect you with the team. In Australia, call <b>' + PHONE + '</b> (free call). From anywhere in the world, message us on <b>WhatsApp</b> or <b>Microsoft Teams</b>. You can also email <b>connect@egeloma.com.au</b>, or book a free consultation. We reply within one business day, usually much sooner.', links: [{ label: 'WhatsApp us', url: waUrl(), ext: true }, { label: 'Chat on Teams', url: teamsUrl(), ext: true }, CONTACT], chips: ['Custom software', 'Digital marketing', 'Pricing'] };
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
    return { html: 'I\'m not sure I have the right answer for that, but our team will. Message us on WhatsApp, call <b>' + PHONE + '</b> from Australia, or book a free consultation and we\'ll help. You can also ask me about a specific service, like SEO, apps or Microsoft 365.', links: [{ label: 'WhatsApp us', url: waUrl(), ext: true }, { label: 'Chat on Teams', url: teamsUrl(), ext: true }, CONTACT], chips: DEFAULT_CHIPS };
  }
})();
