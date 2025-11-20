import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Bold split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_#0a0b10_0%,_#0a0b10_55%,_transparent_55%)]" />
        <div className="absolute right-[-20%] top-[-10%] w-[90vw] h-[90vh] rounded-[3rem] bg-[radial-gradient(60rem_40rem_at_70%_40%,_rgba(255,255,255,0.08),_transparent_60%)]" />
      </div>

      {/* 3D card */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur text-white/90 text-xs">
            DC Finance • New design system
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Finance infra, reimagined.
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            Ship cards, payments, onboarding, and ledgers with a clean, brutalist aesthetic and crisp motion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-lg bg-white text-black font-semibold shadow-2xl shadow-black/20">Start building</a>
            <a href="#features" className="px-6 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium">See features</a>
          </div>
        </div>
      </div>

      {/* Gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b10]/20 to-[#0a0b10]" />
    </section>
  )
}
