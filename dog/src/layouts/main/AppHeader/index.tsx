/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement, useState, MouseEvent } from 'react'
import { Searchbar, Avatar, Toast } from 'components'
import { Button, Typography } from '@mui/material'
// import { useToken, useUser } from 'contexts/user'
import { useAuth } from 'contexts/auth'
import { useRouter } from 'next/router'
import { IProfileMenuItem, PROFILE_MENU_ITEMS } from 'configs/app'
import { handleIcon, plhUserFullName } from 'utils'
import { AccountMenu } from './accountMenu'

interface Props {
  className?: string
}

const AppNavbar: FC<Props> = ({ className = '' }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const {
    user,
    connectWallet,
    metamask: { isMetaMaskInstalled },
  } = useAuth()

  const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const loginMetaMask = () => {
    if (isMetaMaskInstalled) {
      connectWallet()
        .then(() => {
          console.log('welcome')
        })
        .catch((err) => console.log(err))
    } else {
      Toast({
        message: 'Please install MetaMask',
        type: 'error',
      })
    }
  }

  return (
    <div className={`w-full flex justify-between items-center py-3 px-5 ${className}`}>
      <Searchbar
        value={searchValue}
        onChange={(_: React.ChangeEvent<HTMLInputElement>) => setSearchValue(_.target.value)}
      />
      <div>
        {user ? (
          <>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar size={40} />
                <Typography variant="h6">{plhUserFullName()}</Typography>
              </div>
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
              <div className="flex flex-col gap-4 text-white p-2">
                {PROFILE_MENU_ITEMS.map((it: IProfileMenuItem) => (
                  <div
                    className="flex items-center gap-2 py-2 px-3 hover:bg-primary-purple rounded-lg cursor-pointer"
                    key={it.id}
                    onClick={() => {
                      switch (it.action.type) {
                        case 'link':
                          router.push(it.action.href)
                          break
                        case 'function':
                          it.action.action()
                          break
                        default:
                          break
                      }
                    }}
                  >
                    {handleIcon({ icon: it.icon, className: 'text-white', size: 20 })}
                    <Typography variant="h6">{it.label}</Typography>
                  </div>
                ))}
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
