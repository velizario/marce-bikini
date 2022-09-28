import { ClassNames } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import styles from "./AboutUs.module.css";

const aboutUsImg = "/images/AboutUs.jpg"


const AboutUs = () => {

  return (
    <HeaderFooter>
      <article className={styles.article}>
        <Box className={styles.imgBox} >
          <img className={styles.aboutUsImg} src={`${process.env.REACT_APP_BASE_URL}${aboutUsImg}`} alt="background" ></img>
        </Box>
        <Box className={styles.aboutMain}>
        <Typography variant="h1" className={styles.aboutMainHeader}>Hello, We're MarceBikini Boutique</Typography>
        <Typography variant="body2" className={styles.aboutMainContent}>Whether you have regular, dry, sensitive, oily or mature skin, MarceBikini is here to help you look and feel your best.</Typography>
        </Box>
      </article>

      <Box sx={{width: "50%",  margin: "0 auto",}}>
        <Typography variant="body1" className={styles.aboutQuote}> The idea for MarceBikini was born in 2005 when founder, Simon Duffy, noticed that there were no straightforward skincare options that were made for him. Looking at the shelves, there were products he used, but no products he loved.</Typography>
        </Box>
        <Box className={styles.cardsContainer}>

          <Box className={styles.card}>
            <img className={styles.cardImage} src="https://bg.benetton.com/dw/image/v2/BBSF_PRD/on/demandware.static/-/Sites-ucb-master/default/dw5d189653/images/Full_PDP_h/Undercolors_22P_3P5H5R01Y_700_F_Full_PDP_h.jpg" alt="" />
            <Box className={styles.cardContent}>
              <Typography variant="h2" className={styles.cardHeader}> MarceBikini is Woman's Best Friend</Typography>
              <Typography variant="body1" className={styles.cardText}>Our straightforward ranges for normal, sensitive, oily or mature skin are purpose built for men and specially formulated to help you look and feel your best.</Typography>
            </Box>
          </Box>

          <Box className={styles.card}>
            <img className={styles.cardImage} src="https://bg.benetton.com/dw/image/v2/BBSF_PRD/on/demandware.static/-/Sites-ucb-master/default/dw6479d608/images/Full_PDP_h/Undercolors_22P_3MGG5R01J_74D_F_Full_PDP_h.jpg" alt="" />
            <Box className={styles.cardContent}>
              <Typography variant="h2" className={styles.cardHeader}> MarceBikini is Woman's Best Friend</Typography>
              <Typography variant="body1" className={styles.cardText}>Our straightforward ranges for normal, sensitive, oily or mature skin are purpose built for men and specially formulated to help you look and feel your best.</Typography>
            </Box>
          </Box>
      </Box>
    </HeaderFooter>
  );
};

export default AboutUs;
