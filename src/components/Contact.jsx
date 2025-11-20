import { useState } from 'react';

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
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-blue-100/80">Tell me about your project, timeline, and goals.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Name</label>
              <input required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-blue-100/80 mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-blue-100/80 mb-1">Message</label>
            <textarea rows={5} required className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What are we building?" />
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">Send Message</button>
            <span className="text-sm text-blue-100/80">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
