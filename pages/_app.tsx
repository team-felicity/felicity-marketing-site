import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { IdProvider } from '@radix-ui/react-id'
import { LazyMotion } from 'framer-motion'

import { globalStyles } from '@config/stitches'

import Layout from '@components/Layout'

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
      <IdProvider>
        <LazyMotion features={loadFeatures}>
          {getLayout(<Component {...pageProps} />)}
        </LazyMotion>
      </IdProvider>
    </>
  )
}
export default MyApp
