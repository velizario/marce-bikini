import React from "react";
import { Container, SxProps, Theme } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
  styles?: SxProps<Theme>;
};

const ContainerLarge: React.FC<ContainerProps> = ({ children, styles }) => {
  return (
    <Container
      sx={{
        margin: "auto",
        width: "100%",
        maxWidth: "1400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...styles,
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerLarge;
