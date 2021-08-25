import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
