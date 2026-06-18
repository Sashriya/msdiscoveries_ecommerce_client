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
        name: 'Structural Matte Leather Pump', 
        brand: 'THEKOUR ATELIER',
        price: 169.99, 
        originalPrice: 220.00, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Raw Canvas Asymmetric Low Trainer', 
        brand: 'THEKOUR ATELIER',
        price: 94.99, 
        originalPrice: 130.00, 
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Trending',
        color: 'White',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Square-Toe Slip-On Loafer', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 195.00, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Tan',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Linear Strapped Chunky Sandal Form', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 175.00, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'New',
        color: 'Brown',
        rating: 4.7
      },
      { 
        id: 5, 
        name: 'Luxury Leather Ankle Boot', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 279.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Luxury',
        color: 'Brown',
        rating: 4.9
      },
      { 
        id: 6, 
        name: 'Elegance Pointed Toe Heel', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e60a2a1?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Nude',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Sporty Mesh Running Shoe', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Trending',
        color: 'Pink',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Classic Leather Oxford', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1551548307-8cb78b7fefbf?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Black',
        rating: 4.8
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
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449505278894-297fdb3fbc6b?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Shoes</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Heels', 'Flats', 'Boots', 'Sneakers'].map((category) => (
            <Link 
              key={category} 
              to={`/women/shoes/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Heels' ? '1542291026-7eec264c27ff' : category === 'Flats' ? '1519238263530-99bdd11df2ea' : category === 'Boots' ? '1549298916-f52d724204b4' : '1542291026-7eec264c27ff'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">The Footwear Matrix</h2>
            <p className="text-gray-500 text-sm mt-1">Premium shoes for every occasion</p>
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
            Explore Complete Footwear Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;
