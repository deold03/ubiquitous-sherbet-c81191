import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-[#D4C5B0]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-['Playfair_Display',Georgia,serif] text-2xl font-medium text-[#F5F0E8]">
                Haus & Co.
              </span>
              <span className="block text-[10px] font-['Inter',sans-serif] tracking-[0.2em] uppercase text-[#6B6560] mt-0.5">
                Chicago Short-Term Rentals
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#8A8580] max-w-xs font-['Inter',sans-serif]">
              A boutique short-term rental management company based in Chicago.
              Owner-operated. Hospitality-first. Transparent pricing.
            </p>
            <p className="text-sm text-[#8A8580] mt-4 font-['Inter',sans-serif]">
              Chicago, Illinois<br />
              <a href="mailto:[EMAIL]" className="text-[#D4C5B0] hover:text-[#F5F0E8] transition-colors">[EMAIL]</a><br />
              <a href="tel:[PHONE]" className="text-[#D4C5B0] hover:text-[#F5F0E8] transition-colors">[PHONE]</a>
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-5">Services</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { to: '/services', label: 'STR Management' },
                { to: '/services', label: 'Design Services' },
                { to: '/services', label: 'Real Estate' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/case-studies', label: 'Portfolio' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-[#8A8580] hover:text-[#D4C5B0] transition-colors no-underline font-['Inter',sans-serif]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-5">Company</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { to: '/about', label: 'About' },
                { to: '/resources', label: 'Resources' },
                { to: '/checklist', label: 'Free Checklist' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-[#8A8580] hover:text-[#D4C5B0] transition-colors no-underline font-['Inter',sans-serif]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-[#6B6560] font-['Inter',sans-serif]">
            © {new Date().getFullYear()} Haus & Co. Chicago Short-Term Rental Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="text-xs text-[#6B6560] hover:text-[#D4C5B0] transition-colors no-underline font-['Inter',sans-serif]">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-xs text-[#6B6560] hover:text-[#D4C5B0] transition-colors no-underline font-['Inter',sans-serif]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
