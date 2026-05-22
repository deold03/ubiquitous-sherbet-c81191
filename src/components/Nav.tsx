import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/case-studies', label: 'Portfolio' },
    { to: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8]/95 backdrop-blur-sm border-b border-[#D4C5B0]/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-[#1C1C1C] no-underline">
          <span className="font-['Playfair_Display',Georgia,serif] text-xl font-medium tracking-tight">
            Haus & Co.
          </span>
          <span className="block text-[10px] font-['Inter',sans-serif] tracking-[0.2em] uppercase text-[#6B6560] -mt-0.5">
            Chicago Short-Term Rentals
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-['Inter',sans-serif] text-[#6B6560] hover:text-[#1C1C1C] transition-colors no-underline tracking-wide"
              activeProps={{ className: 'text-[#1C1C1C] font-medium' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#2D4A3E] text-[#F5F0E8] text-sm font-['Inter',sans-serif] px-5 py-2.5 rounded no-underline hover:bg-[#3D6354] transition-colors tracking-wide"
          >
            Get a Revenue Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F5F0E8] border-t border-[#D4C5B0]/50 px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[#1C1C1C] font-['Inter',sans-serif] no-underline text-base"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#2D4A3E] text-[#F5F0E8] text-sm font-['Inter',sans-serif] px-5 py-3 rounded no-underline text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Get a Revenue Estimate
          </Link>
        </div>
      )}
    </nav>
  )
}
