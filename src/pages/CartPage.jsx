import React from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import "../styles/Cartpage.css";

const Cartpage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Bag 👜</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Your bag is empty</p>
      ) : (
        <div className="cart-content">
          {/* LEFT SIDE - CART ITEMS */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>{item.quantity} × ₹{item.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="checkout-box">
            <h3>Order Summary</h3>
            <p className="total"><strong>Total: ₹{totalPrice}</strong></p>
            <button
              className="proceed-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
