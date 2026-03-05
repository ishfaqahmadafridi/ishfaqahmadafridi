
import { CategoryCardProps } from "../interfaces/BoysGirlsCategory/CategoryCard";

export default function CategoryCard({ name, image, link }: CategoryCardProps) {
  return (
    <a href={link} className="boys-girls-item">
      <img src={image} alt={name} />
      <span>{name}</span>
    </a>
  );
}
