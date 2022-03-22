import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ButtonBasicClick from "../../utilityComponents/ButtonBasicClick";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <ContainerLarge
      styles={{
        // background: "#fff8f8",
        marginBlock: "10rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "row",
          background: "#fff6f4",
          boxShadow: "0px 8px 34px 0px rgb(0 0 0 / 6%)",
        }}
      >
        <Box
          sx={{
            paddingInline: "3rem",
            paddingBlock: "1rem",
            flexBasis: "0",
            flexGrow: "1",
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{
              marginBottom: "1.5rem",
              fontSize: "2.8rem",
              fontWeight: "400",
              // fontFamily: "Bodoni Moda",
              // fontFamily: "Libre Caslon Display",
              // no - fontFamily: "Cormorant Garamond",
              // no - fontFamily: "Nanum Myeongjo",
              // no - fontFamily: "Taviraj",
            }}
          >
            GET NOTIFIED FIRST
          </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{
              marginBottom: "3rem",
              fontSize: "1.2rem",
            }}
          >
            Stay informed about our latest and greatest trends in our fashion
            lines!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "3%",
              alignItems: "center",
            }}
          >
            <TextField
              color="secondary"
              id="outlined-basic"
              variant="standard"
              label="Your email address"
              className={styles.inputField}
            />
            {/* <ButtonBasicClick onClick={() => {}} type="body">
          Subscribe{" "}
        </ButtonBasicClick> */}
            <Button
              className={styles.buttonSubscribe}
              variant="contained"
              color="secondary"
              onClick={() => {
                setSubscribed(true);
                setTimeout(() => {
                  setSubscribed(false);
                  // add other changes here
                }, 5000);
              }}
              // onClick={addToCartHandler}
            >
              Subscribe
            </Button>
          </Box>

          {!subscribed ? (
            <Typography
              component="p"
              variant="body1"
              className="noSpamMessage"
              sx={{
                color: "#666",
                fontSize: "0.7rem",
                marginTop: "3rem",
              }}
            >
              Don't worry, we won't spam :)
            </Typography>
          ) : (
            <Typography
              component="p"
              variant="body1"
              className={styles.successMessage}
              sx={{
                color: "green",
                fontSize: "0.7rem",
                fontWeight: "600",
                marginTop: "3rem",
              }}
            >
              Thank you for subscribing!
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            alignSelf: "stretch",
            height: "22rem",
            display: { xs: "none", md: "block" },
            flexBasis: "0",
            flexGrow: "1",
          }}
        >
          <img
            alt="hero"
            src={`${process.env.REACT_APP_BASE_URL}/images/woman-on-beach.jpg`}
            className={styles.image}
          ></img>
        </Box>
      </Box>
    </ContainerLarge>
  );
};

export default Subscribe;
