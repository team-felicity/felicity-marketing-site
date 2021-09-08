import { styled } from '@config/stitches'
import Image from 'next/image'
import { Container, View, Flex, Link } from '@components'
import { textStyles } from '@components/Text'
import BrocoliImg from 'public/brocoli.png'
import BowlImg from 'public/foodbowl.png'
import LemonImg from 'public/lemon.png'
import Check from 'public/check.svg'
import { ArrowRightIcon } from '@heroicons/react/outline'

export default function SuccessScreen() {
  return (
    <View
      css={{
        display: 'grid',
        backgroundColor: '$white1',
        '@desktop': {
          height: '77vh',
        },
      }}
    >
      <View
        css={{
          backgroundColor: '$primary7',
          position: 'absolute',
          width: '100vw',
          height: '25vh',

          transform: 'translateY(120%)',
        }}
      />
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
        <Image src={Check} alt="check" />
        <Title size={{ '@initial': '6', '@desktop': '12' }}>Thank you!</Title>
        <Subtitle>We’ll get back with you as soon as possible</Subtitle>
        <Link href="#">
          <Flex gap="3" css={{ justifyContent: 'center' }}>
            <LinkText>Read our latest blog</LinkText>
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
  px: '$9',
  defaultVariants: {
    size: '5',
    color: 'primary5',
    weight: 'medium',
  },
})

const LinkText = styled('p', {
  ...textStyles,

  defaultVariants: {
    size: '5',
    color: 'primary1',
    weight: 'medium',
  },
})

const Bowl = styled(View, {
  position: 'absolute',
  right: '-6%',
  top: '50%',
  transform: 'translateY(-40%)',
  width: '12vw',
})
const Brocoli = styled(View, {
  position: 'absolute',
  left: '-3%',
  top: '60%',
  transform: 'translateY(-40%)',
  width: '12vw',
})
const Lemon = styled(View, {
  position: 'absolute',
  top: '-15%',
  left: '30%',
  transform: 'translateY(40%)',
  width: '15vw',
})
