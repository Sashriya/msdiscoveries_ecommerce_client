import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const TopsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const topsProducts = [
      { 
        id: 1, 
        name: 'Poplin Structural Panel Blouse', 
        brand: 'THEKOUR ATELIER',
        price: 79.99, 
        originalPrice: 110.00, 
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'New',
        color: 'White',
        rating: 4.8
      },
      { 
        id: 2, 
        name: 'Asymmetric Raw Sleeveless Jersey', 
        brand: 'THEKOUR ATELIER',
        price: 49.99, 
        originalPrice: 70.00, 
        image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Best Seller',
        color: 'Black',
        rating: 4.7
      },
      { 
        id: 3, 
        name: 'Geometric Oversized Box Weight Top', 
        brand: 'THEKOUR ATELIER',
        price: 89.99, 
        originalPrice: 125.00, 
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'Beige',
        rating: 4.6
      },
      { 
        id: 4, 
        name: 'Responsible Linen Relaxed Silhouette', 
        brand: 'THEKOUR ATELIER',
        price: 69.99, 
        originalPrice: 95.00, 
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Sustainable',
        color: 'Natural',
        rating: 4.9
      },
      { 
        id: 5, 
        name: 'Silk Blend Cami', 
        brand: 'THEKOUR ATELIER',
        price: 59.99, 
        originalPrice: 89.99, 
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb5df?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Trending',
        color: 'Silk',
        rating: 4.7
      },
      { 
        id: 6, 
        name: 'Cashmere Crewneck', 
        brand: 'THEKOUR ATELIER',
        price: 129.99, 
        originalPrice: 199.99, 
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'Luxury',
        color: 'Cream',
        rating: 4.9
      },
      { 
        id: 7, 
        name: 'Cotton Oversized Tee', 
        brand: 'THEKOUR ATELIER',
        price: 39.99, 
        originalPrice: 59.99, 
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
        category: 'Women',
        badge: '',
        color: 'White',
        rating: 4.5
      },
      { 
        id: 8, 
        name: 'Linen Button-Up Shirt', 
        brand: 'THEKOUR ATELIER',
        price: 74.99, 
        originalPrice: 109.99, 
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop',
        category: 'Women',
        badge: 'New',
        color: 'Blue',
        rating: 4.7
      },
    ];
    setTimeout(() => { 
      setProducts(topsProducts); 
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
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/women" className="hover:text-black ml-1">Women</Link> / 
          <span className="text-black ml-1">Tops</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">The Upper Collection</h2>
            <p className="text-gray-500 text-sm mt-1">Elevate your style with our premium tops</p>
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

export default TopsPage;
