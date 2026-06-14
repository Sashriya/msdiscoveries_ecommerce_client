import React from 'react';

const RatingStars = ({ rating, totalReviews, size = 'md', showCount = false }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className={`${sizes[size]} text-yellow-400 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className={`${sizes[size]} text-yellow-400 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className={`${sizes[size]} text-gray-300 fill-current`} viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      {showCount && totalReviews !== undefined && (
        <span className="text-sm text-gray-500">({totalReviews} reviews)</span>
      )}
    </div>
  );
};

export default RatingStars;