import React, { useState } from 'react';
import OrderStatusModal from '../../components/admin/OrderStatusModal';

const AdminOrders = () => {
  const [orders, setOrders] = useState([
    { id: 'ORD-001', customer: 'John Doe', amount: 245.99, status: 'pending', date: '2024-01-15', items: 3 },
    { id: 'ORD-002', customer: 'Jane Smith', amount: 189.50, status: 'processing', date: '2024-01-14', items: 2 },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const updateOrderStatus = (orderId, newStatus) => { setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order)); };

  return (
    <div><h1 className="text-3xl font-light mb-6">Orders</h1>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left">Order ID</th><th className="px-6 py-3 text-left">Customer</th><th className="px-6 py-3 text-left">Amount</th><th className="px-6 py-3 text-left">Items</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Date</th><th className="px-6 py-3 text-left">Action</th></tr></thead>
        <tbody>{orders.map(order => (<tr key={order.id} className="border-b"><td className="px-6 py-4">{order.id}</td><td className="px-6 py-4">{order.customer}</td><td className="px-6 py-4">${order.amount}</td><td className="px-6 py-4">{order.items}</td><td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded-full ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : order.status === 'processing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>{order.status}</span></td><td className="px-6 py-4">{order.date}</td><td className="px-6 py-4"><button onClick={() => setSelectedOrder(order)} className="text-blue-600">Update</button></td></tr>))}</tbody></table>
      </div>
      {selectedOrder && <OrderStatusModal order={selectedOrder} onClose={() => setSelectedOrder(null)} onUpdate={updateOrderStatus} />}
    </div>
  );
};

export default AdminOrders;