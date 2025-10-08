import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products as productsData } from "../data/products"; // ✅ import
import ProductCard from "../components/ProductCard";
import "../styles/Plist.css";

const Plist = ({ products = productsData, onAddToCart, onWishlistToggle }) => {
  const { categoryName } = useParams();
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  let filteredProducts = products;

  // Category filtering
  if (categoryName && categoryName.toLowerCase() === "newin") {
    filteredProducts = filteredProducts.filter((p) => p.isNew);
  } else if (categoryName && categoryName.toLowerCase() !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );
  }

  // Search
  filteredProducts = filteredProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Sorting
  if (sortOption === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "az") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortOption === "za") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return (
    <div className="category-page">
      {categoryName && <h2>{categoryName}</h2>}

      {/* Filters */}
      <div className="filters">
        <div>
          <input
            type="text"
            placeholder="Search by product or brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <label>Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onWishlistToggle={onWishlistToggle}
            />
          ))
        ) : (
          <p>No products found 🚫</p>
        )}
      </div>
    </div>
  );
};

export default Plist;
