import { useState } from 'react'

interface LeadFormProps {
  formName: string
  formHtmlFile: string
  variant?: 'default' | 'dark' | 'minimal'
  includeProperty?: boolean
  ctaLabel?: string
  successMessage?: string
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function LeadForm({
  formName,
  formHtmlFile,
  variant = 'default',
  includeProperty = true,
  ctaLabel = 'Request Free Revenue Estimate',
  successMessage = "Thank you — we'll be in touch within one business day.",
}: LeadFormProps) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    message: '',
    botField: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (fields.botField) return
    setLoading(true)
    setError('')
    try {
      await fetch(`/${formHtmlFile}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': formName,
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          ...(includeProperty ? { propertyAddress: fields.propertyAddress } : {}),
          message: fields.message,
        }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please email us directly.')
    } finally {
      setLoading(false)
    }
  }

  const isDark = variant === 'dark'
  const isMinimal = variant === 'minimal'

  const inputClass = `w-full px-4 py-3 text-sm font-['Inter',sans-serif] border rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#2D4A3E]/30 ${
    isDark
      ? 'bg-[#2A2A2A] border-[#3A3A3A] text-[#F5F0E8] placeholder-[#6B6560]'
      : 'bg-white border-[#D4C5B0] text-[#1C1C1C] placeholder-[#A09890] focus:border-[#2D4A3E]'
  }`

  const labelClass = `block text-xs tracking-[0.1em] uppercase mb-2 font-['Inter',sans-serif] font-medium ${
    isDark ? 'text-[#8A8580]' : isMinimal ? 'text-[#6B6560]' : 'text-[#6B6560]'
  }`

  if (submitted) {
    return (
      <div className={`text-center py-12 ${isDark ? 'text-[#F5F0E8]' : 'text-[#1C1C1C]'}`}>
        <div className="w-12 h-12 rounded-full bg-[#2D4A3E] flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-['Playfair_Display',serif] text-xl mb-2">Message received.</p>
        <p className={`text-sm font-['Inter',sans-serif] ${isDark ? 'text-[#8A8580]' : 'text-[#6B6560]'}`}>
          {successMessage}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value={formName} />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor={`${formName}-name`}>Full Name</label>
          <input
            id={`${formName}-name`}
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formName}-email`}>Email Address</label>
          <input
            id={`${formName}-email`}
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formName}-phone`}>Phone Number</label>
          <input
            id={`${formName}-phone`}
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(312) 555-0100"
            className={inputClass}
          />
        </div>
        {includeProperty && (
          <div>
            <label className={labelClass} htmlFor={`${formName}-property`}>Property Address</label>
            <input
              id={`${formName}-property`}
              type="text"
              name="propertyAddress"
              value={fields.propertyAddress}
              onChange={handleChange}
              placeholder="Wicker Park, Lincoln Park…"
              className={inputClass}
            />
          </div>
        )}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor={`${formName}-message`}>Tell us about your property (optional)</label>
          <textarea
            id={`${formName}-message`}
            name="message"
            value={fields.message}
            onChange={handleChange}
            rows={3}
            placeholder="Current listing platform, number of units, specific questions…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-3 font-['Inter',sans-serif]">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full bg-[#2D4A3E] text-[#F5F0E8] py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded hover:bg-[#3D6354] transition-colors disabled:opacity-60 cursor-pointer"
      >
        {loading ? 'Sending…' : ctaLabel}
      </button>

      <p className="text-xs text-center mt-3 font-['Inter',sans-serif] text-[#A09890]">
        No spam. No commitment. We respond within one business day.
      </p>
    </form>
  )
}
