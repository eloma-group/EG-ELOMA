import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BUSINESS, LEGAL_UPDATED } from '../siteInfo'

const meta = {
  "title": "Website Terms of Use | EG Eloma",
  "description": "The terms that apply when you use the EG Eloma website, including acceptable use, intellectual property, the Australian Consumer Law and governing law.",
  "crumb": "Website Terms of Use",
  "path": "/terms"
}

export default function Terms() {
  return (
    <>
      <PageMeta {...meta} />
      <div className="phero">
        <div className="orb" aria-hidden="true">
          <svg aria-hidden="true" viewBox="-640 -460 1280 920">
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
            <span>Website Terms of Use</span>
          </p>
          <h1>Website Terms of Use</h1>
          <p className="lead">The terms that apply when you use the EG Eloma website.</p>
          <div className="tbar">
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Australian owned
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Microsoft Partner
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              ASD Essential Eight aligned
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              24/7 support
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Fixed written quotes
            </span>
            <span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
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
              This website is operated by {BUSINESS.name} (ABN {BUSINESS.abn}) ("{BUSINESS.name}", "we", "us", "our"), {BUSINESS.address}. These terms apply when you use this website. By using the website, you agree to these terms. If you do not agree, please do not use the website.
            </p>
            <p>
              Services we provide to clients are governed by a separate written quote and agreement. If anything in that agreement is different from these terms, the agreement applies.
            </p>
            <h2>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The latest version will always be on this page, with the date it was last updated. Please check it when you use the website.
            </p>
            <h2>Information on this website</h2>
            <p>
              Information on this website is general and is provided to describe our services. It does not take your specific circumstances into account and is not professional, legal, financial or tax advice. We try to keep it accurate and up to date, but products, offers and laws change, so please confirm details with us before making a decision. Product mock-ups, example scenarios and illustrative figures are clearly labelled and are not guarantees of results.
            </p>
            <h2>Quotes and services</h2>
            <p>
              We do not publish prices on this website. Services and third-party products are supplied only under a written quote and agreement. A quote is not an offer that you can accept by using the website.
            </p>
            <h2>Third-party products</h2>
            <p>
              Third-party products, including Microsoft, Google and Meta products and telecommunications services, are supplied subject to their providers' own terms, pricing and eligibility rules, which can change without notice. Offers such as Microsoft's nonprofit grants and discounts are set by the provider, vary by country, and are confirmed only once the provider approves your eligibility.
            </p>
            <h2>Results</h2>
            <p>
              Search rankings, advertising performance, website speed and similar outcomes depend on many factors outside our control, including decisions made by Google, Meta and other platforms. We do not guarantee any particular ranking or result, and past results for one client do not guarantee similar results for others.
            </p>
            <h2>Using this website</h2>
            <p>You must not:</p>
            <ul>
              <li>use the website for anything unlawful, misleading or harmful;</li>
              <li>try to gain unauthorised access to the website, our systems or our clients' systems, or test their security without our written permission;</li>
              <li>upload or send viruses, malware or other harmful code;</li>
              <li>use bots, scrapers or other automated tools to copy content or collect information from the website without our permission;</li>
              <li>interfere with the website's operation or overload it;</li>
              <li>send us false information or impersonate another person or organisation in our forms.</li>
            </ul>
            <h2>Enquiries and communications</h2>
            <p>
              Please make sure the details you send us are accurate. We handle the personal information you give us in line with our{" "}
              <Link to="/privacy">Privacy Policy</Link>
              . You agree that we may communicate with you electronically, including by email, about your enquiry.
            </p>
            <h2>Intellectual property</h2>
            <p>
              The content of this website, including its text, design, graphics, code and the {BUSINESS.name} name and logo, is owned by or licensed to {BUSINESS.name} and protected by Australian and international law. You may view, print and share pages for your own personal or internal business information. You may not copy, change, republish or use the content commercially without our written permission.
            </p>
            <h2>Trademarks</h2>
            <p>
              Microsoft, Microsoft 365, Azure, Teams, Copilot, Dynamics 365, Power Platform, Power BI, Power Apps, SharePoint, OneDrive, Outlook, Intune, Defender, Entra and Windows are trademarks of the Microsoft group of companies. Google, Google Ads, Google Analytics and Google Business Profile are trademarks of Google LLC. Meta, Facebook and Instagram are trademarks of Meta Platforms, Inc. Other names may be trademarks of their respective owners. Our use of these names describes the products we work with and does not imply that their owners endorse us.
            </p>
            <h2>Links to other websites</h2>
            <p>
              The website links to third-party websites, such as Microsoft, Google and government websites, for your convenience. We do not control them and are not responsible for their content, availability or privacy practices. Their own terms and privacy policies apply.
            </p>
            <h2>Website availability</h2>
            <p>
              We aim to keep the website available and secure, but we do not guarantee that it will always be available, uninterrupted or free from errors or harmful code. We may change, suspend or remove any part of the website at any time.
            </p>
            <h2>Australian Consumer Law</h2>
            <p>
              Nothing in these terms excludes, restricts or changes any right or remedy you have under the Australian Consumer Law (Schedule 2 to the <i>Competition and Consumer Act 2010</i> (Cth)) or other laws that cannot be excluded, including consumer guarantees. Where the law allows us to limit our liability for failing to meet a consumer guarantee for services that are not of a kind ordinarily acquired for personal, domestic or household use, our liability is limited, at our option, to supplying the services again or paying the cost of having them supplied again.
            </p>
            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by law, we are not liable for any loss or damage arising from your use of this website, your inability to use it, or your reliance on its general information, including indirect or consequential loss, loss of profit or loss of data. This does not limit any liability that cannot be limited by law.
            </p>
            <h2>Privacy</h2>
            <p>
              Our <Link to="/privacy">Privacy Policy</Link> explains how we collect, use, share and protect personal information, including our use of cookies and Google services.
            </p>
            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of {BUSINESS.state}, Australia. You and we submit to the non-exclusive jurisdiction of the courts of {BUSINESS.state} and the courts that can hear appeals from them.
            </p>
            <h2>General</h2>
            <p>
              If any part of these terms is invalid or unenforceable, it will be read down or removed to the extent necessary, and the rest of these terms will continue to apply. If we do not enforce a right under these terms, we have not waived it.
            </p>
            <h2>Contact us</h2>
            <p>
              {BUSINESS.name} (ABN {BUSINESS.abn})
              <br />
              {BUSINESS.address}
              <br />
              {"Email: "}
              <a href={'mailto:' + BUSINESS.email}>{BUSINESS.email}</a>
              <br />
              {"Phone: "}
              <a href={BUSINESS.phone.href}>{BUSINESS.phone.label}</a>
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}
