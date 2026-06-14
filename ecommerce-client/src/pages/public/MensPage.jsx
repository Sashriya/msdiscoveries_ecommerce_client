import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const MensPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const menProducts = [
      { id: 201, name: 'Classic Denim Jacket', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Jackets', badge: 'Best Seller', color: 'Blue', rating: 4.8 },
      { id: 202, name: 'Slim Fit Chinos', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Bottoms', badge: 'Sale', color: 'Khaki', rating: 4.6 },
      { id: 203, name: 'Premium Sneakers', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', badge: '', color: 'White', rating: 4.7 },
      { id: 204, name: 'Oversized Hoodie', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', category: 'Tops', badge: 'Trending', color: 'Grey', rating: 4.8 },
      { id: 205, name: 'Wool Blazer', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop', category: 'Jackets', badge: 'Luxury', color: 'Navy', rating: 4.9 },
      { id: 206, name: 'Cashmere Sweater', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop', category: 'Tops', badge: '', color: 'Cream', rating: 4.8 },
      { id: 207, name: 'Leather Boots', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1638247025967-b4e38f30b70f?w=400&h=500&fit=crop', category: 'Footwear', badge: 'New', color: 'Brown', rating: 4.7 },
      { id: 208, name: 'Tailored Trousers', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Black', rating: 4.6 },
      { id: 209, name: 'Polo Shirt', price: 54.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=500&fit=crop', category: 'Tops', badge: 'Best Seller', color: 'Navy', rating: 4.7 },
      { id: 210, name: 'Leather Jacket', price: 249.99, originalPrice: 399.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop', category: 'Jackets', badge: 'Limited', color: 'Black', rating: 4.9 },
      { id: 211, name: 'Running Shoes', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', color: 'Red', rating: 4.7 },
      { id: 212, name: 'Cotton T-Shirt', price: 29.99, originalPrice: 49.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', category: 'Tops', badge: '', color: 'White', rating: 4.5 },
    ];
    setTimeout(() => { 
      setProducts(menProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617137968427-85924c800c22?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-blue-400/30">
            👔 Men's Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Men's Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Elevate your style with THEKOUR's premium menswear</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Men's Collection</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tops', 'Bottoms', 'Jackets', 'Footwear'].map((category) => (
            <Link 
              key={category} 
              to={`/men/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Tops' ? '1521572163474-6864f9cf17ab' : category === 'Bottoms' ? '1594938298603-c8148c4dae35' : category === 'Jackets' ? '1576871337632-b9aef4c17ab9' : '1549298916-b41d501d3772'}?w=400&h=200&fit=crop`}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white text-xl font-light uppercase tracking-wider">{category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Featured Pieces</h2>
            <p className="text-gray-500 text-sm mt-1">Our most loved styles for men</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
              <option>New Arrivals</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
        
        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Shop All Men's Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MensPage;