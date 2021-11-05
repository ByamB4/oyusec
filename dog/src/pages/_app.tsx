import { ReactElement } from "react";
import "styles/css/globals.css";
import "styles/sass/index.sass";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "contexts/snackbar";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { MuiTheme, createEmotionCache } from "initialize";
import { APP_NAME } from "configs";
import { SearchProvider } from "contexts/search";
import { UserProvider } from "contexts/user";

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

const _ = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: Props): ReactElement => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{APP_NAME}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <UserProvider>
          <ThemeProvider theme={MuiTheme}>
            <SnackbarProvider>
              <SearchProvider>
                <CssBaseline />
                <Component {...pageProps} />
              </SearchProvider>
            </SnackbarProvider>
          </ThemeProvider>
        </UserProvider>
      </CacheProvider>
    </>
  );
};

export default _;
