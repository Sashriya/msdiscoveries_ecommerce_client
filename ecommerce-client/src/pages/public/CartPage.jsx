import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const subtotal = cartTotal;
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleProceedToCheckout = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      localStorage.setItem('redirectAfterLogin', '/checkout');
      navigate('/login');
    } else {
      navigate('/checkout');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 text-center">
        <h1 className="text-4xl font-light mb-4">Your Cart is Empty</h1>
        <Link to="/shop" className="inline-block bg-black text-white px-8 py-3 rounded-lg">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-light mb-8">Shopping Cart ({cartItems.length})</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <Link to={'/product/' + item.id} className="font-semibold">{item.name}</Link>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">✕</button>
                  </div>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize || 'N/A'} | Color: {item.selectedColor || 'N/A'}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">${item.price}</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 border rounded-lg">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 border rounded-lg">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className="border-t pt-3"><div className="flex justify-between font-semibold"><span>Total</span><span>${total.toFixed(2)}</span></div></div>
            </div>
            <button onClick={handleProceedToCheckout} className="w-full mt-6 bg-black text-white py-3 rounded-lg font-medium">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;