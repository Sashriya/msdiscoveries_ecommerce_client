import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCard = ({ product, viewMode }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1, product.sizes?.[0] || 'M', product.colors?.[0] || 'Default');
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 500);
  };

  const handleShopNow = (e) => {
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(true);
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
            <button onClick={handleShopNow} className="px-6 py-2 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors">
              Shop Now
            </button>
            <button onClick={handleAddToCart} disabled={isAdding} className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 disabled:opacity-50">
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`} className="block">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          {/* Quick View Button */}
          <button
            onClick={handleQuickView}
            className="absolute bottom-0 left-0 right-0 bg-black/80 text-white py-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 text-center font-medium"
          >
            Quick View
          </button>
          {product.badge && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full z-10">
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-4">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold mb-1 hover:text-gray-600 line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>

          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleShopNow}
              className="flex-1 py-2 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors font-medium text-sm"
            >
              Shop Now
            </button>
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="flex-1 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm disabled:opacity-50"
            >
              {isAdding ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal - Consistent Background */}
      {showQuickView && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-medium text-gray-900">Quick View</h3>
              <button
                onClick={() => setShowQuickView(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-light mb-2">{product.name}</h2>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-red-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {product.description || "Premium quality product"}
                  </p>
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => setShowQuickView(false)}
                    className="block text-center mt-3 text-sm text-gray-500 hover:text-black"
                  >
                    View Full Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;