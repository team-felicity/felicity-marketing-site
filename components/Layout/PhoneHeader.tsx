import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import * as Dialog from '@radix-ui/react-dialog'

import { TABLET_SIZE } from '@utils'
import { keyframes, styled, theme } from '@config/stitches'

import Flex from '@components/Flex'
import Link from '@components/Link'

import Facebook from 'public/facebook.svg'
import Instagram from 'public/instagram.svg'
import Twitter from 'public/twitter.svg'
import Youtube from 'public/youtube.svg'

import { LogoWithCompanyName, NavLink, NavLinkText } from './HeaderComponents'

const isHomeUrl = (val: string) => val === '/'

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/about',
    title: 'About Us',
  },
  // {
  //   href: '/blog',
  //   title: 'Our Blog',
  // },
  {
    href: '/faq',
    title: 'FAQs',
  },
  {
    href: '/shop',
    title: 'Shop',
  },
]

const socialMediaLinks = [
  {
    href: 'https://facebook.com',
    SVG: Facebook,
    alt: 'Facebook',
  },
  {
    href: 'https://twitter.com',
    SVG: Twitter,
    alt: 'Twitter',
  },
  {
    href: 'https://instagram.com',
    SVG: Instagram,
    alt: 'Instagram',
  },
  {
    href: 'https://youtube.com',
    SVG: Youtube,
    alt: 'Youtube',
  },
]

export default function PhoneHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useRouter()

  const closeDialog = () => setOpen(false)
  const openDialog = () => setOpen(true)

  useEffect(() => {
    if (typeof window === 'object' && window.innerWidth < TABLET_SIZE) {
      closeDialog()
    }
  }, [pathname])

  return (
    <Dialog.Root open={open}>
      <StyledOverlay />
      <StyledContent>
        <Flex justify="between" onClick={closeDialog}>
          <LogoWithCompanyName />
          <StyledClose onClick={closeDialog}>
            <XIcon color={theme.colors.gray3.value} width="24px" />
          </StyledClose>
        </Flex>

        <Flex
          as="nav"
          direction="column"
          align="center"
          justify="center"
          gap="4"
          css={{ height: '100%' }}
        >
          {navLinks.map(({ href, title }) => (
            <NavLink
              href={href}
              key={title}
              active={
                isHomeUrl(pathname)
                  ? isHomeUrl(href)
                  : pathname.startsWith(href) && !isHomeUrl(href)
              }
            >
              <NavLinkText size="6">{title}</NavLinkText>
            </NavLink>
          ))}
        </Flex>

        <Flex gap="2" justify="center">
          {socialMediaLinks.map((item) => (
            <Link
              href={item.href}
              rel="noreferrer noopener"
              target="_blank"
              key={item.href}
            >
              <Image src={item.SVG} alt={item.alt} />
            </Link>
          ))}
        </Flex>
      </StyledContent>

      <StyledTrigger onClick={openDialog}>
        <MenuIcon color={theme.colors.primary1.value} width="24px" />
      </StyledTrigger>
    </Dialog.Root>
  )
}

const StyledContent = styled(Dialog.Content, {
  position: 'fixed',
  inset: 0,

  width: '100vw',
  height: '100%',
  display: 'grid',
  gridAutoFlow: 'row',
  gridTemplateRows: 'auto 1fr auto',

  padding: '$4 $5',
})

const cleanedUpButtonStyles = {
  background: 'none',
  border: 'none',
  outline: 'none',
}

const StyledTrigger = styled(Dialog.Trigger, {
  ...cleanedUpButtonStyles,

  '@tablet': {
    display: 'none',
  },
})

const StyledClose = styled(Dialog.Close, cleanedUpButtonStyles)

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
})

// const fadeOut = keyframes({
//   from: { opacity: '1' },
//   to: { opacity: '0' },
// })

const StyledOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$white1',
  position: 'fixed',
  inset: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 650ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  // gi comment out lng sa nako kay mo flash ang logo ig close
  // TODO: add ug entrance ug exit animations sa logo nlng kay
  // di kaayo impressive nga mabilin ang logo bisag nanay dialog
  // kay same rag background ang header ug ang main nga content

  // '&[data-state="closed"]': {
  //   animation: `${fadeOut} 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
  // },
})
