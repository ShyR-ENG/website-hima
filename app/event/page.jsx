import EventCard from '@/components/EventCard'
import eventsData from '@/data/events.json'

export default function EventPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event HIMANIKKA</h1>
          <p className="text-xl text-primary-100">
            Daftar lengkap event dan kegiatan yang diselenggarakan oleh HIMANIKKA
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {eventsData.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Belum ada event yang tersedia.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


