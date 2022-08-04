import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, InputLabel, TextareaAutosize, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import HeaderFooter from "../headerfooter/HeaderFooter";
import styles from "./ContactUs.module.css"
import CustomLink from "../../utilityComponents/CustomLink";
import CustomButton from "../../utilityComponents/CustomButton";
import { minHeight } from "@mui/system";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

let schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email().required("Please enter valid email"),
  message: yup.string().min(10, "Please enter message with at least 10 characters").required("Please enter a message")
})

const AboutUs = () => {

const {
  register,
  handleSubmit,
  formState: {errors},
} = useForm<ContactForm>({
  resolver: yupResolver(schema),
})


const submitFormHandler = async (data: ContactForm) => {
  console.log(data);
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
          </Box>
      
          <CustomButton sx={{height: "3rem", width: "60%", minWidth: "2rem"}} to="/">Send messsage</CustomButton>
        
        </form>
      </ContainerLarge>
    </HeaderFooter>
  );
};

export default AboutUs;
