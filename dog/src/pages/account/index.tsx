import { ReactElement } from 'react'
import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { DesktopUserCover } from 'ui/User'
import { useAuth } from 'contexts/auth'
import { TITLE } from 'configs/app'
import { SecurePage } from 'ui/navigation'

const UserProfilePage: NextPage<unknown> = (): ReactElement => {
  const { user } = useAuth()

  return (
    <MainLayout NO_PADDING title={user?.username || TITLE.account.profile}>
      <SecurePage>
        <DesktopUserCover />
      </SecurePage>
    </MainLayout>
  )
}

export default UserProfilePage
