import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = {
    "LEGAL": [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
      { name: "GDPR", href: "/gdpr" },
    ],
    "THEKOUR": [
      { name: "Our Story", href: "/about/our-story" },
      { name: "Sustainability", href: "/sustainability" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
    "CUSTOMER SERVICE": [
      { name: "Help Center", href: "/help" },
      { name: "Returns & Exchanges", href: "/returns" },
      { name: "Shipping Info", href: "/shipping" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "FAQs", href: "/faq" },
    ],
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      href: 'https://instagram.com' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: 'https://facebook.com' 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: 'https://twitter.com' 
    },
    { 
      name: 'Pinterest', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.244 3.768-5.487 0-2.866-2.063-4.869-5.008-4.869-3.41 0-5.409 2.559-5.409 5.198 0 1.03.397 2.133.892 2.733.098.119.112.223.083.345-.091.366-.294 1.189-.334 1.354-.052.217-.174.263-.398.158-1.483-.69-2.408-2.853-2.408-4.592 0-3.739 2.718-7.174 7.836-7.174 4.115 0 7.316 2.931 7.316 6.848 0 4.087-2.576 7.374-6.154 7.374-1.202 0-2.332-.625-2.719-1.363 0 0-.594 2.262-.738 2.816-.267 1.027-.987 2.258-1.471 3.023 1.104.336 2.276.522 3.492.522 6.62 0 11.987-5.366 11.987-11.987C24 5.366 18.635 0 12.017 0z"/>
        </svg>
      ),
      href: 'https://pinterest.com' 
    },
    { 
      name: 'YouTube', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      href: 'https://youtube.com' 
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.76-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      href: 'https://tiktok.com' 
    },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'PayPal', icon: '💰' },
    { name: 'Apple Pay', icon: '📱' },
    { name: 'Google Pay', icon: '🤖' },
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/">
              <h3 className="text-white text-xl font-light mb-4 hover:text-gray-300 transition-colors">
                THE<span className="font-semibold">KOUR</span>
              </h3>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Premium fashion for the modern lifestyle. Quality meets style in every piece.
            </p>
            
            {/* Social Links with unique icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links - Quince style */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-sm font-medium mb-4 tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Country/Region & Copyright */}
        <div className="border-t border-gray-900 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <span>© {new Date().getFullYear()} THEKOUR. All rights reserved.</span>
            </div>
            <div className="text-sm text-gray-500 text-center">
              THEKOUR <span className="text-gray-400">Powered by Ameriavis Tech</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
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