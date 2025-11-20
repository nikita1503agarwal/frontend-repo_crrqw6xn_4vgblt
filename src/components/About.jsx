function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-blue-100/85">
            I am KH. Nayeam Ibna Nasir — an agritech-minded entrepreneur with a passion for UI/UX and modern web
            experiences. I enjoy turning ideas into practical, scalable solutions and leading teams to execute with
            clarity. My background blends agriculture, startups, and product design.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-100/80">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Entrepreneurship & Strategy</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">UI / UX Design</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">React & Frontend</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Research & Product</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-8 text-blue-100/85">
          <div className="space-y-2 text-sm">
            <p>
              BSc (Hons) in Agriculture — Gopalganj Science and Technology University (2019–2025)
              • CGPA 3.59/4.00
            </p>
            <p>HSC (Science), 2019 — Notre Dame College Mymensingh • GPA 4.25/5.00</p>
            <p>SSC (Science), 2016 — Suti V. M. Pilot Model High School • GPA 5.00/5.00</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">See Work</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
