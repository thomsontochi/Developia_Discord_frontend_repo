import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Sample data - would be replaced with actual user data
  const recentOrders = [];
  
  return (
    <div className="user-dashboard py-4 bg-light">
      <div className="container">
        {/* Welcome Hero Section - Enhanced with gradient background */}
        <div className="hero-section rounded-4 bg-gradient-primary p-4 mb-5 position-relative overflow-hidden">
          <div className="row justify-content-between align-items-center position-relative z-2">
            <div className="col-lg-7">
              <div className="intro-excerpt text-white">
                <h1 className="fw-bold display-5">Welcome back, {user?.first_name || 'User'}!</h1>
                <p className="mb-4 opacity-75 lead">Manage your orders and account settings here.</p>
                <div className="d-flex gap-3">
                  <a href="/shop" className="btn btn-light px-4 py-2">
                    <i className="fas fa-shopping-cart me-2"></i>
                    Shop Now
                  </a>
                  <a href="/orders" className="btn btn-outline-light px-4 py-2">
                    <i className="fas fa-history me-2"></i>
                    View History
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="text-end">
                <i className="fas fa-user-circle fa-6x text-white opacity-25"></i>
              </div>
            </div>
          </div>
          <div className="hero-shapes position-absolute">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
          </div>
        </div>

        {/* Quick Stats - Enhanced with improved cards */}
        <div className="row mb-5 g-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-card p-4 rounded-4 bg-white shadow-sm h-100 position-relative overflow-hidden">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="icon rounded-3 bg-primary bg-opacity-10 p-3">
                  <i className="fas fa-shopping-bag fa-lg text-primary"></i>
                </div>
                <span className="badge bg-primary-subtle text-primary small">All Time</span>
              </div>
              <h3 className="stat-label text-secondary mb-1 fs-6 fw-normal">Total Orders</h3>
              <p className="mb-0 h2 fw-bold">0</p>
              <div className="d-flex align-items-center mt-2">
                <span className="text-success small me-2">
                  <i className="fas fa-arrow-up me-1"></i>0%
                </span>
                <span className="text-secondary small">vs last month</span>
              </div>
              <div className="stat-shape position-absolute"></div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card p-4 rounded-4 bg-white shadow-sm h-100 position-relative overflow-hidden">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="icon rounded-3 bg-danger bg-opacity-10 p-3">
                  <i className="fas fa-heart fa-lg text-danger"></i>
                </div>
                <span className="badge bg-danger-subtle text-danger small">Saved</span>
              </div>
              <h3 className="stat-label text-secondary mb-1 fs-6 fw-normal">Wishlist Items</h3>
              <p className="mb-0 h2 fw-bold">0</p>
              <div className="d-flex align-items-center mt-2">
                <span className="text-success small me-2">
                  <i className="fas fa-arrow-up me-1"></i>0%
                </span>
                <span className="text-secondary small">vs last month</span>
              </div>
              <div className="stat-shape position-absolute"></div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card p-4 rounded-4 bg-white shadow-sm h-100 position-relative overflow-hidden">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="icon rounded-3 bg-warning bg-opacity-10 p-3">
                  <i className="fas fa-box fa-lg text-warning"></i>
                </div>
                <span className="badge bg-warning-subtle text-warning small">In Process</span>
              </div>
              <h3 className="stat-label text-secondary mb-1 fs-6 fw-normal">Pending Orders</h3>
              <p className="mb-0 h2 fw-bold">0</p>
              <div className="d-flex align-items-center mt-2">
                <span className="text-success small me-2">
                  <i className="fas fa-arrow-up me-1"></i>0%
                </span>
                <span className="text-secondary small">vs last month</span>
              </div>
              <div className="stat-shape position-absolute"></div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-card p-4 rounded-4 bg-white shadow-sm h-100 position-relative overflow-hidden">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="icon rounded-3 bg-success bg-opacity-10 p-3">
                  <i className="fas fa-truck fa-lg text-success"></i>
                </div>
                <span className="badge bg-success-subtle text-success small">Completed</span>
              </div>
              <h3 className="stat-label text-secondary mb-1 fs-6 fw-normal">Delivered Orders</h3>
              <p className="mb-0 h2 fw-bold">0</p>
              <div className="d-flex align-items-center mt-2">
                <span className="text-success small me-2">
                  <i className="fas fa-arrow-up me-1"></i>0%
                </span>
                <span className="text-secondary small">vs last month</span>
              </div>
              <div className="stat-shape position-absolute"></div>
            </div>
          </div>
        </div>

        {/* Recent Orders and Quick Actions */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 rounded-4 shadow-sm">
              <div className="card-header bg-white py-3 border-0 d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Recent Orders</h5>
                <div className="dropdown">
                  <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    All Orders
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                    <li><a className="dropdown-item" href="#">All Orders</a></li>
                    <li><a className="dropdown-item" href="#">Pending</a></li>
                    <li><a className="dropdown-item" href="#">Delivered</a></li>
                    <li><a className="dropdown-item" href="#">Cancelled</a></li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                {recentOrders.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Order ID</th>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Order rows would go here */}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <div className="empty-state-icon bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center">
                      <i className="fas fa-shopping-cart fa-2x text-primary"></i>
                    </div>
                    <h5 className="fw-bold">No orders yet</h5>
                    <p className="text-muted mb-4">Your order history will appear here once you make a purchase</p>
                    <a href="/shop" className="btn btn-primary px-4 py-2">
                      <i className="fas fa-shopping-cart me-2"></i>
                      Start Shopping
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-12">
                <div className="card border-0 rounded-4 shadow-sm">
                  <div className="card-header bg-white py-3 border-0">
                    <h5 className="mb-0 fw-bold">Quick Actions</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-grid gap-3">
                      <a href="/profile" className="btn btn-outline-primary d-flex align-items-center justify-content-between">
                        <span><i className="fas fa-user me-2"></i> Edit Profile</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                      <a href="/orders" className="btn btn-outline-primary d-flex align-items-center justify-content-between">
                        <span><i className="fas fa-shopping-bag me-2"></i> View Orders</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                      <a href="/wishlist" className="btn btn-outline-primary d-flex align-items-center justify-content-between">
                        <span><i className="fas fa-heart me-2"></i> My Wishlist</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                      <a href="/addresses" className="btn btn-outline-primary d-flex align-items-center justify-content-between">
                        <span><i className="fas fa-map-marker-alt me-2"></i> Manage Addresses</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="card border-0 rounded-4 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon rounded-3 bg-info bg-opacity-10 p-3 me-3">
                        <i className="fas fa-headset fa-lg text-info"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-0">Need Help?</h5>
                        <p className="mb-0 text-muted small">Contact our support team</p>
                      </div>
                    </div>
                    <a href="/support" className="btn btn-primary w-100">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #4a6cf7 0%, #2146c7 100%);
        }
        
        .hero-section {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        .hero-shapes .shape-1,
        .hero-shapes .shape-2,
        .hero-shapes .shape-3 {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
        }
        
        .hero-shapes .shape-1 {
          width: 150px;
          height: 150px;
          top: -50px;
          right: -50px;
        }
        
        .hero-shapes .shape-2 {
          width: 100px;
          height: 100px;
          bottom: -30px;
          right: 10%;
        }
        
        .hero-shapes .shape-3 {
          width: 50px;
          height: 50px;
          bottom: 50px;
          left: 10%;
        }
        
        .stats-card {
          transition: all 0.3s ease;
        }
        
        .stats-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
        }
        
        .icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-shape {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(var(--bs-primary-rgb), 0.03);
          bottom: -75px;
          right: -75px;
        }
        
        .empty-state-icon {
          width: 80px;
          height: 80px;
        }
      `}</style>
      
    </div>
  );
};

export default Dashboard;