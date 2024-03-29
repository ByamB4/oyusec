import React from 'react'
import { DEFAULT } from 'configs'
import { safeUserAvatar } from 'utils/safe'
import { Typography, Avatar } from '@mui/material'
import { Chip, UserTitle } from 'components'

interface Props {
  className?: string
}

const TopPlayer: React.FC<Props> = ({ className = '' }): React.ReactElement => {
  const rightItems = [
    {
      label: 'Challenge',
      value: '6',
    },
    {
      label: 'Competition',
      value: '1',
    },
    {
      label: 'Score',
      value: '673',
    },
  ]

  return (
    <div className={`flex gap-4 items-center bg-primary-light1 rounded-3xl p-5 ${className}`}>
      <Avatar sx={{ width: 120, height: 120 }} />
      <div className="flex flex-col h-full justify-between">
        <Typography variant="h6" className="font-normal uppercase text-text-grey">
          Today top player
        </Typography>
        <UserTitle user={DEFAULT.user} size="h2" noRank />
        <div className="flex gap-2">
          {DEFAULT.user.tags?.map((it) => (
            <Chip key={it.id}>
              <Typography variant="h6">{it.label}</Typography>
            </Chip>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-full justify-between ml-6">
        {rightItems.map((it) => (
          <div className="flex gap-12 justify-between" key={it.label}>
            <Typography variant="h6" className="font-normal uppercase text-text-grey">
              {it.label}
            </Typography>
            <Typography variant="h6" className="font-bold">
              {it.value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopPlayer
