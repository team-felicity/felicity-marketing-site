import { styled, fontSizesMap, colorsMap } from '@config/stitches'

export default styled('span', {
  variants: {
    size: fontSizesMap,
    color: colorsMap,
  },
  defaultVariants: {
    size: '3',
    color: 'primary1',
  },
})
