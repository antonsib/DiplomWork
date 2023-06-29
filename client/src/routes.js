import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ProductPage from './pages/ProductPage';
import {ADMIN_ROUTE,SALES_ROUTE, USERS_ROUTE} from "./utils/consts";
import {BASKET_ROUTE} from "./utils/consts";
import {SHOP_ROUTE} from "./utils/consts";
import {LOGIN_ROUTE} from "./utils/consts";
import {REGISTRATION_ROUTE} from "./utils/consts";
import {PRODUCT_ROUTE} from "./utils/consts";
import Sales from "./pages/Sales";
import Users from "./pages/Users";
export const authRoutes =[
    {
        path:ADMIN_ROUTE,
        Component:Admin
    },
    {
        path:BASKET_ROUTE,
        Component:Basket
    },
    {
        path:SALES_ROUTE,
        Component:Sales
    },
    {
        path:USERS_ROUTE,
        Component:Users
    },
]
export const publicRoutes =[
    {
        path:SHOP_ROUTE,
        Component:Shop
    },
    {
        path:LOGIN_ROUTE,
        Component:Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component:Auth
    },
    {
        path:PRODUCT_ROUTE+'/:id',
        Component:ProductPage
    },
]