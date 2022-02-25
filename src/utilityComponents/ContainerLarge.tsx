import React from "react";
import { Container, SxProps, Theme } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
  styles?: SxProps<Theme>;
};

const ContainerLarge: React.FC<ContainerProps> = ({ children, styles }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        margin: "0 auto",
        maxWidth: "1200px",
        width: "100%",
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
