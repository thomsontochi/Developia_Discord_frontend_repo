import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { showToast } from '../utils/toast';
import { useEffect, useRef } from 'react';

const GuestRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const hasShownToast = useRef(false);
  
  useEffect(() => {
    if (isAuthenticated && !hasShownToast.current) {
      hasShownToast.current = true;
      const userName = user?.full_name || user?.first_name || 'Vendor';
      showToast.auth(`Welcome back ${userName}!`);
    }
  }, [isAuthenticated, user]);
  
  //console.log('GuestRoute - isAuthenticated:', isAuthenticated);
  
  if (isAuthenticated) {
    const redirectPath = user?.userType === 'vendor' ? '/vendor/dashboard' : '/';
    //console.log('GuestRoute - Redirecting to:', redirectPath);
    return <Navigate to={redirectPath} replace />;
  }
  
  //console.log('GuestRoute - Rendering protected component');
  return children;
};


export default GuestRoute;