import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Script from 'next/script'
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

      <Script
        id="messenger-chat"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "${process.env.NEXT_PUBLIC_MESSENGER_PAGE_ID}");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v12.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `,
        }}
      />
    </>
  )
}
export default MyApp
