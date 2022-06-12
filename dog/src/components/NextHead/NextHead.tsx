import { FC, ReactElement } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const NextHead: FC<Props> = ({ title }): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  )
}

export default NextHead
