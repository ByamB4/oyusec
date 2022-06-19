import React from 'react'
import { TopPlayer, Contest, AddChallenge } from '.'

interface Props {
  className?: string
}

const LiveFeatures: React.FC<Props> = ({ className = '' }): React.ReactElement => {
  return (
    <div className={`flex gap-8 ${className}`}>
      <TopPlayer />
      <Contest />
      <div className="flex flex-col">
        <AddChallenge />
      </div>
    </div>
  )
}

export default LiveFeatures
