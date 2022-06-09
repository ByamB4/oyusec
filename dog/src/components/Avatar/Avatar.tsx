import { FC, ReactElement } from 'react'
import { Avatar as MAvatar } from '@mui/material'
import { plhUserFullName, plhUserAvatar } from 'utils'

interface Props {
  className?: string
  src?: string
  size?: number
  alt?: string
}

const Avatar: FC<Props> = ({
  className = '',
  size = 40,
  src = plhUserAvatar(),
  alt = plhUserFullName(),
}): ReactElement => {
  return (
    <MAvatar
      className={`${className} border border-primary-purple`}
      alt={alt}
      src={src}
      sx={{
        width: size,
        height: size,
      }}
    />
  )
}

export default Avatar
