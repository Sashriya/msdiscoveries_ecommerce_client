import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../../components/shop/ProductCard';
import Loader from '../../components/common/Loader';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const allProducts = [
      { id: 1, name: 'Classic Denim Jacket', price: 89.99, image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop', category: 'Men' },
      { id: 2, name: 'Slim Fit Chinos', price: 59.99, image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop', category: 'Men' },
    ];
    const filtered = allProducts.filter(p => p.category.toLowerCase() === category?.toLowerCase());
    setTimeout(() => { setProducts(filtered); setIsLoading(false); }, 500);
  }, [category]);

  if (isLoading) return <Loader />;
  return (
    <div className="bg-gray-50 min-h-screen py-12"><div className="max-w-7xl mx-auto px-4"><h1 className="text-4xl font-light mb-8 capitalize">{category} Collection</h1><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{products.map(p => <ProductCard key={p.id} product={p} viewMode="grid" />)}</div></div></div>
  );
};
export default CategoryPage;
