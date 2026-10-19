import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogCopilotReadiness() {
  return (
    <BlogPost path="/blog-copilot-readiness" geoNote>
      <p>Microsoft 365 Copilot can draft documents, summarise meetings and answer questions using your organisation's data. Because it respects existing permissions, it can surface anything a user already has access to, including files that were shared too widely years ago.</p>
      <h2>Five steps before you switch it on</h2>
      <ol>
        <li>Review who can access sensitive SharePoint sites and Teams.</li>
        <li>Remove 'anyone with the link' sharing where it isn't needed.</li>
        <li>Apply sensitivity labels to confidential documents.</li>
        <li>Archive old, duplicate and out-of-date files.</li>
        <li>Choose a pilot group and agree what success looks like.</li>
      </ol>
      <h2>Pick the right first use cases</h2>
      <ul>
        <li>Summarising long email threads and meetings.</li>
        <li>First drafts of proposals and policies.</li>
        <li>Finding information across Teams, Outlook and SharePoint.</li>
      </ul>
      <h2>Train people, not just licences</h2>
      <p>Short, practical sessions on writing good prompts and checking outputs make the difference between a novelty and a real productivity gain.</p>
      <p>{"We can review your Microsoft 365 permissions and plan a Copilot pilot. See "}<Link to="/microsoft-development">Microsoft Product Development</Link>.</p>
    </BlogPost>
  )
}
