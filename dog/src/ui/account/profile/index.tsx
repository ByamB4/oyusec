/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, FC } from 'react'
// import { Avatar } from 'components'
// import { meltSocialLinks } from 'utils/melter'
// import { handleIcon } from 'utils'
import { IUser } from 'services/types'
import Header from './header'

interface Props {
  className?: string
  user: IUser
  isProfile?: boolean
}

const UserProfile: FC<Props> = ({ className = '', user, isProfile = false }): ReactElement => {
  return (
    <section className={`${className}`}>
      <Header user={user} isProfile={isProfile} />
      <div className="w-full grid grid-cols-2 gap-52 -mt-20 py-2">
        {/* <div className="flex col-span-1 justify-end gap-8">
          {meltSocialLinks(DEFAULT.user.socialLinks).map((link: { icon: string; value: string }) => (
            <IconButton
              variant="outlined"
              key={link.value}
              icon={handleIcon({ icon: link.icon })}
              onClick={() => window.open(link.value, '_blank')}
              size="small"
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default UserProfile
