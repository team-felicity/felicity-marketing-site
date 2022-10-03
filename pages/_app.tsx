import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { LazyMotion } from 'framer-motion'

import { globalStyles } from '@config/stitches'

import Layout from '@components/Layout'
import Script from 'next/script'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const loadFeatures = () =>
  import('../utils/animationFeatures').then((res) => res.default)

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  globalStyles() // compiles stitches global styles

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <LazyMotion features={loadFeatures}>
        {getLayout(<Component {...pageProps} />)}
      </LazyMotion>
      {process.env.NODE_ENV === 'production' ? (
        <Script
          type="text/javascript"
          id="hs-script-loader"
          src="//js-na1.hs-scripts.com/20815345.js"
          strategy="lazyOnload"
        />
      ) : null}
    </>
  )
}
export default MyApp
