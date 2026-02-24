import React from "react";
import "../../styles/BoysGirlsCategory.css";
import CategoryCard from "./CategoryCard";
import { categories } from "../../assets/categoriesData";

export default function BoysGirlsCategory() {
  return (
    <div className="boys-girls-category">
      <h3 className="boys-girls-title">Shop By Boys & Girls Category</h3>
      <div className="boys-girls-grid">
        {categories.map((cat, index) => (
          <CategoryCard
            key={index}
            name={cat.name}
            image={cat.image}
            link={cat.link}
          />
        ))}
      </div>
    </div>
  );
}
