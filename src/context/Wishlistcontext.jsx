import React, { createContext, useContext, useState } from "react";

const Wishlistcontext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Toggle wishlist logic (only needs product)
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <Wishlistcontext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </Wishlistcontext.Provider>
  );
};

export const useWishlist = () => useContext(Wishlistcontext);
