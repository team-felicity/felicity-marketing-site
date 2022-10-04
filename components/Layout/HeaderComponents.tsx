import Image from 'next/image'

import { styled } from '@config/stitches'

import Flex from '@components/Flex'
import Link from '@components/Link'
import Text, { textStyles } from '@components/Text'

import Logo from '@assets/logo/header-logo.png'

export const CompanyName = styled(Text, {
  ...textStyles,
  textTransform: 'uppercase',

  defaultVariants: {
    weight: 'bold',
    color: 'primary4',
    size: '5',
  },
})

export function LogoWithCompanyName({ onClick }: { onClick?: () => void }) {
  return (
    <Flex gapX="1" onClick={onClick}>
      <div style={{ width: 50 }}>
        <Image src={Logo} alt="Felicity Logo" layout="responsive" />
      </div>
      <CompanyName>Felicity</CompanyName>
    </Flex>
  )
}

export const NavLink = styled(Link, {
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

export const NavLinkText = styled(Text, {
  ...textStyles,

  defaultVariants: {
    weight: 'medium',
    color: 'inherit',
    size: '2',
  },
})
