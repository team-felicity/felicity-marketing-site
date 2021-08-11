import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

import type * as Polymorphic from '@radix-ui/react-polymorphic'

import {
  CSSProps,
  KeysToPropMap,
  mapThemeToCSSProp,
  styled,
  theme,
} from '@config/stitches'

import Text from './Text'
import Flex from './Flex'
import Grid from './Grid'

const radiusMapKey: CSSProps = 'borderRadius'
const radiiMap = mapThemeToCSSProp(radiusMapKey) as KeysToPropMap<
  typeof radiusMapKey
>

const StyledInput = styled(motion.input, {
  $$borderWidth: '1px',

  padding: '0 12px',
  borderStyle: 'solid',
  borderColor: '$gray4',
  borderWidth: '$$borderWidth',
  fontFamily: 'inherit',
  transition: 'all .15s ease',
  outline: 'none',
  width: '100%',

  '&:not(&[data-error="true"]):active, &:not(&[data-error="true"]):focus': {
    borderColor: '$black1',
  },
  '&::placeholder': { color: '$gray3' },

  variants: {
    radius: radiiMap,
    size: {
      small: { height: '32px' },
      medium: { height: '40px' },
      large: { height: '$7', fontSize: '$4' },
    },
    variant: {
      outline: {},
      flushed: {
        borderBottomWidth: '$$borderWidth',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        rb: 0,
      },
      unstyled: { borderWidth: 0 },
    },
  },

  defaultVariants: {
    variant: 'outline',
    radius: '1',
    size: 'medium',
  },
})

const StyledErrorIcon = styled(ExclamationCircleIcon, {
  color: '$error',
  width: '100%',
})

interface CustomInputProps {
  error?: string
}

type PolymorphicInput = Polymorphic.ForwardRefComponent<
  typeof motion.input,
  Polymorphic.OwnProps<typeof StyledInput> & CustomInputProps
>

const Button = forwardRef(({ error = '', ...rest }, ref) => {
  const css = rest.css || {}
  const props = {
    ...rest,
    ref,
    css,
    'data-error': !!error,
  }

  if (!error) return <StyledInput {...props} />

  props.css.borderColor = '$error'
  props.css.caretColor = '$error'
  props.css.color = '$error'
  props.css['&::placeholder'] = { color: `${theme.colors.error.value}66` }

  return (
    <Flex direction="column" gap="2">
      <StyledInput {...props} />
      <Grid
        align="start"
        gap="1"
        css={{ gridTemplateColumns: '$sizes$4 auto' }}
      >
        <StyledErrorIcon />
        <Flex gap="1">
          <Text color="error" size="2" weight="semibold" as="b">
            Error:
          </Text>
          <Text color="error" size="2" css={{ wordBreak: 'break-word' }}>
            {error}
          </Text>
        </Flex>
      </Grid>
    </Flex>
  )
}) as PolymorphicInput

export default Button
