import React from "react";
import "../styles/Carousel.css";

export default function CarouselNav({ onPrev, onNext }) {
  return (
    <>
      <button className="arrow left" onClick={onPrev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="arrow right" onClick={onNext} aria-label="Next slide">
        &#10095;
      </button>
    </>
  );
}
