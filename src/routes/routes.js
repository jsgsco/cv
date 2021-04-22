// Import from Home Page
import Home from '../components/pages/Home/Home'

// Import from Contact Page
import Contact from '../components/pages/Contact/Contact'


// Import from Error Page
import Error from '../components/pages/Error/Error404'

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/**",
        component: Error
    }
]

export default routes