import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'
import { AuthContext } from '../../Authentication/AuthContext'
import Paper from '@mui/material/Paper'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
import ReusableButton from '../../ReusableComponent/ReusableButton'
import Person3Icon from '@mui/icons-material/Person3'
import CollectionsIcon from '@mui/icons-material/Collections'
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import useRole from '../../Hook/useRole'
import DashboardIcon from '@mui/icons-material/Dashboard'
const Account = () => {
  const navigate = useNavigate()
const [role]=useRole()
  const { LogOut } = useContext(AuthContext)
  const handelLogOut = () => {
    LogOut()
    navigate('/')
  }
  const [open, setOpen] = React.useState(true)
  const data = [
    {
      icon: <Person3Icon />,
      label: 'My profile',
      path: '',
      role: ['user', 'Admin'],
    },
    {
      icon: <MenuBookIcon />,
      label: 'Customer Feedback',
      path: '/account/address',
      role: [ 'Admin'],
    },
    {
      icon: <AccountBalanceIcon />,
      label: 'My Payment Options',
      path: '/account/payment',
      role: ['user', 'Admin'],
    },
    {
      icon: <CollectionsIcon />,
      label: 'My collection',
      path: '/account/collection',
      role: ['user', 'Admin'],
    },
    {
      icon: <AssignmentReturnIcon />,
      label: 'My Return',
      path: '/account/return',
      role: ['user', 'Admin'],
    },
    {
      icon: <FactCheckIcon />,
      label: 'My Wishlist',
      path: '/account/wishlist',
      role: ['user', 'Admin'],
    },
    {
      icon: <DashboardIcon />,
      label: 'My Dashboard',
      path: '/account/dashboard',
      role: ['Admin'],
    },
  ]
  const filterData = data.filter(item => item.role.includes(role))
  console.log(filterData)

  return (
    <div className="grid grid-cols-12 ">
      <div className="p-1 col-span-2 space-y-3 shadow-xl rounded dark:bg-black">
        <div className="">
          <Box sx={{ display: 'flex' }}>
            <Paper elevation={0} sx={{ width: '100%' }}>
              <Box
                sx={{
                  borderRadius: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  pb: open ? 2 : 0,
                }}
              >
                <ListItemButton
                  onClick={() => setOpen(!open)}
                  aria-expanded={open}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: open ? 0 : 2.5,
                    '&:hover svg': {
                      opacity: 1,
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                        Manage Account
                      </Typography>
                    }
                  />

                  <KeyboardArrowDown
                    sx={{
                      transition: '0.2s',
                      transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                      opacity: 0.8,
                    }}
                  />
                </ListItemButton>

                {open &&
                  filterData.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={({ isActive }) =>
                        isActive ? 'text-red-400' : 'text-white'
                      }
                      end
                    >
                      <ListItemButton
                        key={item.label}
                        sx={{
                          py: 0,
                          minHeight: 32,
                        }}
                      >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontSize: 14 }}>
                              {item.label}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </NavLink>
                  ))}
              </Box>
            </Paper>
          </Box>
        </div>

        <ReusableButton
          onClick={handelLogOut}
          sx={{ width: '100%' }}
          text="log out"
          variant="contained"
        ></ReusableButton>
      </div>

      <div className="col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Account
