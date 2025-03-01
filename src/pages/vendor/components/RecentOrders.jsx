import React from 'react';

const RecentOrders = () => {
  // Sample data - replace with actual data from API
  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      date: '2024-01-20',
      amount: '$150.00',
      status: 'Pending'
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      date: '2024-01-19',
      amount: '$85.00',
      status: 'Completed'
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return 'bg-success';
      case 'pending':
        return 'bg-warning';
      case 'cancelled':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Recent Orders</h5>
        <button className="btn btn-link btn-sm text-decoration-none">
          View All
        </button>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.date}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-link">
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <div className="text-muted">
                      <i className="fas fa-shopping-cart mb-2 fs-3"></i>
                      <p className="mb-0">No orders yet</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;