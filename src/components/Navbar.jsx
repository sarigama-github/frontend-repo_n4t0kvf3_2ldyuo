import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-[#0a0b10]/90 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="font-black tracking-tight text-white text-lg">DC</span>
            <span className="text-white/60">Finance</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/70 hover:text-white uppercase tracking-wide">Features</a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white uppercase tracking-wide">Pricing</a>
            <a href="#about" className="text-sm text-white/70 hover:text-white uppercase tracking-wide">About</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-white">Sign in</a>
            <a href="#cta" className="text-sm font-semibold px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90">Get started</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 p-2 rounded-2xl bg-white/5 border border-white/10">
              <a onClick={()=>setOpen(false)} href="#features" className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/5">Features</a>
              <a onClick={()=>setOpen(false)} href="#pricing" className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/5">Pricing</a>
              <a onClick={()=>setOpen(false)} href="#about" className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/5">About</a>
              <a onClick={()=>setOpen(false)} href="#cta" className="px-3 py-2 rounded-lg font-medium text-black bg-white">Get started</a>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </header>
  )
}
