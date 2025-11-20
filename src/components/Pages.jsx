import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function ServicesPage() {
  const services = [
    { title: 'DTF Printing', desc: 'Vibrant, durable transfers for apparel.' },
    { title: 'Large Format', desc: 'Banners, posters, pull-up banners.' },
    { title: 'Signage', desc: 'Indoor/outdoor, vehicle branding and lightboxes.' },
    { title: 'Corporate Wear', desc: 'Uniforms, caps, golf shirts and jackets.' },
    { title: 'Embroidery', desc: 'Premium stitched finishes.' },
    { title: 'Custom Gifts', desc: 'Mugs, bottles, pens and gift sets.' },
  ]
  return (
    <Section title="Our Services">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <motion.div whileHover={{ y: -4 }} key={s.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-cyan-400/30 transition">
            <h3 className="text-white font-semibold text-lg">{s.title}</h3>
            <p className="text-slate-300 text-sm mt-1">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function PortfolioPage() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${baseUrl}/api/portfolio`).then(r=>r.json()).then(setItems).catch(()=>{})
  }, [])
  return (
    <Section title="Portfolio">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            <img src={item.image_url} alt={item.title} className="w-full h-56 object-cover hover:scale-105 transition-transform" />
            <div className="p-4">
              <div className="text-white font-medium">{item.title}</div>
              {item.category && <div className="text-xs text-slate-400 mt-1">{item.category}</div>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function AboutPage() {
  return (
    <Section title="About Boesman Creative Co.">
      <div className="prose prose-invert max-w-none">
        <p>
          We are a Windhoek-based print and branding studio helping local businesses create bold, professional brand experiences. From fast-turnaround apparel to large-format signage, we handle end-to-end production with care.
        </p>
        <p>
          Our process is simple: brief, proof, produce. We obsess over detail, colour accuracy and timelines.
        </p>
      </div>
    </Section>
  )
}

export function ContactPage() {
  const submit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    await fetch(`${baseUrl}/api/inquiries`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    e.currentTarget.reset()
    alert('Thanks! We\'ll be in touch shortly.')
  }
  return (
    <Section title="Contact">
      <form onSubmit={submit} className="grid grid-cols-1 gap-3 max-w-xl">
        <input name="name" required placeholder="Your name" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        <input name="email" type="email" required placeholder="Email" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        <input name="phone" placeholder="Phone (optional)" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        <input name="subject" placeholder="Subject" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        <textarea name="message" required placeholder="Your message" rows={5} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2"/>
        <button className="inline-flex justify-center items-center gap-2 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition">Send</button>
      </form>
    </Section>
  )
}

export function QuotePage() {
  const submit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const data = Object.fromEntries(fd.entries())
    await fetch(`${baseUrl}/api/quotes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    e.currentTarget.reset()
    alert('Thanks! We\'ll prepare your quote.')
  }
  return (
    <Section title="Request a Quote">
      <form onSubmit={submit} className="grid grid-cols-1 gap-3 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="name" required placeholder="Your name" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
          <input name="email" type="email" required placeholder="Email" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="phone" placeholder="Phone" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
          <input name="company" placeholder="Company (optional)" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          <select name="service" required className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3">
            <option value="">Select service</option>
            <option>DTF Printing</option>
            <option>Large Format</option>
            <option>Signage</option>
            <option>Corporate Wear</option>
            <option>Embroidery</option>
            <option>Custom Gifts</option>
          </select>
          <input name="quantity" type="number" min="1" placeholder="Quantity" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <input name="size" placeholder="Size / Dimensions" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
          <input name="colors" placeholder="Colours" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
          <input name="deadline" placeholder="Deadline" className="h-11 rounded-lg bg-slate-900/60 border border-white/10 px-3"/>
        </div>
        <textarea name="details" placeholder="Project details" rows={5} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2"/>
        <button className="inline-flex justify-center items-center gap-2 h-11 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition">Submit request</button>
      </form>
    </Section>
  )
}

function Section({ title, children }) {
  return (
    <section className="min-h-[60vh] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">{title}</h1>
        {children}
      </div>
    </section>
  )
}
