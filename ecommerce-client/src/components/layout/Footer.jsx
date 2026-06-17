import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = {
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

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-8 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} THEKOUR. All rights reserved.
            </div>
            <div className="text-xs text-gray-400 text-center">
              Powered by Ameriavis Tech
            </div>
            <div className="flex gap-6 text-xs text-gray-500">
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