import { ShoppingOutlined, PlusCircleOutlined, LaptopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import './Navigation.scss';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem(
        <Link to={`/admin`}>Thegioididong</Link>,
        '1',
        <span role="img" aria-label="laptop" className="anticon anticon-laptop ant-menu-item-icon">
            <div className="logo__icon">
                <img src="/logo-tgdd.png" alt="logo" className="logo__tgdd" />
            </div>
        </span>,
    ),
    getItem(<Link to={`/admin/products`}>Danh sách sản phẩm</Link>, '2', <LaptopOutlined />),
    getItem('Thêm sản phẩm', 'sub1', <PlusCircleOutlined />, [
        getItem(<Link to={`/admin/phoneForm`}>Điện thoại</Link>, '3'),
        getItem(<Link to={`/admin/laptopForm`}>Laptop</Link>, '4'),
        getItem(<Link to={`/admin/tabletForm`}>Tablet</Link>, '5'),
        getItem(<Link to={`/admin/smartwatchForm`}>Smartwatch</Link>, '6'),
    ]),
    getItem(<Link to={`/admin/orders`}>Đơn hàng</Link>, '7', <ShoppingOutlined />),
];

const Navigation = () => {
    return (
        <div className={styles.navbar}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    items={items}
                />
            </div>
        </div>
    );
};

export default Navigation;
