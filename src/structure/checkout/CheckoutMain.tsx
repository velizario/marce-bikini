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
import ButtonBasic from "../../utilityComponents/ButtonBasic";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import { useEffect } from "react";

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

// Component
const CheckOutMain: React.FC<CheckOutMainProps> = ({ sx }) => {
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

  useEffect(() => {
    formData && setActiveStep(1);
  }, [formData]);

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
                Contact Information
              </Typography>
            </StepLabel>
            <ButtonBasic onClick={() => setActiveStep(0)}>Edit</ButtonBasic>
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
          <StepLabel>
            <Typography className={styles.stepLabel}>
              Delivery Options
            </Typography>
          </StepLabel>

          <StepContent>
            <FormControl
              sx={{
                boxSizing: "border-box",
                width: "100%",
                padding: "1rem 5%",
                borderRadius: "0.4rem",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "#f9fafa",
              }}
            >
              {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="delivery-options"
                defaultValue="dhl-standard"
                name="delivery-options"
              >
                <FormControlLabel
                  sx={{ paddingBottom: "1rem", width: "100%", margin: 0 }}
                  value="dhl-standard"
                  control={
                    <Radio
                      sx={{
                        paddingTop: 0,
                        paddingLeft: 0,
                        alignSelf: "flex-start",
                      }}
                    />
                  }
                  label={
                    <React.Fragment>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>DHL Standard Delivery</Typography>
                        <Typography sx={{ fontWeight: "500" }}>
                          €15.00
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#545454" }}>
                        3-5 business days
                      </Typography>
                    </React.Fragment>
                  }
                />
                <FormControlLabel
                  sx={{ paddingBottom: "1rem", width: "100%", margin: 0 }}
                  value="dhl-express"
                  control={
                    <Radio
                      sx={{
                        paddingTop: 0,
                        paddingLeft: 0,
                        alignSelf: "flex-start",
                      }}
                    />
                  }
                  label={
                    <React.Fragment>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>DHL Express Delivery</Typography>
                        <Typography sx={{ fontWeight: "500" }}>
                          €25.00
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#545454" }}>
                        10-14 business days
                      </Typography>
                    </React.Fragment>
                  }
                />
              </RadioGroup>
            </FormControl>
          </StepContent>
        </Step>
      </Stepper>
    </ContainerLarge>
  );
};

export default CheckOutMain;
