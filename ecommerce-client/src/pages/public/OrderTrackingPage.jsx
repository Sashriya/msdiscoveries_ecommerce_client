import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderTrackingPage = () => {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderId) { setError('Please enter an order number'); return; }
    navigate(/track-order/);
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl font-light text-center mb-8">Track Your Order</h1>
        <div className="bg-gray-50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="block text-sm font-medium mb-2">Order Number</label><input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="e.g., THEKOUR-XXXXXX" className="w-full px-4 py-3 border rounded-lg" required /></div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-medium">Track Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default OrderTrackingPage;
