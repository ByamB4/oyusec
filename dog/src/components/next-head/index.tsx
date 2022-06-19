import Head from 'next/head'
import { APP, TITLE } from 'configs/app'

interface Props {
  url?: string
  title?: string
  image?: string
  imageAlt?: string
  description?: string
}

const NextHead: React.FC<Props> = ({ url, title, description, image, imageAlt }): React.ReactElement => {
  // Yes
  return (
    <>
      <Head>
        <title>{`${title} | ${APP.name}`}</title>
        <meta name="description" content={description || APP.description.en} />
        <meta property="og:url" content={url || 'https://oyusec.vercel.app'} />
        <meta property="og:title" content={title || TITLE.DEFAULT} key="title" />
        <meta property="og:image" content={image || 'https://nft.octagon.mn/assets/new/cover.jpeg'} />
        <meta property="og:image:alt" content={imageAlt || APP.description.en} />
        <meta property="og:image:secure_url" content={image || 'https://nft.octagon.mn/assets/new/cover.jpeg'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpg" />
        <meta name="twitter:title" content={title || TITLE.DEFAULT} />
        <meta name="twitter:description" content={description || APP.description.mn} />
        <meta name="twitter:site" content="@propernounco" />
        <meta name="twitter:creator" content="@propernounco" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  )
}

export default NextHead
