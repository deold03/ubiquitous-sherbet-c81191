import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/resources/$slug')({
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Haus & Co.` },
          { name: 'description', content: loaderData.post.description },
          { property: 'og:title', content: loaderData.post.title },
          { property: 'og:description', content: loaderData.post.description },
          ...(loaderData.post.image
            ? [{ property: 'og:image', content: loaderData.post.image }]
            : []),
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      : [],
  }),
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug)
    if (!post) throw notFound()
    const related = allPosts
      .filter((p) => p.slug !== params.slug)
      .slice(0, 3)
    return { post, related }
  },
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="font-['Playfair_Display',serif] text-4xl text-[#1C1C1C] mb-4">Article not found</h1>
      <Link to="/resources" className="text-[#2D4A3E] font-['Inter',sans-serif] text-sm">
        ← Back to resources
      </Link>
    </div>
  ),
  component: BlogPost,
})

function BlogPost() {
  const { post, related } = Route.useLoaderData()

  return (
    <main>
      {/* Hero image */}
      {post.image && (
        <div className="aspect-[21/9] overflow-hidden max-h-[500px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            to="/resources"
            className="text-xs tracking-[0.1em] uppercase font-['Inter',sans-serif] text-[#6B6560] no-underline hover:text-[#2D4A3E] transition-colors"
          >
            ← Resources
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          {post.category && (
            <span className="px-3 py-1 bg-[#E8DFD0] text-[#6B6560] text-xs font-['Inter',sans-serif] rounded">
              {post.category}
            </span>
          )}
          <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">
            {new Date(post.published).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">·</span>
          <span className="text-xs text-[#A09890] font-['Inter',sans-serif]">By {post.author}</span>
        </div>

        <h1 className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-[#1C1C1C] leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-[#6B6560] font-['Inter',sans-serif] leading-relaxed mb-12 pb-12 border-b border-[#D4C5B0]">
          {post.description}
        </p>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      {/* CTA */}
      <section className="bg-[#2D4A3E] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display',serif] text-3xl text-[#F5F0E8] mb-4">
            Ready to maximize your property's potential?
          </h2>
          <p className="text-[#D4C5B0] text-sm font-['Inter',sans-serif] mb-8">
            Get a free revenue estimate and see how professional management can transform your results.
          </p>
          <Link
            to="/contact"
            className="bg-[#F5F0E8] text-[#2D4A3E] px-10 py-4 text-sm tracking-[0.08em] uppercase font-['Inter',sans-serif] font-medium rounded no-underline hover:bg-white transition-colors inline-block"
          >
            Get a Free Revenue Estimate
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display',serif] text-2xl text-[#1C1C1C] mb-10">
            More resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/resources/$slug"
                params={{ slug: p.slug }}
                className="group no-underline"
              >
                <div className="aspect-video overflow-hidden rounded mb-4">
                  <img
                    src={p.image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75'}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg text-[#1C1C1C] group-hover:text-[#2D4A3E] transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
