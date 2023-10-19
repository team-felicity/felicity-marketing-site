import type { ComponentProps, ReactNode } from 'react'
import { LinkIcon } from '@heroicons/react/outline'

import { styled, css } from '@config/stitches'

import View from '@components/View'
import Container from '@components/Container'
import Flex from '@components/Flex'

const components = {
  p: (props: ComponentProps<typeof P>) => <P {...props} />,
  a: (props: ComponentProps<typeof A>) => (
    <A {...props} target="_blank" rel="noopener" />
  ),
  img: (props: ComponentProps<'img'>) => {
    const src =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:1337${props.src}`
        : props.src
    return (
      <Flex justify="center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...props}
          style={{ width: '100%', objectFit: 'cover' }}
          src={src}
          alt={props.alt}
        />
      </Flex>
    )
  },
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <View
      as="blockquote"
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        mx: '0',
        borderLeft: `$sizes$1 solid rgb(238, 238, 238)`,
        color: '$gray1',

        '& p': {
          py: '1rem',
          my: 0,
        },
      }}
    >
      {props.children}
    </View>
  ),
  h1: ({ children, ...rest }: ComponentProps<'h1'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h1 {...rest} id={rest.id} className={h1Styles()}>
          {children}
        </h1>
      </HeadingLink>
    )
  },
  h2: ({ children, ...rest }: ComponentProps<'h2'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h2 {...rest} id={rest.id}>
          {children}
        </h2>
      </HeadingLink>
    )
  },
  h3: ({ children, ...rest }: ComponentProps<'h3'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h3 {...rest} id={rest.id}>
          {children}
        </h3>
      </HeadingLink>
    )
  },
  h4: ({ children, ...rest }: ComponentProps<'h4'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h4 {...rest} id={rest.id}>
          {children}
        </h4>
      </HeadingLink>
    )
  },
  h5: ({ children, ...rest }: ComponentProps<'h5'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h5 {...rest} id={rest.id}>
          {children}
        </h5>
      </HeadingLink>
    )
  },
  h6: ({ children, ...rest }: ComponentProps<'h6'>) => {
    return (
      <HeadingLink id={rest.id}>
        <h6 {...rest} id={rest.id}>
          {children}
        </h6>
      </HeadingLink>
    )
  },
}

export const ContentContainer = styled(Container, {
  fontSize: '16px',

  '@tablet': {
    fontSize: '18px',
  },
})

const P = styled('p', {
  lineHeight: 2,

  [`${Container} > &:first-of-type::first-letter`]: {
    initialLetter: 2,
    color: '$primary7',
    fontSize: '3.75em',
    // lineHeight: '0.9',
    textTransform: 'uppercase',
    display: 'block',
    float: 'left',
    paddingTop: '$2',
    mr: '$2',
    fontWeight: 'bold',

    '@tablet': {
      lineHeight: '0.8',
    },
  },
})

const A = styled('a', {
  color: '$primary1',
  '&:hover': {
    textDecoration: 'underline',
    color: '$primary1',
  },
})

const h1Styles = css({
  fontSize: '2em',
  my: '0.67em',
})

const HeaderA = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',

  svg: {
    opacity: 0,
  },
  '&:hover svg': {
    opacity: 1,
  },
})

function HeadingLink({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <HeaderA href={`#${id}`} rel="noopener">
      {children}
      <Flex as="span" justify="center" css={{ ml: '$2', color: '$gray1' }}>
        <LinkIcon aria-hidden width={16} />
      </Flex>
    </HeaderA>
  )
}

export default components
