import { useEffect, useRef, useState } from 'react'

interface Props {
  to: number
  pre?: string
  suf?: string
}

const DURATION = 1400

// Counts from 0 up to `to` (ease-out cubic) the first time the number scrolls into view.
export default function CountUp({ to, pre = '', suf = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const io = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return
      io.disconnect()
      let t0: number | null = null
      const step = (t: number) => {
        if (t0 === null) t0 = t
        const p = Math.min((t - t0) / DURATION, 1)
        setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to])

  return <b ref={ref}>{pre + value + suf}</b>
}
