import React from 'react';
import { Link } from 'react-router-dom';

const ReturnsPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-8">Returns & Exchanges</h1>
        <div className="bg-green-50 p-6 rounded-2xl mb-8 text-center"><p className="text-green-800">🎉 Easy 30-Day Returns • Free Shipping on Returns</p></div>
        <div className="space-y-6"><div><h2 className="text-2xl font-light mb-3">Return Policy</h2><p className="text-gray-600">We offer 30-day easy returns. Items must be unworn, unwashed, with original tags attached.</p></div><div><h2 className="text-2xl font-light mb-3">How to Return</h2><ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4"><li>Log into your account</li><li>Go to Order History</li><li>Select the item you want to return</li><li>Print return label and ship</li></ol></div><div className="bg-gray-50 p-6 rounded-2xl"><h3 className="font-semibold mb-2">Questions about returns?</h3><a href="mailto:returns@thekour.com" className="text-black underline">returns@thekour.com</a></div></div>
      </div>
    </div>
  );
};
export default ReturnsPage;
