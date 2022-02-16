import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import Benefits from "./Benefits";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <HeaderFooter>
      <Hero />
      <ContainerLarge
        styles={{
          margin: "2.5rem auto",
          padding: "2.5rem",
          boxShadow: "0px 8px 34px 0px rgb(0 0 0 / 6%);",
        }}
      >
        <Benefits />
      </ContainerLarge>
    </HeaderFooter>
  );
};

export default HomePage;
