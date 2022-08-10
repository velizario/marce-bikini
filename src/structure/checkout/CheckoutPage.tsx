import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../globalstate/CartContextProvider";
import { requestToAPI } from "../../model/helperFunctions";

import ContainerLarge from "../../utilityComponents/ContainerLarge";
import CustomLink from "../../utilityComponents/CustomLink";
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

  const commencePayment = async () => {
    const res = await requestToAPI(
      `payment`,
      "POST",
      {}
    );
    console.log(res);
    // const paymentAddress = (await res.json()).data;
    // console.log(paymentAddress);
    window.location.replace(res.data);
  };

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
          position: "relative",
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
          }}
        ></CartMain>
      </Box>
      <CustomLink
        onClick={commencePayment}
        style="headerLink"
        sx={{ marginBlock: "5rem" }}
      >
        Pay
      </CustomLink>
    </ContainerLarge>
  );
};

export default CartPage;
