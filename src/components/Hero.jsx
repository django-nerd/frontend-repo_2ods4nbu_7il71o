import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-[0.4]">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Bold print. Sharp brands. Built in Namibia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            Boesman Creative Co. delivers high-impact printing and branding: DTF apparel, large-format, signage, corporate wear, embroidery and custom gifts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link to="/quote" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:opacity-95 transition">
              Request a Quote
            </Link>
            <Link to="/portfolio" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
