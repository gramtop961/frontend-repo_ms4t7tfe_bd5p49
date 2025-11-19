import Hero from './components/Hero'
import Devlog from './components/Devlog'
import Roadmap from './components/Roadmap'
import FeedbackForm from './components/FeedbackForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-black tracking-tight text-white text-xl">Whiskers</a>
          <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
            <a href="#devlog" className="hover:text-white">Devlog</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#feedback" className="hover:text-white">Feedback</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Devlog />
        <div id="feedback">
          <FeedbackForm />
        </div>
        <Roadmap />
      </main>

      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-blue-200/70 text-sm">
          © {new Date().getFullYear()} Whiskers — A cozy-cat puzzle adventure
        </div>
      </footer>
    </div>
  )
}

export default App
