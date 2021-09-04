import { forwardRef } from 'react'
import { m } from 'framer-motion'

import type * as Polymorphic from '@radix-ui/react-polymorphic'
import type { ElementRef, ComponentProps } from 'react'

import {
  styled,
  theme,
  keyframes,
  mapThemeToCSSProp,
  css,
} from '@config/stitches'

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

export const TouchableOpacity = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof m.button>
>((props, ref) => (
  <m.button
    {...props}
    ref={ref}
    whileTap={props.whileTap || { opacity: 0.4 }}
    transition={props.transition || { duration: 0.1 }}
  />
))

const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': { opacity: 0.5 },
})

// converted styles to reusable css for object composition
// sample usecase is styling dialog close button
// const Close = styled(Dialog.Close, buttonStyles, { color: '$primar1' })
export const buttonStyles = css({
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
  $$accentColor: 'currentColor',

  transition: 'all .15s ease',
  userSelect: 'none',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',

  // used when morphing to Link/a
  display: 'grid',
  placeItems: 'center',

  '&:disabled': {
    cursor: 'not-allowed',
    $$borderColor: '#eaeaea',
    color: '#999',
  },

  '&:active, &:focus': {
    $$borderWidth: '2px',
  },

  variants: {
    radius: mapThemeToCSSProp('borderRadius'),
    size: {
      small: { height: '$5' },
      medium: { height: '$6' },
      large: { height: '$7', fontSize: '$3', lineHeight: '1.5rem' },
    },
    loading: {
      true: {
        cursor: 'not-allowed',
        animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
      },
    },
    fitContent: {
      true: {
        width: 'fit-content',
      },
    },
    variant: {
      secondary: {
        $$accentColor: '$colors$primary1',
        $$borderColor: '$$accentColor',
        $$borderWidth: '2px',
        color: '$$accentColor',

        '&:not(&:disabled):hover': {
          background: '$$accentColor',
          color: '$white1',
        },
      },
      primary: {
        $$opacity: 2,

        border: 'none',
        linearGradient: 'to right, $primary1 0%, $primary4 50%',
        color: '$white1 !important',
        fontWeight: '$semibold',
        boxShadow: 'none',
        backgroundSize: '200% auto',
        transition: 'all 0.2s ease',

        '&:hover': {
          backgroundPosition: 'center',
        },
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

const StyledButton = styled(m.button, buttonStyles)

type PolymorphicButton = Polymorphic.ForwardRefComponent<
  'button',
  Polymorphic.OwnProps<typeof StyledButton>
>

const Button = forwardRef<
  ElementRef<typeof StyledButton>,
  ComponentProps<typeof StyledButton>
>(({ disabled, loading, ...rest }, ref) => {
  const isDisabled = (disabled || loading) as boolean | undefined
  return (
    <StyledButton
      ref={ref}
      {...rest}
      disabled={isDisabled}
      loading={loading}
      // make sure to only use motion elements for the `as` prop
      // causes build error if component is casted to non-motion element
      whileTap={!isDisabled ? rest.whileTap : undefined}
      whileDrag={!isDisabled ? rest.whileDrag : undefined}
      whileHover={!isDisabled ? rest.whileHover : undefined}
      whileFocus={!isDisabled ? rest.whileFocus : undefined}
    >
      {loading ? 'Loading...' : rest.children}
    </StyledButton>
  )
}) as PolymorphicButton

export default Button
