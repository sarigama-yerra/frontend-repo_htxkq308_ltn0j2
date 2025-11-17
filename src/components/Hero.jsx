export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-[#0c0d0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Tailoring, Perfected.
          </h1>
          <p className="text-gray-300 max-w-xl">
            Discover local artisans, place bespoke orders, and track your garments from stitch to doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#booking" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-md shadow-xl shadow-indigo-500/20">
              Book a Fitting
            </a>
            <a href="#services" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 transition rounded-md border border-white/10">
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative h-80 md:h-[28rem] rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1753164597544-a2736833357e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUYWlsb3IlMjB3b3Jrc2hvcHxlbnwwfDB8fHwxNzYzMzg4MDYwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Tailor workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 pointer-events-none" style={{boxShadow:'inset 0 0 200px rgba(0,0,0,0.2)'}} />
        </div>
      </div>
    </section>
  )
}
