import { Typography } from '@mui/material'
import { useState } from 'react'
import { delay, handleIcon } from 'utils'

interface Props {
  className?: string
  text: string
}

const Note: React.FC<Props> = ({ className = '', text = '' }): React.ReactElement => {
  const [copied, setCopied] = useState<boolean>(false)

  const _ = async () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    await delay(2000).then(() => setCopied(false))
  }

  return (
    <div className={`flex bg-secondary-darkGrey ${className}`}>
      <div className="w-2 bg-secondary-yellow" />
      <Typography variant="h6" className="px-2 py-1 w-full">
        {text}
      </Typography>
      <div className="flex items-center p-1">
        {copied
          ? handleIcon({
              icon: 'hi-check',
              className: 'text-text-grey',
              size: 22,
            })
          : handleIcon({
              icon: 'content-copy',
              size: 22,
              className: 'text-text-darkGrey hover:text-text-grey cursor-pointer',
              onClick: () => _(),
            })}
      </div>
    </div>
  )
}

export default Note
