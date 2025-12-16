import { createBrowserRouter } from 'react-router'
import Root from '../Layout/RootLayout/Root'
import Home from '../Pages/Home/HomePage'
import About from '../Pages/About/About'
import AuthLayout from '../Layout/AuthenticationLayout/AuthLayout'
import Login from '../Header/Navbar/Login'
import Register from '../Header/Navbar/Register'
import Contact from '../Pages/Contact/Contact'
import Error from '../Error/Error'
import Profile from '../Pages/Profile/Profile'
import Account from '../Layout/AccountLayout/Account'

import AddressBook from '../Layout/AccountLayout/AddressBook'
import MyPaymentOptions from '../Layout/AccountLayout/MyPaymentOptions'
import MyCollection from '../Layout/AccountLayout/MyCollection'
import MyReturn from '../Layout/AccountLayout/MyReturn'
import MyWishlist from '../Layout/AccountLayout/MyWishlist'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      { index: true, Component: Home },
      { path: '/about', Component: About },
      { path: '/contact', Component: Contact },
      {
        path: '/account',
        Component: Account,
        children: [
          {
            index: true,
            Component: Profile,
          },
          {
            path: '/account/profile',
            Component: Profile,
          },
          {
            path: '/account/address',
            Component: AddressBook,
          },
          {
            path: '/account/payment',
            Component: MyPaymentOptions,
          },
          {
            path: '/account/collection',
            Component: MyCollection,
          },
          {
            path: '/account/return',
            Component: MyReturn,
          },
          {
            path: '/account/wishlist',
            Component: MyWishlist,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  // {
  //   path: '/account',
  //   Component: AccountLayout,
  //   children: [{ path: '/account/profile', Component: Profile }],
  // },
])
export { router }
