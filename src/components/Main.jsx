import React from 'react'
import Carousel from "./Carousel";
import BoysGirlsCategory from "./BoysGirlsCategory";
import FragranceCosmetics from "./FragranceCosmetics";
import WomenCategory from "./WomenCategory";
import WomenFootwear from "./WomenFootwear";
import ManFootwear from "./ManFootwear";
import MenCategory from "./MenCategory";
import CategorySection from "./CategorySection";
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
