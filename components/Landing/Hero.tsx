import { motion } from 'framer-motion'

import { styled } from '@config/stitches'

import { Container, Grid, View, Flex, Button } from '@components'
import { textStyles } from '@components/Text'
import HeroCarousel from './HeroCarousel'
import ScrollReveal from '@components/ScrollReveal'
import { TABLET_SIZE } from 'utils'

export default function Hero() {
  return (
    <View as="section" css={{ flexGrow: 1, position: 'relative' }}>
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
        as={motion.h1}
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
        Discover <EmphasizedSloganText>Fresh and Healthy </EmphasizedSloganText>
        Food
      </SloganText>
      <CompanyDescription
        as={motion.p}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          delay: 0.5,
        }}
      >
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.
      </CompanyDescription>
      <ScrollReveal
        transition={{
          delay:
            typeof window === 'object' && window.innerWidth > TABLET_SIZE
              ? 0.7
              : 0,
        }}
      >
        <Button
          as={motion.a}
          href="#"
          variant="primary"
          radius="pill"
          size="large"
          css={{
            marginTop: '$4',
            fontSize: '$4',
            width: 'fit-content',
            padding: '1rem 3rem',
            height: 'unset',
            marginBottom: '$5',

            '@tablet': { marginBottom: 'unset' },
          }}
        >
          Download App
        </Button>
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
