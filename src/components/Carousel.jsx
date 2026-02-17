import React, { useState } from "react";
import "../styles/Carousel.css";
import CarouselImage from "./CarouselImage";
import CarouselNav from "./CarouselNav";
import eid from "../assets/eid.jpeg";
import chalo_saj_dhaj_k from "../assets/chalo_saj_dhaj_k.jpeg";
import iFr from "../assets/iFr.jpeg";
import FEET from "../assets/FEET.jpeg";

const images = [eid, chalo_saj_dhaj_k, iFr, FEET];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <CarouselImage 
        src={images[index]} 
        alt={`Slide ${index + 1}`} 
      />
      <CarouselNav onPrev={goPrev} onNext={goNext} />
    </div>
  );
}
