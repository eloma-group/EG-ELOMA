import { Link } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

export default function BlogCoreWebVitals() {
  return (
    <BlogPost path="/blog-core-web-vitals">
      <p>Core Web Vitals are three measurements Google uses to judge real-world user experience. Good scores help visitors stay, and they form part of how Google evaluates pages.</p>
      <h2>The three measures</h2>
      <ul>
        <li><b>Largest Contentful Paint (LCP):</b>{" how quickly the main content appears. Aim for 2.5 seconds or less."}</li>
        <li><b>Interaction to Next Paint (INP):</b>{" how quickly the page responds when someone taps or clicks. Aim for 200 milliseconds or less."}</li>
        <li><b>Cumulative Layout Shift (CLS):</b>{" how much the layout jumps while loading. Aim for 0.1 or less."}</li>
      </ul>
      <h2>Common fixes</h2>
      <ul>
        <li>Compress and correctly size images.</li>
        <li>Remove unused scripts and plugins.</li>
        <li>Reserve space for images and embeds so the layout doesn't jump.</li>
        <li>Use good hosting and caching.</li>
      </ul>
      <h2>How to check yours</h2>
      <p>Use Google PageSpeed Insights or the Core Web Vitals report in Google Search Console.</p>
      <p>{"Our "}<Link to="/website-development">websites</Link>{" are built for speed from day one."}</p>
    </BlogPost>
  )
}
