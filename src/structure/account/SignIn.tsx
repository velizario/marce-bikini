import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateAccount.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { Link as ButtonLink, useLocation, useNavigate } from "react-router-dom";
import { createLoginUser } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";

export type SignInForm = {
  email: string;
  password: string;
};

let schema = yup.object().shape({
  email: yup.string().email().required("Please enter valid email"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is a required field"),
  // importance: yup.string(),
  // authorEmail: yup
  //   .string()
  //   .email("Field requires valid e-mail")
  //   .required("'Author e-mail' is a required field"),
});

type LocationState = {
  fromCheckout?: boolean;
};

const SignIn: React.FC = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: yupResolver(schema),
  });

  const context = useContext(UserContext);
  let location = useLocation();

  const checkingOut = location.state
    ? (location.state as LocationState).fromCheckout
    : false;

  const submitFormHandler = async (data: SignInForm) => {
    const loginAttempt = await createLoginUser(data, "login");
    if (loginAttempt.status === "success") {
      context.setIsLoggedIn(loginAttempt.data.user);
    }
    if (checkingOut) {
      navigate("/checkout");
    }
  };

  //   return <ContainerLarge>Cart Page</ContainerLarge>;
  return (
    <React.Fragment>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Sign In</h2>
        <form
          className={styles.form}
          action=""
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <TextField
            variant="outlined"
            className={styles.text}
            {...register("email")}
            label="e-mail address"
          />
          <p className={styles.errorMessage}>{errors.email?.message}</p>
          <TextField
            variant="outlined"
            className={styles.text}
            type="password"
            {...register("password")}
            label="Password"
          />
          <p className={styles.errorMessage}>
            {errors.password?.message || " "}
          </p>
          <Box className={styles.actionButtons}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Login
            </Button>
            <Button
              component={ButtonLink}
              to="/createaccount"
              variant="text"
              color="secondary"
            >
              Don't have an account?
            </Button>
          </Box>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignIn;