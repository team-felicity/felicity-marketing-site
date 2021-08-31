import { m } from 'framer-motion'

import { mapThemeToCSSProp, styled } from '@config/stitches'

export default styled(m.div, {
  display: 'flex',
  flexDirection: '$$fd' as string,
  justifyContent: '$$jc',
  alignItems: '$$ai',

  variants: {
    gap: mapThemeToCSSProp('gap'),
    gapX: mapThemeToCSSProp('columnGap'),
    gapY: mapThemeToCSSProp('rowGap'),
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
