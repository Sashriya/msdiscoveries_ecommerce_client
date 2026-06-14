// src/components/customer/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Limit shown colors to 4, then show "+X more"
  const visibleColors = product.colors?.slice(0, 4) || [];
  const extraColors = product.colors?.length - 4;

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
          />
          {product.soldOut && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Sold out</span>
            </div>
          )}
        </div>
      </Link>

      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 hover:text-gray-600">{product.name}</h3>
        </Link>

        {/* Color dots */}
        <div className="flex flex-wrap gap-1 mt-2">
          {visibleColors.map((color, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
          {extraColors > 0 && (
            <span className="text-xs text-gray-500 ml-1">+{extraColors} more</span>
          )}
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-red-600 font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
          {discountPercent > 0 && (
            <span className="text-green-600 text-sm">({discountPercent}% off)</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;