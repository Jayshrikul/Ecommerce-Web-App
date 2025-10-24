import React from "react";
import {useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlistpage = ({ onAddToCart }) => {
  const { wishlist } = useWishlist(); 
  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist 💔</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlistpage;
