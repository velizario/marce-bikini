import { Box, Button } from "@mui/material";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import { useParams } from "react-router-dom";
import { productModelImpl } from "../../model/productModel";
import styles from "./SingleProductPage.module.css";
import TabSingleProduct from "./TabSingleProduct";
import React, { useContext, useEffect, useState } from "react";
import { Product } from "../../model/productModel";
import HeaderFooter from "../headerfooter/HeaderFooter";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { addToCart, removeFromCart } from "../../model/cartModel";
import { CartContext } from "../../globalstate/CartContextProvider";
import { UserContext } from "../../globalstate/UserContextProvider";


const price = (product: Product) => {
  // This is only test for first price. I need to account for variations
  // Add 2 digits to the pricess. Through Strapi?
  const discountPrice = product.attributes.variations[0].discountPrice;
  const price = product.attributes.variations[0].price + 50;
  const priceString = (
    <React.Fragment>
      €{discountPrice.toFixed(2)}
      {discountPrice < price ? (
        <span className={styles.discountPrice}>€{price.toFixed(2)}</span>
      ) : null}
    </React.Fragment>
  );

  return priceString;
};

const SingleProductPage = () => {
  // Async function is loading the image, but the Component is rendered before this!?!!?!? Be cool, you are learning...
  const [product, setProduct] = useState({} as Product);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<string>("");

  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);

  let params = useParams();
  const productId = params.productId!;

  useEffect(() => {
    const getProduct = async () => {
      const productData = await productModelImpl.getProductById(productId);
      setProduct(productData);
    };

    getProduct();
  }, [productId]);

  const addToCartHandler = async () => {
    // console.log(await validateUser());
    // NOTE: 1. For logged in user I'm still updating it here instead on the backend. 2. What about if user is not logged? Use this logic.
    if (!size) {
      console.log("Please select size first");
      return;
    }
    const updatedCart = [
      ...cartContext.cartItems,
      { productId: product.id, size, quantity },
    ];

    // Get Cart data if user is logged in
    const returnedCart =
      userContext.isLoggedIn &&
      (await addToCart(userContext.isLoggedIn._id, updatedCart));

    if (returnedCart) cartContext.setCartItems(returnedCart.data);
  };

  return !product.attributes ? null : (
    <HeaderFooter>
      <ContainerLarge>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "center",
            }}
          >
            <div className={styles.sideImages}>
              {product.attributes.images.data.slice(1).map((image) => (
                <img
                  alt="bikini main"
                  className={styles.sideImage}
                  key={image.attributes.name}
                  src={`${process.env.REACT_APP_BASE_URL}/images/${image.attributes.name}`}
                />
              ))}
            </div>
            <div className={styles.imageBox}>
              <Zoom overlayBgColorEnd={"rgba(100, 100, 100, 0.95)"}>
                <img
                  alt="bikini main"
                  className={styles.image}
                  src={`${process.env.REACT_APP_BASE_URL}/images/${product.attributes.images.data[0].attributes.name}`}
                />
              </Zoom>
            </div>
          </Box>

          <div className={styles.productInfo}>
            <h3 className={styles.productTitle}>{product.attributes.title}</h3>
            <p className={styles.price}>{price(product)}</p>
            <p className={styles.shortDesc}>{product.attributes.shortDesc}</p>
            <p>Color: {product.attributes.color}</p>
            <p>Size:</p>
            <ul className={styles.sizeList}>
              {product.attributes.variations.map((variation) => (
                <li
                  key={variation.size}
                  className={`${styles.productSizes} ${
                    variation.size === size ? styles.active : ""
                  }`}
                  onClick={() => setSize(variation.size)}
                >
                  {variation.size}
                </li>
              ))}
            </ul>
            <div className={styles.productCount}>
              <Button
                className={styles.inputDecrease}
                variant="contained"
                onClick={() => setQuantity((count) => Math.max(count - 1, 1))}
              >
                -
              </Button>

              <p className={styles.inputValue}>{quantity}</p>

              <Button
                className={styles.inputIncrease}
                variant="contained"
                onClick={() => setQuantity((count) => Math.min(count + 1, 5))}
              >
                +
              </Button>
            </div>
            <Box className={styles.actionButtons}>
              <Button
                className={styles.buttonAddToCart}
                variant="outlined"
                color="secondary"
                onClick={addToCartHandler}
              >
                Add to Cart
              </Button>
              <Button
                className={styles.buttonBuy}
                variant="contained"
                color="secondary"
              >
                Buy now
              </Button>
            </Box>
          </div>
        </Box>
        <TabSingleProduct />
      </ContainerLarge>
    </HeaderFooter>
  );
};

export default SingleProductPage;
