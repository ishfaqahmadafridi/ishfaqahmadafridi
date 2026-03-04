import { useSelector } from "react-redux";
import { carouselImages } from "../../assets/carouselData";
import { RootState } from "../redux/store";

export default function CarouselImage() {
    const currentIndex = useSelector((state: RootState) => state.carousel.currentIndex);
    const currentImage = carouselImages[currentIndex];
  return (
    <img 
      src={currentImage.src} 
      alt={currentImage.alt} 
      className="carousel-image" 
    />
  );
}
