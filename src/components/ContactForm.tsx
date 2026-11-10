import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { LEAD_FLAG } from '../pixel'

// Enquiries go to the Azure Function in api/src/functions/contact.js, which emails them to connect@egeloma.com.au via Microsoft 365.
const ENDPOINT = '/api/contact'

// Consultation request form. ?service= or ?plan= preselects the matching product, ?country= the country.
export default function ContactForm() {
  const [params] = useSearchParams()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [failed, setFailed] = useState(false)
  const preset = params.get('service') || params.get('plan') || ''
  const country = params.get('country') || ''

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    const data = Object.fromEntries(new FormData(form))
    setSending(true)
    setFailed(false)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      setSent(true)
      try {
        sessionStorage.setItem(LEAD_FLAG, '1')
      } catch {}
      // A full page load (not in-app navigation), so Google Ads and the Google tag count the /thank-you visit.
      window.location.assign('/thank-you')
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form className={sent ? "form sent" : "form"} noValidate onSubmit={onSubmit}>
      <div className="row">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Business name
          <input name="business" autoComplete="organization" />
        </label>
      </div>
      <div className="row">
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <div className="row">
        <label>
          Country
          <select name="country" key={country} defaultValue={country || undefined}>
            <option>Australia</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>New Zealand</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Industry
          <select name="industry">
            <option>{"Retail & eCommerce"}</option>
            <option>{"Hospitality, Cafés & Restaurants"}</option>
            <option>{"Trades & Construction"}</option>
            <option>{"Real Estate & Property"}</option>
            <option>Legal</option>
            <option>{"Accounting & Finance"}</option>
            <option>{"Insurance & Mortgage Broking"}</option>
            <option>{"Healthcare & Medical"}</option>
            <option>{"Dental & Allied Health"}</option>
            <option>Pharmacy</option>
            <option>{"Aged Care & NDIS"}</option>
            <option>{"Education & Training"}</option>
            <option>Childcare</option>
            <option>{"Not-for-Profit & Charities"}</option>
            <option>{"Government & Public Sector"}</option>
            <option>{"Logistics & Transport"}</option>
            <option>{"Import & Export"}</option>
            <option>Manufacturing</option>
            <option>{"Wholesale & Distribution"}</option>
            <option>Automotive</option>
            <option>{"Beauty, Salons & Spas"}</option>
            <option>{"Fitness & Wellness"}</option>
            <option>{"Travel & Tourism"}</option>
            <option>{"Events & Entertainment"}</option>
            <option>{"Agriculture & Farming"}</option>
            <option>{"Mining & Resources"}</option>
            <option>{"Energy & Utilities"}</option>
            <option>{"IT & Technology"}</option>
            <option>Startups</option>
            <option>Professional Services</option>
            <option>{"Media & Marketing Agencies"}</option>
            <option>{"Cleaning & Facility Services"}</option>
            <option>Security Services</option>
            <option>{"Religious & Community Groups"}</option>
            <option>{"Food & Beverage Production"}</option>
            <option>Telecommunications</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>
        Product or plan
        <select name="service" key={preset} defaultValue={preset}>
          <option>Not sure yet</option>
          <option>Microsoft for Nonprofits</option>
          <option>All-in-One Plan</option>
          <option>Business Plan</option>
          <option>Growth Plan</option>
          <option>Starter Plan</option>
          <option>{"Post & Grow"}</option>
          <option>Rank Up</option>
          <option>Near Me</option>
          <option>My Website</option>
          <option>Ad Power</option>
          <option>Design Hub</option>
          <option>Microsoft Products</option>
          <option>Microsoft Licensing</option>
          <option>Microsoft Product Development</option>
          <option>Social Media Management</option>
          <option>Search Engine Optimisation (SEO)</option>
          <option>Local Listing (Google Business Profile)</option>
          <option>{"Google & Meta Ads"}</option>
          <option>PPC (Pay-Per-Click)</option>
          <option>Designing (Design Hub)</option>
          <option>Website Development</option>
          <option>Software Development</option>
          <option>SaaS Development</option>
          <option>App Development</option>
          <option>API Integrations</option>
          <option>Toll-Free Number</option>
          <option>Virtual Mobile Number</option>
          <option>Landline Number</option>
          <option>IVR System</option>
          <option>Virtual Customer Care Support</option>
          <option>Cybersecurity</option>
          <option>Cloud Maintenance</option>
          <option>Server Maintenance</option>
          <option>Support Services</option>
        </select>
      </label>
      {/* Hidden from people; bots that fill in every field give themselves away. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
      <label>
        How can we help?
        <textarea name="message" />
      </label>
      <button className="btn w" type="submit" disabled={sent || sending} style={{ border: "0", cursor: "pointer" }}>{sending ? 'Sending…' : 'Request consultation'}</button>
      <p className="pn">
        {"We use these details only to respond to your enquiry and prepare a quote, as described in our "}
        <Link to="/privacy">Privacy Policy</Link>
        . We won't add you to marketing emails without your consent.
      </p>
      {failed && (
        <p className="err" role="alert">
          {"Sorry, your enquiry couldn't be sent. Please try again or email us at "}
          <a href="mailto:connect@egeloma.com.au">connect@egeloma.com.au</a>.
        </p>
      )}
      <p className="ok" role="status">Thank you. Our team will contact you within one business day.</p>
    </form>
  )
}
