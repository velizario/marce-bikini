import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./HeroCarousel.module.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const heroImages = [
  { image: "/images/hero1.png" },
  { image: "/images/hero2.jpg" },
  { image: "/images/hero3.jpg" },
];

export default function HeroCarousel() {
  const [mySwiper, setMySwiper] = useState<SwiperType>();

  return (
    <>
      <Swiper
        className={styles.swiper}
        spaceBetween={30}
        centeredSlides={true}
        speed={700}
        loop={true}
        loopAdditionalSlides={1}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
      >
        {heroImages.map((image) => (
          <SwiperSlide key={image.image}>
            <img
              alt="hero"
              src={`${process.env.REACT_APP_BASE_URL}${image.image}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
        <Typography
          alignSelf="center"
          className={"swiper-button-prev " + styles.swiperPrev}
          onClick={() => mySwiper && mySwiper.slidePrev()}
        >
        </Typography>

        <Typography
          alignSelf="center"
          className={"swiper-button-next " + styles.swiperNext}
          onClick={() => mySwiper && mySwiper.slideNext()}
        >
        </Typography>
      </Swiper>
    </>
  );
}
