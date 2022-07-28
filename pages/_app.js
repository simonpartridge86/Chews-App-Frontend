import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import "../styles/globals.css";

const colors = {
  brand: {
    'primary-color': '#FD2B46',
    'light-color': '#FFFFFF',
    'dark-color': '#32373B',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
