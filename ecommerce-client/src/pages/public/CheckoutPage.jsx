import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', state: '', zipCode: '', country: 'US',
    cardNumber: '', expiryDate: '', cvv: ''
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      localStorage.setItem('redirectAfterLogin', '/checkout');
      navigate('/login');
    }
    if (cartItems.length === 0) navigate('/shop');
  }, [navigate, cartItems]);

  const subtotal = cartTotal;
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const generateOrderNumber = () => {
    return 'THEKOUR-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 4).toUpperCase();
  };

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      const orderNumber = generateOrderNumber();
      const orderDetails = {
        orderId: orderNumber,
        orderDate: new Date().toISOString(),
        items: cartItems,
        shippingAddress: {
          name: formData.firstName + ' ' + formData.lastName,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
          email: formData.email
        },
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
        status: 'confirmed'
      };
      const existingOrders = JSON.parse(localStorage.getItem('thekour_orders') || '[]');
      existingOrders.unshift(orderDetails);
      localStorage.setItem('thekour_orders', JSON.stringify(existingOrders));
      clearCart();
      setIsPlacingOrder(false);
      navigate('/track-order/' + orderNumber);
    }, 2000);
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-light mb-8">Checkout</h1>
        <div className="flex mb-8 border-b">
          <button onClick={() => setStep(1)} className={'pb-3 px-6 ' + (step === 1 ? 'border-b-2 border-black text-black' : 'text-gray-400')}>1. Shipping</button>
          <button onClick={() => setStep(2)} className={'pb-3 px-6 ' + (step === 2 ? 'border-b-2 border-black text-black' : 'text-gray-400')}>2. Payment</button>
          <button onClick={() => setStep(3)} className={'pb-3 px-6 ' + (step === 3 ? 'border-b-2 border-black text-black' : 'text-gray-400')}>3. Review</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="Address" onChange={(e) => setFormData({...formData, address: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="City" onChange={(e) => setFormData({...formData, city: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="State" onChange={(e) => setFormData({...formData, state: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  <input type="text" placeholder="Zip Code" onChange={(e) => setFormData({...formData, zipCode: e.target.value})} className="px-4 py-2 border rounded-lg" />
                </div>
                <button onClick={() => setStep(2)} className="mt-6 bg-black text-white px-6 py-2 rounded-lg">Continue</button>
              </div>
            )}
            {step === 2 && (
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="Card Number" onChange={(e) => setFormData({...formData, cardNumber: e.target.value})} className="w-full px-4 py-2 border rounded-lg" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/YY" onChange={(e) => setFormData({...formData, expiryDate: e.target.value})} className="px-4 py-2 border rounded-lg" />
                    <input type="text" placeholder="CVV" onChange={(e) => setFormData({...formData, cvv: e.target.value})} className="px-4 py-2 border rounded-lg" />
                  </div>
                </div>
                <button onClick={() => setStep(3)} className="mt-6 bg-black text-white px-6 py-2 rounded-lg">Review Order</button>
              </div>
            )}
            {step === 3 && (
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold">Shipping Address</h3>
                    <p>{formData.firstName} {formData.lastName}<br />{formData.address}<br />{formData.city}, {formData.state} {formData.zipCode}</p>
                  </div>
                  <div className="border-b pb-4">
                    <h3 className="font-semibold">Order Items</h3>
                    {cartItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm py-1">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={handlePlaceOrder} disabled={isPlacingOrder} className="w-full bg-black text-white py-3 rounded-lg font-medium">
                  {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                </button>
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="border-t pt-3 mt-3"><div className="flex justify-between font-semibold"><span>Total</span><span>${total.toFixed(2)}</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;