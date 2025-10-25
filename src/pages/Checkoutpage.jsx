import React from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import "../styles/Checkoutpage.css";

const Checkoutpage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="checkout-container">
      <h2>Checkout 🧾</h2>

      {/* Shipping Details */}
      <div className="shipping-box">
        <h3>Shipping Details</h3>
        <p><strong>Name:</strong> Jayshri Kulkarni</p>
        <p><strong>Email:</strong> jayshri@email.com</p>
        <p><strong>Address:</strong> Pune, Maharashtra, India</p>
      </div>

      {/* Order Summary */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="order-items">
          {cart.map((item) => (
            <div className="order-item" key={item.id}>
              <img src={item.image} alt={item.name} className="order-img" />
              <div className="order-details">
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{Number(item.price) * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="order-total">Total: ₹{totalPrice}</h3>
      </div>

      {/* Buttons */}
      <div className="checkout-actions">
        <button
          className="confirm-btn"
          onClick={() => {
            alert("✅ Order placed successfully!");
            clearCart();
            navigate("/");
          }}
        >
          Confirm Order
        </button>
        <button className="cancel-btn" onClick={() => navigate("/cart")}>
          Cancel ❌
        </button>
      </div>
    </div>
  );
};

export default Checkoutpage;
