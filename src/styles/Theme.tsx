import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),

    body1: {
      fontFamily: ["Lora", "sans-serif"].join(","),
    },
    body2: {
      fontFamily: ["Lora", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "2rem",
    },
  },

  palette: {
    primary: {
      main: "#b9a04d",
    },
    secondary: {
      main: "#317F57",
    },
  },
});

// body {
//   font-family: 'Lora', serif;
//  }

//  h1, h2, h3, h4, h5, h6 {
//   font-family: 'Montserrat', sans-serif;
//   font-weight: 300;
//   text-transform: uppercase;
//  }
