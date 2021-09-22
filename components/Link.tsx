import { forwardRef } from 'react'
import NextLink, { LinkProps } from 'next/link'

import type { ElementRef, ComponentProps } from 'react'

import { styled } from '@config/stitches'

const StyledLink = styled('a', {})

const Link = forwardRef<
  ElementRef<typeof StyledLink>,
  ComponentProps<typeof StyledLink>
>(({ href, ...rest }, ref) => {
  return (
    <NextLink href={href as LinkProps['href']} passHref>
      <StyledLink ref={ref} {...rest} />
    </NextLink>
  )
})

export default Link
