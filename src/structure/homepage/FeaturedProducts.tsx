import { useEffect, useState } from "react";
import { Product, productModelImpl } from "../../model/productModel";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import ProductList from "../shop/ProductList";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import styles from "./FeaturedProducts.module.css";
import { Container, Typography } from "@mui/material";
import ProductCard from "../shop/ProductCard";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>();

  const getFeaturedProducts = async () => {
    const data = await productModelImpl.getFeaturedProducts();
    setFeaturedProducts(data);
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  return (
    <>
      {featuredProducts ? (
        <ContainerLarge
          styles={{
            width: "100%",
            padding: 0,
            // height: "20rem",
            maxWidth: "1400px",
            position: "relative",
            display: "block",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" component="h4" sx={{ marginBottom: "1rem" }}>
            Featured Products
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor.
          </Typography>
          <Swiper
            className={styles.swiper}
            width={1200}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            speed={700}
            initialSlide={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            {featuredProducts.map((product) => (
              <SwiperSlide className={styles.swiperSlide}>
                <ProductCard product={product} />
                {/* <img
                  alt="hero"
                  src={`${process.env.REACT_APP_BASE_URL}/images/${product.attributes.images.data[0].attributes.name}`}
                  className={styles.image}
                /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerLarge>
      ) : // <ProductList products={featuredProducts}></ProductList>
      null}
    </>
  );
};

export default FeaturedProducts;
