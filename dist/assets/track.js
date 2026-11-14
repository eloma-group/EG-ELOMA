/* EG Eloma tracking (loaded on every page by scripts/build.mjs, after the GTM and Meta Pixel base code in <head>).
   - Google Tag Manager: every page pushes "virtual_page_view" to the dataLayer (the GTM triggers listen for it).
   - Meta Pixel: phone-link clicks send Contact; a sent enquiry sends Lead.
   - Google Ads: a sent enquiry sends the "Submit lead form" conversion (AW-18565910760). */
(function () {
  var ADS_ID = 'AW-18565910760', ADS_LABEL = 'ey8OCOfKqLUdEOih9ZRF', LEAD_FLAG = 'eg-lead';
  var dl = (window.dataLayer = window.dataLayer || []);
  var fbq = function () { if (window.fbq) window.fbq.apply(null, arguments); };

  dl.push({ event: 'virtual_page_view', page_path: location.pathname, page_location: location.href, page_title: document.title });

  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a[href^="tel:"]')) fbq('track', 'Contact');
  });

  // The site has no Google Ads base tag: gtag.js for the account loads the first time a conversion is sent
  // (it shares the dataLayer with GTM). gtag.js only reads `arguments` objects, not plain arrays.
  function gtag() { dl.push(arguments); }
  function adsConversion() {
    if (!document.querySelector('script[src*="' + ADS_ID + '"]')) {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
      document.head.appendChild(s);
      gtag('js', new Date());
      gtag('config', ADS_ID);
    }
    gtag('event', 'conversion', { send_to: ADS_ID + '/' + ADS_LABEL, value: 1.0, currency: 'AUD' });
  }

  window.egTrack = {
    // A form was sent: count the Meta Pixel Lead and the Google Ads conversion.
    lead: function () { fbq('track', 'Lead'); adsConversion(); },
    // The contact form sets this before going to /thank-you, which counts the lead once (not on reloads or direct visits).
    flagLead: function () { try { sessionStorage.setItem(LEAD_FLAG, '1'); } catch (e) {} }
  };

  if (location.pathname === '/thank-you') {
    try {
      if (sessionStorage.getItem(LEAD_FLAG)) { sessionStorage.removeItem(LEAD_FLAG); window.egTrack.lead(); }
    } catch (e) {}
  }
})();
