import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setUser({
      name: localStorage.getItem('userName') || 'John Doe',
      email: localStorage.getItem('userEmail') || 'john@example.com',
      joined: 'January 2024'
    });
    setIsLoading(false);
  }, [navigate]);

  if (isLoading) return <Loader />;

  const getButtonClass = (tabName) => {
    return 'w-full text-left px-4 py-3 rounded-lg ' + (activeTab === tabName ? 'bg-black text-white' : 'hover:bg-gray-100');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-light mb-8">My Account</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 text-center border-b">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-semibold">
                  {user?.name?.charAt(0)}
                </div>
                <h3 className="font-semibold">{user?.name}</h3>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
              <div className="p-4 space-y-1">
                <button onClick={() => setActiveTab('dashboard')} className={getButtonClass('dashboard')}>Dashboard</button>
                <button onClick={() => setActiveTab('orders')} className={getButtonClass('orders')}>My Orders</button>
                <button onClick={() => setActiveTab('profile')} className={getButtonClass('profile')}>Profile Info</button>
                <button onClick={() => setActiveTab('address')} className={getButtonClass('address')}>Address Book</button>
                <Link to="/wishlist" className="block w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100">Wishlist</Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-6">
                <h2 className="text-2xl font-light mb-2">Welcome back, {user?.name}!</h2>
              </div>
            )}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
                <div className="space-y-3">
                  <div><label className="block text-sm font-medium text-gray-700">Full Name</label><p className="mt-1">{user?.name}</p></div>
                  <div><label className="block text-sm font-medium text-gray-700">Email</label><p className="mt-1">{user?.email}</p></div>
                  <div><label className="block text-sm font-medium text-gray-700">Member Since</label><p className="mt-1">{user?.joined}</p></div>
                </div>
              </div>
            )}
            {activeTab === 'address' && (
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Saved Addresses</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Home</p>
                      <p className="text-gray-600 text-sm mt-1">123 Fashion Street<br />New York, NY 10001<br />United States</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Default</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;