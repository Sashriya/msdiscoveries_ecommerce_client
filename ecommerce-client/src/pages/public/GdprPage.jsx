import React from 'react';

const GdprPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light mb-8 text-center">GDPR Compliance</h1>
        <div className="space-y-6">
          <div><h2 className="text-2xl font-light mb-3">Your Data Rights</h2><p className="text-gray-600">Under GDPR, you have the right to access, rectify, erase, and restrict processing of your personal data.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Data We Collect</h2><p className="text-gray-600">We collect name, email, address, payment information, and browsing behavior to process orders and improve our services.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Data Protection</h2><p className="text-gray-600">We implement security measures to protect your data from unauthorized access.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><p className="font-medium">Contact our Data Protection Officer:</p><a href="mailto:dpo@thekour.com" className="text-black underline">dpo@thekour.com</a></div>
        </div>
      </div>
    </div>
  );
};
export default GdprPage;
