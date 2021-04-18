// Import from Login - Register and Admin Page
import Login from '../components/pages/Auth/Login/Login'
import Register from '../components/pages/Auth/Register/Register'
import Admin from '../components/pages/Admin/Admin'

// Import from Home Page
import Home from '../components/pages/Home/Home'

// Import from Error Page
import Error from '../components/pages/Error/Error404'

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/login-admin",
        component: Login,
        exact: false
    },
    {
        path: "/register-admin",
        component: Register,
        exact: false
    },
    {
        path: "/admin",
        component: Admin,
        exact: true
    },
    {
        path: "/**",
        component: Error
    }
]

export default routes