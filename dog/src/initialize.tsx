import { createTheme } from "@material-ui/core/styles";
import { createMedia } from "@artsy/fresnel";

export const MuiTheme = createTheme({
  typography: {
    fontFamily: `"Rubik" ,"Manrope", sans-serif`,
    h1: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "96px",
      lineHeight: "116px",
      letterSpacing: "-1.5px",
    },
    h3: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "50px",
      lineHeight: "56px",
    },
    h4: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "44px",
    },
    h5: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    body1: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: "0.5px",
    },
    body2: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0.25px",
    },
    subtitle1: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontFamily: "Rubik",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0.1px",
    },
    caption: {
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
  },
  palette: {
    primary: {
      main: "#01A652",
    },
    secondary: {
      main: "#F4F7F5",
    },
  },
});

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1000,
    lg: 12000,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
