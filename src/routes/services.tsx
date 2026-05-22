import { Link, createFileRoute } from '@tanstack/react-router'
import { LeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'Full-service short-term rental management, interior design for STR properties, and real estate brokerage for Chicago investors.',
      },
      { property: 'og:title', content: 'Services | Haus & Co. Chicago STR Management' },
    ],
  }),
  component: Services,
})

function Services() {
  return (
    <main>
      {/* Header */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
            What we offer
          </p>
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-8">
            Three services.<br />
            One trusted partner.
          </h1>
          <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">
            Whether you need someone to manage your existing listing, transform a space into a high-performing rental, or help you find your next investment property — we can help at every stage.
          </p>
        </div>
      </section>

      {/* Service 01 — STR Management */}
      <section className="bg-[#E8DFD0] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
                Service 01
              </p>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-6">
                Full-Service STR<br />Management
              </h2>
              <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-8">
                We handle everything — from listing setup to midnight guest messages. You receive a monthly performance report and a direct line to the founder. That's it.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { title: 'Listing Optimization', desc: 'Professional photography coordination, compelling copywriting, and keyword-optimized descriptions across all platforms.' },
                  { title: 'Dynamic Pricing', desc: 'Revenue management using industry-leading tools, calibrated daily to local demand signals, events, and competitor data.' },
                  { title: 'Guest Communication', desc: 'Hospitality-grade communication from inquiry through checkout — quick response times, genuine warmth.' },
                  { title: 'Cleaning & Turnover', desc: 'Vetted cleaning crews, hotel-standard checklists, supply restocking, and quality inspections after every stay.' },
                  { title: 'Maintenance Coordination', desc: 'We handle issues with your preferred vendors at actual cost — no markups, no mystery invoices.' },
                  { title: 'Multi-Platform Distribution', desc: 'Airbnb, VRBO, and Booking.com — live, synced, and optimized. Never a double booking.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-[#1C1C1C] text-sm font-medium font-['Inter',sans-serif]">{item.title}</p>
                      <p className="text-[#6B6560] text-sm leading-relaxed font-['Inter',sans-serif] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/pricing"
                className="text-sm tracking-[0.1em] uppercase font-['Inter',sans-serif] font-medium text-[#2D4A3E] no-underline border-b border-[#2D4A3E]/30 pb-0.5 hover:border-[#2D4A3E] transition-colors"
              >
                View pricing →
              </Link>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80"
                alt="Professionally managed Chicago rental"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 — Interior Design */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80"
                alt="Design-forward STR interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
                Service 02
              </p>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-6">
                Interior Design<br />for STR Properties
              </h2>
              <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-6">
                Most rental interiors look like they were furnished by a committee. Ours don't. We design spaces that photograph beautifully, feel thoughtfully curated, and hold up under heavy guest use.
              </p>
              <p className="text-[#6B6560] text-base leading-relaxed font-['Inter',sans-serif] mb-8">
                The ROI is real: a well-designed listing earns more per night, receives better reviews, and ranks higher in platform search results. Design is the highest-leverage investment most STR owners aren't making.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  'Mood board & concept development',
                  'Furniture sourcing & procurement',
                  'Styling, staging & photography prep',
                  'Budget-conscious and luxury tiers available',
                  'Designed for durability and guest appeal',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#2D4A3E] flex-shrink-0" />
                    <span className="text-sm text-[#6B6560] font-['Inter',sans-serif]">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="text-sm tracking-[0.1em] uppercase font-['Inter',sans-serif] font-medium text-[#2D4A3E] no-underline border-b border-[#2D4A3E]/30 pb-0.5 hover:border-[#2D4A3E] transition-colors"
              >
                Inquire about design services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 — Real Estate */}
      <section className="bg-[#1C1C1C] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
                Service 03
              </p>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#F5F0E8] leading-tight mb-6">
                Real Estate for<br />STR Investors
              </h2>
              <p className="text-[#8A8580] text-base leading-relaxed font-['Inter',sans-serif] mb-6">
                Most real estate agents know how to find a property. We know how to find an <em className="text-[#D4C5B0]">STR-optimized</em> property — one that can legally operate, sits in a high-demand neighborhood, and has the physical characteristics that drive guest satisfaction.
              </p>
              <p className="text-[#8A8580] text-base leading-relaxed font-['Inter',sans-serif] mb-10">
                We're licensed Chicago realtors with Goldman Sachs investment analysis backgrounds. When you work with us on acquisitions, you get brokerage services with a genuine operating perspective baked in.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Market Analysis', desc: 'Neighborhood-level STR performance data before you make an offer' },
                  { title: 'Due Diligence', desc: 'Licensing eligibility, zoning review, HOA rule checks' },
                  { title: 'Revenue Modeling', desc: 'Projected RevPAR before you close — not after' },
                  { title: 'Full Brokerage', desc: 'Buyer representation, negotiation, and closing support' },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="text-[#F5F0E8] text-sm font-medium font-['Inter',sans-serif] mb-1">{item.title}</p>
                    <p className="text-[#6B6560] text-xs leading-relaxed font-['Inter',sans-serif]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="bg-[#F5F0E8] text-[#1C1C1C] px-8 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-white transition-colors inline-block"
              >
                Schedule Investor Consultation
              </Link>
            </div>
            <div className="order-1 md:order-2 aspect-[4/5] overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
                alt="Chicago real estate investment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-['Playfair_Display',serif] text-[#1C1C1C] mb-6">Ready to get started?</h2>
        <p className="text-[#6B6560] text-base font-['Inter',sans-serif] mb-10">
          Tell us about your property and we'll walk you through which services make sense for your situation.
        </p>
        <Link
          to="/contact"
          className="bg-[#2D4A3E] text-[#F5F0E8] px-10 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#3D6354] transition-colors inline-block"
        >
          Get a Free Revenue Estimate
        </Link>
      </section>
    </main>
  )
}
