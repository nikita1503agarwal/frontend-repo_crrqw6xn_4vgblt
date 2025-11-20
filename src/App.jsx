import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      {/* Subtle starry gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(37,99,235,0.25),transparent),radial-gradient(1000px_500px_at_90%_-10%,rgba(8,145,178,0.20),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/70 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="text-blue-100/80 hover:text-white">Work</a>
            <a href="#about" className="text-blue-100/80 hover:text-white">About</a>
            <a href="#contact" className="text-blue-100/80 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
