import React from "react";

export default function CategoryCard({ name, image, link }) {
  return (
    <a href={link} className="boys-girls-item">
      <img src={image} alt={name} />
      <span>{name}</span>
    </a>
  );
}
