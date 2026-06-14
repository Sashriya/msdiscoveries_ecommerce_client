// API endpoints (replace with your actual API URLs)
export const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';
export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCT: (id) => `${API_BASE_URL}/products/${id}`,
  CATEGORIES: `${API_BASE_URL}/categories`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  ORDERS: `${API_BASE_URL}/orders`,
  WISHLIST: `${API_BASE_URL}/wishlist`,
  CART: `${API_BASE_URL}/cart`,
  REVIEWS: `${API_BASE_URL}/reviews`,
};

// Product categories
export const CATEGORIES = {
  MEN: 'Men',
  WOMEN: 'Women',
  ACCESSORIES: 'Accessories',
  FOOTWEAR: 'Footwear',
  SALE: 'Sale',
  NEW_ARRIVALS: 'New Arrivals',
};

// Product sizes
export const SIZES = {
  MEN: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  WOMEN: ['XS', 'S', 'M', 'L', 'XL'],
  FOOTWEAR: ['7', '8', '9', '10', '11', '12'],
  ACCESSORIES: ['One Size'],
  PANTS: ['28', '30', '32', '34', '36', '38'],
};

// Colors
export const COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Navy', value: '#000080' },
  { name: 'Gray', value: '#808080' },
  { name: 'Brown', value: '#8B4513' },
  { name: 'Beige', value: '#F5F5DC' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Green', value: '#008000' },
  { name: 'Yellow', value: '#FFFF00' },
];

// Shipping options
export const SHIPPING_OPTIONS = [
  { id: 'standard', name: 'Standard Shipping', price: 5.99, days: '3-5 business days', freeThreshold: 75 },
  { id: 'express', name: 'Express Shipping', price: 14.99, days: '1-2 business days', freeThreshold: null },
  { id: 'next-day', name: 'Next Day Delivery', price: 24.99, days: 'Next business day', freeThreshold: null },
];

// Payment methods
export const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '💰' },
  { id: 'apple-pay', name: 'Apple Pay', icon: '📱' },
  { id: 'google-pay', name: 'Google Pay', icon: '🤖' },
];

// Order statuses
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
};

// Order status colors
export const ORDER_STATUS_COLORS = {
  [ORDER_STATUS.PENDING]: 'bg-yellow-100 text-yellow-800',
  [ORDER_STATUS.PROCESSING]: 'bg-blue-100 text-blue-800',
  [ORDER_STATUS.SHIPPED]: 'bg-purple-100 text-purple-800',
  [ORDER_STATUS.DELIVERED]: 'bg-green-100 text-green-800',
  [ORDER_STATUS.CANCELLED]: 'bg-red-100 text-red-800',
  [ORDER_STATUS.REFUNDED]: 'bg-gray-100 text-gray-800',
};

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'thekour_auth_token',
  USER_DATA: 'thekour_user_data',
  CART: 'thekour_cart',
  WISHLIST: 'thekour_wishlist',
  ADDRESSES: 'thekour_addresses',
  RECENTLY_VIEWED: 'thekour_recently_viewed',
};

// App constants
export const APP_CONSTANTS = {
  APP_NAME: 'THEKOUR',
  APP_DESCRIPTION: 'Premium fashion for the modern lifestyle',
  FREE_SHIPPING_THRESHOLD: 75,
  RETURN_DAYS: 30,
  MAX_QUANTITY_PER_ITEM: 10,
  MIN_QUANTITY_PER_ITEM: 1,
};

// Social media links
export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/thekour',
  FACEBOOK: 'https://facebook.com/thekour',
  TWITTER: 'https://twitter.com/thekour',
  PINTEREST: 'https://pinterest.com/thekour',
  YOUTUBE: 'https://youtube.com/thekour',
};

// Footer links
export const FOOTER_LINKS = {
  SHOP: [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Sale', href: '/sale' },
  ],
  SUPPORT: [
    { name: 'Help Center', href: '/help' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Order Tracking', href: '/track-order' },
    { name: 'Size Guide', href: '/size-guide' },
  ],
  COMPANY: [
    { name: 'About Us', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Contact', href: '/contact' },
  ],
  LEGAL: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
};

// Validation patterns
export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  ZIP_CODE: /^\d{5}(-\d{4})?$/,
};

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid phone number',
  PASSWORD_MISMATCH: 'Passwords do not match',
  WEAK_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number and special character',
  NETWORK_ERROR: 'Network error. Please try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Item not found',
  OUT_OF_STOCK: 'This item is out of stock',
};

// Currency settings
export const CURRENCY = {
  CODE: 'USD',
  SYMBOL: '$',
  POSITION: 'before',
};

// Pagination settings
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 12,
  LIMIT_OPTIONS: [12, 24, 48, 96],
};