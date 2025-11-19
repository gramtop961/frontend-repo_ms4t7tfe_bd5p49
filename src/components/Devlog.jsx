import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Devlog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/devlog`)
        if (!res.ok) throw new Error('Failed to load devlog')
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <section id="devlog" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-950">Devlog</h2>
      </div>
      {loading ? (
        <p className="text-zinc-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet. First entry coming soon.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="group bg-white ring-1 ring-zinc-200 rounded-2xl p-5 hover:shadow-sm transition-shadow">
              {p.cover_image && (
                <img src={p.cover_image} alt="cover" className="w-full h-40 object-cover rounded-xl mb-4" />
              )}
              <h3 className="text-lg font-medium text-zinc-900 group-hover:opacity-90">{p.title}</h3>
              {p.summary && <p className="text-zinc-600 mt-1 text-sm leading-relaxed">{p.summary}</p>}
              <div className="mt-3 text-sm text-zinc-500 whitespace-pre-wrap line-clamp-4">{p.content}</div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
