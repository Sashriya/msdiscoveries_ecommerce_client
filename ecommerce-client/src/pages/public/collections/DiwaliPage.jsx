import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const DiwaliPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const diwaliProducts = [
      { id: 1, name: 'Premium Asymmetric Drape Silhouette', brand: 'THEKOUR ATELIER', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Festive Wear', badge: 'Limited', color: 'Gold', rating: 4.9 },
      { id: 2, name: 'Signature Geometric Tunic Strap', brand: 'THEKOUR ATELIER', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Kurtas', badge: 'Best Seller', color: 'Red', rating: 4.8 },
      { id: 3, name: 'Structural Oversized Festive Layer', brand: 'THEKOUR ATELIER', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'New', color: 'Maroon', rating: 4.7 },
      { id: 4, name: 'Limited Tailored Pleated Trouser', brand: 'THEKOUR ATELIER', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Cream', rating: 4.6 },
      { id: 5, name: 'Embroidered Silk Kurta', brand: 'THEKOUR ATELIER', price: 149.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop', category: 'Kurtas', badge: 'Limited', color: 'Gold', rating: 4.9 },
      { id: 6, name: 'Traditional Juttis', brand: 'THEKOUR ATELIER', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', color: 'Gold', rating: 4.7 },
      { id: 7, name: 'Festival Clutch', brand: 'THEKOUR ATELIER', price: 49.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Accessories', badge: '', color: 'Gold', rating: 4.5 },
      { id: 8, name: 'Embellished Shawl', brand: 'THEKOUR ATELIER', price: 89.99, originalPrice: 139.99, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop', category: 'Accessories', badge: 'New', color: 'Red', rating: 4.8 },
    ];
    setTimeout(() => { setProducts(diwaliProducts); setIsLoading(false); }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-orange-400/30">🪔 Festival of Lights</div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Diwali Special</h1>
          <p className="text-xl max-w-2xl mx-auto">Celebrate in style with our festive collection</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><Link to="/" className="hover:text-black">Home</Link> / <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / <span className="text-black ml-1">Diwali Special</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div><h2 className="text-3xl font-light">Festive Favorites</h2><p className="text-gray-500 text-sm mt-1">Traditional elegance meets contemporary style</p></div>
          <div className="flex gap-3"><select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rated</option></select></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(product => <ProductCard key={product.id} product={product} viewMode="grid" />)}</div>
        <div className="text-center mt-12"><Link to="/collections" className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">Explore All Collections →</Link></div>
      </div>
    </div>
  );
};

export default DiwaliPage;
