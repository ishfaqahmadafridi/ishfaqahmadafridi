import React from 'react'
import Carousel from "../carousal/Carousel";
import BoysGirlsCategory from "../BoysGirlsCategory/BoysGirlsCategory";
import FragranceCosmetics from "../fragranceCostmetics/FragranceCosmetics";
import { WomenCategory } from "../womenCategory";
import { WomenFootwear } from "../womenfoot";
import ManFootwear from "../manFooterwear/ManFootwear";
import MenCategory from "../menCategoey/MenCategory";
import CategorySection from "../actegorysection/CategorySection";
const Main = ({ setPage }) => {
  return (
    <>
    <Carousel/>
    <CategorySection setPage={setPage} />
      <WomenCategory setPage={setPage} />
      <WomenFootwear/>
      <MenCategory/>
      <ManFootwear/>
      <BoysGirlsCategory/>
      <FragranceCosmetics/>
    </>
  )
}

export default Main
