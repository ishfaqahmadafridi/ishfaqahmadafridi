import React from "react";
import "../styles/FragranceCosmetics.css";

import menFragranceImg from "../assets/menFragrance.jpg";
import womenFragranceImg from "../assets/womenFragrance.jpg";
import cosmeticsImg from "../assets/cosmetics.jpg";
import skincareImg from "../assets/skincare.jpg";

const categories = [
  { name: "Men Fragrances", image: menFragranceImg, link: "#" },
  { name: "Women Fragrances", image: womenFragranceImg, link: "#" },
  { name: "Cosmetics", image: cosmeticsImg, link: "#" },
  { name: "Skincare", image: skincareImg, link: "#" }
];

export default function FragranceCosmetics() {
  return (
    <div className="fragrance-category">
      <h3 className="fragrance-title">Shop By Fragrances & Cosmetics</h3>
      <div className="fragrance-grid">
        {categories.map((cat, index) => (
          <a href={cat.link} className="fragrance-item" key={index}>
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
