'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function PerasaPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kategori: '',
    pesan: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // EmailJS Configuration
  // NOTE: Ganti dengan Public Key, Service ID, dan Template ID dari EmailJS Anda
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
  const RECIPIENT_EMAIL = 'mirfanpermadi608@gmail.com'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validation
    const newErrors = {}
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama harus diisi'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    
    if (!formData.kategori) {
      newErrors.kategori = 'Kategori harus dipilih'
    }
    
    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan harus diisi'
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = 'Pesan minimal 10 karakter'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }
    
    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.nama,
        from_email: formData.email,
        kategori: formData.kategori,
        message: formData.pesan,
        reply_to: formData.email,
        subject: `PERASA - ${formData.kategori.charAt(0).toUpperCase() + formData.kategori.slice(1)} dari ${formData.nama}`,
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // Save to localStorage as backup
      const submissions = JSON.parse(localStorage.getItem('perasa_submissions') || '[]')
      submissions.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('perasa_submissions', JSON.stringify(submissions))

      // Reset form
      setFormData({
        nama: '',
        email: '',
        kategori: '',
        pesan: ''
      })
      setIsSubmitted(true)
      setSubmitError('')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitError('Gagal mengirim email. Silakan coba lagi atau hubungi admin.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PERASA</h1>
          <p className="text-xl text-primary-100">
            Sampaikan Saran, Kritik, atau Pertanyaan Anda
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                <p className="font-medium">Terima kasih! Pesan Anda telah berhasil dikirim ke email admin.</p>
              </div>
            )}

            {submitError && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                <p className="font-medium">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Field */}
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.nama ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Masukkan nama lengkap"
                />
                {errors.nama && (
                  <p className="mt-1 text-sm text-red-500">{errors.nama}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="nama@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Kategori Field */}
              <div>
                <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori <span className="text-red-500">*</span>
                </label>
                <select
                  id="kategori"
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.kategori ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="saran">Saran</option>
                  <option value="kritik">Kritik</option>
                  <option value="pertanyaan">Pertanyaan</option>
                </select>
                {errors.kategori && (
                  <p className="mt-1 text-sm text-red-500">{errors.kategori}</p>
                )}
              </div>

              {/* Pesan Field */}
              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                  Isi Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.pesan ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tuliskan saran, kritik, atau pertanyaan Anda di sini..."
                />
                {errors.pesan && (
                  <p className="mt-1 text-sm text-red-500">{errors.pesan}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  Minimal 10 karakter
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Informasi</h3>
            <p className="text-gray-700 text-sm">
              Pesan yang Anda kirim akan ditinjau oleh tim HIMANIKKA. Kami akan merespons 
              secepat mungkin melalui email yang Anda berikan. Terima kasih atas partisipasi Anda!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


