
import React from "react";
import PropTypes from "prop-types";
import { womenCategories } from "../../assets/womenCategoryData";
import { SectionTitle, CategoryGrid } from "./components";
import "../../styles/WomenCategory.css";

export default function WomenCategory({ setPage }) {
  return (
    <div className="women-category">
      <SectionTitle title="Shop By Women Category" />
      <CategoryGrid 
        categories={womenCategories} 
        onCategoryClick={setPage} 
      />
    </div>
  );
}

WomenCategory.propTypes = {
  setPage: PropTypes.func.isRequired,
};
