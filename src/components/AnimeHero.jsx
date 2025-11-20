import { motion } from 'framer-motion'

export default function AnimeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(700px_400px_at_90%_-10%,rgba(245,158,11,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-soft-light" />
      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
        >
          Minimal motion. Maximum feel.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 max-w-2xl text-emerald-100/85"
        >
          Take inspiration from anime.js and push it further with modern, accessible, React-first motion design.
        </motion.p>
        <div className="mt-8 flex items-center gap-3">
          <a href="#demos" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500">See Demos</a>
          <a href="#projects" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">View Work</a>
        </div>

        {/* Animated accents */}
        <motion.div
          className="absolute right-10 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-12 bottom-10 h-20 w-20 rounded-full bg-amber-300/20 blur-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>
    </section>
  )
}
