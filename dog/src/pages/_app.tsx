import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'
import { SnackbarProvider } from 'contexts/snackbar'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { MuiTheme, createEmotionCache } from 'initialize'
import { SearchProvider } from 'contexts/search'
import { AuthProvider } from 'contexts/auth'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'styles/css/globals.css'
import 'styles/sass/index.sass'
import 'react-toastify/dist/ReactToastify.css'
import { TITLE } from 'configs/app'

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

const _ = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: Props): ReactElement => (
  <>
    <Head>
      <title>{TITLE.DEFAULT}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="shortcut icon" href="/img/logo.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
      <link rel="manifest" href="site.webmanifest" />
    </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={MuiTheme}>
        <AuthProvider>
          <SnackbarProvider>
            <SearchProvider>
              <CssBaseline />
              <Component {...pageProps} />
            </SearchProvider>
          </SnackbarProvider>
        </AuthProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          icon={false}
          newestOnTop={false}
          hideProgressBar
          closeButton={<></>}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </CacheProvider>
  </>
)

export default _
