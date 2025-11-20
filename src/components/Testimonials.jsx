import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/testimonials`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What clients say</h2>
          <p className="text-slate-400 max-w-xl">Trusted by Namibian brands and startups that value quality and consistency.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-slate-900/40 p-6"
            >
              <p className="text-slate-300">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">{t.name}{t.role ? `, ${t.role}` : ''}{t.company ? ` — ${t.company}` : ''}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
