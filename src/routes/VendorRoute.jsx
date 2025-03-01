import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const VendorRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem('token');
  
  if (!isAuthenticated || !token) {
    return <Navigate to="/auth/vendor/login" />;
  }

  return children;
};

export default VendorRoute;