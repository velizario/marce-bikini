import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../globalstate/UserContextProvider";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./AccountDetails.module.css";
import { userLogout } from "../../model/userModel";
import CustomButton from "../../utilityComponents/CustomButton";
const AccountDetails = () => {
  const context = useContext(UserContext);

  const userLogoutHandler = () => {
    userLogout();
    context.setIsLoggedIn(false);
  };
  return (
    <ContainerLarge>
      {context.isLoggedIn && (
        <Box className={styles.container}>
          <Typography component="h2" variant="h2">
            Your Account details
          </Typography>
          <div className={styles.group}>
            <Typography variant="body1" className={styles.title}>
              First Name:
            </Typography>
            <Typography variant="body1" className={styles.value}>
              {context.isLoggedIn.firstName}
            </Typography>
          </div>
          <div className={styles.group}>
            <Typography variant="body1" className={styles.title}>
              Last Name:
            </Typography>
            <Typography variant="body1" className={styles.value}>
              {context.isLoggedIn.lastName}
            </Typography>
          </div>
          <div className={styles.group}>
            <Typography variant="body1" className={styles.title}>
              Email:
            </Typography>
            <Typography variant="body1" className={styles.value}>
              {context.isLoggedIn.email}
            </Typography>
          </div>
          <CustomButton
            sx={{ marginTop: "2rem" }}
              // to="/cart"
            onClick={userLogoutHandler}
          >
            Logout
          </CustomButton>
        </Box>
      )}
    </ContainerLarge>
  );
};

export default AccountDetails;
