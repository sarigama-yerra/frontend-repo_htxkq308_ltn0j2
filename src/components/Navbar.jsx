import { useState } from 'react'
import { Menu, ChevronUp } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog', label: 'Blog' },
  { href: '#booking', label: 'Booking' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0f11]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-wide">TailorHub</a>
          <button className="text-white sm:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
          <nav className="hidden sm:flex gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="relative text-sm text-gray-200 hover:text-white transition">
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
              </a>
            ))}
          </nav>
        </div>
        {open && (
          <div className="sm:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="relative py-2 text-sm text-gray-200">
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
      <a href="#home" className="hidden sm:flex items-center gap-1 group fixed bottom-6 right-6 bg-[#0e0f11] text-white border border-white/10 rounded-full px-3 py-2 shadow-lg/20 hover:shadow-white/10 transition">
        <ChevronUp size={16} />
        <span className="text-xs">Top</span>
        <span className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.25)] opacity-0 group-hover:opacity-100 transition" />
      </a>
    </header>
  )
}
