import React from "react";
import "tailwindcss/tailwind.css";
// import "../styles/css/global.css";
// import "../styles/sass/index.sass";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiTheme, MediaContextProvider } from "initialize";
import { AppProps } from "next/app";

export default function _({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });
  return (
    <MediaContextProvider>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </MediaContextProvider>
  );
}
