import React from 'react';
import { Link } from 'react-router-dom';

const AccessibilityPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=500&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Accessibility</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Our Commitment */}
          <div className="p-8 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h2 className="text-2xl font-light">Our Commitment</h2>
            </div>
            <p className="text-gray-600 leading-relaxed ml-14">
              THEKOUR is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone, and applying the relevant 
              accessibility standards to achieve this goal.
            </p>
          </div>

          {/* Accessibility Features */}
          <div className="p-8 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <h2 className="text-2xl font-light">Accessibility Features</h2>
            </div>
            <div className="ml-14">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Keyboard navigation support
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Screen reader compatibility
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> High contrast color options
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Resizable text up to 200%
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Clear and consistent navigation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Alternative text for images
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Captions and transcripts for media
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span> Adjustable time limits
                </li>
              </ul>
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="p-8 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
              <h2 className="text-2xl font-light">Standards Compliance</h2>
            </div>
            <div className="ml-14">
              <p className="text-gray-600 leading-relaxed mb-3">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, 
                which explains how to make web content more accessible for people with disabilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our website is tested regularly using automated tools and manual testing with assistive 
                technologies to ensure ongoing compliance.
              </p>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="p-8 bg-gray-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <h2 className="text-2xl font-light">Feedback & Assistance</h2>
            </div>
            <div className="ml-14">
              <p className="text-gray-600 leading-relaxed mb-4">
                If you experience any difficulty accessing our website, or if you have suggestions 
                for improving accessibility, please contact our accessibility coordinator:
              </p>
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Accessibility Team</p>
                    <a href="mailto:accessibility@thekour.com" className="text-black underline text-sm">
                      accessibility@thekour.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Support</p>
                    <a href="tel:+15551234567" className="text-black underline text-sm">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">Last updated: January 2025</p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;