import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import CartEmpty from "./CartEmpty";
import CartMain from "./CartMain";
import React from "react";
import { CartContext } from "../../globalstate/CartContextProvider";

const CartPage = () => {
  const cartContext = React.useContext(CartContext);
  return (
      <HeaderFooter>
        {!cartContext.isSet ? (
          <div>Loading!</div>
        ) : cartContext.cartItems.length > 0 ? (
          <ContainerLarge>
            <CartMain sx={{ margin: "2rem 0" }} />    
          </ContainerLarge>
        ) : (
          <CartEmpty />
        )}
      </HeaderFooter>
  );
};

export default CartPage;
