/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement } from 'react'
import { PathFormatter } from 'utils/pathFormatter'
import { IUser } from 'services/types'
import { UserPicture, Avatar } from 'components'

interface Props {
  className?: string
  user: IUser
  isProfile: boolean
}

const AccountProfileHeader: FC<Props> = ({ className = '', user, isProfile = false }): ReactElement => {
  const { getImagePath } = PathFormatter

  return (
    <div className="flex flex-col items-center">
      <UserPicture className="w-full h-64 rounded-tl-3xl" isOwner src={getImagePath(user.coverURL)} />
      <div className="-mt-20">
        <UserPicture className="border-4 border-primary-dark" isProfile isOwner src={getImagePath(user.imageURL)} />
      </div>
      {/* <Avatar
        src={getImagePath(user.imageURL)}
        className=""
        sx={{
          width: 176,
          height: 176,
        }}
      /> */}
    </div>
  )
}

export default AccountProfileHeader
