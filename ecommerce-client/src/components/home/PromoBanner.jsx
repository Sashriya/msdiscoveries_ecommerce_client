import { useState } from 'react';

const PromoBanner = ({ 
  message, 
  subtitle, 
  backgroundColor, 
  textColor, 
  ctaText, 
  ctaLink,
  isDismissible 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={`${backgroundColor} ${textColor} py-4 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div>
            <p className="font-semibold tracking-wide">{message}</p>
            {subtitle && <p className="text-sm opacity-90 mt-1">{subtitle}</p>}
          </div>
          {ctaText && ctaLink && (
            <a 
              href={ctaLink}
              className="ml-0 sm:ml-6 px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
      {isDismissible && (
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-70 hover:opacity-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PromoBanner;