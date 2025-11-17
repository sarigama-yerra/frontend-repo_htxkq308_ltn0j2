export default function Portfolio(){
  const images = [
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975682031-126a5a2ebd8b?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1400&auto=format&fit=crop',
  ]
  return (
    <section id="portfolio" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i)=> (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg shadow-black/30">
              <img src={src} alt="portfolio" className="w-full h-56 object-cover" style={{cursor:'zoom-in'}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
