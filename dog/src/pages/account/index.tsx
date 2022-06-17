import { ReactElement, useEffect } from 'react'
import { MainLayout } from 'layouts'
import { NextPage } from 'next'
import { UserProfile } from 'ui/account'
import { useAuth } from 'contexts/auth'
import router from 'next/router'

const UserProfilePage: NextPage<unknown> = (): ReactElement => {
  const { user, ready } = useAuth()

  useEffect(() => {
    if (ready && !user) {
      router.push('/')
    }
  }, [user, ready])

  return (
    <MainLayout NO_PADDING title={user?.username}>
      {ready && user && <UserProfile user={user} isProfile />}
    </MainLayout>
  )
}

export default UserProfilePage
