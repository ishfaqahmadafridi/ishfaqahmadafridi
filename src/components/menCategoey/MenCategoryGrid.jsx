import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage, setSelectedCategory } from '../redux/slices/uiSlice/uiSlice';
import shalwarImg from "../../assets/images/men-category/shalwarImg.jpg";
import kurtaImg from "../../assets/images/men-category/kurtaImg.jpg";
import waistcoatImg from "../../assets/images/men-category/waistcoatImg.jpg";
import groomsSherwaniImg from "../../assets/images/men-category/groomsSherwaniImg.jpg";

export default function MenCategoryGrid() {
    const dispatch = useDispatch();

    const cats = [
        { n: "Shalwar Kameez", img: shalwarImg, categoryId: "shalwar" },
        { n: "Kurta", img: kurtaImg, categoryId: "kurta" },
        { n: "Waistcoat", img: waistcoatImg, categoryId: "coat" },
        { n: "Groom Sherwani", img: groomsSherwaniImg, categoryId: "sherwani" },
    ];

    const handleCategoryClick = (categoryId) => {
        dispatch(setSelectedCategory(categoryId));
        dispatch(setPage('man'));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {cats.map((c, i) => (
                <div
                    key={i}
                    onClick={() => handleCategoryClick(c.categoryId)}
                    className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-700"
                >
                    <img src={c.img} alt={c.n} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent flex items-end p-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{c.n}</h3>
                            <div className="w-10 h-1 bg-white group-hover:w-20 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
