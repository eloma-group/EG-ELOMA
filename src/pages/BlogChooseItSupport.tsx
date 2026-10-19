import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogChooseItSupport() {
  return (
    <BlogPost path="/blog-choose-it-support">
      <p>The right IT provider prevents problems instead of just fixing them. Use these questions when comparing providers.</p>
      <p>{"Most providers sound similar on a website. The differences show up in the detail: how they handle a problem at 7am on a Monday, what they document, and what happens if you decide to leave. Ask every shortlisted provider the same questions and compare the answers side by side."}</p>

      <h2>Ten questions</h2>
      <ol>
        <li><b>What are your average response and resolution times, and are they reported?</b>{" Response time is how quickly someone acknowledges the issue. Resolution time is how long it takes to fix. Ask for a sample monthly report so you can see what you would actually receive."}</li>
        <li><b>Is support available after hours and on weekends?</b>{" Ask whether after-hours work is included or charged separately, and how you reach someone urgently. This matters if you trade on weekends or have staff in other time zones."}</li>
        <li><b>How do we raise and track tickets?</b>{" Email, phone and a portal are common. You want every request logged with a reference number so nothing relies on someone remembering a phone call."}</li>
        <li><b>What security controls do you put in place as standard?</b>{" Look for multi-factor authentication, automatic patching, endpoint protection, email filtering and limited admin rights. A provider who refers to the ASD "}<Link to="/blog-essential-eight-guide">Essential Eight</Link>{" is working from a recognised baseline."}</li>
        <li><b>How do you back up our data, and how often do you test restores?</b>{" Ask what is backed up, including Microsoft 365 mailboxes and SharePoint, where copies are stored and when a restore was last tested for a client."}</li>
        <li><b>Who is our main contact?</b>{" A named person who knows your business saves time. Ask who covers when that person is away."}</li>
        <li><b>How do you document our systems?</b>{" Good documentation covers devices, accounts, licences, network settings, vendors and renewal dates. Ask whether you can access it at any time."}</li>
        <li><b>What happens if we leave? Do we keep our accounts and data?</b>{" You should own your domain, Microsoft 365 tenancy, admin credentials and documentation. A good provider will describe a clear handover process."}</li>
        <li><b>Can you support staff working remotely or overseas?</b>{" Remote tools, secure access and device management should be routine, not a special project."}</li>
        <li><b>How do you charge, and what is not included?</b>{" Clarify what counts as project work, whether new staff setup is included, and how hardware and software are billed."}</li>
      </ol>

      <h2>How to compare the answers</h2>
      <p>{"Put the answers in a simple table with one column per provider. Score each question as clear, vague or missing. Vague answers are often more telling than a high price."}</p>
      <ol>
        <li>Write down your current pain points first, such as slow fixes, no backups or confusing licensing.</li>
        <li>Shortlist two or three providers and send them the same list of questions.</li>
        <li>Ask for a sample report, a sample onboarding plan and a copy of their standard agreement.</li>
        <li>Speak with the person who would actually support you, not only the salesperson.</li>
        <li>Read the exit clause and notice period before you compare prices.</li>
      </ol>

      <h2>Pricing models in plain English</h2>
      <p>{"Most managed IT is charged in one of three ways. "}<b>Per user</b>{" pricing covers each staff member and all their devices. "}<b>Per device</b>{" pricing charges for each computer, server or network device. "}<b>Block hours</b>{" or pay-as-you-go suits very small offices but can make it harder to budget and gives the provider less reason to prevent problems."}</p>
      <p>{"Whichever model you choose, check what sits outside it. Projects such as office moves, server replacements and new system rollouts are usually quoted separately. Software subscriptions such as "}<Link to="/microsoft-licensing">Microsoft licensing</Link>{" are often billed on their own line."}</p>

      <h2>Red flags</h2>
      <ul>
        <li>Admin passwords only the provider knows.</li>
        <li>No written scope or reporting.</li>
        <li>Long lock-in contracts with unclear exit terms.</li>
        <li>{"Your Microsoft 365 tenancy or domain registered in the provider's name rather than yours."}</li>
        <li>No mention of backups or security until you ask.</li>
        <li>Every problem treated as billable project work, with no focus on prevention.</li>
      </ul>

      <h2>Common mistakes when switching</h2>
      <ul>
        <li><b>Choosing on price alone.</b>{" A cheaper agreement that excludes most work can cost more over a year."}</li>
        <li><b>Not collecting credentials first.</b>{" Before giving notice, make sure you hold admin access to your domain, email, firewall and key systems."}</li>
        <li><b>Skipping the overlap.</b>{" Allow time for the new provider to document everything while the old one is still available to answer questions."}</li>
        <li><b>Forgetting the cloud.</b>{" Servers, "}<Link to="/cloud-maintenance">cloud services</Link>{" and phone systems are often managed by different vendors. List them all."}</li>
      </ul>

      <h2>Quick checklist</h2>
      <ul>
        <li>Sample report received</li>
        <li>After-hours arrangements and charges understood</li>
        <li>Security baseline described in writing</li>
        <li>Backup and restore testing explained</li>
        <li>You own all accounts, domains and documentation</li>
        <li>Exit terms and notice period clear</li>
      </ul>
      <p>{"See how our "}<Link to="/support-services">Support Services</Link>{" work."}</p>

      <h2>Frequently asked questions</h2>
      <h3>What is the difference between managed IT and break-fix support?</h3>
      <p>{"Break-fix support charges when something goes wrong. Managed IT covers ongoing monitoring, patching, security and help desk support for a regular fee, so the focus shifts to preventing problems rather than reacting to them."}</p>
      <h3>How long does it take to switch IT providers?</h3>
      <p>{"It depends on the size of your environment, the notice period in your current agreement and how well things are documented. Plan for an overlap period so the handover is orderly rather than rushed."}</p>
      <h3>Do we need a local provider if most of our systems are in the cloud?</h3>
      <p>{"Much support can be delivered remotely, but a provider who can attend on site helps with network faults, new office setups and hardware issues. We are based in Collingwood, Melbourne, and also support clients remotely."}</p>
      <h3>What should a provider do in the first month?</h3>
      <p>{"Expect an audit of devices, accounts and licences, a review of security settings and backups, documentation of your systems and a list of recommended fixes in priority order. If you want to talk it through, "}<Link to="/contact">contact our team</Link>{"."}</p>
    </BlogPost>
  )
}
