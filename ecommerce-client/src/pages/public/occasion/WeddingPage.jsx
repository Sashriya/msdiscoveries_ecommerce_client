import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const WeddingPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const weddingProducts = [
      { 
        id: 1, 
        name: 'Architectural Silk Ceremonial Gown', 
        brand: 'THEKOUR ATELIER',
        price: 599.99, 
        originalPrice: 750.00, 
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
        category: 'Bridal',
        badge: 'Best Seller',
        color: 'Ivory',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Sharp Tailored Luxury Tuxedo Frame', 
        brand: 'THEKOUR ATELIER',
        price: 489.99, 
        originalPrice: 620.00, 
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop',
        category: 'Groom',
        badge: 'New',
        color: 'Black',
        rating: 4.8
      },
      { 
        id: 3, 
        name: 'Geometric Satin Suiting Jacket', 
        brand: 'THEKOUR ATELIER',
        price: 219.99, 
        originalPrice: 295.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Suits',
        badge: 'Trending',
        color: 'Navy',
        rating: 4.7
      },
      { 
        id: 4, 
        name: 'Fluid Silk Satin Slit Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 210.00, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: 'Limited',
        color: 'Cream',
        rating: 4.8
      },
      { 
        id: 5, 
        name: 'Bridesmaid Chiffon Dress', 
        brand: 'THEKOUR ATELIER',
        price: 189.99, 
        originalPrice: 279.99, 
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
        category: 'Wedding Party',
        badge: '',
        color: 'Blush',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Embroidered Velvet Shawl', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Luxury',
        color: 'Gold',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Leather Wedding Shoes', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: '',
        color: 'Brown',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Pearl Bridal Jewelry Set', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 149.99, 
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
        category: 'Jewelry',
        badge: 'Best Seller',
        color: 'Pearl',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(weddingProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-rose-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-rose-400/30">
            💍 Forever Moments
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Wedding Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Celebrate your special day with timeless elegance</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/occasion" className="hover:text-black ml-1">Occasion</Link> / 
          <span className="text-black ml-1">Wedding Collection</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Bridal Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Curated pieces for your perfect day</p>
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

export default WeddingPage;