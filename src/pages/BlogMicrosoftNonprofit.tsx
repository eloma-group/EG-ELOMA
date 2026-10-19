import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogMicrosoftNonprofit() {
  return (
    <BlogPost path="/blog-microsoft-nonprofit" geoNote>
      <p>Microsoft offers grants and discounts to eligible nonprofit organisations. Offers and eligibility are set by Microsoft, vary by country and can change, so always check the current details.</p>
      <h2>Typical offers</h2>
      <ul>
        <li>Microsoft 365 Business Basic free for up to 300 users.</li>
        <li>Discounted Microsoft 365 Business Premium and other plans.</li>
        <li>An annual Azure credit grant.</li>
        <li>Discounts on Copilot, Dynamics 365 and Power Platform.</li>
      </ul>
      <h2>Who is eligible?</h2>
      <p>Generally registered nonprofit or charitable organisations that meet Microsoft's criteria. Government bodies, hospitals, schools and universities usually have separate programs. Individuals, volunteers and members are not eligible.</p>
      <h2>How to register</h2>
      <ol>
        <li>Gather your registration details (in Australia, your ACNC registration).</li>
        <li>Register through Microsoft's nonprofit portal.</li>
        <li>Wait for verification.</li>
        <li>Activate the grants and plans that suit each person.</li>
      </ol>
      <p>{"We can help with eligibility, registration and setup. See "}<Link to="/microsoft#nonprofit">Microsoft for Nonprofits</Link>.</p>
    </BlogPost>
  )
}
