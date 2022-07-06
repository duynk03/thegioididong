import { CartLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import NotFound404 from '~/pages/NotFound404';
import Phone from '~/pages/Products/Phone';
import Smartwatch from '~/pages/Products/Smartwatch';
import Tablet from '~/pages/Products/Tablet';
import Laptop from '~/pages/Products/Laptop';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
