import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/poppins/400.css";
import "@fontsource/montserrat/700.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
require("dotenv").config();

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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
