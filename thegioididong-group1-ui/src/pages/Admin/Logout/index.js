import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/admin/login');
    }, [navigate]);
    return <></>;
}

export default Logout;
