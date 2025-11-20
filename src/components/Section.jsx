import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion'

/**
 * Section wrapper with stronger, cinematic enter + scroll-linked parallax.
 * - Enters: deeper fade + rise + deblur with a soft spring
 * - Exits: lifts up, slight scale down, soft blur
 * - Parallax: subtle translateY and tilt tied to local scroll progress
 */
export default function Section({
  children,
  className = '',
  delay = 0,
  threshold = 0.25,
  y = 48,
  intensity = 1, // controls parallax depth and reveal strength
  parallax = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: threshold, margin: '-10% 0px' })
  const controls = useAnimation()

  // Local scroll progress for this section
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax mappings
  const yParallax = useTransform(scrollYProgress, [0, 1], [parallax ? -30 * intensity : 0, parallax ? 30 * intensity : 0])
  const rotateX = useTransform(scrollYProgress, [0, 1], [parallax ? -2.5 * intensity : 0, parallax ? 2.5 * intensity : 0])
  const opacityParallax = useTransform(scrollYProgress, [0, 1], [0.96, 0.96]) // keep consistent

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('exit')
    }
  }, [inView, controls])

  const variants = {
    hidden: { opacity: 0, y, scale: 0.96, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0.18, y: -40, scale: 0.975, filter: 'blur(2px)' },
  }

  return (
    <motion.section
      ref={ref}
      className={`${className} will-change-transform`}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay,
        type: 'spring',
        stiffness: 120,
        damping: 24,
      }}
      style={{
        y: yParallax,
        rotateX,
        transformPerspective: 900,
        opacity: opacityParallax,
      }}
    >
      {children}
    </motion.section>
  )
}
