import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogTeamsPhone() {
  return (
    <BlogPost path="/blog-teams-phone">
      <p>If your team already uses Microsoft Teams for chat and meetings, Teams Phone lets them make and take regular phone calls from the same app on a laptop, mobile or desk phone.</p>
      <p>{"Instead of a separate phone system in a cupboard, your business phone service runs in the cloud and is managed in the Teams admin centre. Staff can answer the office number from home, transfer a call to a colleague with a click, and see who is available before they put a caller through. For businesses that already live in Microsoft 365, it often means one less system to manage."}</p>

      <h2>How Teams Phone works</h2>
      <p>{"Teams Phone adds the calling features: dialling, transfers, voicemail, call forwarding, auto attendants and call queues. On its own it doesn't connect to the public phone network. For that you need a connection to a phone carrier, which supplies your numbers and carries calls to and from landlines and mobiles."}</p>
      <p>Microsoft offers several ways to make that connection:</p>
      <ul>
        <li><b>Microsoft Calling Plans:</b>{" Microsoft acts as your phone carrier. At the time of writing, Microsoft's availability page lists Calling Plans as not available to buy in Australia, so most Australian businesses use one of the other options."}</li>
        <li><b>Operator Connect:</b>{" a certified carrier links its service to your Teams tenant. You choose the operator, then manage numbers and users in Teams. This is usually the simplest route for Australian small and medium businesses."}</li>
        <li><b>Direct Routing:</b>{" you connect any carrier through a certified session border controller (SBC), either run by you or provided as a managed service. It suits more complex setups, such as keeping an existing carrier contract or connecting older equipment."}</li>
        <li><b>Teams Phone Mobile:</b>{" with a participating mobile carrier, a user's mobile SIM number also becomes their Teams number."}</li>
      </ul>
      <p>{"Availability changes over time, so check Microsoft's country availability pages and the Operator Connect directory on learn.microsoft.com before you decide."}</p>

      <h2>What you need</h2>
      <ul>
        <li>A Teams Phone licence for each user who makes calls.</li>
        <li>A calling plan or a connection to a phone carrier.</li>
        <li>Phone numbers, either new or ported from your current provider.</li>
        <li>Optional: compatible desk phones and headsets.</li>
      </ul>
      <p>{"Teams Phone is sold as an add-on licence, and it is included in some higher-tier enterprise plans. Each calling user also needs Teams itself through their Microsoft 365 plan or a standalone Teams licence. Microsoft has changed how Teams is bundled in recent years, so confirm which version of each plan you have. Our "}<Link to="/microsoft-licensing">Microsoft licensing</Link>{" team can check your current subscriptions and recommend the right mix for Australian businesses."}</p>
      <p>{"You will also want reliable internet. Calls run over your connection, so check your bandwidth and Wi-Fi coverage, especially if several people are on calls at once."}</p>

      <h2>Keep your numbers</h2>
      <p>Most existing landline, 1300 and 1800 numbers can be ported, so customers keep calling the same numbers.</p>
      <p>{"Porting is handled by your new carrier. They will usually ask for a recent bill from your current provider, your account number and an authority form signed by the account holder. The details on the form must match the old account exactly, or the port can be rejected and delayed."}</p>
      <p>A sensible porting process looks like this:</p>
      <ol>
        <li>List every number you have, including fax lines, 1300 and 1800 numbers and any numbers that only forward somewhere.</li>
        <li>Check your current contract for exit terms before you start.</li>
        <li>Set up Teams Phone, users and call flows first, using temporary numbers for testing.</li>
        <li>Lodge the port request with your new carrier and agree a cutover date.</li>
        <li>{"Don't cancel your old service yourself. Cancelling before the port completes can mean losing the number."}</li>
        <li>{"After cutover, test inbound and outbound calls on every number, including after-hours routing and voicemail."}</li>
      </ol>
      <p>{"If you're weighing up which number types to keep, our guide to "}<Link to="/blog-1300-vs-1800-numbers">1300 vs 1800 numbers</Link>{" explains the differences, and our "}<Link to="/toll-free-number">toll-free number</Link>{" service covers 1800 numbers in more detail."}</p>

      <h2>Add call flows</h2>
      <ul>
        <li>Auto attendants (IVR menus) to route callers.</li>
        <li>Call queues for sales or support teams.</li>
        <li>Business hours and holiday routing.</li>
      </ul>
      <p>{"An auto attendant greets callers and offers options, such as \"Press 1 for sales, 2 for accounts\". A call queue then rings a group of people, either all at once or in turn, and plays hold music until someone answers. You can set different routes for business hours, after hours and public holidays, for example sending after-hours calls to voicemail or an on-call mobile."}</p>
      <p>{"Keep menus short. Two or three options are usually enough for a small business. Long menus frustrate callers and lead to more hang-ups."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Forgetting numbers that are rarely used but still matter, such as an alarm line or an old number printed on vehicles.</li>
        <li>{"Not setting emergency addresses. Make sure each location is recorded correctly so emergency (000) calls carry accurate location details, and check with your carrier how this works for remote staff."}</li>
        <li>Skipping user training. A short session on answering, transferring and using voicemail avoids lost calls in the first week.</li>
        <li>{"Relying on poor Wi-Fi. Call quality problems are often a network issue, not a Teams issue."}</li>
        <li>Porting on a busy day. Choose a quieter period and have someone ready to test.</li>
      </ul>

      <h2>Quick checklist</h2>
      <ul>
        <li>Teams Phone licence for every calling user.</li>
        <li>Carrier chosen (Operator Connect or Direct Routing in most Australian cases).</li>
        <li>All numbers listed and port paperwork ready.</li>
        <li>Auto attendants, queues and holiday hours set up and tested.</li>
        <li>Emergency addresses configured.</li>
        <li>Headsets or desk phones that are certified for Teams.</li>
        <li>Internet and Wi-Fi checked for call quality.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Can I keep my existing desk phones?</h3>
      <p>{"Only if they are certified for Teams or supported through your carrier's setup. Many older handsets aren't. Teams-certified desk phones and headsets give the most reliable experience."}</p>
      <h3>{"Can staff use the business number from their mobile?"}</h3>
      <p>{"Yes. With the Teams app on their phone, staff can make and take calls from the business number, so their personal number stays private."}</p>
      <h3>{"What happens to calls if our office internet goes down?"}</h3>
      <p>{"Because the service runs in the cloud, staff can keep working from the mobile app over mobile data. You can also set call forwarding rules as a backup."}</p>
      <h3>How long does porting take?</h3>
      <p>{"It depends on the carriers and number types involved. Simple ports can be quick, while 1300 and 1800 numbers or multi-number ports often take longer. Your new carrier will give you an estimate when you lodge the request."}</p>

      <p>{"Teams Phone is one part of a wider "}<Link to="/microsoft">Microsoft 365</Link>{" setup. See our "}<Link to="/landline-number">Landline Number</Link>{" and "}<Link to="/ivr-system">IVR System</Link>{" services."}</p>
    </BlogPost>
  )
}
