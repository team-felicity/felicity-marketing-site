import { m } from 'framer-motion'

import type { Transition } from 'framer-motion'
import type { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const defaultTransition: Transition = {
  stiffness: 200,
  damping: 30,
}

export default function ScrollReveal({
  children,
  transition = {},
}: {
  children: ReactNode
  transition?: Transition
}) {
  return (
    <m.div
      initial="hidden"
      variants={variants}
      transition={{ ...defaultTransition, ...transition }}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </m.div>
  )
}
