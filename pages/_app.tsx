// import { ChakraProvider } from '@chakra-ui/react';
import { RGThemeProvider } from "@raidguild/design-system";
// import AppContextProvider from "../context/AppContext";
import { theme } from "../styles/theme";
import { Layout } from "../shared/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <AppContextProvider>
    <RGThemeProvider theme={theme}>
      {/* <ChakraProvider theme={theme}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </ChakraProvider> */}
    </RGThemeProvider>
    // </AppContextProvider>
  );
}

export default MyApp;
