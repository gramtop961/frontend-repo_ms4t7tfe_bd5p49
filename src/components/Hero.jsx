import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-zinc-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-zinc-100 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-950"
            >
              Whiskers: The Flat Chronicles
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-zinc-600 leading-relaxed"
            >
              A calm, curious puzzle adventure where clever cats explore a sunlit flat,
              uncovering small stories on the path to the big mystery: finding the Mummy.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#devlog" className="px-5 py-2.5 rounded-full bg-black text-white hover:opacity-90 transition-opacity">
                Read the Devlog
              </a>
              <a href="#roadmap" className="px-5 py-2.5 rounded-full ring-1 ring-zinc-300 text-zinc-900 hover:bg-zinc-50 transition-colors">
                View Roadmap
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="aspect-[4/3] w-full rounded-3xl bg-white ring-1 ring-zinc-200 overflow-hidden shadow-sm">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center select-none">
                  <div className="text-7xl md:text-8xl">🐾</div>
                  <p className="mt-2 text-zinc-500">Prototype Sneak Peek</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
