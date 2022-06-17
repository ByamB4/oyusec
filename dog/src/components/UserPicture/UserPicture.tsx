/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FC, ReactElement, useRef, useState } from 'react'
import { PathFormatter } from 'utils/pathFormatter'
import CircularProgress from '@mui/material/CircularProgress'
import { handleIcon } from 'utils'
import { Avatar } from 'components'

interface Props {
  className?: string
  src: string
  isOwner?: boolean
  isProfile?: boolean
}

const UserPicture: FC<Props> = ({ className = '', src, isOwner = false, isProfile = false }): ReactElement => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [loading, setLoader] = useState<boolean>(false)
  const inputFile = useRef(null)

  const { getImagePath } = PathFormatter

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    // const { files } = e.target
    // if (files && files.length > 0) {
    //   setLoader(true)
    //   const resp = await FileService.upload(files[0], uploadOption)
    //   const update: IUser = user
    //   if (isProfile) {
    //     update.imageId = resp.id
    //     update.imageURL = resp.key
    //   } else {
    //     update.coverId = resp.id
    //     update.coverURL = resp.key
    //   }
    //   await AuthService.update(update)
    //   updateUser({
    //     ...user,
    //     ...update,
    //   })
    //   setLoader(false)
    // }
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex relative rounded-full ${isProfile ? ' ' : 'w-full'}`}
    >
      {isOwner && (
        <input id="file" type="file" ref={inputFile} onChange={onChangeFile} disabled={loading} className="hidden" />
      )}
      <Avatar
        src={getImagePath(src)}
        onClick={() => (isOwner ? inputFile.current.click() : null)}
        className={`transition-all duration-100 hover:grayscale-[90%] ${className} ${isProfile ? '' : 'rounded-none'}`}
        size={isProfile && 176}
      />
      {isOwner && (
        <div
          className={`absolute ${
            isProfile ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'right-5 bottom-5'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(true)}
        >
          {loading && <CircularProgress />}
          {isHovering &&
            handleIcon({
              icon: 'edit',
              className: 'hover:cursor-pointer text-white',
              size: 24,
            })}
        </div>
      )}
    </div>
  )
}

export default UserPicture
