function Projects() {
  const items = [
    {
      title: "Interactive 3D Landing",
      desc: "A Spline-powered hero with smooth scroll and delightful details.",
      tags: ["React", "Spline", "Tailwind"],
      link: "#",
    },
    {
      title: "Realtime Dashboard",
      desc: "Streaming metrics with framer-motion animations and charts.",
      tags: ["FastAPI", "WebSockets", "Framer Motion"],
      link: "#",
    },
    {
      title: "Design System",
      desc: "Accessible components with theming and tokens.",
      tags: ["Design", "Accessibility", "Figma"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
          <p className="mt-2 text-blue-100/80">A few projects that showcase my range and craft.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-white font-semibold tracking-tight">{item.title}</h3>
                <span className="text-xs rounded-full bg-blue-600/20 text-blue-200 px-2 py-1">Case</span>
              </div>
              <p className="mt-2 text-sm text-blue-100/80">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs text-blue-100/80 bg-white/5 rounded px-2 py-1 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
