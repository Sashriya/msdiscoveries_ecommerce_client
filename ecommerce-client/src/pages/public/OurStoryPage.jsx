import React from 'react';
import { Link } from 'react-router-dom';

const OurStoryPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
          <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&h=400&fit=crop" alt="Our Story" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-light text-white">Our Story</h1>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">Founded in 2024, THEKOUR was born from a passion for creating exceptional fashion that combines timeless elegance with modern sophistication. What started as a small boutique has grown into a global brand trusted by fashion enthusiasts worldwide.</p>
          <p className="text-gray-600 leading-relaxed">Our name, THEKOUR, represents the perfect blend of classic luxury and contemporary design. We believe that clothing is more than just fabric – it's an expression of identity, a statement of style, and a celebration of individuality.</p>
          <div className="bg-gray-50 p-8 rounded-2xl mt-8">
            <h2 className="text-2xl font-light mb-4">Our Mission</h2>
            <p className="text-gray-600">To inspire confidence and self-expression through exceptional fashion that combines quality, style, and sustainability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryPage;
