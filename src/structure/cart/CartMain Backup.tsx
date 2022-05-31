import { useContext } from "react";
import { CartContext } from "../../globalstate/CartContextProvider";
import { UserContext } from "../../globalstate/UserContextProvider";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./CartMain.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  IconButton,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart } from "../../model/cartModel";

export type CartMainProps = {
  sx?: SxProps<Theme>;
};

//Component
const CartMain: React.FC<CartMainProps> = ({ sx }) => {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  // Get total price
  const totalPrice = cartContext.cartItems.reduce((acc, cartItem, index) => {
    const product = cartContext.productItems[index].attributes;
    return (
      acc +
      (product.variations.find((variation) => variation.size === cartItem.size)
        ?.discountPrice || 0) *
        cartItem.quantity
    );
  }, 0);
  console.log(totalPrice);

  // const product = cartContext.productItems[itemId].attributes;
  // const totalPrice = product.variations.reduce(
  //   (acc, variation) => acc + variation.discountPrice * cartItem.quantity, 0
  // );

  return (
    <ContainerLarge styles={{ padding: 0, ...sx }}>
      <TableContainer className={styles.table} component={Paper}>
        <Table
          sx={{
            width: "100%",
            // maxWidth: 700,
            bgcolor: "background.paper",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeader}>Item</TableCell>
              <TableCell className={styles.tableHeader} align="right">
                Price
              </TableCell>
              <TableCell className={styles.tableHeader} align="right">
                Quantity
              </TableCell>
              <TableCell className={styles.tableHeader} align="right">
                Subtotal
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartContext.cartItems.map((cartItem, itemId) => {
              const product = cartContext.productItems[itemId].attributes;

              const productVariation = product.variations.find(
                (variation) => variation.size === cartItem.size
              );

              const productPrice = productVariation?.discountPrice || 0;

              const totalItemPrice = cartItem.quantity * (productPrice || 0);

              console.log(product);
              return (
                <TableRow
                  key={cartItem._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ alignItems: "center", display: "flex" }}>
                    <img
                      className={styles.image}
                      src={`${process.env.REACT_APP_DATA_URL}${product.images.data[0].attributes.formats.thumbnail.url}`}
                      alt=""
                    />
                    <div>
                      <Link
                        target="_blank"
                        className={styles.titleLink}
                        to={`/product/${String(cartItem.productId)}`}
                      >
                        {product.title}
                      </Link>
                      <Typography component="span" sx={{ color: "#777" }}>
                        Size:{" "}
                      </Typography>
                      <Typography component="span" sx={{ color: "black" }}>
                        {cartItem.size}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="right">€{productPrice}</TableCell>
                  <TableCell align="right">{cartItem.quantity}</TableCell>
                  <TableCell align="right">
                    <Typography component="span" sx={{ fontWeight: "700" }}>
                      €{totalItemPrice}
                    </Typography>

                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      sx={{
                        width: "10px",
                        height: "10px",
                        marginLeft: "0.7rem",
                        verticalAlign: "sub",
                      }}
                      onClick={async () => {
                        if (userContext.isLoggedIn) {
                          const returnedCart = await removeFromCart(
                            userContext.isLoggedIn._id,
                            cartItem
                          );
                          if (returnedCart)
                            cartContext.setCartItems(returnedCart.data);
                        } else {
                          // NOTE: fix state for unlogged user. I'm already making this somewhere. Check on fresh mind
                        }
                      }}
                    >
                      <SvgIcon
                        sx={{
                          width: "10px",
                          height: "10px",
                          background: "#eee",
                          borderRadius: "50%",
                          padding: "0.2rem",
                        }}
                      >
                        <svg
                          fill="#777"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                        >
                          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer className={styles.tableTotals} component={Paper}>
        <Table
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <TableBody>
            <TableRow>
              <TableCell className={styles.totalsAttribute}>
                Subtotal:
              </TableCell>
              <TableCell className={styles.totalsSubtotalPrice} align="right">
                €{totalPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.totalsAttribute}>
                Delivery:
              </TableCell>
              <TableCell className={styles.totalsValue} align="right">
                Discuss
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.totalsAttribute}>
                Coupon Code:
              </TableCell>
              <TableCell className={styles.totalsValue} align="right">
                Discuss
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.totalsAttribute}>
                Gift Certificate:
              </TableCell>
              <TableCell className={styles.totalsValue} align="right">
                Discuss
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={styles.totalsAttribute}>
                Subtotal:
              </TableCell>
              <TableCell className={styles.totalsTotalPrice} align="right">
                €{totalPrice}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        className={styles.checkoutButtom}
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Checkout
      </Button>
    </ContainerLarge>
  );
  // } else {
  //   return null;
  // }
};

export default CartMain;
