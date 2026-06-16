import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const WinterPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const winterProducts = [
      { 
        id: 1, 
        name: 'Premium Cowl-Neck Knitwear', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Knits',
        badge: 'Best Seller',
        color: 'Cream',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Signature Heavy Oversized Sweater', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Sweaters',
        badge: 'Trending',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Essential Structural Shearling Coat', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Coats',
        badge: 'New',
        color: 'Camel',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Limited Wool Flannel Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: '',
        color: 'Charcoal',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Cashmere Beanie & Scarf Set', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Navy',
        rating: 4.5
      },
      { 
        id: 6, 
        name: 'Leather Winter Boots', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: 'Best Seller',
        color: 'Brown',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Down Puffer Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 299.99, 
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop',
        category: 'Outerwear',
        badge: 'Limited',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 8, 
        name: 'Wool Blend Trousers', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 139.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: '',
        color: 'Grey',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(winterProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483662475426-804582eb7fe5?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-blue-400/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-blue-300/30">
            ❄️ Seasonal Edit
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Winter Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Stay cozy and stylish with our winter essentials</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / 
          <span className="text-black ml-1">Winter Collection</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Stay Warm in Style</h2>
            <p className="text-gray-500 text-sm mt-1">Discover our curated winter wardrobe essentials</p>
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
            to="/collections" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Explore All Collections →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WinterPage;
