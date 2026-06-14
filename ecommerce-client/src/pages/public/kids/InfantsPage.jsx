import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const InfantsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const infantsProducts = [
      { 
        id: 1, 
        name: 'Premium Organic Knit Outfit', 
        brand: 'MINICART JUNIOR',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'Best Seller',
        color: 'Cream',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Soft Structural Cotton Romper', 
        brand: 'MINICART JUNIOR',
        price: 29.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'New',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 3, 
        name: 'Trendy Combed Minimalist Set', 
        brand: 'MINICART JUNIOR',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'Trending',
        color: 'Blue',
        rating: 4.7
      },
      { 
        id: 4, 
        name: 'Casual Fine-Weave Basics Panel', 
        brand: 'MINICART JUNIOR',
        price: 34.99, 
        originalPrice: 54.99, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: '',
        color: 'Beige',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Bamboo Sleepsuit', 
        brand: 'MINICART JUNIOR',
        price: 44.99, 
        originalPrice: 69.99, 
        image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'Organic',
        color: 'Pink',
        rating: 4.9
      },
      { 
        id: 6, 
        name: 'Knitted Cardigan', 
        brand: 'MINICART JUNIOR',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1492509346181-1d3c4e0fcdc8?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: '',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Baby Booties Set', 
        brand: 'MINICART JUNIOR',
        price: 24.99, 
        originalPrice: 39.99, 
        image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'Best Seller',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 8, 
        name: 'Winter Snowsuit', 
        brand: 'MINICART JUNIOR',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=500&fit=crop',
        category: 'Infants',
        badge: 'New',
        color: 'Pink',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(infantsProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1482062364825-616fd23b4fcb?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/60 to-teal-400/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-teal-400/30">
            🍼 Baby Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Baby Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Soft and cozy essentials for your little ones</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/kids" className="hover:text-black ml-1">Kids</Link> / 
          <span className="text-black ml-1">Baby Collection</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Onesies', 'Sleepwear', 'Outerwear', 'Accessories'].map((category) => (
            <Link 
              key={category} 
              to={`/kids/infants/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Onesies' ? '1519238263530-99bdd11df2ea' : category === 'Sleepwear' ? '1542291026-7eec264c27ff' : category === 'Outerwear' ? '1492509346181-1d3c4e0fcdc8' : '1516627145497-ae6968895b74'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">Gentle Essentials</h2>
            <p className="text-gray-500 text-sm mt-1">Soft, safe, and stylish for your baby</p>
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
            to="/kids" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Explore Complete Kids Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfantsPage;