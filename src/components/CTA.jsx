export default function CTA(){
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur">
          <div className="px-8 py-12 lg:px-16 lg:py-16 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Launch your modern fintech with DC Finance</h3>
              <p className="mt-2 text-blue-100/80">Join innovators building the next generation of payments, cards, and digital banking.</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="flex-1 text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium">Request demo</a>
              <a href="#pricing" className="flex-1 text-center px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-medium">See pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
