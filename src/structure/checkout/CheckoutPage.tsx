import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../globalstate/CartContextProvider";

import ContainerLarge from "../../utilityComponents/ContainerLarge";
import CartMain from "../cart/CartMain";
import CheckOutMain from "./CheckoutMain";

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cartContext);
    if (cartContext.isSet && cartContext.cartItems.length < 1)
      navigate("/cart");
  }, [cartContext]);

  return !cartContext.isSet ? (
    <div>Loading!</div>
  ) : (
    <ContainerLarge>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginTop: "4rem",
          width: "100%",
        }}
      >
        <CheckOutMain
          sx={{
            width: "50%",
            paddingRight: "1%",
            borderRight: "0.5px solid rgba(0,0,0,0.2)",
          }}
        ></CheckOutMain>
        <CartMain
          sx={{
            width: "50%",
            background: "#f9fafa",
            margin: 0,
          }}
        ></CartMain>
      </Box>
    </ContainerLarge>
  );
};

export default CartPage;
