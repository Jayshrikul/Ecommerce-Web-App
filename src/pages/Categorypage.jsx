import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import Productcard from "../components/Productcard";

function Categorypage() {
  const { categoryName } = useParams();

  // normalize category (handles dashes & lowercase)
  const normalizedCategory = categoryName.replace(/-/g, " ").toLowerCase();

  // filter products
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === normalizedCategory
  );

  return (
    <div className="category-page">
  <h2>{categoryName}</h2>

  <div className="product-grid">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <Productcard key={product.id} product={product} />
      ))
    ) : (
      <p>No products found.</p>
    )}
  </div>
</div>
)};
export default Categorypage;
