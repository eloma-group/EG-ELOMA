import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RelatedReading from '../components/RelatedReading'

const meta = {
  "title": "Server Maintenance & Support Melbourne | EG Eloma",
  "description": "Servers that stay up, stay patched and stay secure. On-premise and cloud servers patched, monitored, backed up and supported.",
  "crumb": "Server Maintenance",
  "parent": {
    "name": "Products",
    "path": "/products"
  },
  "jsonLd": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Server Maintenance",
        "description": "On-premise and cloud servers patched, monitored, backed up and supported.",
        "provider": {
          "@id": "https://egeloma.com.au/#organization"
        },
        "serviceType": "Server Maintenance",
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
        "url": "https://egeloma.com.au/server-maintenance"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you support on-premise servers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, both on-premise and cloud servers."
            }
          },
          {
            "@type": "Question",
            "name": "Can you support us remotely?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Most maintenance is done remotely, with on-site help arranged where needed."
            }
          },
          {
            "@type": "Question",
            "name": "Can you move our servers to the cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We plan and run migrations to Microsoft Azure."
            }
          },
          {
            "@type": "Question",
            "name": "Do you support Linux servers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, as well as Windows Server."
            }
          },
          {
            "@type": "Question",
            "name": "Can you visit on site?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most work is remote; on-site visits can be arranged."
            }
          },
          {
            "@type": "Question",
            "name": "Should we move servers to the cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We'll assess cost, performance and risk and give a clear recommendation."
            }
          }
        ]
      }
    ]
  },
  "path": "/server-maintenance"
}

export default function ServerMaintenance() {
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
          <h1>{"Server Maintenance & Support Melbourne"}</h1>
          <p className="lead">Servers that stay up, stay patched and stay secure.</p>
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
              <h2 style={{ marginTop: "10px" }}>What is Server Maintenance?</h2>
            </div>
            <div>
              <p>
                We look after Windows and Linux servers on-premise and in the cloud: patching, monitoring, backups, performance tuning and hardware lifecycle planning.
              </p>
              <p>If something goes wrong, our team responds fast to get you running again.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Challenges</p>
              <h2>Server Maintenance problems we solve</h2>
            </div>
          </div>
          <div className="probs stg">
            <div style={{ transitionDelay: "0ms" }}>
              <i>!</i>
              <b>Servers out of warranty</b>
              <p>A lifecycle plan for replacement or migration.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <i>!</i>
              <b>Patches applied irregularly</b>
              <p>Scheduled patching with reporting.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <i>!</i>
              <b>Disks filling up unnoticed</b>
              <p>Monitoring for storage, services and performance.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <i>!</i>
              <b>Unsure if backups work</b>
              <p>Backup checks and recovery testing.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Features</p>
              <h2>What's included in Server Maintenance</h2>
            </div>
            <Link className="more" to="/contact?service=Server+Maintenance">
              {"Get a quote "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Proactive monitoring</b>
              <p>CPU, storage, services and alerts.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Patch management</b>
              <p>Security updates on a schedule.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>{"Backup & disaster recovery"}</b>
              <p>Backups and recovery plans.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Performance tuning</b>
              <p>Faster, more reliable servers.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Active Directory</b>
              <p>Users, groups and policies managed.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Migration planning</b>
              <p>Move to Azure when you're ready.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Ideal for</p>
              <h2>Who Server Maintenance is for</h2>
            </div>
          </div>
          <div className="stg cards c3 aud">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Offices with on-premise servers</h3>
              <p>Keep them reliable until you're ready to move.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Businesses with legacy software</h3>
              <p>Support servers that run older applications.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Teams planning a cloud move</h3>
              <p>Maintain today while planning the migration.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Step by step</p>
              <h2>How Server Maintenance works</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "4" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Server audit</b>
              <p>Check hardware, software and warranty status.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Patch schedule</b>
              <p>Agree maintenance windows for updates.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Backup checks</b>
              <p>Verify backups and test a restore.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Roadmap</b>
              <p>A plan for upgrades or migration.</p>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <h2 className="t">Benefits of Server Maintenance</h2>
              <ul className="bl stg">
                <li style={{ transitionDelay: "0ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Maximum uptime</b>
                    <small>Problems fixed before they spread.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "70ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Security</b>
                    <small>Patched and hardened.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "140ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Predictable cost</b>
                    <small>Fixed monthly maintenance.</small>
                  </div>
                </li>
                <li style={{ transitionDelay: "210ms" }}>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  <div>
                    <b>Future-ready</b>
                    <small>A clear roadmap to the cloud.</small>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="t">Related products</h2>
              <div className="pl" style={{ marginTop: "4px" }}>
                <Link to="/cloud-maintenance">Cloud Maintenance</Link>
                <Link to="/cybersecurity">Cybersecurity</Link>
                <Link to="/support-services">Support Services</Link>
              </div>
            </div>
          </div>
        </section>
        <RelatedReading posts={['/blog-notifiable-data-breaches', '/blog-essential-eight-guide', '/blog-choose-it-support']} />
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "400 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "400 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                Server Maintenance questions
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Do you support on-premise servers?</summary>
                <p>Yes, both on-premise and cloud servers.</p>
              </details>
              <details>
                <summary>Can you support us remotely?</summary>
                <p>Yes. Most maintenance is done remotely, with on-site help arranged where needed.</p>
              </details>
              <details>
                <summary>Can you move our servers to the cloud?</summary>
                <p>Yes. We plan and run migrations to Microsoft Azure.</p>
              </details>
              <details>
                <summary>Do you support Linux servers?</summary>
                <p>Yes, as well as Windows Server.</p>
              </details>
              <details>
                <summary>Can you visit on site?</summary>
                <p>Most work is remote; on-site visits can be arranged.</p>
              </details>
              <details>
                <summary>Should we move servers to the cloud?</summary>
                <p>We'll assess cost, performance and risk and give a clear recommendation.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="final rv">
          <h2>Get started with Server Maintenance</h2>
          <p>{"Talk to our Cloud, Security & Support team about server maintenance for your organisation."}</p>
          <div className="cta">
            <Link className="btn w" to="/contact?service=Server+Maintenance">Get a quote</Link>
            <Link className="btn d" to="/products">All products</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
