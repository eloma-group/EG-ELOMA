import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogMicrosoft365PlansCompared() {
  return (
    <BlogPost path="/blog-microsoft-365-plans-compared" geoNote>
      <p>Microsoft 365 is the backbone of most modern offices: email, files, meetings and the Office apps. But with several business plans to choose from, many businesses pay for more than they need, or miss security features they should have.</p>
      <h2>The three main business plans</h2>
      <ul>
        <li><b>Business Basic:</b>{" web and mobile Office apps, business email, Teams and 1 TB of OneDrive. Ideal for staff who mostly work in a browser or on a phone."}</li>
        <li><b>Business Standard with Copilot:</b>{" everything in Basic plus the desktop Office apps and Copilot features. The usual choice for office staff."}</li>
        <li><b>Business Premium with Copilot:</b>{" everything in Standard plus Defender for Business, Intune device management and Entra ID identity protection. Our recommendation for any business that handles sensitive data."}</li>
      </ul>
      <p>Each plan is billed per user, so the right mix depends on how your people work. We quote licences clearly in writing.</p>
      <h2>You don't have to give everyone the same plan</h2>
      <p>Microsoft lets you mix plans within one account. A warehouse worker who only needs email and Teams on a phone can be on Business Basic, while your finance team is on Business Premium. Mixing plans is often the fastest way to cut your monthly bill.</p>
      <h2>When Business Premium is worth it</h2>
      <ul>
        <li>You store client, health or financial information.</li>
        <li>Staff work from home or on personal devices.</li>
        <li>You want to align with the ASD Essential Eight.</li>
        <li>You have had phishing or account takeover attempts.</li>
      </ul>
      <h2>How we help</h2>
      <p>{"We review every user, recommend the right plan for each, move your licences across with no downtime and configure security properly. "}<Link to="/microsoft-licensing">See Microsoft Licensing</Link>{" or "}<Link to="/contact?service=Microsoft+Licensing">get a quote</Link>.</p>
    </BlogPost>
  )
}
