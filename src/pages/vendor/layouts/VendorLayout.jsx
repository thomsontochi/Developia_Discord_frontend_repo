import React from 'react';
import VendorHeader from './VendorHeader';
import VendorSidebar from './VendorSidebar';

const VendorLayout = ({ children }) => {
  return (
    <div className="vendor-dashboard-layout">
      <VendorSidebar />
      <div className="main-content">
        <VendorHeader />
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VendorLayout;