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
import { InputLabel, Typography } from "@mui/material";
import CustomButton from "../../utilityComponents/CustomButton";
import CustomLink from "../../utilityComponents/CustomLink";

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

          <InputLabel htmlFor="firstName" className={styles.inputLabel}>First Name:</InputLabel>
          <TextField
            id="firstName"
            variant="outlined"
            className={styles.text}
            {...register("firstName")}
            placeholder="First Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.firstName?.message}
          </Typography>

          <InputLabel htmlFor="lastName" className={styles.inputLabel}>Last Name:</InputLabel>
          <TextField
            id="lastName"
            variant="outlined"
            className={styles.text}
            {...register("lastName")}
            placeholder="Last Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.lastName?.message}
          </Typography>

          <InputLabel htmlFor="email" className={styles.inputLabel}>E-mail address:</InputLabel>
          <TextField
            id="email"
            variant="outlined"
            className={styles.text}
            {...register("email")}
            placeholder="e-mail address"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.email?.message}
          </Typography>

          <InputLabel htmlFor="password" className={styles.inputLabel}>Password:</InputLabel>
          <TextField
            id="password"
            variant="outlined"
            className={styles.text}
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.password?.message}
          </Typography>

          <InputLabel htmlFor="passwordConfirm" className={styles.inputLabel}>Confirm password:</InputLabel>
          <TextField
            id="passwordConfirm"
            variant="outlined"
            className={styles.text}
            type="password"
            {...register("passwordConfirm")}
            placeholder="Confirm password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.passwordConfirm && "Passwords should match"}
          </Typography>

          <Box className={styles.actionButtons}>
            <CustomButton
              type="submit"
              endIcon={<SendIcon />}
            >
              Create My Account
            </CustomButton>

            <CustomLink
              to="/account"
              type="submit"
            >
              Already registered?
            </CustomLink>
          </Box>
        </form>
      </div>
    </HeaderFooter>
  );
};

export default CreateAccount;
