import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./CheckoutMain.module.css";
import { Avatar } from "@mui/material";
import { UserModel } from "../../globalstate/UserContextProvider";
import { userLogout } from "../../model/userModel";
import { UserContext } from "../../globalstate/UserContextProvider";
import CustomButton from "../../utilityComponents/CustomButton";

type LioggedInUserInfoProps = {
  userInfo: UserModel;
};

const LoggedInUserInfo: React.FC<LioggedInUserInfoProps> = ({ userInfo }) => {
  const userContext = React.useContext(UserContext);

  const logOutHandler = () => {
    userLogout();
    userContext.setIsLoggedIn(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <Avatar
        sx={{ marginRight: "0.5rem" }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <Typography className={styles.supplText}>
        {userInfo.email} ({userInfo.firstName} {userInfo.lastName})
        <br />
        <CustomButton
          onClick={logOutHandler}
          style="buttonNext"
          sx={{ fontSize: "0.8rem !important" }}
        >
          Log out
        </CustomButton>
      </Typography>
    </Box>
  );
};

export default LoggedInUserInfo;
