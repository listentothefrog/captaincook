import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/poppins/400.css";
import "@fontsource/montserrat/700.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// custom fonts
const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Poppins",
  },
});

export default theme;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
