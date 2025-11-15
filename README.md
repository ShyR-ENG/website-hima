# Website HIMANIKKA (Himpunan Mahasiswa Teknik Informatika)

Website modern untuk Himpunan Mahasiswa Teknik Informatika Universitas Islam Sumatera Barat.

## Teknologi

- Next.js 14 (App Router)
- React 18
- TailwindCSS
- JSON untuk data (events, news)

## Instalasi

```bash
npm install
```

## Menjalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Proyek

```
/app
  /about
  /event
    /[slug]
  /news
    /[slug]
  /perasa
/components
  Navbar.jsx
  Footer.jsx
  EventCard.jsx
  NewsCard.jsx
/data
  events.json
  news.json
```

## Fitur

- Home page dengan hero section
- Halaman About (Profil, Visi & Misi)
- Halaman Event dengan detail
- Halaman News/Berita dengan detail
- Form PERASA (Saran & Kritik)
- Responsive design
- Modern UI dengan TailwindCSS

