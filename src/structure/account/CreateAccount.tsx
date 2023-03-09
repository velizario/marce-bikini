import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./CreateAccount.module.css";
import HeaderFooter from "../headerfooter/HeaderFooter";
import { zodResolver } from "@hookform/resolvers/zod"
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import { createLoginUser } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";
import { InputLabel, Typography } from "@mui/material";
import CustomButton from "../../utilityComponents/CustomButton";
import CustomLink from "../../utilityComponents/CustomLink";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

export type RegistrationForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

let validationSchema = z.object({
  firstName: z
    .string({ required_error: "Required field" })
    .min(2, { message: "Minimum allowed characters are 2" })
    .max(40, "Maximum allowed characters are 40"),
  lastName: z
    .string({ required_error: "Required field" })
    .max(40, "Maximum allowed characters are 40"),
  email: z
    .string({ required_error: "Required field" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Required field" })
    .min(8, "Password should be at least 8 characters long"),
  passwordConfirm: z.string({ required_error: "Required field" }),
}).refine((data) => data.password === data.passwordConfirm, {message: "Passwords don't match"});

const CreateAccount: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(validationSchema),
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
          <InputLabel htmlFor="firstName" className={styles.inputLabel}>
            First Name:
          </InputLabel>
          <TextField
            id="firstName"
            variant="outlined"
            className="nonLabeledInput"
            {...register("firstName")}
            placeholder="First Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.firstName?.message}
          </Typography>

          <InputLabel htmlFor="lastName" className={styles.inputLabel}>
            Last Name:
          </InputLabel>
          <TextField
            id="lastName"
            variant="outlined"
            className="nonLabeledInput"
            {...register("lastName")}
            placeholder="Last Name"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.lastName?.message}
          </Typography>

          <InputLabel htmlFor="email" className={styles.inputLabel}>
            E-mail address:
          </InputLabel>
          <TextField
            id="email"
            variant="outlined"
            className="nonLabeledInput"
            {...register("email")}
            placeholder="e-mail address"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.email?.message}
          </Typography>

          <InputLabel htmlFor="password" className={styles.inputLabel}>
            Password:
          </InputLabel>
          <TextField
            id="password"
            variant="outlined"
            className="nonLabeledInput"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.password?.message}
          </Typography>

          <InputLabel htmlFor="passwordConfirm" className={styles.inputLabel}>
            Confirm password:
          </InputLabel>
          <TextField
            id="passwordConfirm"
            variant="outlined"
            className="nonLabeledInput"
            type="password"
            {...register("passwordConfirm")}
            placeholder="Confirm password"
          />
          <Typography variant="body1" className={styles.errorMessage}>
            {errors.passwordConfirm && "Passwords should match"}
          </Typography>

          <Box className={styles.actionButtons}>
            <CustomButton type="submit" endIcon={<SendIcon />}>
              Create My Account
            </CustomButton>

            <CustomLink to="/account" type="submit">
              Already registered?
            </CustomLink>
          </Box>
        </form>
      </div>
    </HeaderFooter>
  );
};

export default CreateAccount;
