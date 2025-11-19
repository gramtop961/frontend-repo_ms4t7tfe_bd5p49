import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', topic: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      setForm({ name: '', email: '', message: '', topic: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Send Feedback</h2>
      <form onSubmit={submit} className="bg-slate-800/60 border border-white/10 rounded-xl p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Name (optional)" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" />
          <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50" />
        </div>
        <input value={form.topic} onChange={(e)=>setForm({...form, topic:e.target.value})} placeholder="Topic (bug, idea, question)" className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 w-full" />
        <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required placeholder="Your message" rows={4} className="bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/50 w-full" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Send</button>
          {status === 'sending' && <span className="text-blue-200/80">Sending...</span>}
          {status === 'sent' && <span className="text-emerald-400">Thanks! Sent.</span>}
          {status === 'error' && <span className="text-red-400">Something went wrong.</span>}
        </div>
      </form>
    </section>
  )
}
