import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import React from "react";
import "../styles/globals.css";

const colors = {
  brand: {
    primary: "#FD2B46",
    light: "#FFFFFF",
    dark: "#32373B",
  },
};

const fonts = {
  brand: {
    logo: `'Permanent-Marker', sans-serif`,
    main: `'Nunito', sans-serif`,
  },
};

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps, ...appProps }) {
  const isLayoutNotNeeded = [`/`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNotNeeded ? React.Fragment : Layout;

  return (
    <ChakraProvider theme={theme}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ChakraProvider>
  );
}
export default MyApp;
