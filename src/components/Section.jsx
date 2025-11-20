import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

/**
 * Section wrapper with bold enter + exiting scroll animations.
 * - Enters: fade in + rise
 * - Exits (when scrolled past): fades, lifts slightly, subtle scale down
 */
export default function Section({ children, className = '', delay = 0, threshold = 0.25, y = 28 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: threshold, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('exit')
    }
  }, [inView, controls])

  const variants = {
    hidden: { opacity: 0, y, scale: 0.98, filter: 'blur(2px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0.25, y: -20, scale: 0.985, filter: 'blur(1px)' },
  }

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  )
}
