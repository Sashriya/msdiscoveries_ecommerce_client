import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const Header = () => {
  const navigate = useNavigate();
  const { cartCount, toggleCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Sale', href: '/sale' },
    { name: 'Collections', href: '/collections' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>Free shipping on orders over $75 • Free returns • 30-day guarantee</p>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-light tracking-wider">
                THE<span className="font-semibold">KOUR</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Auth Links */}
              {!isAuthenticated ? (
                <div className="hidden md:flex items-center space-x-3">
                  <Link to="/register" className="px-4 py-2 text-sm font-medium text-black hover:text-gray-600">
                    Register
                  </Link>
                  <Link to="/login" className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  <span className="text-sm text-gray-600">
                    Hi, <span className="font-semibold text-black">{localStorage.getItem('userName')?.split(' ')[0] || 'User'}</span>
                  </span>
                  <button onClick={handleLogout} className="text-sm text-red-600 hover:text-red-700">
                    Logout
                  </button>
                </div>
              )}

              {/* Wishlist */}
              <Link to="/wishlist" className="hidden md:block p-2 rounded-md hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>

              {/* Cart */}
              <button onClick={toggleCart} className="relative p-2 rounded-md hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
          <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                autoFocus
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 left-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-8 pb-4 border-b">
                <h2 className="text-xl font-light">THE<span className="font-semibold">KOUR</span></h2>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-black font-medium">
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Link to="/account" className="block py-2 text-gray-700 hover:text-black">My Account</Link>
                <Link to="/orders" className="block py-2 text-gray-700 hover:text-black">My Orders</Link>
                <Link to="/wishlist" className="block py-2 text-gray-700 hover:text-black">Wishlist</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;