// src/components/CategorySection.jsx
import React from "react";
import "../../styles/CategorySection.css";
import CategoryBox from "./CategoryBox";
import { categories } from "../../assets/categoriesList";

export default function CategorySection({ setPage }) {
  return (
    <div className="category-section">
      <h3 className="left-title">SHOP FOR NEW ARRIVAL</h3>
      <div className="right-boxes">
        {categories.map((category) => (
          <CategoryBox
            key={category.id}
            title={category.title}
            onClick={() => setPage(category.page)}
          />
        ))}
      </div>
    </div>
  );
}
