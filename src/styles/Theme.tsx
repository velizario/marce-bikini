import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      // main: "#b9a04d",
      main: "#000",
    },
    secondary: {
      main: "#317F57",
    },
  },

  // components: {

  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       fontFamily: ["GroteskRegular", "sans-serif"].join(","),
  //     },
  //   },

  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       input: {
  //         "&::placeholder": {
  //           opacity: "0.3",
  //           letterSpacing: "0",
  //         }
  //       },
  //       root: {
  //         "& .MuiOutlinedInput-notchedOutline": {
  //           border: `1px solid lightgray`,
  //         },
  //         "&.Mui-focused": {
  //           "& .MuiOutlinedInput-notchedOutline": {
  //             border: `1px solid lightgray`,
  //           },
  //         },
  //         '&:hover': {
  //           "& .MuiOutlinedInput-notchedOutline": {
  //             border: `1px solid lightgray`,
  //           },
  //           border: `1px solid lightgray`,

  //         },
  //       },

  //     }
  //   },
  // },


  typography: {
    fontFamily: ["GroteskRegular", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.7rem",
    },
    h4: {
      fontSize: "1.4rem",
    },
    h5: {
      fontSize: "1.1rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },

  // typography: {
  //   fontFamily: ["Arsenal", "sans-serif"].join(","),
  //   body1: {
  //     color: "#4f2c1d",
  //   },
  //   body2: {
  //     color: "#4f2c1d",
  //   },
  //   h1: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  //   h2: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  //   h3: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  //   h4: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  //   h5: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  //   h6: {
  //     fontFamily: ["Playfair Display", "sans-serif"].join(","),
  //   },
  // },


});

