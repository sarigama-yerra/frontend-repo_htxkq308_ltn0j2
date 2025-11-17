export default function About(){
  return (
    <section id="about" className="relative bg-[#0c0d0f] text-white py-20">
      <div className="absolute inset-0 opacity-60">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      </div>
      <div className="absolute inset-0" style={{background:'linear-gradient(180deg, rgba(12,13,15,0.9), rgba(12,13,15,0.9))'}}/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-gray-200 max-w-3xl">
          We connect you to trusted local tailors with a shared commitment to precision and craft. From simple alterations to bespoke suits, we centralize discovery, ordering, and delivery tracking—securely and seamlessly.
        </p>
      </div>
    </section>
  )
}
