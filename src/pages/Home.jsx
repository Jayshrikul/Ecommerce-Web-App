import React from "react";
import {useNavigate, Link } from "react-router-dom";
import "../styles/Home.css";
import ShopByCategory from "../components/ShopByCategory";
import { products } from "../data/products";

const Home = () => {
 const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Casual Elegance, Everyday Style</h1>
          <p>Discover seasonal trends and timeless outfits made for you.</p>
          <Link to="/plist">
            <button className="shop-btn" onClick={() => navigate("/products")}>
          Shop Now
        </button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <ShopByCategory />

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-list">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2 className="section-title">Stay in the Loop</h2>
        <p>Subscribe to get updates on new arrivals and seasonal sales.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Casual Wear Store | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
