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
});
