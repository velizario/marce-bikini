import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import CheckOutMain from "./CheckoutMain";

const CartPage = () => {
  return (
    <ContainerLarge>
      <HeaderFooter>
        <CheckOutMain></CheckOutMain>
      </HeaderFooter>
    </ContainerLarge>
  );
};

export default CartPage;
