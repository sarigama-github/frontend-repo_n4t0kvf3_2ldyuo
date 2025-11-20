export default function Pricing(){
  return (
    <section id="pricing" className="relative py-28">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Simple pricing</h2>
          <p className="text-white/70 max-w-xl">Transparent tiers. No surprises.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/15 bg-[#0e1018]/70 p-6">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-white/70">For prototypes and small teams</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-white/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Sandbox access</li>
              <li>• 1,000 test transactions</li>
              <li>• Community support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-lg bg-white text-black">Get started</a>
          </div>
          <div className="rounded-xl border border-white/15 bg-white text-black p-6">
            <h3 className="font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-black/70">For growing fintech products</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold">$249</span>
              <span className="text-black/60">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-black/70 text-sm">
              <li>• Live processing</li>
              <li>• Premium support</li>
              <li>• Custom branding</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-lg bg-black text-white">Choose Growth</a>
          </div>
          <div className="rounded-xl border border-white/15 bg-[#0e1018]/70 p-6">
            <h3 className="text-white font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-white/70">For regulated institutions</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Dedicated cluster</li>
              <li>• SLA + compliance</li>
              <li>• Tailored onboarding</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-lg bg-transparent border border-white/20 text-white">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
