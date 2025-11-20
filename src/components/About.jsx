import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
          <p className="mt-4 text-emerald-100/90">
            I am KH. Nayeam Ibna Nasir — an agritech-minded entrepreneur with a passion for UI/UX and modern web
            experiences. I craft premium, nature-inspired products and digital brands with a handcrafted feel.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-emerald-100/85">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Entrepreneurship & Strategy</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">UI / UX Design</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">React & Frontend</li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">Research & Product</li>
          </ul>
        </motion.div>
        <motion.div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-amber-400/10 p-8 text-emerald-100/90" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="space-y-2 text-sm">
            <p>
              BSc (Hons) in Agriculture — Gopalganj Science and Technology University (2019–2025)
              • CGPA 3.59/4.00
            </p>
            <p>HSC (Science), 2019 — Notre Dame College Mymensingh • GPA 4.25/5.00</p>
            <p>SSC (Science), 2016 — Suti V. M. Pilot Model High School • GPA 5.00/5.00</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">See Work</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
