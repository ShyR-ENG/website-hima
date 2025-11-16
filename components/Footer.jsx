import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">HIMANIKKA</h3>
            <p className="text-sm">
              HIMANIKKA (Himpunan Mahasiswa Teknik Informatika) adalah organisasi kemahasiswaan yang berfokus pada pengembangan kompetensi, kreativitas, dan profesionalitas mahasiswa di bidang teknologi informasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/event" className="hover:text-primary-400 transition-colors">
                  Event
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/perasa" className="hover:text-primary-400 transition-colors">
                  PERASA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontak</h3>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-medium">Alamat:</span><br />
                Universitas Islam Sumatera Barat<br />
                Jl. Kolonel Anwar Hamid, Kp. Jambak<br />
                Padang, Sumatera Barat
              </p>
              <div className="mt-4">
                <p className="font-medium mb-2">Media Sosial:</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HIMANIKKA Universitas Islam Sumatera Barat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

