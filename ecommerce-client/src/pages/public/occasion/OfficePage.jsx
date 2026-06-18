import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const OfficePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const officeProducts = [
      { 
        id: 1, 
        name: 'Sharp Structural Double-Breasted Blazer', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 275.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Blazers',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Tailored Straight-Leg Suiting Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 165.00, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Trousers',
        badge: 'New',
        color: 'Charcoal',
        rating: 4.8
      },
      { 
        id: 3, 
        name: 'Starched Geometric Poplin Pop-Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 120.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Shirts',
        badge: 'Trending',
        color: 'White',
        rating: 4.7
      },
      { 
        id: 4, 
        name: 'Asymmetric Slim Wrap Corporate Sheath', 
        brand: 'THEKOUR ATELIER',
        price: 149.99, 
        originalPrice: 210.00, 
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Limited',
        color: 'Navy',
        rating: 4.8
      },
      { 
        id: 5, 
        name: 'Merino Wool V-Neck Sweater', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 189.99, 
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
        category: 'Knits',
        badge: '',
        color: 'Grey',
        rating: 4.6
      },
      { 
        id: 6, 
        name: 'Leather Oxford Shoes', 
        brand: 'THEKOUR ATELIER',
        price: 179.99, 
        originalPrice: 249.99, 
        image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: 'Best Seller',
        color: 'Brown',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Silk Tie Set', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 79.99, 
        image: 'https://images.unsplash.com/photo-1589756823695-92bc1d8d3f6e?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: '',
        color: 'Multicolor',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Leather Briefcase', 
        brand: 'THEKOUR ATELIER',
        price: 249.99, 
        originalPrice: 399.99, 
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
        category: 'Bags',
        badge: 'Luxury',
        color: 'Brown',
        rating: 4.9
      },
    ];
    setTimeout(() => { 
      setProducts(officeProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/occasion" className="hover:text-black ml-1">Occasion</Link> / 
          <span className="text-black ml-1">Office Wear</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Power Suiting Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Command attention with professional sophistication</p>
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

export default OfficePage;
