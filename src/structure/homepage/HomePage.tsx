import React from "react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import Benefits from "./Benefits";
import FeaturedProducts from "./FeaturedProducts";
import HeroCarousel from "./HeroCarousel";
import SwiperTest from "./SwiperTest";
const HomePage = () => {
  return (
    <HeaderFooter>
      <HeroCarousel />
      <ContainerLarge>
        <Benefits />
      </ContainerLarge>
      <FeaturedProducts />
      <br />
      <br />
      <br />
      <br />
      <br />
    </HeaderFooter>
  );
};

export default HomePage;
