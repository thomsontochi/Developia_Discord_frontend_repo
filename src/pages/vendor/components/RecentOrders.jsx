import React from 'react';

const RecentOrders = () => {
  const orders = [
    { id: '#ORD-001', customer: 'John Doe', date: '2024-01-20', amount: '$150.00', status: 'Pending' },
    { id: '#ORD-002', customer: 'Jane Smith', date: '2024-01-19', amount: '$85.00', status: 'Completed' }
  ];

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-success text-white';
      case 'pending': return 'bg-warning text-dark';
      default: return 'bg-secondary text-white';
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white py-3 d-flex justify-content-between">
        <h5 className="mb-0">Recent Orders</h5>
        <button className="btn btn-outline-primary btn-sm">View All</button>
      </div>
      <div className="card-body">
        <table className="table table-hover">
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td><span className={`badge ${getStatusBadgeClass(order.status)}`}>{order.status}</span></td>
                <td><button className="btn btn-sm btn-light"><i className="fas fa-eye"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
