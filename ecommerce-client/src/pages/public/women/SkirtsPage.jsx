import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const SkirtsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const skirtsProducts = [
      { 
        id: 1, 
        name: 'Structural Pleated Midi Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 140.00, 
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Asymmetric Wrap Linen Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 125.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: 'New',
        color: 'Beige',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Linear Slit Calfskin Pencil Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 240.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: 'Luxury',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Geometric A-Line Poplin Panel', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 110.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: '',
        color: 'White',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Denim Mini Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: 'Trending',
        color: 'Blue',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Pleated Tennis Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: '',
        color: 'White',
        rating: 4.6
      },
      { 
        id: 7, 
        name: 'Leather Midi Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: 'Limited',
        color: 'Brown',
        rating: 4.8
      },
      { 
        id: 8, 
        name: 'Silk Satin Slip Skirt', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 169.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Skirts',
        badge: '',
        color: 'Silver',
        rating: 4.7
      },
    ];
    setTimeout(() => { 
      setProducts(skirtsProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-purple-400/30">
            👗 Women's Skirts
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Skirts</h1>
          <p className="text-xl max-w-2xl mx-auto">Elevate your style with our premium skirt collection</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Skirts</span>
        </div>
      </div>

      {/* Shop by Length Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Length</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Mini', 'Midi', 'Maxi', 'Pencil'].map((length) => (
            <Link 
              key={length} 
              to={`/women/skirts/${length.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${length === 'Mini' ? '1583496661160-fb5886a0aaaa' : length === 'Midi' ? '1591047139829-d91aecb6caea' : length === 'Maxi' ? '1495385794356-15371f348c31' : '1591047139829-d91aecb6caea'}?w=400&h=200&fit=crop`}
                alt={length}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white text-xl font-light uppercase tracking-wider">{length}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Skirt Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Essential styles for every occasion</p>
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
            to="/women" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Shop All Skirts →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkirtsPage;