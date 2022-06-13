/* eslint-disable @typescript-eslint/require-await */
import { MainLayout } from 'layouts'
import { GetStaticProps } from 'next/types'
import { FC, ReactElement } from 'react'

interface Props {
  title: string
  description: string
  image: string
}

const DyName: FC<Props> = ({ title, description, image }): ReactElement => {
  return (
    <MainLayout title={title} description={description} image={image}>
      <div>hi</div>
    </MainLayout>
  )
}

export const getServerSideProps: GetStaticProps = async (context): Promise<{ props: Props }> => {
  return {
    props: {
      title: (context as any).params.name,
      description: `${(context as any).params.name} description`,
      image: 'https://s3.ap-southeast-1.amazonaws.com/octagon.mn/buha_lunar_2022_47.png',
    },
  }
}

export default DyName
