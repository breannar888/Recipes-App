import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    primary: {
      main: "#A2C5AC",
      gray: "#D0D0D0",
    },
    secondary: {
      main: "#FFC700",
    },
    tertiary: defaultTheme.palette.augmentColor({
      color: { main: "#E38127" },
      name: "tertiary",
    }),
  },
  typography: {
    fontFamily: ['"Reem Kufi"', "sans-serif"].join(","),
    fontSize: 15,
  },
});

export default theme;
