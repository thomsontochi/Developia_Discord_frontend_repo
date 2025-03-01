import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';

const VendorHeader = ({ onToggleSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="vendor-header">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <button 
            className="btn btn-link text-dark me-3 d-lg-none"
            onClick={onToggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div>
            <h1 className="h4 mb-1">Welcome back, {user?.full_name}</h1>
            <p className="text-muted small mb-0">Manage your store and sales</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="dropdown">
            <button 
              className="btn btn-light rounded-circle p-2" 
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-bell"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end shadow-sm">
              <span className="dropdown-item-text">No new notifications</span>
            </div>
          </div>
          <div className="vr d-none d-lg-block"></div>
          <div className="d-none d-lg-block">
            <p className="mb-0 small">Today's Date</p>
            <p className="mb-0 fw-bold">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;