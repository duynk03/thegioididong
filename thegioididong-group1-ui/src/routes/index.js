import { CartLayout } from '~/components/Layout';
import Home from '~/pages/Home';
import NotFound404 from '~/pages/NotFound404';
import Phone from '~/pages/Phone';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import History from '~/pages/History/History';
import UserInfo from '~/pages/History/UserInfo';
import Login from '~/pages/History/Login';
import ProductDetail from '~/pages/ProductDetail';
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
        path: '/product',
        component: Product,
    },
    {
        path: '/cart',
        component: Cart,
        layout: CartLayout,
    },
    {
        path: '/lich-su-mua-hang',
        component: History,
    },
    {
        path: '/lich-su-mua-hang/thong-tin-ca-nhan',
        component: UserInfo,
    },
    {
        path: '/lich-su-mua-hang/dang-nhap',
        component: Login,
    },
    {
        path: '/productdetail',
        component: ProductDetail,
    }

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
