import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../globalstate/CartContextProvider";
import { postToAPI } from "../../model/helperFunctions";
import ButtonBasicClick from "../../utilityComponents/ButtonBasicClick";

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

  const commencePayment = async () => {
    const res = await postToAPI(
      `${process.env.REACT_APP_SERVER_URL}/payment`,
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
      <ButtonBasicClick
        onClick={commencePayment}
        type="headerLink"
        sx={{ marginBlock: "5rem" }}
      >
        Pay
      </ButtonBasicClick>
    </ContainerLarge>
  );
};

export default CartPage;
