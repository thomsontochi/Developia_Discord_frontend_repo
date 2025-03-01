import React from 'react';

const StoreOverview = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white py-3">
        <h5 className="mb-0">Store Overview</h5>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="stat-item">
              <h6 className="text-muted mb-1">Total Products</h6>
              <h3 className="mb-0">0</h3>
              <small className="text-success">
                <i className="fas fa-arrow-up me-1"></i>
                0% from last month
              </small>
            </div>
          </div>
          <div className="col-md-6">
            <div className="stat-item">
              <h6 className="text-muted mb-1">Total Revenue</h6>
              <h3 className="mb-0">$0.00</h3>
              <small className="text-success">
                <i className="fas fa-arrow-up me-1"></i>
                0% from last month
              </small>
            </div>
          </div>
          <div className="col-12">
            <hr />
            <h6 className="mb-3">Quick Actions</h6>
            <div className="d-flex gap-2">
              <button className="btn btn-primary btn-sm">
                <i className="fas fa-plus me-1"></i>
                Add Product
              </button>
              <button className="btn btn-outline-primary btn-sm">
                <i className="fas fa-cog me-1"></i>
                Store Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreOverview;