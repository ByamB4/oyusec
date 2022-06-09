import React, { CSSProperties } from 'react'
import Head from 'next/head'
import { TITLE } from 'configs/app'
import AppView from './AppView'
import AppNavbar from './AppNavbar'
import AppFooter from './AppFooter'
import AppSidebar from './AppSidebar'

interface Props {
  className?: string
  title?: string
  style?: CSSProperties
  children: React.ReactNode
  NO_PADDING?: boolean
}

const MainLayout: React.FC<Props> = ({
  children,
  className = '',
  title = TITLE.DEFAULT,
  style,
  NO_PADDING = false,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex bg-primary-dark h-full w-full fixed">
        <AppSidebar />
        <main className="flex flex-col justify-between w-full h-full">
          <AppNavbar className="bg-primary-dark text-white" />
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
