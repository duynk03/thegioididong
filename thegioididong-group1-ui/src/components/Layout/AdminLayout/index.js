import Navigation from './Navigation';

function AdminLayout({ children }) {
    return (
        <div className="admin__layout">
            <Navigation />
            <div className="admin__container">{children}</div>
        </div>
    );
}

export default AdminLayout;
