import { motion } from 'framer-motion'

import {
  styled,
  mapThemeToCSSProp,
  KeysToPropMap,
  CSSProps,
} from '@config/stitches'

const fontSizesMapKey: CSSProps = 'fontSize'
const colorsMapKey: CSSProps = 'color'
const fontWeightsMapKey: CSSProps = 'fontWeight'

const fontSizeMap = mapThemeToCSSProp(fontSizesMapKey) as KeysToPropMap<
  typeof fontSizesMapKey
>
const colorsMap = mapThemeToCSSProp(colorsMapKey) as KeysToPropMap<
  typeof colorsMapKey
>
const fontWeightsMap = mapThemeToCSSProp(fontWeightsMapKey) as KeysToPropMap<
  typeof fontWeightsMapKey
>

export const textStyles = {
  margin: 0,

  variants: {
    size: fontSizeMap,
    color: colorsMap,
    weight: fontWeightsMap,
  },
}

export default styled(motion.span, {
  ...textStyles,

  defaultVariants: {
    size: '3',
    color: 'black1',
    weight: 'regular',
  },
})
