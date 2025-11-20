import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-blue-100 text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Trusted fintech infrastructure
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_24px_rgba(34,211,238,0.25)]">
            Modern finance, made simple.
          </h1>
          <p className="mt-5 text-blue-100/90 text-lg">
            Power seamless payments, cards, and digital banking with a glassmorphic, secure-by-design platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-cyan-400/20">Start now</a>
            <a href="#features" className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium backdrop-blur border border-white/15">Explore features</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-950" />
    </section>
  )
}
