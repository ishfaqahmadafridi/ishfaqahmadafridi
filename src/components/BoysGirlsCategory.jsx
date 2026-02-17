import React from "react";
import "../styles/BoysGirlsCategory.css";

import teenBoys from "../assets/teenBoys.jpg";
import teenGirls from "../assets/teenGirls.jpg";
import kidsBoys from "../assets/kidBoys.jpg";
import kidsGirls from "../assets/kidGirls.jpg";

const categories = [
  { name: "Teen Boys", image: teenBoys, link: "#" },
  { name: "Teen Girls", image: teenGirls, link: "#" },
  { name: "Kids Boys", image: kidsBoys, link: "#" },
  { name: "Kids Girls", image: kidsGirls, link: "#" }
];

export default function BoysGirlsCategory() {
  return (
    <div className="boys-girls-category">
      <h3 className="boys-girls-title">Shop By Boys & Girls Category</h3>
      <div className="boys-girls-grid">
        {categories.map((cat, index) => (
          <a href={cat.link} className="boys-girls-item" key={index}>
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
