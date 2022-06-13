import { FC, CSSProperties, ReactNode } from 'react'
import { NextHead } from 'components'
import { TITLE } from 'configs/app'
import AppView from './AppView'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppSidebar from './AppSidebar'

interface Props {
  className?: string
  title?: string
  description?: string
  image?: string
  style?: CSSProperties
  children: ReactNode
  NO_PADDING?: boolean
}

const MainLayout: FC<Props> = ({
  children,
  className = '',
  title = TITLE.DEFAULT,
  description,
  image,
  style,
  NO_PADDING = false,
}) => {
  return (
    <>
      <NextHead title={title} description={description} image={image} />
      <div className="flex bg-primary-dark h-full w-full fixed">
        <AppSidebar />
        <main className="flex flex-col justify-between w-full h-full">
          <AppHeader className="bg-primary-dark text-white" />
          <AppView
            className={`bg-primary-light h-full text-white rounded-l-3xl ${NO_PADDING ? '' : 'p-4'} ${className}`}
            style={style}
          >
            {children}
          </AppView>
          <AppFooter />
        </main>
      </div>
    </>
  )
}

export default MainLayout
