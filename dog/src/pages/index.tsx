import { ReactElement } from 'react'
import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { LandingHero } from 'ui/landing'
import { MAX_SCREEN_MX } from 'constants/layout'
import { TITLE } from 'configs/app'

const LandingPage: NextPage<unknown> = (): ReactElement => {
  return (
    <MainLayout NO_PADDING className="bg-contain bg-no-repeat xl:bg-index-pattern" title={TITLE.homepage.index}>
      <LandingHero className={`${MAX_SCREEN_MX}`} />
    </MainLayout>
  )
}

export default LandingPage
