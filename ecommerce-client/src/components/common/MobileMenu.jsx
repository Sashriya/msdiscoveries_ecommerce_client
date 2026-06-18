// MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  navLinks, 
  isAuthenticated, 
  userName, 
  userEmail, 
  onLogout,
  contactInfo,
  wishlistCount = 0
}) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-light tracking-widest">MENU</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* User Info if authenticated */}
          {isAuthenticated && (
            <div className="p-4 border-b bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-light text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={onClose}
                  className="block py-3 text-gray-700 hover:text-black border-b border-gray-50 font-light tracking-wide text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Wishlist in mobile menu */}
            <div className="px-4 mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/wishlist"
                onClick={onClose}
                className="flex items-center justify-between py-3 text-gray-700 hover:text-black font-light tracking-wide text-sm"
              >
                <span>Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Contact Info */}
            {contactInfo && (
              <div className="px-4 mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Contact</p>
                <p className="text-sm text-gray-600 font-light">{contactInfo.phone}</p>
                <p className="text-sm text-gray-600 font-light">{contactInfo.email}</p>
                <p className="text-xs text-gray-400 mt-1">{contactInfo.hours}</p>
              </div>
            )}

            {/* Auth Links */}
            <div className="px-4 mt-4 pt-4 border-t border-gray-100">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/login"
                    onClick={onClose}
                    className="block py-3 text-gray-700 hover:text-black font-light tracking-wide text-sm"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={onClose}
                    className="block py-3 text-gray-700 hover:text-black font-light tracking-wide text-sm"
                  >
                    Create Account
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/profile"
                    onClick={onClose}
                    className="block py-3 text-gray-700 hover:text-black font-light tracking-wide text-sm"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={onClose}
                    className="block py-3 text-gray-700 hover:text-black font-light tracking-wide text-sm"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="block w-full text-left py-3 text-red-600 hover:text-red-700 font-light tracking-wide text-sm"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;