import { useNavigate } from 'react-router-dom';
import menFragImg from "../../assets/images/fragrance/menFragrance.jpg";
import womenFragImg from "../../assets/images/fragrance/womenFragrance.jpg";
import cosmeticsImg from "../../assets/images/makeup/cosmetics.jpg";
import skincareImg from "../../assets/images/skincare/skincare.jpg";

interface CategoryItem {
  n: string;
  img: string;
  p: string;
}

export default function FragranceCosmetics() {
  const navigate = useNavigate();
  const cats: CategoryItem[] = [
    { n: "Men Fragrances", img: menFragImg, p: "/fragrances" },
    { n: "Women Fragrances", img: womenFragImg, p: "/fragrances" },
    { n: "Cosmetics", img: cosmeticsImg, p: "/makeup" },
    { n: "Skincare", img: skincareImg, p: "/skincare" }
  ];
  return (
    <div className="bg-gray-50 py-16 px-6">
      <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">Shop By Fragrances & Cosmetics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cats.map((c, i) => (
          <div
            key={i}
            onClick={() => navigate(c.p)}
            className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
          >
            <img src={c.img} alt={c.n} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-transparent to-transparent flex items-end p-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{c.n}</h3>
                <div className="w-10 h-1 bg-white group-hover:w-20 transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
