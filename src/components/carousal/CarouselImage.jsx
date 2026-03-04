import React from "react";

export default function CarouselImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="carousel-image" 
    />
  );
}
