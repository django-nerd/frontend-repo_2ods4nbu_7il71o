import { motion } from 'framer-motion'
import { Brush, Shirt, PictureInPicture2, BadgePercent, Ruler, Gift, SquareKanban } from 'lucide-react'

const services = [
  { icon: Shirt, title: 'DTF Printing', desc: 'Vibrant, durable prints for apparel and merch.' },
  { icon: PictureInPicture2, title: 'Large Format', desc: 'Banners, posters and displays that stand out.' },
  { icon: SquareKanban, title: 'Signage', desc: 'Outdoor and indoor signage that guides and sells.' },
  { icon: BadgePercent, title: 'Corporate Wear', desc: 'Polished uniforms and branded apparel.' },
  { icon: Brush, title: 'Embroidery', desc: 'Premium stitched finishes for a premium feel.' },
  { icon: Gift, title: 'Custom Gifts', desc: 'Personalised items for clients and events.' },
]

export default function Services() {
  return (
    <section className="relative py-16 sm:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(236,72,153,0.08),transparent),radial-gradient(600px_circle_at_80%_0%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Services</h2>
          <p className="text-slate-400 max-w-xl">From concept to production, we craft consistent brand experiences across media and materials.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-slate-900/40 p-6 hover:border-fuchsia-400/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] transition"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
