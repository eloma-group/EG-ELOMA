import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GeoNote from '../components/GeoNote'

const meta = {
  "title": "Microsoft 365 Partner Melbourne | EG Eloma",
  "description": "Microsoft 365, Teams, Copilot, Azure, Dynamics 365 and Power Platform, licensed, set up, secured and supported by EG Eloma. Nonprofit offers too.",
  "crumb": "Microsoft",
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Microsoft products, licensing and support",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Microsoft licences are billed per user. Our setup and support are quoted after a free review, so you only pay for what you need."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a migration take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most small business migrations take 1 to 3 weeks, planned so email keeps flowing throughout."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work with our existing IT provider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We can co-manage with your internal IT or another provider."
            }
          }
        ]
      }
    ]
  },
  "path": "/microsoft"
}

export default function Microsoft() {
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
        <Header active="/microsoft" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Microsoft</span>
          </p>
          <h1>Microsoft 365 Partner Melbourne: Everything Microsoft, Managed for You</h1>
          <p className="lead">Licensing, setup, custom development and 24/7 support across the full Microsoft cloud.</p>
          <GeoNote />
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
        <section className="s first rv">
          <div className="sh">
            <div>
              <p className="ey">The value</p>
              <h2>Why Microsoft, done properly, matters</h2>
            </div>
          </div>
          <div className="why">
            <p className="big">
              Most businesses already pay for Microsoft, but few get the full value. Unused licences, default security settings and files scattered across personal drives cost money and create risk. We set Microsoft up the way it was designed to work, then keep it that way.
            </p>
            <ul className="bl">
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <div>
                  <b>One tenant, set up properly</b>
                  <small>Email, files, Teams and devices configured together.</small>
                </div>
              </li>
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <div>
                  <b>Security switched on</b>
                  <small>MFA, Defender and conditional access from day one.</small>
                </div>
              </li>
              <li>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                <div>
                  <b>Licences that fit</b>
                  <small>The right plan for each person, reviewed every year.</small>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="s rv">
          <div className="npw" style={{ borderColor: "var(--line2)" }}>
            <h2 style={{ font: "400 clamp(20px,2vw,27px)/1.2 var(--sans)", letterSpacing: "-.025em" }}>
              Business Basic, Standard, Premium or Enterprise?
            </h2>
            <p style={{ marginTop: "12px", color: "var(--dim)", fontSize: "clamp(15px,1.25vw,18px)", maxWidth: "70ch" }}>
              Compare what each Microsoft 365 plan includes on our plans page, then ask for a quote. We often combine plans so each person has exactly what they need.
            </p>
            <div className="cta" style={{ justifyContent: "flex-start", marginTop: "22px" }}>
              <Link className="btn w" to="/plans#microsoft">Compare Microsoft 365 plans</Link>
              <Link className="btn d" to="/contact?service=Microsoft+Licensing">Request a licence quote</Link>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Product families</p>
              <h2>Microsoft products we supply and support</h2>
              <p className="sub">
                {"Full feature details are on the "}
                <a href="https://www.microsoft.com/microsoft-365/business" rel="noopener" style={{ textDecoration: "underline", textUnderlineOffset: "3px", color: "var(--ink)" }}>
                  official Microsoft website
                </a>
                . We recommend the right mix for your business.
              </p>
            </div>
            <Link className="more" to="/contact?service=Microsoft+Products">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="stg cards c3">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Microsoft 365</h3>
              <p>Productivity, email and collaboration for every business.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Business Basic
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Business Standard
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Business Premium
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Apps for business
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  E3
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  E5
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  F3
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>{"Communication & collaboration"}</h3>
              <p>Email, meetings, chat and calling.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Exchange Online
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Teams
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Teams Phone
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Teams Premium
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Teams Rooms
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>{"Files & intranet"}</h3>
              <p>Store, share and manage documents securely.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  SharePoint
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  OneDrive
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Loop
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Viva
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>{"AI & Copilot"}</h3>
              <p>AI assistants and custom agents.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft 365 Copilot
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Copilot Chat
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Copilot Studio
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>{"Security & identity"}</h3>
              <p>Protect users, devices and data.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Entra ID
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Defender
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Intune
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Purview
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Sentinel
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <h3>Azure cloud</h3>
              <p>Hosting, servers, data and AI services.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure Virtual Machines
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure App Service
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure SQL
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure Backup
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure Virtual Desktop
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Azure AI services
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "420ms" }}>
              <h3>Dynamics 365</h3>
              <p>Business applications for finance, sales and service.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Business Central
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Sales
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Customer Service
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Field Service
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Finance
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "490ms" }}>
              <h3>Power Platform</h3>
              <p>Low-code apps, automation and analytics.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Power BI
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Power Apps
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Power Automate
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Power Pages
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "560ms" }}>
              <h3>{"Windows & devices"}</h3>
              <p>Operating systems and cloud PCs.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Windows 11 Pro
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Windows 11 Enterprise
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Windows 365
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Surface devices
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "630ms" }}>
              <h3>{"Project & work management"}</h3>
              <p>Plan and deliver work.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Microsoft Planner
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Project
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Visio
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Licensing</h3>
              <p>Right plans, right price.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  New Commerce (CSP)
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  {"Monthly & annual terms"}
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Licence audits
                </span>
              </div>
            </div>
            <div className="card" style={{ transitionDelay: "700ms" }}>
              <h3>Development on Microsoft</h3>
              <p>Custom solutions on Microsoft platforms.</p>
              <div className="pl">
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Power Apps solutions
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  SharePoint intranets
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Teams apps
                </span>
                <span style={{ font: "400 14px var(--sans)", padding: "6px 12px", borderRadius: "999px", background: "rgba(255,255,255,.05)", color: "#D8DBE6" }}>
                  Dynamics customisation
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Microsoft costs creeping up each year</b>
              <p>A yearly review of every subscription keeps spend under control.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Staff struggling with Teams and SharePoint</b>
              <p>Practical setup and training so files and chats are easy to find.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Security gaps in Microsoft 365</b>
              <p>MFA, conditional access and Defender configured properly.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Old servers and shared drives</b>
              <p>Migrate files and email to Microsoft 365 and Azure with no downtime.</p>
            </div>
          </div>
        </section>
        <section className="s rv" id="nonprofit">
          <div className="npw">
            <div className="sh">
              <div>
                <p className="ey">Microsoft for Nonprofits</p>
                <h2>Microsoft grants and discounts for nonprofits</h2>
                <p className="sub">
                  Charities, community groups and not-for-profits can access free and heavily discounted Microsoft products. We help Australian organisations register, choose the right offers, set everything up and keep it secure.
                </p>
              </div>
              <Link className="more" to="/contact?service=Microsoft+for+Nonprofits">
                {"Check eligibility "}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="stg cards c4">
              <div className="card" style={{ transitionDelay: "0ms" }}>
                <span className="pi">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
                    <rect x="4" y="4" width="7" height="7" rx="1" />
                    <rect x="13" y="4" width="7" height="7" rx="1" />
                    <rect x="4" y="13" width="7" height="7" rx="1" />
                    <rect x="13" y="13" width="7" height="7" rx="1" />
                  </svg>
                </span>
                <h3>Microsoft 365 Business Basic grant</h3>
                <p>
                  Eligible nonprofits can get Business Basic free for up to 300 users: email, Teams, web Office apps and 1 TB OneDrive each.
                </p>
              </div>
              <div className="card" style={{ transitionDelay: "70ms" }}>
                <span className="pi">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3>Discounted Business Premium</h3>
                <p>Desktop Office apps plus advanced security, Intune and Defender at a large nonprofit discount.</p>
              </div>
              <div className="card" style={{ transitionDelay: "140ms" }}>
                <span className="pi">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z" />
                  </svg>
                </span>
                <h3>Azure credit grant</h3>
                <p>An annual Azure credit grant for eligible nonprofits to host websites, apps and data in the cloud.</p>
              </div>
              <div className="card" style={{ transitionDelay: "210ms" }}>
                <span className="pi">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z" />
                    <path d="M16.5 13.5v6M13.5 16.5h6" />
                  </svg>
                </span>
                <h3>{"Copilot, Dynamics 365 & Power Platform"}</h3>
                <p>Nonprofit discounts on Copilot, Dynamics 365 CRM, Power BI and Power Apps (free for small teams).</p>
              </div>
            </div>
            <div className="proc proc-anim" style={{ "--n": "5" } as CSSProperties}>
              <div>
                <i>STEP 01</i>
                <b>Check eligibility</b>
                <p>We confirm your organisation meets Microsoft's nonprofit criteria.</p>
              </div>
              <div>
                <i>STEP 02</i>
                <b>Register</b>
                <p>We help you register with Microsoft for nonprofit offers.</p>
              </div>
              <div>
                <i>STEP 03</i>
                <b>{"Choose & activate"}</b>
                <p>Pick the right grants and discounted plans for each person.</p>
              </div>
              <div>
                <i>STEP 04</i>
                <b>{"Set up & secure"}</b>
                <p>Migrate email and files, then secure everything.</p>
              </div>
              <div>
                <i>STEP 05</i>
                <b>Support</b>
                <p>24/7 help and ongoing licence management.</p>
              </div>
            </div>
            <p className="npn">
              Offers and eligibility are set by Microsoft, vary by country and can change. Volunteers and individual members are not eligible. We confirm what your organisation qualifies for before you commit.
            </p>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Deliverables
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(22px,2.2vw,30px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                What you get
              </h2>
              <ul className="dl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Licence review and recommendation</span>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Tenant setup or health check</span>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Email, files and Teams migration</span>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Security baseline (MFA, Defender, Intune)</span>
                </li>
                <li style={{ transitionDelay: "280ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Staff training and how-to guides</span>
                </li>
                <li style={{ transitionDelay: "350ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <span>Ongoing support and licence management</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Technology
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(22px,2.2vw,30px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Tools and platforms we use
              </h2>
              <div className="tools stg">
                <span style={{ transitionDelay: "0ms" }}>Microsoft 365 admin</span>
                <span style={{ transitionDelay: "70ms" }}>Microsoft Entra ID</span>
                <span style={{ transitionDelay: "140ms" }}>Microsoft Intune</span>
                <span style={{ transitionDelay: "210ms" }}>Microsoft Defender</span>
                <span style={{ transitionDelay: "280ms" }}>Azure</span>
                <span style={{ transitionDelay: "350ms" }}>Power Platform</span>
                <span style={{ transitionDelay: "420ms" }}>SharePoint</span>
                <span style={{ transitionDelay: "490ms" }}>Teams</span>
              </div>
              <p style={{ marginTop: "18px", color: "var(--dim)", fontSize: "14px" }}>
                We choose proven, well-supported platforms so your microsoft environment is secure, reliable and easy to maintain.
              </p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Our process</p>
              <h2>How we roll out Microsoft</h2>
            </div>
          </div>
          <div className="proc proc-anim" style={{ "--n": "5" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Assess</b>
              <p>We review your current tools, licences, security and how your people work.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Recommend</b>
              <p>A clear plan and quote with the right products for each user.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Deploy</b>
              <p>Setup, migration and configuration with no downtime.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Train</b>
              <p>Short, practical training so your team uses the tools well.</p>
            </div>
            <div>
              <i>STEP 05</i>
              <b>Support</b>
              <p>24/7 help, monthly health checks and licence reviews.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Timeline</p>
              <h2>Your first 90 days</h2>
              <p className="sub">A clear plan from day one, so you always know what's happening and when.</p>
            </div>
          </div>
          <div className="n90 stg">
            <div style={{ transitionDelay: "0ms" }}>
              <em>Days 1–30</em>
              <p>Assess your environment, recommend the right licences and plan the migration.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <em>Days 31–60</em>
              <p>Deploy, migrate and secure Microsoft 365 with no downtime.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <em>Days 61–90</em>
              <p>Train your team, fine-tune settings and hand over to 24/7 support.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Security</p>
              <h2>How we protect your business and data</h2>
              <p className="sub">Security is built into how we work, not added later.</p>
            </div>
          </div>
          <div className="sec2 stg">
            <div style={{ transitionDelay: "0ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Multi-factor authentication</b>
                <small>Required on every system we manage.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Least-privilege access</b>
                <small>Staff only access what they need, and access is logged.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Encrypted data</b>
                <small>Data encrypted in transit and at rest on Microsoft Azure and Microsoft 365.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Daily backups</b>
                <small>Backups with tested restores for the systems we manage.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Essential Eight aligned</b>
                <small>Controls aligned to the Australian Signals Directorate's Essential Eight.</small>
              </span>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>
                <b>Confidentiality</b>
                <small>NDAs signed on request; client information never shared.</small>
              </span>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Services</p>
              <h2>Microsoft services</h2>
            </div>
          </div>
          <div className="pl">
            <Link to="/microsoft-licensing">Microsoft Licensing</Link>
            <Link to="/microsoft-development">Microsoft Product Development</Link>
            <Link to="/cloud-maintenance">Cloud Maintenance</Link>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Microsoft questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>How much does it cost?</summary>
                <p>
                  Microsoft licences are billed per user. Our setup and support are quoted after a free review, so you only pay for what you need.
                </p>
              </details>
              <details>
                <summary>How long does a migration take?</summary>
                <p>Most small business migrations take 1 to 3 weeks, planned so email keeps flowing throughout.</p>
              </details>
              <details>
                <summary>Can you work with our existing IT provider?</summary>
                <p>Yes. We can co-manage with your internal IT or another provider.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Paying too much for Microsoft?</h2>
          <p>Get a free licence review and a clear, plain-English recommendation.</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Microsoft+Licensing">Free licence review</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
