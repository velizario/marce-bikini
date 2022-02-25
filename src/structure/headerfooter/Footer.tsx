import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonBasicLink from "../../utilityComponents/ButtonBasicLink";
import ContainerLarge from "../../utilityComponents/ContainerLarge";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid lightgray",
      }}
    >
      <ContainerLarge styles={{ padding: "2.5rem 0" }}>
        <Typography variant="h5" component="h5" sx={{ marginBottom: "1.5rem" }}>
          Quick Links
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "40rem",
            columnGap: "2rem",
            rowGap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <ButtonBasicLink type="footer" to="/account">
            Account
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            Terms & Conditions
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            Shipping
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            Privacy & Security Policy
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            About Us
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            Terms of Service
          </ButtonBasicLink>
          <ButtonBasicLink type="footer" to="/account">
            Refund Policy
          </ButtonBasicLink>
        </Box>
      </ContainerLarge>
      <Typography
        sx={{
          textAlign: "right",
          margin: "0 1% 1% 0",
          fontSize: "0.75rem",
          fontWeight: "400",
        }}
      >
        © 2022, Marce Bikinis Powered by Velizaio
      </Typography>
    </Box>
  );
};

export default Footer;
