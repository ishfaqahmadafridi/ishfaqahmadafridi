// src/components/CategorySection.jsx
import React from "react";
import "../styles/CategorySection.css";

export default function CategorySection({ setPage }) {
  return (
    <div className="category-section">
      <h3 className="left-title">SHOP FOR NEW ARRIVAL</h3>
      <div className="right-boxes">
        <div className="category-box" onClick={() => setPage("boysgirlscat")}>
          BOYS & GIRLS
        </div>

        <div className="category-box" onClick={() => setPage("men")}>MEN</div>
        <div className="category-box" onClick={() => setPage("women")}>WOMEN</div>
        <div className="category-box" onClick={() => setPage("fragrance")}>FRAGRANCE</div>
      </div>
    </div>
  );
}
