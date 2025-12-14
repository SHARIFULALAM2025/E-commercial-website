import { createBrowserRouter } from 'react-router'
import Root from '../Layout/RootLayout/Root'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import AuthLayout from '../Layout/AuthenticationLayout/AuthLayout'
import Login from '../Header/Navbar/Login'
import Register from '../Header/Navbar/Register'
import Contact from '../Pages/Contact/Contact'
const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {index:true,Component:Home},
            {path:"/about",Component:About},
            {path:"/contact",Component:Contact}
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
        {
                path: "register",
                Component:Register
            },
            {
                path: "login",
                Component:Login
            },


        ]
    }
])
export { router }
