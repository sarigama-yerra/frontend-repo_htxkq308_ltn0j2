const items = [
  {title:'Custom Suits',desc:'Crafted to your measurements with premium fabrics.'},
  {title:'Alterations',desc:'From hemming to resizing for the perfect fit.'},
  {title:'Dressmaking',desc:'Unique designs for special occasions and daily wear.'},
  {title:'Repairs',desc:'Extend the life of your favorite garments.'},
]

export default function Services(){
  return (
    <section id="services" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s)=> (
            <div key={s.title} className="rounded-xl border border-white/10 bg-[#111216] p-5 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)]">
              <h3 className="font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
              <a href="#booking" className="mt-4 inline-block text-sm text-gray-200 border border-white/10 rounded-md px-3 py-1.5 hover:bg-white/5">Book</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
