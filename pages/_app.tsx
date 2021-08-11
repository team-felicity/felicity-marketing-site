import type { AppProps } from 'next/app'
import { IdProvider } from '@radix-ui/react-id'

import { globalStyles } from '@config/stitches'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles() // compiles stitches global styles

  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  )
}
export default MyApp
