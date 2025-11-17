export default function Contact(){
  return (
    <section id="contact" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300 mb-4">Reach us for support or inquiries.</p>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Email: support@tailorhub.app</p>
            <p>Phone: +1 (555) 012-3456</p>
            <p>Address: 123 Craft Lane, Artisan City</p>
          </div>
          <div className="mt-6">
            <iframe title="map" className="w-full h-56 rounded-md" src="https://www.openstreetmap.org/export/embed.html?bbox=77.55,12.90,77.66,13.04&layer=mapnik" />
          </div>
        </div>
        <form className="grid gap-3 bg-[#111216] p-6 rounded-xl border border-white/10">
          <input className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Name" />
          <input className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Email" />
          <textarea rows="4" className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Message" />
          <button className="bg-gray-200 text-black hover:bg-white transition rounded-md px-4 py-2">Send</button>
        </form>
      </div>
    </section>
  )
}
