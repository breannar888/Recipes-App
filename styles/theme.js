import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A2C5AC",
    },
    secondary: {
      main: "#E38127",
    },
  },
  typography: {
    fontFamily: ['"Reem Kufi"', "sans-serif"].join(","),
    fontSize: 15,
  },
});

export default theme;
