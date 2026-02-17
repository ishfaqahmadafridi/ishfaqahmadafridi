import React from "react";
import "../styles/WomenFootwear.css";

// Import images from assets folder
import heelsImg from "../assets/heels.jpg";
import flatsImg from "../assets/flats.jpg";
import sneakersImg from "../assets/sneakers.jpg";
import khussaImg from "../assets/khussa.jpg";

// Define category data
const categories = [
  { name: "Heels", image: heelsImg, link: "#" },
  { name: "Flats", image: flatsImg, link: "#" },
  { name: "Sneakers", image: sneakersImg, link: "#" },
  { name: "Sandals", image: khussaImg, link: "#" },
];

export default function WomenFootwear() {
  return (
    <div className="women-footwear">
      <h3 className="section-title">Women Footwear</h3>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <a href={cat.link} className="category-item" key={idx}>
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
