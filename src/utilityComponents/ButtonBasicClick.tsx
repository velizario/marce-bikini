// Requred attributes:
// "type": body | footer | bodySmall
// "onClick": () => void;

import { Button, SxProps, Theme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as ButtonLink } from "react-router-dom";
import styles from "./ButtonBasic.module.css";

type ButtonBasicClickProps = {
  //   name: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
  type: string;
};

const ButtonBasicClick: React.FC<ButtonBasicClickProps> = ({
  onClick,
  children,
  sx,
  type,
}) => {
  return (
    <Typography
      className={styles[type]}
      onClick={onClick}
      component="a"
      // component={MuiLink}
      sx={{ ...sx }}
    >
      {children}
    </Typography>
  );
};

export default ButtonBasicClick;
