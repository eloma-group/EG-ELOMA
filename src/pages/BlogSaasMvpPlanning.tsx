import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogSaasMvpPlanning() {
  return (
    <BlogPost path="/blog-saas-mvp-planning">
      <p>Many SaaS ideas stall because the first version tries to do everything. A minimum viable product (MVP) focuses on the smallest set of features that delivers real value to your first customers.</p>
      <h2>Start with one problem</h2>
      <p>Write down the single problem your product solves and who has it. Every MVP feature should support that one outcome.</p>
      <h2>What an MVP usually needs</h2>
      <ul>
        <li>Sign-up, sign-in and basic user roles.</li>
        <li>The core workflow that solves the problem.</li>
        <li>Simple subscriptions and payments.</li>
        <li>An admin view to support customers.</li>
        <li>Basic analytics so you can learn from usage.</li>
      </ul>
      <h2>What can usually wait</h2>
      <ul>
        <li>Advanced reporting and dashboards.</li>
        <li>Integrations beyond the one or two customers ask for most.</li>
        <li>Native mobile apps (a responsive web app often comes first).</li>
        <li>Complex permission systems.</li>
      </ul>
      <h2>Plan for growth from day one</h2>
      <p>Even a small MVP should be secure, multi-tenant and hosted on a platform that can scale, such as Microsoft Azure.</p>
      <p><Link to="/saas-development">See our SaaS development service</Link>.</p>
    </BlogPost>
  )
}
