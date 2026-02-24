import React from "react";

export default function CategoryBox({ title, onClick }) {
  return (
    <div className="category-box" onClick={onClick}>
      {title}
    </div>
  );
}
