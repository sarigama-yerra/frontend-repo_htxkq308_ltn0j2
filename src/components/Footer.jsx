import { ArrowUp } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-[#0e0f11] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} TailorHub. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-1 text-gray-200 px-3 py-1.5 rounded-md border border-white/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
          <ArrowUp size={16} />
          <span className="text-xs">Top</span>
        </a>
      </div>
    </footer>
  )
}
