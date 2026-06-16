import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const JeansPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jeansProducts = [
      { 
        id: 1, 
        name: 'Raw Denim Straight-Leg', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 175.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: 'Best Seller',
        color: 'Blue',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Structural Relaxed Tapered', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 160.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: 'New',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Asymmetric Cropped Slim', 
        brand: 'THEKOUR ATELIER',
        price: 109.99, 
        originalPrice: 150.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: '',
        color: 'Grey',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Geometric Mid-Rise Denim', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 195.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: 'Limited',
        color: 'Navy',
        rating: 4.9
      },
      { 
        id: 5, 
        name: 'Slim Fit Raw Hem', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 139.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: '',
        color: 'Indigo',
        rating: 4.5
      },
      { 
        id: 6, 
        name: 'Wide Leg Selvedge', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: 'Trending',
        color: 'Light Blue',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Distressed Carpenter', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: '',
        color: 'Washed',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Premium Japanese Denim', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop',
        category: 'Jeans',
        badge: 'Luxury',
        color: 'Dark Blue',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(jeansProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-indigo-400/30">
            👖 Denim Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Men's Jeans</h1>
          <p className="text-xl max-w-2xl mx-auto">Premium denim crafted for comfort and style</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/men" className="hover:text-black ml-1">Men</Link> / 
          <span className="text-black ml-1">Jeans</span>
        </div>
      </div>

      {/* Shop by Fit Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Fit</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Slim Fit', 'Straight Fit', 'Relaxed Fit', 'Wide Leg'].map((fit) => (
            <Link 
              key={fit} 
              to={`/men/jeans/${fit.toLowerCase().replace(' ', '-')}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${fit === 'Slim Fit' ? '1548036328-c9fa89d128fa' : fit === 'Straight Fit' ? '1594938298603-c8148c4dae35' : fit === 'Relaxed Fit' ? '1576871337632-b9aef4c17ab9' : '1582555172866-f73bb12a2ab3'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">The Denim Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Our premium jean collection</p>
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
            Shop All Denim →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JeansPage;
