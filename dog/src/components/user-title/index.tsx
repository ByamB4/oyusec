import { Typography } from '@mui/material'
import { IUser } from 'interfaces'
import IconVerifiedUser from 'icons/Filled/VerifiedUser'
import colors from 'theme/colors'

interface Props {
  user: Partial<IUser>
  size?: 'h4' | 'h3' | 'h2'
  className?: string
  noRank?: boolean
}

const UserTitle: React.FC<Props> = ({ user, noRank = false, className = '', size = 'h4' }): React.ReactElement => {
  return (
    // TODO: Add logic to show rank
    <div className="flex items-center gap-2">
      <div className={`flex flex-col ${className}`}>
        <Typography variant={size}>
          <span>Byam</span>
          <span className="text-secondary-red">B4</span>
        </Typography>
        {!noRank && (
          <Typography variant="body1" className="text-text-darkGrey">
            {user.rank}
          </Typography>
        )}
      </div>
      <IconVerifiedUser width={22} height={22} fill={colors.secondary.blue} />
    </div>
  )
}

export default UserTitle
