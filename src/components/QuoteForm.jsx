import { useState } from 'react'

const serviceOptions = [
  'DTF Printing',
  'Large Format',
  'Signage',
  'Corporate Wear',
  'Embroidery',
  'Custom Gifts',
]

export default function QuoteForm() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus({ ok: true })
      else setStatus({ ok: false, error: data.detail || 'Something went wrong' })
    } catch (e) {
      setStatus({ ok: false, error: e.message })
    }
  }

  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Request a Quote</h2>
        <p className="mt-3 text-slate-400">Tell us what you need and we’ll get back with pricing and timelines.</p>
        <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-white/10 bg-slate-900/40 p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="email" required type="email" placeholder="Email" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="company" placeholder="Company (optional)" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <select name="service" required className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
              <option value="">Select a service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <input name="quantity" type="number" min="1" placeholder="Quantity" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <input name="size" placeholder="Size / Dimensions" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="colors" placeholder="Colors" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="deadline" placeholder="Deadline" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <textarea name="details" rows="5" placeholder="Project details" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:opacity-95 transition">Submit request</button>
          {status && (
            <p className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>
              {status.ok ? 'Thanks! We’ll send a quote shortly.' : status.error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
