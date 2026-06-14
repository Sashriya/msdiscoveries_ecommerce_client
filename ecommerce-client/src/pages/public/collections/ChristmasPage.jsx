import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../components/shop/ProductCard';
import Loader from '../../../components/common/Loader';

const ChristmasPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const christmasProducts = [
      { id: 1, name: 'Premium Wool Blend Piece', brand: 'THEKOUR ATELIER', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Tops', badge: 'Holiday', color: 'Red', rating: 4.8 },
      { id: 2, name: 'Signature Winter Sweater', brand: 'THEKOUR ATELIER', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Knits', badge: 'Best Seller', color: 'Green', rating: 4.7 },
      { id: 3, name: 'Essential Heavy Coat', brand: 'THEKOUR ATELIER', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'New', color: 'Black', rating: 4.9 },
      { id: 4, name: 'Limited Edition Knit Trouser', brand: 'THEKOUR ATELIER', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Grey', rating: 4.6 },
      { id: 5, name: 'Holiday Sweater', brand: 'THEKOUR ATELIER', price: 69.99, originalPrice: 109.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Knits', badge: 'Holiday', color: 'Red', rating: 4.8 },
      { id: 6, name: 'Winter Boots', brand: 'THEKOUR ATELIER', price: 119.99, originalPrice: 179.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', color: 'Brown', rating: 4.7 },
    ];
    setTimeout(() => { setProducts(christmasProducts); setIsLoading(false); }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-red-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-red-400/30">🎄 Holiday Cheer</div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Christmas Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Celebrate the season with cozy and festive styles</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500"><Link to="/" className="hover:text-black">Home</Link> / <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / <span className="text-black ml-1">Christmas Collection</span></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div><h2 className="text-3xl font-light">Holiday Must-Haves</h2><p className="text-gray-500 text-sm mt-1">Cozy knits and festive layers</p></div>
          <div className="flex gap-3"><select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rated</option></select></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(product => <ProductCard key={product.id} product={product} viewMode="grid" />)}</div>
        <div className="text-center mt-12"><Link to="/collections" className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">Explore All Collections →</Link></div>
      </div>
    </div>
  );
};

export default ChristmasPage;