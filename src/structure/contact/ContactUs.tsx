import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, InputLabel, TextareaAutosize, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import styles from "./ContactUs.module.css"
import CustomButton from "../../utilityComponents/CustomButton";
import { requestToAPI } from "../../model/helperFunctions";
import { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

let schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Please enter a valid email").required("Please enter valid email"),
  message: yup.string().min(10, "Please enter a message with at least 10 characters").required("Please enter a message")
})

const ContactUs = () => {

const [mailSentFlag, setMailSentFlag] = useState(false);

const {
  register,
  handleSubmit,
  reset,
  formState: {errors},
} = useForm<ContactForm>({
  resolver: yupResolver(schema),
})


const submitFormHandler = async (data: ContactForm) => {

  setMailSentFlag(true);
  (document.querySelector("#email")! as HTMLInputElement).readOnly =
    true;
  (document.querySelector("#message")! as HTMLInputElement).readOnly =
    true;
  (document.querySelector("#name")! as HTMLInputElement).readOnly =
    true;
  setTimeout(() => {
    setMailSentFlag(false);
    (
      document.querySelector("#email")! as HTMLInputElement
    ).readOnly = false;
    (
      document.querySelector("#message")! as HTMLInputElement
    ).readOnly = false;
    (
      document.querySelector("#name")! as HTMLInputElement
    ).readOnly = false;
    reset();
  }, 5000);

  requestToAPI("mailSend", "POST", data);
}

  return (
    <HeaderFooter>
      <ContainerLarge>
        <Typography variant="h2" className={styles.contactHeader}> Let us know what you need</Typography>
        <form
          className={styles.contactForm}
          action=""
          onSubmit={handleSubmit(submitFormHandler)}>
          <Box gap={2} sx={{display: "flex", justifyContent: "space-between"}}>
            <Box className={styles.nameEmail}>
              <InputLabel htmlFor="name" className={styles.inputLabel}>
                Your name:
              </InputLabel>
              <TextField 
                id="name"
                variant="outlined"
                {...register("name")}
                placeholder="Your name..."
                className="nonLabeledInput"
                />
              <Typography variant="body1" className={styles.errorMessage}>
                {errors.name?.message}
              </Typography>
            </Box>    
            <Box className={styles.nameEmail}>
              <InputLabel htmlFor="email" className={styles.inputLabel}>Your email:</InputLabel>
              <TextField 
                id="email"
                variant="outlined"
                {...register("email")}
                placeholder="Your email..."
                className="nonLabeledInput"
              />
              <Typography variant="body1" className={styles.errorMessage}>
                {errors.email?.message}
              </Typography>
            </Box>
          </Box>
          <Box>
            <InputLabel htmlFor="message" className={styles.inputLabel}>Your message:</InputLabel>
            <TextareaAutosize 
              id="message"
              className={styles.messageArea}
              {...register("message")}
              placeholder="Your message..."
            />
            <Typography variant="body1" className={styles.errorMessage}>
              {errors.message?.message}
            </Typography>

            <Box
            sx={{
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {!mailSentFlag ? (null) : (
              <Typography
                component="p"
                variant="body1"
                className={styles.successMessage}>
                Thank you for your email! Our team will contact you soon!
              </Typography>
            )}
          </Box>
          </Box>

          <Button sx={{height: "3rem", width: "60%", minWidth: "2rem"}} type="submit" variant="contained" color="secondary" disabled={mailSentFlag ? true : false}>Send messsage</Button>
        
        </form>
      </ContainerLarge>
    </HeaderFooter>
  );
};

export default ContactUs;
