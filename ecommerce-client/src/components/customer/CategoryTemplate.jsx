// src/components/customer/CategoryTemplate.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import Loader from '../common/Loader';

const CategoryTemplate = ({ category, subcategory }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Fetch products (replace with real API)
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      // Simulated API response
      const mockProducts = Array(24).fill().map((_, i) => ({
        id: i,
        name: ['Aria Merino Sweater', 'Cirano Merino Sweater', 'Brezza Pullover', 'Salto Merino Zip-Up'][i % 4],
        price: [150, 150, 120, 150][i % 4],
        originalPrice: [74.99, 74.99, 59.99, 74.99][i % 4],
        image: `https://picsum.photos/id/${100 + i}/400/500`,
        colors: ['Grey', 'Indigo', 'Light Blue', 'Ivory'].slice(0, (i % 4) + 2),
        soldOut: i % 7 === 0,
        category: category,
        subcategory: subcategory,
        rating: 4 + Math.random(),
      }));
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    };
    fetchProducts();
  }, [category, subcategory]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    // Apply category filter (if any)
    if (filters.category && filters.category.length) {
      result = result.filter(p => filters.category.includes(p.subcategory));
    }
    // Apply size filter (mock)
    if (filters.sizes && filters.sizes.length) {
      // assume product.sizes array exists
      result = result.filter(p => p.sizes?.some(s => filters.sizes.includes(s)));
    }
    // Apply price filter
    if (filters.priceRange) {
      result = result.filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
    }
    // Sorting
    if (sortBy === 'price-low') result.sort((a,b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a,b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a,b) => b.rating - a.rating);
    setFilteredProducts(result);
    setCurrentPage(1);
  }, [filters, sortBy, products]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const pageTitle = `${subcategory?.charAt(0).toUpperCase() + subcategory?.slice(1)} - ${category?.charAt(0).toUpperCase() + category?.slice(1)}`;

  if (isLoading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb / Subcategory links */}
        <div className="flex gap-4 mb-6 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-black">Shop All</span>
          <span>Polos</span>
          <span>T-Shirts</span>
          <span>Shirts</span>
          <span>Sweaters</span>
          <span>Hoodies & Sweatshirts</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-1/4">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </aside>

          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-700">
                <span className="font-semibold">{filteredProducts.length}</span> Items
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500">Sort By</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-4 py-2 focus:outline-none"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Product grid */}
            {currentProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">No products found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                <button disabled={currentPage===1} onClick={() => setCurrentPage(p=>p-1)} className="px-3 py-1 border rounded">Prev</button>
                {[...Array(totalPages)].map((_,i)=>(
                  <button key={i} onClick={()=>setCurrentPage(i+1)} className={`px-3 py-1 border rounded ${currentPage===i+1 ? 'bg-black text-white' : ''}`}>{i+1}</button>
                ))}
                <button disabled={currentPage===totalPages} onClick={()=>setCurrentPage(p=>p+1)} className="px-3 py-1 border rounded">Next</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTemplate;