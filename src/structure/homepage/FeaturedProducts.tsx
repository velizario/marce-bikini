import { useEffect, useState } from "react";
import {  productModelApiImpl } from "../../model/productModelApi";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import { Product } from "../../Types";


// Import Swiper React components
import { Swiper as SwiperType } from "swiper";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import styles from "./FeaturedProducts.module.css";
import { Container, Typography } from "@mui/material";
import FeaturedCard from "./FeaturedCard";
import { SwiperSlide } from "swiper/react";

// const swiperParams: SwiperOptions = {
//   slidesPerView: 3,
//   spaceBetween: 50,
// };

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();
  // const swiper = new Swiper(".swiper", swiperParams);

  const [mySwiper, setMySwiper] = useState<SwiperType>();

  const getFeaturedProducts = async () => {
    const data = await productModelApiImpl.getFeaturedProducts();
    setFeaturedProducts(data);
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  return (
    <>
      {featuredProducts ? (
        <Container
          sx={{
            width: "100%",
            maxWidth: "1000px !important",
            display: "flex",
            position: "relative",
            padding: "0 1rem !important",
          }}
        >
          <ContainerLarge
            styles={{
              width: "100%",
              position: "relative",
              display: "block",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{ marginBottom: "1rem" }}
            >
              Featured Products
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
              Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor.
            </Typography>
            <Swiper
              className={styles.swiper}
              spaceBetween={30}
              slidesPerView={3}
              speed={700}
              initialSlide={0}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true, type: "fraction" }}
              modules={[Navigation, Pagination]}
              onInit={(ev) => {
                setMySwiper(ev);
              }}
              loopFillGroupWithBlank={true}
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id} className={styles.swiperSlide}>
                  <FeaturedCard product={product} />
                  {/* <img
                  alt="hero"
                  src={`${process.env.REACT_APP_BASE_URL}/images/${product.attributes.images.data[0].attributes.name}`}
                  className={styles.image}
                /> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </ContainerLarge>
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
        </Container>
      ) : 
      null}
    </>
  );
};

export default FeaturedProducts;
