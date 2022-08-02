import { createTheme } from "@mui/material/styles";
import { NONAME } from "dns";

export const defaultTheme = createTheme({
  components: {

    // MuiCssBaseline: {
    //   styleOverrides: {
    //     fontFamily: ["GroteskRegular", "sans-serif"].join(","),
    //   },
    // },

    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "black",
            opacity: "0.3",
            letterSpacing: "0",
          },
          "&::focus-visible": {
            border: "none",
            boxShadow: "none",
            outline: "none"
          }
        },


        // root: {
        //   "& .MuiOutlinedInput-notchedOutline": {
        //     border: `1px solid lightgray`,
        //   },
        //   "&.Mui-focused": {
        //     "& .MuiOutlinedInput-notchedOutline": {
        //       border: `1px solid lightgray`,
        //     },
        //   },
        //   '&:hover': {
        //     "& .MuiOutlinedInput-notchedOutline": {
        //       border: `1px solid lightgray`,
        //     },
        //     // border: `1px solid lightgray`,

        //   },
        // },

      }
    },
  },

  typography: {
    fontFamily: ["GroteskRegular", "sans-serif"].join(","),
    // Arsenal as alternative
    body1: {
      // fontFamily: ["GroteskRegular", "sans-serif"].join(","),
      color: "#4f2c1d",
    // Arsenal as alternative
    },


    body2: {
      // fontFamily: ["GroteskRegular", "sans-serif"].join(","),
      color: "#4f2c1d",
    // Arsenal as alternative
    },
    h1: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
    },
    h2: {
      fontSize: "2rem",
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
    },
    h5: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
    },
    h6: {
      fontFamily: ["Playfair Display", "sans-serif"].join(","),
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
