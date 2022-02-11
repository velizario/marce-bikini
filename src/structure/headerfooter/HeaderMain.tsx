import { Box, Button, Link, TextField } from "@mui/material";
import { useContext } from "react";
import { Link as ButtonLink } from "react-router-dom";
import { CartContext } from "../../globalstate/CartContextProvider";
import { UserContext } from "../../globalstate/UserContextProvider";
import styles from "./HeaderMain.module.css";


const HeaderMain = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <img
          alt="hero"
          src={`${process.env.REACT_APP_BASE_URL}/images/MARCE Logo.jpg`}
          className={styles.image}
        />
      </Link>

      <Button component={ButtonLink} to="/shop" variant="text">
        Shop
      </Button>

      <TextField
        id="standard-basic"
        placeholder="Search products..."
        variant="standard"
      />
      <Button component={ButtonLink} to="/contactus" variant="text">
        Contact Us
      </Button>
      <Button component={ButtonLink} to="/aboutus" variant="text">
        About Us
      </Button>
      <Button component={ButtonLink} to="/account" variant="text">
        {userContext.isLoggedIn
          ? `Welcome, ${userContext.isLoggedIn.firstName}`
          : `Account`}
      </Button>
      <Button component={ButtonLink} to="/cart" variant="text">
        Shopping Cart ({cartContext.cartItems.length})
      </Button>
    </Box>
  );
};

export default HeaderMain;
