import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./HeroCarousel.module.css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const heroImages = [
  { image: "/images/hero1.png" },
  { image: "/images/hero2.jpg" },
  { image: "/images/hero3.jpg" },
];

export default function HeroCarousel() {
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* <SwiperSlide>123</SwiperSlide>
        <SwiperSlide>123</SwiperSlide> */}
        {heroImages.map((image) => (
          <SwiperSlide key={image.image}>
            <img
              alt="hero"
              src={`${process.env.REACT_APP_BASE_URL}${image.image}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
