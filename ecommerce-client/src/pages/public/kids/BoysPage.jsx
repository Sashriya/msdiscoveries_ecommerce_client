import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const BoysPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const boysProducts = [
      { 
        id: 1, 
        name: 'Stylish Structural Outfit Set', 
        brand: 'MINICART JUNIOR',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'Best Seller',
        color: 'Blue',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Comfortable Essential Sweatshirt', 
        brand: 'MINICART JUNIOR',
        price: 29.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'New',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Trendy Modernist Hooded Set', 
        brand: 'MINICART JUNIOR',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'Trending',
        color: 'Navy',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Casual Tailored Panels Wear', 
        brand: 'MINICART JUNIOR',
        price: 34.99, 
        originalPrice: 54.99, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: '',
        color: 'Beige',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Sporty Track Jacket', 
        brand: 'MINICART JUNIOR',
        price: 44.99, 
        originalPrice: 69.99, 
        image: 'https://images.unsplash.com/photo-1519373824682-96d3b1ce2a2c?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'Limited',
        color: 'Red',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Denim Jeans', 
        brand: 'MINICART JUNIOR',
        price: 32.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: '',
        color: 'Blue',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Graphic Print T-Shirt', 
        brand: 'MINICART JUNIOR',
        price: 19.99, 
        originalPrice: 29.99, 
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'Sale',
        color: 'White',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Winter Puffer Jacket', 
        brand: 'MINICART JUNIOR',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=400&h=500&fit=crop',
        category: 'Boys',
        badge: 'New',
        color: 'Black',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(boysProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-blue-400/30">
            👦 Junior Collection
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Boys' Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Stylish and comfortable clothing for young gentlemen</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/kids" className="hover:text-black ml-1">Kids</Link> / 
          <span className="text-black ml-1">Boys' Collection</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tops', 'Bottoms', 'Jackets', 'Accessories'].map((category) => (
            <Link 
              key={category} 
              to={`/kids/boys/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Tops' ? '1542291026-7eec264c27ff' : category === 'Bottoms' ? '1522771930-78848d9293e8' : category === 'Jackets' ? '1519238263530-99bdd11df2ea' : '1503342217505-b0a15ec3261c'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">Featured Styles</h2>
            <p className="text-gray-500 text-sm mt-1">Our most loved looks for boys</p>
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

export default BoysPage;
