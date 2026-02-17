import React from "react";
import "../styles/ManFootwear.css";

// Import images from assets folder
import peshawariImg from "../assets/peshawari.jpg";
import sandalImg from "../assets/sandal.jpg";
import shoesImg from "../assets/shoes.jpg";
import chapalImg from "../assets/chappel.jpg";

// Define category data
const categories = [
  { name: "Peshawari", image: peshawariImg, link: "#" },
  { name: "Sandal", image: sandalImg, link: "#" },
  { name: "Shoes", image: shoesImg, link: "#" },
  { name: "Chapal", image: chapalImg, link: "#" },
];

export default function ManFootwear() {
  return (
    <div className="man-footwear">
      <h3 className="section-title">Man Footwear</h3>
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
