import { APP } from 'configs/app'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class _ extends Document<unknown> {
  render(): JSX.Element {
    return (
      <Html lang="mn">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta name="description" content={APP.description.en} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@OyuSec" />
          <meta name="twitter:creator" content={`@${APP.author}`} />
          <meta name="fb:page_id" content="" />
          <meta property="og:locale" content="mn_MN" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={APP.name} />
          <meta name="category" content={APP.category} />
          <meta name="subject" content={APP.subject.en} />
          <meta name="author" content={APP.author} />
          <meta name="creator" content={APP.creator} />
          <meta name="publisher" content={APP.publisher} />
          <meta name="keywords" content={APP.keywords} />
          <meta name="applicable-device" content="pc" />
          {/* <meta name="google-site-verification" content="" /> */}
          {/* <meta name="msapplication-TileColor" content="#ffffff" /> */}
          {/* <meta name="theme-color" content="#ffffff" /> */}
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta charSet="UTF-8" />
          <meta name="geo.placename" content="Ulaanbaatar" />
          <meta name="geo.region" content="MN" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _
