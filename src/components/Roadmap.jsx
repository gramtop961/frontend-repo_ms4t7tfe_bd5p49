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
    <section id="roadmap" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Roadmap</h2>
      </div>
      {milestones.length === 0 ? (
        <p className="text-zinc-500">Planned milestones will appear here.</p>
      ) : (
        <ul className="space-y-3">
          {milestones.map((m) => (
            <li key={m.id} className="bg-white ring-1 ring-zinc-200 rounded-2xl p-5 flex items-start gap-3">
              <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${m.status === 'done' ? 'bg-emerald-500' : m.status === 'in_progress' ? 'bg-amber-500' : 'bg-zinc-300'}`}></span>
              <div>
                <p className="text-zinc-900 font-medium">{m.title}</p>
                {m.description && <p className="text-zinc-600 text-sm leading-relaxed">{m.description}</p>}
                {m.target_date && <p className="text-zinc-400 text-xs mt-1">Target: {new Date(m.target_date).toLocaleDateString()}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
