import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const PantsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pantsProducts = [
      { 
        id: 1, 
        name: 'Geometric Relaxed Wide-Leg Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 119.99, 
        originalPrice: 165.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'New',
        color: 'Beige',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Asymmetric Pleated Tailored Form', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 180.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.9
      },
      { 
        id: 3, 
        name: 'Linear Slim Wool Cigarette Trouser', 
        brand: 'THEKOUR ATELIER',
        price: 109.99, 
        originalPrice: 150.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Grey',
        rating: 4.7
      },
      { 
        id: 4, 
        name: 'Structural Cropped Flare Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 99.99, 
        originalPrice: 140.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Trending',
        color: 'Navy',
        rating: 4.6
      },
      { 
        id: 5, 
        name: 'High-Waisted Wide Leg Pants', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 129.99, 
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb5df?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Cream',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Pleated Palazzo Pants', 
        brand: 'THEKOUR ATELIER',
        price: 94.99, 
        originalPrice: 139.99, 
        image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'New',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 7, 
        name: 'Tailored Wool Trousers', 
        brand: 'THEKOUR ATELIER',
        price: 139.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Luxury',
        color: 'Charcoal',
        rating: 4.9
      },
      { 
        id: 8, 
        name: 'Linen Blend Cropped Pants', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 119.99, 
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Sustainable',
        color: 'Natural',
        rating: 4.6
      },
    ];
    setTimeout(() => { 
      setProducts(pantsProducts); 
      setIsLoading(false); 
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1483985988355-963728d0471e?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-purple-400/30">
            👖 Women's Pants
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Pants Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Discover our curated selection of premium pants and trousers</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Pants</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Lower Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Elevate your style with our premium pants</p>
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
            Explore Complete Collection →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PantsPage;
