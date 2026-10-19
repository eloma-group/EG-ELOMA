import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogMicrosoftNonprofit() {
  return (
    <BlogPost path="/blog-microsoft-nonprofit" geoNote>
      <p>Microsoft offers grants and discounts to eligible nonprofit organisations. Offers and eligibility are set by Microsoft, vary by country and can change, so always check the current details.</p>
      <p>{"For Australian not-for-profits, these offers can make a real difference to the cost of email, file storage, collaboration and security. This guide explains what is typically available, who qualifies, how registration works, and what to plan for after you are approved. Pricing and offer details change from time to time, so treat this as an overview and confirm specifics on Microsoft's nonprofit website before you make decisions."}</p>

      <h2>Typical offers</h2>
      <ul>
        <li><b>Microsoft 365 Business Basic</b> granted free for up to 300 users. This covers web and mobile versions of Word, Excel and PowerPoint, Outlook email, Teams, SharePoint and OneDrive cloud storage.</li>
        <li><b>Discounted Microsoft 365 Business Premium</b> and other plans, such as Microsoft 365 E3 and E5, plus a lower-cost frontline plan.</li>
        <li><b>An annual Azure credit grant</b> for eligible organisations that use Microsoft Azure cloud services.</li>
        <li><b>Discounts on Copilot, Dynamics 365 and Power Platform</b>, including nonprofit pricing on Microsoft 365 Copilot and some Dynamics 365 and Power Apps products.</li>
        <li><b>Discounted security add-ons</b>, such as Microsoft Defender, Purview and Intune, for organisations that need stronger protection.</li>
      </ul>

      <h3>What changed in 2025</h3>
      <p>{"From 1 July 2025, Microsoft retired its free Microsoft 365 Business Premium grant (previously up to 10 free licences) and the Office 365 E1 grant for nonprofits. Business Basic remains free for up to 300 users, and Business Premium is still available at a nonprofit discount. Organisations that relied on the free Premium licences had to move to a paid or different plan at renewal. Nonprofit subscriptions are now generally paid annually, so budget for a yearly payment rather than a monthly one."}</p>
      <p>{"If your organisation set up Microsoft 365 a few years ago, it's worth checking the admin centre to confirm which licences you hold now and when they renew."}</p>

      <h2>Who is eligible?</h2>
      <p>{"Generally, organisations with recognised nonprofit or charitable legal status in their country that meet Microsoft's criteria. They must operate on a not-for-profit basis, have a mission that benefits the community (for example social welfare, education, environment, culture or human rights), and agree to Microsoft's non-discrimination policy. Public libraries and public museums can also qualify."}</p>
      <p>{"Some organisation types are excluded. These include government agencies, schools, colleges and universities, professional and trade associations, sports organisations, and political, labour and fraternal groups. Education bodies usually have separate Microsoft programs, and health services should check the current criteria carefully. Individuals, volunteers and members are not eligible in their own right."}</p>

      <h2>How to register</h2>
      <ol>
        <li><b>Gather your registration details (in Australia, your ACNC registration).</b> Have your ABN, legal name, registered address and a contact email on your organisation domain ready. Make sure your ACNC listing is current, because verification draws on public information.</li>
        <li><b>Register through Microsoft's nonprofit portal.</b> {"Go to Microsoft's Nonprofit Hub and either create a new Microsoft 365 tenant or sign in with your existing one. Registration must be done by an employee or authorised volunteer of the organisation, not by an outside IT provider."}</li>
        <li><b>Wait for verification.</b> {"Microsoft uses a third-party validation partner to check eligibility. Microsoft says this can take up to a few business days, though it may take longer if extra documents are requested."}</li>
        <li><b>Activate the grants and plans that suit each person.</b> Once approved, offers appear in the Nonprofit Hub and the Microsoft 365 admin centre.</li>
      </ol>
      <p>{"Microsoft also asks organisations to confirm their eligibility periodically by agreeing to its donation rules, so keep your account details and contacts up to date."}</p>

      <h2>Choosing the right licence for each person</h2>
      <p>{"You don't need to give everyone the same plan. A practical approach is to mix licences by role:"}</p>
      <ul>
        <li><b>Business Basic</b> for volunteers and staff who mainly use email, Teams and shared files in a browser.</li>
        <li><b>Business Premium</b> for people handling sensitive client, donor or financial information, or who need the desktop Office apps and device management.</li>
        <li><b>Frontline plans</b> for shift workers who need limited access on a shared or mobile device.</li>
      </ul>
      <p>{"For a deeper comparison of what each plan includes, see "}<Link to="/blog-microsoft-365-plans-compared">Microsoft 365 Business Basic vs Standard vs Premium</Link>{"."}</p>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li><b>Using personal accounts.</b> Free consumer email makes it hard to control access when people leave. Use accounts on your own domain.</li>
        <li><b>Skipping security settings.</b> Free licences still need multi-factor authentication and sensible sharing settings. Not-for-profits hold personal information and are attractive targets for scammers.</li>
        <li><b>Leaving old licences in place.</b> Remove licences when staff or volunteers leave, so you are not paying for or exposing unused accounts.</li>
        <li><b>Not planning the migration.</b> Moving email and files from another system needs a plan so nothing is lost.</li>
      </ul>
      <p>{"If you hold personal information, it's also worth reading our guide to the "}<Link to="/blog-essential-eight-guide">ASD Essential Eight</Link>{" for practical security priorities."}</p>

      <h2>Quick checklist</h2>
      <ul>
        <li>ACNC registration and ABN details current.</li>
        <li>Organisation domain and admin contact ready.</li>
        <li>Registered through the Microsoft Nonprofit Hub.</li>
        <li>Licences assigned by role, not one size for all.</li>
        <li>Multi-factor authentication turned on for everyone.</li>
        <li>Renewal dates and annual costs noted in your budget.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Is Microsoft 365 really free for not-for-profits?</h3>
      <p>{"Microsoft 365 Business Basic is granted free for up to 300 users for eligible organisations. Other plans, including Business Premium, are discounted rather than free."}</p>
      <h3>Can our IT provider register on our behalf?</h3>
      <p>{"Microsoft requires an employee or authorised volunteer to complete registration. An IT partner can help you prepare, check your details and set everything up once you are approved."}</p>
      <h3>What if our application is declined?</h3>
      <p>{"Check that your legal status and public records match what you entered, then contact Microsoft's nonprofit support through the Nonprofit Hub. Some organisation types are simply not eligible, in which case standard business licensing applies."}</p>
      <h3>We already use Microsoft 365. Can we switch to nonprofit offers?</h3>
      <p>{"Yes. You can register your existing tenant for nonprofit status, then change licences in the admin centre at a sensible point, usually around renewal."}</p>

      <p>{"We can help with eligibility, registration and setup. See "}<Link to="/microsoft#nonprofit">Microsoft for Nonprofits</Link>{", or read about our "}<Link to="/microsoft-licensing">Microsoft licensing</Link>{" for Australian organisations."}</p>
    </BlogPost>
  )
}
