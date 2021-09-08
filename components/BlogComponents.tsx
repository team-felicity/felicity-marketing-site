import { ComponentProps } from 'react'
import { Flex, View } from '.'

const components = {
  a: (props: ComponentProps<'a'>) => (
    <a {...props} target="_blank" rel="noopener" />
  ),
  img: (props: ComponentProps<'img'>) => (
    <Flex justify="center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        src={
          process.env.NODE_ENV === 'development'
            ? `http://localhost:1337${props.src}`
            : props.src
        }
        alt={props.alt}
      />
    </Flex>
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <View
      as="blockquote"
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        mx: '0',
        borderLeft: `1px solid $black1`,
        color: '$gray1',
      }}
    >
      {props.children}
    </View>
  ),
}

export default components
