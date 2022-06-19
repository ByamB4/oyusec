import { Menu, MenuProps, styled } from '@mui/material'
import colors from 'theme/colors'

const AccountMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    borderRadius: 16,
    marginTop: '8px',
    backgroundColor: colors.primary.light1,
  },
}))

export default AccountMenu
