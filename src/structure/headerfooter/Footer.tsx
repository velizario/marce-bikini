import { Box, Typography } from "@mui/material";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import CustomLink from "../../utilityComponents/CustomLink";

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
          <CustomLink style="footer" to="/account">
            Account
          </CustomLink>
          <CustomLink style="footer" to="/account">
            Terms & Conditions
          </CustomLink>
          <CustomLink style="footer" to="/account">
            Shipping
          </CustomLink>
          <CustomLink style="footer" to="/account">
            Privacy & Security Policy
          </CustomLink>
          <CustomLink style="footer" to="/account">
            About Us
          </CustomLink>
          <CustomLink style="footer" to="/account">
            Terms of Service
          </CustomLink>
          <CustomLink style="footer" to="/account">
            Refund Policy
          </CustomLink>
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
