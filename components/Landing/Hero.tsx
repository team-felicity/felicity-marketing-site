import { m } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { styled } from '@config/stitches'

import Container from '@components/Container'
import Grid from '@components/Grid'
import View from '@components/View'
import Flex from '@components/Flex'
import { textStyles } from '@components/Text'
import { buttonStyles } from '@components/Button'
import ScrollReveal from '@components/ScrollReveal'

import { TABLET_SIZE } from 'utils'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  return (
    <View as="section" css={{ flexGrow: 1, backgroundColor: '$white1' }}>
      <Container
        size="large2"
        css={{
          gridTemplateAreas: '"carousel" "content"',

          // sa hero nlng ang padding since kaylangan way padding sa carousel
          padding: 0,

          '@tablet': {
            height: '100vh',
            gridTemplateColumns: '480px 1fr',
            gridTemplateAreas: '"content carousel"',
          },
        }}
        as={Grid}
        gap="4"
      >
        <HeroContent />
        <HeroCarousel />
      </Container>
    </View>
  )
}

function HeroContent() {
  return (
    <Flex
      direction="column"
      justify="center"
      gapY="2"
      css={{ gridArea: 'content', px: '$5' }}
    >
      <SloganText
        as={m.h1}
        size={{
          '@initial': '11',
          '@tablet': '12',
          '@desktop': '13',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
      >
        Shop for Food and Earn Extra
        <EmphasizedSloganText> EFFORTLESSLY </EmphasizedSloganText>
      </SloganText>
      <CompanyDescription
        as={m.p}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          delay: 0.5,
        }}
      >
        <Balancer>
          Get the freshest produce without having to break a bank or a sweat
        </Balancer>
      </CompanyDescription>
      <ScrollReveal
        transition={{
          delay:
            typeof window === 'object' && window.innerWidth > TABLET_SIZE
              ? 0.7
              : 0,
        }}
      >
        <CTA
          href="#download"
          variant="primary"
          radius="pill"
          size="large"
          fitContent
          css={{
            fontSize: '$4',
            padding: '1rem 3rem',
            height: 'unset',
          }}
        >
          Download App
        </CTA>
      </ScrollReveal>
    </Flex>
  )
}

const SloganText = styled('h1', {
  ...textStyles,

  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const EmphasizedSloganText = styled('span', {
  ...textStyles,

  fontSize: 'inherit',
  fontWeight: 'inherit',

  defaultVariants: {
    color: 'primary3',
  },
})

const CompanyDescription = styled('p', {
  ...textStyles,

  opacity: 0.85,

  defaultVariants: {
    color: 'primary5',
    size: '4',
  },
})

const CTA = styled('a', buttonStyles, {
  marginTop: '$4',
  marginBottom: '$5',

  '@tablet': { marginBottom: 'unset' },
})
