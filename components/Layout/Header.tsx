import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import * as Dialog from '@radix-ui/react-dialog'

import { TABLET_SIZE } from '@utils'
import { keyframes, styled, theme } from '@config/stitches'

import { View, Container, Flex, Link, Text } from '@components'
import { textStyles } from '@components/Text'
import { Facebook, Twitter, Youtube, Instagram } from '@components/SVG'
import Logo from './LogoSVG'

const navLinks = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/about',
    title: 'About Us',
  },
  {
    href: '/blog',
    title: 'Our Blog',
  },
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
  },
  {
    href: 'https://twitter.com',
    SVG: Twitter,
  },
  {
    href: 'https://instagram.com',
    SVG: Instagram,
  },
  {
    href: 'https://youtube.com',
    SVG: Youtube,
  },
]

export default function Header() {
  const { pathname } = useRouter()
  return (
    <HeaderWrapper
      as="header"
      css={{
        '@desktop': {
          position: isHomeUrl(pathname) ? 'fixed' : 'sticky',
        },
      }}
    >
      <HeaderContainer as={Flex} justify="between">
        <Link href="/" css={{ WebkitTapHighlightColor: 'transparent' }}>
          <LogoWithCompanyName />
        </Link>
        <Navigation />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

function LogoWithCompanyName({ onClick }: { onClick?: () => void }) {
  return (
    <Flex gapX="1" onClick={onClick}>
      <Logo />
      <CompanyName>Felicity</CompanyName>
    </Flex>
  )
}

function Navigation() {
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
    <>
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
              <Link href={item.href} target="_blank" key={item.href}>
                <item.SVG />
              </Link>
            ))}
          </Flex>
        </StyledContent>

        <StyledTrigger onClick={openDialog}>
          <MenuIcon color={theme.colors.primary1.value} width="24px" />
        </StyledTrigger>
      </Dialog.Root>

      <Flex
        as="nav"
        gapX="7"
        css={{ display: 'none', '@tablet': { display: 'flex' } }}
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
            <NavLinkText>{title}</NavLinkText>
          </NavLink>
        ))}
      </Flex>
    </>
  )
}

const isHomeUrl = (val: string) => val === '/'

const HeaderWrapper = styled(View, {
  boxShadow: '$headerShadow',
  backgroundColor: '$white1',
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$max',

  '@desktop': { position: 'absolute' },
})

const HeaderContainer = styled(Container, {
  py: '$4',
})

const NavLink = styled(Link, {
  WebkitTapHighlightColor: 'transparent',

  variants: {
    active: {
      true: { color: '$primary1' },
      false: { color: '$primary4' },
    },
  },
  defaultVariants: {
    active: 'false',
  },
})

const NavLinkText = styled(Text, {
  ...textStyles,

  defaultVariants: {
    weight: 'medium',
    color: 'inherit',
    size: '2',
  },
})

const CompanyName = styled(Text, {
  ...textStyles,
  textTransform: 'uppercase',

  defaultVariants: {
    weight: 'bold',
    color: 'primary4',
    size: '5',
  },
})

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
