import { Button, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link as ButtonLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useContext } from "react";
import { CartContext } from "../../globalstate/CartContextProvider";
import { UserContext } from "../../globalstate/UserContextProvider";
import styles from "./HeaderTop.module.css";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import ButtonBasicLink from "../../utilityComponents/ButtonBasicLink";

const HeaderTop = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  return (
    <ContainerLarge
      styles={{
        // background: "#222",
        // color: "#eee",
        // borderBottom: "0.5px solid rgba(0,0,0,0.2)",
        maxWidth: "95%",
        textAlign: "center",
        display: "flex",
        padding: "0.4rem 0",
      }}
    >
      {/* Account link */}
      <Box>
        <ButtonBasicLink type="headerLink" to="/account">
          {userContext.isLoggedIn ? (
            `Welcome, ${userContext.isLoggedIn.firstName}`
          ) : (
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 18 19"
              >
                <path
                  // color="#b9a04d"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
                  fill="currentColor"
                ></path>
              </svg>
            </SvgIcon>
          )}
        </ButtonBasicLink>
        {/* Cart */}
        <Button component={ButtonLink} to="/cart" variant="text">
          <SvgIcon>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                // color="#b9a04d"
                d="M20.232 5.352c-0.024-0.528-0.456-0.912-0.936-0.912h-2.736c-0.12-2.448-2.112-4.392-4.56-4.392s-4.464 1.944-4.56 4.392h-2.712c-0.528 0-0.936 0.432-0.936 0.936l-0.648 16.464c-0.024 0.552 0.168 1.104 0.552 1.512s0.888 0.624 1.464 0.624h13.68c0.552 0 1.056-0.216 1.464-0.624 0.36-0.408 0.552-0.936 0.552-1.488l-0.624-16.512zM12 1.224c1.8 0 3.288 1.416 3.408 3.216l-6.816-0.024c0.12-1.776 1.608-3.192 3.408-3.192zM7.44 5.616v1.968c0 0.336 0.264 0.6 0.6 0.6s0.6-0.264 0.6-0.6v-1.968h6.792v1.968c0 0.336 0.264 0.6 0.6 0.6s0.6-0.264 0.6-0.6v-1.968h2.472l0.624 16.224c-0.024 0.24-0.12 0.48-0.288 0.648s-0.384 0.264-0.6 0.264h-13.68c-0.24 0-0.456-0.096-0.624-0.264s-0.24-0.384-0.216-0.624l0.624-16.248h2.496z"
              ></path>
            </svg>
          </SvgIcon>
          <Box className={styles.cartItemCount}>
            {cartContext.cartItems.length}
          </Box>
        </Button>
      </Box>
    </ContainerLarge>
  );
};

export default HeaderTop;
