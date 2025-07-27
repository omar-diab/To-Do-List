import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff5252",
    },
    background: {
      default: "#000000",
    },
  },
  typography: {
    fontFamily: "'Times New Roman', Times, serif",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#cdcdcd",
    },
  },
  typography: {
    fontFamily: "'Times New Roman', Times, serif",
  },
});
