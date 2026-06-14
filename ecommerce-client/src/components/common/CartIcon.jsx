import { useState } from 'react';

const CartIcon = ({ itemCount = 0 }) => {
  const [setIsHovered] = useState(false);

  return (
    <a
      href="/cart"
      className="relative p-2 rounded-md hover:bg-gray-100 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Shopping cart"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
      
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {itemCount}
        </span>
      )}
    </a>
  );
};

export default CartIcon;