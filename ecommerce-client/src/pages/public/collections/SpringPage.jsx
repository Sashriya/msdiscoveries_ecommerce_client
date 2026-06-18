import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const SpringPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const springProducts = [
      { 
        id: 1, 
        name: 'Lightweight Structural Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Shirts',
        badge: 'New',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Signature Linen Blend Top', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Tops',
        badge: 'Best Seller',
        color: 'Beige',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Essential Unstructured Trench', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Outerwear',
        badge: 'Trending',
        color: 'Camel',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Fluid Relaxed Crop Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: '',
        color: 'Navy',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Silk Midi Dress', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'New',
        color: 'Blush',
        rating: 4.9
      },
      { 
        id: 6, 
        name: 'Leather Sandals', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 139.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: '',
        color: 'Tan',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Straw Hat', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Trending',
        color: 'Natural',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Woven Tote Bag', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
        category: 'Bags',
        badge: '',
        color: 'Natural',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(springProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / 
          <span className="text-black ml-1">Spring Collection</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Fresh for Spring</h2>
            <p className="text-gray-500 text-sm mt-1">Lightweight fabrics and vibrant hues</p>
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

export default SpringPage;
