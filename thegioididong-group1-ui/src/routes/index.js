import { CartLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import NotFound404 from '~/pages/NotFound404';
import Phone from '~/pages/Phone';

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
        path: '/cart',
        component: Phone,
        layout: CartLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
