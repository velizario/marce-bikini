import { ClassNames } from "@emotion/react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import styles from "./AboutUs.module.css";

const aboutUsImg = "/images/AboutUs.jpg"


const AboutUs = () => {

  return (
    <HeaderFooter>
      <article className={styles.article}>
        <img className={styles.aboutUsImg} src={`${process.env.REACT_APP_BASE_URL}${aboutUsImg}`} alt="background" ></img>
        <h1 className={styles.header}>Hello, We're Bulldog Skincare for Men</h1>
      </article>
      <ContainerLarge>
        <h2> About us</h2>

      </ContainerLarge>
    </HeaderFooter>
  );
};

export default AboutUs;
