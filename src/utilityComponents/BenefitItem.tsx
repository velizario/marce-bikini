import React from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { Benefit } from "../structure/homepage/Benefits";

type BenefitItemProps = {
  item: Benefit;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
};

const BenefitItem: React.FC<BenefitItemProps> = ({ item, children, sx }) => {
  return (
    <Box
      sx={{ display: "flex", columnGap: "1rem", alignItems: "center", ...sx }}
    >
      <Box>
        <img src={item.icon}></img>
      </Box>
      <Box>
        <Typography component="h6" variant="h6">
          {item.heading}
        </Typography>
        <Typography>{item.text}</Typography>
      </Box>
    </Box>
  );
};

export default BenefitItem;
