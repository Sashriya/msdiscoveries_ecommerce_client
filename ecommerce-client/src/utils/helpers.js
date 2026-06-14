// Format price to currency
export const formatPrice = (price, currency = '$') => {
  return `${currency}${price.toFixed(2)}`;
};

// Calculate discount percentage
export const calculateDiscount = (originalPrice, salePrice) => {
  if (!originalPrice || !salePrice) return 0;
  const discount = ((originalPrice - salePrice) / originalPrice) * 100;
  return Math.round(discount);
};

// Format date
export const formatDate = (date, format = 'MM/DD/YYYY') => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  
  if (format === 'MM/DD/YYYY') {
    return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
  } else if (format === 'DD/MM/YYYY') {
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  } else if (format === 'YYYY-MM-DD') {
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }
  return d.toLocaleDateString();
};

// Truncate text
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate random ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Debounce function
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validate phone number
export const isValidPhone = (phone) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return regex.test(phone);
};

// Validate password strength
export const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return Math.min(strength, 4);
};

// Get password strength text and color
export const getPasswordStrengthInfo = (password) => {
  const strength = getPasswordStrength(password);
  const texts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  return { strength, text: texts[strength], color: colors[strength] };
};

// Local storage helpers
export const storage = {
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};

// Session storage helpers
export const session = {
  set: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  get: (key) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  remove: (key) => {
    sessionStorage.removeItem(key);
  },
  clear: () => {
    sessionStorage.clear();
  },
};

// Scroll to top
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({ top: 0, behavior });
};

// Get window dimensions
export const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

// Check if mobile device
export const isMobile = () => {
  return window.innerWidth < 768;
};

// Check if tablet device
export const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

// Check if desktop device
export const isDesktop = () => {
  return window.innerWidth >= 1024;
};

// Get product URL
export const getProductUrl = (productId, productName) => {
  const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `/product/${productId}/${slug}`;
};

// Extract query params from URL
export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params) {
    result[key] = value;
  }
  return result;
};

// Build URL with query params
export const buildUrl = (baseUrl, params) => {
  const url = new URL(baseUrl, window.location.origin);
  Object.keys(params).forEach(key => {
    if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
      url.searchParams.append(key, params[key]);
    }
  });
  return url.toString();
};

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

// Get rating stars array
export const getRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return {
    full: fullStars,
    half: hasHalfStar,
    empty: emptyStars,
  };
};

// Filter products by price range
export const filterByPrice = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

// Filter products by category
export const filterByCategory = (products, categories) => {
  if (!categories.length) return products;
  return products.filter(product => categories.includes(product.category));
};

// Filter products by size
export const filterBySize = (products, sizes) => {
  if (!sizes.length) return products;
  return products.filter(product => 
    product.sizes && product.sizes.some(size => sizes.includes(size))
  );
};

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted;
  }
};

// Calculate estimated delivery date
export const getEstimatedDelivery = (shippingMethod = 'standard') => {
  const today = new Date();
  let daysToAdd = 5;
  
  if (shippingMethod === 'express') daysToAdd = 2;
  if (shippingMethod === 'next-day') daysToAdd = 1;
  
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + daysToAdd);
  
  return deliveryDate;
};