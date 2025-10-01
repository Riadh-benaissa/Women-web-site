import React from 'react';
import { Link } from 'react-router-dom';
import image_montre from '../Create Next App_files/hero4.webp';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="image-container">
        <img src={image_montre} alt="" className="hero-image" />
      </div>
      <div className="overlay">
        <div style={{ textAlign: "center", lineHeight: "0.2" }}>
          <p className="hero-text">ELEGANCE REDEFINED</p>
          <p style={{ fontSize: "18px", color: "white", marginTop: "40px" }}>
            Earth-inspired textures meet minimalist design in our latest collection
          </p>
          <Link to="/catalog" style={{ color: "#fff",fontSize:"20px", fontWeight: "bold", marginTop: "40px", display: "inline-block" }}>
            Voir le catalogue →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
