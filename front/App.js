// REACT
import React from "react";

//REACT REDUX
import { Provider } from "react-redux";
import store from "./state/store";

// SCREENS
import Main from "./Main";

// EXPO
import { disableExpoCliLogging } from "expo/build/logs/Logs";

disableExpoCliLogging();
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
