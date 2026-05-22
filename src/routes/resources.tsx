import React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/resources')({
  head: () => ({
    meta: [
      { title: 'Resources | Haus & Co. Chicago STR Management' },
      {
        name: 'description',
        content:
          'Expert guides on Chicago short-term rental regulations, pricing strategies, platform comparisons, and investment analysis for property owners.',
      },
      { property: 'og:title', content: 'Resources | Haus & Co. Chicago STR Management' },
    ],
  }),
  loader: () => {
    const posts = allPosts.sort(
      (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
    )
    return { posts }
  },
  component: Resources,
})

const categoryColors: Record<string, string> = {
  Regulations: 'bg-[#E8DFD0] text-[#6B6560]',
  Strategy: 'bg-[#E8F0EC] text-[#2D4A3E]',
  Design: 'bg-[#F0EBE8] text-[#B85C38]',
}

function Resources() {
  const { posts } = Route.useLoaderData()

  return (
    <main>
      {/* Header */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-6">
              Resources
            </p>
            <h1 className="text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#1C1C1C] leading-tight">
              Insights for Chicago<br />
              STR owners.
            </h1>
          </div>
          <p className="text-lg text-[#6B6560] font-['Inter',sans-serif] leading-relaxed">
            Practical guides on regulations, pricing strategy, platform selection, and investment analysis — written from a decade of hands-on Chicago hosting experience.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {posts[0] && (
        <section className="pb-16 max-w-7xl mx-auto px-6">
          <Link
            to="/resources/$slug"
            params={{ slug: posts[0].slug }}
            className="group block no-underline"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded border border-[#D4C5B0]">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <img
                  src={posts[0].image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80'}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-white p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 text-xs font-['Inter',sans-serif] rounded ${categoryColors[posts[0].category || ''] || 'bg-[#E8DFD0] text-[#6B6560]'}`}
                  >
                    {posts[0].category || posts[0].tags[0] || 'Resource'}
                  </span>
                  <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">
                    {new Date(posts[0].published).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="font-['Playfair_Display',serif] text-3xl text-[#1C1C1C] leading-tight mb-4 group-hover:text-[#2D4A3E] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-[#6B6560] text-sm leading-relaxed font-['Inter',sans-serif] mb-6">
                  {posts[0].description}
                </p>
                <span className="text-xs tracking-[0.1em] uppercase font-['Inter',sans-serif] font-medium text-[#2D4A3E] border-b border-[#2D4A3E]/30 pb-0.5 self-start">
                  Read article →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to="/resources/$slug"
              params={{ slug: post.slug }}
              className="group no-underline"
            >
              <article>
                <div className="aspect-video overflow-hidden rounded mb-5">
                  <img
                    src={post.image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75'}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-2.5 py-0.5 text-xs font-['Inter',sans-serif] rounded ${categoryColors[post.category || ''] || 'bg-[#E8DFD0] text-[#6B6560]'}`}
                  >
                    {post.category || post.tags[0] || 'Resource'}
                  </span>
                  <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">
                    {new Date(post.published).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="font-['Playfair_Display',serif] text-xl text-[#1C1C1C] leading-tight mb-2 group-hover:text-[#2D4A3E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B6560] text-sm leading-relaxed font-['Inter',sans-serif] line-clamp-2">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-[#E8DFD0] py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] font-['Inter',sans-serif] mb-4">
            Stay informed
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl text-[#1C1C1C] mb-4">
            New articles, straight to your inbox.
          </h2>
          <p className="text-sm text-[#6B6560] font-['Inter',sans-serif] mb-8">
            No noise. Just practical STR insights for Chicago property owners, a few times per month.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  )
}

function NewsletterForm() {
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `form-name=newsletter&email=${encodeURIComponent(email)}`,
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-[#2D4A3E] font-['Inter',sans-serif] text-sm">
        You're subscribed. Welcome to the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input type="hidden" name="form-name" value="newsletter" />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 bg-white border border-[#D4C5B0] text-sm font-['Inter',sans-serif] rounded focus:outline-none focus:border-[#2D4A3E] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#2D4A3E] text-[#F5F0E8] px-6 py-3 text-sm tracking-[0.05em] uppercase font-['Inter',sans-serif] font-medium rounded hover:bg-[#3D6354] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
