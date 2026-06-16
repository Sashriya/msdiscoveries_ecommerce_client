import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const SustainablePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sustainableProducts = [
      { id: 1, name: 'Organic Raw Cotton Blend Piece', brand: 'THEKOUR ECO', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Tops', badge: 'Eco', color: 'Natural', rating: 4.8 },
      { id: 2, name: 'Recycled Fiber Signature Top', brand: 'THEKOUR ECO', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Tops', badge: 'Sustainable', color: 'White', rating: 4.7 },
      { id: 3, name: 'Biodegradable Tailored Overcoat', brand: 'THEKOUR ECO', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'Eco', color: 'Beige', rating: 4.8 },
      { id: 4, name: 'Circular Design Seamless Trouser', brand: 'THEKOUR ECO', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Grey', rating: 4.6 },
      { id: 5, name: 'Hemp Blend Shirt', brand: 'THEKOUR ECO', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Shirts', badge: 'Sustainable', color: 'Green', rating: 4.7 },
      { id: 6, name: 'Eco Sneakers', brand: 'THEKOUR ECO', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Eco', color: 'White', rating: 4.6 },
    ];
    setTimeout(() => { setProducts(sustainableProducts); setIsLoading(false); }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 to-green-900/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-green-400/30">🌱 Conscious Choice</div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Sustainable Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Fashion that respects our planet</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><Link to="/" className="hover:text-black">Home</Link> / <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / <span className="text-black ml-1">Sustainable Collection</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div><h2 className="text-3xl font-light">Eco-Friendly Essentials</h2><p className="text-gray-500 text-sm mt-1">Style that doesn't cost the earth</p></div>
          <div className="flex gap-3"><select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rated</option></select></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(product => <ProductCard key={product.id} product={product} viewMode="grid" />)}</div>
        <div className="text-center mt-12"><Link to="/collections" className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">Explore All Collections →</Link></div>
      </div>
    </div>
  );
};

export default SustainablePage;
