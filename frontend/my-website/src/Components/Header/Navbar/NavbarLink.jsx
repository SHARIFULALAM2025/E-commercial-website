import HomeIcon from '@mui/icons-material/Home'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'
import InfoIcon from '@mui/icons-material/Info'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const pages = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
    icon: <HomeIcon></HomeIcon>,
  },
  {
    id: 2,
    path: '/about',
    Name: 'About',
    icon: <InfoIcon></InfoIcon>,
  },
  {
    id: 3,
    path: '/contact',
    Name: 'Contact',
    icon: <PermPhoneMsgIcon></PermPhoneMsgIcon>,
  },
]
const settingLink = [
  {
    id: 1,
    path: '/profile',
    Name: 'Profile',
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
]
export { pages, settingLink }
//npm install  @mui/material @emotion/react @emotion/styled @mui/icons-material
