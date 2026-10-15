import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Industries We Serve | EG Eloma",
  "description": "Technology, security and marketing tailored to healthcare, legal, finance, not-for-profit, government, retail, trades, logistics, education and more.",
  "crumb": "Industries",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have experience in my industry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work across every industry and bring proven approaches from similar businesses to yours."
            }
          },
          {
            "@type": "Question",
            "name": "Can you meet industry compliance needs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We align security and data handling to the frameworks your industry requires."
            }
          },
          {
            "@type": "Question",
            "name": "Do you work with government and not-for-profits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, including secure Microsoft environments and accessible websites."
            }
          }
        ]
      }
    ]
  },
  "path": "/industries"
}

export default function Industries() {
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
        <Header active="/industries" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Industries</span>
          </p>
          <h1>We serve every industry</h1>
          <p className="lead">
            The same Microsoft, software, marketing, communications and security expertise, tailored to how your sector works.
          </p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/plans">View plans</Link>
          </div>
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
        <nav className="pnav" aria-label="Sectors">
          <a href="#healthcare">Healthcare</a>
          <a href="#legal">Legal</a>
          <a href="#nfp">Not-for-Profits</a>
          <a href="#government">Government</a>
          <a href="#retail">Retail</a>
          <a href="#trades">Trades</a>
          <a href="#logistics">Logistics</a>
          <a href="#education">Education</a>
        </nav>
        <section className="s first rv" id="healthcare">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Healthcare, Medical & Allied Health"}</h2>
              <p className="sub">
                Clinics, practices and allied health providers handle some of the most sensitive information there is. Patients expect easy online booking and fast answers, and regulators expect health information to be protected.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/ivr-system">IVR System</Link>
                <Link to="/local-listing">Local Listing</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>
                      Health information is 'sensitive information' under the Privacy Act, and health service providers are covered regardless of turnover
                    </span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Phones ringing off the hook at reception</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Practitioners sharing files by personal email</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Patients finding competitors first on Google Maps</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Microsoft 365 Business Premium with MFA, Intune and secure file sharing</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Online booking on a fast, accessible website</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>1300 number with IVR menus and after-hours virtual reception</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Local listing and review management for every location</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="legal">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Legal, Accounting & Financial Services"}</h2>
              <p className="sub">
                Professional firms are trusted with confidential client matters, tax records and financial data. A breach damages reputation as much as systems, and clients increasingly expect secure portals rather than email attachments.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/software-development">Software Development</Link>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Phishing and invoice-redirection scams targeting firms</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Documents emailed back and forth with clients</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Tax-time workload peaks</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Regulated entities facing information security obligations (for example APRA CPS 234)</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Essential Eight aligned security, email protection and staff training</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Secure client portals built on SharePoint or custom software</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Practice-system integrations with accounting platforms</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Professional website and LinkedIn content that builds authority</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="nfp">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Not-for-Profits, Charities & Community Groups"}</h2>
              <p className="sub">
                Every dollar matters. Eligible nonprofits can access Microsoft grants and discounts, and the right website and social presence helps attract donors, volunteers and members.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/microsoft-licensing">Microsoft Licensing</Link>
                <Link to="/website-development">Website Development</Link>
                <Link to="/social-media">Social Media Management</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Tight budgets and volunteer-run IT</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Staff and volunteers sharing passwords and devices</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Low visibility for appeals and events</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Reporting to boards and funders</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Registration for Microsoft nonprofit grants and discounted licences</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Secure accounts for staff, with appropriate access for volunteers</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Donation-ready website and social campaigns</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Power BI dashboards for board and funder reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="government">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Government & Public Sector"}</h2>
              <p className="sub">
                Agencies and councils need technology that is secure, accessible and well documented. The ASD Essential Eight is a common baseline for Australian government cyber security.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/server-maintenance">Server Maintenance</Link>
                <Link to="/website-development">Website Development</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Meeting Essential Eight maturity targets</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Accessibility requirements for public websites (WCAG)</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Legacy servers and applications</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Procurement requiring clear documentation</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Essential Eight assessments and uplift</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Accessible, fast websites built to WCAG guidelines</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Server maintenance and planned migration to Azure</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Clear scopes, documentation and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="retail">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Retail, eCommerce & Hospitality"}</h2>
              <p className="sub">
                Shoppers and diners decide quickly, often on a phone. Your website, Google listing and social pages need to be fast, current and easy to act on.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/website-development">Website Development</Link>
                <Link to="/google-meta-ads">{"Google & Meta Ads"}</Link>
                <Link to="/api-integrations">API Integrations</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Card payments must meet PCI DSS requirements</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Out-of-date menus, prices and opening hours online</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Online orders re-typed into other systems</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Seasonal peaks in calls and messages</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Secure online stores using compliant payment gateways</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Local listing, social media and Google Shopping campaigns</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Integrations between store, stock, accounting and delivery</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Virtual customer care during busy periods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="trades">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Trades, Construction & Property"}</h2>
              <p className="sub">
                Builders, trades and property businesses win work from calls and quotes. Teams spend their days on site, so systems need to work on a phone.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/app-development">App Development</Link>
                <Link to="/virtual-customer-care">Virtual Customer Care Support</Link>
                <Link to="/seo">Search Engine Optimisation</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Missed calls while on the tools</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Paper job sheets and photos lost in text messages</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Quotes slow to go out</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Relying on word of mouth alone</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Virtual mobile numbers and call answering</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Field service apps for jobs, photos and sign-off</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Quoting and job management software</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Local SEO and Google Ads for high-intent searches</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="logistics">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Logistics, Transport & Import/Export"}</h2>
              <p className="sub">
                Freight businesses run on data moving between customers, carriers, warehouses and finance. Customers expect tracking and a fast answer when they call.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/api-integrations">API Integrations</Link>
                <Link to="/toll-free-number">Toll-Free Number</Link>
                <Link to="/software-development">Software Development</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Manual data entry between systems</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Customers calling for delivery updates</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Multiple depots and time zones</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Ransomware risk to operations</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>API integrations between TMS, WMS and accounting</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Customer tracking portals</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>National and international toll-free numbers with IVR</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Managed security and tested backups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s rv" id="education">
          <div className="secx">
            <div>
              <p className="ey">Industry</p>
              <h2>{"Education, Training & Childcare"}</h2>
              <p className="sub">
                Schools, RTOs and childcare services manage information about students and children, coordinate staff, and communicate with families every day.
              </p>
              <div className="pl" style={{ marginTop: "18px" }}>
                <Link to="/microsoft-development">Microsoft Product Development</Link>
                <Link to="/support-services">Support Services</Link>
                <Link to="/website-development">Website Development</Link>
              </div>
            </div>
            <div className="secx-r">
              <div className="card">
                <h3>Common challenges</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Protecting student and family information</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Enrolment and attendance paperwork</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Communicating with families</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Shared devices across classrooms</span>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3>How we help</h3>
                <ul className="dots">
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Microsoft 365 and Teams for staff and learning</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Enrolment forms and portals</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Device management with Intune</span>
                  </li>
                  <li>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12.5l4.5 4.5L19 7.5" />
                    </svg>
                    <span>Websites and social pages that attract enrolments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Compliance</p>
              <h2>Regulations and standards we help you work with</h2>
              <p className="sub">We are not lawyers, but we build systems that make your obligations easier to meet.</p>
            </div>
          </div>
          <div className="sec2 stg">
            <div style={{ transitionDelay: "0ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>{"Privacy Act 1988 (Cth) & Australian Privacy Principles"}</b>
                <small>How organisations collect, use and protect personal information.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Notifiable Data Breaches scheme</b>
                <small>
                  Covered organisations must assess suspected breaches and notify the OAIC and affected people when serious harm is likely.
                </small>
              </span>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>ASD Essential Eight</b>
                <small>Eight mitigation strategies widely used as a cyber security baseline in Australia.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>PCI DSS</b>
                <small>Security standard for businesses that accept card payments.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>WCAG accessibility guidelines</b>
                <small>International guidelines for websites that everyone can use.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Overseas privacy laws</b>
                <small>Including the UK GDPR, NZ Privacy Act 2020 and Canada's PIPEDA, when you serve customers there.</small>
              </span>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Approach</p>
              <h2>How our industry approach works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Sector discovery</b>
              <p>We learn the language, regulations and busy periods of your industry.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Benchmark</b>
              <p>Compare your setup with what works for similar organisations.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Tailored plan</b>
              <p>Products and priorities that fit your sector.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Ongoing advice</b>
              <p>Quarterly reviews as your industry changes.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">All industries</p>
              <h2>All 36 industries we work with</h2>
              <p className="sub">Don't see yours? We work with organisations of every type and size.</p>
            </div>
          </div>
          <div className="stg cards c3">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>{"Retail & eCommerce"}</h3>
              <p>Online stores, ads and social that drive sales.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>{"Hospitality, Cafés & Restaurants"}</h3>
              <p>Bookings, menus, local search and reviews.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>{"Trades & Construction"}</h3>
              <p>Leads, quotes and job management.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>{"Real Estate & Property"}</h3>
              <p>Listings, CRM and lead generation.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>Legal</h3>
              <p>Secure client portals and professional websites.</p>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <h3>{"Accounting & Finance"}</h3>
              <p>Compliance, security and Microsoft 365.</p>
            </div>
            <div className="card" style={{ transitionDelay: "420ms" }}>
              <h3>{"Insurance & Mortgage Broking"}</h3>
              <p>Lead generation and secure systems.</p>
            </div>
            <div className="card" style={{ transitionDelay: "490ms" }}>
              <h3>{"Healthcare & Medical"}</h3>
              <p>Online bookings, patient care and security.</p>
            </div>
            <div className="card" style={{ transitionDelay: "560ms" }}>
              <h3>{"Dental & Allied Health"}</h3>
              <p>Bookings, reviews and local SEO.</p>
            </div>
            <div className="card" style={{ transitionDelay: "630ms" }}>
              <h3>Pharmacy</h3>
              <p>Local visibility and online ordering.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Aged Care & NDIS"}</h3>
              <p>Compliant systems and family communication.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Education & Training"}</h3>
              <p>Learning portals, enrolments and Microsoft 365.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Childcare</h3>
              <p>Bookings, parent communication and local SEO.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Not-for-Profit & Charities"}</h3>
              <p>Donations, campaigns and Microsoft grants.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Government & Public Sector"}</h3>
              <p>Secure, accessible digital services.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Logistics & Transport"}</h3>
              <p>Tracking, integrations and toll-free lines.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Import & Export"}</h3>
              <p>Trade systems, portals and global numbers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Manufacturing</h3>
              <p>ERP, Dynamics 365 and automation.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Wholesale & Distribution"}</h3>
              <p>B2B portals and inventory integrations.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Automotive</h3>
              <p>Service bookings, ads and local search.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Beauty, Salons & Spas"}</h3>
              <p>Bookings, Instagram and reviews.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Fitness & Wellness"}</h3>
              <p>Memberships, apps and social media.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Travel & Tourism"}</h3>
              <p>Bookings, multilingual sites and ads.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Events & Entertainment"}</h3>
              <p>Ticketing, promotion and social.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Agriculture & Farming"}</h3>
              <p>Remote connectivity and supply systems.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Mining & Resources"}</h3>
              <p>Secure systems for remote sites.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Energy & Utilities"}</h3>
              <p>Customer portals, IVR and security.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"IT & Technology"}</h3>
              <p>SaaS, APIs and cloud development.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Startups</h3>
              <p>MVPs, SaaS platforms and launch marketing.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Professional Services</h3>
              <p>Websites, CRM and Microsoft 365.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Media & Marketing Agencies"}</h3>
              <p>White-label development and support.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Cleaning & Facility Services"}</h3>
              <p>Leads, scheduling and call handling.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Security Services</h3>
              <p>Rostering systems and secure comms.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Religious & Community Groups"}</h3>
              <p>Websites, streaming and donations.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>{"Food & Beverage Production"}</h3>
              <p>eCommerce, distribution and branding.</p>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Telecommunications</h3>
              <p>Numbers, IVR and customer care.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Industry questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do you have experience in my industry?</summary>
                <p>We work across every industry and bring proven approaches from similar businesses to yours.</p>
              </details>
              <details>
                <summary>Can you meet industry compliance needs?</summary>
                <p>Yes. We align security and data handling to the frameworks your industry requires.</p>
              </details>
              <details>
                <summary>Do you work with government and not-for-profits?</summary>
                <p>Yes, including secure Microsoft environments and accessible websites.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Let's talk about your industry</h2>
          <p>Book a free consultation with a specialist who understands your sector.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/plans">View plans</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
