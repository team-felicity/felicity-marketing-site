import { motion } from 'framer-motion'

import type { Transition } from 'framer-motion'
import type { ReactNode } from 'react'

import { useInView } from 'react-intersection-observer'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({
  children,
  transition: transitionFromProp,
}: {
  children: ReactNode
  transition?: Transition
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-15%',
    initialInView: false,
  })

  const transition = transitionFromProp || {}
  const defaultTransition = { stiffness: 200, damping: 30 }
  const finalTransition = { ...defaultTransition, ...transition }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={finalTransition}
    >
      {children}
    </motion.div>
  )
}
