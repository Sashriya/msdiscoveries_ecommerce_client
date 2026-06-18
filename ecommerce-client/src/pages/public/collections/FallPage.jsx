import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const FallPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fallProducts = [
      { 
        id: 1, 
        name: 'Premium Heavyweight Hooded Piece', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
        category: 'Hoodies',
        badge: 'Best Seller',
        color: 'Grey',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Signature Thermal Sweater', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
        category: 'Knits',
        badge: 'New',
        color: 'Cream',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Essential Structured Trench Layer', 
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
        name: 'Limited Wool Tailored Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: '',
        color: 'Charcoal',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Leather Biker Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 249.99, 
        originalPrice: 399.99, 
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop',
        category: 'Jackets',
        badge: 'Limited',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 6, 
        name: 'Wool Blend Coat', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 299.99, 
        image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop',
        category: 'Outerwear',
        badge: 'Best Seller',
        color: 'Camel',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Cashmere Scarf', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 8, 
        name: 'Leather Boots', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 259.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: 'Trending',
        color: 'Brown',
        rating: 4.8
      },
    ];
    setTimeout(() => { 
      setProducts(fallProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / 
          <span className="text-black ml-1">Fall Collection</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Cozy for Fall</h2>
            <p className="text-gray-500 text-sm mt-1">Warm layers and rich textures for the season</p>
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

export default FallPage;
