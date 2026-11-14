/* EG Eloma - Updates & advisories
   HOW TO ADD AN UPDATE
   1. Copy one { ... } block and paste it at the TOP of the list (newest first).
   2. Change the details. Keep the double quotes "like this" and the comma between blocks.
   3. Upload this file to /assets/ on the website. The Updates page and the home page update by themselves.

   Fields
     id        short unique name, letters and dashes only (used in the link: updates.html#id)
     date      YYYY-MM-DD
     category  "microsoft" | "security" | "news"
     priority  "action" (Action required) | "recommended" (Recommended) | "info" (For information)
     title     headline
     summary   2-3 sentences: what it means for the client, in plain English
     action    what the client should do
     link      optional: our own page to read more or act, e.g. "contact#book" (or "")
     linkText  optional: button text for link (or "")
     source    optional: name of the official source, e.g. "Microsoft" or "cyber.gov.au" (or "")
     sourceUrl optional: full https link to the official source (or "")
*/
window.EG_UPDATES = [
  {
    "id": "quote-with-files",
    "date": "2026-11-13",
    "category": "news",
    "priority": "info",
    "title": "New: request a quote and attach your files",
    "summary": "You can now request a fixed written quote online and attach screenshots of your current software, subscription invoices or a brief. It helps us give you an accurate quote faster.",
    "action": "No action needed. Try it when you're ready for a quote.",
    "link": "quote",
    "linkText": "Request a quote",
    "source": "",
    "sourceUrl": ""
  },
  {
    "id": "windows-10-end-of-support",
    "date": "2026-11-10",
    "category": "microsoft",
    "priority": "action",
    "title": "Still using Windows 10? Plan your upgrade now",
    "summary": "Microsoft ended support for Windows 10 on 14 October 2025, so those computers no longer get free security updates. Microsoft 365 apps still get security updates on Windows 10 until October 2028, but the computer itself is exposed.",
    "action": "Check which computers still run Windows 10 and plan an upgrade or replacement. We can check this for you.",
    "link": "contact#book",
    "linkText": "Book a free check",
    "source": "Microsoft",
    "sourceUrl": "https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-10-support"
  },
  {
    "id": "fake-microsoft-365-sign-in-emails",
    "date": "2026-11-05",
    "category": "security",
    "priority": "recommended",
    "title": "Watch out for fake Microsoft 365 sign-in emails",
    "summary": "Scam emails that look like Microsoft 365 messages (\"your mailbox is full\", \"shared document\", \"password expires\") try to steal staff passwords. They often use real Microsoft logos and urgent wording.",
    "action": "Remind staff never to sign in from an email link, and make sure multi-factor authentication is on for every account.",
    "link": "services/cybersecurity",
    "linkText": "Our security services",
    "source": "Scamwatch",
    "sourceUrl": "https://www.scamwatch.gov.au/"
  },
  {
    "id": "essential-eight-where-to-start",
    "date": "2026-10-28",
    "category": "security",
    "priority": "info",
    "title": "Essential Eight: where small businesses should start",
    "summary": "The ASD's Essential Eight is a set of eight security strategies. For most small businesses the best first steps are multi-factor authentication, keeping software patched and regular backups you've tested.",
    "action": "Ask us for a free Essential Eight check to see where your business stands.",
    "link": "contact#book",
    "linkText": "Book a free check",
    "source": "cyber.gov.au",
    "sourceUrl": "https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight/essential-eight-maturity-model"
  },
  {
    "id": "monthly-microsoft-security-updates",
    "date": "2026-10-14",
    "category": "microsoft",
    "priority": "info",
    "title": "How we handle Microsoft's monthly security updates",
    "summary": "Microsoft releases security updates on the second Tuesday of each month. For clients on our support plans, we test and roll them out to managed computers and servers, and follow up on any urgent fixes.",
    "action": "No action needed if you're on an EG Eloma support plan. Otherwise, make sure automatic updates are switched on.",
    "link": "services/support-services",
    "linkText": "About our support plans",
    "source": "",
    "sourceUrl": ""
  }
];
