export default function Stats(){
  const stats = [
    { label: 'Uptime', value: '99.99%' },
    { label: 'Countries', value: '40+' },
    { label: 'Avg. latency', value: '120ms' },
    { label: 'Monthly volume', value: '$2B+' },
  ]
  return (
    <section className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-blue-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
