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
    getItem(<Link to={`/admin/products`}>Products</Link>, '2', <LaptopOutlined />),
    getItem(<Link to={`/admin/phoneForm`}>Add new phone</Link>, '3', <PlusCircleOutlined />),
    getItem(<Link to={`/admin/laptopForm`}>Add new laptop</Link>, '4', <PlusCircleOutlined />),
    getItem(<Link to={`/admin/tabletForm`}>Add new tablet</Link>, '5', <PlusCircleOutlined />),
    getItem(<Link to={`/admin/smartwatchForm`}>Add new smartwatch</Link>, '6', <PlusCircleOutlined />),
    getItem(<Link to={`/admin/orders`}>Orders</Link>, '7', <ShoppingOutlined />),
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
