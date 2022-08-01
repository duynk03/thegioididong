import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '~/pages/Admin/Login';
import Navigation from './Navigation';

function AdminLayout({ children }) {
    let accessToken = localStorage.getItem('access_token');
    const navigate = useNavigate();
    useEffect(() => {
        if (accessToken === null) {
            navigate('/admin/login');
        }
    }, [accessToken, navigate]);

    return (
        <div className="admin__layout">
            {accessToken !== null ? (
                <>
                    <Navigation />
                    <div className="admin__container">{children}</div>
                </>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default AdminLayout;
