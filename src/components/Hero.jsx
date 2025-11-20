import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Section from './Section'

export default function Hero() {
  return (
    <Section className="relative pt-28 pb-24 overflow-hidden bg-black" intensity={1.6} threshold={0.3} y={64}>
      <div className="absolute inset-0 opacity-[0.45] will-change-transform">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Bold print. Sharp brands. Built in Namibia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl"
          >
            Boesman Creative Co. delivers high-impact printing and branding: DTF apparel, large-format, signage, corporate wear, embroidery and custom gifts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link to="/quote" className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-white font-semibold glow fx-hover">
              Request a Quote
            </Link>
            <Link to="/portfolio" className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-white hover:bg-white/10 transition">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
