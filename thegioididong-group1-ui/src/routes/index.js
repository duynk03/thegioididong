import { CartLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import NotFound404 from '~/pages/NotFound404';
import Phone from '~/pages/Products/Phone';
import Smartwatch from '~/pages/Products/Smartwatch';
import Tablet from '~/pages/Products/Tablet';
import Laptop from '~/pages/Products/Laptop';
import AdminLayout from '~/components/Layout/AdminLayout';
import Dashboard from '~/pages/Admin';
import Orders from '~/pages/Admin/Orders/Orders';
import Products from '~/pages/Admin/Products/Products';
import PhoneForm from '~/pages/Admin/ProductForm/PhoneForm';
import LaptopForm from '~/pages/Admin/ProductForm/LaptopForm';
import TabletForm from '~/pages/Admin/ProductForm/TabletForm';
import SmartwatchForm from '~/pages/Admin/ProductForm/SmartwatchForm';
import Login from '~/pages/Admin/Login';
import Logout from '~/pages/Admin/Logout';
import Register from '~/pages/Admin/Register';
import PhoneEdit from '~/pages/Admin/EditForm/PhoneEdit';
import LaptopEdit from '~/pages/Admin/EditForm/LaptopEdit';
import TabletEdit from '~/pages/Admin/EditForm/TabletEdit';
import SmartwatchEdit from '~/pages/Admin/EditForm/SmartwatchEdit';
import UserInformation from '~/pages/Admin/User/UserInfomation';

import ShowALLPhone from '~/pages/Products/Phone/phoneShowAll';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/*',
        component: NotFound404,
    },
    {
        path: '/dtdd',
        component: Phone,
    },
    {
        path: '/dtdd-manufacturer',
        component: ShowALLPhone,
    },
    {
        path: '/laptop',
        component: Laptop,
    },
    {
        path: '/tablet',
        component: Tablet,
    },
    {
        path: '/smartwatch',
        component: Smartwatch,
    },
    {
        path: '/cart',
        component: Phone,
        layout: CartLayout,
    },
    {
        path: '/admin',
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: '/admin/login',
        component: Login,
        layout: AdminLayout,
    },
    {
        path: '/admin/logout',
        component: Logout,
        layout: AdminLayout,
    },
    {
        path: 'admin/register',
        component: Register,
        layout: AdminLayout,
    },
    {
        path: '/admin/products',
        component: Products,
        layout: AdminLayout,
    },
    {
        path: '/admin/orders',
        component: Orders,
        layout: AdminLayout,
    },
    {
        path: '/admin/phoneForm',
        component: PhoneForm,
        layout: AdminLayout,
    },

    {
        path: '/admin/laptopForm',
        component: LaptopForm,
        layout: AdminLayout,
    },
    {
        path: '/admin/tabletForm',
        component: TabletForm,
        layout: AdminLayout,
    },
    {
        path: '/admin/smartwatchForm',
        component: SmartwatchForm,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/phone/edit/:id',
        component: PhoneEdit,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/laptop/edit/:id',
        component: LaptopEdit,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/tablet/edit/:id',
        component: TabletEdit,
        layout: AdminLayout,
    },
    {
        path: '/admin/products/smartwatch/edit/:id',
        component: SmartwatchEdit,
        layout: AdminLayout,
    },
    {
        path: '/admin/account',
        component: UserInformation,
        layout: AdminLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
