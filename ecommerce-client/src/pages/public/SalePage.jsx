import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const SalePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const saleProducts = [
      { id: 501, name: 'Classic Denim Jacket', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Men', discount: '31%', badge: 'Sale', color: 'Blue', rating: 4.8 },
      { id: 502, name: 'Slim Fit Chinos', price: 59.99, originalPrice: 89.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Men', discount: '33%', badge: 'Sale', color: 'Khaki', rating: 4.6 },
      { id: 503, name: 'Oversized Blazer', price: 129.99, originalPrice: 199.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', category: 'Women', discount: '35%', badge: 'Sale', color: 'Black', rating: 4.9 },
      { id: 504, name: 'Leather Crossbody Bag', price: 79.99, originalPrice: 119.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop', category: 'Accessories', discount: '33%', badge: 'Sale', color: 'Brown', rating: 4.7 },
      { id: 505, name: 'Cashmere Sweater', price: 149.99, originalPrice: 249.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop', category: 'Women', discount: '40%', badge: 'Sale', color: 'Cream', rating: 4.9 },
      { id: 506, name: 'Premium Sneakers', price: 69.99, originalPrice: 99.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop', category: 'Footwear', discount: '30%', badge: 'Sale', color: 'White', rating: 4.7 },
      { id: 507, name: 'Wool Blend Coat', price: 149.99, originalPrice: 299.99, image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=500&fit=crop', category: 'Women', discount: '50%', badge: 'Flash Sale', color: 'Camel', rating: 4.8 },
      { id: 508, name: 'Leather Boots', price: 119.99, originalPrice: 229.99, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400&h=500&fit=crop', category: 'Footwear', discount: '48%', badge: 'Sale', color: 'Brown', rating: 4.7 },
    ];
    setTimeout(() => { setProducts(saleProducts); setIsLoading(false); }, 500);
  }, []);

  // Timer logic - Sale ends in 5 days from now
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section with Box Style */}
      <div className="relative bg-gradient-to-br from-red-700 to-red-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 border-2 border-white rounded-full transform -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Left Side - Sale Info */}
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-white/30">
                🔥 Limited Time Offer
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white tracking-tight">MID-YEAR <span className="text-yellow-400">SALE</span></h1>
              <p className="text-white/80 text-lg mb-6 max-w-md">Up to <span className="text-yellow-400 font-bold text-2xl">50% OFF</span> on selected items</p>
              
              {/* Sale Features Boxes */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">50%</div>
                  <div className="text-xs text-white/70">OFF</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">FREE</div>
                  <div className="text-xs text-white/70">SHIPPING</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-center border border-white/20">
                  <div className="text-2xl font-bold text-yellow-400">30</div>
                  <div className="text-xs text-white/70">DAY RETURNS</div>
                </div>
              </div>
            </div>

            {/* Right Side - Timer Box */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 text-center min-w-[280px] border border-white/20">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-3">⏰ Sale Ends In</p>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-2">Days</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-2">Hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-2">Mins</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[60px]">
                    <span className="text-3xl md:text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <p className="text-white/60 text-xs mt-2">Secs</p>
                </div>
              </div>
              <button className="mt-5 w-full bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Sale</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Flash Sale Picks</h2>
            <p className="text-gray-500 text-sm mt-1">Grab these deals before they're gone</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Discount: High to Low</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
        
        {/* Shop More Button */}
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            View All Sale Items →
          </Link>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-3">Get First Dibs</h2>
          <p className="text-gray-400 mb-6">Subscribe for exclusive early access to sales and promotions</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white" />
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">Notify Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;