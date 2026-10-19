import { Link } from 'react-router-dom'
import { postByPath } from '../blog'

// "From the blog" links on product pages.
export default function RelatedReading({ posts }: { posts: string[] }) {
  return (
    <section className="s rv">
      <div className="sh">
        <div>
          <p className="ey">From the blog</p>
          <h2>Related reading</h2>
        </div>
      </div>
      <div className="pl">
        {posts.map(path => (
          <Link key={path} to={path}>{postByPath(path).short}</Link>
        ))}
      </div>
    </section>
  )
}
