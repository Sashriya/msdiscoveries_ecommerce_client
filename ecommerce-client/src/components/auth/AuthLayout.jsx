import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo - Updated to THEKOUR */}
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-light tracking-wider">
              THE<span className="font-semibold">KOUR</span>
            </h1>
          </Link>
        </div>

        {/* Header */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-light text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

        {/* Form Container */}
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;