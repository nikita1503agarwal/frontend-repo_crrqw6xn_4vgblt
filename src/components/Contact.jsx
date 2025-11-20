import { useState } from 'react';
import { motion } from 'framer-motion'

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Demo only – wire to backend later if needed
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! I’ll get back to you soon.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      {/* Gentle texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light" aria-hidden="true" />

      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s connect</h2>
          <p className="mt-2 text-emerald-100/85">Dhaka, Bangladesh • +8801710651618 • khnayeam009@gmail.com</p>
          <div className="mt-3 flex items-center justify-center gap-4 text-sm">
            <a href="https://www.facebook.com/share/14JLH3QtAbW/" target="_blank" rel="noreferrer" className="text-emerald-100/85 hover:text-white">Facebook</a>
            <a href="https://www.linkedin.com/in/kh-nayeam-b46228336" target="_blank" rel="noreferrer" className="text-emerald-100/85 hover:text-white">LinkedIn</a>
            <a href="mailto:khnayeam009@gmail.com" className="text-emerald-100/85 hover:text-white">Email</a>
          </div>
        </div>

        <motion.form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4 will-change-transform" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} whileHover={{ y: -2 }}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-emerald-100/85 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-emerald-950/70 border border-white/10 px-3 py-2 text-white placeholder:text-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-emerald-100/85 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-emerald-950/70 border border-white/10 px-3 py-2 text-white placeholder:text-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-emerald-100/85 mb-1">Message</label>
            <textarea rows={5} required className="w-full rounded-lg bg-emerald-950/70 border border-white/10 px-3 py-2 text-white placeholder:text-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can I help?" />
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">Send Message</button>
            <span className="text-sm text-emerald-100/85">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
