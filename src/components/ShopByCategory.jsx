import { useNavigate } from "react-router-dom";


import gownCover from "../assets/categoryCovers/dresses.jpg";
import topsCover from "../assets/categoryCovers/tops.jpg";
import accCover from "../assets/categoryCovers/accessories.jpg";

function ShopByCategory() {
  const navigate = useNavigate();

  const categories = [
    { name: "Gowns", img: gownCover },
    { name: "Tops", img: topsCover },
    { name: "Accessories", img: accCover },
  ];

  return (
    <div className="categories">
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Shop by Category
      </h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={cat.img} alt={cat.name} />
            <h3>{cat.name}</h3>
            <button>Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;
