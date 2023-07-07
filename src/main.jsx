import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { theme } from "./components/theme";
import "./mainstyle.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  //TODO add strict mode
  <Provider store={store}>
    <ChakraProvider resetCss={false} w="100%" theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
