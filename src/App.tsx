import { lazy, Suspense, useLayoutEffect, type ComponentType, type ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useReveal } from './hooks/useReveal'
import ComingSoon from './components/ComingSoon'

// While true, only the pages listed in the locked glob are published; every other URL shows "Coming soon".
// The locked pages are left out of the build entirely. Set to false to publish all pages.
const SITE_LOCKED = false

// Every file in ./pages becomes a route: Home.tsx -> "/", WebsiteDevelopment.tsx -> "/website-development".
const modules = SITE_LOCKED
  ? import.meta.glob<{ default: ComponentType }>(['./pages/Home.tsx', './pages/Services.tsx', './pages/Microsoft.tsx'])
  : import.meta.glob<{ default: ComponentType }>('./pages/*.tsx')

const slugFor = (file: string) => {
  const name = file.match(/\.\/pages\/(.+)\.tsx$/)![1]
  if (name === 'Home') return ''
  return name.replace(/^P(?=\d)/, '').replace(/(?<=[a-z0-9])(?=[A-Z])|(?<=[a-z])(?=\d)/g, '-').toLowerCase()
}

const pages = Object.entries(modules).map(([file, load]) => ({ path: '/' + slugFor(file), Page: lazy(load) }))

function PageShell({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  useReveal(pathname)
  useLayoutEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return children
}

// Old static URLs (/seo.html, /index.html) redirect to the clean routes.
function Fallback() {
  const { pathname, search, hash } = useLocation()
  const m = pathname.match(/^\/([a-z0-9-]+)\.html$/)
  if (!m && SITE_LOCKED) return <PageShell><ComingSoon /></PageShell>
  const to = m ? (m[1] === 'index' ? '/' : '/' + m[1]) : '/'
  return <Navigate to={to + (m ? search + hash : '')} replace />
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <Suspense fallback={null}>
      <Routes>
        {pages.map(({ path, Page }) => (
          <Route key={path} path={path} element={<PageShell key={pathname}><Page /></PageShell>} />
        ))}
        <Route path="*" element={<Fallback key={pathname} />} />
      </Routes>
    </Suspense>
  )
}
