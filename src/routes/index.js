import Home from "../pages/home"
import PageNotFound from "../pages/pageNotFound"
import About from "../pages/about"
import ProductList from "../pages/productList"
import ProductDetail from "../pages/productDetail"
import Advantage from "../pages/advantage"
import NewList from "../pages/newList"
import NewDetail from "../pages/newDetail"
import Contact from "../pages/contact"


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/404',
        component: PageNotFound
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/productList',
        component: ProductList
    },
    {
        path: '/productDetail',
        component: ProductDetail
    },
    {
        path: '/advantage',
        component: Advantage
    },
    {
        path: '/newList',
        component: NewList
    },
    {
        path: '/newDetail',
        component: NewDetail
    },
    {
        path: '/contact',
        component: Contact
    },
]

export default routes