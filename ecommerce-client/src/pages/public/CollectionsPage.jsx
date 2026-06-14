import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/common/Loader';

const CollectionsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  const collections = [
    { 
      id: 1, 
      name: 'Summer Collection', 
      description: 'Light, breezy, and effortlessly stylish for the sunny days ahead.',
      image: 'https://images.unsplash.com/photo-1483985988355-963728d0471e?w=800&h=600&fit=crop',
      link: '/collections/summer',
      color: 'from-orange-600/70',
      icon: '☀️',
      itemCount: 124
    },
    { 
      id: 2, 
      name: 'Winter Collection', 
      description: 'Stay cozy and stylish with our warm winter essentials.',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=600&fit=crop',
      link: '/collections/winter',
      color: 'from-blue-600/70',
      icon: '❄️',
      itemCount: 98
    },
    { 
      id: 3, 
      name: 'Spring Collection', 
      description: 'Fresh styles for the season of renewal and new beginnings.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop',
      link: '/collections/spring',
      color: 'from-green-600/70',
      icon: '🌸',
      itemCount: 156
    },
    { 
      id: 4, 
      name: 'Fall Collection', 
      description: 'Embrace autumn with warm tones and cozy layers.',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=600&fit=crop',
      link: '/collections/fall',
      color: 'from-amber-600/70',
      icon: '🍂',
      itemCount: 112
    },
    { 
      id: 5, 
      name: 'Capsule Collection', 
      description: 'Essential pieces for every wardrobe, curated for versatility.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
      link: '/collections/capsule',
      color: 'from-gray-600/70',
      icon: '💎',
      itemCount: 42
    },
    { 
      id: 6, 
      name: 'Sustainable Edit', 
      description: 'Eco-friendly fashion that respects our planet.',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=600&fit=crop',
      link: '/collections/sustainable',
      color: 'from-green-600/70',
      icon: '🌱',
      itemCount: 67
    },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1920&h=800&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4 tracking-wide">
            📦 Curated Selections
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wide">Our Collections</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Discover carefully curated collections designed for every season and occasion</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Collections</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-3">Shop by Collection</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Explore our thoughtfully curated collections, each telling a unique story</p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link 
              key={collection.id} 
              to={collection.link}
              className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === collection.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} to-transparent opacity-70 transition-opacity duration-500`}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {collection.icon}
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3 transform transition-all duration-500 delay-75 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between transform transition-all duration-500 delay-150 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs text-white/80">{collection.itemCount} items</span>
                    <span className="text-sm font-medium flex items-center gap-1">
                      Explore Collection
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Free Shipping</h3>
            <p className="text-sm text-gray-500">On orders over $75</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Easy Returns</h3>
            <p className="text-sm text-gray-500">30-day return policy</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Secure Payment</h3>
            <p className="text-sm text-gray-500">100% secure transactions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="font-semibold mb-1">Global Shipping</h3>
            <p className="text-sm text-gray-500">Worldwide delivery</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-white mb-3">Be the First to Know</h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">Subscribe for early access to new collections and exclusive drops</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            />
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;