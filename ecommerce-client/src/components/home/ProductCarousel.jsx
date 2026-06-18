import React, { useRef, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCarousel = ({ products }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [wishlistItems, setWishlistItems] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

  const updateArrows = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(updateArrows, 100);
    }
  };

  const handleScroll = () => {
    updateArrows();
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    setIsAdding(true);
    const colorIndex = selectedColors[product.id] || 0;
    const selectedColor = product.colors?.[colorIndex] || 'Default';
    addToCart(product, 1, product.sizes?.[0] || 'M', selectedColor);
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 500);
  };

  const handleWishlist = (productId, e) => {
    e.stopPropagation();
    setWishlistItems(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleColorChange = (productId, colorIndex, e) => {
    e.stopPropagation();
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  const openQuickView = (product, e) => {
    e.stopPropagation();
    setQuickViewProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    document.body.style.overflow = 'unset';
  };

  const getProductImage = (product) => {
    const colorIndex = selectedColors[product.id] || 0;
    if (product.colorImages && product.colorImages.length > 0) {
      return product.colorImages[colorIndex] || product.image;
    }
    return product.image;
  };

  return (
    <>
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            aria-label="Previous products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => {
            const isWishlisted = wishlistItems[product.id] || false;
            const currentColorIndex = selectedColors[product.id] || 0;
            const displayColors = product.colors || [];
            
            return (
              <div key={product.id} className="flex-none w-72 group/product cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-50">
                  <img 
                    src={getProductImage(product)} 
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover/product:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-light">
                      {product.badge}
                    </span>
                  )}
                  
                  {/* Wishlist Heart Icon - Top Right */}
                  <button
                    onClick={(e) => handleWishlist(product.id, e)}
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

                  {/* Plus Icon - Quick View (Center on hover) */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={(e) => openQuickView(product, e)}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      aria-label="Quick view"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  {/* Product Name */}
                  <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
                    <h3 className="font-medium text-sm mb-1 hover:text-gray-600 transition-colors line-clamp-2 min-h-[40px]">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Price */}
                  <div className="flex gap-2 justify-center">
                    <span className="font-semibold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center justify-center gap-1 mt-1">
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
                  {displayColors.length > 0 && (
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <div className="flex gap-1">
                        {displayColors.slice(0, 4).map((color, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => handleColorChange(product.id, idx, e)}
                            className={`w-5 h-5 rounded-full border-2 transition-all ${
                              currentColorIndex === idx ? 'border-black scale-110' : 'border-gray-200 hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                          />
                        ))}
                      </div>
                      {displayColors.length > 4 && (
                        <span className="text-[10px] text-gray-400 ml-1">+{displayColors.length - 4}</span>
                      )}
                    </div>
                  )}
                  
                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    disabled={isAdding}
                    className="mt-3 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors w-full disabled:opacity-50"
                  >
                    {isAdding ? 'Adding...' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            aria-label="Next products"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeQuickView}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-lg font-medium text-gray-900">Quick View</h3>
              <button 
                onClick={closeQuickView} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={quickViewProduct.image} 
                    alt={quickViewProduct.name} 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  {quickViewProduct.badge && (
                    <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                      {quickViewProduct.badge}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-light mb-2">{quickViewProduct.name}</h2>
                  <p className="text-gray-500 text-sm mb-3">{quickViewProduct.category}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-red-600">${quickViewProduct.price}</span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-gray-400 line-through">${quickViewProduct.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {quickViewProduct.description || 'Premium quality product with exceptional comfort and style.'}
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={(e) => handleAddToCart(quickViewProduct, e)}
                      disabled={isAdding}
                      className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 font-medium"
                    >
                      {isAdding ? 'Adding to Cart...' : 'Add to Cart'}
                    </button>
                    <Link
                      to={`/product/${quickViewProduct.id}`}
                      onClick={closeQuickView}
                      className="block text-center text-sm text-gray-500 hover:text-black transition-colors py-2"
                    >
                      View Full Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCarousel;