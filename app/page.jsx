import Link from 'next/link'
import Image from 'next/image'
import EventCard from '@/components/EventCard'
import NewsCard from '@/components/NewsCard'
import DepartmentCard from '@/components/DepartmentCard'
import eventsData from '@/data/events.json'
import newsData from '@/data/news.json'
import organisasiData from '@/data/organisasi.json'

export default function Home() {
  // Get latest 3 events
  const latestEvents = eventsData.slice(0, 3)
  // Get latest 3 news
  const latestNews = newsData.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Himpunan Mahasiswa<br />Teknik Informatika
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Universitas Islam Sumatera Barat
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-primary-100 leading-relaxed">
              HIMANIKKA (Himpunan Mahasiswa Teknik Informatika) adalah organisasi kemahasiswaan yang berfokus pada pengembangan kompetensi, kreativitas, dan profesionalitas mahasiswa di bidang teknologi informasi. HIMANIKKA hadir sebagai wadah kolaborasi, pembelajaran, serta pengembangan minat dan bakat mahasiswa dalam dunia IT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/event"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Lihat Event
              </Link>
              <Link
                href="/perasa"
                className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors border-2 border-white"
              >
                Kirim PERASA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Mewujudkan Himpunan Mahasiswa Teknik Informatika yang Aktif, profesional dan solid dalam membangun kemajuan Teknik Informatika bersama.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi</h2>
              <ul className="text-gray-700 text-lg leading-relaxed space-y-2">
                <li>• Mewadahi mahasiswa Teknik Informatika dengan berbagai program kerja yang akan sering melibatkan mahasiswa.</li>
                <li>• Mengayomi mahasiswa Teknik Informatika dengan cara menjadi garda terdepan mahasiswa disaat mereka ingin menyalurkan aspirasi.</li>
                <li>• Meningkatkan rasa kebersamaan dan saling memiliki antar mahasiswa Teknik Informatika UISB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Struktur Organisasi</h2>
            <p className="text-gray-600">Kabinet Nexa 25/26</p>
            <Link
              href="/about"
              className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium"
            >
              Lihat Detail Struktur →
            </Link>
          </div>

          {/* Pengurus Inti - Compact View */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pengurus Inti</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Ketua */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={organisasiData.pengurusInti.ketua.foto}
                    alt={organisasiData.pengurusInti.ketua.nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Ketua</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{organisasiData.pengurusInti.ketua.nama}</p>
              </div>

              {/* Wakil Ketua */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={organisasiData.pengurusInti.wakilKetua.foto}
                    alt={organisasiData.pengurusInti.wakilKetua.nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Wakil Ketua</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{organisasiData.pengurusInti.wakilKetua.nama}</p>
              </div>

              {/* Sekretaris 1 */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={organisasiData.pengurusInti.sekretaris[0].foto}
                    alt={organisasiData.pengurusInti.sekretaris[0].nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Sekretaris 1</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{organisasiData.pengurusInti.sekretaris[0].nama}</p>
              </div>

              {/* Sekretaris 2 */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={organisasiData.pengurusInti.sekretaris[1].foto}
                    alt={organisasiData.pengurusInti.sekretaris[1].nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Sekretaris 2</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{organisasiData.pengurusInti.sekretaris[1].nama}</p>
              </div>

              {/* Bendahara */}
              <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 rounded-full overflow-hidden">
                  <Image
                    src={organisasiData.pengurusInti.bendahara.foto}
                    alt={organisasiData.pengurusInti.bendahara.nama}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Bendahara</h4>
                <p className="text-xs text-gray-600 line-clamp-2">{organisasiData.pengurusInti.bendahara.nama}</p>
              </div>
            </div>
          </div>

          {/* Departemen - Show all */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Departemen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {organisasiData.departemen.map((dept) => (
                <DepartmentCard key={dept.id} department={dept} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Event Terbaru</h2>
            <Link
              href="/event"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Berita Terbaru</h2>
            <Link
              href="/news"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabung dengan Kami</h2>
          <p className="text-xl mb-8 text-primary-100">
            Dapatkan update terbaru tentang event dan kegiatan HIMANIKKA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/event"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Lihat Event
            </Link>
            <Link
              href="/perasa"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors border-2 border-white"
            >
              Kirim Saran & Kritik
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

