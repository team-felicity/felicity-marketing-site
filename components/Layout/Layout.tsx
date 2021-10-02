import Head from 'next/head'

import type { ReactNode } from 'react'

import { Flex } from '@components'
import Header from './Header'
import View from '@components/View'
import Footer from './Footer'
import type { CSS } from '@config/stitches'

interface Props {
  children: ReactNode
  hideFooter?: boolean
  css?: CSS
  mainContentcss?: CSS
}

export default function Layout({
  children,
  hideFooter = false,
  css = {},
  mainContentcss = {},
}: Props) {
  return (
    <>
      <Head>
        <title>Felicity | Fresh and Healthy</title>
        <meta name="description" content="Discover Fresh and Healthy Food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" css={css}>
        <Header />
        <View
          as="main"
          css={{ flexGrow: 1, backgroundColor: '$white1', ...mainContentcss }}
        >
          {children}
        </View>
        {hideFooter ? null : <Footer />}
      </Flex>
    </>
  )
}
