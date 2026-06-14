import React, { useState } from 'react';

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5, totalSpent: 1245.99, status: 'active', joined: '2024-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3, totalSpent: 789.50, status: 'active', joined: '2024-01-05' },
  ]);

  const toggleStatus = (id) => { setCustomers(customers.map(c => c.id === id ? { ...c, status: c.status === 'active' ? 'blocked' : 'active' } : c)); };

  return (
    <div><h1 className="text-3xl font-light mb-6">Customers</h1>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full"><thead className="bg-gray-50"><tr><th className="px-6 py-3 text-left">Customer</th><th className="px-6 py-3 text-left">Email</th><th className="px-6 py-3 text-left">Orders</th><th className="px-6 py-3 text-left">Total Spent</th><th className="px-6 py-3 text-left">Status</th><th className="px-6 py-3 text-left">Joined</th><th className="px-6 py-3 text-left">Action</th></tr></thead>
        <tbody>{customers.map(customer => (<tr key={customer.id} className="border-b"><td className="px-6 py-4">{customer.name}</td><td className="px-6 py-4">{customer.email}</td><td className="px-6 py-4">{customer.orders}</td><td className="px-6 py-4">${customer.totalSpent}</td><td className="px-6 py-4"><span className={`px-2 py-1 text-xs rounded-full ${customer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{customer.status}</span></td><td className="px-6 py-4">{customer.joined}</td><td className="px-6 py-4"><button onClick={() => toggleStatus(customer.id)} className={customer.status === 'active' ? 'text-red-600' : 'text-green-600'}>{customer.status === 'active' ? 'Block' : 'Activate'}</button></td></tr>))}</tbody></table>
      </div>
    </div>
  );
};

export default AdminCustomers;