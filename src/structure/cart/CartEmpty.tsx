import { Button, Typography } from "@mui/material";
import React from "react";
import { Link as ButtonLink } from "react-router-dom";
import { UserContext } from "../../globalstate/UserContextProvider";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import CustomLink from "../../utilityComponents/CustomLink";

const CartEmpty = () => {
  const userContext = React.useContext(UserContext);
  return (
    <ContainerLarge>
      <Typography gutterBottom variant="h4" component="div">
        Your cart is empty
      </Typography>
      <CustomLink
        to="/shop"
        style="action"
      >
        Continue shopping
      </CustomLink>
      {userContext.isLoggedIn ? null : (
        <React.Fragment>
          <Typography variant="h6"> Have an account?</Typography>
          <Typography>
            <ButtonLink to="/account">Sign in</ButtonLink> to check out faster
          </Typography>
        </React.Fragment>
      )}
    </ContainerLarge>
  );
};

export default CartEmpty;
