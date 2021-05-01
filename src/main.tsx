// eslint-disable-next-line no-use-before-define
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./configs/i18n";
import App from "./App";
import ErrorBoundary from "./pages/error";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
