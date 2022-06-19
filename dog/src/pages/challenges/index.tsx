import { MainLayout } from 'layouts'
import { LiveFeatures } from 'ui/challenges'
import { NextPage } from 'next'
import { TITLE } from 'configs/app'

const ChallengesPage: NextPage = (): React.ReactElement => {
  return (
    <MainLayout className="flex flex-col gap-2" title={TITLE.challenges.index}>
      <LiveFeatures />
      {/* <Challenges /> */}
    </MainLayout>
  )
}

export default ChallengesPage
