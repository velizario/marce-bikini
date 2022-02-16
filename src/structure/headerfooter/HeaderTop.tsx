import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link as ButtonLink } from "react-router-dom";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <Box
      sx={{
        // background: "#222",
        // color: "#eee",
        // borderBottom: "0.5px solid rgba(0,0,0,0.2)",
        width: "100%",
        textAlign: "center",
        padding: "0.4rem 0",
      }}
      className={styles.headerTop}
    >
      <Box sx={{ gridColumnStart: 2 }}>
        <Typography variant="body2">
          Free 2 day Delivery on orders €200+ / Take 30% on your first order{" "}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "auto", whiteSpace: "nowrap" }}>
        <Button
          component={ButtonLink}
          to="/contactus"
          variant="text"
          sx={{ fontSize: "0.7rem" }}
        >
          Contact Us
        </Button>
        <Button
          component={ButtonLink}
          to="/aboutus"
          variant="text"
          sx={{ fontSize: "0.7rem" }}
        >
          Our mission
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderTop;
