import { createTheme } from "@mui/material";

const typography = {
  fontFamily:[
    "Kumbh Sans",
    "sans-serif",
    "Manrope",
    "sans-serif",
    "Nunito Sans",
    "sans-serif",
  ].join(","),
};

const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(0, 0%, 100%)",
    },
    secondary: {
      main: "hsl(0, 0%, 52%)",
    },
  },
  typography:{
    color:'hsl(200, 15%, 8%)', 
    ...typography
  },
  background:{
      default:'hsl(0, 0%, 98%)'
  }
});

const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(209, 23%, 22%)",
    },
    secondary: {
      main: "hsl(207, 26%, 17%)",
    },
  },
  typography:{
    color:'hsl(0, 0%, 100%)', 
    ...typography
  },
  background:{
      default:'hsl(207, 26%, 17%)'
  }
});

export { light, dark };
