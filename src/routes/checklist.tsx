import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checklist')({
  head: () => ({
    meta: [
      { title: 'Free Chicago STR Starter Checklist | Haus & Co.' },
      {
        name: 'description',
        content:
          'Download the free Chicago Short-Term Rental Starter Checklist — everything you need to launch or relaunch your Chicago rental the right way.',
      },
      { property: 'og:title', content: 'Free Chicago STR Starter Checklist | Haus & Co.' },
    ],
  }),
  component: Checklist,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Checklist() {
  const [fields, setFields] = React.useState({ name: '', email: '', botField: '' })
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (fields.botField) return
    setLoading(true)
    await fetch('/forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'checklist', name: fields.name, email: fields.email }),
    })
    setSubmitted(true)
    setLoading(false)
  }

  const checklistItems = [
    { category: 'Legal & Licensing', items: ['Obtain Chicago STR license', 'Verify zoning eligibility', 'Confirm HOA / condo rules', 'Set up LLC or business entity', 'Purchase $1M liability insurance'] },
    { category: 'Listing Setup', items: ['Professional photography', 'Compelling listing headline', 'Keyword-optimized description', 'Accurate amenity inventory', 'Competitive pricing research'] },
    { category: 'Operations', items: ['Vetted cleaning crew secured', 'Key handoff or lockbox installed', 'Welcome guide created', 'Emergency contact list', 'Restocking system in place'] },
    { category: 'Design & Guest Experience', items: ['Hotel-quality bedding & towels', 'Blackout curtains in bedrooms', 'Coffee setup and kitchen essentials', 'Local recommendations guide', 'Charging stations & good WiFi'] },
    { category: 'Revenue Management', items: ['Dynamic pricing tool connected', 'Seasonal pricing reviewed', 'Minimum stay rules configured', 'Multi-platform distribution set up', 'Calendar sync confirmed'] },
  ]

  return (
    <main>
      <section className="min-h-screen bg-[#2D4A3E] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left — checklist preview */}
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#A8D5C2] font-['Inter',sans-serif] mb-6">
                Free resource
              </p>
              <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#F5F0E8] leading-tight mb-8">
                The Chicago STR<br />
                Starter Checklist.
              </h1>
              <p className="text-[#D4C5B0] text-lg font-['Inter',sans-serif] leading-relaxed mb-12">
                [X] items across five categories — everything you need to launch a short-term rental in Chicago the right way, the first time.
              </p>

              {/* Checklist preview */}
              <div className="space-y-6">
                {checklistItems.map((section) => (
                  <div key={section.category}>
                    <p className="text-xs tracking-[0.15em] uppercase text-[#A8D5C2] font-['Inter',sans-serif] mb-3">
                      {section.category}
                    </p>
                    <div className="space-y-2">
                      {section.items.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-4 h-4 border border-[#A8D5C2]/40 rounded flex-shrink-0" />
                          <span className="text-sm text-[#D4C5B0] font-['Inter',sans-serif]">{item}</span>
                        </div>
                      ))}
                      {section.items.length > 3 && (
                        <div className="flex items-center gap-3 opacity-40">
                          <div className="w-4 h-4 border border-[#A8D5C2]/40 rounded flex-shrink-0" />
                          <span className="text-sm text-[#D4C5B0] font-['Inter',sans-serif]">
                            + {section.items.length - 3} more…
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-[#F5F0E8] rounded p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-[#2D4A3E] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-['Playfair_Display',serif] text-2xl text-[#1C1C1C] mb-3">
                    Check your inbox.
                  </h2>
                  <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">
                    The checklist is on its way to <strong>{fields.email}</strong>. While you're here — if you have a property you'd like to discuss, we'd love to connect.
                  </p>
                  <a
                    href="/contact"
                    className="mt-8 inline-block bg-[#2D4A3E] text-[#F5F0E8] px-8 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-[#3D6354] transition-colors"
                  >
                    Get a Revenue Estimate
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="font-['Playfair_Display',serif] text-2xl text-[#1C1C1C] mb-2">
                    Get your free checklist
                  </h2>
                  <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8 leading-relaxed">
                    Enter your name and email and we'll send the complete [X]-item checklist straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="checklist" />
                    {/* Honeypot */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input
                        name="botField"
                        value={fields.botField}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs tracking-[0.1em] uppercase mb-2 font-['Inter',sans-serif] font-medium text-[#6B6560]">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={fields.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane"
                          className="w-full px-4 py-3 bg-white border border-[#D4C5B0] text-sm font-['Inter',sans-serif] rounded focus:outline-none focus:border-[#2D4A3E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.1em] uppercase mb-2 font-['Inter',sans-serif] font-medium text-[#6B6560]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 bg-white border border-[#D4C5B0] text-sm font-['Inter',sans-serif] rounded focus:outline-none focus:border-[#2D4A3E] transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-6 w-full bg-[#2D4A3E] text-[#F5F0E8] py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded hover:bg-[#3D6354] transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? 'Sending…' : 'Send Me the Checklist →'}
                    </button>
                  </form>

                  <p className="text-xs text-center mt-4 text-[#A09890] font-['Inter',sans-serif]">
                    No spam, ever. Unsubscribe any time.
                  </p>

                  <div className="mt-8 pt-8 border-t border-[#E8DFD0]">
                    <p className="text-xs text-[#A09890] font-['Inter',sans-serif] mb-4 text-center">
                      What's inside:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {checklistItems.map((s) => (
                        <div key={s.category} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#2D4A3E] flex-shrink-0" />
                          <span className="text-xs text-[#6B6560] font-['Inter',sans-serif]">{s.category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
