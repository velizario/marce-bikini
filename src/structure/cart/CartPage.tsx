import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import CartMain from "./CartMain";

const CartPage = () => {
  return (
    <ContainerLarge>
      <HeaderFooter>
        {/* <ShoppingCart></ShoppingCart> */}
        <CartMain></CartMain>
      </HeaderFooter>
    </ContainerLarge>
  );
};

export default CartPage;
