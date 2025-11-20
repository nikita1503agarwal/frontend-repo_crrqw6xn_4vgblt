import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50">
      {/* Nature-inspired radial background */}
      <div className="fixed inset-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_90%_-10%,rgba(245,158,11,0.12),transparent)]" />
      {/* Subtle grain texture overlay */}
      <div className="pointer-events-none fixed inset-0 bg-grain opacity-[0.06] mix-blend-soft-light" aria-hidden="true" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-100/80 text-sm">© {new Date().getFullYear()} KH. Nayeam Ibna Nasir. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="text-emerald-100/80 hover:text-white">Work</a>
            <a href="#about" className="text-emerald-100/80 hover:text-white">About</a>
            <a href="#contact" className="text-emerald-100/80 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
