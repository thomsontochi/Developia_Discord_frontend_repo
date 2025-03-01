import React from 'react';

const DashboardStats = () => {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Total Sales</h3>
        <p>$0.00</p>
      </div>
      <div className="stat-card">
        <h3>Orders</h3>
        <p>0</p>
      </div>
      <div className="stat-card">
        <h3>Products</h3>
        <p>0</p>
      </div>
    </div>
  );
};

export default DashboardStats;