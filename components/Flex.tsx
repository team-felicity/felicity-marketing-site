import { motion } from 'framer-motion'

import {
  CSSProps,
  KeysToPropMap,
  mapThemeToCSSProp,
  styled,
} from '@config/stitches'
import type { FlexDirectionProperty } from '@stitches/react/types/css-types'

const gapMapKey: CSSProps = 'gap'
const gapMap = mapThemeToCSSProp(gapMapKey) as KeysToPropMap<typeof gapMapKey>

export default styled(motion.div, {
  display: 'flex',
  flexDirection: '$$fd' as FlexDirectionProperty,
  justifyContent: '$$jc',
  alignItems: '$$ai',

  variants: {
    gap: gapMap,
    direction: {
      row: { $$fd: 'row' },
      column: { $$fd: 'column' },
      rowReverse: { $$fd: 'row-reverse' },
      columnReverse: { $$fd: 'column-reverse' },
    },
    align: {
      start: { $$ai: 'flex-start' },
      center: { $$ai: 'center' },
      end: { $$ai: 'flex-end' },
      stretch: { $$ai: 'stretch' },
      baseline: { $$ai: 'baseline' },
    },
    justify: {
      start: { $$jc: 'flex-start' },
      center: { $$jc: 'center' },
      end: { $$jc: 'flex-end' },
      between: { $$jc: 'space-between' },
    },
  },

  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
  },
})
