import Link from 'next/link'

export default function DepartmentCard({ department }) {
  return (
    <Link
      href={`/about/departemen/${department.slug}`}
      className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {department.nama}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {department.singkatan}
          </p>
        </div>
        <svg
          className="w-6 h-6 text-primary-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span>
          Ketua: {department.ketua.nama} • {department.anggota.length + 1} anggota
        </span>
      </div>
    </Link>
  )
}



