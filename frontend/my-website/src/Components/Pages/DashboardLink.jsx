import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
export const dashboardLink = [
  {
    icon: <BookmarkAddedIcon />,
    label: 'Add product',
    path: '/account/dashboard/product',
    role: ['user', 'Admin'],
  },

  {
    icon: <ManageAccountsIcon />,
    label: 'manage product',
    path: '/account/dashboard/manage',
    role: ['user', 'Admin'],
  },
]
