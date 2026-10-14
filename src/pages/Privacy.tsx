import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BUSINESS, LEGAL_UPDATED } from '../siteInfo'

const meta = {
  "title": "Privacy Policy | EG Eloma",
  "description": "How EG Eloma collects, uses, shares and protects personal information under the Australian Privacy Act, including cookies, Google services and your rights.",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://egdigital.com.au/#org",
        "name": "EG Eloma",
        "url": "https://egdigital.com.au/",
        "logo": "https://egdigital.com.au/logo.png",
        "description": "Australian-owned technology partner for Microsoft, software, marketing, communications, cloud and cybersecurity services.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Australia"
          },
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "Canada"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          },
          {
            "@type": "Country",
            "name": "New Zealand"
          }
        ]
      }
    ]
  },
  "path": "/privacy"
}

export default function Privacy() {
  return (
    <>
      <PageMeta {...meta} />
      <div className="phero">
        <div className="orb" aria-hidden="true">
          <svg viewBox="-640 -460 1280 920">
            <ellipse rx="470" ry="146" />
            <g transform="rotate(62)">
              <ellipse rx="470" ry="146" />
            </g>
            <g transform="rotate(-62)">
              <ellipse rx="470" ry="146" />
            </g>
            <circle r="6">
              <animateMotion dur="30s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
            </circle>
            <g transform="rotate(62)">
              <circle r="5.5">
                <animateMotion dur="36s" begin="-10s" repeatCount="indefinite" path="M-470 0A470 146 0 1 1 470 0A470 146 0 1 1 -470 0" />
              </circle>
            </g>
            <g transform="rotate(-62)">
              <circle r="6">
                <animateMotion dur="42s" begin="-20s" repeatCount="indefinite" path="M470 0A470 146 0 1 0 -470 0A470 146 0 1 0 470 0" />
              </circle>
            </g>
            <circle r="5">
              <animateMotion dur="30s" begin="-15s" repeatCount="indefinite" path="M470 0A470 146 0 1 1 -470 0A470 146 0 1 1 470 0" />
            </circle>
          </svg>
        </div>
        <Header />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Privacy Policy</span>
          </p>
          <h1>Privacy Policy</h1>
          <p className="lead">How EG Eloma collects, uses, shares and protects your personal information, in line with the Australian Privacy Principles.</p>
          <div className="tbar">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Australian owned
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Microsoft Partner
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              ASD Essential Eight aligned
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              24/7 support
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Fixed written quotes
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              5 countries
            </span>
          </div>
        </section>
      </div>
      <main className="wrap">
        <section className="s first">
          <article className="prose">
            <p className="legal-date">Last updated: {LEGAL_UPDATED}</p>
            <p>
              {BUSINESS.name} (ABN {BUSINESS.abn}) ("{BUSINESS.name}", "we", "us", "our") is an Australian business based at {BUSINESS.address}. We respect your privacy. This policy explains what personal information we collect, why we collect it, how we use, share and protect it, and how you can access it, correct it or make a complaint.
            </p>
            <p>
              We are bound by the <i>Privacy Act 1988</i> (Cth) (the Privacy Act), including the Australian Privacy Principles (APPs) and the Notifiable Data Breaches scheme. Where they apply to us, we also comply with the privacy laws of the other countries we serve, including the UK General Data Protection Regulation (UK GDPR), the EU GDPR, the New Zealand <i>Privacy Act 2020</i>, Canada's <i>Personal Information Protection and Electronic Documents Act</i> (PIPEDA) and applicable US state privacy laws.
            </p>
            <h2>Who this policy covers</h2>
            <p>
              This policy applies to personal information about visitors to this website, people who contact us or request a quote, our clients and their staff, our suppliers, and job applicants. It does not cover the websites or services of other organisations, including Microsoft, Google and Meta, which have their own privacy policies.
            </p>
            <h2>Personal information we collect</h2>
            <ul>
              <li>
                <b>Contact and identity details</b>, such as your name, job title, business name, email address, phone number and country.
              </li>
              <li>
                <b>Enquiry details</b>, such as your industry, the products you are interested in and anything you tell us in a form, email, chat or call.
              </li>
              <li>
                <b>Client service information</b>, such as administrator contacts, user names and work email addresses of your staff when we set up or manage services like Microsoft 365, support tickets, and the configuration of systems we manage for you.
              </li>
              <li>
                <b>Billing information</b>, such as billing contacts, invoices and payment records. Card payments are handled by our payment provider; we do not store full card numbers.
              </li>
              <li>
                <b>Technical information</b> that our hosting provider records automatically when you visit the website, such as IP address, browser type, date and time, and pages requested. We use these server logs only to keep the website secure and working.
              </li>
              <li>
                <b>Recruitment information</b>, such as your résumé and referee details, if you apply to work with us.
              </li>
            </ul>
            <p>
              We do not ask for sensitive information (such as health information, racial or ethnic origin, religious beliefs or criminal records). If you give it to us without our asking, we will only keep it if the law allows and we need it; otherwise we will securely delete it. We do not use government identifiers, such as tax file numbers or Medicare numbers, to identify you.
            </p>
            <h2>Dealing with us anonymously</h2>
            <p>
              You can browse this website without telling us who you are, and you can ask general questions without giving your name or by using a pseudonym. To give you a quote or provide services, we will need your contact details.
            </p>
            <h2>How we collect personal information</h2>
            <ul>
              <li>Directly from you, when you fill in our contact form, email, phone or meet us, or use our services and client portal.</li>
              <li>From your organisation, for example when your manager or IT administrator asks us to set up an account for you.</li>
              <li>
                From platforms you authorise us to manage, such as Microsoft 365, Google Ads, Google Business Profile, Google Analytics, Google Search Console, Meta Business Suite and telecommunications carriers.
              </li>
              <li>From publicly available sources, such as the Australian Business Register (ABN Lookup) and business websites.</li>
            </ul>
            <p>
              If we receive personal information we did not ask for, we will check whether we could have collected it lawfully. If we could not, we will destroy or de-identify it as soon as practicable.
            </p>
            <h2>Cookies, analytics, Meta and Google services</h2>
            <p>
              This website uses the Meta Pixel, a tool from Meta Platforms (Facebook and Instagram), to measure how well our ads work. When you visit our pages, submit our contact form or tap our phone number, the Meta Pixel sends Meta details such as the page you viewed, the action you took, your IP address and browser information, and Meta sets cookies (such as <code>_fbp</code>) in your browser. Meta may match this with your Meta account and use it to show you our ads and to report results to us. We do not send Meta the contents of your enquiry. Meta's use of this data is described in the{" "}
              <a href="https://www.facebook.com/privacy/policy/" rel="noopener">Meta Privacy Policy</a>
              {", and you can control ads based on your activity in your Meta "}
              <a href="https://accountscenter.facebook.com/ad_preferences" rel="noopener">ad preferences</a>
              {" or by blocking cookies in your browser settings."}
            </p>
            <p>
              We do not use social media plugins or show ads on this website. Our fonts are hosted on our own website, so loading our pages does not send your IP address to Google Fonts.
            </p>
            <p>If we start using Google Analytics, Google Ads conversion tracking or remarketing, or Google reCAPTCHA, we will:</p>
            <ul>
              <li>update this policy before we do, and name the tools we use;</li>
              <li>
                explain that Google uses cookies and similar technologies to collect and process data, as described in{" "}
                <a href="https://policies.google.com/technologies/partner-sites" rel="noopener">
                  How Google uses information from sites or apps that use its services
                </a>
                ;
              </li>
              <li>
                ask for your consent before setting non-essential cookies where the law requires it, including for visitors in the UK, European Economic Area and Switzerland, and pass your choice to Google using Google Consent Mode, as Google's{" "}
                <a href="https://www.google.com/about/company/user-consent-policy/" rel="noopener">EU user consent policy</a>
                {" requires;"}
              </li>
              <li>never use remarketing or personalised advertising based on sensitive information.</li>
            </ul>
            <p>
              You can control how Google personalises ads in{" "}
              <a href="https://myadcenter.google.com/" rel="noopener">My Ad Center</a>
              {", block Google Analytics with the "}
              <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">Google Analytics opt-out browser add-on</a>
              , and delete or block cookies in your browser settings.
            </p>
            <h3>When we manage your Google, Microsoft or Meta accounts</h3>
            <p>
              When you ask us to manage accounts such as Google Ads, Google Business Profile, Google Analytics, Microsoft 365 or Meta Business Suite, we access the data in those accounts only to provide the services you have asked for, under your instructions and our agreement with you. We do not use that data for our own marketing and we do not sell it. The platform provider's own privacy policy applies to the data it processes, for example the{" "}
              <a href="https://policies.google.com/privacy" rel="noopener">Google Privacy Policy</a>
              {" and the "}
              <a href="https://privacy.microsoft.com/privacystatement" rel="noopener">Microsoft Privacy Statement</a>
              .
            </p>
            <h2>How we use personal information</h2>
            <ul>
              <li>To respond to your enquiry and prepare quotes.</li>
              <li>To provide, set up, support and improve the services you have asked for.</li>
              <li>To manage our relationship with you, including billing and account administration.</li>
              <li>To keep our systems, our clients' systems and this website secure, and to prevent fraud and misuse.</li>
              <li>To assess job applications.</li>
              <li>To meet our legal, tax and regulatory obligations.</li>
              <li>To send you information about our services, only where you have agreed or the law allows (see Direct marketing below).</li>
            </ul>
            <p>We only use or disclose personal information for another purpose if you consent, if you would reasonably expect it, or if the Privacy Act otherwise allows it.</p>
            <h2>Direct marketing</h2>
            <p>
              We only send marketing emails or SMS messages with your consent, as required by the <i>Spam Act 2003</i> (Cth). Every marketing message identifies us and includes a simple way to unsubscribe, and we act on unsubscribe requests within five working days. We do not make marketing calls to numbers on the Do Not Call Register unless the law allows it. You can opt out at any time by using the unsubscribe link or by contacting us. We do not sell or rent marketing lists.
            </p>
            <h2>Automated decisions</h2>
            <p>
              We do not use computer programs to make decisions about you, using your personal information, that could significantly affect your rights or interests. If that changes, we will update this policy to explain what decisions are made and what information is used, as the Privacy Act will require from 10 December 2026.
            </p>
            <h2>Who we share personal information with</h2>
            <ul>
              <li>Service providers who help us run our business, such as website hosting, cloud, email, phone, payment, accounting and IT security providers.</li>
              <li>
                Platform providers, when you ask us to act for you, such as Microsoft (licences and Microsoft 365 setup), Google and Meta (advertising and business listings) and telecommunications carriers (phone numbers and number porting).
              </li>
              <li>Related companies within Eloma Group that help us deliver our services.</li>
              <li>Our professional advisers, such as accountants, auditors, lawyers and insurers.</li>
              <li>Government agencies, regulators, courts or law enforcement, where the law requires or allows it.</li>
              <li>A buyer or successor of our business, if our business or assets are sold, under confidentiality obligations.</li>
            </ul>
            <p>We require our service providers to protect personal information and use it only for the services they provide to us. We do not sell personal information.</p>
            <h2>Sending information overseas</h2>
            <p>
              Some of our service providers and platform providers, including Microsoft, Google and Meta, store or process data outside Australia, including in the United States and other countries where they or our related companies operate. Before we disclose personal information overseas, we take reasonable steps, as required by APP 8, to ensure the recipient handles it consistently with the APPs, for example through contracts and by choosing reputable providers.
            </p>
            <h2>How we protect personal information</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, interference, loss, and unauthorised access, change or disclosure. These include multi-factor authentication, least-privilege access, encryption in transit and at rest where available, regular backups, security monitoring, confidentiality obligations for staff and contractors, and security practices aligned with the ASD Essential Eight. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.
            </p>
            <h2>Data breaches</h2>
            <p>
              If we suspect a data breach, we act quickly to contain it and assess the risk. If an eligible data breach is likely to result in serious harm, we will notify the people affected and the Office of the Australian Information Commissioner (OAIC), as required by the Notifiable Data Breaches scheme, and the relevant overseas regulator where the law requires.
            </p>
            <h2>How long we keep information</h2>
            <p>
              We keep personal information only for as long as we need it for the purposes in this policy or as the law requires. For example, we keep business and tax records for at least five years, as Australian tax law requires. When we no longer need personal information, we securely destroy or de-identify it.
            </p>
            <h2>Accessing and correcting your information</h2>
            <p>
              You can ask to see the personal information we hold about you and ask us to correct it if it is inaccurate, out of date, incomplete, irrelevant or misleading. Contact us using the details below. We will need to confirm your identity, and we will respond within 30 days. There is no charge to make a request. If giving you access involves significant cost, we will tell you about any reasonable charge before we proceed. If we refuse a request, we will explain why in writing, as the Privacy Act allows, and tell you how to complain.
            </p>
            <h2>If you are outside Australia</h2>
            <ul>
              <li>
                <b>UK and European Economic Area:</b> we process personal information to perform a contract with you, for our legitimate interests in running and promoting our business, to meet legal obligations, or with your consent. You can ask to access, correct, delete, restrict or move your information, object to processing, and withdraw consent at any time. You can complain to the UK Information Commissioner's Office or your local data protection authority.
              </li>
              <li>
                <b>New Zealand:</b> you have rights to access and correct your information under the <i>Privacy Act 2020</i> and can complain to the Office of the Privacy Commissioner.
              </li>
              <li>
                <b>Canada:</b> you can access and correct your information and withdraw consent under PIPEDA, and can complain to the Office of the Privacy Commissioner of Canada.
              </li>
              <li>
                <b>United States:</b> we do not sell personal information or share it for cross-context behavioural advertising. Depending on the state you live in, you may have the right to access, correct or delete your information, and we will not discriminate against you for using these rights.
              </li>
            </ul>
            <h2>Children</h2>
            <p>
              Our services are for businesses and organisations. This website is not directed at children, and we do not knowingly collect personal information from children under 16. If you believe a child has given us personal information, please contact us and we will delete it.
            </p>
            <h2>Complaints</h2>
            <p>
              If you have a concern about how we have handled your personal information, please contact our Privacy Officer using the details below. We will acknowledge your complaint promptly, investigate it and give you a written response within 30 days. If you are not satisfied with our response, you can complain to the Office of the Australian Information Commissioner at{" "}
              <a href="https://www.oaic.gov.au/privacy/privacy-complaints" rel="noopener">oaic.gov.au</a>
              {" or on 1300 363 992, or to the privacy regulator in your country."}
            </p>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time, for example when the law changes or we start using new tools. The latest version will always be on this page, with the date it was last updated. If we make a significant change, we will tell clients directly.
            </p>
            <h2>Contact us</h2>
            <p>
              Privacy Officer, {BUSINESS.name} (ABN {BUSINESS.abn})
              <br />
              {BUSINESS.address}
              <br />
              {"Email: "}
              <a href={'mailto:' + BUSINESS.email}>{BUSINESS.email}</a>
              <br />
              {"Phone: "}
              <a href={BUSINESS.phone.href}>{BUSINESS.phone.label}</a>
            </p>
            <p>
              {"See also our "}
              <Link to="/terms">Website Terms of Use</Link>.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
