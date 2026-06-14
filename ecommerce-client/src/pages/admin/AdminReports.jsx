import React from 'react';

const AdminReports = () => {
  return (
    <div><h1 className="text-3xl font-light mb-6">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="text-xl font-semibold mb-4">Sales Report</h2><p className="text-gray-600">Total Sales: $45,230</p><p className="text-gray-600">Orders: 156</p><p className="text-gray-600">Average Order Value: $290</p><button className="mt-4 text-blue-600">Download Report →</button></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="text-xl font-semibold mb-4">Top Products</h2><p className="text-gray-600">1. Classic Denim Jacket - 45 sold</p><p className="text-gray-600">2. Slim Fit Chinos - 32 sold</p><p className="text-gray-600">3. Oversized Blazer - 28 sold</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="text-xl font-semibold mb-4">Customer Insights</h2><p className="text-gray-600">Total Customers: 1,245</p><p className="text-gray-600">New this month: 89</p><p className="text-gray-600">Repeat customers: 67%</p></div>
        <div className="bg-white rounded-lg shadow-sm p-6"><h2 className="text-xl font-semibold mb-4">Inventory Status</h2><p className="text-gray-600">Low Stock Items: 12</p><p className="text-gray-600">Out of Stock: 5</p><p className="text-gray-600">Total Value: $34,560</p></div>
      </div>
    </div>
  );
};

export default AdminReports;