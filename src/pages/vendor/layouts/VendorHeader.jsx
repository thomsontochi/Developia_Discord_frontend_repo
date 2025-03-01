import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';

const VendorHeader = () => {
  const { user } = useAuth();

  return (
    <header className="vendor-header p-4 bg-white shadow-sm">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="h3 mb-0">Welcome back, {user?.full_name}</h1>
          <p className="text-muted mb-0">Manage your store and sales</p>
        </div>
        <div className="d-flex align-items-center">
          {/* Add any header actions/notifications here */}
          <div className="dropdown">
            <button className="btn btn-link" type="button" data-bs-toggle="dropdown">
              <i className="fas fa-bell"></i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">No new notifications</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorHeader;