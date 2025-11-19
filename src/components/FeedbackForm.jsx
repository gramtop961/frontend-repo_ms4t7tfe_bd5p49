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
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950 mb-8">Send Feedback</h2>
      <form onSubmit={submit} className="bg-white ring-1 ring-zinc-200 rounded-2xl p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Name (optional)" className="bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/5" />
          <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="Email (optional)" className="bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/5" />
        </div>
        <input value={form.topic} onChange={(e)=>setForm({...form, topic:e.target.value})} placeholder="Topic (bug, idea, question)" className="bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 placeholder:text-zinc-400 w-full focus:outline-none focus:ring-2 focus:ring-black/5" />
        <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required placeholder="Your message" rows={4} className="bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 placeholder:text-zinc-400 w-full focus:outline-none focus:ring-2 focus:ring-black/5" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-5 py-2.5 rounded-full bg-black text-white hover:opacity-90 transition-opacity">Send</button>
          {status === 'sending' && <span className="text-zinc-500">Sending...</span>}
          {status === 'sent' && <span className="text-emerald-600">Thanks! Sent.</span>}
          {status === 'error' && <span className="text-red-500">Something went wrong.</span>}
        </div>
      </form>
    </section>
  )
}
