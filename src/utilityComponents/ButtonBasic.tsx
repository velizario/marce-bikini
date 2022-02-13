import { Box, SxProps, Theme, Typography } from "@mui/material";
import styles from "./ButtonBasic.module.css";

type ButtonBasicProps = {
  //   name: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
};

const ButtonBasic: React.FC<ButtonBasicProps> = ({ onClick, children, sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <a onClick={onClick}>
        <Typography className={styles.button} variant="button">
          {children}
        </Typography>
      </a>
    </Box>
  );
};

export default ButtonBasic;
