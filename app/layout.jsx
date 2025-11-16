import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'HIMANIKKA - Himpunan Mahasiswa Teknik Informatika',
  description: 'Website resmi Himpunan Mahasiswa Teknik Informatika Universitas Islam Sumatera Barat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

