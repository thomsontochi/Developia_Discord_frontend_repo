import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Add useNavigate
import { useAuth } from '../../../contexts/AuthContext';
import { showToast } from '../../../utils/toast'; // Import toast

const VendorSidebar = ({ isOpen }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigation
  const { logout } = useAuth();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const handleLogout = () => {
    try {
      logout(); // This clears the auth context and localStorage
      showToast.success("Successfully logged out!");
      navigate('/'); // Redirect to home page
    } catch (error) {
      showToast.error("Logout failed. Please try again.");
    }
  };

  return (
    <aside className={`vendor-sidebar ${isOpen ? '' : 'collapsed'}`}>
      <div className="p-4">
        <h4 className="mb-4 text-white text-center">Vendor Panel</h4>
        
        <nav className="nav flex-column gap-2">
          <Link 
            to="/vendor/dashboard" 
            className={`nav-link ${isActive('/vendor/dashboard')}`}
          >
            <i className="fas fa-tachometer-alt me-3"></i>
            Dashboard
          </Link>
          
          <Link 
            to="/vendor/products" 
            className={`nav-link ${isActive('/vendor/products')}`}
          >
            <i className="fas fa-box me-3"></i>
            Products
          </Link>
          
          <Link 
            to="/vendor/orders" 
            className={`nav-link ${isActive('/vendor/orders')}`}
          >
            <i className="fas fa-shopping-cart me-3"></i>
            Orders
          </Link>
          
          <Link 
            to="/vendor/settings" 
            className={`nav-link ${isActive('/vendor/settings')}`}
          >
            <i className="fas fa-cog me-3"></i>
            Settings
          </Link>

          <div className="mt-auto">
            <Link to="/" className="nav-link">
              <i className="fas fa-home me-3"></i>
              Main Site
            </Link>
            
            <button 
              onClick={handleLogout} // Changed to handleLogout
              className="nav-link text-danger border-0 bg-transparent w-100 text-start"
            >
              <i className="fas fa-sign-out-alt me-3"></i>
              Logout
            </button>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default VendorSidebar;