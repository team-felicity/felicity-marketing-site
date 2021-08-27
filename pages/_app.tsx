import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'

import { globalStyles } from '@config/stitches'

import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles() // compiles stitches global styles

  return (
    <IdProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IdProvider>
  )
}
export default MyApp
