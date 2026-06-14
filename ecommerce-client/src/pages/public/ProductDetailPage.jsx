import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import Loader from '../../components/common/Loader';
import RatingStars from '../../components/customer/RatingStars';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const productData = {
      id: parseInt(id) || 1,
      name: 'Verona Mesh Polo',
      price: 54.99,
      originalPrice: 110.00,
      rating: 4.8,
      reviews: 63,
      description: 'Verona Mesh Polo – Where Breathability Meets Tailored Style',
      images: ['https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=700&fit=crop'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Sky Blue', 'Navy', 'Black'],
      inStock: true
    };
    setTimeout(() => {
      setProduct(productData);
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    setIsAdding(true);
    addToCart(product, quantity, selectedSize, selectedColor);
    setTimeout(() => {
      setIsAdding(false);
      navigate('/cart');
    }, 500);
  };

  if (isLoading) return <Loader />;
  if (!product) {
    return (
      <div className="min-h-screen py-12 text-center">
        <h1 className="text-4xl font-light">Product Not Found</h1>
        <Link to="/shop" className="text-black underline">Continue Shopping →</Link>
      </div>
    );
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link> / <Link to="/shop" className="hover:text-black">Shop</Link> / <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img src={product.images[0]} alt={product.name} className="w-full rounded-lg" />
          </div>

          {/* Product Info */}
          <div>
            <RatingStars rating={product.rating} totalReviews={product.reviews} showCount={true} />
            <h1 className="text-3xl font-light mt-2">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center gap-3 my-4">
              <span className="text-3xl font-bold text-red-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">{discountPercent}% OFF</span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Size</label>
              <div className="flex gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={'px-4 py-2 border rounded-lg ' + (selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-300')}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Color</label>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={'px-4 py-2 border rounded-lg capitalize ' + (selectedColor === c ? 'border-black bg-black text-white' : 'border-gray-300')}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 border rounded-lg">-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border rounded-lg">+</button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="w-full bg-black text-white py-3 rounded-lg font-medium disabled:opacity-50"
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;