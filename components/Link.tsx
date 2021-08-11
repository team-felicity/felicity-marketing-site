import { forwardRef } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { motion } from 'framer-motion'

import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { styled } from '@config/stitches'

const StyledLink = styled(motion.a, {})

type PolymorphicLink = Polymorphic.ForwardRefComponent<
  typeof motion.a,
  Polymorphic.OwnProps<typeof StyledLink>
>

const Link = forwardRef(({ href, ...rest }, ref) => {
  return (
    <NextLink href={href as LinkProps['href']}>
      <StyledLink ref={ref} {...rest} />
    </NextLink>
  )
}) as PolymorphicLink

export default Link
