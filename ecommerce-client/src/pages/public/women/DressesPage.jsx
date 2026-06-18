import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const DressesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dressesProducts = [
      { 
        id: 1, 
        name: 'Asymmetric Draped Silk Gown', 
        brand: 'THEKOUR ATELIER',
        price: 229.99, 
        originalPrice: 295.00, 
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Structural Column Knit Midi Dress', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 195.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'New',
        color: 'Navy',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Poplin A-Line Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 175.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: '',
        color: 'White',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Minimalist Linear Shift Sleeveless Dress', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 160.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Trending',
        color: 'Beige',
        rating: 4.8
      },
      { 
        id: 5, 
        name: 'Floral Print Maxi Dress', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: '',
        color: 'Multicolor',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Velvet Evening Gown', 
        brand: 'THEKOUR ATELIER',
        price: 279.99, 
        originalPrice: 399.99, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Luxury',
        color: 'Burgundy',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Linen Summer Dress', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 149.99, 
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: '',
        color: 'Yellow',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Bodycon Midi Dress', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Limited',
        color: 'Black',
        rating: 4.8
      },
    ];
    setTimeout(() => { 
      setProducts(dressesProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Dresses</span>
        </div>
      </div>

      {/* Shop by Style Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-light text-center mb-8">Shop by Style</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Maxi', 'Midi', 'Mini', 'Evening'].map((style) => (
            <Link 
              key={style} 
              to={`/women/dresses/${style.toLowerCase()}`}
              className="group relative h-40 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
              <img 
                src={`https://images.unsplash.com/photo-${style === 'Maxi' ? '1495385794356-15371f348c31' : style === 'Midi' ? '1585487000160-6ebcfceb0d03' : style === 'Mini' ? '1515372039744-b8f02a3ae446' : '1539008835657-9e8e9680c956'}?w=400&h=200&fit=crop`}
                alt={style}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white text-xl font-light uppercase tracking-wider">{style}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Dress Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Essential styles for every occasion</p>
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
            Shop All Dresses →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DressesPage;
