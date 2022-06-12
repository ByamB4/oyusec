import { ReactElement, FC } from 'react'
import { Avatar } from 'components'
// import { meltSocialLinks } from 'utils/melter'
// import { handleIcon } from 'utils'
import { useAuth } from 'contexts/auth'
import { PathFormatter } from 'utils/pathFormatter'

interface Props {
  className?: string
}

const UserCover: FC<Props> = ({ className = '' }): ReactElement => {
  const { user } = useAuth()
  const { getImagePath } = PathFormatter

  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center">
        <img src={getImagePath(user.coverURL)} className="object-cover w-full h-64 rounded-tl-3xl" alt="user-profile" />
        <Avatar src={getImagePath(user.imageURL)} className="border-primary-light -mt-28 border-[8px]" size={176} />
      </div>
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
    </div>
  )
}

export default UserCover
