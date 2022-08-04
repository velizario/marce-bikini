import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateAccount.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { createLoginUser } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";
import { InputLabel, Typography } from "@mui/material";
import CustomLink from "../../utilityComponents/CustomLink";
import CustomButton from "../../utilityComponents/CustomButton";

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
        <Typography component="h2" variant="h2" className={styles.heading}>
          Sign In
        </Typography>
        <form
          className={styles.form}
          action=""
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <InputLabel htmlFor="email" className={styles.inputLabel}>E-mail address:</InputLabel>
          <TextField
            id="email"
            variant="outlined"
            {...register("email")}
            placeholder="e-mail address"
            className="nonLabeledInput"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.email?.message  || " "}
          </Typography>
          <InputLabel htmlFor="password" className={styles.inputLabel}>Password:</InputLabel>
          <TextField
            id="password"
            variant="outlined"
            type="password"
            {...register("password")}
            placeholder="Password"
            className="nonLabeledInput"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.password?.message || " "}
          </Typography>
          <Box className={styles.actionButtons}>
            <CustomButton
              type="submit"
              endIcon={<SendIcon />}
            >
              Login
            </CustomButton>
            <CustomLink
              to="/createaccount"
            >
              Don't have an account?
            </CustomLink>
          </Box>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
