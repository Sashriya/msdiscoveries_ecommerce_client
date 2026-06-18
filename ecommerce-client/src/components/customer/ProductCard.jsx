import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCard = ({ product, viewMode }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1, product.sizes?.[0] || 'M', product.colors?.[selectedColor] || 'Default');
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 500);
  };

  const handleShopNow = (e) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  // Get color-specific image or use default
  const getProductImage = () => {
    if (product.colorImages && product.colorImages.length > 0) {
      return product.colorImages[selectedColor] || product.image;
    }
    return product.image;
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition-shadow">
        <Link to={`/product/${product.id}`} className="flex-shrink-0">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded" />
        </Link>
        <div className="flex-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold hover:text-gray-600">{product.name}</h3>
          </Link>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
            )}
          </div>
          <div className="flex gap-3">
            <button onClick={handleShopNow} className="px-6 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors">Shop Now</button>
            <button onClick={handleAddToCart} disabled={isAdding} className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Wishlist Icon - Top Right Corner */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        aria-label="Add to wishlist"
      >
        <svg 
          className={`w-4 h-4 transition-colors duration-300 ${isWishlisted ? 'text-black fill-black' : 'text-gray-400 hover:text-black'}`}
          fill={isWishlisted ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img 
          src={getProductImage()} 
          alt={product.name}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500 bg-gray-50"
        />
        
        {/* Badge - Best Seller style */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-light">
            {product.badge}
          </span>
        )}
        
        {/* Quick View Plus Icon - Center on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleQuickView}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
            aria-label="Quick view"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-1">
        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium hover:text-gray-600 transition-colors line-clamp-2 min-h-[40px]">
            {product.name}
          </h3>
        </Link>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-black">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d={i < Math.floor(product.rating) ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}/>
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400">{product.rating}</span>
            {product.reviews && (
              <span className="text-xs text-gray-400">({product.reviews})</span>
            )}
          </div>
        )}

        {/* Color Options with +X more */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <div className="flex gap-1">
              {product.colors.slice(0, 4).map((color, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(idx);
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                    selectedColor === idx ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
            {product.colors.length > 4 && (
              <span className="text-[10px] text-gray-400 ml-1">+{product.colors.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;