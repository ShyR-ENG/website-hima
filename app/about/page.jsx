import Image from 'next/image'
import DepartmentCard from '@/components/DepartmentCard'
import organisasiData from '@/data/organisasi.json'

export default function About() {
  const { pengurusInti, departemen } = organisasiData

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang HIMANIKKA</h1>
          <p className="text-xl text-primary-100">
            Himpunan Mahasiswa Teknik Informatika Universitas Islam Sumatera Barat
          </p>
          <p className="text-lg text-primary-200 mt-2">
            Kabinet Nexa 25/26
          </p>
        </div>
      </section>

      {/* Profil Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Profil</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                HIMANIKKA (Himpunan Mahasiswa Teknik Informatika) adalah organisasi kemahasiswaan yang berfokus pada pengembangan kompetensi, kreativitas, dan profesionalitas mahasiswa di bidang teknologi informasi. HIMANIKKA hadir sebagai wadah kolaborasi, pembelajaran, serta pengembangan minat dan bakat mahasiswa dalam dunia IT.
              </p>
              <p className="mb-4">
                Organisasi ini berada di bawah naungan Program Studi Teknik Informatika Universitas Islam Sumatera Barat (berlokasi di Jl. By Pass No.KM.16, Koto Panjang Ikua Koto, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586) dan didirikan dengan tujuan untuk menjadi wadah bagi mahasiswa Teknik Informatika dalam mengembangkan potensi, minat, dan bakat di bidang teknologi informasi.
              </p>
              <p className="mb-4">
                Sejak didirikan, HIMANIKKA telah aktif menyelenggarakan berbagai kegiatan yang 
                bertujuan untuk meningkatkan kompetensi mahasiswa, seperti workshop, seminar, 
                kompetisi programming, dan berbagai kegiatan lainnya yang relevan dengan 
                perkembangan teknologi informasi.
              </p>
              <p>
                HIMANIKKA juga berperan aktif dalam membangun jaringan dengan berbagai pihak, 
                baik internal kampus maupun eksternal, untuk menciptakan sinergi yang 
                bermanfaat bagi pengembangan mahasiswa dan masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Mewujudkan Himpunan Mahasiswa Teknik Informatika yang Aktif, profesional dan solid dalam membangun kemajuan Teknik Informatika bersama.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi</h2>
              <ul className="text-gray-700 text-lg leading-relaxed space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Mewadahi mahasiswa Teknik Informatika dengan berbagai program kerja yang akan sering melibatkan mahasiswa.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Mengayomi mahasiswa Teknik Informatika dengan cara menjadi garda terdepan mahasiswa disaat mereka ingin menyalurkan aspirasi.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Meningkatkan rasa kebersamaan dan saling memiliki antar mahasiswa Teknik Informatika UISB</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Struktur Organisasi
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Kabinet Nexa 25/26
          </p>

          {/* Pengurus Inti */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pengurus Inti</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Ketua */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pengurusInti.ketua.foto}
                    alt={pengurusInti.ketua.nama}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Ketua</h4>
                <p className="text-sm text-gray-600">{pengurusInti.ketua.nama}</p>
              </div>

              {/* Wakil Ketua */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pengurusInti.wakilKetua.foto}
                    alt={pengurusInti.wakilKetua.nama}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Wakil Ketua</h4>
                <p className="text-sm text-gray-600">{pengurusInti.wakilKetua.nama}</p>
              </div>

              {/* Sekretaris 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pengurusInti.sekretaris[0].foto}
                    alt={pengurusInti.sekretaris[0].nama}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Sekretaris 1</h4>
                <p className="text-sm text-gray-600">{pengurusInti.sekretaris[0].nama}</p>
              </div>

              {/* Sekretaris 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pengurusInti.sekretaris[1].foto}
                    alt={pengurusInti.sekretaris[1].nama}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Sekretaris 2</h4>
                <p className="text-sm text-gray-600">{pengurusInti.sekretaris[1].nama}</p>
              </div>

              {/* Bendahara */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={pengurusInti.bendahara.foto}
                    alt={pengurusInti.bendahara.nama}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Bendahara</h4>
                <p className="text-sm text-gray-600">{pengurusInti.bendahara.nama}</p>
              </div>
            </div>
          </div>

          {/* Departemen */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Departemen</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departemen.map((dept) => (
                <DepartmentCard key={dept.id} department={dept} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

