import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const NewYearPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newYearProducts = [
      { id: 1, name: 'Premium Midnight Satin Gown', brand: 'THEKOUR ATELIER', price: 189.99, originalPrice: 289.99, image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop', category: 'Party Wear', badge: 'Limited', color: 'Black', rating: 4.9, reviews: 234 },
      { id: 2, name: 'Signature Sharp Tailored Blazer', brand: 'THEKOUR ATELIER', price: 159.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop', category: 'Blazers', badge: 'Best Seller', color: 'Navy', rating: 4.8, reviews: 456 },
      { id: 3, name: 'Essential Metallic Accent Layer', brand: 'THEKOUR ATELIER', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Outerwear', badge: 'New', color: 'Gold', rating: 4.7, reviews: 123 },
      { id: 4, name: 'Limited Edition Silk Trouser', brand: 'THEKOUR ATELIER', price: 89.99, originalPrice: 139.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop', category: 'Bottoms', badge: '', color: 'Silver', rating: 4.6, reviews: 89 },
      { id: 5, name: 'Sequin Party Dress', brand: 'THEKOUR ATELIER', price: 149.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', category: 'Dresses', badge: 'Limited', color: 'Gold', rating: 4.9, reviews: 312 },
      { id: 6, name: 'Celebration Heels', brand: 'THEKOUR ATELIER', price: 99.99, originalPrice: 149.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', badge: 'Trending', color: 'Silver', rating: 4.8, reviews: 178 },
      { id: 7, name: 'Metallic Clutch', brand: 'THEKOUR ATELIER', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', category: 'Accessories', badge: '', color: 'Gold', rating: 4.5, reviews: 67 },
      { id: 8, name: 'Statement Necklace', brand: 'THEKOUR ATELIER', price: 49.99, originalPrice: 79.99, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop', category: 'Jewelry', badge: 'New', color: 'Silver', rating: 4.6, reviews: 45 },
    ];
    setTimeout(() => { setProducts(newYearProducts); setIsLoading(false); }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-yellow-400/30">🎉 New Beginnings</div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">New Year Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">Step into the new year with confidence and style</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / <Link to="/collections" className="hover:text-black ml-1">Collections</Link> / <span className="text-black ml-1">New Year Collection</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div><h2 className="text-3xl font-light">Party Perfect</h2><p className="text-gray-500 text-sm mt-1">Shine bright in our celebratory styles</p></div>
          <div className="flex gap-3"><select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Best Rated</option></select></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(product => <ProductCard key={product.id} product={product} viewMode="grid" />)}</div>
        <div className="text-center mt-12"><Link to="/collections" className="inline-block px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">Explore All Collections →</Link></div>
      </div>
      
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-3">Start the New Year in Style</h2>
          <p className="text-gray-400 mb-6">Subscribe for exclusive early access to new collections and special offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white" />
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearPage;
