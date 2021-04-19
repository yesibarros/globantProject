import React from "react";
import store from "./state/store";
import { Provider } from "react-redux";
import Main from "./Main";
import {IconButton, LogBox} from "react-native"
import { disableExpoCliLogging } from "expo/build/logs/Logs";

// disableExpoCliLogging()
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
