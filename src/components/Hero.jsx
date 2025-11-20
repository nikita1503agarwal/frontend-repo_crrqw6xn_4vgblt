import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/10 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl py-20 sm:py-28">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90">
            Tech • Portfolio • Interactive • Modern
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">KH. Nayeam Ibna Nasir</span>
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            Agritech-minded entrepreneur and UI/UX enthusiast. I build modern, interactive web experiences and lead tech-driven projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">Contact Me</a>
          </div>
          <div className="mt-6 text-sm text-blue-100/80">
            <p>Dhaka, Bangladesh • +8801710651618 • khnayeam009@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
