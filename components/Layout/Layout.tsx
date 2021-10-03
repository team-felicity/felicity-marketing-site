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
  meta = {},
}: Props) {
  const router = useRouter()

  const finalMetaData = {
    title: meta.title || 'Felicity | Fresh and Healthy',
    description: meta.description || 'Discover Fresh and Healthy Food',
    imageUrl: meta.imageUrl || 'https://felicity.com.ph/social.png',
    url: meta.url || `https://felicity.com.ph${router.pathname}`,
    type: meta.type || 'website',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={finalMetaData.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width" />

        <meta property="og:url" content={finalMetaData.url} />
        <meta property="og:title" content={finalMetaData.title} />
        <meta property="og:description" content={finalMetaData.description} />
        <meta property="og:image" content={finalMetaData.imageUrl} />
        <meta property="og:type" content={finalMetaData.type} />

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
