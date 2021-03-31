import React from "react";
import store from "./state/store";
import { Provider } from "react-redux";
import Main from './Main'


const App = () => {
  
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
