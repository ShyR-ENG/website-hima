import NewsCard from '@/components/NewsCard'
import newsData from '@/data/news.json'

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita Teknologi Informasi</h1>
          <p className="text-xl text-primary-100">
            Update terbaru seputar teknologi informasi dan kegiatan HIMANIKKA
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada berita yang tersedia.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


