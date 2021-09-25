import { forwardRef } from 'react'
import { XIcon } from '@heroicons/react/outline'

import type { ElementRef, ComponentProps } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { styled, keyframes } from '@config/stitches'
import { Button } from '@components'

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
})

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
})

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .34)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  outline: 'none',

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

export function Root({
  children,
  ...rest
}: ComponentProps<typeof Dialog.Root>) {
  return (
    <Dialog.Root {...rest}>
      <StyledOverlay />
      {children}
    </Dialog.Root>
  )
}

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
})

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
})

const StyledContent = styled(Dialog.Content, {
  backgroundColor: '$white1',
  // TODO: ask if it looks good with shadow
  boxShadow:
    '0 0 38px -10px $colors$shadowLight, 0 0 35px -15px $colors$shadowDark ',
  position: 'fixed',
  // stretches left and right side vertically
  bottom: 0,
  top: 0,

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate(0,-100%)',
        width: '100%',
        height: '300px',
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate(100%,0)',
        width: '250px',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate(0,100%)',
        width: '100%',
        height: '300px',
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate(-100%,0)',
        width: '250px',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
})

const StyledCloseButton = styled(Button, {
  position: 'absolute',
  top: '$2',
  right: '$2',
  cursor: 'pointer',
  padding: '0.25rem',
  height: 'fit-content !important',
  width: 'fit-content',
  color: '$gray3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Content = forwardRef<
  ElementRef<typeof Dialog.Content>,
  ComponentProps<typeof Dialog.Content>
>(({ children, ...rest }, ref) => (
  <StyledContent {...rest} ref={ref}>
    {children}
    <Dialog.Close asChild>
      <StyledCloseButton
        variant="ghost"
        whileTap={{ filter: 'brightness(0.5)' }}
      >
        <XIcon width="1rem" />
      </StyledCloseButton>
    </Dialog.Close>
  </StyledContent>
))

export const Trigger = Dialog.Trigger
export const Close = Dialog.Close
export const Title = Dialog.Title
export const Description = Dialog.Description
