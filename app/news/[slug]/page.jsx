import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import newsData from '@/data/news.json'

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }))
}

export default function NewsDetail({ params }) {
  const news = newsData.find((n) => n.slug === params.slug)

  if (!news) {
    notFound()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Image */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded mb-4">
              {news.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{news.title}</h1>
            <p className="text-lg">{formatDate(news.date)}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/news"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Berita
          </Link>

          {/* Article Meta */}
          <div className="flex items-center text-gray-600 mb-8 pb-6 border-b">
            <div className="flex items-center mr-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By {news.author}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(news.date)}</span>
            </div>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
              {news.excerpt}
            </p>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {news.content}
            </div>
          </article>

          {/* Related News */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Berita Lainnya</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {newsData
                .filter((n) => n.id !== news.id)
                .slice(0, 2)
                .map((relatedNews) => (
                  <Link
                    key={relatedNews.id}
                    href={`/news/${relatedNews.slug}`}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedNews.title}
                    </h4>
                    <p className="text-sm text-gray-600">{formatDate(relatedNews.date)}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



