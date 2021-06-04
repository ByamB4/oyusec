import React from "react";
import "tailwindcss/tailwind.css";
import MainLayout from "../modules/layouts/MainLayout";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../initialize";
import "../sass/globals.sass";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}
