export default function Blog(){
  const posts = [
    {title:'Choosing Fabrics 101', cover:'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1600&auto=format&fit=crop', excerpt:'A quick guide to fabric types and when to use them.'},
    {title:'Suit Care Basics', cover:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', excerpt:'Keep your suit sharp with these simple tips.'},
    {title:'Alterations That Matter', cover:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop', excerpt:'Small changes, perfect fits.'},
  ]
  return (
    <section id="blog" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">From the Journal</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p,i)=> (
            <article key={i} className="rounded-xl border border-white/10 overflow-hidden bg-[#111216]">
              <img src={p.cover} alt="cover" className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{p.excerpt}</p>
                <a href="#" className="mt-3 inline-block text-sm underline">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
