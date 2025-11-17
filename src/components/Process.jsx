export default function Process(){
  const steps = [
    {no:1, title:'Consult'},
    {no:2, title:'Measure'},
    {no:3, title:'Craft'},
    {no:4, title:'Fit'},
    {no:5, title:'Deliver'},
  ]
  return (
    <section id="process" className="bg-[#0c0d0f] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-8">Our Process</h2>
        <div className="overflow-x-auto">
          <div className="flex items-center gap-10 min-w-[700px]">
            {steps.map((s, i)=> (
              <div key={s.no} className="flex items-center relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111216] border border-white/10 flex items-center justify-center text-sm font-medium">{s.no}</div>
                <span className="ml-3 text-sm text-gray-300">{s.title}</span>
                {i < steps.length -1 && (
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent ml-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
