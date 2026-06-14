import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light mb-8 text-center">Privacy Policy</h1>
        <div className="space-y-6">
          <div><h2 className="text-2xl font-light mb-3">Information We Collect</h2><p className="text-gray-600">We collect personal information including name, email address, shipping address, payment information, and browsing behavior to process orders and improve our services.</p></div>
          <div><h2 className="text-2xl font-light mb-3">How We Use Your Information</h2><p className="text-gray-600">We use your information to process orders, communicate with you, personalize your experience, and improve our website and products.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Information Sharing</h2><p className="text-gray-600">We do not sell your personal information. We may share data with trusted partners who assist in order processing and delivery.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Data Security</h2><p className="text-gray-600">We implement security measures including SSL encryption to protect your data from unauthorized access.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Your Rights</h2><p className="text-gray-600">You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><p className="text-sm text-gray-500">Last updated: January 2025</p><p className="text-sm text-gray-500 mt-2">For privacy questions, contact: <a href="mailto:privacy@thekour.com" className="text-black underline">privacy@thekour.com</a></p></div>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicyPage;
