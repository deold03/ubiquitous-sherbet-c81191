import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Haus & Co. | Chicago Short-Term Rental Management' },
      {
        name: 'description',
        content:
          'Boutique short-term rental management in Chicago. Full-service Airbnb, VRBO & Booking.com management. Transparent revenue share pricing. Owner-operated.',
      },
      { name: 'theme-color', content: '#F5F0E8' },
      { property: 'og:site_name', content: 'Haus & Co.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Haus & Co.',
          description: 'Boutique short-term rental management company in Chicago',
          url: 'https://[YOUR-DOMAIN].com',
          telephone: '[PHONE]',
          email: '[EMAIL]',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chicago',
            addressRegion: 'IL',
            addressCountry: 'US',
          },
          areaServed: { '@type': 'City', name: 'Chicago' },
          serviceType: ['Short-Term Rental Management', 'Property Management', 'Real Estate'],
          priceRange: '$$',
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#F5F0E8]">
        <Nav />
        <div className="pt-[73px]">{children}</div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
