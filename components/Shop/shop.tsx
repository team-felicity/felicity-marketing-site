import { styled } from '@config/stitches'
import Image from 'next/image'
import {
  Container,
  Grid,
  View,
  Flex,
  Button,
  Link,
  TextField,
} from '@components'
import { textStyles } from '@components/Text'
import Facebook from 'public/shopfacebook.svg'
import Instagram from 'public/shopinstagram.svg'
import Twitter from 'public/shoptwitter.svg'
import Youtube from 'public/shopyoutube.svg'
import Email from 'public/shopemail.svg'
import React from 'react'
import Logo from 'public/shoplogo.svg'
import Appstore from 'public/appstore.png'
import Playstore from 'public/googleplay.png'
import Waves from 'public/shopwave.svg'

export default function Shop() {
  return (
    <View as="section" css={{ flexGrow: 1, backgroundColor: '$white1' }}>
      <Container
        size="large2"
        css={{
          gridTemplateAreas: ' "carousel" "content"',
          padding: 0,
          minHeight: '90vh',
          '@desktop': {
            minHeight: '77vh',
            gridTemplateColumns: '780px 1fr',
            gridTemplateAreas: '"carousel content content"',
          },
        }}
        as={Grid}
      >
        <ImageContainer>
          <Image src={Logo} alt="logo" objectFit="contain" />
        </ImageContainer>
        <ShopContent />
      </Container>
      <Wave />
    </View>
  )
}

function ShopContent() {
  return (
    <Flex
      direction="column"
      gapY="3"
      css={{
        gridArea: 'content',
        px: '$5',
        pt: '$4',
        '@desktop': { pt: '$8' },
      }}
    >
      <HeaderText
        size={{
          '@initial': '6',
          '@tablet': '8',
          '@desktop': '9',
        }}
      >
        Coming Soon
      </HeaderText>
      <SloganText
        size={{
          '@initial': '7',
          '@tablet': '11',
          '@desktop': '12',
        }}
      >
        Get Notified when we launch!
      </SloganText>

      <FlexRow justify={{ '@desktop': 'start', '@phone': 'center' }}>
        <View>
          <TextField variant="outline" />
        </View>
        <Button
          size="large"
          variant="primary"
          // disabled
        >
          Get Started
        </Button>
      </FlexRow>
      <Subtitle
        size={{
          '@initial': '2',
          '@tablet': '4',
          '@desktop': '5',
        }}
      >
        *For the meantime, use our application!
      </Subtitle>
      <FlexRow gap="3" justify={{ '@desktop': 'start', '@phone': 'center' }}>
        <Link href="http://facebok.com" target="_blank">
          <Image src={Appstore} alt="appstore" />
        </Link>
        <Link href="http://facebok.com" target="_blank">
          <Image src={Playstore} alt="playstore" />
        </Link>
      </FlexRow>

      <FlexCol align="center">
        <FlexRow justify="center" gap="4">
          <Link href="http://www.facebook.com" target="_blank">
            <Image src={Facebook} alt="fb" />
          </Link>
          <Link href="http://www.twitter.com" target="_blank">
            <Image src={Twitter} alt="twttr" />
          </Link>
          <Link href="http://www.instagram.com" target="_blank">
            <Image src={Instagram} alt="insta" />
          </Link>
          <Link href="http://www.youtube.com" target="_blank">
            <Image src={Youtube} alt="youtube" />
          </Link>
          <Link href="http://www.gmail.com" target="_blank">
            <Image src={Email} alt="email" />
          </Link>
        </FlexRow>
      </FlexCol>
    </Flex>
  )
}

function Wave() {
  return (
    <View
      css={{
        overflow: 'hidden',
      }}
    >
      <Grid
        css={{
          width: '100vw',
          height: '100%',
        }}
      >
        <Image src={Waves} alt="wave" />
      </Grid>
    </View>
  )
}

const HeaderText = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  '@desktop': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary1',
    weight: 'semibold',
  },
})

const SloganText = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  '@desktop': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const Subtitle = styled('p', {
  ...textStyles,

  opacity: 0.85,
  textAlign: 'center',
  '@desktop': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary5',
  },
})

const FlexRow = styled(Flex, {
  py: '$1',
  flexDirection: 'row',
})

const FlexCol = styled(Flex, {
  flexDirection: 'column',
  '@desktop': {
    paddingRight: '20%',
  },
})

const ImageContainer = styled(Container, {
  pt: '$5',
  width: '50vw',
  justifyContent: 'center',
  '@desktop': {
    pt: '0',
    position: 'absolute',
    left: '-8%',
    top: '20%',
  },
})
