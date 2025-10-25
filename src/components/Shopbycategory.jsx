import { useNavigate } from "react-router-dom";

function Shopbycategory() {
  const navigate = useNavigate();

  const categories = [
    { name: "Gowns", img: "/assets/Categorycovers/dresses.jpg" },
    { name: "Tops", img: "/assets/Categorycovers/tops.jpg" },
    { name: "Accessories", img: "/assets/Categorycovers/accessories.jpg" },
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

export default Shopbycategory;
