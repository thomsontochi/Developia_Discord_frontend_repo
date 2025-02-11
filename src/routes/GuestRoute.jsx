import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../utility/toast';
import { useEffect, useRef } from 'react';

const GuestRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuth();
    const location = useLocation();
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (isAuthenticated && !hasShownToast.current) {
            hasShownToast.current = true;
            showToast.auth(`Welcome back ${user.first_name}!`);
        }
    }, [isAuthenticated, user]);

    if (isAuthenticated) {
        const redirectPath = user?.userType === 'vendor' ? '/vendor/dashboard' : '/';
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default GuestRoute;