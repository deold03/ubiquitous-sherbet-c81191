import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'Transparent all-in revenue share pricing with no hidden fees. See exactly what you pay and how it compares to national management companies.',
      },
      { property: 'og:title', content: 'Pricing | Haus & Co. Chicago STR Management' },
    ],
  }),
  component: Pricing,
})

function Pricing() {
  return (
    <main>
      {/* Header */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
          Pricing
        </p>
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-8 max-w-2xl mx-auto">
          One number.<br />No surprises.
        </h1>
        <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed max-w-xl mx-auto">
          A single all-in revenue share percentage. No maintenance markups. No restocking invoices. No site visit fees. What you see is exactly what you pay.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Management */}
          <div className="border border-[#D4C5B0] rounded p-8 bg-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
              STR Management
            </p>
            <div className="font-['Playfair_Display',serif] text-5xl text-[#2D4A3E] mb-1">
              [X]%
            </div>
            <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8">
              of gross rental revenue
            </p>
            <ul className="space-y-3 mb-10 list-none p-0 m-0">
              {[
                'Listing optimization & photography',
                'Dynamic pricing management',
                'Guest communication (24/7)',
                'Cleaning coordination',
                'Maintenance at cost — no markup',
                'Monthly performance report',
                'All platform fees included',
                'Airbnb, VRBO, Booking.com',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2D4A3E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#6B6560] font-['Inter',sans-serif]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block bg-[#2D4A3E] text-[#F5F0E8] py-3.5 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#3D6354] transition-colors text-center"
            >
              Get Revenue Estimate
            </Link>
          </div>

          {/* Design */}
          <div className="border border-[#D4C5B0] rounded p-8 bg-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
              Interior Design
            </p>
            <div className="font-['Playfair_Display',serif] text-4xl text-[#2D4A3E] mb-1">
              Custom
            </div>
            <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8">
              scoped per project
            </p>
            <ul className="space-y-3 mb-10 list-none p-0 m-0">
              {[
                'Concept development & mood board',
                'Furniture sourcing & procurement',
                'Styling and staging',
                'Photography prep consultation',
                'Budget-friendly and full-service tiers',
                '[DESIGN FEE RANGE] depending on scope',
                'Available standalone or bundled with management',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2D4A3E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#6B6560] font-['Inter',sans-serif]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block border border-[#2D4A3E] text-[#2D4A3E] py-3.5 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#2D4A3E] hover:text-[#F5F0E8] transition-colors text-center"
            >
              Inquire About Design
            </Link>
          </div>

          {/* Real Estate */}
          <div className="border border-[#D4C5B0] rounded p-8 bg-white">
            <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
              Real Estate
            </p>
            <div className="font-['Playfair_Display',serif] text-4xl text-[#2D4A3E] mb-1">
              [X]%
            </div>
            <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8">
              standard buyer's commission
            </p>
            <ul className="space-y-3 mb-10 list-none p-0 m-0">
              {[
                'STR-specific market analysis',
                'Licensing & zoning due diligence',
                'Pre-offer revenue modeling',
                'Full buyer representation',
                'Negotiation & closing support',
                'Post-close management available',
                'Licensed Illinois Realtor',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#2D4A3E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#6B6560] font-['Inter',sans-serif]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block border border-[#2D4A3E] text-[#2D4A3E] py-3.5 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#2D4A3E] hover:text-[#F5F0E8] transition-colors text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What's included callout */}
      <section className="bg-[#2D4A3E] py-16 mb-0">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Playfair_Display',serif] text-3xl text-[#F5F0E8] mb-4">
                What "all-in" actually means.
              </h2>
              <p className="text-[#D4C5B0] text-sm leading-relaxed font-['Inter',sans-serif]">
                Most management companies lead with a low percentage, then add on fees that erode your actual take-home. Our percentage covers everything. We're not making money on your supply orders or your plumber.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Platform listing fees', included: true },
                { label: 'Dynamic pricing tools', included: true },
                { label: 'Guest communication', included: true },
                { label: 'Cleaning coordination', included: true },
                { label: 'Maintenance markups', included: false },
                { label: 'Restocking invoices', included: false },
                { label: 'Site visit fees', included: false },
                { label: 'Monthly reporting fees', included: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#3D6354]">
                  <span className="text-sm text-[#D4C5B0] font-['Inter',sans-serif]">{item.label}</span>
                  <span className={`text-xs font-medium font-['Inter',sans-serif] ${item.included ? 'text-[#A8D5C2]' : 'text-[#6B6560]'}`}>
                    {item.included ? '✓ Included' : '✗ We don\'t charge'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[#1C1C1C] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#F5F0E8]">
              How we compare
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-['Inter',sans-serif]">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  <th className="text-left py-4 pr-6 text-[#6B6560] text-xs tracking-[0.1em] uppercase font-medium w-[35%]" />
                  <th className="py-4 px-4 text-[#F5F0E8] text-xs tracking-[0.1em] uppercase font-medium text-center">Haus & Co.</th>
                  <th className="py-4 px-4 text-[#6B6560] text-xs tracking-[0.1em] uppercase font-medium text-center">Vacasa</th>
                  <th className="py-4 px-4 text-[#6B6560] text-xs tracking-[0.1em] uppercase font-medium text-center">Evolve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Management fee', '[X]% all-in', '25–35%+', '10% + add-ons'],
                  ['Site visit / inspection fees', 'None', '$150–$250', '$75–$150'],
                  ['Maintenance markup', 'None', '10–15%', 'Varies'],
                  ['Restocking invoices', 'None', 'Itemized', 'Itemized'],
                  ['Owner communication', 'Founder directly', 'Coordinator pool', 'Support tickets'],
                  ['Design services', 'Available', 'Not offered', 'Not offered'],
                  ['Real estate advisory', 'Available', 'Not offered', 'Not offered'],
                  ['Portfolio size', 'Intentionally small', 'Thousands of units', 'Thousands of units'],
                ].map(([feature, haus, vacasa, evolve]) => (
                  <tr key={feature} className="border-b border-[#2A2A2A]">
                    <td className="py-4 pr-6 text-[#8A8580]">{feature}</td>
                    <td className="py-4 px-4 text-center text-[#F5F0E8]">{haus}</td>
                    <td className="py-4 px-4 text-center text-[#6B6560]">{vacasa}</td>
                    <td className="py-4 px-4 text-center text-[#6B6560]">{evolve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#4A4A4A] mt-6 font-['Inter',sans-serif] text-center">
            * Competitor pricing based on publicly available information as of [DATE]. Actual fees may vary.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <h2 className="font-['Playfair_Display',serif] text-3xl text-[#1C1C1C] mb-12 text-center">
          Common questions
        </h2>
        <div className="space-y-8">
          {[
            {
              q: 'How is the revenue share calculated?',
              a: 'Our fee is calculated as a percentage of gross rental revenue — the total amount guests pay before any platform fees are deducted. You receive a detailed monthly statement showing gross revenue, our fee, platform fees, and any pass-through costs.',
            },
            {
              q: 'Are there any setup or onboarding fees?',
              a: 'No. There are no onboarding fees, no contract setup fees, and no minimum term. We earn our fee when your property earns revenue.',
            },
            {
              q: 'How do maintenance costs work?',
              a: "We coordinate maintenance with your preferred vendors or ours. You're invoiced at actual cost — we don't markup labor or materials. For small items under $[THRESHOLD], we handle them without prior approval. For larger items, we always get your sign-off first.",
            },
            {
              q: 'What contract term do you require?',
              a: "We ask for [CONTRACT TERMS — e.g., 90-day minimum, 30-day notice to cancel]. We believe in keeping owners because they're happy with performance, not because they're locked in.",
            },
            {
              q: 'Do you work with properties outside Chicago?',
              a: 'Our focus is Chicago. We know this market — the neighborhoods, the seasonality, the regulations — well enough to manage it better than anyone operating at national scale. We may consider suburban Chicago on a case-by-case basis.',
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-[#D4C5B0] pb-8">
              <h3 className="font-['Playfair_Display',serif] text-lg text-[#1C1C1C] mb-3">{faq.q}</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed font-['Inter',sans-serif]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8DFD0] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#1C1C1C] mb-6">
            Ready to see your revenue potential?
          </h2>
          <Link
            to="/contact"
            className="bg-[#2D4A3E] text-[#F5F0E8] px-10 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#3D6354] transition-colors inline-block"
          >
            Get a Free Revenue Estimate
          </Link>
        </div>
      </section>
    </main>
  )
}
