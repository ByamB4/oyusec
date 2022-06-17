import { FC, ReactElement } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { RiAccountCircleFill, RiShutDownLine } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { HiCheck } from 'react-icons/hi'
import { MdModeEditOutline } from 'react-icons/md'

interface IHandleIcon {
  icon: string
  size?: number
  className?: string
  onClick?: () => void
}

export const handleIcon: FC<IHandleIcon> = ({ icon, size = 24, className = '', onClick }): ReactElement | undefined => {
  switch (icon) {
    case 'edit':
      return <MdModeEditOutline className={className} style={{ width: size, height: size }} onClick={onClick} />
    case 'metamask':
      return (
        <img
          src="/svgs/logos/metamask.svg"
          className={className}
          style={{ width: size, height: size }}
          alt="metamask-logo"
        />
      )
    case 'arrow-down':
      return (
        <TiArrowSortedDown
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )
    case 'arrow-up':
      return (
        <TiArrowSortedUp
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )
    case 'account-circle':
      return (
        <RiAccountCircleFill
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )
    case 'shutdown':
      return (
        <RiShutDownLine
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )
    case 'hi-check':
      return (
        <HiCheck
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )

    case 'close':
      return (
        <IoClose
          className={className}
          style={{
            width: size,
            height: size,
          }}
          onClick={onClick}
        />
      )

    default:
      return <></>
  }
}
