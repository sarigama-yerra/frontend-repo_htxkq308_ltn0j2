import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Booking(){
  const [form, setForm] = useState({customer_name:'', email:'', phone:'', service:'', notes:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('Submitting...')
    try{
      const res = await fetch(`${API}/api/bookings`, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({...form})
      })
      const data = await res.json()
      if(res.ok){
        setStatus(`Booked! Reference: ${data.id}`)
        setForm({customer_name:'', email:'', phone:'', service:'', notes:''})
      } else {
        setStatus(data?.detail || 'Error')
      }
    }catch(err){
      setStatus('Network error')
    }
  }

  return (
    <section id="booking" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-6">Book a Service</h2>
        <form onSubmit={submit} className="grid grid-cols-1 gap-4 bg-[#111216] p-6 rounded-xl border border-white/10">
          <input className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Your name" value={form.customer_name} onChange={e=>setForm({...form, customer_name:e.target.value})} required />
          <input type="email" className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          <input className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <input className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Service" value={form.service} onChange={e=>setForm({...form, service:e.target.value})} required />
          <textarea rows="4" className="bg-[#0f1013] border border-white/10 rounded-md px-3 py-2" placeholder="Notes (optional)" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
          <button type="submit" className="mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-md px-4 py-2">Submit</button>
          {status && <p className="text-sm text-gray-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
