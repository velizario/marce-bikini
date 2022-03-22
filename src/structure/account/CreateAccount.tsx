import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateAccount.module.css";
import HeaderFooter from "../headerfooter/HeaderFooter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { Link as ButtonLink, useNavigate } from "react-router-dom";
import { createLoginUser } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";
import { Typography } from "@mui/material";

export type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

let schema = yup.object().shape({
  firstName: yup
    .string()
    .required("'First Name' is a required field")

    .min(2, "Minimum allowed characters: 2")
    .max(40, "Maximum allowed characters is 40"),

  lastName: yup
    .string()
    .max(40, `Maximum allowed characters is 40`)
    .required("'Last Name' is a required field"),

  email: yup
    .string()
    .email("Please enter valid email")
    .required("'E-mail' is a required field"),

  password: yup
    .string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is a required field"),

  passwordConfirm: yup.string().oneOf([yup.ref("password"), null]),
});

const CreateAccount: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: yupResolver(schema),
  });

  const context = useContext(UserContext);
  const navigate = useNavigate();

  const submitFormHandler = async (data: RegistrationForm) => {
    const createAttempt = await createLoginUser(data, "signup");
    if (createAttempt.message === "success") {
      context.setIsLoggedIn(createAttempt.data.user);
      navigate("/account");
    }
  };

  //   return <ContainerLarge>Cart Page</ContainerLarge>;
  return (
    <HeaderFooter>
      <div className={styles.formContainer}>
        <Typography component="h2" variant="h2" className={styles.heading}>
          Create Account
        </Typography>
        <form
          className={styles.form}
          action=""
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <TextField
            variant="outlined"
            className={styles.text}
            {...register("firstName")}
            label="First Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.firstName?.message}
          </Typography>
          <TextField
            variant="outlined"
            className={styles.text}
            {...register("lastName")}
            label="Last Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.lastName?.message}
          </Typography>
          <TextField
            variant="outlined"
            className={styles.text}
            {...register("email")}
            label="e-mail address"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.email?.message}
          </Typography>
          <TextField
            variant="outlined"
            className={styles.text}
            type="password"
            {...register("password")}
            label="Password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.password?.message}
          </Typography>
          <TextField
            variant="outlined"
            className={styles.text}
            type="password"
            {...register("passwordConfirm")}
            label="Confirm password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.passwordConfirm && "Passwords should match"}
          </Typography>

          <Box className={styles.actionButtons}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              endIcon={<SendIcon />}
            >
              Create My Account
            </Button>

            <Button
              component={ButtonLink}
              to="/account"
              variant="text"
              color="secondary"
              type="submit"
            >
              Already registered?
            </Button>
          </Box>
        </form>
      </div>
    </HeaderFooter>
  );
};

export default CreateAccount;
