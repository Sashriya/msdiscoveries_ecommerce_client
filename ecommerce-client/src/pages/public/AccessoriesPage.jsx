import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/shop/ProductCard";
import Loader from "../../components/common/Loader";

const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessoriesProducts = [
      {
        id: 401,
        name: "Leather Crossbody Bag",
        price: 79.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
        category: "Bags",
        badge: "Best Seller",
        color: "Brown",
        rating: 4.8
      },
      {
        id: 402,
        name: "Designer Handbag",
        price: 299.99,
        originalPrice: 499.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
        category: "Bags",
        badge: "Limited",
        color: "Tan",
        rating: 4.9
      },
      {
        id: 403,
        name: "Silk Scarf",
        price: 49.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=500&fit=crop",
        category: "Scarves",
        badge: "Trending",
        color: "Multicolor",
        rating: 4.6
      },
      {
        id: 404,
        name: "Leather Belt",
        price: 49.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
        category: "Belts",
        badge: "",
        color: "Black",
        rating: 4.5
      },
      {
        id: 405,
        name: "Sunglasses",
        price: 89.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop",
        category: "Eyewear",
        badge: "Trending",
        color: "Black",
        rating: 4.7
      },
      {
        id: 406,
        name: "Leather Wallet",
        price: 59.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop",
        category: "Wallets",
        badge: "",
        color: "Brown",
        rating: 4.6
      },
      {
        id: 407,
        name: "Watch",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=500&fit=crop",
        category: "Watches",
        badge: "Luxury",
        color: "Silver",
        rating: 4.9
      },
      {
        id: 408,
        name: "Wool Scarf",
        price: 39.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=500&fit=crop",
        category: "Scarves",
        badge: "",
        color: "Grey",
        rating: 4.4
      },
    ];
    setTimeout(() => {
      setProducts(accessoriesProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) return <Loader />;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner Section */}
      <div className="relative h-[50vh] min-h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1920&h=600&fit=crop)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="relative text-center text-white px-4">
          <div className="inline-block px-4 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm mb-4 border border-purple-400/30">
            💎 Complete Your Look
          </div>
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Accessories</h1>
          <p className="text-xl max-w-2xl mx-auto">Complete your look with THEKOUR's premium accessories</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <span className="text-black ml-1">Accessories</span>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-light">Shop by Category</h2>
            <p className="text-gray-500 text-sm mt-1">Find the perfect finishing touch</p>
          </div>
          <div className="flex gap-3">
            <select className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-black">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rated</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} viewMode="grid" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;