import { useRouter } from 'next/router'

import { styled } from '@config/stitches'

import Container from '@components/Container'
import Flex from '@components/Flex'
import View from '@components/View'
import Link from '@components/Link'
import { LogoWithCompanyName, NavLink, NavLinkText } from './HeaderComponents'
import PhoneHeader from './PhoneHeader'

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
    href: '/faq',
    title: 'FAQs',
  },
  {
    href: '/shop',
    title: 'Shop',
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
        <Flex
          as="nav"
          gapX="7"
          css={{ display: 'none', '@tablet': { display: 'flex' } }}
        >
          {navLinks.map(({ href, title }) => (
            <NavLink
              rel="noreferrer noopener"
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
        <PhoneHeader />
      </HeaderContainer>
    </HeaderWrapper>
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
