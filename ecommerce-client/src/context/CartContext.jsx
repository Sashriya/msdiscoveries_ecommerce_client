import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem('thekour_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('thekour_cart', JSON.stringify(cartItems));
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartCount(count);
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
          category: product.category,
          quantity: quantity,
          selectedSize: selectedSize,
          selectedColor: selectedColor,
          addedAt: new Date().toISOString()
        }];
      }
    });
  };

  const removeFromCart = (itemId, size = null, color = null) => {
    setCartItems(prevItems => 
      prevItems.filter(item => !(item.id === itemId && item.selectedSize === size && item.selectedColor === color))
    );
  };

  const updateQuantity = (itemId, newQuantity, size = null, color = null) => {
    if (newQuantity < 1) {
      removeFromCart(itemId, size, color);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider value={{
      cartItems, cartCount, cartTotal, isCartOpen,
      addToCart, removeFromCart, updateQuantity, clearCart, toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
