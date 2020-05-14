import App from "../App";
import Home from "components/layout/home/";
import PageNotFound from "components/layout/pageNotFound/";
import About from "components/layout/about/";
import ProductList from "components/layout/productList/";
import ProductDetail from "components/layout/productDetail/";
import Advantage from "components/layout/advantage/";
import NewList from "components/layout/newList/";
import NewDetail from "components/layout/newDetail/";
import Contact from "components/layout/contact/";



const routes = [
    {
        path: '/',
        component: App,
    },
    {
        path: '/Home',
        component: Home,
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

export  { routes }