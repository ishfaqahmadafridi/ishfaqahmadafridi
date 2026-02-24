import React from "react";
import "../../styles/Carousel.css";

export default function CarouselImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className="carousel-image" 
    />
  );
}
