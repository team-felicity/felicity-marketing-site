import { styled, mapThemeToCSSProp } from '@config/stitches'

export default styled('span', {
  variants: {
    size: mapThemeToCSSProp('fontSizes', 'fontSize'),
    color: mapThemeToCSSProp('colors', 'color'),
  },
  defaultVariants: {
    size: '3',
    color: 'primary1',
  },
})
