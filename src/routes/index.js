import App from "../App";
import Home from "Components/layout/home/";
import PageNotFound from "Components/layout/pageNotFound/";
import About from "Components/layout/about/";
import ProductList from "Components/layout/productList/";
import ProductDetail from "Components/layout/productDetail/";
import Advantage from "Components/layout/advantage/";
import NewList from "Components/layout/newList/";
import NewDetail from "Components/layout/newDetail/";
import Contact from "Components/layout/contact/";



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