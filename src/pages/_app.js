import "@/styles/globals.css";
import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
