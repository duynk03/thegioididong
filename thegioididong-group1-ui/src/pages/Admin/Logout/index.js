import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    localStorage.removeItem('access_token');
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/admin/login');
    }, [navigate]);
    return <></>;
}

export default Logout;
