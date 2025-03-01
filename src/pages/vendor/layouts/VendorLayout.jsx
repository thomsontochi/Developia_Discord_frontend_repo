import React, { useState } from 'react';
import VendorHeader from './VendorHeader';
import VendorSidebar from './VendorSidebar';

const VendorLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="vendor-dashboard-layout">
      <VendorSidebar isOpen={sidebarOpen} />
      <div className={`main-content ${!sidebarOpen ? 'expanded' : ''}`}>
        <VendorHeader onToggleSidebar={toggleSidebar} />
        <div className="content-wrapper p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VendorLayout;