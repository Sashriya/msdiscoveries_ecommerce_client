import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const ShoesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shoesProducts = [
      { 
        id: 1, 
        name: 'Structural Matte Leather Derby', 
        brand: 'THEKOUR ATELIER',
        price: 189.99, 
        originalPrice: 245.00, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Raw Canvas Court Low Trainer', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 135.00, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: 'New',
        color: 'White',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Slip-On Loafer Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 210.00, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: 'Luxury',
        color: 'Brown',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Asymmetric Mid-Top Street Trainer', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 185.00, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: 'Trending',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 5, 
        name: 'Classic Oxford Shoes', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: '',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Running Sneakers', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 169.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: '',
        color: 'Blue',
        rating: 4.6
      },
      { 
        id: 7, 
        name: 'Chelsea Boots', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 279.99, 
        image: 'https://images.unsplash.com/photo-1638247025967-b4e38f30b70f?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: 'Limited',
        color: 'Brown',
        rating: 4.9
      },
      { 
        id: 8, 
        name: 'Slip-On Loafers', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 179.99, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Shoes',
        badge: '',
        color: 'Tan',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(shoesProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/men" className="hover:text-black ml-1">Men</Link> / 
          <span className="text-black ml-1">Shoes</span>
        </div>
      </div>

      {/* Shop by Type Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Sneakers', 'Loafers', 'Boots', 'Oxfords'].map((type) => (
            <Link 
              key={type} 
              to={`/men/shoes/${type.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${type === 'Sneakers' ? '1542291026-7eec264c27ff' : type === 'Loafers' ? '1503454537195-1dcabb73ffb9' : type === 'Boots' ? '1638247025967-b4e38f30b70f' : '1614252369475-531eba835eb1'}?w=400&h=200&fit=crop`}
                alt={type}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white text-xl font-light uppercase tracking-wider">{type}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Footwear Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Essential styles for every step</p>
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
            Shop All Footwear →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;
