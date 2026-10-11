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
// URLs that are not a page (old .html links, typos) render from scratch and redirect.
const page = root.hasChildNodes() && preloadRoute(location.pathname)
if (page) {
  page.finally(() => hydrateRoot(root, app))
} else {
  root.textContent = ''
  createRoot(root).render(app)
}
