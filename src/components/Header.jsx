import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/quote', label: 'Request a Quote' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(168,85,247,0.35)]" />
          <span className="font-semibold tracking-tight text-white">Boesman Creative Co.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="p-2 rounded-lg hover:bg-white/5 text-white">
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navLinks.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-2 rounded text-sm ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
