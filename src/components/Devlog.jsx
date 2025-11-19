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
    <section id="devlog" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Devlog</h2>
      {loading ? (
        <p className="text-blue-100/80">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-blue-100/80">No posts yet. First entry coming soon!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="bg-slate-800/60 border border-white/10 rounded-xl p-5">
              {p.cover_image && (
                <img src={p.cover_image} alt="cover" className="w-full h-40 object-cover rounded-lg mb-4" />
              )}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              {p.summary && <p className="text-blue-100/80 mt-1">{p.summary}</p>}
              <div className="mt-3 text-sm text-blue-200/80 whitespace-pre-wrap line-clamp-4">{p.content}</div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
