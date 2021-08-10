import { ComponentProps, forwardRef } from 'react'
import { InternalCSS } from '@stitches/react'
import { motion } from 'framer-motion'

import { radiiMap, styled, theme } from '@config/stitches'

// undecided default animation whileTap/onClick
// const ScaleDownButton = forwardRef<
//   HTMLButtonElement,
//   ComponentProps<typeof motion.button>
// >((props, ref) => (
//   <motion.button
//     {...props}
//     ref={ref}
//     whileTap={{ scale: 0.9 }}
//     transition={{ duration: 0.1 }}
//   />
// ))

// ScaleDownButton.displayName = 'ScaleDownButton'

export const TouchableOpacity = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof motion.button>
>((props, ref) => (
  <motion.button
    {...props}
    ref={ref}
    whileTap={props.whileTap || { opacity: 0.4 }}
    transition={props.transition || { duration: 0.1 }}
  />
))

TouchableOpacity.displayName = 'TouchableOpacity'

const disabledOrLoadingStyles: InternalCSS = {
  cursor: 'not-allowed',
  background: '#fafafa',
  borderColor: '#eaeaea',
  color: '#999',
}

export default styled(motion.button, {
  background: 'none',
  border: '0px solid $black1',
  padding: '0 $3',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$2',
  color: '$black1',
  boxShadow: 'inset 0 0 0 $$borderWidth $$borderColor',
  $$borderColor: 'currentColor',
  $$borderWidth: '1px',

  transition: 'all .15s ease',
  userSelect: 'none',
  cursor: 'pointer',

  // used when morphing to Link/a
  display: 'grid',
  placeItems: 'center',

  '&:disabled': disabledOrLoadingStyles,
  '&:active, &:focus': {
    $$borderWidth: '2px',
  },

  variants: {
    radius: radiiMap,
    size: {
      small: { height: '$5' },
      medium: { height: '$6' },
      large: { height: '$7', fontSize: '$3', lineHeight: '1.5rem' },
    },
    loading: {
      true: disabledOrLoadingStyles,
    },
    variant: {
      secondary: {
        $$borderWidth: '2px',
        color: '$primary1',

        '&:hover': {
          background: '$primary1',
          color: '$white1',
        },
      },
      primary: {
        $$opacity: 2,
        border: 'none',
        linearGradient: `to bottom right, $primary1, $primary4`,
        color: '$white1',
        fontWeight: '$semibold',
        boxShadow: 'none',
      },
      ghost: {
        boxShadow: 'none',

        '&:hover': { background: `${theme.colors.gray2.value}25` },
        '&:active': { background: `${theme.colors.gray2.value}50` },
      },
    },
  },

  defaultVariants: {
    radius: '1',
    size: 'medium',
  },
})
