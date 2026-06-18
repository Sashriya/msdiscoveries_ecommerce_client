import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import SearchBar from '../common/SearchBar';
import MobileMenu from '../common/MobileMenu';
import Logo from '../../assets/KOUR_Customizable_Logo_page-0002.png'
import Logo2 from '../../assets/KOUR_Customizable_Logo_page-0003.png'

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);

  // Navigation links - second row, Quince style
  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Trending Now', href: '/trending-now' },
  ];

  const contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'support@thekour.com',
    hours: 'Mon-Fri, 9am-6pm EST'
  };

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('isAuthenticated') === 'true';
      setIsAuthenticated(authStatus);
      if (authStatus) {
        const name = localStorage.getItem('userName') || 'User';
        const email = localStorage.getItem('userEmail') || 'user@example.com';
        setUserName(name);
        setUserEmail(email);
      }
    };

    // Get wishlist count from localStorage
    const getWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };

    checkAuth();
    getWishlistCount();

    window.addEventListener('storage', checkAuth);
    window.addEventListener('storage', getWishlistCount);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('storage', getWishlistCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-[11px] font-light tracking-wider">
        <p>FREE SHIPPING ON ORDERS $150+ • SPRING SALE LIVE</p>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Row 1: Logo, Search, Account / Wishlist / Cart / Region */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-3">
            {/* Mobile Menu Button + Logo */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <img src={Logo2} alt="Kour mark" className="h-6 w-auto object-contain" />
                <img src={Logo} alt="TheKour" className="h-10 w-auto object-contain" />
              </Link>
            </div>

            {/* Inline Search Bar - desktop/tablet */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex flex-1 justify-end"
            >
              <div className="relative w-full max-w-xs lg:max-w-sm">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full bg-gray-100 rounded-md py-2.5 pl-4 pr-12 text-sm font-light placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute right-0 top-0 h-full w-11 rounded-r-md bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Right Side Icons */}
            <div className="flex items-center">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Sign In / Account */}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-800"
                  aria-label="Sign In"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="hidden lg:inline text-sm font-light">Sign In</span>
                </Link>
              ) : (
                <div className="relative group">
                  <button className="flex items-center gap-1.5 p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <div className="absolute right-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] mt-2">
                    <div className="p-4 border-b">
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
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">Profile</Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">Orders</Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">Wishlist</Link>
                    </div>
                    <div className="border-t py-2">
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm font-light text-red-600 hover:bg-gray-100">Sign Out</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-light">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart - shopping bag icon */}
              <Link to="/cart" className="relative p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Cart">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 7V6a3 3 0 016 0v1M3.5 7h13l-1 13H4.5l-1-13z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-light">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Region Selector */}
              <button
                className="hidden lg:flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-800"
                aria-label="Region: United States"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
                </svg>
                <span className="text-sm font-light">US</span>
              </button>
            </div>
          </div>

          {/* Mobile Search Dropdown */}
          {isSearchOpen && (
            <div className="md:hidden mt-3">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
            </div>
          )}
        </div>

        {/* Row 2: Category Links */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-7 py-3 overflow-x-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-light tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isAuthenticated={isAuthenticated}
        userName={userName}
        userEmail={userEmail}
        onLogout={handleLogout}
        contactInfo={contactInfo}
        wishlistCount={wishlistCount}
      />
    </>
  );
};

export default Navbar;