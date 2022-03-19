import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  typography: {
    fontFamily: ["Assistant", "sans-serif"].join(","),

    body1: {
      fontFamily: ["Assistant", "sans-serif"].join(","),
    },
    body2: {
      fontFamily: ["Assistant", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "2rem",
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
    h1: {
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Playfair Display SC", "sans-serif"].join(","),
    },
  },

  palette: {
    primary: {
      // main: "#b9a04d",
      main: "#000",
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
