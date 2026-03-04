import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CarouselImage from "./CarouselImage";
import CarouselNav from "./CarouselNav";
import { carouselImages } from "../../assets/carouselData";
import { setCurrentIndex } from "../redux/slices/carousal/CarousalSlice";

export default function Carousel() {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state) => state.carousel.currentIndex);

  const goPrev = () => {
    const newIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    dispatch(setCurrentIndex(newIndex));
  };

  const goNext = () => {
    const newIndex = (currentIndex + 1) % carouselImages.length;
    dispatch(setCurrentIndex(newIndex));
  };

  const currentImage = carouselImages[currentIndex] || carouselImages[0];

  return (
    <div className="carousel-container relative overflow-hidden group">
      <CarouselImage
        src={currentImage.src}
        alt={currentImage.alt}
      />
      <CarouselNav onPrev={goPrev} onNext={goNext} />
    </div>
  );
}
