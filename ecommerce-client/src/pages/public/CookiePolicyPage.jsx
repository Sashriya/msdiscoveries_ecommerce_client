import React from 'react';

const CookiePolicyPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-light mb-8 text-center">Cookie Policy</h1>
        <div className="space-y-6">
          <div><h2 className="text-2xl font-light mb-3">What Are Cookies</h2><p className="text-gray-600">Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience.</p></div>
          <div><h2 className="text-2xl font-light mb-3">How We Use Cookies</h2><p className="text-gray-600">We use cookies to remember your preferences, analyze site traffic, and personalize content.</p></div>
          <div><h2 className="text-2xl font-light mb-3">Managing Cookies</h2><p className="text-gray-600">You can manage cookie preferences through your browser settings. Note that disabling cookies may affect site functionality.</p></div>
          <div className="bg-gray-50 p-6 rounded-xl"><p className="text-sm text-gray-500">Last updated: January 2025</p></div>
        </div>
      </div>
    </div>
  );
};
export default CookiePolicyPage;
