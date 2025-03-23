import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Modified to accept children instead of being a HOC
const VendorRoute = ({ children }) => {
  const { isAuthenticated, isLoading, role } = useAuth();
  
  // console.log('VendorRoute - isAuthenticated:', isAuthenticated);
  // console.log('VendorRoute - isLoading:', isLoading);
  // console.log('VendorRoute - role:', role);
  
  // Show loading indicator while auth is checking
  if (isLoading) {
    return <div>Checking vendor authentication...</div>;
  }
  
  // Redirect if not authenticated or not a vendor
  if (!isAuthenticated || role !== 'vendor') {
    console.log('VendorRoute - Redirecting to vendor login');
    return <Navigate to="/auth/vendor/login" />;
  }
  
  // Render children if authenticated and is a vendor
  // console.log('VendorRoute - Rendering protected vendor component');
  return children;
};

export default VendorRoute;