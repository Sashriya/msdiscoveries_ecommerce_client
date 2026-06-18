import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const BeachPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const beachProducts = [
      { 
        id: 1, 
        name: 'Fluid Linen Resort Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 120.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'Best Seller',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Geometric Tailored Swim Architecture', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 95.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'New',
        color: 'Navy',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Unstructured Lightweight Cover Layer', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 165.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'Trending',
        color: 'Beige',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Asymmetric Slide Sandal Outline', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 110.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: '',
        color: 'Brown',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Breezy Linen Shorts', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'Best Seller',
        color: 'Khaki',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Straw Beach Hat', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'Trending',
        color: 'Natural',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Oversized Beach Towel', 
        brand: 'THEKOUR ATELIER',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1503504491565-8e6e2335785e?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: '',
        color: 'Striped',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Resort Slides', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 74.99, 
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop',
        category: 'Beach Wear',
        badge: 'New',
        color: 'Black',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(beachProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/occasion" className="hover:text-black ml-1">Occasion Wear</Link> / 
          <span className="text-black ml-1">Beach Wear</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Resort Essentials</h2>
            <p className="text-gray-500 text-sm mt-1">Curated for your next getaway</p>
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
            to="/occasion" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Explore All Occasion Wear →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeachPage;
