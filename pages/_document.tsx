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

          <script
            id="messenger-chat"
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
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root" />
          <div id="fb-customer-chat" className="fb-customerchat" />
        </body>
      </Html>
    )
  }
}
