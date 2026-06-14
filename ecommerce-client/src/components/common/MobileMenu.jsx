import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, navLinks, isAuthenticated, userName, userEmail, onLogout, contactInfo }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 shadow-xl transform transition-transform duration-300 overflow-y-auto">
        <div className="p-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b">
            <h2 className="text-xl font-light">THE<span className="font-semibold">KOUR</span></h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Auth Section for Mobile */}
          {!isAuthenticated ? (
            <div className="mb-6 space-y-3">
              <Link
                to="/register"
                onClick={onClose}
                className="block w-full text-center px-4 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={onClose}
                className="block w-full text-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Login
              </Link>
            </div>
          ) : (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="mt-2 text-sm text-red-600 hover:text-red-700 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </button>
            </div>
          )}

          {/* Navigation Links */}
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={onClose}
                className="block py-2 text-gray-700 hover:text-black transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info Section */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </h3>
            <div className="space-y-2 text-sm">
              <a href="tel:+15551234567" className="block text-gray-600 hover:text-black">
                📞 {contactInfo?.phone || '+1 (555) 123-4567'}
              </a>
              <a href="mailto:support@thekour.com" className="block text-gray-600 hover:text-black">
                ✉️ {contactInfo?.email || 'support@thekour.com'}
              </a>
              <p className="text-gray-500 text-xs">
                🕒 {contactInfo?.hours || 'Mon-Fri, 9am-6pm EST'}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Account Links */}
          <div className="space-y-3">
            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-gray-700 hover:text-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>My Profile</span>
            </Link>
            <Link
              to="/orders"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-gray-700 hover:text-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>My Orders</span>
            </Link>
            <Link
              to="/wishlist"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-gray-700 hover:text-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Wishlist</span>
            </Link>
            <Link
              to="/address-book"
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-gray-700 hover:text-black"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Address Book</span>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold mb-3">Need Help?</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-sm text-gray-600 hover:text-black">
                Customer Service
              </Link>
              <Link to="/returns" className="block text-sm text-gray-600 hover:text-black">
                Returns & Exchanges
              </Link>
              <Link to="/shipping" className="block text-sm text-gray-600 hover:text-black">
                Shipping Info
              </Link>
              <Link to="/contact" className="block text-sm text-gray-600 hover:text-black">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;