import Head from 'next/head'
import { useRouter } from 'next/router'

import type { ReactNode } from 'react'
import type { CSS } from '@config/stitches'

import { Flex, View } from '@components'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode
  hideFooter?: boolean
  css?: CSS
  mainContentcss?: CSS
  meta?: {
    title?: string
    description?: string
    url?: string
    imageUrl?: string
    type?: string
  }
}

export default function Layout({
  children,
  hideFooter = false,
  css = {},
  mainContentcss = {},
  meta = {
    title: 'Felicity | Fresh and Healthy',
    description: 'Discover Fresh and Healthy Food',
    imageUrl: 'https://felicity.com.ph/social.png',
  },
}: Props) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width" />

        <meta
          property="og:url"
          content={meta.url || `https://felicity.com.ph${router.pathname}`}
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta property="og:type" content="website" />

        {/* TODO: change twitter handle when twitter account gets created */}
        {/* <meta name="twitter:site" content="@felicityph" /> */}
        <meta name="twitter:card" content="summary_large_image" />
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
