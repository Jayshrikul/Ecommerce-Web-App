import React, { useState } from "react";
import { FaShoppingCart, FaPlus, FaMinus, FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/Wishlistcontext";
import { useCart } from "../context/Cartcontext";
import "../styles/Productcard.css";

const Productcard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 

  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Check if this product is in wishlist
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAdd = () => {
    setQuantity(1);
    addToCart(product, 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      addToCart(product, 1);
      return newQty;
    });
  };

  const handleDecrease = () => {
    setQuantity((prev) => {
      const newQty = prev > 1 ? prev - 1 : 0;
      addToCart(product, -1);
      return newQty;
    });
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <>
      <div className="product-card">
        {/* Wishlist Heart (Top Left) */}
        <div className="wishlist-icon" onClick={handleWishlist}>
          <FaHeart size={16} color={isWishlisted ? "red" : "#888"} />
        </div>

        {/* Floating Cart (Top Right) */}
        {quantity === 0 && (
          <div className="floating-cart" onClick={handleAdd}>
            <FaShoppingCart size={16} />
          </div>
        )}

        {/* Product Image */}
        <div className="image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
            onClick={() => setIsOpen(true)} // ✅ open modal
          />
        </div>

        {/* Product Details */}
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>₹{product.price}</p>

        {/* Quantity Controls */}
        {quantity > 0 && (
          <div className="quantity-controls">
            <button className="qty-btn" onClick={handleDecrease}>
              <FaMinus />
            </button>
            <span className="qty">{quantity}</span>
            <button className="qty-btn" onClick={handleIncrease}>
              <FaPlus />
            </button>
          </div>
        )}
      </div>

      {/* ✅ Modal Popup */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ❌
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Productcard;
