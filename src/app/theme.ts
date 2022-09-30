import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#202122",
      light: "#f6f6f6",
      contrastText: "#0645ad",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `'Linux Libertine','Georgia','Times', serif`,
    },
    h2: {
      fontSize: "1.8em",
      textAlign: "left",
      lineHeight: "1.3",
      borderBottom: `1px solid #a2a9b1`,
    },
    button: {
      fontSize: "1.2em",
      lineHeight: "1.3",
    },
    body1: {
      fontSize: "calc(1em * 0.875)",
      lineHeight: "1.6",
    },
  },
});
