import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const TrousersPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trousersProducts = [
      { 
        id: 1, 
        name: 'Pleated Straight-Leg Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 140.00, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Asymmetric Cropped Slate Chino', 
        brand: 'THEKOUR ATELIER',
        price: 84.99, 
        originalPrice: 115.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'New',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Relaxed Wool Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 195.00, 
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'Luxury',
        color: 'Navy',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Linear Slim Tailored Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 160.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: '',
        color: 'Charcoal',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Cotton Chino Pants', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1517420707952-d53cfb3320ad?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: '',
        color: 'Khaki',
        rating: 4.5
      },
      { 
        id: 6, 
        name: 'Wool Dress Pants', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'Trending',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Linen Summer Trousers', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: '',
        color: 'Beige',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Cargo Pants', 
        brand: 'THEKOUR ATELIER',
        price: 109.99, 
        originalPrice: 159.99, 
        image: 'https://images.unsplash.com/photo-1517420707952-d53cfb3320ad?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'Limited',
        color: 'Olive',
        rating: 4.7
      },
    ];
    setTimeout(() => { 
      setProducts(trousersProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/men" className="hover:text-black ml-1">Men</Link> / 
          <span className="text-black ml-1">Trousers</span>
        </div>
      </div>

      {/* Shop by Fit Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Fit</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Slim Fit', 'Straight Fit', 'Relaxed Fit', 'Tailored'].map((fit) => (
            <Link 
              key={fit} 
              to={`/men/trousers/${fit.toLowerCase().replace(' ', '-')}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${fit === 'Slim Fit' ? '1594938298603-c8148c4dae35' : fit === 'Straight Fit' ? '1473966968600-fa801b869a1a' : fit === 'Relaxed Fit' ? '1517420707952-d53cfb3320ad' : '1539533113208-f6df8cc8b543'}?w=400&h=200&fit=crop`}
                alt={fit}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white text-xl font-light uppercase tracking-wider">{fit}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Trousers Edit</h2>
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
            to="/men" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Shop All Trousers →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrousersPage;
