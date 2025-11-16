# Setup EmailJS untuk Form PERASA

Form PERASA sekarang sudah terintegrasi dengan EmailJS untuk mengirim email otomatis ke **mirfanpermadi608@gmail.com**.

## Langkah-langkah Setup:

### 1. Daftar di EmailJS
1. Kunjungi https://www.emailjs.com/
2. Buat akun gratis (free plan cukup untuk penggunaan normal)
3. Login ke dashboard

### 2. Setup Email Service
1. Di dashboard, klik **"Email Services"**
2. Klik **"Add New Service"**
3. Pilih **"Gmail"** (atau email service lain yang Anda gunakan)
4. Login dengan akun Gmail Anda (mirfanpermadi608@gmail.com)
5. Catat **Service ID** yang diberikan (contoh: `service_xxxxx`)

### 3. Buat Email Template
1. Klik **"Email Templates"** di dashboard
2. Klik **"Create New Template"**
3. Gunakan template berikut:

**Subject:**
```
PERASA - {{kategori}} dari {{from_name}}
```

**Content:**
```
Halo Admin HIMANIKKA,

Anda menerima pesan baru dari form PERASA:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KATEGORI: {{kategori}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NAMA: {{from_name}}
EMAIL: {{from_email}}

PESAN:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Anda dapat membalas email ini langsung ke: {{from_email}}

---
Email ini dikirim otomatis dari website HIMANIKKA
```

4. Set **To Email** ke: `mirfanpermadi608@gmail.com`
5. Set **From Name** ke: `{{from_name}}`
6. Set **Reply To** ke: `{{from_email}}`
7. Simpan template dan catat **Template ID** (contoh: `template_xxxxx`)

### 4. Dapatkan Public Key
1. Di dashboard, klik **"Account"** → **"General"**
2. Salin **Public Key** (contoh: `xxxxxxxxxxxxx`)

### 5. Update Konfigurasi di Code
1. Buka file `app/perasa/page.jsx`
2. Ganti nilai berikut di baris 20-22:

```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxx'  // Ganti dengan Service ID Anda
const EMAILJS_TEMPLATE_ID = 'template_xxxxx'  // Ganti dengan Template ID Anda
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx'  // Ganti dengan Public Key Anda
```

### 6. Install Dependencies
Jalankan di terminal:
```bash
npm install
```

### 7. Test
1. Jalankan website: `npm run dev`
2. Buka halaman PERASA
3. Isi form dan submit
4. Cek email di **mirfanpermadi608@gmail.com**

## Catatan Penting:

- **Free Plan EmailJS**: 200 email/bulan (cukup untuk testing)
- **Email akan dikirim ke**: mirfanpermadi608@gmail.com
- **Data juga tersimpan di localStorage** sebagai backup
- Jika email gagal terkirim, akan muncul pesan error

## Troubleshooting:

1. **Email tidak terkirim?**
   - Pastikan Service ID, Template ID, dan Public Key sudah benar
   - Cek console browser untuk error message
   - Pastikan akun Gmail sudah terhubung dengan EmailJS

2. **Template tidak muncul?**
   - Pastikan semua variable ({{from_name}}, {{from_email}}, dll) sudah ditambahkan di template

3. **Rate limit?**
   - Free plan memiliki limit 200 email/bulan
   - Upgrade ke paid plan jika perlu lebih banyak

## Alternatif (Jika EmailJS tidak cocok):

Jika EmailJS tidak bekerja, bisa menggunakan:
- **Resend** (https://resend.com) - Modern email API
- **SendGrid** (https://sendgrid.com) - Enterprise email service
- **API Route dengan Nodemailer** - Setup sendiri dengan SMTP


