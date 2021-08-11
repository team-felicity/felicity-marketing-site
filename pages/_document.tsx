import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { getCssString } from '@config/stitches'

export default class Document extends NextDocument {
  return() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
