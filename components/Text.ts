import {
  styled,
  mapThemeToCSSProp,
  KeysToPropMap,
  CSSProps,
} from '@config/stitches'

const fontSizeMapKey: CSSProps = 'fontSize'
const colorsMapKey: CSSProps = 'color'

const fontSizeMap = mapThemeToCSSProp(fontSizeMapKey) as KeysToPropMap<
  typeof fontSizeMapKey
>
const colorsMap = mapThemeToCSSProp(colorsMapKey) as KeysToPropMap<
  typeof colorsMapKey
>

export default styled('span', {
  variants: {
    size: fontSizeMap,
    color: colorsMap,
  },
  defaultVariants: {
    size: '3',
    color: 'black1',
  },
})
