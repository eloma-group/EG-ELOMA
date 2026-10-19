import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogEssentialEightGuide() {
  return (
    <BlogPost path="/blog-essential-eight-guide">
      <p>The Essential Eight is a set of mitigation strategies published by the Australian Signals Directorate (ASD) to help organisations protect themselves against cyber threats. It is widely used as a practical baseline, not just by government.</p>
      <h2>The eight strategies</h2>
      <ul>
        <li><b>Application control:</b>{" only approved software can run."}</li>
        <li><b>Patch applications:</b>{" keep apps like browsers and Office up to date."}</li>
        <li><b>Configure Microsoft Office macro settings:</b>{" block risky macros."}</li>
        <li><b>User application hardening:</b>{" turn off features attackers abuse."}</li>
        <li><b>Restrict administrative privileges:</b>{" fewer people with admin access."}</li>
        <li><b>Patch operating systems:</b>{" keep Windows and servers current."}</li>
        <li><b>Multi-factor authentication:</b>{" a second check when signing in."}</li>
        <li><b>Regular backups:</b>{" backups you have actually tested restoring."}</li>
      </ul>
      <h2>Maturity levels</h2>
      <p>Each strategy can be implemented at increasing maturity levels. Most small businesses should aim to reach the first level across all eight, then improve from there based on risk.</p>
      <h2>Where to start</h2>
      <ol>
        <li>Turn on multi-factor authentication for every account.</li>
        <li>Make sure backups run daily and test a restore.</li>
        <li>Remove admin rights from everyday user accounts.</li>
        <li>Automate Windows and app updates.</li>
      </ol>
      <p>{"These four steps remove a large share of common risk. "}<Link to="/cybersecurity">See how our cybersecurity service works</Link>.</p>
    </BlogPost>
  )
}
