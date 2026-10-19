import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogMicrosoft365PlansCompared() {
  return (
    <BlogPost path="/blog-microsoft-365-plans-compared" geoNote>
      <p>Microsoft 365 is the backbone of most modern offices: email, files, meetings and the Office apps. But with several business plans to choose from, many businesses pay for more than they need, or miss security features they should have.</p>
      <p>{"This guide compares the three main business plans in plain English, explains where Copilot fits, and shows how to choose the right plan for each person rather than for the whole business."}</p>

      <h2>The three main business plans</h2>
      <p>{"The Business plans are designed for organisations with up to 300 users. If you need more than 300 seats on a plan, you will usually look at Enterprise plans such as Microsoft 365 E3 instead."}</p>
      <ul>
        <li><b>Business Basic:</b>{" web and mobile Office apps, business email, Teams and 1 TB of OneDrive. Ideal for staff who mostly work in a browser or on a phone."}</li>
        <li><b>Business Standard:</b>{" everything in Basic plus the desktop Office apps, such as Word, Excel, PowerPoint and Outlook, installed on computers. The usual choice for office staff. It is also sold as Business Standard with Copilot."}</li>
        <li><b>Business Premium:</b>{" everything in Standard plus Defender for Business, Intune device management and Entra ID identity protection. Our recommendation for any business that handles sensitive data. It is also sold as Business Premium with Copilot."}</li>
      </ul>
      <p>Each plan is billed per user, so the right mix depends on how your people work. We quote licences clearly in writing.</p>

      <h2>What the security features in Premium actually do</h2>
      <p>{"Premium is the plan people most often struggle to justify, because its extra value is in security rather than in apps people see every day. Here is what the main parts do:"}</p>
      <ul>
        <li><b>Microsoft Entra ID P1:</b>{" adds Conditional Access, which lets you set rules such as requiring multi-factor authentication, blocking sign-ins from overseas, or only allowing access from company-managed devices."}</li>
        <li><b>Microsoft Intune:</b>{" manages laptops and phones from one place. You can push security settings and updates, require encryption, and wipe company data from a lost or stolen device."}</li>
        <li><b>Defender for Business:</b>{" endpoint protection that detects and responds to threats on computers, going further than basic antivirus."}</li>
        <li><b>Email and data protection:</b>{" stronger protection against phishing links and malicious attachments, plus tools to label and protect sensitive information."}</li>
      </ul>
      <p>{"Microsoft has also added extra mailbox storage and email security features to Standard and Premium during 2026. Features change from time to time, so check Microsoft’s current plan comparison before you decide."}</p>

      <h2>Where Copilot fits</h2>
      <p>{"Microsoft 365 users can use Copilot Chat, which answers questions using the web, as part of their plan. The full Microsoft 365 Copilot, which works with your emails, files, chats and meetings inside Word, Excel, Outlook and Teams, needs a Copilot licence."}</p>
      <p>{"You can get that licence in two ways: buy a Business Standard or Business Premium plan with Copilot included, or add a Copilot licence to an existing plan for the people who need it. Before you roll it out, read our guide on "}<Link to="/blog-copilot-readiness">getting your business ready for Copilot</Link>{", because Copilot can surface any file a user already has access to."}</p>

      <h2>You don't have to give everyone the same plan</h2>
      <p>Microsoft lets you mix plans within one account. A warehouse worker who only needs email and Teams on a phone can be on Business Basic, while your finance team is on Business Premium. Mixing plans is often the fastest way to cut your monthly bill.</p>
      <h3>A worked example</h3>
      <p>{"Picture a 20-person trades business in Melbourne. Eight field staff use email, Teams and a job app on their phones. Ten office staff write quotes in Word and build reports in Excel. Two managers handle payroll and client contracts."}</p>
      <ul>
        <li>The eight field staff go on Business Basic.</li>
        <li>{"The office staff would suit Business Standard, but because they work from home on some days, Business Premium is the safer choice."}</li>
        <li>The two managers go on Business Premium, and perhaps Copilot, to help with reports and summaries.</li>
      </ul>
      <p>{"One catch: some Premium protections, such as Conditional Access rules, only protect the users who hold the licence. Leaving a few people on lower plans can leave gaps. Review this with whoever manages your security."}</p>

      <h2>When Business Premium is worth it</h2>
      <ul>
        <li>You store client, health or financial information.</li>
        <li>Staff work from home or on personal devices.</li>
        <li>{"You want to align with the "}<Link to="/blog-essential-eight-guide">ASD Essential Eight</Link>.</li>
        <li>You have had phishing or account takeover attempts.</li>
      </ul>

      <h2>Common mistakes</h2>
      <ul>
        <li>Buying Premium for everyone but never switching on its security features.</li>
        <li>Paying for licences for staff who have left the business.</li>
        <li>Giving desktop apps to staff who only ever use a browser or phone.</li>
        <li>Choosing annual or monthly terms without understanding the cancellation rules.</li>
        <li>Assuming Microsoft backs up everything for you. Retention is not the same as a tested backup.</li>
      </ul>
      <h3>A quick checklist before you choose</h3>
      <ol>
        <li>List every user and the devices they use.</li>
        <li>Note who needs desktop apps and who works only in a browser.</li>
        <li>Mark anyone who handles sensitive client, health or financial data.</li>
        <li>Decide who would genuinely benefit from Copilot.</li>
        <li>Remove licences for inactive or shared accounts.</li>
      </ol>

      <h2>Frequently asked questions</h2>
      <h3>Can we change plans later?</h3>
      <p>{"Yes. You can usually move users up to a higher plan at any time. Moving down or reducing seats may be limited until your subscription term ends, so check the terms before you commit."}</p>
      <h3>Is Business Basic enough for a small office?</h3>
      <p>{"It can be if everyone is happy working in the web versions of Word and Excel. If people regularly use advanced Excel features or Outlook on a desktop, Standard is the better fit."}</p>
      <h3>Do we need Premium if we already have antivirus?</h3>
      <p>{"Antivirus is only one layer. Premium adds device management, sign-in rules and identity protection, which help stop the account takeovers that antivirus does not cover. Our "}<Link to="/cybersecurity">cybersecurity team</Link>{" can explain what you would gain."}</p>
      <h3>Can you move our existing licences?</h3>
      <p>{"In most cases, yes. We plan the move with you so email and files keep working during the change."}</p>

      <h2>How we help</h2>
      <p>{"We review every user, recommend the right plan for each, move your licences across with no downtime and configure security properly. "}<Link to="/microsoft-licensing">See Microsoft Licensing</Link>{" or "}<Link to="/contact?service=Microsoft+Licensing">get a quote</Link>.</p>
    </BlogPost>
  )
}
