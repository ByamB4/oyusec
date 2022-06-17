import { FC, ReactElement } from 'react'
import { Avatar as MAvatar } from '@mui/material'
import { plhUserFullName, plhUserAvatar } from 'utils'

interface Props {
  className?: string
  src?: string
  size?: number
  alt?: string
  variant?: 'rounded' | 'square' | 'circular'
  onClick?: () => any
}

const Avatar: FC<Props> = ({
  className = '',
  size = 40,
  src = plhUserAvatar(),
  alt = plhUserFullName(),
  onClick,
  variant = 'circular',
}): ReactElement => {
  return (
    <MAvatar
      className={`cursor-pointer ${className}`}
      alt={alt}
      onClick={onClick}
      variant={variant}
      src={src}
      sx={{
        width: size,
        height: size,
      }}
    />
  )
}

export default Avatar
