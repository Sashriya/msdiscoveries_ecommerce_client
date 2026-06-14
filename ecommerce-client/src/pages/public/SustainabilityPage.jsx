import React from 'react';

const SustainabilityPage = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4">Sustainability</h1>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Committed to ethical fashion and a better tomorrow</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-8 rounded-2xl"><div className="text-4xl mb-4">🌱</div><h2 className="text-2xl font-light mb-3">Eco-Friendly Materials</h2><p className="text-gray-600">We use 100% organic cotton, recycled polyester, and sustainable fabrics.</p></div>
          <div className="bg-blue-50 p-8 rounded-2xl"><div className="text-4xl mb-4">♻️</div><h2 className="text-2xl font-light mb-3">Recycled Packaging</h2><p className="text-gray-600">All packaging is made from recycled materials and is fully recyclable.</p></div>
          <div className="bg-yellow-50 p-8 rounded-2xl"><div className="text-4xl mb-4">👥</div><h2 className="text-2xl font-light mb-3">Ethical Manufacturing</h2><p className="text-gray-600">We partner with factories ensuring fair wages and safe conditions.</p></div>
          <div className="bg-purple-50 p-8 rounded-2xl"><div className="text-4xl mb-4">🌍</div><h2 className="text-2xl font-light mb-3">Carbon Neutral</h2><p className="text-gray-600">We offset our carbon footprint through verified environmental projects.</p></div>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl text-center"><h2 className="text-2xl font-light mb-3">Our Commitment</h2><p className="text-gray-600 max-w-2xl mx-auto">By 2025, we aim to have 100% of our products made from sustainable or recycled materials.</p></div>
      </div>
    </div>
  );
};
export default SustainabilityPage;
