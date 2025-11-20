import { useEffect, useRef } from 'react'

export default function Marquee({ speed = 40 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = performance.now()

    let raf
    const tick = (t) => {
      const dt = (t - start) / 1000
      start = t
      const x = (parseFloat(el.style.getPropertyValue('--x')) || 0) - (speed * dt)
      el.style.setProperty('--x', `${x}`)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [speed])

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/5">
      <div
        ref={ref}
        className="flex whitespace-nowrap py-3 will-change-transform"
        style={{ transform: 'translateX(calc(var(--x, 0px) * 1px))' }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-6 text-emerald-100/75">• fluid • stagger • timeline • svg • physics • accessibility</span>
        ))}
      </div>
    </div>
  )
}
