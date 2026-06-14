import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20"><div className="text-center"><div className="mb-8"><svg className="w-32 h-32 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h1 className="text-6xl font-light mb-4">404</h1><h2 className="text-2xl font-light mb-4">Page Not Found</h2><p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p><div className="flex gap-4 justify-center"><Link to="/" className="px-6 py-3 bg-black text-white rounded-lg">Go Home</Link><Link to="/shop" className="px-6 py-3 border-2 border-black rounded-lg hover:bg-black hover:text-white">Shop Now</Link></div></div></div>
  );
};
export default NotFoundPage;
