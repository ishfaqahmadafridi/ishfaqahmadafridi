import { useState } from "react";

export default function useCarousel(totalItems) {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return {
    currentIndex: index,
    goPrev,
    goNext,
    goToSlide
  };
}
