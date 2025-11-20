import { ShieldCheck, Zap, Globe, BarChart3, CreditCard, Layers3 } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Bank-grade security',
    desc: 'Encryption at rest and in transit, tokenization, and granular access controls.'
  },
  {
    icon: Zap,
    title: 'Real-time processing',
    desc: 'Event-driven architecture with sub-second settlement and webhooks.'
  },
  {
    icon: CreditCard,
    title: 'Programmable cards',
    desc: 'Issue virtual and physical cards with dynamic spend controls.'
  },
  {
    icon: Globe,
    title: 'Global-ready',
    desc: 'Multi-currency, localization, and compliant KYC/AML workflows.'
  },
  {
    icon: BarChart3,
    title: 'Insights & analytics',
    desc: 'Unified dashboard with revenue, risk, and operations metrics.'
  },
  {
    icon: Layers3,
    title: 'Modular APIs',
    desc: 'Choose only what you need: payments, ledger, onboarding, more.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.10),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to build modern finance</h2>
          <p className="mt-3 text-blue-100/80">A secure, scalable stack for cards, payments, and digital banking experiences.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
              <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-cyan-400/20">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
