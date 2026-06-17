import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import SearchBar from '../common/SearchBar';
import MobileMenu from '../common/MobileMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Navigation links - Quince style
  const navLinks = [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Trending Now', href: '/trending-now' },
    { name: 'Shop', href: '/shop', hasDropdown: true },
  ];

  // Shop dropdown categories - Row wise product cards
  const shopCategories = {
    'SHOP BY CATEGORY': {
      items: [
        { name: 'All Products', href: '/shop', icon: '🛍️' },
        { name: 'Men', href: '/men', icon: '👔',
          subItems: ['T-Shirts', 'Shirts', 'Jeans', 'Trousers', 'Jackets', 'Shoes', 'Accessories'] },
        { name: 'Women', href: '/women', icon: '👗',
          subItems: ['Dresses', 'Tops', 'Skirts', 'Pants', 'Jackets', 'Shoes', 'Accessories'] },
        { name: 'Kids', href: '/kids', icon: '🧒',
          subItems: ['Boys', 'Girls', 'Infants', 'Shoes', 'Toys'] },
        { name: 'Accessories', href: '/accessories', icon: '💍' },
      ]
    },
    'COLLECTIONS': {
      items: [
        { name: 'Summer', href: '/collections/summer', icon: '☀️' },
        { name: 'Winter', href: '/collections/winter', icon: '❄️' },
        { name: 'Spring', href: '/collections/spring', icon: '🌸' },
        { name: 'Fall', href: '/collections/fall', icon: '🍂' },
        { name: 'Diwali', href: '/collections/diwali', icon: '🪔' },
        { name: 'Christmas', href: '/collections/christmas', icon: '🎄' },
        { name: 'Eid', href: '/collections/eid', icon: '🌙' },
        { name: 'Capsule', href: '/collections/capsule', icon: '💎' },
        { name: 'Designer', href: '/collections/designer', icon: '✨' },
        { name: 'Sustainable', href: '/collections/sustainable', icon: '🌱' },
        { name: 'Premium', href: '/collections/premium', icon: '👑' },
      ]
    },
    'OCCASION WEAR': {
      items: [
        { name: 'Wedding', href: '/occasion/wedding', icon: '💒' },
        { name: 'Party', href: '/occasion/party', icon: '🎉' },
        { name: 'Office', href: '/occasion/office', icon: '💼' },
        { name: 'Casual', href: '/occasion/casual', icon: '👕' },
        { name: 'Beach', href: '/occasion/beach', icon: '🏖️' },
      ]
    }
  };

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

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
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

  return (
    <>
      {/* Top Announcement Bar - Quince style */}
      <div className="bg-black text-white text-center py-2 text-sm font-light tracking-wider">
        <p>FREE SHIPPING ON ORDERS $150+ • SPRING SALE LIVE</p>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-md py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo - Clean font */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-light tracking-widest">
                THE<span className="font-semibold">KOUR</span>
              </h1>
            </Link>

            {/* Desktop Navigation Links - Clean font style */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowShopDropdown(true)}
                  onMouseLeave={() => {
                    setShowShopDropdown(false);
                    setActiveCategory(null);
                    setActiveSubmenu(null);
                  }}
                >
                  {link.hasDropdown ? (
                    <button
                      className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-light tracking-wide flex items-center gap-1"
                    >
                      {link.name}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-light tracking-wide flex items-center gap-1"
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Shop Dropdown - Row wise product cards */}
                  {link.hasDropdown && showShopDropdown && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[900px] max-w-[95vw] z-[100]">
                      <div className="bg-white shadow-xl rounded-xl border border-gray-100">
                        <div className="grid grid-cols-3 gap-0 p-6">
                          {Object.entries(shopCategories).map(([section, sectionData], sectionIdx) => (
                            <div key={section} className="border-r last:border-r-0 px-4">
                              <h3 className="font-light text-gray-900 mb-4 text-xs uppercase tracking-wider">
                                {section}
                              </h3>
                              <div className="space-y-1">
                                {sectionData.items.map((item, itemIdx) => (
                                  <div
                                    key={itemIdx}
                                    className="relative"
                                    onMouseEnter={() => {
                                      setActiveCategory(`${sectionIdx}-${itemIdx}`);
                                      setActiveSubmenu(null);
                                    }}
                                    onMouseLeave={() => setActiveCategory(null)}
                                  >
                                    {item.subItems ? (
                                      <>
                                        <div 
                                          className="flex items-center justify-between px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer rounded-md font-light"
                                          onMouseEnter={() => setActiveSubmenu(`${sectionIdx}-${itemIdx}`)}
                                          onMouseLeave={() => setActiveSubmenu(null)}
                                        >
                                          <span className="flex items-center gap-2">
                                            <span className="text-base">{item.icon}</span>
                                            {item.name}
                                          </span>
                                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                        {activeSubmenu === `${sectionIdx}-${itemIdx}` && (
                                          <div className="absolute left-full top-0 ml-1 w-44 bg-white shadow-lg rounded-lg z-[200] py-2">
                                            <div className="grid grid-cols-1 gap-0">
                                              {item.subItems.map((subItem, subIdx) => (
                                                <Link
                                                  key={subIdx}
                                                  to={item.href + '/' + subItem.toLowerCase().replace(/ /g, '-')}
                                                  className="px-4 py-2 text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                                                  onClick={() => setShowShopDropdown(false)}
                                                >
                                                  {subItem}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <Link
                                        to={item.href}
                                        className="flex items-center gap-2 px-2 py-2 text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-black rounded-md"
                                        onClick={() => setShowShopDropdown(false)}
                                      >
                                        <span className="text-base">{item.icon}</span>
                                        {item.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-6 py-3 border-t">
                          <Link
                            to="/shop"
                            className="flex items-center justify-between text-sm font-light text-black hover:underline"
                            onClick={() => setShowShopDropdown(false)}
                          >
                            <span>View All Products</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons - Clean style */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Contact Icon */}
              <Link
                to="/contact"
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Contact"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>

              {/* User Profile Icon */}
              {!isAuthenticated ? (
                <Link to="/login" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              ) : (
                <div className="relative group">
                  <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
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

              {/* Cart */}
              <Link to="/cart" className="relative p-2 rounded-md hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-light">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search Bar Dropdown */}
          {isSearchOpen && (
            <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t mt-0 p-4 z-[100]">
              <div className="max-w-7xl mx-auto">
                <SearchBar onClose={() => setIsSearchOpen(false)} />
              </div>
            </div>
          )}
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
        shopCategories={shopCategories}
      />
    </>
  );
};

export default Navbar;