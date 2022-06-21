import { CartLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import Phone from '~/pages/Phone';

const publicRoutes = [
   {
      path: '/',
      component: Home,
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
