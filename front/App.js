import React from "react";
import store from "./state/store";
import { Provider } from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper'
import Main from "./Main";

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
      <Main />
      </PaperProvider>
    </Provider>
  );
};

export default App;
