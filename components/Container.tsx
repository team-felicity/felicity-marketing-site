import { motion } from 'framer-motion'

import { styled } from '@config/stitches'

export default styled(motion.div, {
  mx: 'auto',
  px: '$5',

  variants: {
    size: {
      small: { maxWidth: '430px' },
      medium: { maxWidth: '715px' },
      large: { maxWidth: '1145px' },
      xl: { maxWidth: 'none' },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})
