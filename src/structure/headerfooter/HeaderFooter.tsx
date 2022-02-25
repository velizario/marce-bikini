import React from "react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import Announcement from "./Announcement";
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
      <Announcement />
      {/* <HeaderTop /> */}
      <HeaderMain />

      <ContainerLarge>
        <HeaderBottom />
      </ContainerLarge>
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default HeaderFooter;
