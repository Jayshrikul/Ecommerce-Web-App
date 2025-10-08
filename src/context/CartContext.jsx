import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qtyChange = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        const updated = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyChange }
            : item
        );

        // remove if quantity goes to 0
        return updated.filter((item) => item.quantity > 0);
      } else {
        return qtyChange > 0
          ? [...prevCart, { ...product, quantity: qtyChange }]
          : prevCart;
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
