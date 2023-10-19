import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { styled } from '@config/stitches'
import { useCallback, useEffect, useState } from 'react'
import Youtube from 'react-youtube'

import ContactUs from '@components/ContactUs'
import View from '@components/View'
import Container from '@components/Container'
import Text, { textStyles } from '@components/Text'
import Grid from '@components/Grid'

import Production from '@assets/AboutUs/Production.jpeg'
import Delivery from '@assets/AboutUs/Delivery.jpeg'
import Sales from '@assets/AboutUs/Sales.jpeg'
import Flex from '@components/Flex'

import Image01 from '@assets/AboutUs/Felicity01.jpeg'
import Image02 from '@assets/AboutUs/Felicity02.jpeg'
import Image03 from '@assets/AboutUs/Felicity03.jpeg'
import Image04 from '@assets/AboutUs/Felicity04.jpeg'
import Image05 from '@assets/AboutUs/Felicity05.jpeg'
import Image06 from '@assets/AboutUs/Felicity06.jpeg'
import Image07 from '@assets/AboutUs/Felicity07.jpeg'
import Image08 from '@assets/AboutUs/Felicity08.jpeg'
import Image09 from '@assets/AboutUs/Felicity09.jpeg'
import Image10 from '@assets/AboutUs/Felicity10.jpeg'

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
    <Flex direction="column" align="center">
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
        <Balancer>
          Felicity is a company that aims to spread happiness to the lives of
          the Filipino people through a grocery shopping app that offers
          affordable products and good services, making food easily accessible
          to everyone. Apart from making a primary need effortlessly available,
          Felicity also wants to make sure that Filipinos also get to fulfill
          their wants. By subscribing, customers can enjoy various perks such as
          discounts, vouchers, and commission from member purchases. With this
          platform, Felicity hopes to achieve its dream of a society where
          people lead a life of fewer worries.
        </Balancer>
      </Text>
    </Flex>
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
  height: '100%',
  width: '100%',

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

  [`& ${HeroImageWrapper} img`]: {
    aspectRatio: '16/9',
    objectFit: 'cover',
  },

  '@tablet': {
    flexDirection: 'row',

    [`& ${HeroImageWrapper} img`]: {
      aspectRatio: 'initial',
      objectFit: 'initial',
    },
  },
})

function WhereItAllBegins() {
  const carouselImages = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
  ]

  const getTranslateXValue = (carouselIdx: number) =>
    -(100 / carouselImages.length) * (carouselIdx - 1)

  const MS_DURATION_FOR_EACH_PICTURE = 3000

  const [carouselIndex, setCarouselIndex] = useState(1)

  const handleNextImage = useCallback(() => {
    if (carouselIndex + 1 > carouselImages.length) setCarouselIndex(1)
    else setCarouselIndex((prev) => prev + 1)
  }, [carouselIndex, carouselImages.length])

  useEffect(() => {
    const id = setInterval(() => {
      handleNextImage()
    }, MS_DURATION_FOR_EACH_PICTURE) //
    return () => clearInterval(id)
  }, [handleNextImage])

  return (
    <Grid columns={{ '@initial': 1, '@tablet': 2 }} gapX="8" gapY="6">
      <View css={{ width: '100%', overflow: 'hidden', borderRadius: '$10' }}>
        <ImageWrapper
          css={{
            height: 400,
            overflow: 'clip',
            width: `${100 * carouselImages.length}%`,
          }}
        >
          <Flex
            css={{
              width: `${100 * carouselImages.length}%`,
              margin: 0,
              padding: '1px 0',
              transform: `translateX(${getTranslateXValue(carouselIndex)}%)`,
              transition: 'all 300ms ease',
            }}
          >
            {carouselImages.map((item, index) => (
              <Image
                priority
                key={index}
                src={item}
                width={700}
                height={400}
                objectFit="cover"
                alt="Image of a mango"
                placeholder="blur"
              />
            ))}
          </Flex>
        </ImageWrapper>
      </View>
      <Flex direction="column" gap="3">
        <Title as="h2">Where It All Begins</Title>
        {/* <Text as="p" color="primary5"> */}
        {/*   The Felicity Facility is where we start with our mission on making */}
        {/*   people happy. From planning systems to delivering items to each */}
        {/*   household, we make sure that everything we do will bring happiness and */}
        {/*   fewer worries to our customers. */}
        {/* </Text> */}
        <Text as="p" color="primary5">
          <Balancer>
            The Felicity Facility is where we start with our mission on making
            people happy. From planning systems to delivering items to each
            household, we make sure that everything we do will bring happiness
            and fewer worries to our customers.
          </Balancer>
        </Text>
      </Flex>
    </Grid>
  )
}

function TheDreamers() {
  return (
    <Flex direction="column" gap="5" align="center">
      <Title as="h2" css={{ textAlign: 'center' }}>
        The Dreamers
      </Title>
      <View
        css={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Youtube videoId={'K17wR57hKdk'} />
      </View>
      {/* <Image
          src={Banner2}
          alt="vector"
          placeholder="blur"
          objectFit="cover"
        /> */}

      <Text as="p" color="primary5" css={{ textAlign: 'center' }}>
        <Balancer>
          In a world wherein happiness comes with a price, it is not surprising
          how so many people find this hard to achieve. From basic necessities
          to even reaching our dreams, we all now give a second thought before
          deciding to get them, thanks to their hefty price tags! But is this
          the kind of life we all want to live until the end? Well, definitely
          not for Felicity! Because here, we believe that every Filipino should
          gain access not just to fresh and quality products along with good
          service at such an affordable price, but also to a platform that would
          give every Filipino a chance to improve their life and finances
          through passive income. Here in Felicity, we want to build a community
          where people can be happier and live a quality life. We want to see a
          city where people can smile genuinely with fewer worries. Imagine a
          whole community of winners! A happy city - this is what we dream of
          here in Felicity.
        </Balancer>
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
