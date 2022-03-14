import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../styles/fonts";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
