import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import modelImg from "/assets/model.jpg";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Image */}
      <img src={modelImg} alt="Fashion Model" className="hero-bg" />

      {/* Text Overlay */}
      <div className="hero-text">
        <h2>
          Elevate <span>Your Style!</span>
        </h2>
        <p>Discover the latest trends in casual, elegant, and seasonal wear.</p>
        <Link to="/plist">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
