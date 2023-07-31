import Image from 'next/image'

import { styled } from '@config/stitches'

import ContactUs from '@components/ContactUs'
import View from '@components/View'
import Container from '@components/Container'
import Text, { textStyles } from '@components/Text'
import Grid from '@components/Grid'

import Production from '@assets/Production.jpg'
import Delivery from '@assets/Delivery.jpg'
import Sales from '@assets/Sales.jpg'
import Banner2 from '@assets/banner2.jpg'
import Flex from '@components/Flex'

export default function AboutUs() {
  return (
    <View css={{ background: 'linear-gradient(#CBE5C6,#E5FAF1)' }}>
      <Container
        size="large2"
        css={{
          display: 'grid',
          pt: '3.5rem',
          gap: '6rem',
          '@tablet': {
            pt: '5rem',
            gap: '10rem',
          },
        }}
      >
        <Hero />
        <WhereItAllBegins />
        <TheDreamers />
        <ContactUs css={{ pb: '$9' }} />
      </Container>
    </View>
  )
}

function Hero() {
  return (
    <div>
      <Title intent="pageTitle" css={{ mb: '3rem', textAlign: 'center' }}>
        About Us
      </Title>
      <ImagesContainer>
        <HeroImageWrapper>
          <Image src={Production} alt="vector" />
        </HeroImageWrapper>
        <HeroImageWrapper>
          <Image src={Delivery} alt="vector" />
        </HeroImageWrapper>
        <HeroImageWrapper>
          <Image src={Sales} alt="vector" />
        </HeroImageWrapper>
      </ImagesContainer>
      <Text
        as="p"
        size="4"
        color="primary5"
        css={{ mt: '$4', textAlign: 'center' }}
      >
        Felicity is a company that aims to spread happiness to the lives of the
        Filipino people through a grocery shopping app that offers affordable
        products and good services, making food easily accessible to everyone.
        Apart from making a primary need effortlessly available, Felicity also
        wants to make sure that Filipinos also get to fulfill their wants. By
        subscribing, customers can enjoy various perks such as discounts,
        vouchers, and commission from member purchases. With this platform,
        Felicity hopes to achieve its dream of a society where people lead a
        life of fewer worries.
      </Text>
    </div>
  )
}

const ImageWrapper = styled('div', {
  borderRadius: '$10',
  overflow: 'clip',
  display: 'flex',
})

const HeroImageWrapper = styled(ImageWrapper, {
  position: 'sticky',
  top: 'calc((var(--header-height) + 1rem))',
  left: 0,

  '@tablet': {
    position: 'relative',
    top: 0,
  },
})

const ImagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gapx: '$6',
  gapy: '$4',
  position: 'relative',

  '@tablet': {
    flexDirection: 'row',
  },
})

function WhereItAllBegins() {
  return (
    <Grid columns={{ '@initial': 1, '@tablet': 2 }} gapX="8" gapY="6">
      <ImageWrapper css={{ height: 400 }}>
        <Image
          src={Banner2}
          alt="vector"
          placeholder="blur"
          objectFit="cover"
          quality={10}
        />
      </ImageWrapper>
      <Flex direction="column" gap="3">
        <Title as="h2">Where It All Begins</Title>
        <Text as="p" color="primary5">
          The Felicity Facility is where we start with our mission on making
          people happy. From planning systems to delivering items to each
          household, we make sure that everything we do will bring happiness and
          fewer worries to our customers.
        </Text>
        <Text as="p" color="primary5">
          The Felicity Facility is where we start with our mission on making
          people happy. From planning systems to delivering items to each
          household, we make sure that everything we do will bring happiness and
          fewer worries to our customers.
        </Text>
      </Flex>
    </Grid>
  )
}

function TheDreamers() {
  return (
    <Flex direction="column" gap="5">
      <Title as="h2" css={{ textAlign: 'center' }}>
        The Dreamers
      </Title>
      <ImageWrapper css={{ height: 250, width: '100%' }}>
        <Image
          src={Banner2}
          alt="vector"
          placeholder="blur"
          objectFit="cover"
        />
      </ImageWrapper>

      <Text as="p" color="primary5" css={{ textAlign: 'center' }}>
        In a world wherein happiness comes with a price, it is not surprising
        how so many people find this hard to achieve. From basic necessities to
        even reaching our dreams, we all now give a second thought before
        deciding to get them, thanks to their hefty price tags! But is this the
        kind of life we all want to live until the end? Well, definitely not for
        Felicity! Because here, we believe that every Filipino should gain
        access not just to fresh and quality products along with good service at
        such an affordable price, but also to a platform that would give every
        Filipino a chance to improve their life and finances through passive
        income. Here in Felicity, we want to build a community where people can
        be happier and live a quality life. We want to see a city where people
        can smile genuinely with fewer worries. Imagine a whole community of
        winners! A happy city - this is what we dream of here in Felicity.
      </Text>
    </Flex>
  )
}

const Title = styled('h1', {
  ...textStyles,

  variants: {
    ...textStyles.variants,

    intent: {
      sectionTitle: {
        fontSize: '$8',
        '@tablet': { fontSize: '$11' },
      },
      pageTitle: {
        fontSize: '$11',
        '@tablet': { fontSize: '$14' },
      },
    },
  },

  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
    intent: 'sectionTitle',
  },
})
