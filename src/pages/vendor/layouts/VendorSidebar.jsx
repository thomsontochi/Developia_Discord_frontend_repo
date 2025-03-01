import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const VendorSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="vendor-sidebar">
      <div className="sidebar-header p-4">
        <h4 className="mb-0">Vendor Panel</h4>
      </div>
      
      <nav className="sidebar-nav">
        <Link 
          to="/vendor/dashboard" 
          className={`nav-link ${isActive('/vendor/dashboard') ? 'active' : ''}`}
        >
          <i className="fas fa-tachometer-alt me-2"></i>
          Dashboard
        </Link>
        
        <Link 
          to="/vendor/products" 
          className={`nav-link ${isActive('/vendor/products') ? 'active' : ''}`}
        >
          <i className="fas fa-box me-2"></i>
          Products
        </Link>
        
        <Link 
          to="/vendor/orders" 
          className={`nav-link ${isActive('/vendor/orders') ? 'active' : ''}`}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Orders
        </Link>
        
        <Link 
          to="/vendor/settings" 
          className={`nav-link ${isActive('/vendor/settings') ? 'active' : ''}`}
        >
          <i className="fas fa-cog me-2"></i>
          Settings
        </Link>

        <Link 
          to="/" 
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          <i className="fas fa-home me-2"></i>
          Main App
        </Link>

        <button 
          onClick={logout} 
          className="nav-link text-danger border-0 bg-transparent"
        >
          <i className="fas fa-sign-out-alt me-2"></i>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default VendorSidebar;