import { styled } from '@config/stitches'
import Image from 'next/image'
import { Container, View, Flex, Link, Grid } from '@components'
import { textStyles } from '@components/Text'
import BrocoliImg from 'public/brocoli.png'
import BowlImg from 'public/foodbowl.png'
import LemonImg from 'public/lemon.png'
import CheckImg from 'public/check.svg'
import { ArrowRightIcon } from '@heroicons/react/outline'

const IMAGE_HEIGHT = 65

export default function SuccessScreen() {
  return (
    <Grid
      flow="row"
      css={{
        placeItems: 'center',
        py: IMAGE_HEIGHT,
      }}
    >
      <View css={{ backgroundColor: '$primary8', width: '100%' }}>
        <Container
          as={Flex}
          direction="column"
          gap="3"
          css={{
            mt: -(IMAGE_HEIGHT / 2),
            pb: '$6',
          }}
        >
          <Image src={CheckImg} alt="check" />

          <Title size={{ '@initial': '8', '@phone': '10', '@tablet': '12' }}>
            Thank you!
          </Title>
          <Subtitle size={{ '@initial': '4', '@phone': '6' }}>
            We’ll get back with you as soon as possible
          </Subtitle>
          <Link href="/blog">
            <Flex
              gap="2"
              css={{
                justifyContent: 'center',
                fontSize: '$4',
                '@phone': { fontSize: '$6' },
              }}
            >
              <LinkText css={{ fontSize: 'inherit' }}>
                Read our latest blog
              </LinkText>
              <ArrowRightIcon
                color="#60BB93"
                style={{ width: '1em', fontSize: 'inherit' }}
              />
            </Flex>
          </Link>
        </Container>
      </View>

      <Bowl>
        <Image src={BowlImg} alt="foodbowl" />
      </Bowl>
      <Brocoli>
        <Image src={BrocoliImg} alt="brocoli" />
      </Brocoli>
      <Lemon>
        <Image src={LemonImg} alt="lemon" />
      </Lemon>
    </Grid>
  )
}

const Title = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  defaultVariants: {
    color: 'primary4',
    weight: 'bold',
  },
})

const Subtitle = styled('p', {
  ...textStyles,

  textAlign: 'center',
  defaultVariants: {
    color: 'primary5',
    weight: 'medium',
  },
})

const LinkText = styled('p', {
  ...textStyles,

  defaultVariants: {
    color: 'primary1',
    weight: 'medium',
  },
})

const Bowl = styled(View, {
  position: 'fixed',
  right: '-100%',
  '@phone': {
    transform: 'translateY(-40%)',
    right: '-6%',
    width: 'max(125px,13vw)',
    top: '50%',
  },
})
const Brocoli = styled(View, {
  display: 'none',
  '@phone': {
    position: 'fixed',
    top: '50%',
    left: '-5rem',
    display: 'block',
    width: 'max(150px,12vw)',
  },
})
const Lemon = styled(View, {
  display: 'none',

  '@phone': {
    display: 'block',
    position: 'fixed',
    left: '20%',
    top: '-5%',
  },
})
