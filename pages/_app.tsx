import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'

import { globalStyles } from '@config/stitches'

import Layout from '@components/Layout'
import { domAnimation, LazyMotion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles() // compiles stitches global styles

  return (
    <IdProvider>
      <LazyMotion features={domAnimation}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </IdProvider>
  )
}
export default MyApp
