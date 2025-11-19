import Hero from './components/Hero'
import Devlog from './components/Devlog'
import Roadmap from './components/Roadmap'
import FeedbackForm from './components/FeedbackForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-black selection:text-white">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-xl">Whiskers</a>
          <nav className="hidden md:flex items-center gap-6 text-zinc-600">
            <a href="#devlog" className="hover:text-zinc-900 transition-colors">Devlog</a>
            <a href="#roadmap" className="hover:text-zinc-900 transition-colors">Roadmap</a>
            <a href="#feedback" className="hover:text-zinc-900 transition-colors">Feedback</a>
            <a href="/test" className="hover:text-zinc-900 transition-colors">System</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Devlog />
        <Roadmap />
        <div id="feedback">
          <FeedbackForm />
        </div>
      </main>

      <footer className="border-t border-zinc-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 text-zinc-500 text-sm">
          © {new Date().getFullYear()} Whiskers — A cozy‑cat puzzle adventure
        </div>
      </footer>
    </div>
  )
}

export default App
