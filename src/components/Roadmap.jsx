import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Roadmap() {
  const [milestones, setMilestones] = useState([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/milestones`)
        if (!res.ok) return
        const data = await res.json()
        setMilestones(data)
      } catch (e) {}
    }
    run()
  }, [])

  return (
    <section id="roadmap" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Roadmap</h2>
      {milestones.length === 0 ? (
        <p className="text-blue-100/80">Planned milestones will appear here.</p>
      ) : (
        <ul className="space-y-3">
          {milestones.map((m) => (
            <li key={m.id} className="bg-slate-800/60 border border-white/10 rounded-xl p-5 flex items-start gap-3">
              <span className={`mt-1 inline-flex h-3 w-3 rounded-full ${m.status === 'done' ? 'bg-emerald-400' : m.status === 'in_progress' ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
              <div>
                <p className="text-white font-semibold">{m.title}</p>
                {m.description && <p className="text-blue-100/80 text-sm">{m.description}</p>}
                {m.target_date && <p className="text-blue-200/60 text-xs mt-1">Target: {new Date(m.target_date).toLocaleDateString()}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
