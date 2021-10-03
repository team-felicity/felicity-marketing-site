import { styled, keyframes } from '@config/stitches'
import { ChevronDownIcon } from '@heroicons/react/outline'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { forwardRef } from 'react'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

const StyledAccordion = styled(AccordionPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  marginTop: 1,
})

const StyledHeader = styled(AccordionPrimitive.Header, {
  all: 'unset',
  display: 'flex',
})

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '1rem 1.25rem',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: 1,

  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '$semibold',
  color: '$black1',
  transition: 'all 300ms cubic-bezier(0.87, 0, 0.13, 1)',

  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: '$gray5', color: '$primary4' },
  '&:hover': { backgroundColor: '$gray5' },
})

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  fontWeight: '$light',
  fontSize: '1rem',
  color: '$black1',
  backgroundColor: 'rgba(56, 163, 165, 0.1)',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

const StyledContentText = styled('div', {
  padding: '15px 20px',
})

const StyledChevronWrapper = styled('div', {
  padding: 4,
  background: '$white1',
  border: '1px solid $primary4',
  borderRadius: '$pill',
  color: '$primary4',
  transition: 'all 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  height: 24,
  width: 24,

  '[data-state=open] &': {
    transform: 'rotate(-180deg)',
    color: '$white1',
    background: '$primary4',
  },
})

export const Root = StyledAccordion
export const Item = StyledItem
export const Trigger = forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevronWrapper aria-hidden>
        <ChevronDownIcon />
      </StyledChevronWrapper>
    </StyledTrigger>
  </StyledHeader>
))
export const Content = forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
))
