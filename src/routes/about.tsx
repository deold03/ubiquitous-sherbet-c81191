import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'Meet the founder — a licensed Chicago realtor with Goldman Sachs roots, 10+ years of personal hosting experience, and a genuine love for great design.',
      },
      { property: 'og:title', content: 'About | Haus & Co. Chicago STR Management' },
    ],
  }),
  component: About,
})

function About() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
              About
            </p>
            <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight">
              Built by someone<br />
              who actually <em>hosts.</em>
            </h1>
          </div>
          <div>
            <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">
              Haus & Co. exists because the management options in Chicago weren't good enough. Large national companies that treat properties like inventory, or solo operators without the systems to manage consistently. There was space for something better — boutique, hospitality-first, and built by someone who understands the product from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* Founder photo + bio */}
      <section className="bg-[#E8DFD0] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[3/4] overflow-hidden rounded">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                  alt="[FOUNDER NAME], Founder of Haus & Co."
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-6">
                <p className="font-['Playfair_Display',serif] text-xl text-[#1C1C1C]">[FOUNDER NAME]</p>
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6560] font-['Inter',sans-serif] mt-1">
                  Founder & Managing Partner
                </p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-8">
                The founder story
              </p>

              <div className="space-y-6 font-['Inter',sans-serif] text-[#6B6560] text-base leading-relaxed">
                <p>
                  I started hosting on Airbnb over a decade ago, initially as a way to offset costs on a property I was already managing as a long-term rental. What surprised me wasn't the income — it was how much I genuinely enjoyed creating a guest experience. The design decisions, the welcome notes, the local recommendations. Hospitality, it turned out, was something I found deeply satisfying.
                </p>
                <p>
                  My background is in finance and strategy. Eight years in corporate strategy, and before that, investment analysis at Goldman Sachs. That foundation changed how I thought about short-term rentals — not as a passive income side project, but as a real operating business where every variable matters: pricing algorithms, occupancy rates, review velocity, cost structure.
                </p>
                <p>
                  I became a licensed Illinois real estate agent because my hosting clients kept asking the same question: "I want to buy another property — where should I look?" Being licensed means I can actually answer that question with the legal authority to back it up, and the STR operating knowledge to make the analysis real.
                </p>
                <p>
                  I started Haus & Co. because I wanted to manage properties the way I manage my own — with genuine attention to the guest experience, transparency about fees and performance, and real care for the physical space. The company is small by design. I'd rather manage [X] properties exceptionally than [X] properties adequately.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-[#D4C5B0]">
                {[
                  { stat: 'Goldman Sachs', label: 'Investment background' },
                  { stat: '8 Years', label: 'Corporate strategy' },
                  { stat: '10+ Years', label: 'Personal hosting' },
                  { stat: 'Licensed', label: 'Illinois Realtor' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-['Playfair_Display',serif] text-lg text-[#2D4A3E] mb-1">{item.stat}</div>
                    <div className="text-xs text-[#6B6560] font-['Inter',sans-serif]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-8">
              Our values
            </p>
            <blockquote className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#1C1C1C] leading-relaxed mb-16 italic">
              "We treat properties like our own home, not like inventory. The moment they become just another unit on a spreadsheet is the moment we've stopped doing our job."
            </blockquote>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Radical Transparency',
                body: "You'll always know exactly what you're paying, what your property earned, and how it performed. No surprise invoices. No opaque line items. Clear reporting on the first of every month.",
              },
              {
                title: 'Hospitality First',
                body: 'The guest experience drives everything — review scores, repeat bookings, algorithm placement, and ultimately revenue. We take it seriously because it compounds.',
              },
              {
                title: 'Small on Purpose',
                body: "We'll never grow the portfolio beyond what we can manage with genuine attention. Every owner-partner we work with gets consistent quality. That's the deal.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#D4C5B0] pt-8">
                <h3 className="font-['Playfair_Display',serif] text-xl text-[#1C1C1C] mb-4">{item.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed font-['Inter',sans-serif]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D4A3E] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#F5F0E8] mb-6">
            Let's talk about your property.
          </h2>
          <p className="text-[#D4C5B0] font-['Inter',sans-serif] mb-8">
            A 30-minute conversation is usually all it takes to figure out whether we're a fit.
          </p>
          <Link
            to="/contact"
            className="bg-[#F5F0E8] text-[#2D4A3E] px-10 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-white transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
