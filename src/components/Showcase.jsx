import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function EasingPicker({ onChange }) {
  const easings = [
    {
      name: 'easeInOut',
      value: [0.4, 0.0, 0.2, 1],
    },
    {
      name: 'anticipate',
      value: {
        type: 'spring',
        stiffness: 700,
        damping: 20,
      },
    },
    {
      name: 'wobbly',
      value: {
        type: 'spring',
        stiffness: 200,
        damping: 6,
      },
    },
    {
      name: 'snappy',
      value: {
        type: 'spring',
        stiffness: 420,
        damping: 18,
      },
    },
  ]

  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-wrap gap-2">
      {easings.map((e, i) => (
        <button
          key={e.name}
          onClick={() => { setActive(i); onChange(e.value) }}
          className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${active === i ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30' : 'bg-white/5 text-emerald-100/85 border-white/10 hover:bg-white/10'}`}
        >
          {e.name}
        </button>
      ))}
    </div>
  )
}

function LineDrawingDemo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white font-semibold tracking-tight">SVG Line Drawing</h3>
        <span className="text-xs text-emerald-100/70">on-view</span>
      </div>
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-48"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <motion.path
          d="M20 150 C 60 80, 140 220, 180 120"
          fill="none"
          stroke="url(#g)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
        <motion.circle
          r="6"
          fill="#34d399"
          initial={{ cx: 20, cy: 150 }}
          whileInView={{ cx: 180, cy: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.svg>
      <p className="mt-3 text-sm text-emerald-100/80">Crisp, GPU-friendly path reveals with gradient strokes.</p>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />
    </div>
  )
}

function StaggerGridDemo() {
  const dots = Array.from({ length: 42 })
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white font-semibold tracking-tight">Staggered Grid</h3>
        <span className="text-xs text-emerald-100/70">hover</span>
      </div>
      <div className="grid grid-cols-7 gap-3">
        {dots.map((_, i) => (
          <motion.div
            key={i}
            className="h-6 w-6 rounded-full bg-emerald-400/30 border border-emerald-300/30"
            initial={{ opacity: 0, scale: 0.6, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            whileHover={{ scale: 1.25, backgroundColor: 'rgba(52,211,153,0.65)' }}
          />
        ))}
      </div>
      <p className="mt-3 text-sm text-emerald-100/80">Subtle stagger builds rhythm; hover adds a tactile bump.</p>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />
    </div>
  )
}

function EasingPlayground() {
  const [transition, setTransition] = useState({ type: 'spring', stiffness: 420, damping: 18 })
  const [flip, setFlip] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white font-semibold tracking-tight">Easing Playground</h3>
        <button onClick={() => setFlip((v) => !v)} className="text-xs rounded-full bg-emerald-500/15 text-emerald-200 px-3 py-1 border border-emerald-400/20 hover:bg-emerald-500/25">Play</button>
      </div>
      <EasingPicker onChange={setTransition} />
      <div className="mt-6 h-28 rounded-xl border border-white/10 bg-white/5 p-3">
        <motion.div
          className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-300 to-amber-200 shadow-lg"
          animate={{ x: flip ? 'calc(100% - 2rem)' : 0 }}
          transition={{ ...transition, duration: 0.9 }}
        />
      </div>
      <p className="mt-3 text-sm text-emerald-100/80">Switch easings and feel the difference in energy.</p>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />
    </div>
  )
}

function OrbitsDemo() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-white font-semibold tracking-tight">Orbits</h3>
        <span className="text-xs text-emerald-100/70">loop</span>
      </div>
      <div className="relative mx-auto my-6 h-48 w-48">
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute inset-8 rounded-full border border-white/10" />

        <span className="absolute left-1/2 top-1/2 -ml-3 -mt-3 h-6 w-6 rounded-full bg-amber-200/90 shadow" />

        <span className="absolute left-1/2 top-0 -ml-2 h-4 w-4 rounded-full bg-emerald-300 animate-orbit-slow" />
        <span className="absolute left-1/2 top-0 -ml-1.5 h-3 w-3 rounded-full bg-amber-300 animate-orbit-mid" />
        <span className="absolute left-1/2 top-0 -ml-1 h-2.5 w-2.5 rounded-full bg-emerald-200 animate-orbit-fast" />
      </div>
      <p className="text-sm text-emerald-100/80">Ambient motion gives a living, crafted feel.</p>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />
    </div>
  )
}

export default function Showcase() {
  const words = ['Animate', 'Orchestrate', 'Delight']
  const [index, setIndex] = useState(0)

  return (
    <section id="demos" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/90">Motion Demos</div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white">
            <span className="text-white/90">Inspired by</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-amber-200">anime.js</span>{' '}
            <span className="text-white/80">— crafted with modern React motion.</span>
          </h2>
          <div className="mt-3 flex items-center gap-2 text-emerald-100/80 text-sm">
            <span>We</span>
            <div className="relative w-36 h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 text-emerald-200"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>interfaces.</span>
            <button
              onClick={() => setIndex((i) => (i + 1) % words.length)}
              className="ml-2 text-xs rounded-full bg-emerald-500/15 text-emerald-200 px-2.5 py-1 border border-emerald-400/20 hover:bg-emerald-500/25"
            >
              Next
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LineDrawingDemo />
          <StaggerGridDemo />
          <EasingPlayground />
          <OrbitsDemo />
        </div>
      </div>
    </section>
  )
}
