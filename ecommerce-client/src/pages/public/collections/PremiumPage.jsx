import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const PremiumPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const premiumProducts = [
      { id: 1, name: 'Atelier Luxury Structure Blazer', brand: 'THEKOUR LUXE', price: 189.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Blazers', badge: 'Luxury', color: 'Black', rating: 4.9 },
      { id: 2, name: 'Raw Silk Signature Shirt', brand: 'THEKOUR LUXE', price: 119.99, originalPrice: 159.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Shirts', badge: 'Premium', color: 'Cream', rating: 4.8 },
      { id: 3, name: 'Fine Wool Oversized Overcoat', brand: 'THEKOUR LUXE', price: 329.99, originalPrice: 450.00, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'Luxury', color: 'Camel', rating: 4.9 },
      { id: 4, name: 'Premium Architectural Trouser', brand: 'THEKOUR LUXE', price: 149.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Navy', rating: 4.7 },
      { id: 5, name: 'Cashmere Sweater', brand: 'THEKOUR LUXE', price: 199.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Knits', badge: 'Luxury', color: 'Grey', rating: 4.9 },
      { id: 6, name: 'Italian Leather Shoes', brand: 'THEKOUR LUXE', price: 249.99, originalPrice: 399.99, image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Premium', color: 'Brown', rating: 4.8 },
    ];
    setTimeout(() => { setProducts(premiumProducts); setIsLoading(false); }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><Link to="/" className="hover:text-black">Home</Link> / <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / <span className="text-black ml-1">Premium Collection</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div><h2 className="text-3xl font-light">The Finest Selection</h2><p className="text-gray-500 text-sm mt-1">Exceptional quality, unparalleled elegance</p></div>
          <div className="flex gap-3"><select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rated</option></select></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(product => <ProductCard key={product.id} product={product} viewMode="grid" />)}</div>
        <div className="text-center mt-12"><Link to="/collections" className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">Explore All Collections →</Link></div>
      </div>
    </div>
  );
};

export default PremiumPage;
