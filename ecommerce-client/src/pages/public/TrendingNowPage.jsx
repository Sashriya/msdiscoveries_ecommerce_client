import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const TrendingNowPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trendingProducts = [
      { id: 1, name: 'Oversized Hoodie', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop', category: 'Men', badge: 'Trending', rating: 4.8, reviews: 1234, color: 'Grey' },
      { id: 2, name: 'Pleated Skirt', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop', category: 'Women', badge: 'Trending', rating: 4.7, reviews: 892, color: 'Black' },
      { id: 3, name: 'Leather Boots', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', rating: 4.9, reviews: 745, color: 'Brown' },
      { id: 4, name: 'Silk Scarf', price: 49.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Trending', rating: 4.6, reviews: 567, color: 'Multicolor' },
      { id: 5, name: 'Wool Blend Coat', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', category: 'Women', badge: 'Trending', rating: 4.8, reviews: 678, color: 'Camel' },
      { id: 6, name: 'Designer Handbag', price: 299.99, originalPrice: 499.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Limited', rating: 4.9, reviews: 234, color: 'Tan' },
      { id: 7, name: 'Cotton T-Shirt', price: 29.99, originalPrice: 49.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop', category: 'Men', badge: 'Trending', rating: 4.5, reviews: 890, color: 'White' },
      { id: 8, name: 'Wide Leg Pants', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Women', badge: 'Trending', rating: 4.7, reviews: 456, color: 'Beige' },
    ];
    setTimeout(() => { 
      setProducts(trendingProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Trending Now</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Season's Hottest</h2>
            <p className="text-gray-500 text-sm mt-1">Shop what everyone's talking about</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
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

export default TrendingNowPage;