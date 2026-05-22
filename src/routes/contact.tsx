import { createFileRoute } from '@tanstack/react-router'
import { LeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'Request a free revenue estimate for your Chicago property. Get a custom analysis and 30-minute call with the founder.',
      },
      { property: 'og:title', content: 'Contact | Haus & Co. Chicago STR Management' },
    ],
  }),
  component: Contact,
})

function Contact() {
  return (
    <main>
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
              Get in touch
            </p>
            <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight mb-8">
              Let's talk about<br />
              your property.
            </h1>
            <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed mb-12">
              Fill out the form and we'll prepare a custom revenue estimate for your property — no commitment required. Most owners are surprised by the upside.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-3">
                  What to expect
                </p>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'We review your property details and run a comparable analysis' },
                    { step: '2', text: 'We send a custom revenue estimate within 1 business day' },
                    { step: '3', text: 'Optional: 30-minute call with the founder to discuss your goals' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span className="w-7 h-7 rounded-full bg-[#E8DFD0] text-[#6B6560] text-xs font-['Inter',sans-serif] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#D4C5B0] pt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
                Direct contact
              </p>
              <div className="space-y-2">
                <p className="text-sm text-[#6B6560] font-['Inter',sans-serif]">
                  Email:{' '}
                  <a href="mailto:[EMAIL]" className="text-[#2D4A3E] hover:underline">
                    [EMAIL]
                  </a>
                </p>
                <p className="text-sm text-[#6B6560] font-['Inter',sans-serif]">
                  Phone:{' '}
                  <a href="tel:[PHONE]" className="text-[#2D4A3E] hover:underline">
                    [PHONE]
                  </a>
                </p>
                <p className="text-sm text-[#6B6560] font-['Inter',sans-serif]">Chicago, Illinois</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded p-8 md:p-10 shadow-sm border border-[#E8DFD0]">
            <h2 className="font-['Playfair_Display',serif] text-2xl text-[#1C1C1C] mb-2">
              Request a Revenue Estimate
            </h2>
            <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8">
              Free. No commitment. Responded to within one business day.
            </p>
            <LeadForm
              formName="contact-lead"
              formHtmlFile="forms.html"
              ctaLabel="Send Request"
              successMessage="Thank you — we'll have your revenue estimate ready within one business day."
            />
          </div>
        </div>
      </section>

      {/* Chicago map visual */}
      <section className="relative h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80"
          alt="Chicago skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/40 flex items-center justify-center">
          <p className="font-['Playfair_Display',serif] text-4xl text-[#F5F0E8] italic">Chicago, Illinois</p>
        </div>
      </section>
    </main>
  )
}
