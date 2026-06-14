import React from 'react';

const RatingStars = ({ rating = 0, totalReviews = 0, size = 'md', showCount = false }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const starSize = sizes[size] || sizes.md;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className={`${starSize} text-yellow-400 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        
        {/* Half Star */}
        {hasHalfStar && (
          <svg className={`${starSize} text-yellow-400 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )}
        
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className={`${starSize} text-gray-300 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      {showCount && totalReviews > 0 && (
        <span className="text-sm text-gray-500">({totalReviews} reviews)</span>
      )}
    </div>
  );
};

export default RatingStars;