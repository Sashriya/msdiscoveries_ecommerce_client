import React from 'react';
import { Link } from 'react-router-dom';

const CategoryGrid = ({ categories }) => {
  // Helper function to generate correct URL
  const getCategoryUrl = (categoryName) => {
    if (categoryName.toLowerCase() === 'all products') {
      return '/shop'; // Special case for All Products
    }
    return `/${categoryName.toLowerCase()}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <Link 
          key={index}
          to={getCategoryUrl(category.name)}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-80 overflow-hidden">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Category Name */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-light mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.itemCount} items</p>
            </div>

            {/* View All Button - Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <span className="inline-block px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm tracking-wide">
                  View All
                </span>
                <p className="text-white text-xs mt-2 opacity-80">Explore {category.name} Collection</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryGrid;