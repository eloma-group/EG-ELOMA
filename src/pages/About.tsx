import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CountUp from '../components/CountUp'

const meta = {
  "title": "About EG Eloma | Australian-Owned Tech Partner",
  "description": "Australian-owned EG Eloma brings Microsoft, software, marketing, communications and cybersecurity together in one team, serving AU, US, CA, UK and NZ.",
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
  "path": "/about"
}

export default function About() {
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
        <Header active="/about" />
        <section className="wrap pc">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Company</span>
          </p>
          <h1>One partner for everything digital</h1>
          <p className="lead">Australian owned and operated, serving clients across five countries.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/pricing">View plans</Link>
          </div>
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
        <section className="s first rv">
          <div className="ov">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                Who we are
              </p>
              <h2 style={{ marginTop: "10px" }}>Technology that runs smoothly, so you can run your business.</h2>
            </div>
            <div>
              <p>
                EG Eloma brings Microsoft, software development, digital marketing, business communications, cloud and cybersecurity together under one roof. Instead of juggling five suppliers, our clients have one team that knows their business.
              </p>
              <p>
                Every client gets a dedicated account manager and access to the EG Eloma client portal to track products, tasks, invoices and support in one place.
              </p>
              <p>
                We are Australian owned and operated, and we work with businesses of every size and industry across Australia, the United States, Canada, the United Kingdom and New Zealand.
              </p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Story</p>
              <h2>Our story</h2>
            </div>
          </div>
          <div className="prose" style={{ maxWidth: "860px" }}>
            <p>
              EG Eloma started with a simple observation: small and mid-sized businesses were juggling a web designer, an IT provider, a phone company, a marketing agency and a Microsoft reseller, and none of them talked to each other.
            </p>
            <p>
              We built one team to cover all of it. Our developers, marketers, Microsoft specialists, security engineers and support staff work side by side, so a new website, a phone system and a Microsoft 365 rollout are planned together instead of colliding.
            </p>
            <p>
              Today we support organisations of every size across Australia, the United States, Canada, the United Kingdom and New Zealand, from sole traders to not-for-profits and government.
            </p>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Purpose</p>
              <h2>Our mission</h2>
            </div>
          </div>
          <div className="why">
            <p className="big">
              To give every organisation, whatever its size, the technology, security and marketing of a large company, delivered by one team that knows them by name.
            </p>
            <div className="fl">
              <div>
                <b>Vision</b>
                <p>Technology that quietly runs smoothly, so people can focus on their customers and communities.</p>
              </div>
              <div>
                <b>Promise</b>
                <p>Plain English, written quotes and honest advice, even when the answer is "you don't need that".</p>
              </div>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Proof</p>
              <h2>By the numbers</h2>
            </div>
          </div>
          <div className="statband stg">
            <div style={{ transitionDelay: "0ms" }}>
              <CountUp to={5} />
              <span>Countries served</span>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <CountUp to={23} />
              <span>Products under one roof</span>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <CountUp to={36} suf="+" />
              <span>Industries supported</span>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <CountUp to={1} />
              <span>Account manager per client</span>
            </div>
          </div>
        </section>
        <section className="s  rv" id="commitments">
          <div className="sh">
            <div>
              <p className="ey">Commitments</p>
              <h2>{"Memberships & commitments"}</h2>
              <p className="sub">The organisations and principles we belong to and support.</p>
            </div>
          </div>
          <div className="cards c2 stg">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <p className="k">Australian Signals Directorate</p>
              <h3>ASD Business Partner</h3>
              <p>
                We are a business partner in ASD's Cyber Security Partnership Program, which shares threat information and advice to help protect Australian organisations. We align our security services to the ASD Essential Eight.
              </p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <p className="k">United Nations Global Compact</p>
              <h3>Participant</h3>
              <p>
                We support the UN Global Compact's Ten Principles on human rights, labour, environment and anti-corruption, and report on our progress.
              </p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <p className="k">Women's Empowerment Principles (WEPs)</p>
              <h3>Signatory</h3>
              <p>
                We have signed the Women's Empowerment Principles, established by UN Women and the UN Global Compact, committing to gender equality in our workplace and community.
              </p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <p className="k">Australian Red Cross Lifeblood</p>
              <h3>Proud Member</h3>
              <p>We support the humanitarian work of Australian Red Cross Lifeblood.</p>
            </div>
          </div>
          <p className="affn" style={{ marginTop: "18px" }}>
            Participation in these programs and support for these organisations does not mean they endorse, certify or recommend EG Eloma or its services. All names belong to their respective owners.
          </p>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Values</p>
              <h2>What we stand for</h2>
            </div>
          </div>
          <div className="fl stg">
            <div style={{ transitionDelay: "0ms" }}>
              <b>Ownership</b>
              <p>When we take something on, we see it through to the finish.</p>
            </div>
            <div style={{ transitionDelay: "70ms" }}>
              <b>Curiosity</b>
              <p>We learn how your business works before we recommend anything.</p>
            </div>
            <div style={{ transitionDelay: "140ms" }}>
              <b>Respect</b>
              <p>For your time, your budget and your data.</p>
            </div>
            <div style={{ transitionDelay: "210ms" }}>
              <b>Long-term thinking</b>
              <p>We build things that are easy to maintain and grow.</p>
            </div>
            <div style={{ transitionDelay: "280ms" }}>
              <b>Teamwork</b>
              <p>Developers, marketers and support staff working as one.</p>
            </div>
            <div style={{ transitionDelay: "350ms" }}>
              <b>Continuous learning</b>
              <p>Our team keeps certifications and skills current.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">People</p>
              <h2>Our teams</h2>
              <p className="sub">Specialists who work together on every client.</p>
            </div>
          </div>
          <div className="stg cards c3">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>{"Microsoft & cloud"}</h3>
              <p>Licensing, Microsoft 365, Azure and Power Platform specialists.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Security</h3>
              <p>Engineers who assess, harden and monitor systems against the Essential Eight.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>Development</h3>
              <p>Web, app, SaaS and integration developers and designers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>Marketing</h3>
              <p>SEO, social media, paid ads and design specialists.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>Communications</h3>
              <p>Number, call-flow, IVR and virtual customer care specialists.</p>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <h3>{"Client success & support"}</h3>
              <p>Account managers and a 24/7 helpdesk.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Approach</p>
              <h2>How we work with clients</h2>
            </div>
          </div>
          <div className="proc" style={{ "--n": "5" } as CSSProperties}>
            <div>
              <i>STEP 01</i>
              <b>Listen first</b>
              <p>Every engagement starts with understanding your goals, people and current systems.</p>
            </div>
            <div>
              <i>STEP 02</i>
              <b>Plan in writing</b>
              <p>Clear scope, timeline and quote before work begins.</p>
            </div>
            <div>
              <i>STEP 03</i>
              <b>Deliver in stages</b>
              <p>Smaller releases you can see and test, rather than one big reveal.</p>
            </div>
            <div>
              <i>STEP 04</i>
              <b>Measure</b>
              <p>Agreed measures of success, reported monthly.</p>
            </div>
            <div>
              <i>STEP 05</i>
              <b>Improve</b>
              <p>Quarterly reviews to adjust as your business changes.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Countries</p>
              <h2>Where we work</h2>
            </div>
          </div>
          <div className="stg cards c3">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <p className="k">AU</p>
              <h3>Australia</h3>
              <p>Head office. Local teams, local numbers and local support.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <p className="k">US</p>
              <h3>United States</h3>
              <p>Websites, software, marketing and 1-800 numbers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <p className="k">CA</p>
              <h3>Canada</h3>
              <p>Microsoft, development and customer care.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <p className="k">UK</p>
              <h3>United Kingdom</h3>
              <p>Marketing, communications and 0800 numbers.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <p className="k">NZ</p>
              <h3>New Zealand</h3>
              <p>Full service, close to home.</p>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Join us</p>
              <h2>Careers at EG Eloma</h2>
            </div>
          </div>
          <div className="npw" style={{ borderColor: "var(--line2)" }}>
            <p style={{ fontSize: "clamp(15px,1.25vw,18px)", color: "#D3D9E4", maxWidth: "70ch" }}>
              We are always interested in hearing from developers, security engineers, Microsoft specialists, marketers and support professionals who care about doing great work for clients. Send your details through the contact form and choose 'Careers'.
            </p>
            <div className="cta" style={{ justifyContent: "flex-start", marginTop: "20px" }}>
              <Link className="btn w" to="/contact">Get in touch</Link>
            </div>
          </div>
        </section>
        <section className="s rv">
          <div className="twocol">
            <div>
              <p className="ey" style={{ font: "500 12px var(--mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mint)" }}>
                FAQ
              </p>
              <h2 className="t" style={{ marginTop: "10px", font: "600 clamp(24px,2.4vw,34px)/1.15 var(--sans)", letterSpacing: "-.03em" }}>
                About EG Eloma
              </h2>
            </div>
            <div className="faq2">
              <details>
                <summary>Where is EG Eloma based?</summary>
                <p>We are Australian owned and headquartered in Australia, with clients in the US, Canada, the UK and New Zealand.</p>
              </details>
              <details>
                <summary>What size businesses do you work with?</summary>
                <p>From sole traders to large organisations, not-for-profits and government.</p>
              </details>
              <details>
                <summary>Do you work with our existing providers?</summary>
                <p>Yes. We can co-manage alongside an in-house IT team or other suppliers.</p>
              </details>
              <details>
                <summary>Do you sign NDAs?</summary>
                <p>Yes, on request before any detailed discussion.</p>
              </details>
              <details>
                <summary>Are you hiring?</summary>
                <p>We welcome expressions of interest at any time through our contact page.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="s  rv">
          <div className="sh">
            <div>
              <p className="ey">Trust</p>
              <h2>Our promise to you</h2>
              <p className="sub">What every EG Eloma client can count on, on every project.</p>
            </div>
          </div>
          <div className="stg cards c3 prom">
            <div className="card" style={{ transitionDelay: "0ms" }}>
              <h3>Free, no-obligation consultation</h3>
              <p>Talk to a specialist and get a recommendation before you spend a cent.</p>
            </div>
            <div className="card" style={{ transitionDelay: "70ms" }}>
              <h3>Fixed, written quotes</h3>
              <p>A clear scope and price in writing. No hidden fees or surprise invoices.</p>
            </div>
            <div className="card" style={{ transitionDelay: "140ms" }}>
              <h3>You own your accounts and data</h3>
              <p>Your website, domains, ad accounts, social pages and data stay in your name.</p>
            </div>
            <div className="card" style={{ transitionDelay: "210ms" }}>
              <h3>24/7 support, fast response</h3>
              <p>Real people, with an average response time under 15 minutes.</p>
            </div>
            <div className="card" style={{ transitionDelay: "280ms" }}>
              <h3>Transparent reporting</h3>
              <p>Monthly plain-English reports and live status in your client portal.</p>
            </div>
            <div className="card" style={{ transitionDelay: "350ms" }}>
              <h3>Confidential and secure</h3>
              <p>NDAs on request, MFA everywhere and security aligned to the ASD Essential Eight.</p>
            </div>
          </div>
          <div className="refs">
            <p>
              <b>Want to speak to a client?</b>
              {" References are available on request for qualified projects."}
            </p>
            <Link className="more" to="/contact">
              {"Request references "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
        <section className="final rv">
          <h2>Let's build something great together</h2>
          <p>Book a free consultation with our team.</p>
          <div className="cta">
            <Link className="btn w" to="/contact">Book a free consultation</Link>
            <Link className="btn d" to="/pricing">View plans</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
