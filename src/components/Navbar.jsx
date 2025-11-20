import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3 group">
              <img src="/flame-icon.svg" alt="Logo" className="h-8 w-8" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">KH. Nayeam Ibna Nasir</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-blue-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-blue-600 px-3.5 py-2 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors"
              >
                Let’s Talk
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white/80 hover:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <Menu size={20} />
            </button>
          </div>
          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-blue-100/90 hover:text-white hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 bg-blue-600 text-white text-center hover:bg-blue-500"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
