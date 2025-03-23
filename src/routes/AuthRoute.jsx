import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Modified to accept children instead of being a HOC
const AuthRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  //console.log('AuthRoute - isAuthenticated:', isAuthenticated);
  //console.log('AuthRoute - isLoading:', isLoading);
  
  // Show loading indicator while auth is checking
  if (isLoading) {
    return <div>Checking authentication...</div>;
  }
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    //console.log('AuthRoute - Redirecting to login');
    return <Navigate to="/auth/login" />;
  }
  
  // Render children if authenticated
  //console.log('AuthRoute - Rendering protected component');
  return children;
};

export default AuthRoute;