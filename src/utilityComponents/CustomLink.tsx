import { Button, SxProps, Theme, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { Link as ButtonLink } from "react-router-dom";
import styles from "./CustomButtons.module.css";
import { useNavigate } from "react-router-dom";

type CustomLink = {
  //   name: string;
  to?: string;
  from?: string;
  sx?: SxProps<Theme>;
  style? : string;
  onClick? : () => void;
  type? : string;

};

const CustomLink: React.FC<CustomLink> = ({
  children,
  to,
  sx,
  style,
  from,
  type,
  onClick
}) => {
  const navigate = useNavigate();

  const state = {} as any;
  if (from) state[from] = true;

  return (
    <Typography
    // component={ButtonLink}
    component = "a"
    onClick = {to ? () => {navigate(to, {state})} : onClick}
    className={styles[style || ""]}
    sx={{...sx}}
    type={type}
    >
      {children}
    </Typography>
  );
};

export default CustomLink;
