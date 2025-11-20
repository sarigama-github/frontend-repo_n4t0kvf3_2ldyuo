import { useState, useEffect } from 'react'
import { Menu, X, ShieldCheck, CreditCard } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30">
              <CreditCard className="w-5 h-5" />
            </span>
            <span className="font-semibold tracking-tight text-white">DC Finance</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-blue-100/80 hover:text-white">Features</a>
            <a href="#solutions" className="text-sm text-blue-100/80 hover:text-white">Solutions</a>
            <a href="#pricing" className="text-sm text-blue-100/80 hover:text-white">Pricing</a>
            <a href="#security" className="text-sm text-blue-100/80 hover:text-white inline-flex items-center gap-1"><ShieldCheck className="w-4 h-4"/>Security</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-blue-100/80 hover:text-white">Sign in</a>
            <a href="#cta" className="text-sm font-medium px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md shadow-cyan-400/30 hover:shadow-cyan-400/40">Get started</a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2 p-2 rounded-2xl bg-white/5 border border-white/10">
              <a onClick={()=>setOpen(false)} href="#features" className="px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Features</a>
              <a onClick={()=>setOpen(false)} href="#solutions" className="px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Solutions</a>
              <a onClick={()=>setOpen(false)} href="#pricing" className="px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Pricing</a>
              <a onClick={()=>setOpen(false)} href="#security" className="px-3 py-2 rounded-lg text-blue-100/90 hover:bg-white/5">Security</a>
              <a onClick={()=>setOpen(false)} href="#cta" className="px-3 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400">Get started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
