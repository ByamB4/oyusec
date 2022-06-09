import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Head from 'next/head'
import { SnackbarProvider } from 'contexts/snackbar'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { MuiTheme, createEmotionCache } from 'initialize'
import { APP_NAME } from 'configs'
import { SearchProvider } from 'contexts/search'
import { AuthProvider } from 'contexts/auth'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import 'styles/css/globals.css'
import 'styles/sass/index.sass'
import 'react-toastify/dist/ReactToastify.css'

const clientSideEmotionCache = createEmotionCache()

interface Props extends AppProps {
  emotionCache?: EmotionCache
}

const _ = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: Props): ReactElement => {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>{APP_NAME}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
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
}

export default _
