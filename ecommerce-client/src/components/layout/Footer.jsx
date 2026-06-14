import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = {
    Shop: [
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Men", href: "/men" },
      { name: "Women", href: "/women" },
      { name: "Accessories", href: "/accessories" },
      { name: "Sale", href: "/sale" },
      { name: "Collections", href: "/collections" },
    ],
    "About": [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
    "Customer Service": [
      { name: "Help Center", href: "/help" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "FAQs", href: "/faq" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Apple Pay', icon: '📱' },
    { name: 'Google Pay', icon: '🤖' },
    { name: 'Klarna', icon: '💸' },
    { name: 'Afterpay', icon: '🔄' },
  ];

  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-black text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/">
              <h3 className="text-white text-xl font-light mb-4 hover:text-gray-300 transition-colors">
                THE<span className="font-semibold">KOUR</span>
              </h3>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Premium fashion for the modern lifestyle. Quality meets style in every piece.
              Experience luxury redefined with THEKOUR.
            </p>
            {/* App Store Badges */}
            <div className="flex gap-3">
              <div className="bg-gray-900 rounded-lg px-3 py-2 text-center hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800">
                <div className="text-[10px] text-gray-500">Download on the</div>
                <div className="font-semibold text-white">App Store</div>
              </div>
              <div className="bg-gray-900 rounded-lg px-3 py-2 text-center hover:bg-gray-800 transition-colors cursor-pointer border border-gray-800">
                <div className="text-[10px] text-gray-500">Get it on</div>
                <div className="font-semibold text-white">Google Play</div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 relative inline-block">
                {title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-white mt-1"></span>
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-900 mt-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold mb-2 text-lg">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-400">
                Get 10% off your first order and exclusive access to new arrivals, sales, and events.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-sm mt-2">✓ Thanks for subscribing! Check your inbox.</p>
              )}
            </div>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="border-t border-gray-900 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm text-gray-500">Secure payments by</span>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="bg-gray-900 px-3 py-1 rounded-md flex items-center gap-1 border border-gray-800">
                    <span className="text-sm">{method.icon}</span>
                    <span className="text-xs text-gray-400">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {/* Trust Badges */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 8.707l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586V7a1 1 0 112 0v3.586l1.293-1.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
                </svg>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SSL Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} THEKOUR. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;