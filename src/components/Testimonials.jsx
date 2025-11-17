export default function Testimonials(){
  const items = [
    {q:'Impeccable craftsmanship and timely delivery.', a:'R. Mehta'},
    {q:'They made my wedding suit perfect.', a:'A. Khan'},
    {q:'Great alterations – fits like new.', a:'S. Patel'},
  ]
  return (
    <section id="testimonials" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="bg-[#111216] border border-white/10 rounded-xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
              <p className="text-gray-200">“{t.q}”</p>
              <p className="mt-4 text-sm text-gray-400">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
