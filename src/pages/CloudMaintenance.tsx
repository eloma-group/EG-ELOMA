import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'

const meta = {
  "title": "Cloud Maintenance | EG Eloma",
  "description": "Your cloud, kept healthy, secure and cost-efficient. Azure and Microsoft 365 environments monitored, updated, optimised and backed up.",
  "crumb": "Cloud Maintenance",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Cloud Maintenance",
        "description": "Azure and Microsoft 365 environments monitored, updated, optimised and backed up.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Cloud Maintenance",
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
        ],
        "url": "https://egeloma.com.au/cloud-maintenance"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you only support Azure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Azure and Microsoft 365 are our specialty; talk to us about other platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Can you migrate us to the cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We plan and migrate servers, files and apps to Azure."
            }
          },
          {
            "@type": "Question",
            "name": "Is website maintenance included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Website updates, backups and monitoring can be included."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manage Microsoft 365 as well as Azure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes."
            }
          },
          {
            "@type": "Question",
            "name": "Can you migrate us to Azure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We plan and run migrations with minimal disruption."
            }
          },
          {
            "@type": "Question",
            "name": "Do you host websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, on Microsoft Azure."
            }
          }
        ]
      }
    ]
  },
  "path": "/cloud-maintenance"
}

export default function CloudMaintenance() {
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
        <Header active="/products" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <Link to="/products#cloud">{"Cloud, Security & Support"}</Link>
          </p>
          <h1>Cloud Maintenance</h1>
          <p className="lead">Your cloud, kept healthy, secure and cost-efficient.</p>
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
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Overview
              </p>
              <h2 style={{ marginTop: "10px" }}>What is Cloud Maintenance?</h2>
            </div>
            <div>
              <p>
                Cloud environments need ongoing care. We monitor, patch, back up and optimise your Microsoft Azure and Microsoft 365 environment, and your websites and apps hosted in the cloud.
              </p>
              <p>Regular reviews also cut wasted cloud spend.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Cloud Maintenance problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Cloud bill keeps growing</b>
              <p>We right-size resources and remove waste.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Outages discovered by customers</b>
              <p>Monitoring alerts us before users notice.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>No one checks backups</b>
              <p>Daily backups with regular restore tests.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Unclear who manages the cloud</b>
              <p>One team responsible, with monthly reports.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Cloud Maintenance</h2>
            </div>
            <Link className="more" to="/contact?service=Cloud+Maintenance">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Azure hosting</b>
              <p>Secure hosting for websites and apps.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>{"Monitoring & alerts"}</b>
              <p>Issues spotted before users notice.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Patching & updates"}</b>
              <p>Kept current and secure.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Backups</b>
              <p>Daily backups with tested restores.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Cost optimisation</b>
              <p>Right-size resources and cut waste.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Monthly health reports</b>
              <p>Performance, security and cost.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Cloud Maintenance is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Businesses already on Azure</h3>
              <p>Make sure it's secure, monitored and cost-efficient.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Microsoft 365 tenants</h3>
              <p>Keep settings, security and licences healthy.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Website and app owners</h3>
              <p>Hosting that is patched and backed up.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Cloud Maintenance works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Cloud health check</b>
              <p>Review security, performance and cost.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Clean up</b>
              <p>Remove unused resources and fix misconfigurations.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Automate</b>
              <p>Monitoring, backups and update schedules.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Monthly report</b>
              <p>Health, security and spend in one summary.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Cloud Maintenance</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Fewer outages</b>
                    <small>Proactive maintenance.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Lower cloud bills</b>
                    <small>Pay only for what you use.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Secure</b>
                    <small>Updates and security best practice.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Peace of mind</b>
                    <small>Experts managing it for you.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/server-maintenance">Server Maintenance</Link>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/support-services">Support Services</Link>
              </div>
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
                Cloud Maintenance questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do you only support Azure?</summary>
                <p>Azure and Microsoft 365 are our specialty; talk to us about other platforms.</p>
              </details>
              <details>
                <summary>Can you migrate us to the cloud?</summary>
                <p>Yes. We plan and migrate servers, files and apps to Azure.</p>
              </details>
              <details>
                <summary>Is website maintenance included?</summary>
                <p>Yes. Website updates, backups and monitoring can be included.</p>
              </details>
              <details>
                <summary>Do you manage Microsoft 365 as well as Azure?</summary>
                <p>Yes.</p>
              </details>
              <details>
                <summary>Can you migrate us to Azure?</summary>
                <p>Yes. We plan and run migrations with minimal disruption.</p>
              </details>
              <details>
                <summary>Do you host websites?</summary>
                <p>Yes, on Microsoft Azure.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Cloud Maintenance</h2>
          <p>{"Talk to our Cloud, Security & Support team about cloud maintenance for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Cloud+Maintenance">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
