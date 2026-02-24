import React from "react";
import "../../styles/Carousel.css";
import CarouselImage from "./CarouselImage";
import CarouselNav from "./CarouselNav";
import useCarousel from "../hooks/carousel/useCarousel";
import { carouselImages } from "../../assets/carouselData";

export default function Carousel() {
  const { currentIndex, goPrev, goNext } = useCarousel(carouselImages.length);
  const currentImage = carouselImages[currentIndex];

  return (
    <div className="carousel-container">
      <CarouselImage 
        src={currentImage.src} 
        alt={currentImage.alt} 
      />
      <CarouselNav onPrev={goPrev} onNext={goNext} />
    </div>
  );
}
