import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./CheckoutMain.module.css";
import { EmailFormData } from "./EmailForm";

type DeliveryOptionsProps = {
  handleNext: (data: EmailFormData) => void;
  activeStep: number;
};

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({
  handleNext,
  activeStep,
}) => {
  return activeStep !== 1 ? (
    <Box
      sx={{
        borderRadius: "0.4rem",
        padding: "1rem 5%",

        border: "1px solid rgba(0,0,0,0.1)",
        background: "#f9fafa",
        marginBottom: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ textShadow: "0.02rem 0rem" }}>
          DHL Standard Delivery
        </Typography>
        <Typography sx={{ textShadow: "0.02rem 0rem" }}>€15.00</Typography>
      </Box>
      <Typography sx={{ color: "#545454" }}>3-5 business days</Typography>
    </Box>
  ) : (
    <FormControl
      sx={{
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Box
        sx={{
          borderRadius: "0.4rem",
          padding: "1rem 5%",

          border: "1px solid rgba(0,0,0,0.1)",
          background: "#f9fafa",
          marginBottom: "2rem",
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
                  <Typography sx={{ textShadow: "0.02rem 0rem" }}>
                    DHL Standard Delivery
                  </Typography>
                  <Typography sx={{ textShadow: "0.02rem 0rem" }}>
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
                  <Typography sx={{ textShadow: "0.02rem 0rem" }}>
                    DHL Express Delivery
                  </Typography>
                  <Typography sx={{ textShadow: "0.02rem 0rem" }}>
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
      </Box>
      <Box className={styles.buttonWrapper}>
        <Button variant="contained" className={styles.buttonNext} type="submit">
          Save
        </Button>
      </Box>
    </FormControl>
  );
};

export default DeliveryOptions;
