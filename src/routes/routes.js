// Imports from Admin - Login and Register
import Admin from '../components/pages/Admin/Admin'
import Login from '../components/pages/Auth/Login/Login'
import Register from '../components/pages/Auth/Register/Register'

// Import from Home 
import Home from '../components/pages/Home/Home'

// Error404
import Error from '../components/pages/Error/Error404'


const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/admin',
        component: Admin,
        exact: true
    },
    {
        path: '/admin-login',
        component: Login,
        exact: false
    },
    {
        path: '/admin-register',
        component: Register,
        exact: false
    }
]

export default routes