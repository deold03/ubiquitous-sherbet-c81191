import { Link, createFileRoute } from '@tanstack/react-router'
import { LeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Haus & Co. | Chicago Short-Term Rental Management' },
      {
        name: 'description',
        content:
          'Boutique short-term rental management in Chicago. Full-service Airbnb, VRBO & Booking.com management. Transparent all-in revenue share. Owner-operated.',
      },
      { property: 'og:title', content: 'Haus & Co. | Chicago Short-Term Rental Management' },
      {
        property: 'og:description',
        content:
          'Boutique short-term rental management in Chicago. Full-service Airbnb, VRBO & Booking.com management. Transparent all-in revenue share. Owner-operated.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=85)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <p className="text-[#D4C5B0] text-xs tracking-[0.25em] uppercase font-['Inter',sans-serif] mb-6">
              Chicago Short-Term Rental Management
            </p>
            <h1 className="text-[#F5F0E8] text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif] font-medium leading-[1.05] mb-8">
              Your property,<br />
              <em>cared for</em><br />
              like our own.
            </h1>
            <p className="text-[#D4C5B0] text-lg font-['Inter',sans-serif] font-light leading-relaxed mb-10 max-w-md">
              Boutique short-term rental management for Chicago property owners who want 5-star results without the national-company runaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-[#F5F0E8] text-[#1C1C1C] px-8 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-white transition-colors inline-block text-center"
              >
                Get a Free Revenue Estimate
              </Link>
              <Link
                to="/services"
                className="border border-[#F5F0E8]/50 text-[#F5F0E8] px-8 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:border-[#F5F0E8] transition-colors inline-block text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#D4C5B0]/50 text-xs font-['Inter',sans-serif] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-[#D4C5B0]/50 to-transparent" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#2D4A3E] py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              'Licensed Chicago Realtor',
              'Goldman Sachs Alumni',
              '10+ Years Hosting',
              'Airbnb · VRBO · Booking.com',
              'No Hidden Fees',
            ].map((item) => (
              <span key={item} className="text-[#D4C5B0] text-xs tracking-[0.15em] uppercase font-['Inter',sans-serif] flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#D4C5B0]/40 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
            Why Haus & Co.
          </p>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C] max-w-2xl mx-auto leading-tight">
            Small by design.<br />Not by accident.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: '◆',
              title: 'Owner-Operated',
              body: "Your property is managed by the founder — not handed off to a junior coordinator. When you call, you reach the person who knows your unit.",
            },
            {
              icon: '◇',
              title: 'Transparent Pricing',
              body: 'One all-in revenue share. No site visit fees. No restocking invoices. No markups on maintenance. What you see is exactly what you get.',
            },
            {
              icon: '●',
              title: 'Design-Forward',
              body: "Hospitality-grade design isn't an upsell here — it's the foundation. Properties that look stunning earn 5-star reviews and command premium rates.",
            },
            {
              icon: '○',
              title: 'Local Expertise',
              body: "A decade of Chicago hosting experience. We know which neighborhoods drive corporate demand, which drive leisure, and how to price for both.",
            },
            {
              icon: '▲',
              title: 'Multi-Platform',
              body: 'Every property listed and actively managed across Airbnb, VRBO, and Booking.com — with real-time calendar sync and platform-native optimization.',
            },
            {
              icon: '△',
              title: 'Investor-Ready',
              body: "We're also licensed Chicago realtors. If you're buying or selling STR properties, we can help at every step — acquisition through operations.",
            },
          ].map((card) => (
            <div key={card.title} className="group">
              <div className="text-[#2D4A3E] text-lg mb-5">{card.icon}</div>
              <h3 className="font-['Playfair_Display',serif] text-xl text-[#1C1C1C] mb-3">{card.title}</h3>
              <p className="text-[#6B6560] text-sm leading-relaxed font-['Inter',sans-serif]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo + text section */}
      <section className="bg-[#E8DFD0] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[4/5] overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80"
                  alt="Thoughtfully designed Chicago rental interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
                Our philosophy
              </p>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-8">
                Hospitality is<br />
                the <em>product.</em>
              </h2>
              <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-6">
                Most management companies treat your property like inventory — a unit on a spreadsheet, managed at scale. We built Haus & Co. for property owners who believe the guest experience matters. Because when guests feel genuinely cared for, they leave 5-star reviews, come back, and tell their friends.
              </p>
              <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-10">
                That belief isn't just philosophical — it's financial. Our portfolio consistently outperforms market averages because a 4.9-star average listing outranks a 4.3-star listing in algorithmic search, every time.
              </p>
              <Link
                to="/about"
                className="text-sm tracking-[0.1em] uppercase font-['Inter',sans-serif] font-medium text-[#2D4A3E] no-underline border-b border-[#2D4A3E]/30 pb-0.5 hover:border-[#2D4A3E] transition-colors"
              >
                About the founder →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C]">
            Three ways we help
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4C5B0] divide-y md:divide-y-0 md:divide-x divide-[#D4C5B0] rounded overflow-hidden">
          {[
            {
              num: '01',
              title: 'STR Management',
              desc: 'Full-service management across all major platforms. Listings, pricing, guest communication, cleaning coordination, and monthly reporting.',
              img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75',
              link: '/services',
            },
            {
              num: '02',
              title: 'Interior Design',
              desc: "Design consulting for STR properties. We know what photographs well, what earns 5-star reviews, and what separates a good listing from a great one.",
              img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75',
              link: '/services',
            },
            {
              num: '03',
              title: 'Real Estate',
              desc: 'Acquisition support for investors buying STR properties in Chicago. Licensed brokerage with STR-specific market knowledge built in.',
              img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75',
              link: '/services',
            },
          ].map((svc) => (
            <div key={svc.num} className="group bg-[#F5F0E8]">
              <div className="aspect-video overflow-hidden">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">{svc.num}</span>
                <h3 className="font-['Playfair_Display',serif] text-2xl text-[#1C1C1C] mt-2 mb-3">{svc.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed font-['Inter',sans-serif] mb-6">{svc.desc}</p>
                <Link
                  to={svc.link}
                  className="text-xs tracking-[0.1em] uppercase font-['Inter',sans-serif] font-medium text-[#2D4A3E] no-underline border-b border-[#2D4A3E]/30 pb-0.5 hover:border-[#2D4A3E] transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison vs National Managers */}
      <section className="bg-[#1C1C1C] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
              The difference
            </p>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#F5F0E8] leading-tight">
              Not all management<br />
              companies are the same.
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-['Inter',sans-serif]">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  <th className="text-left py-4 pr-6 text-[#6B6560] text-xs tracking-[0.1em] uppercase font-medium w-1/3" />
                  <th className="py-4 px-6 text-[#F5F0E8] text-xs tracking-[0.1em] uppercase font-medium text-center">
                    Haus & Co.
                  </th>
                  <th className="py-4 px-6 text-[#6B6560] text-xs tracking-[0.1em] uppercase font-medium text-center">
                    Vacasa / Evolve
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Management fee', 'All-in revenue share', '20–35% + add-on fees'],
                  ['Site visit fees', 'None', '$100–$250 per visit'],
                  ['Maintenance markups', 'None — cost pass-through', '10–20% markup'],
                  ['Restocking invoices', 'None', 'Itemized invoices'],
                  ['Point of contact', 'Owner / Founder', 'Rotating coordinators'],
                  ['Local market knowledge', 'Deep — Chicago-native', 'National scale, local gaps'],
                  ['Design services', 'Included / available', 'Not offered'],
                  ['Real estate advisory', 'Available — licensed', 'Not offered'],
                ].map(([feature, haus, national]) => (
                  <tr key={feature} className="border-b border-[#2A2A2A]">
                    <td className="py-4 pr-6 text-[#8A8580]">{feature}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-[#F5F0E8]">{haus}</span>
                    </td>
                    <td className="py-4 px-6 text-center text-[#6B6560]">{national}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-24 bg-[#E8DFD0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { stat: '[X]+', label: 'Properties Managed' },
              { stat: '4.9★', label: 'Average Guest Rating' },
              { stat: '[X]%', label: 'Avg. Occupancy Rate' },
              { stat: '10+', label: 'Years Hosting' },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#2D4A3E] mb-2">{item.stat}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[#6B6560] font-['Inter',sans-serif]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
              Get started
            </p>
            <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-6">
              See what your<br />
              property could earn.
            </h2>
            <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-8">
              Share some basic details about your property and we'll prepare a custom revenue estimate — no commitment required. Most owners are surprised by the upside.
            </p>
            <div className="space-y-4">
              {[
                'Revenue projection based on comparable properties',
                'Platform strategy recommendation',
                'No-fee management overview',
                '30-minute call with the founder',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] flex-shrink-0" />
                  <span className="text-sm text-[#6B6560] font-['Inter',sans-serif]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded p-8 shadow-sm border border-[#E8DFD0]">
            <LeadForm formName="home-lead" formHtmlFile="forms.html" />
          </div>
        </div>
      </section>

      {/* Checklist CTA Banner */}
      <section className="bg-[#2D4A3E] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#D4C5B0]/60 font-['Inter',sans-serif] mb-2">
              Free resource
            </p>
            <h3 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[#F5F0E8]">
              The Chicago STR Starter Checklist
            </h3>
            <p className="text-[#D4C5B0] text-sm mt-2 font-['Inter',sans-serif]">
              Everything you need to launch — or relaunch — your Chicago rental the right way.
            </p>
          </div>
          <Link
            to="/checklist"
            className="bg-[#F5F0E8] text-[#2D4A3E] px-8 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-white transition-colors whitespace-nowrap flex-shrink-0"
          >
            Download Free →
          </Link>
        </div>
      </section>
    </main>
  )
}
