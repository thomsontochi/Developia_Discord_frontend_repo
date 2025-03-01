import React from 'react';

const DashboardStats = () => {
  return (
    <div className="dashboard-stats d-flex gap-3">
      <div className="stat-card bg-white p-3 shadow-sm rounded">
        <h3 className="h6 text-muted">Total Sales</h3>
        <p className="h4 mb-0">$0.00</p>
      </div>
      <div className="stat-card bg-white p-3 shadow-sm rounded">
        <h3 className="h6 text-muted">Orders</h3>
        <p className="h4 mb-0">0</p>
      </div>
      <div className="stat-card bg-white p-3 shadow-sm rounded">
        <h3 className="h6 text-muted">Products</h3>
        <p className="h4 mb-0">0</p>
      </div>
    </div>
  );
};

export default DashboardStats;
