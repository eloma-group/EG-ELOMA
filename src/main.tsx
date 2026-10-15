import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App, { preloadRoute } from './App'
import './site.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered at build time (scripts/prerender.mjs): hydrate that HTML instead of rendering again.
// The 404 page (dist/404.html, served for unknown URLs) is hydrated too; an empty shell renders from scratch.
if (root.hasChildNodes()) {
  // The prerendered <title> is written without data-pre (see scripts/prerender.mjs); mark it so PageShell can drop it.
  document.querySelectorAll('head > title').forEach(t => t.setAttribute('data-pre', ''))
  const page = preloadRoute(location.pathname) ?? Promise.resolve()
  page.finally(() => hydrateRoot(root, app))
} else {
  root.textContent = ''
  createRoot(root).render(app)
}
