import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import { products as productsData } from "../data/products"; 
import "../styles/Navbar.css";



const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // ✅ Handle typing in search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Match products by name OR brand
    const matches = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        (p.brand && p.brand.toLowerCase().includes(value.toLowerCase()))
    );

    setSuggestions(matches.slice(0, 5)); // show top 5
  };

  // ✅ Handle Enter key → go to SearchResults page
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?query=${searchQuery}`);
        setSuggestions([]);
      }
    }
  };

  // ✅ Handle clicking a suggestion
  const handleSuggestionClick = (name) => {
    setSearchQuery(name);
    setSuggestions([]);
    navigate(`/search?query=${name}`);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">FemmeStyle</Link>
      </div>

      {/* Categories */}
      <ul className="nav-categories">
        <li><NavLink to="/category/Newin">NEW IN</NavLink></li>
        <li><NavLink to="/category/Clothing">CLOTHING</NavLink></li>
        <li><NavLink to="/category/Footwear">FOOTWEAR</NavLink></li>
        <li><NavLink to="/category/Accessories">ACCESSORIES</NavLink></li>
      </ul>

      {/* 🔎 Search */}
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          value={searchQuery}
          onChange={handleSearch}
          onKeyDown={handleKeyDown} // ✅ Enter key support
        />

        {/* ✅ Suggestions dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSuggestionClick(item.name)}
              >
                {item.brand ? `${item.brand} - ${item.name}` : item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Icons */}
      <div className="nav-icons">
        <Link to="/profile" className="icon-item">
          <FaUser /> <span>Profile</span>
        </Link>
        <Link to="/wishlist" className="icon-item">
          <FaHeart /> <span>Wishlist</span>
        </Link>
        <Link to="/cart" className="icon-item">
          <FaShoppingBag /> <span>Bag</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
