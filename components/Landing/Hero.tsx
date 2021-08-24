import { Container, Grid, View, Flex } from '@components'
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
      content
    </Flex>
  )
}
