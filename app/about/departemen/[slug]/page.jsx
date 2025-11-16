import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import organisasiData from '@/data/organisasi.json'

export async function generateStaticParams() {
  return organisasiData.departemen.map((dept) => ({
    slug: dept.slug,
  }))
}

export default function DepartmentDetail({ params }) {
  const department = organisasiData.departemen.find(
    (dept) => dept.slug === params.slug
  )

  if (!department) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/about"
            className="inline-flex items-center text-primary-100 hover:text-white mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Struktur Organisasi
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{department.nama}</h1>
          <p className="text-xl text-primary-100">{department.singkatan}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ketua Departemen */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ketua Departemen</h2>
            <div className={department.slug === 'keagamaan' ? 'max-w-5xl mx-auto' : 'max-w-4xl mx-auto'}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-md mx-auto">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={department.ketua.foto}
                    alt={department.ketua.nama}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{department.ketua.nama}</h3>
                <p className="text-gray-600 mt-1">Ketua {department.nama}</p>
              </div>
            </div>
          </div>

          {/* Anggota Departemen */}
          <div>
            <div className={department.slug === 'keagamaan' ? 'max-w-5xl ml-auto' : 'max-w-4xl mx-auto'}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Anggota Departemen ({department.anggota.length} orang)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
                {department.anggota.map((anggota, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow h-full"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={anggota.foto}
                        alt={anggota.nama}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{anggota.nama}</p>
                    <p className="text-xs text-gray-500 mt-1">Anggota</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



