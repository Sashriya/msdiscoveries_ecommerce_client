import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const JacketsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jacketsProducts = [
      { 
        id: 1, 
        name: 'Structural Twill Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 189.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Asymmetric Raw Zip Shell', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 210.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'New',
        color: 'Brown',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Fine Wool Oversized Coat', 
        brand: 'THEKOUR ATELIER',
        price: 299.99, 
        originalPrice: 395.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Luxury',
        color: 'Grey',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Minimalist Utility Layering', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 185.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: '',
        color: 'Olive',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Bomber Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Trending',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Denim Trucker Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 179.99, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: '',
        color: 'Blue',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Puffer Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 249.99, 
        originalPrice: 349.99, 
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Limited',
        color: 'Navy',
        rating: 4.9
      },
      { 
        id: 8, 
        name: 'Leather Moto Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 299.99, 
        originalPrice: 449.99, 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(jacketsProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/men" className="hover:text-black ml-1">Men</Link> / 
          <span className="text-black ml-1">Jackets</span>
        </div>
      </div>

      {/* Shop by Type Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Bomber', 'Denim', 'Leather', 'Puffer'].map((type) => (
            <Link 
              key={type} 
              to={`/men/jackets/${type.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${type === 'Bomber' ? '1551028719-00167b16eac5' : type === 'Denim' ? '1576871337632-b9aef4c17ab9' : type === 'Leather' ? '1551028719-00167b16eac5' : '1539533113208-f6df8cc8b543'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">The Outerwear Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Our premium jacket collection</p>
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
            Shop All Outerwear →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JacketsPage;
