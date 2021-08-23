import { motion } from 'framer-motion'

import {
  CSSProps,
  KeysToPropMap,
  mapThemeToCSSProp,
  styled,
} from '@config/stitches'

const gapMapKey: CSSProps = 'gap'
const gapMap = mapThemeToCSSProp(gapMapKey) as KeysToPropMap<typeof gapMapKey>

const gapXMapKey: CSSProps = 'columnGap'
const gapXMap = mapThemeToCSSProp(gapXMapKey) as KeysToPropMap<
  typeof gapXMapKey
>

const gapYMapKey: CSSProps = 'rowGap'
const gapYMap = mapThemeToCSSProp(gapYMapKey) as KeysToPropMap<
  typeof gapYMapKey
>

export default styled(motion.div, {
  display: 'grid',

  variants: {
    gap: gapMap,
    gapX: gapXMap,
    gapY: gapYMap,
    flow: {
      row: { gridAutoFlow: 'row' },
      column: { gridAutoFlow: 'column' },
      dense: { gridAutoFlow: 'dense' },
      rowDense: { gridAutoFlow: 'row dense' },
      columnDense: { gridAutoFlow: 'column dense' },
    },
    align: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
    columns: {
      1: { gridTemplateColumns: 'repeat(1, 1fr)' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' },
      3: { gridTemplateColumns: 'repeat(3, 1fr)' },
      4: { gridTemplateColumns: 'repeat(4, 1fr)' },
    },
  },
})
