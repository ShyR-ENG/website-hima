import Link from 'next/link'
import Image from 'next/image'

export default function NewsCard({ news }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={news.image}
          alt={news.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {news.category}
          </span>
          <span className="text-gray-500 text-sm">{formatDate(news.date)}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">By {news.author}</span>
          <Link
            href={`/news/${news.slug}`}
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </div>
  )
}

