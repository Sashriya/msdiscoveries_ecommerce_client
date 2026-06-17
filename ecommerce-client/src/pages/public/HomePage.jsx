import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/home/HeroSection';
import CategoryGrid from '../../components/home/CategoryGrid';
import ProductCarousel from '../../components/home/ProductCarousel';
import PromoBanner from '../../components/home/PromoBanner';
import FeaturedCollection from '../../components/home/FeaturedCollection';
import NewsletterSignup from '../../components/home/NewsletterSignup';

const featuredProducts = [
  { 
    id: 1, 
    name: 'Classic denim jacket', 
    price: 89.99, 
    originalPrice: 129.99, 
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', 
    category: 'men', 
    badge: 'best seller' 
  },
  { 
    id: 2, 
    name: 'Slim fit chinos', 
    price: 59.99, 
    originalPrice: 89.99, 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', 
    category: 'men', 
    badge: 'sale' 
  },
  { 
    id: 3, 
    name: 'Oversized blazer', 
    price: 129.99, 
    originalPrice: 199.99, 
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop', 
    category: 'women', 
    badge: 'new' 
  },
  { 
    id: 4, 
    name: 'Structured leather tote bag', 
    price: 249.99, 
    originalPrice: 320.00, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop', 
    category: 'accessories', 
    badge: 'limited' 
  },
  { 
    id: 5, 
    name: 'Minimalist calfskin belt', 
    price: 89.99, 
    originalPrice: 120.00, 
    image: 'https://images.unsplash.com/photo-1624222247344-550fb864e73f?w=400&h=500&fit=crop', 
    category: 'accessories', 
    badge: 'just in' 
  },
  { 
    id: 6, 
    name: 'Tailored straight-leg trousers', 
    price: 119.99, 
    originalPrice: 165.00, 
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop', 
    category: 'women', 
    badge: 'trending' 
  },
  { 
    id: 7, 
    name: 'Starched geometric poplin shirt', 
    price: 79.99, 
    originalPrice: 110.00, 
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop', 
    category: 'men', 
    badge: 'essential' 
  },
  { 
    id: 8, 
    name: 'Raw acetate square eyewear', 
    price: 139.99, 
    originalPrice: 185.00, 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop', 
    category: 'accessories', 
    badge: 'sold out' 
  },
  { 
    id: 9, 
    name: 'Asymmetric wrap linen silhouette', 
    price: 149.99, 
    originalPrice: 210.00, 
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop', 
    category: 'women', 
    badge: 'sustainable' 
  },
  { 
    id: 10, 
    name: 'Square-toe matte leather loafer', 
    price: 169.99, 
    originalPrice: 220.00, 
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop', 
    category: 'footwear', 
    badge: 'luxury' 
  }
];

const categories = [
  { name: 'Men', image: 'https://images.unsplash.com/photo-1617137968427-85924c800c22?w=600&h=400&fit=crop', link: '/men', itemCount: 245 },
  { name: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-963728d0471e?w=600&h=400&fit=crop', link: '/women', itemCount: 312 },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=400&fit=crop', link: '/accessories', itemCount: 189 },
  { name: 'All Products', image: 'https://images.unsplash.com/photo-1607083206968-13611e3e76db?w=600&h=400&fit=crop', link: '/shop', itemCount: 876 },
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { setTimeout(() => setIsLoading(false), 800); }, []);
  if (isLoading) return <div className="fixed inset-0 bg-white z-50 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div><p className="mt-4 text-gray-600">Loading THEKOUR...</p></div>;
  return (
    <div className="bg-white overflow-x-hidden">
      <HeroSection title="Timeless Elegance" subtitle="Discover THEKOUR's new collection" ctaText="Shop Now" ctaLink="/shop" backgroundImage="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=800&fit=crop" />
      <PromoBanner message="FREE SHIPPING ON ORDERS + • SPRING SALE LIVE" backgroundColor="bg-black" textColor="text-white" isDismissible={true} />
      <section className="py-20 px-4 max-w-7xl mx-auto"><div className="text-center mb-12"><h2 className="text-4xl font-light">Shop by Category</h2></div><CategoryGrid categories={categories} /></section>
      <section className="py-20 px-4 max-w-7xl mx-auto"><div className="flex justify-between items-end mb-12"><h2 className="text-4xl font-light">Featured Collection</h2><Link to="/shop" className="text-sm border-b pb-1">View All →</Link></div><ProductCarousel products={featuredProducts} /></section>
      <FeaturedCollection title="The Art of Italian Craftsmanship" description="Each piece tells a story of heritage and quality." image="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&h=600&fit=crop" linkText="Discover Collection" linkUrl="/collections" reversed={false} />
      <NewsletterSignup />
    </div>
  );
};
export default HomePage;

