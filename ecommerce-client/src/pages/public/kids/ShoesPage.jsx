import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const ShoesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const kidsShoesProducts = [
      { 
        id: 1, 
        name: 'Minimalist Sport Trainer', 
        brand: 'MINICART JUNIOR',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: 'Best Seller',
        color: 'White/Blue',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Raw Canvas Court Shoe', 
        brand: 'MINICART JUNIOR',
        price: 29.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: 'Trending',
        color: 'White',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Ergonomic Runner', 
        brand: 'MINICART JUNIOR',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: 'New',
        color: 'Blue/Red',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Structural Daily Leather Sneaker', 
        brand: 'MINICART JUNIOR',
        price: 34.99, 
        originalPrice: 54.99, 
        image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: '',
        color: 'Black',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Lightweight Mesh Runner', 
        brand: 'MINICART JUNIOR',
        price: 44.99, 
        originalPrice: 69.99, 
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7515?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: '',
        color: 'Grey/Neon',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Eco-Friendly Canvas Sneaker', 
        brand: 'MINICART JUNIOR',
        price: 32.99, 
        originalPrice: 49.99, 
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: 'Eco',
        color: 'Natural',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Velcro Strap School Shoe', 
        brand: 'MINICART JUNIOR',
        price: 27.99, 
        originalPrice: 44.99, 
        image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: '',
        color: 'Black',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Glow in Dark Sneaker', 
        brand: 'MINICART JUNIOR',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a5d9a2?w=400&h=500&fit=crop',
        category: 'Kids',
        badge: 'Fun',
        color: 'Neon Green',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(kidsShoesProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-green-400/30">
            👟 Little Feet, Big Style
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Kids' Footwear</h1>
          <p className="text-xl max-w-2xl mx-auto">Comfortable, durable, and stylish shoes for every adventure</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/kids" className="hover:text-black ml-1">Kids</Link> / 
          <span className="text-black ml-1">Shoes</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Youth Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Quality footwear for active kids</p>
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

export default ShoesPage;