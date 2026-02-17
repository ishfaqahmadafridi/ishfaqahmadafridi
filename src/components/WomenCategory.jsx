import React from "react";
import "../styles/WomenCategory.css";

import unstitchedImg from "../assets/unstitchedImg.jpg";
import stitchedImg from "../assets/stitchedImg.jpg";
import kurtiImg from "../assets/kurtiImg.jpg";
import trousersImg from "../assets/trousers.jpg";

const categories = [
  { name: "Unstitched", image: unstitchedImg, key: "catunstitched" },
  { name: "Stitched", image: stitchedImg, key: "stitched" },
  { name: "Kurti", image: kurtiImg, key: "kurti" },
  { name: "Trousers", image: trousersImg, key: "trousers" },
];

export default function WomenCategory({ setPage }) {
  return (
    <div className="women-category">
      <h3 className="section-title">Shop By Women Category</h3>
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="category-item"
            onClick={() => setPage(cat.key)}
          >
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
