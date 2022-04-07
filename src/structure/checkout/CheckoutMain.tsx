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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import { Link as ButtonLink } from "react-router-dom";
import ButtonBasicClick from "../../utilityComponents/ButtonBasicClick";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import { useEffect } from "react";
import ButtonBasicLink from "../../utilityComponents/ButtonBasicLink";
import Payment from "./Payment";
import DeliveryOptions from "./DeliveryOptions";

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

type CheckOutMainProps = {
  sx?: SxProps<Theme>;
};

// let stripePromise;
// // Stripe integration
// // The publishable key is fetched from the server
// (async () => {
//   const stripePK = await fetch(`${process.env.REACT_APP_SERVER_URL}/stripePK`);
//   stripePromise = loadStripe(await stripePK.json());
// })();
// // Stripe integration end

// Component
const CheckOutMain: React.FC<CheckOutMainProps> = ({ sx }) => {
  const getDataFromStorage: () => EmailFormData = () => {
    const storageData = localStorage.getItem("userAddress");
    return storageData ? JSON.parse(storageData) : defaultFormData;
  };

  // const userContext = useContext(UserContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(getDataFromStorage());
  const [stripePromise, setStripePromise] =
    React.useState<Promise<Stripe | null> | null>(null);

  // NOTE: Use subscribe
  const [subscribe, setSubscribe] = React.useState(true);

  const subscribeHandler = () => {
    setSubscribe((subscribe) => !subscribe);
  };

  useEffect(() => {
    formData && setActiveStep(1);
  }, [formData]);

  useEffect(() => {
    (async () => {
      const data = await fetch(`${process.env.REACT_APP_SERVER_URL}/stripePK`);
      const stripePK = await data.json();
      const stripePKPromise = loadStripe(stripePK);
      setStripePromise(stripePKPromise);
    })();
  }, []);

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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!stripe || !elements) return;

    // const cardElement = elements.getElement(CardElement);

    // // confirm payment, redirect checkout, etc.

    // // Refer to card element
  };

  return (
    <Elements stripe={stripePromise}>
      <ContainerLarge styles={{ ...sx }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          sx={{ width: "100%" }}
        >
          <Step key="contact information" expanded>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <StepLabel>
                <Typography className={styles.stepLabel}>
                  Your contact info
                </Typography>
              </StepLabel>
              <ButtonBasicClick type="body" onClick={() => setActiveStep(0)}>
                Edit
              </ButtonBasicClick>
            </Box>
            <StepContent>
              <EmailForm
                subscribeHandler={subscribeHandler}
                formData={formData}
                formDataHandler={formDataHandler}
                handleNext={handleNext}
                activeStep={activeStep}
              ></EmailForm>
            </StepContent>
          </Step>
          <Step key="Delivery method" expanded>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <StepLabel>
                <Typography className={styles.stepLabel}>
                  Delivery options
                </Typography>
              </StepLabel>
              <ButtonBasicClick type="body" onClick={() => setActiveStep(1)}>
                Edit
              </ButtonBasicClick>
            </Box>
            <StepContent>
              <DeliveryOptions
                handleNext={handleNext}
                activeStep={activeStep}
              />
            </StepContent>
          </Step>
          <Step key="Payment" expanded>
            <StepLabel>
              <Typography className={styles.stepLabel}>Payment</Typography>
            </StepLabel>
            <StepContent>{stripePromise && <Payment />}</StepContent>
          </Step>
        </Stepper>
      </ContainerLarge>
    </Elements>
  );
};

export default CheckOutMain;
