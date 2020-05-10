import Home from "../pages/home"
import PageNotFound from "../pages/pageNotFound"


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/404',
        component: PageNotFound
    }
]

export default routes