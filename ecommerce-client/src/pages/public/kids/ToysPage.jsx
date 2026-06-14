import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const ToysPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const toysProducts = [
      { 
        id: 1, 
        name: 'Architectural Wooden Block Set', 
        brand: 'MINICART STUDIO',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'Best Seller',
        color: 'Natural',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Monochrome Cognitive Puzzle Frame', 
        brand: 'MINICART STUDIO',
        price: 29.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'Trending',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Eco-Resin Objects Kit', 
        brand: 'MINICART STUDIO',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'New',
        color: 'Multicolor',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Minimalist Tactile Sculpture Pair', 
        brand: 'MINICART STUDIO',
        price: 34.99, 
        originalPrice: 54.99, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: '',
        color: 'White',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Interactive Learning Tablet', 
        brand: 'MINICART STUDIO',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1525877442103-5ddb208b3e7e?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'Limited',
        color: 'Blue',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Magnetic Building Tiles', 
        brand: 'MINICART STUDIO',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'Best Seller',
        color: 'Rainbow',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Wooden Train Set', 
        brand: 'MINICART STUDIO',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1536405286946-6a243d8ca427?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: '',
        color: 'Wood',
        rating: 4.7
      },
      { 
        id: 8, 
        name: 'Art Supplies Kit', 
        brand: 'MINICART STUDIO',
        price: 44.99, 
        originalPrice: 69.99, 
        image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=500&fit=crop',
        category: 'Toys',
        badge: 'Trending',
        color: 'Colorful',
        rating: 4.8
      },
    ];
    setTimeout(() => { 
      setProducts(toysProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1536405286946-6a243d8ca427?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-green-400/30">
            🧸 Play & Learn
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Toys & Objects</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover our curated collection of educational and creative toys</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/kids" className="hover:text-black ml-1">Kids</Link> / 
          <span className="text-black ml-1">Toys</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Learning Through Play</h2>
            <p className="text-gray-500 text-sm mt-1">Toys that inspire creativity and imagination</p>
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
            Explore All Toys →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysPage;