import React from "react";
import { Box, Container, SxProps, Theme } from "@mui/material";

type BenefitItemProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
};

const BenefitItem: React.FC<BenefitItemProps> = (children, sx) => {
  return <Box sx={...sx}></Box>;
};

export default BenefitItem;
