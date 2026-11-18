// Website health check on /digital-marketing: runs Google PageSpeed Insights (Lighthouse) for the visitor's URL
// straight from the browser. While it runs, the sample report turns into a live checklist; the results open as a
// dashboard with an overall gauge, four category scores, load timings and a plain-English list of fixes.
// The API key (restricted to egeloma.com in Google Cloud) goes in data-psi-key on the section.
(function () {
  var box = document.getElementById('website-check')
  if (!box) return
  var $ = function (s) { return box.querySelector(s) }
  var form = $('.hc-form'), input = $('#hc-url'), btn = $('.hc-go'), btnText = $('.hc-go span')
  var seg = $('.hc-seg'), hint = $('.hc-hint'), err = $('.hc-err')
  var preview = $('.hc-preview'), winUrl = $('.hc-win-url'), sample = $('.hc-sample'), scan = $('.hc-scan')
  var scanHost = $('.hc-scan-host'), steps = box.querySelectorAll('.hc-steps li'), prog = $('.hc-prog span')
  var result = $('.hc-result')
  var KEY = box.getAttribute('data-psi-key') || ''

  var CATS = [
    { id: 'performance', key: 'speed', name: 'Speed', about: 'How fast your pages appear and respond to taps.' },
    { id: 'seo', key: 'google', name: 'Google visibility', about: 'Whether Google can find, read and show your pages.' },
    { id: 'accessibility', key: 'access', name: 'Accessibility', about: 'Whether every visitor can read and use your site.' },
    { id: 'best-practices', key: 'security', name: 'Security', about: 'HTTPS, browser errors and safe, up-to-date code.' },
  ]
  var METRICS = [
    { id: 'first-contentful-paint', name: 'until something appears' },
    { id: 'largest-contentful-paint', name: 'until the main content shows' },
    { id: 'total-blocking-time', name: 'the page is frozen while loading' },
    { id: 'cumulative-layout-shift', name: 'layout shift (lower is better)' },
  ]
  // Lighthouse audit id → what it means for a business owner. null hides an audit that is not worth showing.
  var PLAIN = {
    'render-blocking-resources': 'Files load before anything shows, so visitors stare at a blank screen',
    'uses-optimized-images': 'Images are much larger files than they need to be',
    'modern-image-formats': 'Images use old formats; WebP or AVIF would load far faster',
    'uses-responsive-images': 'Phones download desktop-sized images',
    'offscreen-images': 'Images further down the page load before they are needed',
    'efficient-animated-content': 'Animated GIFs are heavy; video files would load faster',
    'unused-javascript': 'The site loads code it never uses',
    'unused-css-rules': 'The site loads styling it never uses',
    'unminified-javascript': 'Code files are not compressed (minified)',
    'unminified-css': 'Style files are not compressed (minified)',
    'server-response-time': 'Your web server or hosting is slow to respond',
    'uses-text-compression': 'Files are sent without compression',
    'uses-long-cache-ttl': 'Returning visitors re-download files they already have',
    'cache-insight': 'Returning visitors re-download files they already have',
    'total-byte-weight': 'The page is heavy to download, especially on mobile data',
    'dom-size': 'The page is very large and complex for browsers to build',
    'dom-size-insight': 'The page is very large and complex for browsers to build',
    'bootup-time': 'Too much code runs while the page is loading',
    'mainthread-work-breakdown': 'The browser is kept busy, so taps and scrolls feel slow',
    'third-party-summary': 'Outside scripts (chat, ads, trackers) are slowing the page',
    'third-parties-insight': 'Outside scripts (chat, ads, trackers) are slowing the page',
    'font-display': 'Text stays invisible while fonts load',
    'font-display-insight': 'Text stays invisible while fonts load',
    'redirects': 'The page bounces through redirects before loading',
    'lcp-lazy-loaded': 'The main image is set to load late',
    'prioritize-lcp-image': 'The main image is not loaded first',
    'lcp-discovery-insight': 'The main image is not loaded first',
    'image-delivery-insight': 'Images are much larger files than they need to be',
    'render-blocking-insight': 'Files load before anything shows, so visitors stare at a blank screen',
    'document-latency-insight': 'Your web server or hosting is slow to respond',
    'layout-shift-elements': 'Parts of the page move while it loads',
    'cls-culprits-insight': 'Parts of the page move while it loads',
    'unsized-images': 'Images have no set size, so the page jumps as they load',
    'legacy-javascript': 'Old-style code is sent to modern browsers',
    'legacy-javascript-insight': 'Old-style code is sent to modern browsers',
    'duplicated-javascript': 'The same code is loaded more than once',
    'duplicated-javascript-insight': 'The same code is loaded more than once',
    'meta-description': 'No page description for Google to show in search results',
    'document-title': 'The page has no title for Google and browser tabs',
    'is-crawlable': 'Google is blocked from indexing this page',
    'robots-txt': 'Your robots.txt file has errors',
    'link-text': 'Links say things like “click here” instead of where they go',
    'crawlable-anchors': 'Some links cannot be followed by Google',
    'hreflang': 'Language settings for other countries are wrong',
    'canonical': 'The page points Google at the wrong main address',
    'http-status-code': 'The page returns an error code to Google',
    'structured-data': null,
    'image-alt': 'Images have no text description for Google and screen readers',
    'viewport': 'The page is not set up for phone screens',
    'font-size': 'Text is too small to read on a phone',
    'tap-targets': 'Buttons and links are too small or close together on phones',
    'target-size': 'Buttons and links are too small or close together on phones',
    'color-contrast': 'Some text is hard to read against its background',
    'label': 'Form fields have no labels',
    'button-name': 'Some buttons have no readable name',
    'link-name': 'Some links have no readable name',
    'heading-order': 'Headings are out of order, which confuses Google and screen readers',
    'html-has-lang': 'The page does not say what language it is in',
    'is-on-https': 'Parts of the site are not served securely over HTTPS',
    'redirects-http': 'The insecure http:// address does not forward to https://',
    'errors-in-console': 'The page has errors showing in the browser',
    'deprecations': 'The site uses browser features that are being removed',
    'inspector-issues': 'The browser flags problems with the page',
    'image-aspect-ratio': 'Images are stretched or squashed',
    'image-size-responsive': 'Images look blurry on sharp screens',
    'no-vulnerable-libraries': 'The site uses code libraries with known security holes',
    'csp-xss': 'No protection against script injection attacks',
    'aria-allowed-attr': 'Hidden labels for screen readers are set up wrongly',
    'aria-allowed-role': 'Hidden labels for screen readers are set up wrongly',
    'aria-valid-attr': 'Hidden labels for screen readers are set up wrongly',
    'aria-valid-attr-value': 'Hidden labels for screen readers are set up wrongly',
    'aria-roles': 'Hidden labels for screen readers are set up wrongly',
    'aria-required-attr': 'Hidden labels for screen readers are set up wrongly',
    'aria-required-children': 'Hidden labels for screen readers are set up wrongly',
    'aria-required-parent': 'Hidden labels for screen readers are set up wrongly',
    'aria-prohibited-attr': 'Hidden labels for screen readers are set up wrongly',
    'aria-hidden-focus': 'Keyboard users can land on things that are hidden',
    'aria-hidden-body': 'The whole page is hidden from screen readers',
    'aria-command-name': 'Some controls have no name screen readers can read',
    'aria-input-field-name': 'Some controls have no name screen readers can read',
    'aria-toggle-field-name': 'Some controls have no name screen readers can read',
    'aria-progressbar-name': 'Some controls have no name screen readers can read',
    'aria-meter-name': 'Some controls have no name screen readers can read',
    'aria-tooltip-name': 'Some controls have no name screen readers can read',
    'aria-dialog-name': 'Some controls have no name screen readers can read',
    'select-name': 'Form fields have no labels',
    'input-button-name': 'Some buttons have no readable name',
    'list': 'Lists are built incorrectly for screen readers',
    'listitem': 'Lists are built incorrectly for screen readers',
    'definition-list': 'Lists are built incorrectly for screen readers',
    'frame-title': 'Embedded frames (maps, videos) have no title',
    'landmark-one-main': 'The main content area is not marked for screen readers',
    'bypass': 'Keyboard users cannot skip past the menu',
    'skip-link': 'Keyboard users cannot skip past the menu',
    'meta-viewport': 'Visitors cannot zoom in on phones',
    'duplicate-id-aria': 'Some page labels are used more than once',
    'td-headers-attr': 'Tables are hard for screen readers to follow',
    'th-has-data-cells': 'Tables are hard for screen readers to follow',
    'video-caption': 'Videos have no captions',
    'non-composited-animations': 'Animations make the page stutter',
    'uses-passive-event-listeners': 'Scrolling code makes scrolling feel slow',
    'no-document-write': 'Old loading code delays the page',
    'network-dependency-tree-insight': 'Files load one after another instead of together',
    'forced-reflow-insight': 'Code makes the browser redo the layout while loading',
    'viewport-insight': 'The page is not set up for phone screens',
    'inp-breakdown-insight': 'The page is slow to react when visitors tap',
    'third-party-cookies': 'The site relies on third-party cookies that browsers are blocking',
    'geolocation-on-start': 'The site asks for the visitor’s location as soon as it opens',
    'notification-on-start': 'The site asks to send notifications as soon as it opens',
    'paste-preventing-inputs': 'Visitors cannot paste into some form fields',
    'bf-cache': 'The back button reloads the page instead of showing it instantly',
    'long-tasks': null,
    'valid-source-maps': null,
  }

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  var band = function (n) { return n >= 90 ? 'good' : n >= 50 ? 'ok' : 'poor' }
  var WORD = { good: 'Good', ok: 'Needs work', poor: 'Poor' }

  form.addEventListener('change', function (e) {
    if (e.target.name !== 'strategy') return
    seg.classList.toggle('is-desktop', e.target.value === 'desktop')
    hint.textContent = hint.getAttribute('data-hint-' + e.target.value)
  })

  var normalise = function (raw) {
    var v = raw.trim()
    if (!v) return null
    if (!/^https?:\/\//i.test(v)) v = 'https://' + v
    try {
      var u = new URL(v)
      if (!/\.[a-z]{2,}$/i.test(u.hostname) || /^(localhost|127\.|10\.|192\.168\.)/.test(u.hostname)) return null
      return u
    } catch (_) { return null }
  }
  var showErr = function (msg) { err.textContent = msg; err.hidden = !msg }

  var timer
  var setBusy = function (on, host) {
    btn.disabled = on
    input.readOnly = on
    btnText.textContent = on ? 'Checking…' : 'Check my site'
    preview.classList.toggle('is-busy', on)
    sample.hidden = on
    scan.hidden = !on
    clearInterval(timer)
    if (!on) return
    winUrl.textContent = scanHost.textContent = host
    var t0 = Date.now()
    var tick = function () {
      var s = (Date.now() - t0) / 1000
      var at = Math.min(steps.length - 1, Math.floor(s / 5.5))
      for (var i = 0; i < steps.length; i++) steps[i].className = i < at ? 'is-done' : i === at ? 'is-on' : ''
      prog.style.width = Math.min(94, 100 * (1 - Math.exp(-s / 18))) + '%'
    }
    tick()
    timer = setInterval(tick, 300)
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    showErr('')
    var u = normalise(input.value)
    if (!u) { showErr('Please enter a website address, like yourbusiness.com.au'); input.focus(); return }
    var host = u.hostname.replace(/^www\./, '')
    var strategy = form.querySelector('input[name=strategy]:checked').value
    var q = 'url=' + encodeURIComponent(u.href) + '&strategy=' + strategy + '&locale=en-AU' +
      CATS.map(function (c) { return '&category=' + c.id }).join('') + (KEY ? '&key=' + encodeURIComponent(KEY) : '')
    result.hidden = true
    setBusy(true, host)
    window.dataLayer && window.dataLayer.push({ event: 'website_check', check_device: strategy })
    fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?' + q)
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, status: r.status, j: j } }) })
      .then(function (r) {
        if (!r.ok || !r.j.lighthouseResult) {
          setBusy(false)
          winUrl.textContent = 'yourbusiness.com.au'
          var m = (r.j.error && r.j.error.message) || ''
          if (r.status === 429) showErr('A lot of people are running checks right now. Please try again in a minute.')
          else if (/FAILED_DOCUMENT_REQUEST|ERRORED_DOCUMENT_REQUEST|DNS|NO_FCP|unreachable/i.test(m)) showErr('We couldn’t load ' + host + '. Check the address is right and the site is live, then try again.')
          else showErr('The check didn’t finish. Please try again, or call 1800 054 555 for a free manual review.')
          return
        }
        for (var i = 0; i < steps.length; i++) steps[i].className = 'is-done'
        prog.style.width = '100%'
        setTimeout(function () { setBusy(false); winUrl.textContent = host; render(r.j.lighthouseResult, strategy, host) }, 500)
      })
      .catch(function () {
        setBusy(false)
        showErr('The check couldn’t connect. Check your internet connection and try again.')
      })
  })

  var ring = function (n) {
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="27" class="hc-ring-t"/>' +
      '<circle cx="32" cy="32" r="27" class="hc-ring-a" pathLength="100" stroke-dasharray="0 100" data-v="' + n + '"/>' +
      '<text x="32" y="39" text-anchor="middle">' + n + '</text></svg>'
  }

  var render = function (lh, strategy, host) {
    var audits = lh.audits || {}
    var cats = CATS.filter(function (c) { return lh.categories[c.id] && lh.categories[c.id].score != null })
      .map(function (c) { return { c: c, n: Math.round(lh.categories[c.id].score * 100) } })
    var overall = Math.round(cats.reduce(function (s, x) { return s + x.n }, 0) / (cats.length || 1))
    var ob = band(overall)
    var verdict = ob === 'good' ? 'Your site is in great shape. A few small tweaks could still help.'
      : ob === 'ok' ? 'Your site works, but it is likely losing visitors and Google ranking.'
      : 'Serious problems are costing you visitors and enquiries.'

    var metrics = METRICS.filter(function (m) { return audits[m.id] && audits[m.id].displayValue }).map(function (m) {
      var a = audits[m.id]
      return '<li class="hc-' + band(Math.round((a.score || 0) * 100)) + '"><b>' + esc(a.displayValue.replace(/ /g, ' ')) + '</b><span>' + esc(m.name) + '</span></li>'
    }).join('')

    // Failing audits from every category, most important first.
    var seen = {}, fixes = []
    CATS.forEach(function (c) {
      var cat = lh.categories[c.id]
      if (!cat) return
      cat.auditRefs.forEach(function (ref) {
        if (ref.group === 'metrics' || ref.group === 'hidden' || seen[ref.id]) return
        var a = audits[ref.id]
        if (!a || a.score == null || a.score >= 0.9 || /informative|notApplicable|manual/.test(a.scoreDisplayMode)) return
        if (PLAIN[ref.id] === null) return
        var text = PLAIN[ref.id] || a.title.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/`/g, '')
        if (seen[text]) return
        seen[ref.id] = seen[text] = 1
        var saves = (a.details && a.details.overallSavingsMs) || (a.metricSavings && a.metricSavings.LCP) || 0
        var rank = (1 - a.score) * (1 + ref.weight / 4) + saves / 350
        fixes.push({ key: c.key, cat: c.name, text: text, saves: saves, rank: rank })
      })
    })
    fixes.sort(function (a, b) { return b.rank - a.rank })
    fixes.forEach(function (f, i) { f.sev = f.rank >= 3 || (i < 2 && f.rank >= 1.5) ? 'h' : f.rank >= 1 ? 'm' : 'l' })
    var SEV = { h: 'High', m: 'Medium', l: 'Low' }

    var tabs = [{ key: 'all', name: 'All', n: fixes.length }].concat(cats.map(function (x) {
      return { key: x.c.key, name: x.c.name, n: fixes.filter(function (f) { return f.key === x.c.key }).length }
    })).filter(function (t) { return t.key === 'all' || t.n })

    result.innerHTML =
      '<div class="hc-r-head"><div><p>Report · tested on a ' + (strategy === 'mobile' ? 'phone' : 'computer') + '</p><h3>' + esc(host) + '</h3></div>' +
      '<button type="button" class="hc-again"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>Check another site</button></div>' +
      '<div class="hc-top"><div class="hc-overall hc-' + ob + '">' +
        '<div class="hc-gauge"><svg viewBox="0 0 120 70" aria-hidden="true"><path d="M10 62a50 50 0 0 1 100 0" class="hc-g-track" pathLength="100"/><path d="M10 62a50 50 0 0 1 100 0" class="hc-g-arc" pathLength="100" stroke-dasharray="0 100" data-v="' + overall + '"/></svg>' +
        '<b>' + overall + '<small>/100</small></b></div>' +
        '<p class="hc-verdict">Overall: ' + WORD[ob] + '</p><p>' + esc(verdict) + '</p></div>' +
      '<div class="hc-cats">' + cats.map(function (x) {
        var b = band(x.n)
        return '<div class="hc-cat hc-' + b + '">' + ring(x.n) + '<div><b>' + esc(x.c.name) + '</b><em>' + WORD[b] + '</em><p>' + esc(x.c.about) + '</p></div></div>'
      }).join('') + '</div></div>' +
      (metrics ? '<ul class="hc-metrics" aria-label="Load timings">' + metrics + '</ul>' : '') +
      '<div><div class="hc-fix-h"><h4>' + (fixes.length ? 'What to fix first' : 'What to fix') + '</h4>' +
        (fixes.length ? '<div class="hc-tabs" role="group" aria-label="Filter fixes">' + tabs.map(function (t, i) {
          return '<button type="button" data-k="' + t.key + '" aria-pressed="' + (i === 0) + '">' + esc(t.name) + '<span>' + t.n + '</span></button>'
        }).join('') + '</div>' : '') + '</div>' +
        (fixes.length ? '<ol class="hc-fixes"></ol>' : '<p class="hc-none">No major problems found. Nice work.</p>') + '</div>' +
      '<div class="hc-cta"><div><b>Want these fixed for you?</b><p>We’ll walk you through the full report and quote the fixes. Free, no obligation.</p></div>' +
        '<div class="hc-cta-act"><a class="btn btn-primary" href="contact.html#book">Book a free review →</a><a class="btn hc-cta-2" href="tel:1800054555">Call 1800 054 555</a></div></div>' +
      '<p class="hc-note">Scores come from Google Lighthouse and can move a few points between runs.</p>'

    var list = result.querySelector('.hc-fixes')
    var show = function (k) {
      if (!list) return
      var rows = fixes.filter(function (f) { return k === 'all' || f.key === k }).slice(0, k === 'all' ? 8 : 20)
      list.innerHTML = rows.map(function (f) {
        return '<li><span class="hc-sev hc-sev-' + f.sev + '">' + SEV[f.sev] + '</span><div>' + esc(f.text) + '<small>' + esc(f.cat) + '</small></div>' +
          (f.saves >= 300 ? '<em>save ~' + (f.saves / 1000).toFixed(1) + 's</em>' : '<span></span>') + '</li>'
      }).join('') + (k === 'all' && fixes.length > 8 ? '<li class="hc-more"><span></span><div><small>+ ' + (fixes.length - 8) + (fixes.length - 8 === 1 ? ' smaller issue' : ' smaller issues') + ' we can go through with you</small></div><span></span></li>' : '')
    }
    show('all')
    result.querySelectorAll('.hc-tabs button').forEach(function (b) {
      b.addEventListener('click', function () {
        result.querySelectorAll('.hc-tabs button').forEach(function (x) { x.setAttribute('aria-pressed', x === b) })
        show(b.getAttribute('data-k'))
      })
    })
    result.querySelector('.hc-again').addEventListener('click', function () {
      result.hidden = true
      input.value = ''
      winUrl.textContent = 'yourbusiness.com.au'
      box.scrollIntoView({ behavior: 'smooth', block: 'start' })
      input.focus({ preventScroll: true })
    })

    result.hidden = false
    // Animate the gauge and rings from zero once they are on screen.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        result.querySelectorAll('[data-v]').forEach(function (el) { el.setAttribute('stroke-dasharray', el.getAttribute('data-v') + ' 100') })
      })
    })
    result.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
})()
