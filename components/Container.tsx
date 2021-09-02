import { m } from 'framer-motion'

import { styled } from '@config/stitches'

export default styled(m.div, {
  mx: 'auto',
  px: '$5',

  variants: {
    size: {
      small: { maxWidth: '430px' },
      medium: { maxWidth: '715px' },
      large: { maxWidth: '1145px' },
      large2: { maxWidth: '1440px' },
      xl: { maxWidth: 'none' },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
})
