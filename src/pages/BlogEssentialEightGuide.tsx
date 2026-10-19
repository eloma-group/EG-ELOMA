import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogEssentialEightGuide() {
  return (
    <BlogPost path="/blog-essential-eight-guide">
      <p>The Essential Eight is a set of mitigation strategies published by the Australian Signals Directorate (ASD) to help organisations protect themselves against cyber threats. It is widely used as a practical baseline, not just by government.</p>
      <p>{"It isn't a law for most private businesses, but insurers, larger customers and government buyers increasingly ask about it. Even if nobody asks, it is one of the clearest checklists available for deciding where to spend your security effort first."}</p>

      <h2>The eight strategies</h2>
      <p>The strategies fall into three broad goals: stop malicious code running, limit the damage if something gets in, and make sure you can recover.</p>
      <ul>
        <li><b>Application control:</b>{" only approved software can run. If a staff member downloads an unknown program or opens a malicious file, it is blocked instead of executing."}</li>
        <li><b>Patch applications:</b>{" keep apps like browsers, Office, PDF readers and anything exposed to the internet up to date. Attackers move quickly once a weakness becomes public."}</li>
        <li><b>Configure Microsoft Office macro settings:</b>{" block risky macros. Macros from the internet should be blocked, and only trusted, approved macros allowed to run."}</li>
        <li><b>User application hardening:</b>{" turn off features attackers abuse, such as old browser plug-ins and unneeded scripting tools on everyday computers."}</li>
        <li><b>Restrict administrative privileges:</b>{" fewer people with admin access, and admin accounts used only for admin tasks, never for email or web browsing."}</li>
        <li><b>Patch operating systems:</b>{" keep Windows, macOS and servers current, and replace systems that no longer receive security updates."}</li>
        <li><b>Multi-factor authentication:</b>{" a second check when signing in, such as an authenticator app prompt. It matters most for email, remote access and anything holding sensitive data."}</li>
        <li><b>Regular backups:</b>{" backups you have actually tested restoring, kept somewhere ransomware on your network cannot reach or delete."}</li>
      </ul>

      <h2>Maturity levels</h2>
      <p>Each strategy can be implemented at increasing maturity levels. The current Essential Eight Maturity Model describes Maturity Level Zero through to Maturity Level Three. Level Zero means there are weaknesses in that area. Level One is aimed at opportunistic attackers using widely available tools, while Levels Two and Three address more capable and targeted adversaries.</p>
      <p>{"ASD's advice is to reach the same level across all eight strategies before moving any one of them higher. A business with excellent backups but no multi-factor authentication still has an obvious gap."}</p>
      <p>Most small businesses should aim to reach the first level across all eight, then improve from there based on risk. If you handle health records, financial data or work in a supply chain for government or critical infrastructure, Level Two may be a more realistic target.</p>
      <p>{"ASD reviews the model from time to time and has been consulting on how its guidance will evolve. Check "}<b>cyber.gov.au</b>{" for the current version before you plan an assessment."}</p>

      <h2>Where to start</h2>
      <p>You do not have to tackle all eight at once. These four steps give most small businesses the biggest improvement for the effort involved:</p>
      <ol>
        <li><b>Turn on multi-factor authentication for every account.</b>{" Start with email and Microsoft 365, then remote access, banking, accounting software and social media logins. If you use "}<Link to="/microsoft">Microsoft 365</Link>{", much of this can be enforced centrally."}</li>
        <li><b>Make sure backups run daily and test a restore.</b>{" Restore a file, a mailbox and a whole computer or server, and note how long it took."}</li>
        <li><b>Remove admin rights from everyday user accounts.</b>{" Give the few people who need admin access a separate admin account and use it only when required."}</li>
        <li><b>Automate Windows and app updates.</b>{" Use central management so updates install without relying on staff, and check monthly for devices that have fallen behind."}</li>
      </ol>
      <p>{"These four steps remove a large share of common risk. "}<Link to="/cybersecurity">See how our cybersecurity service works</Link>.</p>

      <h2>A worked example</h2>
      <p>{"Imagine a 15-person accounting practice. Staff use Microsoft 365, a cloud practice management system and a few shared laptops. Everyone is a local administrator because it was easier when the computers were set up, and backups go to a USB drive that stays plugged into the office server."}</p>
      <p>{"In the first month, the practice enforces multi-factor authentication for all Microsoft 365 users and moves backups to a cloud service with separate credentials and retention, then tests a restore. In the second month, admin rights are removed and two named staff receive separate admin accounts. In the third, updates are managed centrally and macros from the internet are blocked. Application control and hardening come next, once the basics are stable."}</p>
      <p>{"None of this requires new hardware. It is mostly configuration, documentation and changing a few habits."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li><b>Treating it as a one-off project.</b>{" Patching, access reviews and backup tests need to happen on a schedule, or the controls drift."}</li>
        <li><b>Leaving exceptions in place.</b>{" One shared mailbox or old account without multi-factor authentication is often the way in."}</li>
        <li><b>Backups on the same network.</b>{" Ransomware commonly encrypts or deletes any backup it can reach."}</li>
        <li><b>Assuming the cloud handles it.</b>{" Microsoft and other providers secure their platforms, but your settings, accounts and data are still your responsibility."}</li>
        <li><b>No written record.</b>{" Without documentation you cannot show an insurer or customer what you have done."}</li>
      </ul>

      <h2>Quick checklist</h2>
      <ul>
        <li>Multi-factor authentication on every user and admin account</li>
        <li>Daily backups, stored separately, with a restore tested this quarter</li>
        <li>No everyday accounts with admin rights</li>
        <li>Operating systems and applications updated automatically</li>
        <li>Macros from the internet blocked</li>
        <li>Unsupported software and devices identified and scheduled for replacement</li>
      </ul>
      <p>{"If you also want to understand your obligations when something does go wrong, read our guide to "}<Link to="/blog-notifiable-data-breaches">the Notifiable Data Breaches scheme</Link>{"."}</p>

      <h2>Frequently asked questions</h2>
      <h3>Is the Essential Eight mandatory for my business?</h3>
      <p>{"For most private businesses it is not a legal requirement. It is mandatory for many Australian Government entities, and some contracts, tenders and cyber insurance policies may ask you to meet a particular maturity level. Check the specific contract or policy wording."}</p>
      <h3>How long does it take to reach Maturity Level One?</h3>
      <p>{"It depends on the number of devices, how your systems are set up today and how much legacy software you rely on. A small business with modern Microsoft 365 and current devices can often make fast progress on the four starting steps, while application control usually takes more planning."}</p>
      <h3>Does Microsoft 365 Business Premium cover the Essential Eight?</h3>
      <p>{"It includes tools that help with several strategies, such as device management, multi-factor authentication policies and macro controls. The tools still need to be configured correctly, and backups and patching of other software need separate attention. Our "}<Link to="/blog-microsoft-365-plans-compared">Microsoft 365 plan comparison</Link>{" explains what each plan includes."}</p>
      <h3>Can we do this ourselves?</h3>
      <p>{"Many businesses can complete the first steps in-house. Where it helps to have someone document the setup, manage updates and test backups on a schedule, our "}<Link to="/support-services">managed IT support</Link>{" team can help."}</p>
    </BlogPost>
  )
}
