import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const PartyPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const partyProducts = [
      { 
        id: 1, 
        name: 'Asymmetric Cocktail Silhouette Gown', 
        brand: 'THEKOUR ATELIER',
        price: 249.99, 
        originalPrice: 320.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 2, 
        name: 'Sharp Tailored Velvet Evening Blazer', 
        brand: 'THEKOUR ATELIER',
        price: 289.99, 
        originalPrice: 395.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Blazers',
        badge: 'Luxury',
        color: 'Navy',
        rating: 4.8
      },
      { 
        id: 3, 
        name: 'Structural Satin Crop Mix Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 160.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Tops',
        badge: 'Trending',
        color: 'Silver',
        rating: 4.7
      },
      { 
        id: 4, 
        name: 'Geometric Midnight Wide-Leg Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 185.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Bottoms',
        badge: 'New',
        color: 'Black',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'Sequin Embellished Mini Dress', 
        brand: 'THEKOUR ATELIER',
        price: 199.99, 
        originalPrice: 279.99, 
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop',
        category: 'Dresses',
        badge: 'Trending',
        color: 'Gold',
        rating: 4.8
      },
      { 
        id: 6, 
        name: 'Patent Leather Heeled Boots', 
        brand: 'THEKOUR ATELIER',
        price: 159.99, 
        originalPrice: 229.99, 
        image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop',
        category: 'Footwear',
        badge: '',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 7, 
        name: 'Crystal Embellished Clutch', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 149.99, 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
        category: 'Accessories',
        badge: 'Limited',
        color: 'Silver',
        rating: 4.8
      },
      { 
        id: 8, 
        name: 'Statement Hoop Earrings', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop',
        category: 'Jewelry',
        badge: '',
        color: 'Gold',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(partyProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-pink-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-pink-400/30">
            ✨ After Dark
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Party Wear</h1>
          <p className="text-xl max-w-2xl mx-auto">Make an entrance with our show-stopping evening collection</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/occasion" className="hover:text-black ml-1">Occasion</Link> / 
          <span className="text-black ml-1">Party Wear</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Evening Edit</h2>
            <p className="text-gray-500 text-sm mt-1">Dress to impress with our party-ready collection</p>
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

export default PartyPage;
