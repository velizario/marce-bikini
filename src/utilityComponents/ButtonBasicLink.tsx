import { Button, SxProps, Theme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as ButtonLink } from "react-router-dom";
import styles from "./ButtonBasic.module.css";

type ButtonBasicLinkProps = {
  //   name: string;
  to: string;
  type: string;
  state?: any;
  sx?: SxProps<Theme>;
};

const ButtonBasicLink: React.FC<ButtonBasicLinkProps> = ({
  children,
  to,
  state,
  sx,
  type,
}) => {
  return (
    <Typography
      className={styles[type]}
      state={state}
      component={ButtonLink}
      to={to}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default ButtonBasicLink;
