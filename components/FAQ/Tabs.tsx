import { styled } from '@config/stitches'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const Root = styled(TabsPrimitive.Root, {})
export const Trigger = styled(TabsPrimitive.Trigger, {
  position: 'relative',
  textTransform: 'capitalize',
  cursor: 'pointer',

  padding: '0.25rem 0.5rem',

  fontWeight: '$semibold',
  fontSize: '1.25rem',

  transition: 'color 150ms ease',

  '&[data-state="active"]': {
    color: '$primary4',
  },

  '&:hover': {
    color: '$primary4',
  },
})
export const List = styled(TabsPrimitive.List, {
  display: 'flex',
  gap: '$6',
  overflow: 'auto',
  scrollSnapType: 'x mandatory',

  [`& ${Trigger}`]: {
    scrollSnapAlign: 'center',
  },

  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent',
  },
})
export const Content = styled(TabsPrimitive.Content, {
  pt: '$4',
})
