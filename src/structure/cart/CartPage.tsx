import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import CartEmpty from "./CartEmpty";
import CartMain from "./CartMain";
import React from "react";
import { CartContext } from "../../globalstate/CartContextProvider";

const CartPage = () => {
  const cartContext = React.useContext(CartContext);
  return (
    <ContainerLarge>
      <HeaderFooter>
        {cartContext.cartItems.length > 0 ? <CartMain /> : <CartEmpty />}
      </HeaderFooter>
    </ContainerLarge>
  );
};

export default CartPage;
