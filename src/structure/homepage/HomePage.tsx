import React from "react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import Benefits from "./Benefits";
import FeaturedProducts from "./FeaturedProducts";
import HeroCarousel from "./HeroCarousel";
import Subscribe from "./Subscribe";

const HomePage = () => {
  
  return (
    <HeaderFooter>
      <HeroCarousel />
      <ContainerLarge>
        <Benefits />
      </ContainerLarge>
      <FeaturedProducts />
      <Subscribe />
    </HeaderFooter>
  );
};

export default HomePage;
