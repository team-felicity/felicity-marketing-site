import { motion } from 'framer-motion'

import { mapThemeToCSSProp, styled } from '@config/stitches'

export default styled(motion.div, {
  display: 'grid',

  variants: {
    gap: mapThemeToCSSProp('gap'),
    gapX: mapThemeToCSSProp('columnGap'),
    gapY: mapThemeToCSSProp('rowGap'),
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
