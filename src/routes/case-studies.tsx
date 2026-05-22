import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/case-studies')({
  head: () => ({
    meta: [
      { title: 'Portfolio | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'A curated portfolio of Chicago short-term rentals we manage — design, results, and the story behind each property.',
      },
      { property: 'og:title', content: 'Portfolio | Haus & Co. Chicago STR Management' },
    ],
  }),
  component: CaseStudies,
})

const properties = [
  {
    id: 1,
    tag: 'Wicker Park',
    title: '[PROPERTY 1 NAME]',
    subtitle: '2BR/1BA Vintage Greystone',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
    stats: [
      { label: 'Avg. Occupancy', value: '[X]%' },
      { label: 'Avg. Nightly Rate', value: '$[XXX]' },
      { label: 'Annual Revenue', value: '$[XX,XXX]' },
    ],
    story:
      'A [X] bedroom vintage greystone in Wicker Park that had been operating as a long-term rental for several years. The owner reached out after seeing a neighboring property perform well as an Airbnb. [PROPERTY 1 STORY — transformation, design decisions, platform strategy, results].',
    tags: ['Full Management', 'Design Consult', 'Airbnb · VRBO'],
  },
  {
    id: 2,
    tag: 'Lincoln Park',
    title: '[PROPERTY 2 NAME]',
    subtitle: '1BR/1BA Modern Condo',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    stats: [
      { label: 'Avg. Occupancy', value: '[X]%' },
      { label: 'Avg. Nightly Rate', value: '$[XXX]' },
      { label: 'Annual Revenue', value: '$[XX,XXX]' },
    ],
    story:
      'A one-bedroom condo in Lincoln Park with an owner who wanted to test STR performance before committing to a full design overhaul. [PROPERTY 2 STORY — listing optimization, pricing results, guest feedback highlights].',
    tags: ['Full Management', 'Airbnb · Booking.com'],
  },
  {
    id: 3,
    tag: 'West Loop',
    title: '[PROPERTY 3 NAME]',
    subtitle: 'Studio Loft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
    stats: [
      { label: 'Avg. Occupancy', value: '[X]%' },
      { label: 'Avg. Nightly Rate', value: '$[XXX]' },
      { label: 'Annual Revenue', value: '$[XX,XXX]' },
    ],
    story:
      'A studio loft in the West Loop — ideal for corporate travelers visiting the Fulton Market district. [PROPERTY 3 STORY — target guest profile, channel strategy, weekday corporate demand performance].',
    tags: ['Full Management', 'Design Consult', 'All Platforms'],
  },
  {
    id: 4,
    tag: 'Investor Acquisition',
    title: '[PROPERTY 4 ADDRESS]',
    subtitle: 'Multi-Unit Investment Property',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    stats: [
      { label: 'Purchase Price', value: '$[XXX,XXX]' },
      { label: 'Year 1 Revenue', value: '$[XX,XXX]' },
      { label: 'Cap Rate', value: '[X.X]%' },
    ],
    story:
      "A client approached us looking to acquire their first intentional STR investment property in Chicago. [PROPERTY 4 STORY — acquisition criteria, neighborhoods evaluated, financial modeling, outcome]. We identified the property, modeled the returns, and managed the transaction from offer through closing.",
    tags: ['Real Estate', 'Full Management', 'Design Build-Out'],
  },
]

function CaseStudies() {
  return (
    <main>
      {/* Header */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-8">
            Properties we're<br />proud to manage.
          </h1>
          <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">
            Every property in our portfolio tells a different story — different neighborhoods, different guest profiles, different challenges. Here are a few of them.
          </p>
        </div>
      </section>

      {/* Property grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? 'md:[direction:rtl]' : ''
              }`}
            >
              <div className={`${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-3">
                  {property.tag}
                </p>
                <h2 className="font-['Playfair_Display',serif] text-3xl text-[#1C1C1C] mb-1">{property.title}</h2>
                <p className="text-[#6B6560] text-sm font-['Inter',sans-serif] mb-6">{property.subtitle}</p>

                <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-[#D4C5B0]">
                  {property.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-['Playfair_Display',serif] text-xl text-[#2D4A3E]">{s.value}</div>
                      <div className="text-xs text-[#6B6560] font-['Inter',sans-serif] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[#6B6560] text-sm leading-relaxed font-['Inter',sans-serif] mb-6">
                  {property.story}
                </p>

                <div className="flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#E8DFD0] text-[#6B6560] text-xs font-['Inter',sans-serif] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8DFD0] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display',serif] text-4xl text-[#1C1C1C] mb-6">
            Could your property be next?
          </h2>
          <p className="text-[#6B6560] font-['Inter',sans-serif] mb-8">
            Get a free revenue estimate and see what professional management could mean for your property.
          </p>
          <Link
            to="/contact"
            className="bg-[#2D4A3E] text-[#F5F0E8] px-10 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#3D6354] transition-colors inline-block"
          >
            Request a Revenue Estimate
          </Link>
        </div>
      </section>
    </main>
  )
}
