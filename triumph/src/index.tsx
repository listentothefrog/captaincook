import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import { ToastProvider } from "react-toast-notifications";
require("dotenv").config();

// custom fonts
const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Kanit, sans-serif",
  },
});

export default theme;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ToastProvider>
          <App />
        </ToastProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
