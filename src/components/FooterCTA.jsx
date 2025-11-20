export default function FooterCTA() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04] mix-blend-soft-light" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-amber-400/10 p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Let’s craft something delightful</h3>
          <p className="mt-2 text-emerald-100/85">Motion that feels natural, branding that feels premium.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">Start a Project</a>
            <a href="#projects" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">See Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
