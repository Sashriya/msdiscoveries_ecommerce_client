import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const BestSellersPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bestSellers = [
      { id: 1, name: 'Classic Denim Jacket', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Men', badge: 'Best Seller', rating: 4.8, reviews: 245, color: 'Blue' },
      { id: 2, name: 'Slim Fit Chinos', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Men', badge: 'Best Seller', rating: 4.6, reviews: 189, color: 'Khaki' },
      { id: 3, name: 'Oversized Blazer', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Women', badge: 'Best Seller', rating: 4.9, reviews: 312, color: 'Black' },
      { id: 4, name: 'Leather Crossbody Bag', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Best Seller', rating: 4.7, reviews: 456, color: 'Brown' },
      { id: 5, name: 'Cashmere Sweater', price: 149.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Women', badge: 'Best Seller', rating: 4.9, reviews: 278, color: 'Cream' },
      { id: 6, name: 'Premium Sneakers', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Best Seller', rating: 4.7, reviews: 567, color: 'White' },
      { id: 7, name: 'Wool Blend Coat', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', category: 'Women', badge: 'Best Seller', rating: 4.8, reviews: 198, color: 'Camel' },
      { id: 8, name: 'Leather Boots', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Best Seller', rating: 4.7, reviews: 234, color: 'Brown' },
    ];
    setTimeout(() => { 
      setProducts(bestSellers); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-yellow-400/30">
            🏆 Customer Favorites
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Best Sellers</h1>
          <p className="text-xl max-w-2xl mx-auto">Our most popular items loved by customers worldwide</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Best Sellers</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Most Loved</h2>
            <p className="text-gray-500 text-sm mt-1">Join thousands of satisfied customers</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Top Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Reviewed</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellersPage;