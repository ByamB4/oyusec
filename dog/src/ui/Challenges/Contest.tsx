import React from 'react'
import { DEFAULT } from 'configs'
import { safeCompetitionImage } from 'utils/safe'
import { Typography, Avatar } from '@mui/material'

interface Props {
  className?: string
}

const Contest: React.FC<Props> = ({ className = '' }): React.ReactElement => {
  return (
    <div className={`flex gap-4 items-center bg-primary-light1 rounded-3xl p-5 ${className}`}>
      <Avatar sx={{ width: 120, height: 120 }} src={safeCompetitionImage(DEFAULT.competition)} />
      <div className="flex flex-col h-full justify-between">
        <Typography variant="h6" className="font-normal uppercase text-text-grey">
          Удахгүй нэмэгдэх бодлого
        </Typography>
        <Typography variant="h2">1nsp3c7</Typography>
        <Typography variant="h5" className="text-secondary-blue">
          11D 05H 32M 03S
        </Typography>
      </div>
    </div>
  )
}
export default Contest
