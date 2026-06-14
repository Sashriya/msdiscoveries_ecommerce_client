import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light mb-8 text-center">Terms of Service</h1>
        <div className="space-y-6">
          <div><h2 className="text-2xl font-light mb-3">1. Acceptance of Terms</h2><p className="text-gray-600">By accessing our website, you agree to be bound by these Terms of Service.</p></div>
          <div><h2 className="text-2xl font-light mb-3">2. Products & Pricing</h2><p className="text-gray-600">We strive for accuracy but prices and availability are subject to change without notice.</p></div>
          <div><h2 className="text-2xl font-light mb-3">3. Orders & Payments</h2><p className="text-gray-600">We reserve the right to refuse or cancel any order for any reason.</p></div>
          <div><h2 className="text-2xl font-light mb-3">4. Shipping & Returns</h2><p className="text-gray-600">Please refer to our Shipping and Returns policies for details.</p></div>
          <div><h2 className="text-2xl font-light mb-3">5. Intellectual Property</h2><p className="text-gray-600">All content on this site is owned by THEKOUR and protected by copyright.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><p className="text-sm text-gray-500">Last updated: January 2025</p></div>
        </div>
      </div>
    </div>
  );
};
export default TermsPage;
