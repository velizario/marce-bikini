import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./CheckoutMain.module.css";
import EmailForm, { EmailFormData } from "./EmailForm";
import { SelectChangeEvent } from "@mui/material";

export const defaultFormData = {
  email: "",
  country: "",
  firstName: "",
  lastName: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  postalCode: "",
};

export default function CheckOutMain() {
  const getDataFromStorage: () => EmailFormData = () => {
    const storageData = localStorage.getItem("userAddress");
    return storageData ? JSON.parse(storageData) : defaultFormData;
  };

  // const userContext = useContext(UserContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(getDataFromStorage());

  // NOTE: Use subscribe
  const [subscribe, setSubscribe] = React.useState(true);

  const subscribeHandler = () => {
    setSubscribe((subscribe) => !subscribe);
  };

  const formDataHandler = (
    data:
      | EmailFormData
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const newData =
      "target" in data
        ? { ...formData, [data.target.name]: data.target.value }
        : data;

    setFormData(newData);
    localStorage.setItem("userAddress", JSON.stringify(newData));
  };

  const handleNext = (data: EmailFormData) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "4rem", maxWidth: "40rem" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step key="Customer">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StepLabel>
              <h2>Contact Information</h2>
            </StepLabel>
            <Button
              color="secondary"
              className="buttonNoHover"
              size="small"
              onClick={() => setActiveStep(0)}
            >
              Edit
            </Button>
          </Box>
          <StepContent>
            <EmailForm
              subscribeHandler={subscribeHandler}
              formData={formData}
              formDataHandler={formDataHandler}
              handleNext={handleNext}
            ></EmailForm>
          </StepContent>
        </Step>
        <Step key="Shipping method">
          <StepLabel>
            <Typography className={styles.stepLabel}>
              Shipping Details
            </Typography>
          </StepLabel>
          <StepContent>
            <div>Next step</div>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
}
