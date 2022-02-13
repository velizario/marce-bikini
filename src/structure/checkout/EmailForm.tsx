import React, { useContext, useEffect } from "react";
import { Controller, FieldError, useForm, useWatch } from "react-hook-form";
import styles from "./EmailForm.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import InputField from "./InputField";

// import { createLoginUser } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";
import LoggedInUserInfo from "./LoggedInUserInfo";
import { defaultFormData } from "./CheckoutMain";

const menuItems = [
  "",
  "Albania",
  "Andorra",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Holy See",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Kosovo",
  "Latvia",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "San Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
];

export type CheckOutFormKeys =
  | "email"
  | "country"
  | "firstName"
  | "lastName"
  | "addressLine1"
  | "addressLine2"
  | "city"
  | "postalCode";

export type EmailFormData = Record<CheckOutFormKeys, string>;
console.log("test");
const emailLabelData: EmailFormData = {
  email: "Email",
  country: "Country",
  firstName: "First name",
  lastName: "Last name",
  addressLine1: "Address",
  addressLine2: "Appartment, suite, etc. (optional)",
  city: "City",
  postalCode: "Postal code",
};

const defaultValues: EmailFormData = {
  email: "",
  country: "",
  firstName: "Velizar",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postalCode: "",
};

const emailWidthSettings: EmailFormData = {
  email: "100%",
  country: "100%",
  firstName: "48%",
  lastName: "48%",
  addressLine1: "100%",
  addressLine2: "100%",
  city: "48%",
  postalCode: "48%",
};

type EmailFormProps = {
  // handleNext: (data: EmailFormData) => void;
  handleNext: (data: EmailFormData) => void;
  formDataHandler: (
    data:
      | EmailFormData
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  formData: EmailFormData;
  subscribeHandler: () => void;
  activeStep: number;
};

export const schema = yup.object().shape({
  email: yup.string().email().required("Please enter valid email"),
  country: yup.string().required("Please select a Country"),
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  addressLine1: yup.string().required("Please enter delivery address"),
  addressLine2: yup.string(),
  city: yup.string().required("Please enter a city"),
  postalCode: yup.string().required("Please enter a postal code"),
});

// COMPONENT
const EmailForm: React.FC<EmailFormProps> = ({
  handleNext,
  formDataHandler,
  formData,
  subscribeHandler,
  activeStep,
}) => {
  const userContext = useContext(UserContext);

  const {
    control,
    setValue,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<EmailFormData>({
    defaultValues: { ...formData },
    resolver: yupResolver(schema),
  });

  const submitFormHandler = async (data: EmailFormData) => {
    formDataHandler(data);
    handleNext(data);
  };

  useEffect(() => {
    userContext.isLoggedIn && setValue("email", userContext.isLoggedIn.email);
  }, [userContext.isLoggedIn]);

  const formDataArray = Object.entries(formData) as [
    CheckOutFormKeys,
    string
  ][];

  return activeStep > 0 ? (
    <Box
      sx={{
        background: "#f9fafa",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "1rem 5%",
        borderRadius: "0.4rem",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      {/* Email address  */}
      <Box sx={{ paddingBottom: "0.5rem" }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "0.8rem",
          }}
        >
          Email address: <br />
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>{formData.email}</Typography>
      </Box>

      <Box>
        <Typography sx={{ fontWeight: "600", fontSize: "0.8rem" }}>
          Delivery address:
          <br />
        </Typography>
        <Typography sx={{ fontSize: "0.8rem" }}>
          {formData.firstName} {formData.lastName}
          <br />
          {formData.addressLine1}
          <br />
          {formData.addressLine2}
          <br />
          {formData.city}, {formData.postalCode}
          <br />
          {formData.country}
        </Typography>
      </Box>
    </Box>
  ) : (
    <div className={styles.formContainer}>
      <form
        className={styles.form}
        action=""
        onSubmit={handleSubmit(submitFormHandler)}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {formDataArray.map(([key, value]) => (
            <React.Fragment key={key}>
              {key === "email" ? (
                userContext.isLoggedIn ? (
                  <Box>
                    <h5>Email Address</h5>
                    <LoggedInUserInfo userInfo={userContext.isLoggedIn} />
                  </Box>
                ) : (
                  <React.Fragment>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginBottom: "1rem",
                      }}
                    >
                      <h5>Email Address</h5>
                      <Typography className={styles.supplText}>
                        Already have an account?{" "}
                        <Link to="/account" state={{ fromCheckout: true }}>
                          Sign in now
                        </Link>
                      </Typography>
                    </Box>

                    <InputField
                      control={control}
                      error={errors[key]?.message}
                      name={key}
                      sx={{ position: "relative" }}
                      label={emailLabelData[key]}
                    >
                      <FormControlLabel
                        className={styles.supplText}
                        control={
                          <Checkbox
                            defaultChecked
                            size="small"
                            color="secondary"
                          />
                        }
                        label="Email me with news and offers"
                        onChange={subscribeHandler}
                        sx={{ position: "absolute", bottom: 0, right: 0 }}
                      />
                    </InputField>
                  </React.Fragment>
                )
              ) : key === "country" ? (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h5>Delivery address</h5>

                  <FormControl sx={{ width: "100%" }} size="small">
                    <InputLabel>Country</InputLabel>

                    <Controller
                      control={control}
                      name={key}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <Select
                          labelId="country"
                          id="country"
                          label="Country"
                          value={value}
                          onChange={onChange}
                        >
                          {menuItems.map((item) => (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <p className={styles.errorMessage}>
                    {errors.country?.message}
                  </p>
                </Box>
              ) : (
                <InputField
                  control={control}
                  error={errors[key]?.message}
                  name={key}
                  sx={{ width: emailWidthSettings[key] }}
                  // getValuesHandler={getValuesHandler}
                  // formDataHandler={formDataHandler}
                  // defaultValue={value}
                  // register={register}

                  // textFieldType={key}
                  label={emailLabelData[key]}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          endIcon={<NavigateNextIcon />}
        >
          To Delivery Options
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
