import { Button, Typography } from "@mui/material";
import React from "react";
import { Link as ButtonLink } from "react-router-dom";
import { UserContext } from "../../globalstate/UserContextProvider";

const CartEmpty = () => {
  const userContext = React.useContext(UserContext);
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" component="div">
        Your cart is empty
      </Typography>
      <Button
        component={ButtonLink}
        to="/shop"
        variant="contained"
        color="secondary"
      >
        Continue shopping
      </Button>
      {userContext.isLoggedIn ? null : (
        <React.Fragment>
          <Typography variant="h6"> Have an account?</Typography>
          <Typography>
            <ButtonLink to="/account">Sign in</ButtonLink> to check out faster
          </Typography>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CartEmpty;
