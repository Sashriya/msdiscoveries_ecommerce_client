import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import FilterSidebar from '../../components/shop/FilterSidebar';
import Loader from '../../components/common/Loader';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({ category: [], priceRange: [0, 500], sizes: [], rating: 0 });
  const [viewMode, setViewMode] = useState('grid');

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

  useEffect(() => {
    let result = [...products];
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }
    result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    if (filters.sizes.length > 0) {
      result = result.filter(p => p.sizes?.some(s => filters.sizes.includes(s)));
    }
    if (filters.rating > 0) {
      result = result.filter(p => p.rating >= filters.rating);
    }
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);
    setFilteredProducts(result);
  }, [filters, sortBy, products]);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner with Image */}
      <div className="relative h-[60vh] min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1920&h=800&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
            ✨ Complete Collection
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">Shop All</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our complete collection of premium fashion, from timeless classics to seasonal must-haves
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Shop All</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-wrap justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
              </div>
              <div className="flex gap-3">
                <div className="flex border rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`p-2 px-3 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`p-2 px-3 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                  </button>
                </div>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)} 
                  className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Display */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">No products found. Try adjusting your filters.</p>
                <button 
                  onClick={() => setFilters({ category: [], priceRange: [0, 500], sizes: [], rating: 0 })}
                  className="mt-4 text-black hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 12 && (
              <div className="flex justify-center gap-2 mt-10">
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">Previous</button>
                <button className="px-4 py-2 bg-black text-white rounded-lg">1</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">2</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">3</button>
                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition-colors">Next</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;