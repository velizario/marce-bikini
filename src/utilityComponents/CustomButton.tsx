import { Button, SxProps, Theme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as ButtonLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./CustomButtons.module.css";

type CustomButtonProps = {
  //   name: string;
  to?: string;
  variant?: "text" | "contained" | "outlined";
  sx?: SxProps<Theme>;
  onClick? : () => void;
  style?: string;
  color?: "primary" | "secondary";
  endIcon? : JSX.Element;
  type? : "button" | "submit" | "reset";
};

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  sx,
  variant,
  to,
  onClick,
  style,
  color,
  endIcon,
  type
}) => {

  const navigate = useNavigate();
  return (

    <Button
      variant = {variant || "contained"}
      onClick = {to ? () => {navigate(to)} : onClick}
      className={styles[style || ""]}
      color={color || "secondary"}
      endIcon={endIcon}
      type={type || "button"}
      sx={{...sx}}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
