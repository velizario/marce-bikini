import React from "react";
import { Props } from "../../Types";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import Announcement from "./Announcement";
import Footer from "./Footer";
import HeaderBottom from "./HeaderBottom";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";


const HeaderFooter: React.FC<Props> = ({ children }) => {
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
