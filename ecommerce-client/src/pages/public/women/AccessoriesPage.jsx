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
        name: 'Structured Grained Leather Tote Bag', 
        brand: 'THEKOUR ATELIER',
        price: 249.99, 
        originalPrice: 320.00, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
        category: 'Bags',
        badge: 'Best Seller',
        color: 'Tan',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Raw Acetate Architectural Eyewear', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 185.00, 
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
        category: 'Eyewear',
        badge: 'Trending',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Asymmetric Minimalist Calfskin Belt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 120.00, 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
        category: 'Belts',
        badge: '',
        color: 'Brown',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Geometric Liquid Silver Link Bracelet', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 160.00, 
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop',
        category: 'Jewelry',
        badge: 'Limited',
        color: 'Silver',
        rating: 4.8
      },
      { 
        id: 5, 
        name: 'Silk Scarf', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop',
        category: 'Scarves',
        badge: 'New',
        color: 'Multicolor',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Leather Crossbody Bag', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Bags',
        badge: 'Best Seller',
        color: 'Brown',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Gold Plated Hoop Earrings', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
        category: 'Jewelry',
        badge: '',
        color: 'Gold',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Cashmere Wrap Scarf', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 189.99, 
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop',
        category: 'Scarves',
        badge: 'Luxury',
        color: 'Grey',
        rating: 4.9
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
          <div className="inline-block px-4 py-1 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-pink-400/30">
            💎 Women's Accessories
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Accessories</h1>
          <p className="text-xl max-w-2xl mx-auto">Complete your look with our premium women's accessories</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Accessories</span>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Bags', 'Jewelry', 'Scarves', 'Eyewear'].map((category) => (
            <Link 
              key={category} 
              to={`/women/accessories/${category.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${category === 'Bags' ? '1584917865442-de89df76afd3' : category === 'Jewelry' ? '1535632066927-ab7c9ab60908' : category === 'Scarves' ? '1601924994987-69e26d50dc26' : '1572635196237-14b3f281503f'}?w=400&h=200&fit=crop`}
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
            <p className="text-gray-500 text-sm mt-1">Essential accessories for the modern woman</p>
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
            to="/women" 
            className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
          >
            Shop All Women's Accessories →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
