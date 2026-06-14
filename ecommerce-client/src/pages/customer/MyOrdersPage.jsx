import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const MyOrdersPage = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (!isAuthenticated) { navigate('/login'); return; }
        const savedOrders = JSON.parse(localStorage.getItem('thekour_orders') || '[]');
        setOrders(savedOrders);
        setIsLoading(false);
    }, [navigate]);

    if (isLoading) return <Loader />;
    return (
        <div className="bg-gray-50 min-h-screen py-12"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-light mb-8">My Orders</h1>{orders.length === 0 ? (<div className="bg-white rounded-lg p-12 text-center"><svg className="w-20 h-20 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg><h2 className="text-2xl font-light mb-2">No orders yet</h2><Link to="/shop" className="inline-block bg-black text-white px-8 py-3 rounded-lg">Start Shopping</Link></div>) : (<div className="space-y-6">{orders.map(order => (<div key={order.orderId} className="bg-white rounded-lg shadow-sm overflow-hidden"><div className="bg-gray-50 p-4 border-b flex justify-between"><div><p className="text-sm text-gray-500">Order #{order.orderId}</p><p className="text-sm text-gray-500">{new Date(order.orderDate).toLocaleDateString()}</p></div><Link to={/track-order/} className="text-sm text-black border border-black px-4 py-1 rounded-full">Track Order</Link></div><div className="p-4"><div className="flex gap-4 overflow-x-auto pb-2">{order.items?.slice(0, 2).map((item, idx) => (<div key={idx} className="flex items-center gap-3"><img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" /><div><p className="font-medium text-sm">{item.name}</p><p className="text-xs text-gray-500">Qty: {item.quantity}</p></div></div>))}</div><div className="flex justify-between items-center mt-4 pt-4 border-t"><div className="text-lg font-semibold">Total: </div></div></div></div>))}</div>)}</div></div>
    );
};

export default MyOrdersPage;
