import { FC, ReactElement } from 'react'
import Head from 'next/head'
import { APP, TITLE } from 'configs/app'

interface Props {
  url?: string
  title?: string
  image?: string
  imageAlt?: string
}

const NextHead: FC<Props> = ({ url, title, image, imageAlt }): ReactElement => {
  return (
    <>
      <Head>
        <title>{title || TITLE.DEFAULT}</title>
        <meta property="og:image" content={image || 'https://nft.octagon.mn/assets/new/cover.jpeg'} />
        <meta property="og:image:alt" content={imageAlt || APP.description.en} />
        <meta property="og:url" content={url || 'https://oyusec.vercel.app'} />
      </Head>
    </>
  )
}

export default NextHead
