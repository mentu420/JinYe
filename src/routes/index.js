import App from "../App";
import Home from "Components/Layout/Home/";
import PageNotFound from "Components/Layout/PageNotFound/";
import About from "Components/Layout/About/";
import ProductList from "Components/Layout/ProductList/";
import ProductDetail from "Components/Layout/ProductDetail/";
import Advantage from "Components/Layout/Advantage/";
import NewList from "Components/Layout/NewList/";
import NewDetail from "Components/Layout/NewDetail/";
import Contact from "Components/Layout/Contact/";



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