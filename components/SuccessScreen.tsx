import { styled } from '@config/stitches'
import Image from 'next/image'
import { Container, View, Flex, Link } from '@components'
import { textStyles } from '@components/Text'
import BrocoliImg from 'public/brocoli.png'
import BowlImg from 'public/foodbowl.png'
import LemonImg from 'public/lemon.png'
import CheckImg from 'public/check.svg'
import { ArrowRightIcon } from '@heroicons/react/outline'

export default function SuccessScreen() {
  return (
    <View
      css={{
        display: 'grid',
        backgroundColor: '$white1',
        minHeight: '60vh',
        overflow: 'hidden',
        '@tablet': {
          height: '70vh',
        },
      }}
    >
      <BoxBg />
      <Container
        as={Flex}
        size="large"
        direction="column"
        gap="3"
        css={{
          alignSelf: 'center',
          position: 'relative',
        }}
      >
        <Check>
          <Image src={CheckImg} alt="check" />
        </Check>

        <Title
          size={{
            '@initial': '7',
            '@tablet': '10',
            '@desktop': '12',
          }}
        >
          Thank you!
        </Title>
        <Subtitle
          size={{
            '@initial': '3',
            '@tablet': '5',
            '@desktop': '6',
          }}
        >
          We’ll get back with you as soon as possible
        </Subtitle>
        <Link href="#">
          <Flex gap="3" css={{ justifyContent: 'center' }}>
            <LinkText
              size={{
                '@initial': '3',
                '@tablet': '6',
                '@desktop': '7',
              }}
            >
              Read our latest blog
            </LinkText>
            <ArrowRightIcon width="1.5rem" color="#60BB93" />
          </Flex>
        </Link>
      </Container>

      <Bowl>
        <Image src={BowlImg} alt="foodbowl" />
      </Bowl>
      <Brocoli>
        <Image src={BrocoliImg} alt="brocoli" />
      </Brocoli>
      <Lemon>
        <Image src={LemonImg} alt="lemon" />
      </Lemon>
    </View>
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
  '@tablet': {
    transform: 'translateY(-40%)',
    right: '-6%',
    width: '13vw',
    top: '50%',
  },
})
const Brocoli = styled(View, {
  position: 'fixed',
  left: '-100%',
  '@tablet': {
    transform: 'translateY(-40%)',
    left: '-3%',
    width: '12vw',
    top: '60%',
  },
})
const Lemon = styled(View, {
  position: 'fixed',
  top: '-100%',
  '@tablet': {
    left: '30%',
    top: '-5%',
    width: '15vw',
  },
})

const Check = styled(View, {
  alignSelf: 'center',
})

const BoxBg = styled(View, {
  backgroundColor: '$primary7',
  position: 'absolute',
  width: '100%',
  height: '30vh',
  transform: 'translateY(50%)',
  '@tablet': {
    height: '25vh',
    transform: 'translateY(90%)',
  },
  '@desktop': {
    transform: 'translateY(100%)',
  },
})
