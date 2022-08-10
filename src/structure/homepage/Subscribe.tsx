import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
import { useState } from "react";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./Subscribe.module.css";
import { requestToAPI } from "../../model/helperFunctions";

type SubscribeForm = {
  email: string;
};

let schema = yup.object().shape({
  email: yup.string().email().required("Please enter valid email"),
});

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeForm>({
    resolver: yupResolver(schema),
  });

  const subscribeUser = async (data: SubscribeForm) => {
    setSubscribed(true);
    (document.querySelector("#subscriberEmail")! as HTMLInputElement).readOnly =
      true;
    setTimeout(() => {
      setSubscribed(false);
      (
        document.querySelector("#subscriberEmail")! as HTMLInputElement
      ).readOnly = false;
      reset();
    }, 5000);

    // Integration with Mailerlite

    const res = await requestToAPI(`subscribe`, "POST", data);
    return res;
  };

  return (
    <ContainerLarge
      styles={{
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

          >
            <form
              action=""
              onSubmit={handleSubmit(subscribeUser)}
              className={styles.subscribeForm}
            >
              <TextField
                color="secondary"
                id="subscriberEmail"
                variant="standard"
                label="Your email address"
                className={styles.inputField}
                {...register("email")}
                // onChange={(e) => setSubscriber(e.target.value)}
              />
              <Button
                className={styles.buttonSubscribe}
                variant="contained"
                color="secondary"
                type="submit"
              >
                Subscribe
              </Button>
              <Typography variant="body1" className={styles.errorMessage}>
                {errors.email?.message}
              </Typography>
            </form>
          </Box>
          <Box
            sx={{
              height: "1.5rem",
              display: "flex",
              marginTop: "3rem",
              alignItems: "center",
            }}
          >
            {!subscribed ? (
              <Typography
                component="p"
                variant="body1"
                className="noSpamMessage"
                sx={{
                  color: "#666",
                  fontSize: "0.7rem",
                }}
              >
                Don't worry, we won't spam :)
              </Typography>
            ) : (
              <Typography
                component="p"
                variant="body1"
                className={styles.successMessage}>
                Thank you for subscribing!
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            // alignSelf: "stretch",
            height: "100%",
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
