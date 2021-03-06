import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import theme from "../styles/theme";
import * as React from "react";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../utils/createEmotionCache";
import PropTypes from "prop-types";
import { AuthProvider } from "../contexts/AuthContext";
import AuthStateChanged from "../layout/AuthStateChanged";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <AuthProvider>
      <AuthStateChanged>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </AuthStateChanged>
    </AuthProvider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
