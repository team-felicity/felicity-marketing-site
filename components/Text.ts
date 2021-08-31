import { m } from 'framer-motion'

import { styled, mapThemeToCSSProp } from '@config/stitches'

export const textStyles = {
  margin: 0,
  variants: {
    size: mapThemeToCSSProp('fontSize'),
    color: mapThemeToCSSProp('color'),
    weight: mapThemeToCSSProp('fontWeight'),
  },
}
export default styled(m.span, {
  ...textStyles,
  defaultVariants: {
    size: '3',
    color: 'black1',
    weight: 'regular',
  },
})
