import { ShieldCheck, Zap, Globe, BarChart3, CreditCard, Layers3 } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Bank-grade security', desc: 'Encryption at rest and in transit, tokenization, and access controls.' },
  { icon: Zap, title: 'Real-time processing', desc: 'Event-driven architecture with sub-second webhooks.' },
  { icon: CreditCard, title: 'Programmable cards', desc: 'Issue virtual/physical with dynamic spend controls.' },
  { icon: Globe, title: 'Global-ready', desc: 'Multi-currency, localization, and compliant KYC/AML.' },
  { icon: BarChart3, title: 'Insights & analytics', desc: 'Revenue, risk, and operations in one view.' },
  { icon: Layers3, title: 'Modular APIs', desc: 'Pick payments, ledger, onboarding, more.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">What you ship</h2>
          <p className="text-white/70 max-w-xl">A modular stack with strict security defaults, predictable performance, and clean primitives.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-xl border border-white/15 bg-[#0e1018]/70 hover:bg-[#11131c] transition p-6">
              <div className="flex items-center gap-3">
                <span className="inline-grid place-items-center w-10 h-10 rounded-lg bg-white text-black">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
