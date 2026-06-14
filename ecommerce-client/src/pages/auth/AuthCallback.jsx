import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthCallback = () => {
    const navigate = useNavigate();
    const { loadUser, mergeGuestCart } = useAuth();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            localStorage.setItem('token', token);
            loadUser().then(() => {
                if (mergeGuestCart) mergeGuestCart();
                navigate('/');
            }).catch(() => navigate('/login?error=callback_failed'));
        } else {
            navigate('/login?error=no_token');
        }
    }, [loadUser, mergeGuestCart, navigate]);

    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div></div>;
};

export default AuthCallback;
