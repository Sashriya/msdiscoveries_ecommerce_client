import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin', icon: '📊', name: 'Dashboard' },
    { path: '/admin/products', icon: '📦', name: 'Products' },
    { path: '/admin/orders', icon: '🛒', name: 'Orders' },
    { path: '/admin/customers', icon: '👥', name: 'Customers' },
    { path: '/admin/coupons', icon: '🏷️', name: 'Coupons' },
    { path: '/admin/reports', icon: '📈', name: 'Reports' },
    { path: '/admin/settings', icon: '⚙️', name: 'Settings' },
  ];

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 border-b border-gray-800">
        <h1 className={`${sidebarOpen ? 'text-xl' : 'text-center'} font-light`}>
          {sidebarOpen ? 'THEKOUR Admin' : 'TK'}
        </h1>
      </div>
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={`flex items-center px-4 py-3 hover:bg-gray-800 transition-colors ${location.pathname === item.path ? 'bg-gray-800 border-l-4 border-white' : ''}`}>
            <span className="text-xl">{item.icon}</span>
            {sidebarOpen && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;