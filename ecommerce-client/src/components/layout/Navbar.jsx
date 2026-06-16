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
  const [showCatalogDropdown, setShowCatalogDropdown] = useState(false);
  const [activeParent, setActiveParent] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Catalog', href: '/shop', hasDropdown: true },
    { name: 'Blog', href: '/blog' },
  ];

  const catalogDropdownItems = {
    'SHOP BY CATEGORY': {
      icon: '🛍️',
      items: [
        { name: 'All Products', href: '/shop' },
        {
          name: 'Men',
          href: '/men',
          subItems: [
            { name: 'T-Shirts', href: '/men/tshirts' },
            { name: 'Shirts', href: '/men/shirts' },
            { name: 'Jeans', href: '/men/jeans' },
            { name: 'Trousers', href: '/men/trousers' },
            { name: 'Jackets', href: '/men/jackets' },
            { name: 'Shoes', href: '/men/shoes' },
            { name: 'Accessories', href: '/men/accessories' },
          ]
        },
        {
          name: 'Women',
          href: '/women',
          subItems: [
            { name: 'Dresses', href: '/women/dresses' },
            { name: 'Tops', href: '/women/tops' },
            { name: 'Skirts', href: '/women/skirts' },
            { name: 'Pants', href: '/women/pants' },
            { name: 'Jackets', href: '/women/jackets' },
            { name: 'Shoes', href: '/women/shoes' },
            { name: 'Accessories', href: '/women/accessories' },
          ]
        },
        {
          name: 'Kids',
          href: '/kids',
          subItems: [
            { name: 'Boys', href: '/kids/boys' },
            { name: 'Girls', href: '/kids/girls' },
            { name: 'Infants', href: '/kids/infants' },
            { name: 'Shoes', href: '/kids/shoes' },
            { name: 'Toys', href: '/kids/toys' },
          ]
        },
        { name: 'Accessories', href: '/accessories' },
      ]
    },
    'TRENDING': {
      icon: '🔥',
      items: [
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Best Sellers', href: '/best-sellers' },
        { name: 'Trending Now', href: '/trending' },
        { name: 'Limited Edition', href: '/limited-edition' },
        {
          name: 'Occasion Wear',
          href: '#',
          subItems: [
            { name: 'Wedding', href: '/occasion/wedding' },
            { name: 'Party', href: '/occasion/party' },
            { name: 'Office', href: '/occasion/office' },
            { name: 'Casual', href: '/occasion/casual' },
            { name: 'Beach', href: '/occasion/beach' },
          ]
        },
      ]
    },
    'COLLECTIONS': {
      icon: '📦',
      items: [
        {
          name: 'Seasonal',
          href: '#',
          subItems: [
            { name: 'Summer', href: '/collections/summer' },
            { name: 'Winter', href: '/collections/winter' },
            { name: 'Spring', href: '/collections/spring' },
            { name: 'Fall', href: '/collections/fall' },
          ]
        },
        {
          name: 'Festival',
          href: '#',
          subItems: [
            { name: 'Diwali', href: '/collections/diwali' },
            { name: 'Christmas', href: '/collections/christmas' },
            { name: 'Eid', href: '/collections/eid' },
            { name: 'New Year', href: '/collections/newyear' },
          ]
        },
        {
          name: 'Special',
          href: '#',
          subItems: [
            { name: 'Capsule', href: '/collections/capsule' },
            { name: 'Designer', href: '/collections/designer' },
            { name: 'Sustainable', href: '/collections/sustainable' },
            { name: 'Premium', href: '/collections/premium' },
          ]
        },
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
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-sm font-light tracking-wide">
        <p>FREE SHIPPING ON ORDERS $150+ • SPRING SALE LIVE</p>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3'
            : 'bg-white/95 backdrop-blur-md py-5'
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-extralight tracking-wider">
                THE<span className="font-medium">KOUR</span>
              </h1>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowCatalogDropdown(true)}
                  onMouseLeave={() => {
                    setShowCatalogDropdown(false);
                    setActiveParent(null);
                  }}
                >
                  <Link
                    to={link.href}
                    className="text-gray-700 hover:text-black transition-colors duration-200 text-sm font-light tracking-wide flex items-center gap-1"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Catalog Dropdown Menu */}
                  {link.hasDropdown && showCatalogDropdown && (
                    <div className="absolute left-1/2 -translate-x-[60%] top-full pt-2 w-[750px] max-w-[95vw] z-[100]">
                      <div className="bg-white shadow-xl rounded-xl border border-gray-100">
                        <div className="grid grid-cols-3 gap-0">
                          {Object.entries(catalogDropdownItems).map(([section, sectionData], sectionIdx) => (
                            <div key={section} className="border-r last:border-r-0">
                              <div className="p-5">
                                <h3 className="font-medium text-gray-900 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                                  <span className="text-lg">{sectionData.icon}</span>
                                  {section}
                                </h3>
                                <div className="space-y-1">
                                  {sectionData.items.map((item, itemIdx) => (
                                    <div
                                      key={itemIdx}
                                      className="relative"
                                      onMouseEnter={() => setActiveParent(`${sectionIdx}-${itemIdx}`)}
                                      onMouseLeave={() => setActiveParent(null)}
                                    >
                                      {item.subItems ? (
                                        <>
                                          <div className="flex items-center justify-between px-3 py-2 text-sm font-light text-gray-700 hover:bg-gray-50 cursor-pointer rounded-md">
                                            <span>{item.name}</span>
                                            <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                          </div>
                                          {/* Submenu */}
                                          {activeParent === `${sectionIdx}-${itemIdx}` && (
                                            <div
                                              className="absolute top-0 left-full -ml-8 w-48 bg-white shadow-lg rounded-lg z-[200] py-2"
                                              style={{ maxHeight: '280px', overflowY: 'auto' }}
                                            >
                                              <div className="px-3 pb-2 mb-1 border-b text-xs font-medium text-gray-900 uppercase tracking-wider">
                                                {item.name}
                                              </div>
                                              <div className="flex flex-col">
                                                {item.subItems.map((subItem, subIdx) => (
                                                  <Link
                                                    key={subIdx}
                                                    to={subItem.href}
                                                    className="px-4 py-2 text-sm font-light text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                                                    onClick={() => setShowCatalogDropdown(false)}
                                                  >
                                                    {subItem.name}
                                                  </Link>
                                                ))}
                                              </div>
                                            </div>
                                          )}
                                        </>
                                      ) : (
                                        <Link
                                          to={item.href}
                                          className="block px-3 py-2 text-sm font-light text-gray-700 hover:bg-gray-50 hover:text-black rounded-md"
                                          onClick={() => setShowCatalogDropdown(false)}
                                        >
                                          {item.name}
                                        </Link>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-6 py-3 border-t">
                          <Link
                            to="/shop"
                            className="flex items-center justify-between text-sm font-light text-black hover:underline"
                            onClick={() => setShowCatalogDropdown(false)}
                          >
                            <span>View All Products</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="Wishlist">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </Link>

              {/* Contact Us with Hover Phone Number */}
              <div className="relative group">
                <Link
                  to="/contact"
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
                  aria-label="Contact Us"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>

                {/* Hover Dropdown with Phone Number */}
                <div className="absolute right-0 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] mt-2">
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Call us anytime</p>
                        <a href="tel:+15551234567" className="text-sm font-light text-gray-600 hover:text-black">
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-light">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:support@thekour.com" className="text-gray-600 hover:text-black">
                          {contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-light">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{contactInfo.hours}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <Link to="/contact" className="block text-center text-sm font-light text-black hover:underline">
                        Send us a message →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Profile Icon */}
              {!isAuthenticated ? (
                <Link to="/login" className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              ) : (
                <div className="relative group">
                  <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <div className="absolute right-0 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] mt-2">
                    <div className="p-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{userName}</p>
                          <p className="text-xs font-light text-gray-500">{userEmail}</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <Link to="/profile" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">My Profile</Link>
                      <Link to="/orders" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">My Orders</Link>
                      <Link to="/wishlist" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">Wishlist</Link>
                      <Link to="/address-book" className="block px-4 py-2 text-sm font-light text-gray-700 hover:bg-gray-100">Address Book</Link>
                    </div>
                    <div className="border-t py-2">
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm font-light text-red-600 hover:bg-gray-100">Sign Out</button>
                    </div>
                  </div>
                </div>
              )}

              {/* Cart */}
              <Link to="/cart" className="relative p-2 rounded-md hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-light rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search Bar Dropdown */}
          {isSearchOpen && (
            <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t mt-0 p-4 animate-fadeIn z-[100]">
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
        catalogDropdownItems={catalogDropdownItems}
      />
    </>
  );
};

export default Navbar;