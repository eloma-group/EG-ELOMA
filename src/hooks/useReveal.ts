import { useEffect } from 'react'

// Fades `.rv` sections in as they scroll into view (adds `.in`), with a 2.5s safety net.
export function useReveal(key: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.rv')
    const showAll = () => els.forEach(x => x.classList.add('in'))
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      showAll()
      return
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('in')
          io.unobserve(x.target)
        }
      })
    }, { rootMargin: '0px 0px -6% 0px' })
    els.forEach(x => io.observe(x))
    const timer = setTimeout(showAll, 2500)
    return () => {
      io.disconnect()
      clearTimeout(timer)
    }
  }, [key])
}
