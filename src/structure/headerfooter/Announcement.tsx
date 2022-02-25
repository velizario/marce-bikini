import { Button, Container, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link as ButtonLink } from "react-router-dom";
import ContainerLarge from "../../utilityComponents/ContainerLarge";
import styles from "./Announcement.module.css";

const Announcement = () => {
  return (
    <ContainerLarge styles={{ maxWidth: "95%" }}>
      <Box className={styles.parentContainer}>
        <Typography variant="body2" sx={{ gridColumnStart: 2 }}>
          Free 2 day Delivery on orders €200+ / Take 30% on your first order{" "}
        </Typography>
        <Box sx={{ display: "flex", justifySelf: "end" }}>
          {/* Facebook button */}
          <Button
            disableRipple
            component={ButtonLink}
            to="/aboutus"
            variant="text"
            sx={{
              paddingBlock: 0,
              borderRadius: 0,
            }}
          >
            <SvgIcon sx={{ fontSize: "1rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M13.488 8.256v-3c0-0.84 0.672-1.488 1.488-1.488h1.488v-3.768h-2.976c-2.472 0-4.488 2.016-4.488 4.512v3.744h-3v3.744h3v12h4.512v-12h3l1.488-3.744h-4.512z"></path>
              </svg>
            </SvgIcon>
          </Button>
          {/* Instagram button */}
          <Button
            disableRipple
            component={ButtonLink}
            to="/aboutus"
            variant="text"
            sx={{
              paddingBlock: 0,
              borderRadius: 0,
            }}
          >
            <SvgIcon sx={{ fontSize: "1rem" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.512 0h-9.024c-4.128 0-7.488 3.36-7.488 7.488v9c0 4.152 3.36 7.512 7.488 7.512h9c4.152 0 7.512-3.36 7.512-7.488v-9.024c0-4.128-3.36-7.488-7.488-7.488zM21.744 16.512c0 2.904-2.352 5.256-5.256 5.256h-9c-2.904 0-5.256-2.352-5.256-5.256v-9.024c0-2.904 2.352-5.256 5.256-5.256h9c2.904 0 5.256 2.352 5.256 5.256v9.024zM12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zM12 15.744c-2.064 0-3.744-1.68-3.744-3.744s1.68-3.744 3.744-3.744 3.744 1.68 3.744 3.744c0 2.064-1.68 3.744-3.744 3.744zM19.248 5.544c0 0.437-0.355 0.792-0.792 0.792s-0.792-0.355-0.792-0.792c0-0.437 0.355-0.792 0.792-0.792s0.792 0.355 0.792 0.792z"></path>
              </svg>
            </SvgIcon>
          </Button>
        </Box>
      </Box>
    </ContainerLarge>
  );
};

export default Announcement;
