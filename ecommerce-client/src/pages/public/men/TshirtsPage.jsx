import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const TshirtsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tshirtsProducts = [
      { 
        id: 1, 
        name: 'Heavyweight Luxury Cotton Tee', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 75.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Men',
        badge: 'Best Seller',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Raw Edge Mercerized Slit Jersey', 
        brand: 'THEKOUR ATELIER',
        price: 54.99, 
        originalPrice: 80.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Men',
        badge: 'New',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Box Weight Profile Base', 
        brand: 'THEKOUR ATELIER',
        price: 45.99, 
        originalPrice: 65.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Men',
        badge: '',
        color: 'Grey',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Asymmetric Interlock Knit Structure', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 85.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Men',
        badge: 'Limited',
        color: 'Navy',
        rating: 4.9
      },
      { 
        id: 5, 
        name: 'Premium Cotton Crewneck', 
        brand: 'THEKOUR ATELIER',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
        category: 'Men',
        badge: '',
        color: 'White',
        rating: 4.5
      },
      { 
        id: 6, 
        name: 'Relaxed Fit Linen Blend', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop',
        category: 'Men',
        badge: 'Trending',
        color: 'Beige',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Slim Fit Pima Cotton', 
        brand: 'THEKOUR ATELIER',
        price: 44.99, 
        originalPrice: 69.99, 
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb5df?w=400&h=500&fit=crop',
        category: 'Men',
        badge: '',
        color: 'Black',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Oversized Vintage Wash', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=500&fit=crop',
        category: 'Men',
        badge: 'New',
        color: 'Grey',
        rating: 4.8
      },
    ];
    setTimeout(() => { 
      setProducts(tshirtsProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/men" className="hover:text-black ml-1">Men</Link> / 
          <span className="text-black ml-1">T-Shirts</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Bases Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Essential tees for every wardrobe</p>
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
            Explore Complete Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TshirtsPage;
