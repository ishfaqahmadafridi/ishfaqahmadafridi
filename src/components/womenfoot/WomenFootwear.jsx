/**
 * Women Footwear Component
 * Displays women's footwear categories
 */
import React from "react";
import { womenFootwearCategories } from "../../assets/womenFootwearData";
import { SectionTitle, CategoryGrid } from "./components";
import "../../styles/WomenFootwear.css";

export default function WomenFootwear() {
  return (
    <div className="women-footwear">
      <SectionTitle title="Women Footwear" />
      <CategoryGrid categories={womenFootwearCategories} />
    </div>
  );
}
