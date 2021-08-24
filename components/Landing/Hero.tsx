import { styled } from '@config/stitches'

import { Container, Grid, View, Flex } from '@components'
import { textStyles } from '@components/Text'
import HeroCarousel from './HeroCarousel'

export default function Hero() {
  return (
    <View as="section" css={{ flexGrow: 1, position: 'relative' }}>
      <Container
        size="large"
        css={{
          gridTemplateAreas: '"carousel" "content"',

          '@desktop': {
            height: '100%',
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
      css={{ gridArea: 'content' }}
    >
      <SloganText
        size={{
          '@initial': '11',
          '@tablet': '12',
          '@desktop': '13',
        }}
      >
        Discover <EmphasizedSloganText>Fresh and Healthy </EmphasizedSloganText>
        Food
      </SloganText>
      <CompanyDescription>
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.
      </CompanyDescription>
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
