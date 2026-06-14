import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const LimitedEditionPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const limitedProducts = [
      { id: 1, name: 'Designer Handbag', price: 299.99, originalPrice: 499.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Limited Edition', rating: 4.9, reviews: 456, color: 'Tan' },
      { id: 2, name: 'Limited Edition Watch', price: 399.99, originalPrice: 699.99, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=500&fit=crop', category: 'Watches', badge: 'Limited Edition', rating: 4.8, reviews: 234, color: 'Silver' },
      { id: 3, name: 'Anniversary Jacket', price: 249.99, originalPrice: 399.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Men', badge: 'Limited Edition', rating: 4.7, reviews: 123, color: 'Black' },
      { id: 4, name: 'Designer Sunglasses', price: 199.99, originalPrice: 349.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Limited Edition', rating: 4.8, reviews: 345, color: 'Black' },
      { id: 5, name: 'Premium Leather Wallet', price: 89.99, originalPrice: 149.99, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop', category: 'Accessories', badge: 'Limited Edition', rating: 4.6, reviews: 567, color: 'Brown' },
      { id: 6, name: 'Signature Sneakers', price: 179.99, originalPrice: 279.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Limited Edition', rating: 4.8, reviews: 678, color: 'White' },
      { id: 7, name: 'Collector\'s Edition Blazer', price: 349.99, originalPrice: 549.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Women', badge: 'Limited Edition', rating: 4.9, reviews: 89, color: 'Navy' },
      { id: 8, name: 'Limited Run Sneakers', price: 229.99, originalPrice: 359.99, image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Limited Edition', rating: 4.7, reviews: 234, color: 'Black' },
    ];
    setTimeout(() => { 
      setProducts(limitedProducts); 
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
          <div className="inline-block px-4 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-amber-400/30">
            ⭐ Exclusive Release
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Limited Edition</h1>
          <p className="text-xl max-w-2xl mx-auto">Exclusive pieces, limited quantities – once they're gone, they're gone</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/trending-now" className="hover:text-black ml-1">Trending</Link> / 
          <span className="text-black ml-1">Limited Edition</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Exclusive Drops</h2>
            <p className="text-gray-500 text-sm mt-1">Once they're gone, they're gone forever</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
        
        {/* Shop More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Browse All Exclusives →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LimitedEditionPage;