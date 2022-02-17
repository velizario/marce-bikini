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
      <ContainerLarge
        styles={{
          margin: "2.5rem auto",
          padding: "2.5rem",
          boxShadow: "0px 8px 34px 0px rgb(0 0 0 / 6%);",
        }}
      >
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
