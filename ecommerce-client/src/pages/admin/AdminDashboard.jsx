import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 156, totalRevenue: 45230, totalCustomers: 1245, totalProducts: 342, pendingOrders: 23, lowStock: 12
  });

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: 245.99, status: 'pending', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: 189.50, status: 'processing', date: '2024-01-14' },
  ];

  return (
    <div><h1 className="text-3xl font-light mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6"><div className="text-gray-500 text-sm">Total Orders</div><div className="text-3xl font-semibold">{stats.totalOrders}</div></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><div className="text-gray-500 text-sm">Revenue</div><div className="text-3xl font-semibold">${stats.totalRevenue.toLocaleString()}</div></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><div className="text-gray-500 text-sm">Customers</div><div className="text-3xl font-semibold">{stats.totalCustomers}</div></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><div className="text-gray-500 text-sm">Products</div><div className="text-3xl font-semibold">{stats.totalProducts}</div></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><div className="text-gray-500 text-sm">Pending Orders</div><div className="text-3xl font-semibold text-yellow-600">{stats.pendingOrders}</div></div>
      </div>
      <div className="bg-white rounded-lg shadow-sm"><div className="p-6 border-b"><h2 className="text-xl font-semibold">Recent Orders</h2></div>
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left">Order ID</th><th className="px-6 py-3 text-left">Customer</th><th className="px-6 py-3 text-left">Amount</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Date</th><th className="px-6 py-3 text-left">Action</th></tr></thead>
        <tbody>{recentOrders.map(order => (<tr key={order.id} className="border-b"><td className="px-6 py-4">{order.id}</td><td className="px-6 py-4">{order.customer}</td><td className="px-6 py-4">${order.amount}</td><td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded-full ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{order.status}</span></td><td className="px-6 py-4">{order.date}</td><td className="px-6 py-4"><Link to={`/admin/orders/${order.id}`} className="text-blue-600">View</Link></td></tr>))}</tbody></table>
      </div>
    </div>
  );
};

export default AdminDashboard;