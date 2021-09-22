import { forwardRef } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/outline'

import type { ElementRef, ComponentProps, ReactElement } from 'react'

import { css, mapThemeToCSSProp, styled, theme } from '@config/stitches'

import Text from './Text'
import Flex from './Flex'
import Grid from './Grid'

export const sharedStyles = css({
  $$borderWidth: '1px',

  padding: '0 12px',
  borderStyle: 'solid',
  borderColor: '$gray4',
  borderWidth: '$$borderWidth',
  fontFamily: 'inherit',
  transition: 'all .15s ease',
  outline: 'none',
  width: '100%',

  '&:active, &:focus-within': { borderColor: '$black1' },
  '&::placeholder': { color: '$gray3' },

  variants: {
    radius: mapThemeToCSSProp('borderRadius'),
    status: {
      error: {
        borderColor: '$error',
        caretColor: '$error',
        color: '$error',

        '&::placeholder': { color: `${theme.colors.error.value}66` },
        '&:active, &:focus': { borderColor: '$error' },
      },
    },
    variant: {
      outline: {},
      flushed: {
        borderBottomWidth: '$$borderWidth',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        rb: 0,
      },
      unstyled: { borderWidth: 0 },
    },
  },

  defaultVariants: {
    variant: 'outline',
    radius: '1',
  },
})

const StyledErrorIcon = styled(ExclamationCircleIcon, {
  color: '$error',
  width: '100%',
})

export const BaseInput = styled('input', sharedStyles, {
  variants: {
    size: {
      small: { height: '32px' },
      medium: { height: '40px' },
      large: { height: '$7', fontSize: '$4' },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const BaseTextArea = styled('textarea', sharedStyles, {
  py: '$2',
  resize: 'vertical',
  height: 'unset',
})

type HasError = {
  error?: string
}

// wrapper component that adds error to text field
function TextFieldWrapper({
  error,
  children,
}: { children: ReactElement } & HasError) {
  return (
    <Flex direction="column" gap="2">
      {children}
      {error ? (
        <Grid
          align="start"
          gap="1"
          css={{ gridTemplateColumns: '$sizes$4 auto' }}
        >
          <StyledErrorIcon />
          <Flex gap="1">
            <Text color="error" size="2" weight="semibold" as="b">
              Error:
            </Text>
            <Text color="error" size="2" css={{ wordBreak: 'break-word' }}>
              {error}
            </Text>
          </Flex>
        </Grid>
      ) : null}
    </Flex>
  )
}

// NOTE: not polymorphic since both have specific unique styles that differ from each other

type TextFieldProps = ComponentProps<typeof BaseInput> & HasError
export const TextField = forwardRef<
  ElementRef<typeof BaseInput>,
  TextFieldProps
>(({ error = '', ...rest }, ref) => {
  return (
    <TextFieldWrapper error={error}>
      <BaseInput {...rest} ref={ref} status={error ? 'error' : undefined} />
    </TextFieldWrapper>
  )
})

type TextAreaProps = ComponentProps<typeof BaseTextArea> & HasError
export const TextArea = forwardRef<
  ElementRef<typeof BaseTextArea>,
  TextAreaProps
>(({ error = '', ...rest }, ref) => {
  return (
    <TextFieldWrapper error={error}>
      <BaseTextArea {...rest} ref={ref} status={error ? 'error' : undefined} />
    </TextFieldWrapper>
  )
})
