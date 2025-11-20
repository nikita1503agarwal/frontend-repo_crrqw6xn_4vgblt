function Projects() {
  const items = [
    {
      title: "Coco Coffee",
      desc: "Premium ready-to-drink coffee naturally sweetened with pure honey. Healthy, delicious, and convenient.",
      tags: ["FMCG", "Branding", "Go-To-Market"],
      link: "#",
    },
    {
      title: "Vetmedix",
      desc: "A one-stop e-commerce platform for pet food, accessories, and verified veterinary-prescribed medicines.",
      tags: ["E-commerce", "Pharma", "Logistics"],
      link: "#",
    },
    {
      title: "Bionex 4-4-4 Super Compost",
      desc: "Scientifically balanced organic fertilizer that restores soil health and boosts crop yields.",
      tags: ["Agritech", "Sustainability", "Soil"],
      link: "#",
    },
    {
      title: "Aqualanse",
      desc: "IoT + software for real-time water quality monitoring with smart alerts and insights for fish farmers.",
      tags: ["IoT", "Analytics", "Aquaculture"],
      link: "#",
    },
    {
      title: "Stock-X BD Ltd.",
      desc: "University startup project. Led product development, operations, and strategy under UIHP.",
      tags: ["Startup", "Leadership", "Strategy"],
      link: "#",
    },
    {
      title: "UI/UX & Web Projects",
      desc: "Designing and building modern interfaces, motion-rich web experiences, and accessible systems.",
      tags: ["UI/UX", "React", "Tailwind"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work & Initiatives</h2>
          <p className="mt-2 text-blue-100/80">A mix of startups, research, and design-led projects.</p>
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
