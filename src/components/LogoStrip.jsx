import { motion } from 'framer-motion'
import Section from './Section'

const brands = ['Shoprite', 'MTC', 'FNB', 'NamibMills', 'Nedbank', 'Pick n Pay']

export default function LogoStrip() {
  return (
    <Section className="bg-black py-10" intensity={1} y={36}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-80">
          {brands.map((b, idx) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="text-center text-slate-400 text-sm tracking-wide uppercase"
            >
              {b}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
