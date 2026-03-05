import Carousel from '../carousal/Carousel';
import BoysGirlsCategory from '../BoysGirlsCategory/BoysGirlsCategory';
import FragranceCosmetics from '../fragranceCostmetics/FragranceCosmetics';
import WomenCategory from '../womenCategory/WomenCategory';
import WomenFootwear from '../womenfoot/WomenFootwear';
import ManFootwear from '../manFooterwear/ManFootwear';
import MenCategory from '../menCategoey/MenCategory';
import CategorySection from '../actegorysection/CategorySection';

export default function Main() {
    return (
        <>
            <Carousel />
            <CategorySection />
            <WomenCategory />
            <WomenFootwear />
            <MenCategory />
            <ManFootwear />
            <BoysGirlsCategory />
            <FragranceCosmetics />
        </>
    );
}
