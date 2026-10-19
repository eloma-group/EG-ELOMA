import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogNotifiableDataBreaches() {
  return (
    <BlogPost path="/blog-notifiable-data-breaches">
      <p>{"Under the Notifiable Data Breaches (NDB) scheme, organisations covered by the "}<i>Privacy Act 1988</i>{" must notify affected individuals and the Office of the Australian Information Commissioner (OAIC) when a data breach is likely to cause serious harm."}</p>
      <p>{"This guide explains who must comply, how to decide whether a breach is notifiable, what the notice must say, and the practical steps that make a breach easier to handle."}</p>

      <h2>Who it applies to</h2>
      <p>The scheme applies to organisations covered by the Privacy Act. That generally includes businesses and not-for-profits with annual turnover above $3 million, Australian Government agencies, and some smaller businesses, such as health service providers and businesses that trade in personal information.</p>
      <p>{"Other smaller businesses can also be covered, for example credit reporting bodies, contracted service providers to the Australian Government, and businesses related to a larger covered organisation. If you are not sure, the OAIC has a checklist to help you work out whether the Privacy Act applies to you."}</p>
      <p>{"The government has said further privacy reforms are being developed, and removing or narrowing the small business exemption has been part of that discussion. At the time of writing that change is not law, but it is a good reason for smaller businesses to prepare now rather than later. Check the OAIC website for the current position."}</p>

      <h2>What is an eligible data breach?</h2>
      <p>A breach is notifiable, which the law calls an eligible data breach, when all three of these are true:</p>
      <ul>
        <li>Personal information is accessed or disclosed without authorisation, or lost in a way that makes this likely.</li>
        <li>The breach is likely to result in serious harm to one or more individuals.</li>
        <li>Your remedial action has not prevented that likely harm.</li>
      </ul>
      <p>{"Common examples include a staff member's email account being taken over by a scammer, a laptop with client files left in a taxi, a spreadsheet of customer details emailed to the wrong person, or a database exposed online through a misconfigured setting."}</p>
      <h3>What counts as serious harm?</h3>
      <p>{"Serious harm can be physical, psychological, emotional, financial or reputational. When you assess it, think about the kind of information involved, how sensitive it is, who might now have it, and whether it was protected, for example by encryption. Identity documents, health records, bank details and tax file numbers usually carry a higher risk than a name and work email address."}</p>
      <h3>When remedial action changes the answer</h3>
      <p>{"If you act fast enough to stop serious harm being likely, the breach may not need to be notified. Say an email with client details goes to the wrong recipient, you contact them within the hour, and they confirm in writing that they deleted it without forwarding it. That may be enough. Record what happened and why you decided it was not notifiable."}</p>

      <h2>The 30-day assessment</h2>
      <p>If you suspect an eligible breach, you must carry out a reasonable and quick assessment within 30 days. The OAIC expects most assessments to be finished much sooner.</p>
      <p>{"If you find there are reasonable grounds to believe an eligible breach has happened, you must notify as soon as practicable. Don't wait until the 30 days are up. A simple assessment usually follows these steps:"}</p>
      <ol>
        <li><b>Contain:</b>{" reset passwords, isolate affected devices, recall emails and revoke access."}</li>
        <li><b>Assess:</b>{" work out what information was involved, whose it was and how likely harm is."}</li>
        <li><b>Notify:</b>{" if it is an eligible breach, tell the OAIC and affected individuals."}</li>
        <li><b>Review:</b>{" find the cause and fix it so it doesn't happen again."}</li>
      </ol>

      <h2>What the notification must include</h2>
      <p>The statement to the OAIC is usually made with its online Notifiable Data Breach form. It must include:</p>
      <ul>
        <li>Your organisation’s name and contact details.</li>
        <li>A description of the breach.</li>
        <li>The kinds of information involved.</li>
        <li>Recommended steps individuals should take in response.</li>
      </ul>
      <p>{"You then notify individuals in one of three ways: tell everyone whose information was involved, tell only those at risk of serious harm, or, if direct contact is not practicable, publish the statement on your website and take reasonable steps to make it known. Write in plain English and give practical advice, such as changing passwords, watching for scam calls or contacting IDCARE, the national identity and cyber support service."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Assuming an encrypted or password-protected file is safe when the password was sent in the same email.</li>
        <li>Deleting evidence while cleaning up, so you can no longer tell what was accessed.</li>
        <li>{"Waiting for certainty before acting. The test is \"likely\", not \"certain\"."}</li>
        <li>Forgetting that a breach at a supplier holding your data can still be your responsibility.</li>
      </ul>

      <h2>How to prepare</h2>
      <ol>
        <li>Write a simple data breach response plan and name who does what.</li>
        <li>Know where personal information is stored, and keep less of it.</li>
        <li>Turn on multi-factor authentication and email protection.</li>
        <li>Keep tested backups and logs so you can tell what happened.</li>
        <li>Train staff to report suspicious emails and mistakes quickly.</li>
      </ol>
      <p>{"Many of these controls match the "}<Link to="/blog-essential-eight-guide">ASD Essential Eight strategies</Link>{". If you use Microsoft 365, the security tools in "}<Link to="/blog-microsoft-365-plans-compared">Microsoft 365 Business Premium</Link>{" can cover several of them, including device management and stronger sign-in protection."}</p>
      <h3>A quick readiness checklist</h3>
      <ul>
        <li>Is there a named person who leads the response, and a backup?</li>
        <li>Do staff know how to report a suspected breach, even out of hours?</li>
        <li>Do you have contact details for your IT provider, insurer and lawyer in one place?</li>
        <li>Are audit logs turned on and kept long enough to investigate?</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Do we have to report a breach if no harm has happened yet?</h3>
      <p>{"Yes, if serious harm is likely. The scheme is based on the risk of harm, not proof that harm has already happened."}</p>
      <h3>Our turnover is under $3 million. Can we ignore the scheme?</h3>
      <p>{"Not always. Health service providers, businesses that trade in personal information and some others are covered whatever their turnover. Even if you are not covered, a clear response plan protects your customers and your reputation."}</p>
      <h3>Is ransomware a notifiable breach?</h3>
      <p>{"It can be. If attackers could have accessed or copied personal information, you need to assess it like any other breach, even if your files were restored from backup."}</p>
      <h3>Who should we call first?</h3>
      <p>{"Start with your IT or "}<Link to="/support-services">managed IT support provider</Link>{" to contain the incident, then your cyber insurer if you have one. ReportCyber at cyber.gov.au is the place to report cybercrime."}</p>

      <p>{"This article is general information, not legal advice. See the OAIC website for official guidance. Our "}<Link to="/cybersecurity">cybersecurity service</Link>{" can help you reduce the risk of a breach."}</p>
    </BlogPost>
  )
}
