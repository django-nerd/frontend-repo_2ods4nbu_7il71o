import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

export default function Portfolio() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/portfolio`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <Section className="bg-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Portfolio</h2>
          <p className="text-slate-400 max-w-xl">A snapshot of recent print and branding projects.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden fx-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.image_url} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{it.title}</h3>
                <p className="text-slate-400 text-sm">{it.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
