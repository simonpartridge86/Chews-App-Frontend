import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

// Custom colors and fonts added to Chakra UI theme
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
  // following ensures that Layout is not displayed on login page
  const isLayoutNotNeeded = [`/`].includes(appProps.router.pathname);
  const LayoutComponent = isLayoutNotNeeded ? React.Fragment : Layout;

  return (
    <ChakraProvider theme={theme}>
      <LayoutComponent>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </LayoutComponent>
    </ChakraProvider>
  );
}

export default MyApp;
