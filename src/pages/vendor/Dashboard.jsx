import React from 'react';
import VendorLayout from './layouts/VendorLayout';
import DashboardStats from './components/DashboardStats';
import RecentOrders from './components/RecentOrders';
import StoreOverview from './components/StoreOverview';

const Dashboard = () => {
  return (
    <VendorLayout>
      <div className="dashboard-container">
        <h1 className="dashboard-title mb-4">Dashboard</h1>
        
        <DashboardStats />
        
        <div className="row g-4">
          <div className="col-lg-4">
            <StoreOverview />
          </div>
          <div className="col-lg-8">
            <RecentOrders />
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default Dashboard;