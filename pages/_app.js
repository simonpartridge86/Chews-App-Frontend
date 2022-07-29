import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/nunito";
import "@fontsource/permanent-marker";

const colors = {
  brand: {
    primary: "#FD2B46",
    light: "#FFFFFF",
    dark: "#32373B",
  },
};

const fonts = ({
  brand: {
    logo: `'Permanent Marker', sans-serif`,
    main: `'Nunito', sans-serif`,
  }
});

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
