export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-100/80">Start free. Scale on usage with enterprise options when you need them.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-blue-100/80">For prototypes and small teams</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-blue-100/80">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-blue-100/80 text-sm">
              <li>• Sandbox access</li>
              <li>• 1,000 test transactions</li>
              <li>• Community support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white">Get started</a>
          </div>
          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-400/10 to-transparent backdrop-blur p-6 ring-1 ring-inset ring-cyan-400/20">
            <h3 className="text-white font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-blue-100/80">For growing fintech products</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-bold">$249</span>
              <span className="text-blue-100/80">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-blue-100/80 text-sm">
              <li>• Live processing</li>
              <li>• Premium support</li>
              <li>• Custom branding</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white">Choose Growth</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="text-white font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-blue-100/80">For regulated institutions</p>
            <div className="mt-6 text-white">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="mt-6 space-y-2 text-blue-100/80 text-sm">
              <li>• Dedicated cluster</li>
              <li>• SLA + compliance</li>
              <li>• Tailored onboarding</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-white">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
