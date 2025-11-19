import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white"
            >
              Whiskers: The Flat Chronicles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-blue-100/90"
            >
              Guide a band of curious cats on an adventurous puzzle-quest through every
              nook of a cozy apartment. Outsmart obstacles, rival pets, and odd
              contraptions to unravel the biggest mystery of all: find the Mummy.
            </motion.p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#devlog" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
                Read the Devlog
              </a>
              <a href="#roadmap" className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-colors">
                View Roadmap
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl select-none">🐾</div>
                  <p className="mt-2 text-blue-100/80">Prototype Sneak Peek</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
