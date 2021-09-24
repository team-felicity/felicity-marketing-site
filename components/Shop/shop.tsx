import { styled } from '@config/stitches'
import Image from 'next/image'
import { Container, Grid, View, Flex, Button, Link } from '@components'
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
import { BaseInput, sharedStyles } from '@components/TextField'
import { ArrowRightIcon } from '@heroicons/react/solid'
import { SyntheticEvent, useState } from 'react'
import { subscribeToBlog } from 'utils/api'
import { useRouter } from 'next/router'

const socialMediaLinks = [
  {
    href: 'https://facebook.com',
    image: Facebook,
    alt: 'Facebook logo icon',
  },
  {
    href: 'https://twitter.com',
    image: Twitter,
    alt: 'Twitter logo icon',
  },
  {
    href: 'https://instagram.com',
    image: Instagram,
    alt: 'Instagram logo icon',
  },
  {
    href: 'https://youtube.com',
    image: Youtube,
    alt: 'Youtube logo icon',
  },
  {
    href: 'https://gmail.com',
    image: Email,
    alt: 'Email logo icon',
  },
]

export default function Shop() {
  return (
    <View
      as="section"
      css={{
        backgroundColor: '$white1',
      }}
    >
      <Container
        size="large2"
        css={{
          gridTemplateRows: 'auto 1fr',
          gridTemplateAreas: ' "carousel" "content"',
          padding: 0,
          height: '82vh',
          '@tablet': {
            height: '78vh',
            gridTemplateColumns: '50vw 1fr',
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
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await subscribeToBlog(email)
    setEmail('')
    router.push('/thank-you')
  }
  return (
    <Flex
      direction="column"
      css={{
        gridArea: 'content',
        px: '$5',
        pt: '$4',
        '@desktop': { pt: '10vh' },
      }}
      gap="3"
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
          '@tablet': '9',
          '@desktop': '12',
        }}
      >
        Get Notified when we launch!
      </SloganText>
      <Flex
        as="form"
        direction="column"
        align={{ '@initial': 'center', '@tablet': 'start' }}
        onSubmit={handleSubmit}
      >
        <InputWrapper as={Flex} align="center">
          <BaseInput
            required
            type="email"
            variant="unstyled"
            placeholder="@E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button variant="primary" fitContent>
            <ButtonText>Notify</ButtonText>
            <ButtonText>Me</ButtonText>
            <ArrowRightIcon width={16} fill="white" />
          </Button>
        </InputWrapper>
      </Flex>

      <Subtitle
        size={{
          '@initial': '2',
          '@tablet': '3',
          '@desktop': '5',
        }}
      >
        *For the meantime, use our application!
      </Subtitle>
      <FlexRow gap="3" justify={{ '@initial': 'center', '@tablet': 'start' }}>
        <Link href="http://facebok.com" target="_blank">
          <Download>
            <Image src={Appstore} alt="appstore" />
          </Download>
        </Link>
        <Link href="http://facebok.com" target="_blank">
          <Download>
            <Image src={Playstore} alt="playstore" />
          </Download>
        </Link>
      </FlexRow>

      <FlexCol align="center">
        <FlexRow justify="center" gap="3">
          {socialMediaLinks.map((item) => (
            <Link href={item.href} target="_blank" key={item.href}>
              <Socials>
                <Image src={item.image} alt={item.alt} />
              </Socials>
            </Link>
          ))}
        </FlexRow>
      </FlexCol>
    </Flex>
  )
}

function Wave() {
  return (
    <View
      css={{
        position: 'fixed',
        overflow: 'hidden',
        bottom: '-1vw',
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
  '@tablet': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary1',
    weight: 'semibold',
  },
})

const ButtonText = styled('p', {
  ...textStyles,
  mr: '$1',
  defaultVariants: {
    size: '4',
    color: 'white1',
    weight: 'semibold',
  },
})

const SloganText = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  '@tablet': { textAlign: 'start' },
  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const Subtitle = styled('p', {
  ...textStyles,

  opacity: 0.85,
  textAlign: 'center',
  '@tablet': { textAlign: 'start' },
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
  width: '40vw',
  justifyContent: 'center',
  '@tablet': {
    width: '50vw',
    pt: '0',
    position: 'absolute',
    left: '-8%',
    top: '25%',
  },
})

const Download = styled(View, {
  width: '20vh',
  '@tablet': {
    width: '15vw',
  },
})

const Socials = styled(View, {
  width: '5vh',
  '@tablet': {
    width: '3vw',
  },
})

const InputWrapper = styled('div', sharedStyles, {
  px: '2px',
  width: 'fit-content',
})
