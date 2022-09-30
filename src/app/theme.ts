import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%)",
      light: "linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%);",
    },
    secondary: {
      main: "#202122",
      contrastText: "#0645ad",
    },
  },
  typography: {
    h2: {
      fontSize: "1.8em",
      textAlign: "left",
      lineHeight: "1.3",
      fontFamily: `'Linux Libertine','Georgia','Times', serif`,
      borderBottom: `1px solid #a2a9b1`,
    },
    body1: {
      fontSize: "calc(1em * 0.875)",
      lineHeight: "1.6",
    },
  },
});
