import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../globalstate/UserContextProvider";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./AccountDetails.module.css";
import { userLogout } from "../../model/userModel";
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
          <h2>Your Account details</h2>
          <div className={styles.group}>
            <p className={styles.title}>First Name:</p>
            <p className={styles.value}>{context.isLoggedIn.firstName}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.title}>Last Name:</p>
            <p className={styles.value}>{context.isLoggedIn.lastName}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.title}>Email:</p>
            <p className={styles.value}>{context.isLoggedIn.email}</p>
          </div>
          <Button
            //   component={ButtonLink}
            sx={{ marginTop: "2rem" }}
            //   to="/cart"
            color="secondary"
            variant="contained"
            onClick={userLogoutHandler}
          >
            Logout
          </Button>
        </Box>
      )}
    </ContainerLarge>
  );
};

export default AccountDetails;
