// ShopPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const ShopPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories for horizontal menu - Quince style
  const categories = [
    'All', 'New Arrivals', 'Best Sellers', 'Women', 'Men', 
    'Dresses', 'Tops', 'Sweaters', 'Pants', 'Outerwear', 
    'Bags', 'Shoes', 'Accessories', 'Jewelry'
  ];

  useEffect(() => {
    const allProducts = [
      { id: 1, name: 'Classic Denim Jacket', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Men', rating: 4.5, reviews: 128, inStock: true, badge: 'Best Seller', color: 'Blue' },
      { id: 2, name: 'Slim Fit Chinos', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Men', rating: 4.3, reviews: 94, inStock: true, badge: 'Sale', color: 'Khaki' },
      { id: 3, name: 'Oversized Blazer', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Women', rating: 4.7, reviews: 156, inStock: true, badge: 'New', color: 'Black' },
      { id: 4, name: 'Leather Crossbody Bag', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Accessories', rating: 4.8, reviews: 203, inStock: true, badge: 'Best Seller', color: 'Brown' },
      { id: 5, name: 'Cashmere Sweater', price: 149.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Women', rating: 4.9, reviews: 89, inStock: true, badge: 'Luxury', color: 'Cream' },
      { id: 6, name: 'Premium Sneakers', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', rating: 4.6, reviews: 312, inStock: true, badge: '', color: 'White' },
      { id: 7, name: 'Wool Blend Coat', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', category: 'Women', rating: 4.8, reviews: 67, inStock: true, badge: 'New', color: 'Camel' },
      { id: 8, name: 'Leather Boots', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', rating: 4.7, reviews: 145, inStock: true, badge: '', color: 'Brown' },
      { id: 9, name: 'Silk Scarf', price: 49.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', category: 'Accessories', rating: 4.5, reviews: 78, inStock: true, badge: '', color: 'Multicolor' },
      { id: 10, name: 'Designer Handbag', price: 299.99, originalPrice: 499.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Accessories', rating: 4.9, reviews: 234, inStock: true, badge: 'Limited', color: 'Tan' },
      { id: 11, name: 'Oversized Hoodie', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', category: 'Men', rating: 4.6, reviews: 189, inStock: true, badge: 'Trending', color: 'Grey' },
      { id: 12, name: 'Pleated Skirt', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop', category: 'Women', rating: 4.7, reviews: 156, inStock: true, badge: 'Trending', color: 'Black' },
    ];
    setTimeout(() => { 
      setProducts(allProducts); 
      setFilteredProducts(allProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  // Filter products when category changes
  useEffect(() => {
    let result = [...products];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory || 
        (selectedCategory === 'New Arrivals' && p.badge === 'New') ||
        (selectedCategory === 'Best Sellers' && p.badge === 'Best Seller'));
    }
    // Apply sorting
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, products]);

  // Handle category card click
  const handleCategoryClick = (href) => {
    navigate(href);
  };

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-white min-h-screen">
      {/* Quince-style Category Menu - Horizontal Scroll */}
      <div className="border-b border-gray-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap text-sm font-light tracking-wide transition-colors ${
                  selectedCategory === category 
                    ? 'text-black border-b-2 border-black pb-2' 
                    : 'text-gray-500 hover:text-black pb-2 border-b-2 border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Shop by Category Section - Only this section */}
        <h2 className="text-xl font-light tracking-wide mb-4">Shop by Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Men Category Card */}
          <div 
            onClick={() => handleCategoryClick('/men')}
            className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=400&fit=crop"
                alt="Men"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-light tracking-wide">Men</h3>
              <p className="text-white/80 text-xs font-light">Shop Now →</p>
            </div>
          </div>

          {/* Women Category Card */}
          <div 
            onClick={() => handleCategoryClick('/women')}
            className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop"
                alt="Women"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-light tracking-wide">Women</h3>
              <p className="text-white/80 text-xs font-light">Shop Now →</p>
            </div>
          </div>

          {/* Kids Category Card */}
          <div 
            onClick={() => handleCategoryClick('/kids')}
            className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=400&fit=crop"
                alt="Kids"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-light tracking-wide">Kids</h3>
              <p className="text-white/80 text-xs font-light">Shop Now →</p>
            </div>
          </div>

          {/* Accessories Category Card */}
          <div 
            onClick={() => handleCategoryClick('/accessories')}
            className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop"
                alt="Accessories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-light tracking-wide">Accessories</h3>
              <p className="text-white/80 text-xs font-light">Shop Now →</p>
            </div>
          </div>

          {/* View All Card - Last */}
          <div 
            onClick={() => navigate('/shop/all')}
            className="group relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=400&fit=crop"
                alt="View All"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <h3 className="text-white text-xl font-light tracking-wide">View All</h3>
              <p className="text-white/70 text-xs font-light mt-1">Explore everything →</p>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mt-8 mb-4 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            {filteredProducts.length} items
          </p>
          <div className="flex gap-3 items-center">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-black bg-white"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')} 
                className={`p-2 px-3 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')} 
                className={`p-2 px-3 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6' 
            : 'space-y-4'
          }>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 12 && (
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-4 py-2 bg-black text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;