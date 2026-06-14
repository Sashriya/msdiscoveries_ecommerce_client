import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessoriesProducts = [
      { 
        id: 1, 
        name: 'Raw Acetate Architectural Sunglasses', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Grained Leather Structural Card Holder', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 110.00, 
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'New',
        color: 'Brown',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Asymmetric Minimalist Chronograph', 
        brand: 'THEKOUR ATELIER',
        price: 289.99, 
        originalPrice: 380.00, 
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Luxury',
        color: 'Silver',
        rating: 4.9
      },
      { 
        id: 4, 
        name: 'Fine Industrial Weave Bracelet', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 95.00, 
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Gold',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Leather Belt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Trending',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Silk Pocket Square', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Navy',
        rating: 4.5
      },
      { 
        id: 7, 
        name: 'Leather Gloves', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 169.99, 
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Limited',
        color: 'Brown',
        rating: 4.8
      },
      { 
        id: 8, 
        name: 'Cashmere Beanie', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Grey',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(accessoriesProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-purple-400/30">
            💎 Complete Your Look
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Accessories</h1>
          <p className="text-xl max-w-2xl mx-auto">Elevate your style with premium accents and details</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Accessories</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Watches', 'Bags', 'Sunglasses', 'Wallets'].map((category) => (
            <Link 
              key={category} 
              to={`/accessories/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Watches' ? '1524805444758-089113d48a6d' : category === 'Bags' ? '1548036328-c9fa89d128fa' : category === 'Sunglasses' ? '1572635196237-14b3f281503f' : '1627123424574-724758594e93'}?w=400&h=200&fit=crop`}
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
            <h2 className="text-3xl font-light">The Finishing Touch</h2>
            <p className="text-gray-500 text-sm mt-1">Essential accessories for the modern wardrobe</p>
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
            to="/shop" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Shop All Accessories →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;