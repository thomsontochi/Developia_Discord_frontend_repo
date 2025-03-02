import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default AuthRoute;