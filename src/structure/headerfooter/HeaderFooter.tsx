import React from "react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import Footer from "./Footer";
import HeaderBottom from "./HeaderBottom";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

type HeaderFooterProps = {
  children: JSX.Element | JSX.Element[];
};

const HeaderFooter: React.FC<HeaderFooterProps> = ({ children }) => {
  return (
    <React.Fragment>
      <ContainerLarge>
        <HeaderTop></HeaderTop>
        <HeaderMain></HeaderMain>
        <HeaderBottom></HeaderBottom>
      </ContainerLarge>
      {children}
      <ContainerLarge>
        <Footer />
      </ContainerLarge>
    </React.Fragment>
  );
};

export default HeaderFooter;
