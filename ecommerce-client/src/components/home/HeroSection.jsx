import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle, ctaText, ctaLink, backgroundImage, badge = 'NEW ARRIVALS', badgeIcon = '✨' }) => {
  return (
    <div 
      className="relative h-screen max-h-[800px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/40"></div>
      
      {/* Subtle Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      {/* Content */}
      <div className="relative text-center text-white px-4 max-w-4xl mx-auto z-10 animate-fadeInUp">
        {/* Badge with Icon */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm tracking-wider mb-6 border border-white/20 animate-fadeIn">
          <span>{badgeIcon}</span>
          <span>{badge}</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide leading-tight animate-slideUp">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed text-white/90 animate-slideUp delay-100">
          {subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp delay-200">
          <Link 
            to={ctaLink}
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium tracking-wide shadow-lg hover:shadow-xl"
          >
            <span>{ctaText}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link 
            to="/collections"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/70 text-[10px] tracking-wider">SCROLL</span>
          <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;