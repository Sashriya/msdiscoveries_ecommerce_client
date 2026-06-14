import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCollection = ({ title, description, image, linkText, linkUrl, reversed, badge, secondaryImage, discount }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(image);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optional image hover effect for secondary image
  const handleMouseEnter = () => {
    if (secondaryImage) {
      setCurrentImage(secondaryImage);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 px-4 max-w-7xl mx-auto transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background decorative element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 lg:gap-16 items-center relative z-10`}>
        
        {/* Image Container with Enhanced Effects */}
        <div className="flex-1 group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Main Image */}
            <img 
              src={currentImage} 
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image Badge (Optional) */}
            {badge && (
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold uppercase tracking-wider rounded-full shadow-lg">
                  {badge}
                </span>
              </div>
            )}
            
            {/* Discount Badge */}
            {discount && (
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-red-600 text-white px-3 py-2 rounded-full text-center shadow-lg transform rotate-0 hover:rotate-3 transition-transform">
                  <span className="text-xs font-semibold uppercase">Save</span>
                  <span className="block text-lg font-bold">{discount}%</span>
                  <span className="text-xs">OFF</span>
                </div>
              </div>
            )}
            
            {/* Hover Overlay with Quick Action */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <Link 
                to={linkUrl}
                className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-black hover:text-white"
              >
                Explore Now
              </Link>
            </div>
          </div>
          
          {/* Thumbnail Indicators (if secondary image exists) */}
          {secondaryImage && (
            <div className="flex justify-center gap-2 mt-4">
              <button 
                onClick={() => setCurrentImage(image)}
                className={`w-2 h-2 rounded-full transition-all ${currentImage === image ? 'w-6 bg-black' : 'bg-gray-300'}`}
              />
              <button 
                onClick={() => setCurrentImage(secondaryImage)}
                className={`w-2 h-2 rounded-full transition-all ${currentImage === secondaryImage ? 'w-6 bg-black' : 'bg-gray-300'}`}
              />
            </div>
          )}
        </div>
        
        {/* Content Container with Enhanced Typography */}
        <div className="flex-1 text-center md:text-left">
          {/* Pre-title with decorative line */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-8 h-px bg-black"></div>
            <span className="text-xs tracking-[0.2em] text-gray-500 uppercase font-medium">
              {reversed ? 'Exclusive Edition' : 'Curated Collection'}
            </span>
            <div className="w-8 h-px bg-black hidden md:block"></div>
          </div>
          
          {/* Main Title with Animation */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight tracking-tight">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {description}
          </p>
          
          {/* Features List (Optional) */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto md:mx-0">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-600">Secure Payment</span>
            </div>
          </div>
          
          {/* CTA Button with Enhanced Design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to={linkUrl}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:gap-3 hover:shadow-lg"
            >
              {linkText}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            {/* Secondary CTA */}
            <Link 
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              Shop All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-500">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-500">10K+ Happy Customers</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedCollection;