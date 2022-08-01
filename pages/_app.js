import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/layout";
import "../styles/globals.css";
//import "@fontsource/permanent-marker"
//import "@fontsource/nunito"


const colors = {
  brand: {
    primary: '#FD2B46',
    light: '#FFFFFF',
    dark: '#32373B',
  },
};

const fonts = ({
  brand: {
    logo: `'Permanent-Marker', sans-serif`,
    main: `'Nunito', sans-serif`,
  }
});

const theme = extendTheme({ colors, fonts });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
      </Layout> 
    </ChakraProvider>
   
  );
}
export default MyApp;
