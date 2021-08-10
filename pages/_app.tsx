import type { AppProps } from 'next/app'

import { globalStyles } from '@config/stitches'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles() // compiles stitches global styles

  return <Component {...pageProps} />
}
export default MyApp
