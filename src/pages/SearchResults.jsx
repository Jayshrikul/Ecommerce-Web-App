import React from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/SearchResult.css"; 

const SearchResults = ({ searchQuery }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryFromUrl = queryParams.get("query")?.toLowerCase() || "";
  const query = searchQuery ? searchQuery.toLowerCase() : queryFromUrl;

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      (p.brand && p.brand.toLowerCase().includes(query)) ||
      p.category.toLowerCase().includes(query)
  );

  if (!query) {
    return <p className="search-message">Please enter a search term 🔍</p>;
  }

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="search-message">No products found 🚫</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
