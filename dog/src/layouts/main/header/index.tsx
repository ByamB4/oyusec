import { FC, ReactElement, useState, MouseEvent, ChangeEvent } from 'react'
import { Searchbar, Toast, Avatar } from 'components'
import { Button, Typography } from '@mui/material'
import { useAuth } from 'contexts/auth'
import { fomUsrn, handleIcon } from 'utils'
import { PathFormatter } from 'utils/pathFormatter'
import Link from 'next/link'
import AccountMenu from './menu'

interface Props {
  className?: string
}

const AppNavbar: FC<Props> = ({ className = '' }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { getImagePath } = PathFormatter
  const {
    user,
    logOut,
    connectWallet,
    metamask: { isMetaMaskInstalled },
  } = useAuth()

  const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const loginMetaMask = () => {
    if (isMetaMaskInstalled) {
      connectWallet()
    } else {
      Toast({
        message: 'Please install MetaMask',
        type: 'error',
      })
    }
  }

  return (
    <div className={`w-full flex justify-between items-center py-3 px-5 ${className}`}>
      <Searchbar value={searchValue} onChange={(_: ChangeEvent<HTMLInputElement>) => setSearchValue(_.target.value)} />
      <div>
        {user ? (
          <>
            <div className="flex items-center gap-4">
              <Link href="/account">
                <a>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Avatar size={40} className="border-2 border-primary-purple" src={getImagePath(user.imageURL)} />
                    <Typography variant="h6">{fomUsrn(user.username)}</Typography>
                  </div>
                </a>
              </Link>
              <div
                className={`rounded-full p-2 hover:cursor-pointer ${open ? 'bg-primary-purple' : 'bg-primary-light1'}`}
                onClick={handleClick}
              >
                {handleIcon({
                  icon: 'arrow-up',
                  className: `${open && 'transform rotate-180'} duration-300 ease-in-out`,
                  size: 20,
                })}
              </div>
            </div>
            <AccountMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <Link href="/account">
                <a>
                  <div className="flex flex-col gap-4 text-white p-2">
                    <div className="flex items-center gap-2 py-2 px-3 hover:bg-primary-purple rounded-lg cursor-pointer">
                      {handleIcon({ icon: 'account-circle', className: 'text-white', size: 20 })}
                      <Typography variant="h6">Профайл</Typography>
                    </div>
                  </div>
                </a>
              </Link>

              <div className="flex flex-col gap-4 text-white p-2">
                <div
                  className="flex items-center gap-2 py-2 px-3 hover:bg-primary-purple rounded-lg cursor-pointer"
                  onClick={() => {
                    logOut()
                    handleClose()
                  }}
                >
                  {handleIcon({ icon: 'shutdown', className: 'text-white', size: 20 })}
                  <Typography variant="h6">Гарах</Typography>
                </div>
              </div>
            </AccountMenu>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              startIcon={handleIcon({ icon: 'metamask', size: 20 })}
              onClick={() => loginMetaMask()}
            >
              Нэвтрэх
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default AppNavbar
