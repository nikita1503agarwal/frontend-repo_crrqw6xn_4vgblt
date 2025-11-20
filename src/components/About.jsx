function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
          <p className="mt-4 text-blue-100/85">
            I’m a product-minded engineer who blends interaction design with solid engineering. I love
            building expressive interfaces, smooth motion, and systems that scale.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-100/80">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">React & TypeScript</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">FastAPI & Python</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Tailwind & Design Systems</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">3D & Motion</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-8 text-blue-100/85">
          <p className="leading-relaxed">
            Currently exploring how playful interactions can make complex products feel simple. When I’m not in the editor,
            I’m sketching ideas, learning new tools, and experimenting with 3D on the web.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">See Work</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
