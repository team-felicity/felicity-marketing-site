import Head from 'next/head'

import type { ReactNode } from 'react'

import { Flex } from '@components'
import Header from './Header'
import View from '@components/View'
import Footer from './Footer'

interface Props {
  children: ReactNode
  hideFooter?: boolean
}

export default function Layout({ children, hideFooter = false }: Props) {
  return (
    <>
      <Head>
        <title>Felicity | Fresh and Healthy</title>
        <meta name="description" content="Discover Fresh and Healthy Food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" css={{ minHeight: '100vh' }}>
        <Header />
        <View as="main" css={{ flexGrow: 1 }}>
          {children}
        </View>
        {hideFooter ? null : <Footer />}
      </Flex>
    </>
  )
}
