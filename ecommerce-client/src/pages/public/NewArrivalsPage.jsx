import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const NewArrivalsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newArrivals = [
      { 
        id: 101, 
        name: 'Wool Blend Coat', 
        price: 199.99, 
        originalPrice: 299.99, 
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', 
        category: 'Women', 
        badge: 'New',
        color: 'Camel',
        rating: 4.8
      },
      { 
        id: 102, 
        name: 'Leather Boots', 
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', 
        category: 'Footwear', 
        badge: 'Just In',
        color: 'Brown',
        rating: 4.7
      },
      { 
        id: 103, 
        name: 'Cashmere Sweater', 
        price: 149.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', 
        category: 'Women', 
        badge: 'New',
        color: 'Cream',
        rating: 4.9
      },
      { 
        id: 104, 
        name: 'Designer Handbag', 
        price: 299.99, 
        originalPrice: 499.99, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', 
        category: 'Accessories', 
        badge: 'Limited',
        color: 'Tan',
        rating: 4.9
      },
      { 
        id: 105, 
        name: 'Oversized Blazer', 
        price: 129.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', 
        category: 'Women', 
        badge: 'New',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 106, 
        name: 'Premium Sneakers', 
        price: 89.99, 
        originalPrice: 139.99, 
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', 
        category: 'Footwear', 
        badge: 'New',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 107, 
        name: 'Silk Scarf', 
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', 
        category: 'Accessories', 
        badge: 'New',
        color: 'Multicolor',
        rating: 4.6
      },
      { 
        id: 108, 
        name: 'Leather Jacket', 
        price: 249.99, 
        originalPrice: 399.99, 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop', 
        category: 'Men', 
        badge: 'New',
        color: 'Black',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(newArrivals); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">New Arrivals</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Just In</h2>
            <p className="text-gray-500 text-sm mt-1">The latest styles, fresh off the runway</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsPage;