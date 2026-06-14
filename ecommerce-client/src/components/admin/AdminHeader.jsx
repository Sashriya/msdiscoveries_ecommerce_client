import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <button onClick={() => setSidebarOpen(prev => !prev)} className="p-2 rounded-md hover:bg-gray-100">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin@THEKOUR</span>
        <button onClick={handleLogout} className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Logout</button>
      </div>
    </header>
  );
};

export default AdminHeader;