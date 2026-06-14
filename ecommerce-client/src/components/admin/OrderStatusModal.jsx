import React, { useState } from 'react';

const OrderStatusModal = ({ order, onClose, onUpdate }) => {
  const [status, setStatus] = useState(order.status);

  const handleUpdate = () => {
    onUpdate(order.id, status);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Update Order Status</h2>
        <p className="text-gray-600 mb-4">Order: {order.id}</p>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-4 py-2 border rounded-lg mb-4">
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <div className="flex gap-3"><button onClick={handleUpdate} className="flex-1 bg-black text-white py-2 rounded-lg">Update</button><button onClick={onClose} className="flex-1 border py-2 rounded-lg">Cancel</button></div>
      </div>
    </div>
  );
};

export default OrderStatusModal;