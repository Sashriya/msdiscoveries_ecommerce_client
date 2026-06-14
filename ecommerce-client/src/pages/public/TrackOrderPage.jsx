import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const TrackOrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('thekour_orders') || '[]');
    const foundOrder = orders.find(o => o.orderId === orderId);
    setOrder(foundOrder || null);
    setIsLoading(false);
  }, [orderId]);

  if (isLoading) return <Loader />;
  if (!order) return <div className="min-h-screen py-12 text-center"><h1 className="text-4xl font-light">Order Not Found</h1><Link to="/orders" className="text-black underline mt-4 inline-block">View My Orders</Link></div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12"><div className="max-w-4xl mx-auto px-4"><div className="text-center mb-8"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><h1 className="text-3xl font-light">Order Confirmed!</h1><p className="text-gray-500">Order #{order.orderId}</p></div><div className="bg-white rounded-lg p-6 mb-6"><div className="grid grid-cols-2 md:grid-cols-4 gap-4"><div><p className="text-sm text-gray-500">Order Date</p><p>{new Date(order.orderDate).toLocaleDateString()}</p></div><div><p className="text-sm text-gray-500">Total Amount</p><p className="font-semibold">\</p></div><div><p className="text-sm text-gray-500">Status</p><span className="inline-block px-3 py-1 rounded-full text-xs text-white bg-green-500">{order.status}</span></div></div></div><div className="bg-white rounded-lg p-6 mb-6"><h2 className="font-semibold mb-4">Order Items</h2>{order.items?.map((item, idx) => (<div key={idx} className="flex justify-between py-3 border-b"><div><p className="font-medium">{item.name}</p><p className="text-xs text-gray-500">Qty: {item.quantity}</p></div><p className="font-semibold">\</p></div>))}</div><div className="flex gap-4 justify-center"><Link to="/orders" className="px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white">View All Orders</Link><Link to="/shop" className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">Continue Shopping</Link></div></div></div>
  );
};
export default TrackOrderPage;
