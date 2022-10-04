import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ClipboardIcon, ClipboardCheckIcon } from '@heroicons/react/outline'

import type { ReactNode } from 'react'

import { styled } from '@config/stitches'

import Container from '@components/Container'
import Flex from '@components/Flex'
import View from '@components/View'
import Link from '@components/Link'
import Text, { textStyles } from '@components/Text'
import Button from '@components/Button'
import Logo from '@assets/logo/header-logo.png'

import Facebook from 'public/facebook.svg'
import Instagram from 'public/instagram.svg'
import Twitter from 'public/twitter.svg'
import Youtube from 'public/youtube.svg'

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
]

export default function Footer() {
  return (
    <View
      as="footer"
      css={{
        backgroundColor: '$gray5',
        paddingTop: '$6',
        paddingBottom: '$6',
      }}
    >
      <Container
        as={Flex}
        direction={{ '@initial': 'column', '@tablet': 'row' }}
        size="large2"
        gap="3"
        justify="between"
        align="center"
      >
        <Flex justify="center" align="center">
          <div style={{ width: 50 }}>
            <Image src={Logo} alt="Felicity Logo" layout="responsive" />
          </div>
          <CompanyName>FELICITY</CompanyName>
        </Flex>

        <FooterColumn>
          <FooterColumnTitle>Reach out to us!</FooterColumnTitle>
          <ContactInfo label="+63 927 304 3415" />
          <ContactInfo label="felicityincorporated@gmail.com" />
        </FooterColumn>

        <FooterColumn>
          <FooterColumnTitle>Follow us on:</FooterColumnTitle>
          <Flex justify="center">
            {socialMediaLinks.map((item) => (
              <Link
                href={item.href}
                rel="noreferrer noopener"
                target="_blank"
                key={item.href}
              >
                <Image src={item.image} alt={item.alt} />
              </Link>
            ))}
          </Flex>
        </FooterColumn>
      </Container>
    </View>
  )
}

function FooterColumn({ children }: { children: ReactNode }) {
  return (
    <Flex
      direction="column"
      align={{ '@initial': 'center', '@tablet': 'start' }}
    >
      {children}
    </Flex>
  )
}

function ContactInfo({ label }: { label: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      if (copied) setCopied(false)
    }, 2000)

    return () => clearTimeout(id)
  }, [copied])

  const handleClipboardClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(label)
  }

  return (
    <Flex
      justify={{ '@initial': 'center', '@tablet': 'start' }}
      css={{ alignSelf: 'stretch', '&:hover button': { opacity: 1 } }}
    >
      <Text css={{ position: 'relative' }}>
        {label}
        <Button
          variant="ghost"
          css={{
            padding: '2px',
            height: 'unset',

            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '-2rem',

            opacity: 0,
          }}
          onClick={handleClipboardClick}
          aria-label="Copy to Clipboard"
        >
          {copied ? (
            <ClipboardCheckIcon height="20px" width="20px" />
          ) : (
            <ClipboardIcon height="20px" width="20px" />
          )}
        </Button>
      </Text>
    </Flex>
  )
}

const FooterColumnTitle = styled(Text, {
  ...textStyles,

  textAlign: 'center',
  mb: '$1',

  '@dekstop': {
    textAlign: 'start',
  },

  defaultVariants: {
    weight: 'semibold',
  },
})

const CompanyName = styled('h1', {
  ...textStyles,

  defaultVariants: {
    color: 'primary5',
    size: '8',
    weight: 'bold',
  },
})
