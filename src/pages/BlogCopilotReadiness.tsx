import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogCopilotReadiness() {
  return (
    <BlogPost path="/blog-copilot-readiness" geoNote>
      <p>{"Microsoft 365 Copilot can draft documents, summarise meetings and answer questions using your organisation's data. Because it respects existing permissions, it can surface anything a user already has access to, including files that were shared too widely years ago."}</p>
      <p>{"That is the main thing to understand before you buy licences. Copilot does not create new access. It makes existing access easier to use. If a salary spreadsheet sits in a folder the whole company can open, nobody may have noticed it for years. Once Copilot is switched on, a simple question about pay could bring it straight to the surface."}</p>

      <h2>How Copilot uses your data</h2>
      <p>{"Microsoft 365 Copilot works with the emails, chats, meetings and files in your Microsoft 365 tenant. When someone asks a question, it searches only the content that person is already allowed to see, then uses that content to write its answer."}</p>
      <p>{"Microsoft says prompts and responses stay within the Microsoft 365 service boundary and are not used to train its foundation models. Read Microsoft’s current privacy documentation for the detail. The bigger risk for most small businesses is not Microsoft. It is their own sharing settings."}</p>
      <p>{"It also helps to know the difference between Copilot Chat, which Microsoft 365 users can use for web-based questions, and the full Microsoft 365 Copilot, which needs a paid licence and can work with your business data. Our "}<Link to="/blog-microsoft-365-plans-compared">comparison of Microsoft 365 plans</Link>{" explains the licensing options."}</p>

      <h2>Five steps before you switch it on</h2>
      <ol>
        <li>Review who can access sensitive SharePoint sites and Teams.</li>
        <li>{"Remove 'anyone with the link' sharing where it isn't needed."}</li>
        <li>Apply sensitivity labels to confidential documents.</li>
        <li>Archive old, duplicate and out-of-date files.</li>
        <li>Choose a pilot group and agree what success looks like.</li>
      </ol>
      <h3>1. Review access to sensitive sites</h3>
      <p>{"Start with the places most likely to hold sensitive information: HR, finance, payroll, legal, board papers and client records. Check who is a member or owner of each SharePoint site and Team. Watch for groups such as \"Everyone\" or \"Everyone except external users\", which give access to the whole organisation."}</p>
      <h3>2. Tighten sharing links</h3>
      <p>{"Links that anyone can open, and links shared with the whole organisation, are a common source of oversharing. Change the default link type in SharePoint and OneDrive to people with existing access or specific people, and clean up old links on sensitive files."}</p>
      <p>{"Microsoft includes some SharePoint Advanced Management tools with Microsoft 365 Copilot licences, such as reports on oversharing and the option to hide selected sites from Copilot while you review them. Check which tools come with your licence."}</p>
      <h3>3. Label confidential documents</h3>
      <p>{"Sensitivity labels mark a document as, for example, Confidential, and can add encryption or restrict who can open it. Copilot respects these protections. Start with a small set of labels that people will actually use, rather than a long list that nobody understands."}</p>
      <h3>4. Archive what you no longer need</h3>
      <p>{"Old drafts, duplicate copies and outdated policies can lead Copilot to give confident answers based on the wrong version. Archiving or deleting stale content improves both security and answer quality. Agree retention rules first, so you don't delete records you are required to keep."}</p>
      <h3>5. Run a pilot</h3>
      <p>{"Pick five to fifteen people from different roles who are curious and willing to give honest feedback. Agree in advance what you will measure, such as time saved on meeting notes or first drafts, and review results after a few weeks before buying more licences."}</p>

      <h2>Pick the right first use cases</h2>
      <ul>
        <li>Summarising long email threads and meetings.</li>
        <li>First drafts of proposals and policies.</li>
        <li>Finding information across Teams, Outlook and SharePoint.</li>
      </ul>
      <p>{"For example, a project manager could ask Copilot in Teams for a summary of decisions and action items after a client meeting, or a sales lead could ask it to draft a proposal from a previous one and the latest pricing notes. Avoid starting with tasks where an error is costly, such as legal advice or financial figures that go straight to clients."}</p>

      <h2>Train people, not just licences</h2>
      <p>Short, practical sessions on writing good prompts and checking outputs make the difference between a novelty and a real productivity gain.</p>
      <p>{"A good prompt gives Copilot a goal, context, the sources to use and the format you want. Compare \"write an email\" with \"draft a short, friendly email to the client confirming the new delivery date, based on yesterday's meeting notes\". Staff also need to know that Copilot can be wrong, so a person must check facts, numbers and tone before anything is sent."}</p>

      <h2>Common mistakes</h2>
      <ul>
        <li>Buying licences for everyone before tidying permissions.</li>
        <li>Treating Copilot answers as final without checking them.</li>
        <li>Rolling it out with no training or success measures.</li>
        <li>Ignoring basic security such as multi-factor authentication. A compromised account with Copilot can find information faster.</li>
      </ul>
      <h3>A quick readiness checklist</h3>
      <ul>
        <li>Sensitive sites reviewed and access tightened.</li>
        <li>Organisation-wide and anonymous links cleaned up.</li>
        <li>Sensitivity labels agreed and published.</li>
        <li>Multi-factor authentication on for every user.</li>
        <li>Pilot group, use cases and measures agreed.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      <h3>Can Copilot see files a user cannot open?</h3>
      <p>{"No. Copilot works within each user's existing permissions. The risk is that those permissions are often wider than people realise."}</p>
      <h3>Do we need Business Premium to use Copilot?</h3>
      <p>{"No. Copilot can be added to Business Basic, Standard or Premium. Premium adds security tools, such as device management and sign-in controls, that make a rollout safer. See our "}<Link to="/microsoft-licensing">Microsoft licensing service</Link>{" for advice on the right mix."}</p>
      <h3>How long does it take to get ready?</h3>
      <p>{"It depends on how much content you have and how tidy it is. A small business with well-organised SharePoint may only need a short review, while years of uncontrolled sharing takes longer."}</p>
      <h3>Is our data safe with Copilot?</h3>
      <p>{"Microsoft provides enterprise data protections, but your own settings matter most. Pairing a Copilot rollout with a "}<Link to="/cybersecurity">cybersecurity review</Link>{" is a sensible step."}</p>

      <p>{"We can review your Microsoft 365 permissions and plan a Copilot pilot. See "}<Link to="/microsoft-development">Microsoft Product Development</Link>.</p>
    </BlogPost>
  )
}
