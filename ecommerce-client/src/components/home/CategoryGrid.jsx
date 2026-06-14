import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <Link 
          key={index}
          to={`/${category.name.toLowerCase()}`}  // Changed from category.link
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-80 overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-light mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.itemCount} items</p>
              <div className="mt-3 inline-block border-b border-white/50 group-hover:border-white transition-colors">
                Shop Now →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;