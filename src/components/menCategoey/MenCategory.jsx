import React from "react";
import "../../styles/MenCategory.css";

// Sample categories list — update this as needed
import shalwarImg from "../../assets/shalwarImg.jpg";
import kurtaImg from "../../assets/kurtaImg.jpg";
import waistcoatImg from "../../assets/waistcoatImg.jpg";
import groomsSherwaniImg from "../../assets/groomsSherwaniImg.jpg";

const categories = [
  { name: "Shalwar Kameez", image: shalwarImg, link: "#" },
  { name: "Kurta", image: kurtaImg, link: "#" },
  { name: "Waistcoat", image: waistcoatImg, link: "#" },
  { name: "Groom Sherwani", image: groomsSherwaniImg, link: "#" },
];

export default function MenCategory() {
  return (
    <div className="men-category">
      <h3 className="section-title">Shop By Men Category</h3>
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
