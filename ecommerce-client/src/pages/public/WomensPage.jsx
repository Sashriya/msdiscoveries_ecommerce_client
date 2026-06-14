import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const WomensPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const womenProducts = [
      { id: 301, name: 'Oversized Blazer', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Jackets', badge: 'New', color: 'Black', rating: 4.7 },
      { id: 302, name: 'Cashmere Sweater', price: 149.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Knits', badge: 'Luxury', color: 'Cream', rating: 4.9 },
      { id: 303, name: 'Pleated Skirt', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop', category: 'Bottoms', badge: 'Trending', color: 'Black', rating: 4.6 },
      { id: 304, name: 'Leather Handbag', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Bags', badge: '', color: 'Tan', rating: 4.8 },
      { id: 305, name: 'Silk Midi Dress', price: 159.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop', category: 'Dresses', badge: 'New', color: 'Blush', rating: 4.8 },
      { id: 306, name: 'Wool Blend Coat', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'Best Seller', color: 'Camel', rating: 4.9 },
      { id: 307, name: 'Leather Boots', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', color: 'Brown', rating: 4.7 },
      { id: 308, name: 'Silk Scarf', price: 49.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', category: 'Accessories', badge: '', color: 'Multicolor', rating: 4.5 },
    ];
    setTimeout(() => { 
      setProducts(womenProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-963728d0471e?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-pink-400/30">
            👗 Timeless Elegance
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Women's Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover elegance and style at THEKOUR</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Women's Collection</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Curated for You</h2>
            <p className="text-gray-500 text-sm mt-1">Sophisticated styles for every occasion</p>
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
            Shop All Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomensPage;