import { ComponentProps } from 'react'
import Balancer from 'react-wrap-balancer'
import Image from 'next/image'

import { styled } from '@config/stitches'

import Container from '@components/Container'
import Flex from '@components/Flex'
import Grid from '@components/Grid'
import ScrollReveal from '@components/ScrollReveal'
import { textStyles } from '@components/Text'
import View from '@components/View'

type Props = {
  steps: {
    title: string
    description: string
    image: ComponentProps<typeof Image>['src']
  }[]
  header: string
}

export default function Steps({ steps, header }: Props) {
  return (
    <View
      as="section"
      css={{
        backgroundColor: '$white1',
        py: '$9',
      }}
    >
      <Container
        size="large2"
        as={Grid}
        css={{
          gapy: '3rem',
          mb: '$5',
          '@desktop': {
            pt: '$5',
          },
        }}
      >
        <ScrollReveal>
          <Header>{header}</Header>
        </ScrollReveal>
        <Flex
          direction={{
            '@initial': 'column',
            '@desktop': 'row',
          }}
          justify="between"
          gap="8"
        >
          {steps.map((step, idx) => (
            <Flex
              key={idx}
              justify="center"
              css={{
                width: '100%',
                '@tablet': {
                  width: '33%',
                },
              }}
            >
              <ScrollReveal style={{ width: '100%' }}>
                <Flex direction="column">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={250}
                    objectFit="contain"
                  />
                  <ColumnTitle>{step.title}</ColumnTitle>
                  <Subtitles>
                    <Balancer>{step.description}</Balancer>
                  </Subtitles>
                </Flex>
              </ScrollReveal>
            </Flex>
          ))}
        </Flex>
      </Container>
    </View>
  )
}

const Header = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  paddingBottom: '$3',
  defaultVariants: {
    size: '11',
    color: 'primary3',
    weight: 'bold',
  },
})

const ColumnTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  mt: '$4',

  '@desktop': {
    mt: '$8',
    mb: '$1',
  },
  defaultVariants: {
    size: '9',
    color: 'primary1',
    weight: 'bold',
  },
})

const Subtitles = styled('p', {
  ...textStyles,
  textAlign: 'center',
  width: '100%',
  '@desktop': {
    px: '$2',
    fontSize: '$4',
  },
})
