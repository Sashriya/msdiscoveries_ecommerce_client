import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const CasualPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const casualProducts = [
      { 
        id: 1, 
        name: 'Heavyweight Luxury Sweatshirt', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 120.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'Best Seller',
        color: 'Grey',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Unstructured Relaxed Jersey Hoodie', 
        brand: 'THEKOUR ATELIER',
        price: 94.99, 
        originalPrice: 135.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'New',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Modular French Terry Lounge Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 110.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: '',
        color: 'Navy',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Geometric Premium Combed Cotton Shorts', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 85.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'Trending',
        color: 'Beige',
        rating: 4.7
      },
      { 
        id: 5, 
        name: 'Oversized Cotton Crew Sweater', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 149.99, 
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: '',
        color: 'Cream',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Relaxed Fit Jogger Pants', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 99.99, 
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb5df?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Linen Blend Button-Up Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 84.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'New',
        color: 'White',
        rating: 4.6
      },
      { 
        id: 8, 
        name: 'Premium Cotton Zip Hoodie', 
        brand: 'THEKOUR ATELIER',
        price: 109.99, 
        originalPrice: 159.99, 
        image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=500&fit=crop',
        category: 'Casual',
        badge: 'Limited',
        color: 'Olive',
        rating: 4.8
      },
    ];
    setTimeout(() => { 
      setProducts(casualProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-green-400/30">
            🏖️ Everyday Essentials
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Casual Wear</h1>
          <p className="text-xl max-w-2xl mx-auto">Elevate your everyday style with our premium casual collection</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/occasion" className="hover:text-black ml-1">Occasion</Link> / 
          <span className="text-black ml-1">Casual Wear</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Everyday Comfort</h2>
            <p className="text-gray-500 text-sm mt-1">Premium pieces for your daily rotation</p>
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
            Explore Complete Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
