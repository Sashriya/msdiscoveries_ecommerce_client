import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-8">Shipping Information</h1>
        <div className="bg-blue-50 p-6 rounded-2xl text-center mb-8"><p className="text-blue-800">🚚 Free shipping on all orders over </p></div>
        <div className="space-y-4"><div className="border rounded-xl p-4 flex justify-between"><div><span className="font-semibold">Standard Shipping</span><p className="text-sm text-gray-500">3-5 business days</p></div><span>.99 or FREE on +</span></div><div className="border rounded-xl p-4 flex justify-between"><div><span className="font-semibold">Express Shipping</span><p className="text-sm text-gray-500">1-2 business days</p></div><span>.99</span></div><div className="border rounded-xl p-4 flex justify-between"><div><span className="font-semibold">Next Day Delivery</span><p className="text-sm text-gray-500">Order by 2pm EST</p></div><span>.99</span></div></div>
        <div className="mt-8"><h2 className="text-2xl font-light mb-3">Order Tracking</h2><p className="text-gray-600 mb-3">Once your order ships, you'll receive a tracking number via email.</p><Link to="/track-order" className="text-black underline">Track Your Order →</Link></div>
      </div>
    </div>
  );
};
export default ShippingPage;
