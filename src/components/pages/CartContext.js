import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(new Map());
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (mobile) => {
    const updatedCart = new Map(cart);
    const existingItem = updatedCart.get(mobile.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.set(mobile.id, { ...mobile, quantity: 1 });
    }
    setCart(updatedCart);
    setCartItems(Array.from(updatedCart.values()));
  };

  const decreaseQuantity = (mobileId) => {
    const updatedCart = new Map(cart);
    const existingItem = updatedCart.get(mobileId);
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity === 0) {
        updatedCart.delete(mobileId);
      }
      setCart(updatedCart);
      setCartItems(Array.from(updatedCart.values()));
    }
  };

  const increaseQuantity = (mobileId) => {
    const updatedCart = new Map(cart);
    const existingItem = updatedCart.get(mobileId);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart(updatedCart);
      setCartItems(Array.from(updatedCart.values()));
    }
  };

  const removeFromCart = (mobileId) => {
    const updatedCart = new Map(cart);
    updatedCart.delete(mobileId);
    setCart(updatedCart);
    setCartItems(Array.from(updatedCart.values()));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };
  

  const cartData = {
    cart,
    cartItems,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    calculateTotalPrice,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartData}> { children } </CartContext.Provider>
  );
};