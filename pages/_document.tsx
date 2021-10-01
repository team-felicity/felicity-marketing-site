import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '@config/stitches'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
          <div
            id="fb-customer-chat"
            // @ts-expect-error facebook's instructions
            page_id={process.env.NEXT_PUBLIC_MESSENGER_PAGE_ID}
            className="fb-customerchat"
          ></div>
        </body>
      </Html>
    )
  }
}
